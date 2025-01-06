import {
  containerVariants,
  childrenVariants,
} from "@/utils/home-page-variants/best-books-variants";
import { motion } from "framer-motion";

export const DescriptionBook = () => {
  return (
    <>
      <div className="flex-1 p-4 pt-10 ml-10">
        <motion.article
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          className="text-white text-left flex flex-col"
          viewport={{ once: true }}
        >
          <motion.div variants={childrenVariants}>
            <span className="font-anton text-xl">Laura Sebastian</span>
            <h2 className="font-anton text-6xl mt-5">Princesas de Cenizas</h2>
          </motion.div>
          <motion.p variants={childrenVariants}>
            <div className="mt-4 mr-20 text-balance font-quicksand">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
              sequi, rem magnam nesciunt minima placeat, itaque eum neque
              officiis unde, eaque optio ratione aliquid assumenda facere ab et
              quasi ducimus aut doloribus non numquam. Lorem ipsum dolor, sit
              amet consectetur adipisicing elit. Quisquam quidem perferendis ab
              doloribus ipsam ratione fugit officia, rem necessitatibus,
              repellat itaque optio velit quia a corrupti cum impedit voluptates
              iure?
            </div>
          </motion.p>
          <motion.div
            variants={childrenVariants}
            className="flex gap-5 mt-10 justify-center"
          >
            <button className="bg-white text-black py-2 px-8 rounded-md flex-grow-0 max-w-[150px] font-opensans font-bold">
              SEE MORE
            </button>
            <button className="bg-transparent text-white border border-white py-2 px-8 rounded-md flex-grow-0 max-w-[150px] font-opensans font-bold">
              LEER
            </button>
          </motion.div>
        </motion.article>
      </div>
    </>
  );
};
