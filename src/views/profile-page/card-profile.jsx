import Avatar from '../../../public/assets/images/avatar.jpeg';

const socialLinks = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com',
    bgColor: 'bg-[#4267B2]',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        fill='currentColor'
        className='w-6 h-6'
      >
        <path d='M22.525 0H1.474C.66 0 0 .66 0 1.475v21.05C0 23.34.66 24 1.474 24H12.82v-9.294H9.692v-3.62h3.128V8.413c0-3.1 1.892-4.788 4.66-4.788 1.325 0 2.464.099 2.794.143v3.24l-1.92.001c-1.507 0-1.8.717-1.8 1.767v2.318h3.597l-.468 3.62h-3.129V24h6.134C23.34 24 24 23.34 24 22.525V1.475C24 .66 23.34 0 22.525 0z' />
      </svg>
    ),
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com',
    bgColor: 'bg-[#1DA1F2]',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        fill='currentColor'
        className='w-6 h-6'
      >
        <path d='M24 4.557a9.93 9.93 0 0 1-2.828.775 4.93 4.93 0 0 0 2.165-2.724 9.862 9.862 0 0 1-3.127 1.195A4.92 4.92 0 0 0 16.616 3c-2.733 0-4.947 2.224-4.947 4.966 0 .39.042.765.126 1.124-4.116-.207-7.764-2.177-10.21-5.17a4.972 4.972 0 0 0-.666 2.496c0 1.72.869 3.24 2.19 4.132a4.904 4.904 0 0 1-2.238-.62v.06c0 2.403 1.697 4.404 3.946 4.855a4.935 4.935 0 0 1-2.224.085 4.93 4.93 0 0 0 4.6 3.417 9.868 9.868 0 0 1-6.102 2.108c-.396 0-.788-.023-1.175-.067A13.94 13.94 0 0 0 7.548 21c9.14 0 14.307-7.72 13.995-14.646A9.935 9.935 0 0 0 24 4.557z' />
      </svg>
    ),
  },
  {
    name: 'Pinterest',
    url: 'https://www.pinterest.com',
    bgColor: 'bg-[#BD081C]', // Color oficial de Pinterest
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        fill='currentColor'
        className='w-6 h-6'
      >
        <path d='M12 0C5.373 0 0 5.372 0 12c0 4.991 3.657 9.14 8.458 10.032-.116-.851-.22-2.158.045-3.087.241-.92 1.557-6.162 1.557-6.162s-.397-.794-.397-1.966c0-1.841 1.07-3.22 2.401-3.22 1.132 0 1.676.848 1.676 1.866 0 1.137-.722 2.842-1.095 4.422-.31 1.302.657 2.363 1.945 2.363 2.336 0 3.915-2.46 3.915-6.002 0-3.138-2.26-5.33-5.494-5.33-3.742 0-5.93 2.802-5.93 5.688 0 1.128.432 2.342.973 3.002a.392.392 0 0 1 .09.377c-.099.41-.316 1.302-.358 1.485-.056.241-.179.293-.412.177-1.533-.716-2.494-2.96-2.494-4.763 0-3.877 2.82-7.446 8.149-7.446 4.277 0 7.589 3.047 7.589 7.146 0 4.24-2.671 7.651-6.387 7.651-1.249 0-2.424-.647-2.825-1.41l-.768 2.92c-.277 1.068-1.028 2.404-1.536 3.222.775.24 1.597.372 2.457.372 6.627 0 12-5.373 12-12S18.627 0 12 0z' />
      </svg>
    ),
  },
  {
    name: 'Tumblr',
    url: 'https://www.tumblr.com',
    bgColor: 'bg-[#35465C]',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        fill='currentColor'
        className='w-6 h-6'
      >
        <path d='M14.201 14.98c-.351.168-.604.05-.604-.352v-3.871h2.516V7.81h-2.52V3.579H11.01c-.044.12-.073.252-.089.395-.071.589-.199 1.082-.38 1.477-.176.385-.413.728-.711 1.028-.298.298-.604.52-.922.66-.318.14-.693.209-1.124.209v2.463h1.55v3.849c0 .457.013.774.04.953.027.176.092.375.196.592.104.216.234.41.392.582.157.173.377.312.66.417.28.106.63.158 1.05.158.355 0 .684-.039.988-.118.304-.08.595-.18.873-.304v-2.285l.001.001z' />
      </svg>
    ),
  },
  {
    name: 'Email',
    url: 'mailto:alguien@correo.com',
    bgColor: 'bg-[#D44638]',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        fill='currentColor'
        className='w-6 h-6'
      >
        <path d='M0 4a2 2 0 012-2h20a2 2 0 012 2v16a2 2 0 01-2 2H2a2 2 0 01-2-2V4zm22 0H2v16h20V4zm-2 2v2l-8 4.5L4 8V6l8 4.5L20 6z' />
      </svg>
    ),
  },
];

export const CardProfile = () => {
  return (
    <div className=' py-6 px-4 border border-gray- border-opacity-40 rounded-md w-[370px]  mt-6 shadow-md'>
      <div className='flex justify-center items-center flex-col text-sm border-b-2'>
        <p className='mb-4 font-inter font-bold'>
          Ayuda a que las personas puedan conocerte
        </p>
        <button className='bg-primary text-center py-3 px-2 font-quicksand font-extrabold rounded-md hover:bg-orange-700 transition-all duration-300 hover:text-white'>
          Añade una descripción
        </button>
        <span className='font-semibold self-start mt-4 mb-4'>
          Se ha unido <span className='font-normal'>marzo 27, 2020</span>
        </span>
      </div>

      <div className='mt-4 border-b-2'>
        <span className='uppercase text-gray-cam'>Siguiendo</span>
        <div className='flex gap-4 mt-4 mb-4 ml-2'>
          <img src={Avatar} alt='Avatar 1' className='rounded-full w-8' />
          <img src={Avatar} alt='Avatar 2' className='rounded-full w-8' />
        </div>
      </div>

      {/* Sección para compartir perfil */}
      <div className='mt-4'>
        <span className='uppercase text-gray-cam'>Compartir perfil</span>
        <div className='flex gap-2 mt-4 mb-4 ml-2'>
          {socialLinks.map(({ name, url, bgColor, icon }) => (
            <a
              key={name}
              href={url}
              target='_blank'
              rel='noopener noreferrer'
              aria-label={name}
              className={`flex items-center justify-center w-9 h-9 rounded-full text-white hover:opacity-80 transition-opacity duration-300 ${bgColor}`}
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
