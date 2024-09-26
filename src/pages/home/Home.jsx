
import { useState } from "react";
import ProfileImg from "../../components/profileImg/ProfileImg";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
    const [profileImage, setProfileImage] = useState(""); 

  const handleImageUpload = (imageUrl) => {
    setProfileImage(imageUrl); 
  };
    return (
        <div>
            <Sidebar />
            <ProfileImg profileImage={profileImage} onImageUpload={handleImageUpload}/>
        </div>
    );
};

export default Home;
