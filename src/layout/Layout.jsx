import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../components/navBar/NavBar";
import Sidebar from "../components/sidebar/Sidebar";

const Layout = () => {
    const location = useLocation();
    const noNavRoutes = ["/", "/login", "/signup"];
    const showNavSidebar = !noNavRoutes.includes(location.pathname);
    return (
        <>
            {showNavSidebar && <NavBar />}
            {showNavSidebar && <Sidebar />}
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default Layout;
