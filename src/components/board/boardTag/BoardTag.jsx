import { motion } from "framer-motion";
import "./boardTag.scss"

const BoardTag = ({ name, isOpen }) => {
    return (
        <>
            <motion.button
                    layout="position"
                    whileTap={{ scale: 0.97 }}
                    className="title"
                >
                    {name}
                    <motion.div
                        className="arrow"
                        animate={isOpen ? "open" : "closed"}
                        variants={{
                            open: { rotate: 180 },
                            closed: { rotate: 0 },
                        }}
                        transition={{ duration: 0.2 }}
                    >
                        <img
                            src="./assets/icons/Arrow down.svg"
                            alt={isOpen ? "cerrar board" : "abrir board"}
                        />
                    </motion.div>
                </motion.button>
        </>
    );
};

export default BoardTag;
