import "./groupImage.scss"

const GroupImage = ({ onClick, profileImage }) => {
  return (
    <button className="imagebtn" onClick={onClick} style={{ backgroundImage: `url(${profileImage})`}}>
    </button>
  )
}

export default GroupImage
