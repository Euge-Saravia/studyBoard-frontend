
import "./home.scss";
import ComponentGroupCards from "../../components/group/componentGroupCards/ComponentGroupCards"
import Input from "../../components/inputs/Input";
import LoadingModal from "../../components/modals/loadingModal/LoadingModal";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading()
    })

    const navigateGroup = () => {
        navigate("/group")
    }

    return (
        <div className="home-container">
            <section className="cont-wrap">
                <LoadingModal isOpen={loading} />
                <div className="search-container">
                    <Input type="text" border="border" icon="assets/icons/Search.svg" placeholder="Búsqueda" />
                </div>
                <div className="groups-cont">
                    <ComponentGroupCards onClick={navigateGroup}/>
                </div>
            </section>
        </div>
    );
};

export default Home;
