import { bestBooksData } from '../../constants/home-page/best-books';

export default function ReadingListProfile() {
  return (
    <div className=' mx-auto px-4 py-8  shadow-md border border-gray-400 mt-6 border-opacity-30 rounded-md'>
      <div className='flex  justify-between mb-4 border-b'>
        <div className='flex  justify-between w-full mb-5 '>
          <h2 className='text-2xl font-bold  font-quicksand'>
            1 Lista de lectura
          </h2>
          <button
            type='button'
            aria-label='Configuración'
            className=' hover:bg-gray-100 rounded-full flex gap-2'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className='size-8 text-gray-700 mr-4 order-1'
            >
              <path
                fillRule='evenodd'
                d='M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 0 0-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 0 0-2.282.819l-.922 1.597a1.875 1.875 0 0 0 .432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 0 0 0 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 0 0-.432 2.385l.922 1.597a1.875 1.875 0 0 0 2.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 0 0 2.28-.819l.923-1.597a1.875 1.875 0 0 0-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 0 0 0-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 0 0-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 0 0-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 0 0-1.85-1.567h-1.843ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z'
                clipRule='evenodd'
              />
            </svg>

            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='size-8 text-gray-700'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M12 4.5v15m7.5-7.5h-15'
              />
            </svg>
          </button>
        </div>
      </div>

      <div className='mb-6'>
        <h2 className='text-lg font-semibold'>
          Lista de lectura de AndyTorres585
        </h2>
        <p className='relative text-gray-600 text-sm'>
          Lista de lectura 7 Historias
        </p>
      </div>

      {/* Contenedor de libros */}
      <div className='flex gap-4 overflow-x-auto'>
        {bestBooksData.slice(0, 5).map((book) => (
          <div
            key={book.id}
            className='w-36 flex-shrink-0 hover:shadow-lg transition-shadow duration-200'
          >
            <img
              src={book.img}
              alt={book.tittle}
              className='w-full h-52 object-cover rounded'
            />

            <h3 className='mt-2 font-semibold text-sm leading-tight'>
              {book.tittle}
            </h3>

            <div className='flex items-center justify-between text-xs mt-1 text-gray-600'>
              <div className='flex items-center space-x-1'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-4 h-4'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M2.036 12.322c-.07-.207-.07-.431 0-.639C3.423 7.51 7.36 4.5 12 4.5s8.577 3.01 9.963 7.183c.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5s-8.577-3.01-9.963-7.178z'
                  />
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z'
                  />
                </svg>
                <span>{book.reviews}</span>
              </div>

              {/* Votos */}
              <div className='flex items-center space-x-1'>
                {/* Ícono de "estrella" */}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-4 h-4'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0l-4.725 2.885a.562.562 0 0 1-.84-.61l1.285-5.385a.562.562 0 0 0-.182-.557L2.042 10.385c-.38-.325-.178-.948.321-.988l5.518-.442a.563.563 0 0 0 .475-.345L10.48 3.5l1 0z'
                  />
                </svg>
                <span>{book.parts}</span>
              </div>

              {/* Partes */}
              <div className='flex items-center space-x-1'>
                {/* Ícono de "lista" */}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-4 h-4'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5'
                  />
                </svg>
                <span>{book.parts}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
