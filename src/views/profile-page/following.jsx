import Portada from '../../../public/assets/images/home/best_books/book3.jpg';
import Avatar from '../../../public/assets/images/avatar.jpeg';

const followingData = [
  {
    id: 1,
    name: 'Joselyn',
    username: '@JoselynGuanipa',
    works: 1,
    following: 41,
    followers: 47,
    imageUrl: Portada,
  },
  {
    id: 2,
    name: 'TheChopy28',
    username: '@TheChopy28',
    works: 1,
    following: 2,
    followers: 76,
    imageUrl: Portada,
  },
];

export const Following = () => {
  return (
    <div className='flex flex-wrap gap-6'>
      {followingData.map((user) => (
        <div
          key={user.id}
          className='w-64 border rounded-md overflow-hidden shadow-md bg-white'
        >
          <div className='relative'>
            <img
              src={user.imageUrl}
              alt={user.name}
              className='w-full h-32 object-cover'
            />

            <img
              src={Avatar}
              alt='Avatar'
              className='w-16 h-16 rounded-full border-2 border-white absolute -bottom-8 left-1/2 transform -translate-x-1/2'
            />
          </div>

          <div className='p-4 text-center mt-10'>
            <h3 className='font-bold text-lg'>{user.name}</h3>
            <p className='text-sm text-gray-600'>{user.username}</p>
            <button className='bg-[#53C1BF] text-white px-14 flex gap-1 items-center py-2 mt-3 rounded-md hover:opacity-90 transition-opacity'>
              <span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  className='w-4 h-4'
                >
                  <path d='M5.25 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM2.25 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM18.75 7.5a.75.75 0 0 0-1.5 0v2.25H15a.75.75 0 0 0 0 1.5h2.25v2.25a.75.75 0 0 0 1.5 0v-2.25H21a.75.75 0 0 0 0-1.5h-2.25V7.5Z' />
                </svg>
              </span>
              Siguiendo
            </button>
          </div>

          <div className='border-t p-4 flex justify-around text-sm'>
            <div className='text-center'>
              <p className='font-bold'>{user.works}</p>
              <p>Obras</p>
            </div>
            <div className='text-center'>
              <p className='font-bold'>{user.following}</p>
              <p>Siguiendo</p>
            </div>
            <div className='text-center'>
              <p className='font-bold'>{user.followers}</p>
              <p>Seguidores</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
