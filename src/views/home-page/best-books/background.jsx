import { motion } from "framer-motion";

export const Background = ({ transitionBookData, currentBookData }) => {
  return (
    <>
      {transitionBookData && (
        <motion.div
          key={currentBookData.data.color}
          className="absolute top-0 left-0 w-full h-full z-0"
          style={{
            background: `linear-gradient(to right, #111217, ${currentBookData.data.color})`,
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
      )}
      <motion.div
        key={transitionBookData.color + "transition"}
        className="absolute top-0 left-0 w-full h-full z-0"
        style={{
          background: `linear-gradient(to right, #111217, ${transitionBookData.color})`,
        }}
      />
    </>
  );
};
