import "./groupListSidebar.scss";
import { useNavigate } from "react-router-dom";

const GroupListSidebar = ({ groups }) => {
    const navigate = useNavigate();

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase())
      .join("");
  };

   // Función para manejar el clic en un grupo
   const handleGroupClick = (groupId, groupName) => {
    navigate(`/group/${groupName}`, { state: { data: groupId } });
  };

  return (
    <ul className="group-list">
    {groups.length > 0 ? (
      groups.map((group) => (
        <li
          key={group.id}
          className="group-initial"
          onClick={() => handleGroupClick(group.id, group.groupName)}
        >
          {getInitials(group.groupName)}
        </li>
      ))
    ) : (
      <p>No hay grupos disponibles</p>
    )}
  </ul>
  );
};

export default GroupListSidebar;
