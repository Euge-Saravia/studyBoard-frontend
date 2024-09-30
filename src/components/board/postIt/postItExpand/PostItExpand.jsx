import React from 'react'
import { motion } from 'framer-motion'
import contractIcon from '/assets/icons/Contract.svg'
import "./postItExpand.scss"
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import CopyButton from "../../../buttons/copyButton/CopyButton.jsx"

const PostItExpand = ({ text, title, type, onClick, layoutId }) => {
  return (
    <motion.div 
        className={`big-post-it ${type}`}
        layoutId={layoutId}
    >
        <h6>{title}</h6>
        <ReactMarkdown
            children={text}
            components={{
                code({ node, inline, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || '')
                    const codeString = String(children).replace(/\n$/, ''); 

                    return !inline && match ? (
                        <div className="code-block-cont">
                            <CopyButton textToCopy={codeString}/>
                            <SyntaxHighlighter
                                style={tomorrow}
                                language={match[1]}
                                PreTag="div"
                                {...props}
                            >
                                {codeString}
                            </SyntaxHighlighter>
                        </div>
                        
                    ) : (
                        <code className={className} {...props}>
                            {children}
                        </code>
                    )
                }
            }}
        />
        <img src={contractIcon} alt="contract icon" onClick={onClick} className="icon-contr"/>
    </motion.div>
  )
}

export default PostItExpand
