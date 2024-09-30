import './postIt.scss'
import expandIcon from '/assets/icons/Expand.svg'
import { motion } from 'framer-motion'

const PostIt = ({ type, title, text, onClick, layoutId }) => {

    return (
        <motion.div 
            className={`post-it-container ${type}`}
            onClick={onClick}
            layoutId={layoutId}
        >
            <h6>{title}</h6>
            <p>{text}</p>
            <img src={expandIcon} alt='Expand Icon' className="post-it-container_icon" />
        </motion.div>
    )
}

export default PostIt