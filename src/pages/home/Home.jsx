import React from "react";
import SmallButton from "../../components/buttons/smallButton/SmallButton";

const Home = () => {
    return (
        <div style={{display:"flex", flexDirection:"column",gap:'15px', paddingTop:'20px'}}>
            <SmallButton text="Default" />
            <SmallButton type="variant2" text="variant2"/>
            <SmallButton type="variant3" text="variant3"/>
            <SmallButton type="disable" text="disable"/>
        </div>
    );
};

export default Home;
