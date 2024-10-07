import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { authToken } = useAuth();

  authToken ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
