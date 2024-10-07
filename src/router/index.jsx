import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import FrontPage from "../pages/frontPage/FrontPage";
import Layout from "../layout/Layout";
import SignUpPage from "../pages/signUp/SignUpPage";
import LoginPage from "../pages/login/LoginPage";
import UseProfile from "../pages/userProfile/UserProfile";
import Group from "../pages/group/Group";
import AboutUs from "../pages/aboutUs/AboutUs";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <FrontPage />,
      },
      {
        path: "/home",
        element: (
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        ),
      },
      {
        path: "/signup",
        element: <SignUpPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/userprofile",
        element: (
          <PrivateRoute>
            <UseProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "/group/:name?",
        element: (
          <PrivateRoute>
            <Group />
          </PrivateRoute>
        ),
      },
      {
        path: "/aboutus",
        element: (
          <PrivateRoute>
            <AboutUs />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
