import "./navBar.scss";
import PropTypes from "prop-types";

const NavBar = ({ colorUser, colorHome, order }) => {
  return (
    <div className="navBarContainer">
      <div className="logo">
        <img src="../../../public/logo/Logo-Default.svg" alt="page logo" />
      </div>
      <div className="iconsWrappers">
        <div className={`iconsNavBar ${colorUser} ${order}`}>
          <img src="../../../public/assets/icons/User.svg" alt="user logo" />
        </div>
        <div className={`iconsNavBar ${colorHome}`}>
          <img src="../../../public/assets/icons/Home2.svg" alt="home logo" />
        </div>
      </div>
    </div>
  );
};

NavBar.propTypes = {
  colorUser: PropTypes.string,
  colorHome: PropTypes.string,
  order: PropTypes.string
};

export default NavBar;
