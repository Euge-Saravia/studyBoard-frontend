import "./categoryLabel.scss";

const CategoryLabel = ({text, color}) => {
  return (
    <div className={`label ${color}`}>
        <p>{text}</p>
    </div>
  )
}

export default CategoryLabel
