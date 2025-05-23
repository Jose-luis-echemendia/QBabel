import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

export const CarouselBooks = ({ booksData }) => {
  return (
    <>
      <div className="flex flex-col gap-6 -mt-3">
        <div className="flex flex-row gap-6">
          {booksData.map(bookData => (
            <motion.div
              key={bookData.img}
              className="relative h-56 min-w-[250px] rounded-2xl shadow-md md:h-80 md:min-w-[250px]"
              layout
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
                transition: {
                  duration: 0.5,
                },
              }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', damping: 20, stiffness: 100 }}
            >
              <figure className="object-cover">
                <motion.img
                  layoutId={bookData.img}
                  alt="transition Image"
                  src={bookData.img}
                  className="absolute h-full w-full rounded-2xl brightness-75"
                />
              </figure>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

CarouselBooks.propTypes = {
  booksData: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      title: PropTypes.string,
    })
  ).isRequired,
};
