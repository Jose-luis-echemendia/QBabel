import { motion } from "framer-motion";

export const Sl = ({ data }) => {
  return (
    <>
      <div className="flex w-full gap-6">
        {data.map((item, index) => (
          <motion.div
            key={index}
            className="relative h-52 min-w-[250px] rounded-2xl shadow-md md:h-80 md:min-w-[250px]"
            layout
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              transition: {
                duration: 0.5,
                delay: index * 0.1,
              },
            }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 100 }}
          >
            <motion.img
              layoutId={data.img}
              alt="transition Image"
              src={data.img}
              className="absolute h-full w-full object-cover rounded-2xl brightness-75"
            />

            <motion.div>
              <motion.div
                layout
                className="mb-2 h-[2px] w-3 rounded-full bg-white"
              />
              <motion.div
                className="text-xs text-[#D5D5D6]"
                layoutId={data.author}
              >
                {data.author}
              </motion.div>
              <motion.h1
                className="text-xl leading-6 text-white"
                layoutId={data.title}
              >
                {data.title}
              </motion.h1>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </>
  );
};
