import { motion } from "framer-motion";

export const BookCover = ({ transitionBookData, currentBookData }) => {
  return (
    <>
      <figure>
        {transitionBookData && (
          <motion.img
            key={transitionBookData.img}
            layoutId={transitionBookData.img}
            alt="Transition Image"
            transition={{
              opacity: { ease: "linear" },
              layout: { duration: 0.6 },
            }}
            className="absolute left-0 top-0 w-full h-full object-cover z-10 brightness-50"
            src={transitionBookData.img}
          />
        )}
        <motion.img
          alt="Current Image"
          key={currentBookData.data.img + "transition"}
          src={currentBookData.data.img}
          className="absolute left-0 top-0 w-full h-full object-cover brightness-50"
        />
      </figure>
    </>
  );
};
