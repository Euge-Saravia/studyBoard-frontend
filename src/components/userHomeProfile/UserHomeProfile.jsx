import ProfileImg from "../profileImg/ProfileImg";
import Input from "../inputs/Input";
import MainButton from "../buttons/mainButton/MainButton";
import LogOut from "../buttons/logOut/LogOut";
import "./userHomeProfile.scss";

const UserHomeProfile = () => {
  return (
    <seccion className="userProfileContainer">
      <ProfileImg />
      <div className="inputsContainer">
      <Input type="text" placeholder="Name" size="size" border="border" icon="../../../public/assets/icons/Edit only pencil.svg" pencil="pencil"/>
      <Input />
      <Input />
      </div>
      <div className="buttonsContainer">
      <MainButton color="accent" text="Guardar cambios"/>
      <MainButton color="secondary" text="Cancelar"/>
      </div>
      <LogOut />
    </seccion>
  )
}

export default UserHomeProfile
