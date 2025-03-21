import ReadingListCard from './reading-list-card';

export const ReadingListView = () => {
  const readingLists = [
    {
      id: 1,
      title: 'Lista de lectura de AndyTorres585',
      storiesCount: 4,
      coverImg: 'https://via.placeholder.com/100x100?text=Cover',
    },
  ];

  return (
    <div className='p-4'>
      {/* Encabezado */}
      <div className='flex flex-col w-72   mb-4'>
        <button className='bg-primary text-white px-3 py-1 rounded-md hover:bg-orange-700 transition'>
          Nueva lista de lectura +
        </button>
      </div>

      {/* Render de las listas de lectura */}
      {readingLists.map((list) => (
        <ReadingListCard key={list.id} list={list} />
      ))}
    </div>
  );
};
