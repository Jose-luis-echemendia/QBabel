import { containerVariants, childrenVariants } from "@/utils/home-page-variants/best-books-variants";
import { motion } from "framer-motion";


export const DescriptionBook = () => {
  return (
    <>
      <div className="flex-1 p-4 pt-10 ml-10">
        <motion.article
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          className="text-white"
          viewport={{once:true}}
        >
          <motion.div
            variants={childrenVariants}
          >
            <div>Author</div>
            <div>Title</div>
          </motion.div>
          <motion.div
            variants={childrenVariants}
          >
            <div className="mt-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
              sequi, rem magnam nesciunt minima placeat, itaque eum neque
              officiis unde, eaque optio ratione aliquid assumenda facere ab et
              quasi ducimus aut doloribus non numquam.
            </div>
          </motion.div>
          <motion.div
            variants={childrenVariants}
          >
            <div className="flex gap-5 mt-5 justify-center">
              <button className="bg-white text-black font-medium py-2 px-8 rounded-md flex-grow-0 max-w-[150px]">
                SEE MORE
              </button>
              <button className="bg-transparent text-white border border-white py-2 px-8 rounded-md flex-grow-0 max-w-[150px]">
                SUBSCRIBE
              </button>
            </div>
          </motion.div>
        </motion.article>
      </div>
    </>
  );
};
