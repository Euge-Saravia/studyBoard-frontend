import "./mainButton.scss"

const MainButton = ({ color, size, text, onClick }) => {
    return (
        <button className={`btn ${color} ${size}`} onClick={onClick}>
            {text}
        </button>
    );
};

export default MainButton;
