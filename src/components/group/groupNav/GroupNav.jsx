import ViewSelector from "../../buttons/viewSelector/ViewSelector";
import "./groupNav.scss";

const GroupNav = ({ onViewChange }) => {
    return (
        <article className="group-nav">
            <section className="top-navigation">
                <ViewSelector onViewChange={onViewChange}/>
            </section>
            <div className="linebt"></div>
        </article>
    );
};

export default GroupNav;