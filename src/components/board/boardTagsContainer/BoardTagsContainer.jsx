import { useState } from "react";
import "./boardTagsContainer.scss";
import Board from "../Board";
const BoardTagsContainer = ({ groupId }) => {
    /* Fetch con los boards del grupo */
    const boards = [
        {
            name: "Javascript",
            color: "red",
        },
        {
            name: "React",
            color: "yellow",
        },
        {
            name: "Tailwind",
            color: "blue",
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
            {boards.map((board, index) => (
                <Board
                    key={index}
                    color={board.color}
                    name={board.name}
                    isOpen={openCardIndex === index}
                    toggleCard={() => toggleCard(index)}
                />
            ))}
        </section>
    );
};

export default BoardTagsContainer;
