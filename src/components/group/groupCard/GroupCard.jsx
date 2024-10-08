import { useNavigate } from "react-router-dom";
import JoinButton from "../../buttons/joinButton/JoinButton"
import GroupLabel from "../../labels/groupLabel/GroupLabel"
import "./groupCard.scss"

const GroupCard = ({ groupId, title, categories}) => {
    const navigate = useNavigate();
	
	const handleRedirect = () => {
		navigate(`/group/${title}`, { state: { data: groupId} })

	}
  return (
    <div className="groupcard-container">
        <div className="title-icons">
            <h5 className="grouptitle" onClick={handleRedirect}>{title}</h5>
            <JoinButton />
        </div>
        <GroupLabel categories={categories}/>
    </div>
  )
}

export default GroupCard
