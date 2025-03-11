import { useState, useEffect } from 'react';
import { Document, Page } from 'react-pdf';

const BookReaderView = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [activeButton, setActiveButton] = useState('');

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function goToPrevPage() {
    setActiveButton('previous');
    setPageNumber(prevPageNumber => Math.max(prevPageNumber - 2, 1));
    setTimeout(() => setActiveButton(''), 300); // Reset active state after animation
  }

  function goToNextPage() {
    setActiveButton('next');
    setPageNumber(prevPageNumber => Math.min(prevPageNumber + 2, numPages));
    setTimeout(() => setActiveButton(''), 300); // Reset active state after animation
  }

  function handlePageNumberChange(event) {
    const pageNumber = parseInt(event.target.value, 10);
    if (!isNaN(pageNumber) && pageNumber >= 1 && pageNumber <= numPages) {
      setPageNumber(pageNumber);
    }
  }

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'ArrowLeft') {
        goToPrevPage();
      } else if (event.key === 'ArrowRight') {
        goToNextPage();
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [numPages, pageNumber]);

  return (
    <div className='bg-[#fff8eb] flex flex-col items-center h-screen'>
      <div className='flex items-center gap-5 mb-5 mt-5 text-2xl'>
        <button
          onClick={goToPrevPage}
          disabled={pageNumber <= 1}
          className={`text-2xl text-gray-100 transition-all duration-200 hover:text-2xl hover:text-whitesmoke hover:bg-[#a76c00] px-3 py-1 pl-5 pr-2 rounded-tl-2xl rounded-bl-2xl rounded-tr-lg rounded-br-lg ${activeButton === 'previous' ? 'bg-[#a76c00]' : 'bg-[#422b00]'}`}
        >
          Anterior
        </button>
        <p>
          Page {pageNumber} - {pageNumber + 1 <= numPages ? pageNumber + 1 : pageNumber} of {numPages}
        </p>
        <button
          onClick={goToNextPage}
          disabled={pageNumber >= numPages}
          className={`text-2xl text-gray-100 bg-[#422b00] transition-all duration-200 hover:text-2xl hover:text-whitesmoke hover:bg-[#a76c00] px-5 py-1 pl-2 pr-5 rounded-tl-lg rounded-bl-lg rounded-tr-2xl rounded-br-2xl ${activeButton === 'next' ? 'bg-[#a76c00]' : 'bg-[#422b00]'}`}
        >
          Siguiente
        </button>
        {/*<input
                    type="number"
                    min="1"
                    max={numPages || 1}
                    value={pageNumber}
                    onChange={handlePageNumberChange}
                    aria-label="Page Number"
                />*/}
      </div>

      <Document file="/pdf.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <div className="flex justify-center items-center h-full border-8 border-[#492800] rounded-2xl bg-white shadow-2xl shadow-gray-800 sm:flex-col lg:flex-row">
          <Page
            pageNumber={pageNumber}
            renderTextLayer={false}
            renderAnnotationLayer={false}
            className="w-[40vw] h-[40vw] flex justify-center items-center rounded-tl-lg rounded-bl-lg"
          />
          {pageNumber + 1 <= numPages && (
            <div className="flex items-center h-full rounded-tr-lg rounded-br-lg sm:flex-col lg:flex-row">
              <div className='lg:w-4 lg:h-full bg-[#492800] sm:w-full sm:h-4'></div>
              <Page
                pageNumber={pageNumber + 1}
                renderTextLayer={false}
                renderAnnotationLayer={false}
                className="w-[40vw] h-[40vw] flex justify-center items-center rounded-tr-lg rounded-br-lg"
              />
            </div>
          )}
        </div>
      </Document>
    </div>
  );
}

export default BookReaderView;
