import { useNavigate } from "react-router-dom";
import JoinButton from "../../buttons/joinButton/JoinButton";
import GroupLabel from "../../labels/groupLabel/GroupLabel";
import "./groupCard.scss";
import { useAuth } from "../../../hooks/useAuth";
import useFetch from "../../../hooks/useFetch";

const GroupCard = ({ groupId, title, categories, isMember }) => {
  const navigate = useNavigate();
  const { authToken } = useAuth();

  const {
    fetch: joinGroup,
    loading,
  } = useFetch(
    `/group/join/${groupId}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
    },
    false
  );

  const handleRedirect = () => {
    navigate(`/group/${title}`, { state: { data: groupId } });
  };

  const handleJoin = async () => {
    try {
      await joinGroup(); 
      console.log("Te has unido al grupo con éxito");
    } catch (err) {
      console.error(err);
      console.log("Hubo un error al unirse al grupo");
    }
  };

  console.log("Is member: " + isMember);
  return (
    <div className="groupcard-container">
      <div className="title-icons">
        <h5 className="grouptitle" onClick={handleRedirect}>
          {title}
        </h5>
        <JoinButton onClick={handleJoin} disabled={loading} initialJoined={isMember}/>
      </div>
      <GroupLabel categories={categories} />
    </div>
  );
};

export default GroupCard;
