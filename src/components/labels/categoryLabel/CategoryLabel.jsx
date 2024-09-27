import "./categoryLabel.scss";

const CategoryLabel = ({category, color}) => {
  return (
    <div className={`label ${color}`}>
        <p>{category}</p>
    </div>
  )
}

export default CategoryLabel
