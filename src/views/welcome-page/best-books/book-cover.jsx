import { motion } from "framer-motion";

export const BookCover = ({ transitionBookData, currentBookData }) => {
  return (
    <>
      <figure className="ml-10 relative object-contain mt-6">
        {transitionBookData && (
          <motion.img
            key={transitionBookData.img}
            layoutId={transitionBookData.img}
            alt="Transition Image"
            transition={{
              opacity: { ease: "linear" },
              layout: { duration: 0.6 },
            }}
            className="absolute w-full h-screen rounded-2xl brightness-75 z-10"
            src={transitionBookData.img}
          />
        )}
        <motion.img
          alt="Current Image"
          key={currentBookData.data.img + "transition"}
          src={currentBookData.data.img}
          className="absolute w-full h-screen rounded-2xl backdrop-brightness-75"
        />
      </figure>
    </>
  );
};
