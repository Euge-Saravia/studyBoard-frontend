import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Layout from "../layout/Layout";
import SignUpPage from "../pages/signUp/SignUpPage";
import LoginPage from "../pages/login/LoginPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/signup",
                element:<SignUpPage/>
            },
            {
                path:"/login",
                element:<LoginPage/>
            }
        ],
    },
]);
