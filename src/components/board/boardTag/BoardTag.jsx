import { motion } from "framer-motion";
import "./boardTag.scss"

const BoardTag = ({ name, isOpen, addSymbol, onClick }) => {

    const handleClick = (e) => {
        e.stopPropagation(); // Evita que el click dentro del icono se propague
        onClick(); // Ejecutamos la función que cierra o abre el board
    };


    return (
        <>
            <motion.button
                    layout="position"
                    whileTap={{ scale: 0.97 }}
                    className="title"
                    onClick={onClick}
                >
                    {name}
                    <motion.div
                        className="icon"
                        animate={isOpen ? "open" : "closed"}
                        variants={{
                            open: { rotate: 180 },
                            closed: { rotate: 0 },
                        }}
                        transition={{ duration: 0.2 }}
                        onClick={handleClick}
                    >
                        {addSymbol ? 
                        <img
                            src="./assets/icons/Add.svg"
                            alt="Añadir nuevo board"
                            className="add"
                            onClick={handleClick}
                        />
                        : 
                        <img
                            src="./assets/icons/Arrow down.svg"
                            alt={isOpen ? `cerrar board ${name}` : `abrir board ${name}`}
                        />}
                    </motion.div>
                </motion.button>
        </>
    );
};

export default BoardTag;
