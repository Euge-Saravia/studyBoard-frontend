import "./profileImg.scss";
import PropTypes from 'prop-types';

const ProfileImg = ({profileImage, onEditClick}) => {
  return (
    <div className="profileWrapper" style={{ backgroundImage: `url(${profileImage})` }}>
    <button className="editProfile" onClick={onEditClick}>
        <img src="../../../public/assets/icons/Edit only pencil.svg" alt="Button to edit profile image"/>
    </button>
    </div>
  );
};

ProfileImg.propTypes = {
  profileImage: PropTypes.string.isRequired, 
  onEditClick: PropTypes.func,
};

export default ProfileImg;
