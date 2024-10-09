import { motion } from "framer-motion";
import BoardTag from "../boardTag/BoardTag";
import CreateBoardForm from "./createBoardForm/CreateBoardForm";
import "./createBoard.scss";

const CreateBoard = ({ isOpen, toggleBoard, onBoardCreated, id }) => {
    const onSubmit = (newBoardData) => {
        // post con data.name y color
        console.log("Nombre del board: " + newBoardData.title + " Color: " + newBoardData.color); //borrar
        onBoardCreated(newBoardData)
        toggleBoard();
        // hacer algo para que recarguen los boards
    };

    return (
        <>
            <motion.div
                transition={{ layout: { duration: 1, type: "spring" } }}
                layout
                animate={isOpen ? "open" : "closed"}
                onClick={isOpen ? () => {} : toggleBoard}
                className={`board create-board ${isOpen ? `open rose` : "rose"}`}
            >
                <BoardTag
                    name="Nuevo Board"
                    isOpen={isOpen}
                    addSymbol={true}
                    onClick={toggleBoard}
                />
                {isOpen && (
                    <motion.div
                        className="expand"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        <CreateBoardForm submitFunction={onSubmit} id={id} />
                    </motion.div>
                )}
            </motion.div>
        </>
    );
};

export default CreateBoard;
