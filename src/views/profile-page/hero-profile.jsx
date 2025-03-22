export const HeroProfile = () => {
  return (
    <div className='h-80 bg-green-600 flex flex-col items-center justify-center'>
      {/* Avatar */}
      <div className='w-24 h-24 text-5xl text-white bg-green-700 rounded-full flex justify-center items-center border border-white border-opacity-50'>
        A
      </div>

      {/* Nombre y usuario */}
      <span className='mt-3 text-3xl text-center text-white text-shadow font-quicksand'>
        Andy Torres
      </span>
      <span className='text-center text-white'>@AndyTorres585</span>

      {/* Secciones de obras, lecturas y seguidores */}
      <div className='flex space-x-8 mt-4 text-white'>
        <div className='w-24 text-center hover:font-bold transition duration-200'>
          <p className='font-bold'>0</p>
          <span>Obras</span>
        </div>
        <div className='w-24 text-center hover:font-bold transition duration-200 mt-3'>
          <p className='font-bold'>1</p>
          <span>Lista de lectura</span>
        </div>
        <div className='w-24 text-center hover:font-bold transition duration-200'>
          <p className='font-bold'>1</p>
          <span>Seguidor</span>
        </div>
      </div>
    </div>
  );
};
