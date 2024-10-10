import { useEffect, useState } from "react";
import "./postItContainerBoard.scss";
import PostItExpand from "../postItExpand/PostItExpand";
import { AnimatePresence } from "framer-motion";
import PostIt from "../PostIt";
import ChoosePostIt from "../../buttons/choosePostIt/ChoosePostIt";
import { useAuth } from "../../../hooks/useAuth";
import useFetch from "../../../hooks/useFetch";
import useDelete from "../../../hooks/useDelete";
import DeleteModal from "../../modals/deleteModal/DeleteModal";
import { READ_POST_IT_BY_BOARD } from "../../../config";

const PostItContainerBoard = ({ boardId }) => {
  const { authToken } = useAuth();
  const endpoint = READ_POST_IT_BY_BOARD.replace("${boardId}", boardId)
  const [selectedId, setSelectedId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [postitIdToDelete, setPostitIdToDelete] = useState(null);
  const [isCreator, setIsCreator] = useState(false);
  const [ postIt, setPostIt ] = useState([]);
  const { executeDelete } = useDelete(`/postits/${postitIdToDelete}`);

  const fetchOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      ...(authToken ? { Authorization: `Bearer ${authToken}` } : {}),
    },
  };
  
  const { data: postits, loading, error, fetch: fetchData,
  } = useFetch( endpoint, fetchOptions,false );

  useEffect(()=>{
    if (postits) {
      setIsCreator(postits.isCreator || false)
      setPostIt(postits)
    }
  }, [postits])

  useEffect(() => {
    if (boardId) {
      fetchData()
    }
  }, [boardId])

  const selectedPostIt = postIt?.find((postit) => postit.id === selectedId);

  const openDeleteModal = (id) => {
    setPostitIdToDelete(id);
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setPostitIdToDelete(null);
  };

  const handleDelete = () => {
    executeDelete();
    setIsModalOpen(false);
    setTimeout(() => {
      fetchData();
    }, 500);
  };

  const handlePostItCreated = () => {
    fetchData()
    console.log("Aqui el fetch");
    
  }

  if (loading) return <p>Cargando post-its...</p>;
  if (error) return <p>Error al cargar los post-its: {error}</p>;

  return (
    <div className="postit-sect">
      <div className="expanded-postit">
        <AnimatePresence>
          {selectedId && selectedPostIt && (
            <PostItExpand
              layoutId={selectedId}
              type={selectedPostIt.color}
              title={selectedPostIt.title}
              text={selectedPostIt.textContent}
              onClick={() => setSelectedId(null)}
              onDelete={() => openDeleteModal(selectedId)}
            />
          )}
          {isModalOpen && <DeleteModal onOk={handleDelete} onCancel={handleCancel} />}
        </AnimatePresence>
      </div>
      <div className="postit-cont">
        {Array.isArray(postIt) && postIt.length > 0 ? (
          postIt.map((postIt, index) => (
            <PostIt
              layoutId={postIt.id}
              key={index}
              type={postIt.color}
              title={postIt.title}
              text={postIt.textContent}
              onClick={() => setSelectedId(postIt.id)}
              onDelete={() => openDeleteModal(postIt.id)}
            />
          ))
        ) : (
          <p>No hay post-its disponibles</p>
        )}
        {isModalOpen && <DeleteModal onOk={handleDelete} onCancel={handleCancel} />}
      </div>
      <div>
        <ChoosePostIt boardId={boardId} onPostItCreated={handlePostItCreated}  />
      </div>
    </div>
  );
};

export default PostItContainerBoard;
