import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import { v4 as uuid } from 'uuid';

export const WaterfallBooks = ({ images }) => {
  const imagesWithKeys = useMemo(
    () => images.map(image => ({ ...image, key: uuid() })),
    [images]
  );

  return (
    <div>
      {imagesWithKeys.map(image => (
        <img
          key={image.key}
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
