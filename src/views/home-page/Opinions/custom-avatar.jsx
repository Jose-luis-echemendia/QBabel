import PropTypes from 'prop-types';

export const CustomAvatar = ({src}) => {
  return (
    <div>

      <img src={src} alt="avatar" className='object-cover'/>
    </div>
    
  );
};

CustomAvatar.propTypes = {
  src: PropTypes.string.isRequired,
};
