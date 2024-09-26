import CategoryLabel from '../categoryLabel/CategoryLabel'
import './groupLabel.scss';

const GroupLabel = ( { categories = [] } ) => {

  return (
    <section className="labels-container">
        <img src="assets/icons/Category.svg" alt="category icon" />
        <div className="list-labels">
            {categories.map((label, index) => (
                <CategoryLabel 
                    key={index} 
                    category={label.category} 
                    color={label.color}/> 
            ))}   
        </div>
       
    </section>
  )
}

export default GroupLabel
