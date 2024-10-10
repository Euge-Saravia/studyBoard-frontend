import "./postIt.scss";
import expandIcon from "/assets/icons/Expand.svg";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";

const PostIt = ({ type, title, text, onClick, layoutId, id }) => {
  const truncatedText = text.length > 100 ? text.substring(0, 100) + "..." : text;

  return (
    <motion.div className={`post-it-container ${type}`} onClick={onClick} layoutId={layoutId} id={id}>
      <h6>{title}</h6>
      <ReactMarkdown
        children={truncatedText}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter style={tomorrow} language={match[1]} PreTag="div" {...props}>
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      />
      <img src={expandIcon} alt="Expand Icon" className="post-it-container_icon" />
    </motion.div>
  );
};

export default PostIt;
