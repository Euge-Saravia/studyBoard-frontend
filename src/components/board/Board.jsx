import { motion } from "framer-motion";
import BoardTag from "./boardTag/BoardTag";
import "./board.scss"
import PostItContainerBoard from "../postIt/postItContainerBoard/PostItContainerBoard";

const Board = ({ name, color, isOpen, toggleBoard, boardId }) => {
    console.log("boardId in Board:", boardId);
    return (
        <>
            <motion.div
                transition={{ layout: { duration: 1, type: "spring" } }}
                layout
                animate={isOpen ? "open" : "closed"}
                onClick={isOpen ? () => {} : toggleBoard}
                className={`board ${isOpen ? `open ${color}` : color}`}
            >
                <BoardTag name={name} isOpen={isOpen} onClick={toggleBoard}/>
                {isOpen && (
                    <motion.div
                        className="expand"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        <motion.div className="postits-exp">
                            <PostItContainerBoard boardId={boardId}/>
                        </motion.div>
                    </motion.div>
                    
                )}
            </motion.div>
        </>
    );
};

export default Board;
