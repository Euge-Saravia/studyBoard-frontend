import { useEffect, useState } from "react";
import CalendarComponent from "../../components/calendar/calendarComponent/CalendarComponent";
import GroupNav from "../../components/group/groupNav/GroupNav";
import BoardTagsContainer from "../../components/board/boardTagsContainer/BoardTagsContainer";
import "./group.scss";
import Board from "../../components/board/Board";

const Group = ({ name }) => {
    //comprobar si user actual es creador
    const isCreator = true;
    const [activeView, setActiveView] = useState("Boards");
    const location = useLocation();
    const id = location.state.data;
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);
    
    const handleViewChange = (view) => {
        if (view !== activeView) {
            setActiveView(view);
        }
    };

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth > 1024);
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [isDesktop]);

    const components = {
        'Boards' : <BoardTagsContainer key="boards" isCreator={isCreator} name={name} />,
        'Calendar': <CalendarComponent key="calendar" />,
    };


    return (
        <>
            <section>
                {!isDesktop && <>
                    <GroupNav onViewChange={handleViewChange} />
                    <section className={activeView}>
                        {components[activeView]}
                    </section>
                </>
                }
            </section>
            {isDesktop && 
                <section className="group-deskt">
                    <BoardTagsContainer key="boards" id={id}  />
                    <CalendarComponent key="calendar" />
                </section>
            }
          
        </>
    );
};

export default Group;