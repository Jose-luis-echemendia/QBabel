import PropTypes from "prop-types";
import { motion } from "framer-motion";

export const Progress = ({ currentIndex, length }) => {

  return (
    <>
      <div className="flex h-[2px] items-center rounded-full bg-white/50 w-full">
        <div
          key={currentIndex}
          style={{
            width: (((currentIndex + 1) / length) * 100).toString() + "%",
          }}
          className={`h-[2px] bg-primary rounded-full`}
        ></div>
      </div>
      <motion.span key={currentIndex}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          key={currentIndex}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="flex items-center text-4xl font-medium text-white/50"
        >
          0{currentIndex + 1}
        </motion.div>
      </motion.span>
    </>
  );
};

Progress.propTypes = {
  currentIndex: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired,
};
