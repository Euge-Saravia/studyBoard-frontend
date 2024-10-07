import { useState } from "react";
import "./boardTagsContainer.scss";
import Board from "../Board";
import CreateBoard from "../createBoard/CreateBoard";

const BoardTagsContainer = ({ isCreator, name }) => {
    /* Fetch con los boards del grupo */
    const boards = [
        {
            name: "Javascript",
            color: "perano",
        },
        {
            name: "React",
            color: "rose",
        },
        {
            name: "Tailwind",
            color: "wheat",
        },
        {
            name: "HTML",
            color: "green",
        },
    ];

    const [openCardIndex, setOpenCardIndex] = useState(null);

    const toggleBoard = (index) => {
        setOpenCardIndex(openCardIndex === index ? null : index);
    };

    return (
        <section className="boards">
            <h1>{name}Estudio de Java y Spring Boot</h1>
            <section className="tags">
                {isCreator && (
                    <CreateBoard
                        key={0}
                        isOpen={openCardIndex === 0}
                        toggleBoard={() => toggleBoard(0)}
                    />
                )}
                {boards.map((board, index) => (
                    <Board
                        key={index + 1}
                        color={board.color}
                        name={board.name}
                        isOpen={openCardIndex === index + 1}
                        toggleBoard={() => toggleBoard(index + 1)}
                    />
                ))}
            </section>
        </section>
    );
};

export default BoardTagsContainer;
