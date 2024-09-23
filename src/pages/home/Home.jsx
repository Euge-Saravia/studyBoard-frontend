import React from "react";
import MainButton from "../../components/buttons/mainButton/MainButton";

const Home = () => {
    return (
        <div style={{display:'flex', flexDirection:'column', gap: '15px', paddingTop: '20px'}}>
            <MainButton text="Primario" onClick={() => alert("pulsado")} />
            <MainButton text="Secundario" color="secondary" onClick={() => alert("pulsado")} />
            <MainButton text="Acento" color="accent" onClick={() => alert("pulsado")} />
            <MainButton text="Gris" color="grey" onClick={() => alert("pulsado")} />
                
            <MainButton text="+" color="accent" size="small" onClick={() => alert("pulsado")} />
            <MainButton color="secondary" size="small" onClick={() => alert("pulsado")} />
        </div>
    );
};

export default Home;
