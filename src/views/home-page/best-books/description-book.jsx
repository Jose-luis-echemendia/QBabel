import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { stiffness: 1000, velocity: -100 } },
}

export const DescriptionBook = () => {
  return (
    <>
      <div className="flex-1 p-4 pt-10 ml-10">
        <motion.ol
          variants={variants}
          initial="hidden"
          whileInView="show"
          className="text-white"
          viewport={{once:true}}
        >
          <motion.li
            variants={item}
          >
            <div>Author</div>
            <div>Title</div>
          </motion.li>
          <motion.li
            variants={item}
          >
            <div className="mt-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
              sequi, rem magnam nesciunt minima placeat, itaque eum neque
              officiis unde, eaque optio ratione aliquid assumenda facere ab et
              quasi ducimus aut doloribus non numquam.
            </div>
          </motion.li>
          <motion.li
            variants={item}
          >
            <div className="flex gap-5 mt-5 justify-center">
              <button className="bg-white text-black font-medium py-2 px-8 rounded-md flex-grow-0 max-w-[150px]">
                SEE MORE
              </button>
              <button className="bg-transparent text-white border border-white py-2 px-8 rounded-md flex-grow-0 max-w-[150px]">
                SUBSCRIBE
              </button>
            </div>
          </motion.li>
        </motion.ol>
      </div>
    </>
  );
};
