
import "./home.scss";
import ComponentGroupCards from "../../components/group/componentGroupCards/ComponentGroupCards"
import Input from "../../components/inputs/Input";

const Home = () => {

    return (
        <div>
        <div className="home-container">
            <section className="cont-wrap">
                 <div className="search-container">
                    <Input type="text" border="border" icon="assets/icons/Search.svg" placeholder="Búsqueda"/>
                </div>
                <div className="groups-cont">
                    <ComponentGroupCards />
                </div>
            </section>
        </div>
    );
};

export default Home;
