import ProfileImg from "../profileImg/ProfileImg";
import Input from "../inputs/Input";
import MainButton from "../buttons/mainButton/MainButton";
import LogOut from "../buttons/logOut/LogOut";
import "./userHomeProfile.scss";
import { useState } from "react";

const UserHomeProfile = () => {
  const [profileImage, setProfileImage] = useState(""); 

  const handleImageUpload = (imageUrl) => {
    setProfileImage(imageUrl); 
  };
  return (
    <seccion className="userProfileContainer">
      <ProfileImg profileImage={profileImage} onImageUpload={handleImageUpload}/>
      <div className="inputsContainer">
        <Input type="text" placeholder="Eugenia Saravia" size="size" border="border" icon="../../../public/assets/icons/Edit only pencil.svg" pencil="pencil"/>
        <Input type="email" placeholder="eugenia@labella.com"/>
        <Input type="password" placeholder="********"/>
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
