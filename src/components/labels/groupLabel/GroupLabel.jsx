import CategoryLabel from '../categoryLabel/CategoryLabel'
import './groupLabel.scss';

const GroupLabel = ({ categories = [] }) => {

  return (
    <section className="labels-container">
      <img src="assets/icons/Category.svg" alt="category icon" />
      <div className="list-labels">
        {categories.slice(0, 4).map((label, index) => (
          <CategoryLabel
            key={index}
            category={label.title}
            color={label.color} />
        ))}
      </div>

    </section>
  )
}

export default GroupLabel
