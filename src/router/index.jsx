import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import FrontPage from "../pages/frontPage/FrontPage"
import Layout from "../layout/Layout";
import SignUpPage from "../pages/signUp/SignUpPage";
import LoginPage from "../pages/login/LoginPage";
import UserProfile from "../pages/userProfile/UserProfile";
import Group from "../pages/group/Group"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <FrontPage />
            },
            {
                path: "/home",
                element: <Home />
            },
            {
                path: "/signup",
                element:<SignUpPage/>
            },
            {
                path:"/login",
                element:<LoginPage/>
            },
            {
                path:"/userprofile",
                element:<UserProfile />
            },
            {
                path: "/group/:name?",
                element: <Group />
            }
        ],
    },
]);
