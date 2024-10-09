import GroupImage from "../../sidebar/boardImage/GroupImage";
import ViewSelector from "../../buttons/viewSelector/ViewSelector";
import "./groupNav.scss";

const GroupNav = ({onViewChange, onCLick}) => {
    return (
        <article className="group-nav">
            <section className="top-navigation">
                <div className="group-img">
                    <GroupImage onClick={onCLick} profileImage="" />
                </div>
                <ViewSelector onViewChange={onViewChange}/>
            </section>
            <div className="linebt"></div>
        </article>
    );
};

export default GroupNav;
