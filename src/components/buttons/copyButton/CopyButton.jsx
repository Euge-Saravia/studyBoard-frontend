import { useState } from "react";
import useCopyToClipboard from "../../../hooks/useCopyToClipboard";
import "./copyButton.scss";

const CopyButton = ({ textToCopy, onClick}) => {
    const [copyToClipboard] = useCopyToClipboard();
    const [copied, setCopied] = useState(false);

    const handleClick = () => {
        if (textToCopy) {
            copyToClipboard(textToCopy);
            setCopied(true);
            if (onClick) onClick(); 
        }
    }
  return (
    <div>
    <button className="btncopy" onClick={handleClick}>
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6"/>
            </svg>
        </div>
        {!copied ? (
            <span>Copy</span>
        ) : (
            <span className="copied">Copied!</span>
        )}
        
    </button>
    </div>
  )
}

export default CopyButton
