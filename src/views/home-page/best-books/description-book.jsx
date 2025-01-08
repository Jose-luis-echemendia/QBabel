import {
  containerVariants,
  childrenVariants,
} from "@/utils/home-page-variants/best-books-variants";
import { motion } from "framer-motion";
import PropTypes from 'prop-types';

export const DescriptionBook = ({ bookData }) => {
  const { author, tittle, description } = bookData;
  return (
    <>
      <motion.article
        key={tittle}
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="text-white text-left flex flex-col gap-5"
        viewport={{ once: true }}
      >
        <motion.div variants={childrenVariants}>
          <span className="font-anton text-xl">{author}</span>
          <h2 className="font-anton text-6xl mt-5">{tittle}</h2>
        </motion.div>
        <motion.p
          variants={childrenVariants}
          className="mt-4 mr-20 text-balance font-quicksand text-left text-xl font-medium text-opacity-60"
        >
          {description}
        </motion.p>
        <motion.div
          variants={childrenVariants}
          className="flex gap-5 mt-3 justify-center"
        >
          <button className="bg-white text-black py-2 px-8 rounded-md flex-grow-0 max-w-[150px] font-opensans font-bold">
            VER MÁS
          </button>
          <button className="bg-transparent text-white border border-white py-2 px-8 rounded-md flex-grow-0 max-w-[150px] font-opensans font-bold">
            LEER
          </button>
        </motion.div>
      </motion.article>
    </>
  );
};

DescriptionBook.propTypes = {
  bookData: PropTypes.shape({
    author: PropTypes.string.isRequired,
    tittle: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};
