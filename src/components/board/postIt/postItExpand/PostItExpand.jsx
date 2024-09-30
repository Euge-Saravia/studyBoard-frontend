import React from 'react'
import { motion } from 'framer-motion'
import contractIcon from '/assets/icons/Contract.svg'
import "./postItExpand.scss"

const PostItExpand = ({ text, title, type, onClick, layoutId }) => {
  return (
    <motion.div 
        className={`big-post-it ${type}`}
        layoutId={layoutId}
    >
        <h6>{title}</h6>
        <p>{text}</p>
        <img src={contractIcon} alt="contract icon" onClick={onClick} className="icon-contr"/>
    </motion.div>
  )
}

export default PostItExpand
