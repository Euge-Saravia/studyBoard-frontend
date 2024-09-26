import "./profileImg.scss";
import PropTypes from "prop-types";

const ProfileImg = ({ profileImage, onImageUpload }) => {
  
  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = await uploadImage(file);
      onImageUpload(imageUrl); 
    }
  };

  const uploadImage = async (file) => {
    const presetName = "yu1h90st";
    const cloudName = "drlqmol4c";

    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", presetName);
    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        {
          method: "POST",
          body: data,
        }
      );
      const result = await response.json();
      return result.secure_url;
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div
      className="profileWrapper"
      style={{ backgroundImage: `url(${profileImage})` }}
    >
      <input
        type="file"
        id="file-upload"
        className="file-input"
        onChange={handleFileChange}
        style={{ display: "none" }} 
      />
      <button
        className="editProfile"
        onClick={() => document.getElementById("file-upload").click()}
      >
        <img
          src="../../../public/assets/icons/Edit only pencil.svg"
          alt="Button to edit profile image"
        />
      </button>
    </div>
  );
};

ProfileImg.propTypes = {
  profileImage: PropTypes.string.isRequired,
};

export default ProfileImg;
