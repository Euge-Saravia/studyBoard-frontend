import "./viewSelectorButton.scss";
const ViewSelectorButton = ({ page, isActive, onClick }) => {
    return (
        <button
            type="button"
            className={`btn ${isActive ? "active" : ""}`}
            aria-label={`Cambiar a vista ${page}`}
            title={`Cambiar a vista ${page}`}
            onClick={onClick}
        ></button>
    );
};

export default ViewSelectorButton;
