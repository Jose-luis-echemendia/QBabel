import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';
export const WaterfallBooks = ({ images }) => {
  return (
    <div>
      {images.map((image) => (
        <img
          key={uuid()}
          src={image.src} 
          alt={image.alt || ''}
          className={`absolute ${image.className || ''}`} 
        />
      ))}
    </div>
  );
};


WaterfallBooks.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string,
      className: PropTypes.string,
    })
  ).isRequired,
};
