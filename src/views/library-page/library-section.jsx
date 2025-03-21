import { useState } from 'react';
import PropTypes from 'prop-types';
import AllStories from './AllStories';

function LibrarySection({ books }) {
  const [activeTab, setActiveTab] = useState('current');

  return (
    <section className='py-4 '>
      <div className='max-w-[1200px] mx-auto px-4 '>
        <h2 className=' relative  text-3xl font-bold mb-4 mt-20  '>Library</h2>

        <div className='flex items-center justify-between border-b border-gray-200 mb-4'>
          <div className='flex space-x-6 text-xl'>
            <button
              className={`pb-2 ${
                activeTab === 'current'
                  ? 'border-b-2 border-primary font-bold'
                  : 'text-gray-600'
              }`}
              onClick={() => setActiveTab('current')}
            >
              Current reads
            </button>
            <button
              className={`pb-2 ${
                activeTab === 'archive'
                  ? 'border-b-2 border-primary  font-bold'
                  : 'text-gray-600'
              }`}
              onClick={() => setActiveTab('archive')}
            >
              Archive
            </button>
            <button
              className={`pb-2 ${
                activeTab === 'reading'
                  ? 'border-b-2 border-primary font-bold'
                  : 'text-gray-600'
              }`}
              onClick={() => setActiveTab('reading')}
            >
              Reading Lists
            </button>
          </div>
        </div>

        {activeTab === 'current' && (
          <>
            <h3 className='text-xl font-bold mb-7'>All Stories</h3>
            <AllStories books={books} />
          </>
        )}
        {activeTab === 'archive' && (
          <div className='text-gray-700'>Contenido del Archive...</div>
        )}
        {activeTab === 'reading' && (
          <div className='text-gray-700'>Contenido de Reading Lists...</div>
        )}
      </div>
    </section>
  );
}

LibrarySection.propTypes = {
  books: PropTypes.array.isRequired,
};

export default LibrarySection;
