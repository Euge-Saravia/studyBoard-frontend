import GroupCard from "../groupCard/GroupCard"
import "./componentGroupCards.scss"

const ComponentGroupCards = () => {
    const groups = [
        {
            title: "Estudio de Java y Springboot",
            categories: [
                {category: "java", color: 'wheat'},
                {category: 'springboot', color: 'perano'}
            ]
        },
        {
            title: "JavaScript y React",
            categories: [
                {category: "javascript", color: 'green'},
                {category: 'arrays', color: 'perano'},
                {category: "ES6", color: 'rose'},
                {category: 'react', color: 'wheat'},
            ]
        },
        {
            title: "Estudio de Java y Springboot",
            categories: [
                {category: "java", color: 'wheat'},
                {category: 'springboot', color: 'perano'}
            ]
        },
        {
            title: "Arrays",
            categories: [
                {category: "javascript", color: 'green'},
                {category: 'arrays', color: 'perano'},
                {category: "Arr", color: 'rose'},
            ]
        },
        
    ]


  return (
    <div className="cardgroups-container">
        {groups.map((group, index) => (
            <GroupCard 
                key={index} 
                title={group.title} 
                categories={group.categories}
            />
        ))}
    </div>
  )
}

export default ComponentGroupCards
