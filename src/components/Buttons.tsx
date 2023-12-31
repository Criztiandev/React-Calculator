import { motion } from "framer-motion";
import { ButtonDataProps } from "../interface/button";
import PopSound from "../assets/audio/pop-3.mp3";

interface Props extends ButtonDataProps {}
const Buttons = ({ title, ...props }: Props) => {
  const play = () => {
    new Audio(PopSound).play();
  };

  return (
    <motion.button
      initial={{ boxShadow: "2px 2px 0px 1px black" }}
      whileTap={{ scale: 0.8, boxShadow: "0px 0px 0px 0px black" }}
      transition={{ duration: 0.1, ease: "easeInOut" }}
      className="p-4 rounded-[10px] text-lg font-bold bg-primary border-2 border-black shadow-black"
      onMouseDown={play}
      {...props}>
      {title}
    </motion.button>
  );
};

export default Buttons;
