import './postIt.scss'
import expandIcon from '../../../../public/assets/icons/Expand.svg'

const PostIt = ({ type, title, text, onClick }) => {
    return (
        <div className={`post-it-container ${type}`}>
            <h6>{title}</h6>
            <p>{text}</p>
            <img src={expandIcon} alt='Expand Icon' className="post-it-container_icon" onClick={onClick}/>
        </div>
    )
}

export default PostIt