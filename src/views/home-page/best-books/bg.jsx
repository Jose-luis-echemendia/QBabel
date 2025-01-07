import { motion } from "framer-motion";
import PropTypes from "prop-types";

export const Bg = ({ transitionData, currentData }) => {
  return (
    <>
      {transitionData && (
        <motion.img
          key={transitionData.img}
          layoutId={transitionData.img}
          alt="Transition Image"
          transition={{
            opacity: { ease: "linear" },
            layout: { duration: 0.6 },
          }}
          className="absolute left-0 top-0 w-full h-full object-cover z-10 brightness-50"
          src={transitionData.img}
        />
      )}
      <motion.img
        alt="Current Image"
        key={currentData.data.img + "transition"}
        src={currentData.data.img}
        className="absolute left-0 top-0 w-full h-full object-cover brightness-50"
      />
    </>
  );
};

Bg.propTypes = {
  transitionData: PropTypes.shape({
    img: PropTypes.string.isRequired,
  }).isRequired,
  currentData: PropTypes.object,
};
