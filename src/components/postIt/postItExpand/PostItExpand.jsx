import React from "react";
import { motion } from "framer-motion";
import contractIcon from "/assets/icons/Contract.svg";
import trashIcon from "/assets/icons/Trash.svg";
//import editIcon from "/assets/icons/Edit.svg";
import "./postItExpand.scss";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";
//import usePut from "../../../hooks/usePut.jsx";
import CopyButton from "../../buttons/copyButton/CopyButton.jsx";

const PostItExpand = ({ text, title, isOwner, type, onClick, onDelete, layoutId }) => {
  //const { executePut } = usePut();

  //   const handleEditPostIt = () => {
  //     executePut(postIt);
  //   };

  return (
    <motion.div className={`big-post-it ${type}`} layoutId={layoutId}>
      <section className="icons-container">
        <div className="icons-ud">
          {isOwner && <img src={trashIcon} alt="trash icon" onClick={onDelete} className="icon-postIt" />}
          {/* <img src={editIcon} alt="edit icon" onClick={handleEditPostIt} className="edit-postIt" /> */}
        </div>
        <img src={contractIcon} alt="contract icon" onClick={onClick} className="icon-postIt" />
      </section>
      <h6>{title}</h6>
      <ReactMarkdown
        children={text}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            const codeString = String(children).replace(/\n$/, "");

            return !inline && match ? (
              <div className="code-block-cont">
                <CopyButton textToCopy={codeString} />
                <SyntaxHighlighter style={tomorrow} language={match[1]} PreTag="div" {...props}>
                  {codeString}
                </SyntaxHighlighter>
              </div>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      />
    </motion.div>
  );
};

export default PostItExpand;
