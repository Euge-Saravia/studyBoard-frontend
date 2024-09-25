import "./colorButtons.scss";

const ColorButtons = ({color}) => {
  return (
      <button className={`colorButton ${color}`}></button>
  )
}

export default ColorButtons
