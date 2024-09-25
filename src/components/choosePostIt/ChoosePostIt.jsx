import { useEffect, useState } from "react";
import { useAnimate, stagger, motion } from "framer-motion";
import ColorButtons from "../buttons/colorButtons/ColorButtons";
import MainButton from "../buttons/mainButton/MainButton";
import "./choosePostIt.scss";

const staggerButtons = stagger(0.1, { startDelay: 0.15 });

function useButtonAnimation(isOpen) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      ".colorButton",
      isOpen
        ? { opacity: 1, scale: 1, filter: "blur(0px)" }
        : { opacity: 0, scale: 0.3, filter: "blur(20px)" },
      {
        duration: 0.3,
        delay: isOpen ? staggerButtons : 0,
      }
    );
  }, [isOpen]);

  return scope;
}

const ChoosePostIt = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scope = useButtonAnimation(isOpen);

  return (
    <div className="choosePostItWrapper">
      <motion.div className="colorButtonsWrapper" ref={scope}>
        <motion.div className="colorButton">
          <ColorButtons color="colorPostItRose" />
        </motion.div>
        <motion.div className="colorButton">
          <ColorButtons color="colorPostItPerano" />
        </motion.div>
        <motion.div className="colorButton">
          <ColorButtons color="colorPostItGreen" />
        </motion.div>
        <motion.div className="colorButton">
          <ColorButtons color="colorPostItWheat" />
        </motion.div>
      </motion.div>

      <MainButton
        color="accent"
        size="small"
        text="+"
        onClick={() => setIsOpen(!isOpen)}
      />
    </div>
  );
};

export default ChoosePostIt;
