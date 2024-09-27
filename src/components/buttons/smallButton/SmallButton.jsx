import "./smallButton.scss"

const SmallButton = ({ type, text }) => {
    return (

        <button className={`small-btn ${type}`}>
            {text}
        </button>
    )
}

export default SmallButton