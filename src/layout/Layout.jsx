import { Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import NavBar from "../components/navBar/NavBar";
import Sidebar from "../components/sidebar/Sidebar";
import "./layout.scss";
import { AuthProvider } from "../hooks/useAuth";

const Layout = () => {
  const location = useLocation();
  const noNavRoutes = ["/", "/login", "/signup"];
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);

  const showNavSidebar = !noNavRoutes.some((route) => {
    const regex = new RegExp(`^${route}(\\/|\\?|$)`);
    return regex.test(location.pathname);
  });

  useEffect(() => {
    if (isDesktop) {
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

  const backgroundClass = noNavRoutes.includes(location.pathname) ? "blue-background" : "white-background";

  return (
    <AuthProvider>
      {showNavSidebar && <NavBar />}
      {showNavSidebar && <Sidebar isOpen={sidebarIsOpen} toggleSidebar={toggleSidebar} />}
      <main className={backgroundClass}>
        <Outlet />
      </main>
      {showNavSidebar && (
        <motion.div
          className={`overlay ${sidebarIsOpen ? "open" : "closed"}`}
          animate={sidebarIsOpen ? { opacity: 0.7 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
      )}
    </AuthProvider>
  );
};

export default Layout;
