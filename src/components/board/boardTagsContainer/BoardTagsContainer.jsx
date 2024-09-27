import { useState } from "react";
import "./boardTagsContainer.scss";
import Board from "../Board";
import CreateBoard from "../createBoard/CreateBoard";


const BoardTagsContainer = ({ isCreator }) => {
    /* Fetch con los boards del grupo */
    const boards = [
        {
            name: "Javascript",
            color: "blue",
        },
        {
            name: "React",
            color: "red",
        },
        {
            name: "Tailwind",
            color: "yellow",
        },
        {
            name: "HTML",
            color: "green",
        },
    ];

    const [openCardIndex, setOpenCardIndex] = useState(null);

    const toggleCard = (index) => {
        setOpenCardIndex(openCardIndex === index ? null : index);
    };

    return (
        <section className="tags">
            { isCreator &&
            <CreateBoard 
            key={0}
            isOpen={openCardIndex === 0}
            toggleCard={() => toggleCard(0)}
            />}
            {boards.map((board, index) => (
                <Board
                    key={index+1}
                    color={board.color}
                    name={board.name}
                    isOpen={openCardIndex === index+1}
                    toggleCard={() => toggleCard(index+1)}
                />
            ))}
        </section>
    );
};

export default BoardTagsContainer;
