import PropTypes from "prop-types";
import "./input.scss";

const Input = ({ size, border, pencil,  type, placeholder, icon }) => {
  return (
    <div className="inputWrapper">
      <input
        className={`baseInput ${size} ${border}`}
        type={type}
        placeholder={placeholder}
      />
      {icon && <img src={icon} alt="icon" className={`inputIcon ${pencil}`} />}
    </div>
  );
};

Input.propTypes = {
  size: PropTypes.string,
  border: PropTypes.string,
  pencil: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  icon: PropTypes.element,
};

export default Input;
