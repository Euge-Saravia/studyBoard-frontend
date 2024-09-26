import "./sidebar.scss";
import GroupImage from "./boardImage/GroupImage";
import MainButton from "../buttons/mainButton/MainButton";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Sidebar = ({ state, onClick, isOpen, toggleSidebar }) => {

    const variantArrow = {
        open: { rotate: 180, x: 0 },
        closed: { rotate: 0, x: "-20%" },
    };

    return (
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
                    <GroupImage profileImage="assets/PRUEBA.jpeg" />
                </div>
                <section className="bottom">
                    <MainButton color="accent" size="small" text="+" />
                    <div className="logo">
                        <div className="line"></div>
                        <Link to="/">
                            <img
                                src="./logo/Icon-Variant2.svg"
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
    );
};

export default Sidebar;
