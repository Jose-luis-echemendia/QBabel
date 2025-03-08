import PropTypes from 'prop-types';

export const IconLogo = ({ alt, size, className }) => {
    return (
      <img
        className={className}
        src='/assets/icons/Logoprincipal.svg'
        alt={alt || 'App Logo'}
        width={size || '40'} 
        height={size || '40'}
        style={{ objectFit: 'contain' }} 
    />   

    )
};
  
  IconLogo.propTypes = {
    alt: PropTypes.string,
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    className: PropTypes.string,
  };

  