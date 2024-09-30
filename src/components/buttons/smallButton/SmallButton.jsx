import "./smallButton.scss"

const SmallButton = ({ type, text, onClick }) => {
    return (

        <button className={`small-btn ${type}`} onClick={onClick}>
            {text}
        </button>
    )
}

export default SmallButton