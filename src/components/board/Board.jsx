import { motion } from "framer-motion";
import BoardTag from "./boardTag/BoardTag";
import "./board.scss"

const Board = ({ name, color, isOpen, toggleBoard }) => {

    return (
        <>
            <motion.div
                transition={{ layout: { duration: 1, type: "spring" } }}
                layout
                animate={isOpen ? "open" : "closed"}
                onClick={toggleBoard}
                className={`board ${isOpen ? `open ${color}` : color}`}
            >
                <BoardTag name={name} isOpen={isOpen}/>
                {isOpen && (
                    <motion.div
                        className="expand"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                    </motion.div>
                )}
            </motion.div>
        </>
    );
};

export default Board;
