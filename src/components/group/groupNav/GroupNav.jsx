import GroupImage from "../../sidebar/boardImage/GroupImage";
import ViewSelector from "../../buttons/viewSelector/ViewSelector";
import "./groupNav.scss";

const GroupNav = ({onViewChange}) => {
    return (
        <section className="group-nav">
            <div className="top-navigation">
                <GroupImage onClick="" profileImage="" />
                <ViewSelector onViewChange={onViewChange}/>
            </div>
            <div className="linebt"></div>
        </section>
    );
};

export default GroupNav;
