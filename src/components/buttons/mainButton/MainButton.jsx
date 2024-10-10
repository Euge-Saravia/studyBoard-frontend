import "./mainButton.scss";

const MainButton = ({ color, size, text, onClick, iconVisibility, iconButton = null, label, type = "button" }) => {
  return (
    <button type={type} className={`btn ${color} ${size}`} onClick={onClick}>
      {text}
      {iconButton && <img className={`img-btn-style ${iconVisibility}`} src={iconButton} alt={label} />}
    </button>
  );
};
export default MainButton;
