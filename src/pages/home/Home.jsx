import "./home.scss";
import ComponentGroupCards from "../../components/group/componentGroupCards/ComponentGroupCards";
import Input from "../../components/inputs/Input";
import { useState } from "react";


const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="home-container">
      <section className="cont-wrap">
        {/* <LoadingModal isOpen={loading} /> */}
        <div className="search-container">
          <Input
            type="text"
            border="border"
            icon="assets/icons/Search.svg"
            placeholder="Búsqueda"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
        <div className="groups-cont">
          <ComponentGroupCards searchQuery={searchQuery} />
        </div>
      </section>
    </div>
  );
};

export default Home;
