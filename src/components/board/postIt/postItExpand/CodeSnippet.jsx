import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'; // Example theme for highlighting

const CodeSnippet = () => {
  const [text, setContent] = useState('');

  const handleInputChange = (e) => {
    setContent(e.target.value);
  };


  return (
    <div style={{ padding: '20px' }}>
      <h2>Markdown Editor with Code Snippets</h2>
      
      {/* Markdown input field */}
      <textarea
        value={text}
        onChange={handleInputChange}
        rows="10"
        cols="80"
        placeholder="Write your notes in markdown with code blocks. Use ```language for code blocks."
      />
      
      <h3>Markdown Preview:</h3>
      <div style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '8px' }}>
        {/* Markdown rendering with syntax highlighting */}
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '');
              return !inline && match ? (
                <SyntaxHighlighter
                  style={vscDarkPlus} // You can replace with other themes
                  language={match[1]}
                  PreTag="div"
                  {...props}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            }
          }}
        >
          {text}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default CodeSnippet;
