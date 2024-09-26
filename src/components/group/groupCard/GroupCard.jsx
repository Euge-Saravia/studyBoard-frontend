import JoinButton from "../../buttons/joinButton/JoinButton"
import GroupLabel from "../../labels/groupLabel/GroupLabel"
import "./groupCard.scss"

const GroupCard = ({ title, categories}) => {
  return (
    <div className="groupcard-container">
        <div className="title-icons">
            <h5 className="grouptitle">{title}</h5>
            <JoinButton />
        </div>
        <GroupLabel categories={categories}/>
    </div>
  )
}

export default GroupCard
