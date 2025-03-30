import { useState } from 'react';
import PropTypes from 'prop-types';
import Avatar from '../../../public/assets/images/avatar.jpeg';
function BookCard({ book }) {
  const [showActions, setShowActions] = useState(false);

  return (
    <div className=''>
      <div
        className='relative  w-44   '
        onMouseEnter={() => setShowActions(true)}
        onMouseLeave={() => setShowActions(false)}
      >
        <img
          src={book.img}
          alt={book.tittle}
          className='w-full h-72  object-cover rounded-md'
        />

        {showActions && (
          <div className='absolute inset-0 flex items-center justify-center transition-opacity duration-200'>
            <div className='relative bg-black bg-opacity-70 w-full h-full rounded p-4 flex flex-col items-center justify-center space-y-2'>
              <button className='w-full bg-transparent text-white border-2 px-3 py-1 rounded hover:bg-gray-300 cursor-pointer hover:text-black transition'>
                Start Reading
              </button>
              <button className='w-full bg-transparent text-white border-2 border-white px-3 py-1 rounded hover:bg-gray-300 cursor-pointer hover:text-black transition'>
                Details
              </button>
              <button className='w-full bg-transparent text-white border-2 border-white px-3 py-1 rounded hover:bg-gray-300 cursor-pointer hover:text-black transition'>
                Archive
              </button>
              <button className='w-full bg-transparent text-white border-2 border-white px-3 py-1 rounded  hover:bg-gray-300 cursor-pointer hover:text-black transition'>
                Add to List
              </button>

              <button
                className='absolute top-0 right-2 text-white p-1 rounded-full'
                onClick={() => console.log('Eliminar libro:', book.id)}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='size-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0'
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>

      <div className='flex items-center '>
        <div className='flex flex-col'>
          <h3 className='text-sm w-32 font-semibold mt-2 truncate'>
            {book.tittle}
          </h3>
          <p className='text-xs text-gray-500'>{book.author}</p>
        </div>

        <img
          src={Avatar}
          alt='Antoine De Saint-Exupéry'
          className='w-9 h-9 object-cover rounded-full mt-5'
        />
      </div>

      <div className='mt-1 flex  space-x-4 text-sm text-gray-600'>
        <div className='flex items-center space-x-1'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='size-4'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z'
            />
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
            />
          </svg>

          <span>{book.reviews}</span>
        </div>
        <div className='flex items-center space-x-1'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='size-4'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z'
            />
          </svg>

          <span>{book.parts}</span>
          {/* partes */}
        </div>
        <div className='flex items-center space-x-1'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='size-4'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5'
            ></path>
          </svg>
          <span>{book.parts}</span>
        </div>
      </div>
    </div>
  );
}

BookCard.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    tittle: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    reviews: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    parts: PropTypes.number.isRequired,
  }).isRequired,
};

export default BookCard;
