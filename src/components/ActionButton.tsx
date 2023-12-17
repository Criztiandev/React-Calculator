import { motion } from "framer-motion";

interface Props {
  title: string;
  onClick?: () => void;
}

const ActionButton = ({ title, ...props }: Props) => {
  return (
    <motion.button
      whileTap={{ scale: 0.8 }}
      className="p-4 rounded-[10px] text-lg font-bold bg-primary border-2 border-black shadow-black "
      {...props}>
      {title}
    </motion.button>
  );
};

export default ActionButton;
