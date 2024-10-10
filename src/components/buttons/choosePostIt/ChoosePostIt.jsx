import "./choosePostIt.scss";
import { useEffect, useState } from "react";
import { useAnimate, stagger, motion } from "framer-motion";
import { createPostItSchema } from "../../../hooks/validationSchemas";
import ColorButtons from "../colorButtons/ColorButtons";
import MainButton from "../mainButton/MainButton";
import LoadingModal from "../../modals/loadingModal/LoadingModal";
import FormModal from "../../modals/formModal/FormModal";
import AlertModal from "../../modals/alertModal/AlertModal";
import usePost from "../../../hooks/usePost";

const postitFields = [
  {
    fieldLabel: "Título del post-it",
    fieldName: "postitTitle",
    fieldType: "text",
  },
  {
    fieldLabel: "Cuerpo del post-it",
    fieldName: "textContent",
    fieldType: "textarea",
  },
];

const staggerButtons = stagger(0.1, { startDelay: 0.15 });

function useButtonAnimation(isOpen) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      ".colorButton",
      isOpen
        ? { opacity: 1, scale: 1, filter: "blur(0px)" }
        : { opacity: 0, scale: 0.3, filter: "blur(20px)" },
      {
        duration: 0.3,
        delay: isOpen ? staggerButtons : 0,
      }
    );
  }, [isOpen]);

  return scope;
}

const ChoosePostIt = ({ boardId }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isErrorModalOpen, setErrorModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState("");
  const [buttonText, setButtonText] = useState("+");
  const scope = useButtonAnimation(isOpen);
  const { loading, error, executePost } = usePost(`/postits/${boardId}`);

  const handleOpenModal = (color) => {
    if (!color) {
      console.error("Color is undefined");
      return;
    }
    setSelectedColor(color);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleCloseErrorModal = () => {
    setErrorModalOpen(false);
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
    setButtonText(isOpen ? "+" : "-");
  };

  const handleCreatePostit = (postit) => {
    const today = new Date().toISOString().split("T")[0];

    const body = {
      title: postit.postitTitle,
      color: selectedColor,
      textContent: postit.textContent,
      date: today,
    };
    executePost(body);
  };

  useEffect(() => {
    if (error) {
      setErrorModalOpen(true);
    }
  }, [error]);

  return (
    <div className="choosePostItWrapper">
      <motion.div className="colorButtonsWrapper" ref={scope}>
        <motion.div className="colorButton">
          <ColorButtons color="rose" onClick={() => handleOpenModal("rose")} />
        </motion.div>
        <motion.div className="colorButton">
          <ColorButtons
            color="perano"
            onClick={() => handleOpenModal("perano")}
          />
        </motion.div>
        <motion.div className="colorButton">
          <ColorButtons
            color="green"
            onClick={() => handleOpenModal("green")}
          />
        </motion.div>
        <motion.div className="colorButton">
          <ColorButtons
            color="wheat"
            onClick={() => handleOpenModal("wheat")}
          />
        </motion.div>
      </motion.div>

      <MainButton
        color="accent"
        size="small"
        text={buttonText}
        onClick={handleClick}
      />

      <div className="modals-create-pt">
        <LoadingModal isOpen={loading} />
        <FormModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          validationSchema={createPostItSchema}
          onSubmit={handleCreatePostit}
          title="Crear nuevo post-it"
          fields={postitFields}
          submitButtonText="Crear post-it"
          cancelButtonText="Cancelar"
          color={selectedColor}
        />
        <AlertModal
          isOpen={isErrorModalOpen}
          onClose={handleCloseErrorModal}
          title="Error"
          errorText="No se pudo crear el post-it"
        />
      </div>
    </div>
  );
};

export default ChoosePostIt;
