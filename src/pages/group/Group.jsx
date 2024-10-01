import { useState } from "react";
import CalendarComponent from "../../components/calendar/calendarComponent/CalendarComponent";
import GroupNav from "../../components/group/groupNav/GroupNav";
import BoardTagsContainer from "../../components/board/boardTagsContainer/BoardTagsContainer";
import "./group.scss";

const Group = ({ name }) => {
    //comprobar si user actual es creador
    const isCreator = true;
    const [activeView, setActiveView] = useState("Boards");

    const handleViewChange = (view) => {
        if (view !== activeView) {
            setActiveView(view);
        }
    };

    const components = {
        'Boards' : <BoardTagsContainer key="boards" isCreator={isCreator} name={name} />,
        'Calendar': <CalendarComponent key="calendar" />,
    };

    return (
        <>
        <GroupNav onViewChange={handleViewChange}/>
        <section className={activeView}>
            {components[activeView]} 
        </section>
        </>
    );
};

export default Group;
