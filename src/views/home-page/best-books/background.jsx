import { motion } from "framer-motion";

export const Background = ({transitionBookData, currentBookData}) => {
  return (
    <>
      <motion.div
        key={transitionBookData.color}
        className="absolute top-0 left-0 w-full h-full z-0"
        style={{
          background: `linear-gradient(to right, #111217, ${transitionBookData.color})`,
        }}
        variants={{
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
        }}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />
    </>
  );
};
