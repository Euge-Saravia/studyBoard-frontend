import "./mainButton.scss"
import React, { forwardRef } from 'react';



const MainButton = forwardRef(function MainButtonWithRef({ color, size, text, onClick, iconVisibility, iconButton=null, label }, ref) {
    return (
        <button ref={ref} className={`btn ${color} ${size}`} onClick={onClick}>
            {text}
            {iconButton && (
                <img className={`img-btn-style ${iconVisibility}`} src={iconButton} alt={label} />
            )}
        </button>
    );
});

export default MainButton;