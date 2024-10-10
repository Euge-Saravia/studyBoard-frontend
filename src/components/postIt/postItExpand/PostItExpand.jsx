import "./postItExpand.scss";
import contractIcon from "/assets/icons/Contract.svg";
import trashIcon from "/assets/icons/Trash.svg";
import ReactMarkdown from "react-markdown";
import CopyButton from "../../buttons/copyButton/CopyButton.jsx";
import { motion } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";

const PostItExpand = ({ text, title, isOwner, type, onClick, onDelete, layoutId }) => {
  return (
    <motion.div className={`big-post-it ${type}`} layoutId={layoutId}>
      <section className="icons-container">
        <div className="icons-ud">
          {isOwner && <img src={trashIcon} alt="trash icon" onClick={onDelete} className="icon-postIt" />}
        </div>
        <img src={contractIcon} alt="contract icon" onClick={onClick} className="icon-postIt" />
      </section>
      <h6>{title}</h6>
      <ReactMarkdown
        components={{
          code({ inline, className, children, ...props }) {
            const codeString = String(children).replace(/\n$/, "");

            return !inline ? (
              <div className="code-block-cont">
                <CopyButton textToCopy={codeString} />
                <SyntaxHighlighter style={tomorrow} language={"javascript"} PreTag="div" {...props}>
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
      >
        {text}
      </ReactMarkdown>
    </motion.div>
  );
};

export default PostItExpand;
