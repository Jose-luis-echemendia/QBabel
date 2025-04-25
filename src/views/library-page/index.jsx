import { bestBooksData } from '../../constants/home-page/best-books';
import LibrarySection from './library-section';
const LibraryView = () => {
  return (
    <div className='min-h-screen bg-gray-100'>
      <LibrarySection books={bestBooksData} />
    </div>
  );
};

export default LibraryView;
