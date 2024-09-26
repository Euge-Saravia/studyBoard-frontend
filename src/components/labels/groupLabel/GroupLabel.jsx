import CategoryLabel from '../categoryLabel/CategoryLabel'
import './groupLabel.scss';

const GroupLabel = () => {
    const labels = [
        {
            text: "java",
            color: 'wheat'
        },
        {
            text: 'springboot',
            color: 'perano'
        },
        {
            text: 'jwt',
            color: 'green'
        },
        {
            text: 'Security',
            color: 'rose'
        },
    ];


  return (
    <section className="labels-container">
        <img src="assets/icons/Category.svg" alt="category icon" />
        <div className="list-labels">
            {labels.map(label => (
                <CategoryLabel text={label.text} color={label.color}/> 
            ))}   
        </div>
       
    </section>
  )
}

export default GroupLabel
