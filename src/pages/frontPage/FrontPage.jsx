import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./frontPage.scss";
import { useNavigate } from "react-router-dom";

const FrontPage = () => {
    const [isVisible, setIsVisible] = useState(true);
    const navigate = useNavigate();


    setTimeout(() => {
        setIsVisible(false);
        setTimeout(() => {
            navigate("/login");
        }, "500");
    }, "1500");

    return (
        <section className="front">
            <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="icons"
                    initial={{ scale: 0, opacity: 0}}
                    animate={{ scale: 1, opacity: 1}}
                    exit={{ scale: 7 , opacity: 0, filter: "blur(5px)", transition: { ease: "easeIn", duration: 0.22 } }}
                    
                >
                    <img
                        className="icon"
                        src="./logo/Icon-Variant2.svg"
                        alt="Logo StudyBoard"
                    />
                    <img
                        className="logo"
                        src="./logo/Logo-Variant2.svg"
                        alt="StudyBoard"
                    />
                </motion.div>)}
            </AnimatePresence>
        </section>
    );
};

export default FrontPage;
