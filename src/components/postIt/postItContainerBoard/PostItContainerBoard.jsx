import React, { useState } from "react";
import "./postItContainerBoard.scss";
import PostItExpand from "../postItExpand/PostItExpand";
import { AnimatePresence } from "framer-motion";
import PostIt from "../PostIt";
import ChoosePostIt from "../../buttons/choosePostIt/ChoosePostIt";
import { useAuth } from "../../../hooks/useAuth";
import useFetch from "../../../hooks/useFetch";
//import { READ_POST_IT_BY_BOARD } from "../../../../config";

const PostItContainerBoard = ({ boardId }) => {
  const [selectedId, setSelectedId] = useState(null);
  const { authToken } = useAuth();

  const {
    data: postits,
    loading,
    error,
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

  console.log("postit", postits);

  const selectedPostIt = postits?.find((postit) => postit.id === selectedId);

  if (loading) return <p>Cargando post-its...</p>;
  if (error) return <p>Error al cargar los post-its: {error}</p>;

  return (
    <div className="postit-sect">
      <div className="expanded-postit">
        <AnimatePresence>
          {selectedId && selectedPostIt && (
            <PostItExpand
              layoutId={selectedId}
              type={selectedPostIt.type}
              title={selectedPostIt.title}
              text={selectedPostIt.text}
              onClick={() => setSelectedId(null)}
            />
          )}
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
            />
          ))
        ) : (
          <p>No hay post-its disponibles</p>
        )}
      </div>
      <div>
        <ChoosePostIt boardId={boardId} />
      </div>
    </div>
  );
};

export default PostItContainerBoard;
