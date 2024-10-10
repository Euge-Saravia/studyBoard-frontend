import { useEffect, useState } from "react";
import { useAnimate, stagger, motion } from "framer-motion";
import ColorButtons from "../colorButtons/ColorButtons";
import MainButton from "../mainButton/MainButton";
import "./choosePostIt.scss";
import { useNavigate } from "react-router-dom";
import LoadingModal from "../../modals/loadingModal/LoadingModal";
import FormModal from "../../modals/formModal/FormModal";
import AlertModal from "../../modals/alertModal/AlertModal";
import usePost from "../../../hooks/usePost";
import { createPostItSchema } from "../../../hooks/validationSchemas";


const postitFields = [
  {
      fieldLabel: "Título del post-it",
      fieldName: "postitTitle",
      fieldType: "text"
  },
  {
      fieldLabel: "Cuerpo del post-it",
      fieldName: "textContent",
      fieldType: "textarea"
  },
]

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

const ChoosePostIt = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isErrorModalOpen, setErrorModalOpen] = useState(false);
  const { data, loading, error, excutePost} = usePost("/{boardId}")
  const [isOpen, setIsOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState("");
  const scope = useButtonAnimation(isOpen);

  const handleOpenModal = (color) => {
    if (!color) {
      console.error("Color is undefined");
      return
    }
    setSelectedColor(color);
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const handleCloseErrorModal = () => {
    setErrorModalOpen(false);
  }

  const handleCreatePostit = async(data) => {
    const body = {
      "title": data.positTitle,
      "color": selectedColor,
      "textContent": data.textContent
    };
    executePost(body);
    handleCloseModal();
  }



  return (
    <div className="choosePostItWrapper">
      <motion.div className="colorButtonsWrapper" ref={scope}>
        <motion.div className="colorButton">
          <ColorButtons 
            color="colorPostItRose" 
            onClick={() => handleOpenModal("colorPostItRose")} />
        </motion.div>
        <motion.div className="colorButton">
          <ColorButtons 
            color="colorPostItPerano" 
            onClick={() => handleOpenModal("colorPostItPerano")}/>
        </motion.div>
        <motion.div className="colorButton">
          <ColorButtons 
            color="colorPostItGreen" 
            onClick={() => handleOpenModal("colorPostItGreen")}/>
        </motion.div>
        <motion.div className="colorButton">
          <ColorButtons 
            color="colorPostItWheat" 
            onClick={() => handleOpenModal("colorPostItWheat")}/>
        </motion.div>
      </motion.div>

      <MainButton
        color="accent"
        size="small"
        text="+"
        onClick={() => setIsOpen(!isOpen)}
      />
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
      />
      <AlertModal 
        isOpen={isErrorModalOpen}  
        onClose={handleCloseErrorModal} 
        title="Error" 
        errorText="No se pudo crear el post-it"/> 
    </div>
  );
};

export default ChoosePostIt;
