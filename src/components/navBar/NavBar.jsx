import "./navBar.scss";
import PropTypes from "prop-types";

const NavBar = ({ isUserActive, isHomeActive, order }) => {
  return (
    <div className="navBarContainer">
      <div className="logo">
        <img src="../../../public/logo/Logo-Default.svg" alt="page logo" />
      </div>
      <div className="iconsWrappers">
        <div className={`iconsNavBar ${isUserActive ? "active" : ""} ${order}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path d="M17.982 18.725A7.487 7.487 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.964 0a8.998 8.998 0 0 0 2.43-9.925 9 9 0 1 0-14.394 9.925m11.964 0A8.968 8.968 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>
        </div>
        <div className={`iconsNavBar ${isHomeActive ? "active" : ""}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="27"
            fill="none"
            viewBox="0 0 27 27"
          >
            <path
              d="m22.6 11.993.002.002a.924.924 0 0 1 .273.659V22.78a.094.094 0 0 1-.094.094H4.22a.094.094 0 0 1-.094-.094V12.654a.924.924 0 0 1 .273-.66l.002-.001 8.437-8.438a.938.938 0 0 1 .53-.265l-.397.398-8.438 8.438-.22.22v10.341h18.375v-10.34l-.22-.22-8.437-8.438-.398-.398a.94.94 0 0 1 .53.265l8.438 8.438Z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

NavBar.propTypes = {
  isUserActive: PropTypes.bool,
  isHomeActive: PropTypes.bool,
  order: PropTypes.string,
};

export default NavBar;
