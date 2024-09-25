import "./sidebar.scss";
import GroupImage from './boardImage/GroupImage'
import MainButton from "../buttons/mainButton/MainButton";
import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { blockquote } from "framer-motion/client";


const Sidebar = ({ state, onClick }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    }

    const variants = {
        open: { rotate: 180, x:0 },
        closed: { rotate: 0, x: "-10%"},
    }

  return (
    <motion.aside 
        className={`sidebar ${state} ${isOpen ? "sidebar" : "closed"}`}
        animate={{ 
            width: isOpen ? "4.25rem" : "2rem"
        }}
        transition={{ duration: 0.2 }}
        layout="position"
    >

        <motion.div 
            className="groups"
            animate={isOpen ? "open" : "closed"}
            variants={{
                open: { display: "flex" },
                closed: { display: "none"},
            }}
            transition={{ duration: 0.3 }}
            layout="position"
        >
            <GroupImage profileImage="/assets/PRUEBA.jpeg" />
        </motion.div>

        <motion.button 
            className="circle"
            animate={isOpen ? "open" : "closed"}
            variants={{
                open: {x: 0},
                closed: {x: "-160%"},
            }}
            transition={{ duration: 0.9 }}
            onClick={toggleSidebar}
        >
            <motion.div 
                className="arrow"
                animate={isOpen ? "open" : "closed"}
                variants={variants}
                transition={{ duration: 0.1 }}
                >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"/>
                </svg>
            </motion.div>
        </motion.button>
        <motion.section 
            className="bottom"
            animate={isOpen ? "open" : "closed"}
            variants={{
            open: { display: "flex" },
            closed: { display: "none"},
        }}
            transition={{ duration: 0.3 }}
            layout="position"
            >
            <MainButton color="accent" size="small" text="+"/>
            <div className="logo">
                <div className="line"></div>
                <Link to="/">
                    <img src="./logo/Icon-Variant2.svg" alt="studyboard logo" />
                </Link>
            </div>


        </motion.section>
    </motion.aside>
  )
}

export default Sidebar
