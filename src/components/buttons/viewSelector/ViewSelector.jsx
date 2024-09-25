import ViewSelectorButton from "./viewSelectorButton/viewSelectorButton";
import "./viewSelector.scss";
import { useState } from "react";

const ViewSelector = ({ onViewChange }) => {
    const [activePage, setActivePage] = useState("Boards");

    const handleButtonClick = (page) => {
        setActivePage(page);
        onViewChange(page);
    };
    return (
        <div className="selectors">
            <ViewSelectorButton
                page="Boards"
                isActive={activePage === "Boards"}
                onClick={() => handleButtonClick("Boards")}
            />
            <ViewSelectorButton
                page="Calendar"
                isActive={activePage === "Calendar"}
                onClick={() => handleButtonClick("Calendar")}
            />
        </div>
    );
};

export default ViewSelector;
