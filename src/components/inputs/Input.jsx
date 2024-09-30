import { forwardRef } from "react";
import PropTypes from "prop-types";
import "./input.scss";

const Input = forwardRef(
    ({ size, border, pencil, type, placeholder, icon, ...rest }, ref) => {
        return (
            <div className="inputWrapper">
                <input
                    className={`baseInput ${size} ${border}`}
                    type={type}
                    placeholder={placeholder}
                    {...rest}
                    ref={ref}
                />
                {icon && (
                    <img
                        src={icon}
                        alt="icon"
                        className={`inputIcon ${pencil}`}
                    />
                )}
            </div>
        );
    }
);

Input.propTypes = {
    size: PropTypes.string,
    border: PropTypes.string,
    pencil: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    icon: PropTypes.element,
};

Input.displayName = 'Input';
export default Input;
