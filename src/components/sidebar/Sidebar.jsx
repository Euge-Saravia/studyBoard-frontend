import "./sidebar.scss";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { createGroupSchema } from "../../hooks/validationSchemas";
import usePost from "../../hooks/usePost";
import MainButton from "../buttons/mainButton/MainButton";
import FormModal from "../modals/formModal/FormModal";
import AlertModal from "../modals/alertModal/AlertModal";
import LoadingModal from "../modals/loadingModal/LoadingModal";
import { useAuth } from "../../hooks/useAuth";
import useFetch from "../../hooks/useFetch";
import GroupListSidebar from "../group/groupListSideBar/GroupListSidebar";
import { CREATE_GROUP, READ_BY_USER_GROUP } from "../../config";

const groupFields = [
    {
        fieldLabel: "Nombre de Grupo",
        fieldName: "groupTitle",
        fieldType: "text",
    },
    {
        fieldLabel: "Título del Board",
        fieldName: "boardTitle",
        fieldType: "text",
    },
];

const Sidebar = ({ state, isOpen, toggleSidebar }) => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isErrorModalOpen, setErrorModalOpen] = useState(false);
  const { authToken } = useAuth(); 
  const { data: fetchData, fetch: fetchGroups } = useFetch(
    READ_BY_USER_GROUP,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
    },
    false
  );
  const { data, loading, error, executePost } = usePost(CREATE_GROUP);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleCloseErrorModal = () => {
        setErrorModalOpen(false);
    };

    const handleCreateGroup = async (data) => {
        const body = {
            groupName: data.groupTitle,
            boards: [
                {
                    title: data.boardTitle,
                    color: "rose",
                },
            ],
        };
        executePost(body);
        handleCloseModal();
    };

    useEffect(() => {
        if (authToken) {
            fetchGroups();
        }
    }, [authToken]);

  const memberGroups = fetchData
    ? fetchData.filter((group) => group.isMember)
    : [];

    useEffect(() => {
        if (data) {
            navigate(`/group/${data.groupName}`, { state: { data: data.id } });
        }
    }, [data, navigate]);

    useEffect(() => {
        if (error) {
            setErrorModalOpen(true);
        }
    }, [error]);

    return (
        <>
            <motion.div
                className={`sidebar ${state} ${isOpen ? "sidebar" : "closed"}`}
                animate={{ width: isOpen ? "4.25rem" : "2rem" }}
                transition={{ duration: 0.3 }}
                layout
            >
                <motion.button
                        className="circle"
                        onClick={toggleSidebar}
                        layout="left"
                        transition={{ duration: 0.8 }}
                    >
                        <motion.div
                            className="arrow"
                            animate={isOpen ? "open" : "closed"}
                            variants={{
                                open: { rotate: 180, x: 0 },
                                closed: { rotate: 0, x: "-20%" },
                            }}
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
                        <GroupListSidebar groups={memberGroups} />
                    </div>
                    <section className="bottom">
                        <MainButton
                            color="accent"
                            size="small"
                            text="+"
                            onClick={handleOpenModal}
                        />
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
            </motion.div>
            <LoadingModal isOpen={loading} />
            <FormModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                onSubmit={handleCreateGroup}
                title="Crear nuevo grupo de estudio"
                fields={groupFields}
                validationSchema={createGroupSchema}
                submitButtonText="Crear Grupo"
                cancelButtonText="Cancelar"
            />

            <AlertModal
                isOpen={isErrorModalOpen}
                onClose={handleCloseErrorModal}
                title="Error"
                errorText="No se pudo crear el grupo"
            />
        </>
    );
};

export default Sidebar;
