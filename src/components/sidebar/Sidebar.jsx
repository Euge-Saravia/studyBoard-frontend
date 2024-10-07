import "./sidebar.scss";
import GroupImage from "./boardImage/GroupImage";
import MainButton from "../buttons/mainButton/MainButton";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import FormModal from "../modals/formModal/FormModal";
import { createGroupSchema, createPostItSchema } from "../../hooks/validationSchemas";
import AlertModal from "../modals/alertModal/AlertModal";

const groupFields = [
    {
        fieldLabel: "Nombre de Grupo",
        fieldName: "groupTitle",
        fieldType: "text"
    },
    {
        fieldLabel: "Título del Board",
        fieldName: "boardTitle",
        fieldType: "text"
    },
]

const postItFields = [
    {
        fieldLabel: 'Título',
        fieldName: 'postItTitle',
        fieldType: 'text'
    },
    {
        fieldLabel: 'Contenido',
        fieldName: 'postItContent',
        fieldType: 'textarea'
    }
];


const Sidebar = ({ state, onClick, isOpen, toggleSidebar }) => {
    const navigation = useNavigate();

    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleOpenModal = () => {
        setIsModalOpen(true)
    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
    }

    const handleCreateGroup = () => {
        console.log("Grupo y board creados: ", formData)
        alert(`Grupo: ${formData.groupTitle}\nBoard: ${formData.boardTitle}`)
        handleCloseModal()
    }

    const handleCreatePostIt = () => {
        console.log("Post-it Creado: ", formData);
        alert(`Título: ${formData.Title}\nContenido: ${formData.Content}`);
        handleCloseModal();
    }

    const variantArrow = {
        open: { rotate: 180, x: 0 },
        closed: { rotate: 0, x: "-20%" },
    };

    const navigateToGroup = () => {
        navigation("/group")
    }

    return (
        <>
            <motion.aside
                className={`sidebar ${state} ${isOpen ? "sidebar" : "closed"}`}
                animate={{ width: isOpen ? "4.25rem" : "2rem" }}
                transition={{ duration: 0.2 }}
                layout
            >
                <motion.div
                    className="container"
                    animate={isOpen ? "open" : "closed"}
                    variants={{
                        open: {
                            display: "flex",
                            opacity: 1,
                            transition: { delay: 0.3 },
                        },
                        closed: { display: "none", opacity: 0 },
                    }}
                    transition={{ duration: 0.3 }}
                    layout="open"
                >
                    <div className="groups">
                        <GroupImage profileImage="assets/PRUEBA.jpeg" onClick={navigateToGroup}/>
                    </div>
                    <section className="bottom">
                        <MainButton color="accent" size="small" text="+" onClick={handleOpenModal} />
                        <div className="logo">
                            <div className="line"></div>
                            <Link to="/aboutus">
                                <img
                                    src="/logo/Icon-Variant2.svg"
                                    alt="studyboard logo"
                                />
                            </Link>
                        </div>
                    </section>
                </motion.div>

                <motion.button
                    className="circle"
                    animate={isOpen ? "open" : "closed"}
                    variants={{
                        open: { x: 0 },
                        closed: { x: "-140%" },
                    }}
                    transition={{ duration: 0.7 }}
                    onClick={toggleSidebar}
                    layout="position"
                >
                    <motion.div
                        className="arrow"
                        animate={isOpen ? "open" : "closed"}
                        variants={variantArrow}
                        transition={{ duration: 0.7 }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                            />
                        </svg>
                    </motion.div>
                </motion.button>
            </motion.aside>

            <FormModal onClose={handleCloseModal} onSubmit={handleCreateGroup} title="Crear nuevo grupo de estudio" fields={groupFields} validationSchema={createGroupSchema} submitButtonText="Crear Grupo" cancelButtonText="Cancelar" />

            <FormModal onClose={handleCloseModal} onSubmit={handleCreatePostIt} title="Crear nuevo Post-It" fields={postItFields} validationSchema={createPostItSchema} submitButtonText="Guardar" cancelButtonText="Cancelar" />

            <AlertModal isOpen={isModalOpen} onClose={handleCloseModal}/>
        </>
    );
};

export default Sidebar;
