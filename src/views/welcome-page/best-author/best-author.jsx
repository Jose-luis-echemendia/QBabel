// best-author.jsx
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';

export const BestAuthor = ({ images }) => {
  if (!images || images.length === 0) {
    return <div>No images available</div>;
  }

  return (
    <div>
      {images.map(image => (
        <img
          key={uuid()}
          src={image.src}
          alt={image.alt || ''}
          className={`absolute w-[300px]   opacity-70  ${
            image.className || ''
          }`}
        />
      ))}
    </div>
  );
};

BestAuthor.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string,
      className: PropTypes.string,
    })
  ).isRequired,
};
