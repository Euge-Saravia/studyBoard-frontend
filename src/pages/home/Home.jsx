import "./home.scss";
import ComponentGroupCards from "../../components/group/componentGroupCards/ComponentGroupCards"
import Input from "../../components/inputs/Input";
/* import LoadingModal from "../../components/modals/loadingModal/LoadingModal";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; */

const Home = () => {
/*     const navigate = useNavigate();

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading()
    })

    const navigateGroup = () => {
        navigate("/group")
    } */

        const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhbnRvw7FpdG9AZW1haWwuY29tIiwiaWF0IjoxNzI4MjQxNDExLCJleHAiOjE3MjgzMjc4MTF9.os46xp8gKKR4mSJto7dyiY3ocvVZ_zWKHb_wjbYn4Po"
        const date = new Date();
                    date.setTime(date.getTime() + 24 * 60 * 60 * 1000); 
                    let expires = "expires=" + date.toUTCString();
                    document.cookie = `authToken=${token}; ${expires}; path=/`;

    return (
        <div className="home-container">
            <section className="cont-wrap">
                {/* <LoadingModal isOpen={loading} /> */}
                <div className="search-container">
                    <Input type="text" border="border" icon="assets/icons/Search.svg" placeholder="Búsqueda" />
                </div>
                <div className="groups-cont">
                    <ComponentGroupCards/>
                </div>
            </section>
        </div>
    );
};

export default Home;
