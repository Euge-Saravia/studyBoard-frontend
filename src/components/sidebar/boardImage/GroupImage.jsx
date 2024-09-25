import "./groupImage.scss"

const GroupImage = ({ onClick, profileImage }) => {
  return (
    <button className='btn' onClick={onClick} style={{ backgroundImage: `url(${profileImage})`}}>
    </button>
  )
}

export default GroupImage
