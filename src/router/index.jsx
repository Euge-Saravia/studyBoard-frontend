import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import FrontPage from "../pages/frontPage/FrontPage"
import Layout from "../layout/Layout";

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
        ],
    },
]);
