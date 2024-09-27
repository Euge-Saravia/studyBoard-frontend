import { motion } from "framer-motion";
import BoardTag from "../boardTag/BoardTag";
import CreateBoardForm from "./createBoardForm/CreateBoardForm";
import "./createBoard.scss";

const CreateBoard = ({ isOpen, toggleCard }) => {
    return (
        <>
            <motion.div
                transition={{ layout: { duration: 1, type: "spring" } }}
                layout
                animate={isOpen ? "open" : "closed"}
                onClick={toggleCard}
                className={`board ${isOpen ? `open red` : "red"}`}
            >
                <BoardTag name="Nuevo Board" isOpen={isOpen} addSymbol={true} />
                {isOpen && (
                    <motion.div
                        className="expand"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        <CreateBoardForm />
                    </motion.div>
                )}
            </motion.div>
        </>
    );
};

export default CreateBoard;
