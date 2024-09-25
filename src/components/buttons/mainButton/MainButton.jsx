import "./mainButton.scss"

const MainButton = ({ color, size, text, onClick, iconVisibility, iconButton, label }) => {
    return (
        <button className={`btn ${color} ${size}`} onClick={onClick}>
            {text}
            <img className={`img-btn-style ${iconVisibility}`} src={iconButton} alt={label} />
        </button>
    );
};
export default MainButton;