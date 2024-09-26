import { Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import NavBar from "../components/navBar/NavBar";
import Sidebar from "../components/sidebar/Sidebar";
import "./layout.scss";

const Layout = () => {
    const location = useLocation();
    const noNavRoutes = ["/", "/login", "/signup"];
    const showNavSidebar = !noNavRoutes.includes(location.pathname);
    const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);
    console.log(isDesktop);

    useEffect(() => {
        if(isDesktop){
            setSidebarIsOpen(isDesktop);
        }

        const handleResize = () => {
            setIsDesktop(window.innerWidth > 1024);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);

    }, [isDesktop]);

    const toggleSidebar = () => {
        setSidebarIsOpen(!sidebarIsOpen);
    };

    return (
        <>
            {showNavSidebar && <NavBar />}
            {showNavSidebar && (
                <Sidebar isOpen={sidebarIsOpen} toggleSidebar={toggleSidebar} />
            )}
            <main>
                <Outlet />
            </main>
            <motion.div
                className={`overlay ${sidebarIsOpen ? "open" : "closed"}`}
                animate={sidebarIsOpen ? { opacity: 0.7 } : { opacity: 0 }}
                transition={{ duration: 0.5 }}
            />
        </>
    );
};

export default Layout;
