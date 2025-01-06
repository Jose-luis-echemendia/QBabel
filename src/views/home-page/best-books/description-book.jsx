import { fadeIn } from "@/utils/MotionTransition";
import { motion } from "framer-motion";

export const DescriptionBook = () => {
  return (
    <><div className="flex-1 p-4 pt-10 ml-10">
    <motion.ol
      initial={false}
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.3, // Tiempo entre las animaciones de cada hijo
            delayChildren: 0.2
          },
        },
      }}
      whileInView="visible"
      viewport={{once:true}}
      className="text-white"
    >
      <motion.li
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { stiffness: 1000, velocity: -100 } },
        }}
      >
        <div>Author</div>
        <div>Title</div>
      </motion.li>
      <motion.li
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { stiffness: 1000 } },
        }}
      >
        <div className="mt-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
          sequi, rem magnam nesciunt minima placeat, itaque eum neque
          officiis unde, eaque optio ratione aliquid assumenda facere ab et
          quasi ducimus aut doloribus non numquam.
        </div>
      </motion.li>
      <motion.li
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { stiffness: 1000 } },
        }}
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
  </div></>
  )
}
