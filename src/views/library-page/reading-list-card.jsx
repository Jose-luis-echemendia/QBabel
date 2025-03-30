// ReadingListCard.jsx
import { useState } from 'react';
import PropTypes from 'prop-types';
// Importa el ícono de tres puntos horizontales
import { EllipsisHorizontalIcon } from '@heroicons/react/24/outline';

function ReadingListCard({ list }) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className='flex items-center bg-white rounded shadow p-4 mb-2'>
      <img
        src={list.coverImg}
        alt='Portada'
        className='w-16 h-16 object-cover rounded mr-4'
      />

      <div className='flex-1'>
        <h3 className='font-semibold text-sm'>{list.title}</h3>
        <p className='text-gray-500 text-xs'>{list.storiesCount} Historias</p>
      </div>

      <div className='relative'>
        <button
          onClick={() => setShowMenu(!showMenu)}
          className='p-2 hover:bg-gray-200 rounded'
        >
          <EllipsisHorizontalIcon className='w-6 h-6 border-1 border-gray-400' />
        </button>

        {/* Menú desplegable */}
        {showMenu && (
          <div className='absolute right-0 top-full mt-2 w-56 bg-white border border-gray-200 rounded shadow-lg z-10'>
            <ul className='py-1 text-sm text-gray-700'>
              <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>
                Lista principal
              </li>
              <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>
                Compartir a través de Facebook
              </li>
              <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>
                Compartir a través de Twitter
              </li>
              <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>
                Compartir en Pinterest
              </li>
              <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>
                Compartir en Tumblr
              </li>
              <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>
                Compartir por correo electrónico
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

// Validación de props con PropTypes
ReadingListCard.propTypes = {
  list: PropTypes.shape({
    id: PropTypes.number, // o string, según tu caso
    coverImg: PropTypes.string, // URL de la imagen de portada
    title: PropTypes.string, // Título de la lista de lectura
    storiesCount: PropTypes.number, // Número de historias
  }).isRequired,
};

export default ReadingListCard;
