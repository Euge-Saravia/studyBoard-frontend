import { createContext, useContext } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [cookies, setCookie, removeCookie] = useCookies(["authToken"]);
  const navigate = useNavigate();

  const login = (token) => {
    setCookie("authToken", token, { path: "/", maxAge: 3600 });
    navigate("/home");
  };

  const logout = () => {
    removeCookie("authToken", { path: "/" });
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ authToken: cookies?.authToken, login, logout }}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
