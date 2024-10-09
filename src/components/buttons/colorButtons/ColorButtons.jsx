import "./colorButtons.scss";

const ColorButtons = ({color, onClick}) => {
  return (
      <button className={`colorButton ${color}`} onClick={onClick}></button>
  )
}

export default ColorButtons
