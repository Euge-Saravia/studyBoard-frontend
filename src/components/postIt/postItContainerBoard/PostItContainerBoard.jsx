import { useState } from "react";
import "./postItContainerBoard.scss";
import PostItExpand from "../postItExpand/PostItExpand";
import { AnimatePresence } from "framer-motion";
import PostIt from "../PostIt";
import ChoosePostIt from "../../buttons/choosePostIt/ChoosePostIt";
import { useAuth } from "../../../hooks/useAuth";
import useFetch from "../../../hooks/useFetch";
import useDelete from "../../../hooks/useDelete";
import DeleteModal from "../../modals/deleteModal/DeleteModal";

const PostItContainerBoard = ({ boardId }) => {
  const { authToken } = useAuth();
  const [selectedId, setSelectedId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [postitIdToDelete, setPostitIdToDelete] = useState(null);
  const { executeDelete } = useDelete(`/postits/${postitIdToDelete}`);
  const {
    data: postits,
    loading,
    error,
    fetch,
  } = useFetch(
    `/postits/board/${boardId}`,
    {
      headers: {
        "Content-Type": "application/json",
        ...(authToken ? { Authorization: `Bearer ${authToken}` } : {}),
      },
    },
    true
  );

  const selectedPostIt = postits?.find((postit) => postit.id === selectedId);

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
      fetch();
    }, 500);
  };

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
        {postits?.length > 0 ? (
          postits.map((postit, index) => (
            <PostIt
              layoutId={postit.id}
              key={index}
              type={postit.color}
              title={postit.title}
              text={postit.textContent}
              onClick={() => setSelectedId(postit.id)}
              onDelete={() => openDeleteModal(postit.id)}
            />
          ))
        ) : (
          <p>No hay post-its disponibles</p>
        )}
        {isModalOpen && <DeleteModal onOk={handleDelete} onCancel={handleCancel} />}
        <div className="create-postit-btn">
            <ChoosePostIt boardId={boardId} />
        </div>
      </div>
    </div>
  );
};

export default PostItContainerBoard;
