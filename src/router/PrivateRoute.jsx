// import { Navigate } from "react-router-dom";
// import { useCookies } from "react-cookie";

// const PrivateRoute = ({ children }) => {
//   const [cookies] = useCookies(["authToken"]);

//   return cookies.authToken ? children : <Navigate to="/login" />;
// };

// export default PrivateRoute;

import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { authToken } = useAuth(); // Obtener el token del contexto

  // Si no hay token, redirige al login
  if (!authToken) {
    return <Navigate to="/login" />;
  }

  // Si hay token, muestra el componente protegido
  return children;
};

export default PrivateRoute;
