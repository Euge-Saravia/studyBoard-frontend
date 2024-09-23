import PostIt from "../../components/board/postIt/PostIt";


const Home = () => {
    return (
        <div>
            <PostIt />
            <PostIt type="wheat"/>
            <PostIt type="green-brut"/>
            <PostIt type="perano"/>
        </div>
    );
};

export default Home;
