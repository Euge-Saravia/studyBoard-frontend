import "./smallButton.scss"

const SmallButton = ({ type = "button", text, onClick }) => {
    return (

        <button type={type} className={`small-btn ${type}`} onClick={onClick}>
            {text}
        </button>
    )
}

export default SmallButton