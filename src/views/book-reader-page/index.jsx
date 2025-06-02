import { useState, useEffect } from "react";
import { Document, Page } from "react-pdf";
import { useBook } from "@/hooks/redux/useBook";
import { useAppSelector } from "@/hooks/redux/useStore";
import { useParams } from "react-router-dom";

const BookReaderView = () => {
  const params = useParams();
  const { handleGetBookForId } = useBook();
  const booksState = useAppSelector((state) => state.book);
  const { loading, book } = booksState;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    const uid = params.bookId;
    handleGetBookForId(uid);
  }, [params]);

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [activeButton, setActiveButton] = useState("");
  const [scale, setScale] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function goToPrevPage() {
    setActiveButton("previous");
    setPageNumber((prevPageNumber) => Math.max(prevPageNumber - 2, 1));
    setTimeout(() => setActiveButton(""), 300); // Reset active state after animation
  }

  function goToNextPage() {
    setActiveButton("next");
    setPageNumber((prevPageNumber) => Math.min(prevPageNumber + 2, numPages));
    setTimeout(() => setActiveButton(""), 300); // Reset active state after animation
  }

  function handlePageNumberChange(event) {
    const pageNumber = parseInt(event.target.value, 10);
    if (!isNaN(pageNumber) && pageNumber >= 1 && pageNumber <= numPages) {
      setPageNumber(pageNumber);
    }
  }

  const zoomIn = () => {
    setScale((prev) => Math.min(prev + 0.2, 2));
  };

  const zoomOut = () => {
    setScale((prev) => Math.max(prev - 0.2, 0.5));
  };

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 400) {
        setScale(0.5);
      } else {
        setScale(1);
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "ArrowLeft") {
        goToPrevPage();
      } else if (event.key === "ArrowRight") {
        goToNextPage();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [numPages, pageNumber]);

  return (
    <>
      {!loading && book && (
        <div className="bg-[#fff8eb] flex flex-col items-center h-screen overflow-x-hidden">
          <div className="flex items-center gap-5 mb-5 mt-5 text-xl sm:text-2xl">
            <button
              onClick={goToPrevPage}
              disabled={pageNumber <= 1}
              className={`text-xl sm:text-2xl text-gray-100 transition-all duration-200 hover:text-xl sm:hover:text-2xl hover:text-whitesmoke hover:bg-[#a76c00] px-2 sm:px-3 py-1 pl-3 sm:pl-5 pr-2 rounded-tl-2xl rounded-bl-2xl rounded-tr-lg rounded-br-lg ${
                activeButton === "previous" ? "bg-[#a76c00]" : "bg-[#422b00]"
              }`}
            >
              Anterior
            </button>
            <p>
              Page {pageNumber} -{" "}
              {pageNumber + 1 <= numPages ? pageNumber + 1 : pageNumber} of{" "}
              {numPages}
            </p>
            <button
              onClick={goToNextPage}
              disabled={pageNumber >= numPages}
              className={`text-xl sm:text-2xl text-gray-100 transition-all duration-200 hover:text-xl sm:hover:text-2xl hover:text-whitesmoke hover:bg-[#a76c00] px-2 sm:px-3 py-1 pl-2 sm:pl-5 pr-2 rounded-tl-lg rounded-bl-lg rounded-tr-2xl rounded-br-2xl ${
                activeButton === "next" ? "bg-[#a76c00]" : "bg-[#422b00]"
              }`}
            >
              Siguiente
            </button>
          </div>

          <Document
            file={book.file_details.file}
            onLoadSuccess={onDocumentLoadSuccess}
          >
            {/* Contenido del libro */}
            <div className="flex w-full h-full z-0 gap-16">
              {/* Página izquierda */}
              <div className="flex-1 flex justify-end items-center p-4">
                <div className="bg-white w-full h-full rounded-l-xl rounded-r-sm shadow-inner flex items-center justify-center overflow-hidden">
                  <Document
                    file={book.file_details.file}
                    onLoadSuccess={onDocumentLoadSuccess}
                    className="h-full"
                  >
                    <div className="flex items-center h-full lg:rounded-tr-lg lg:rounded-br-lg flex-col lg:flex-row">
                      <Page
                        pageNumber={pageNumber}
                        renderTextLayer={false}
                        renderAnnotationLayer={false}
                        scale={scale}
                        className="w-[80vw] h-[40vw] lg:w-[40vw] lg:h-[40vw] flex justify-center items-center rounded-tr-lg rounded-br-lg"
                      />
                    </div>
                  </Document>
                </div>
              </div>
              {/* Lomo del libro */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-[95%] bg-gradient-to-r via-amber-900 to-amber-800 rounded-lg z-10 flex items-center justify-center">
                <div className="transform rotate-90 whitespace-nowrap text-black font-bold tracking-wider text-[14px] text-center text-xl">
                  {book.title}
                </div>
              </div>

              {/* Página derecha */}
              <div className="flex-1 flex justify-start items-center p-4">
                <div className="bg-white w-[80vw] h-[40vw] lg:w-[40vw] lg:h-[40vw]  rounded-r-xl rounded-l-sm shadow-inner flex items-center justify-center overflow-hidden">
                  {pageNumber + 1 <= numPages ? (
                    <Document file={book.file_details.file} className="h-full">
                      <div className="flex items-center  lg:rounded-tr-lg lg:rounded-br-lg flex-col lg:flex-row">
                        <Page
                          pageNumber={pageNumber + 1}
                          renderTextLayer={false}
                          renderAnnotationLayer={false}
                          scale={scale}
                          className="w-[80vw] h-[40vw] lg:w-[40vw] lg:h-[40vw] flex justify-center items-center rounded-tr-lg rounded-br-lg"
                        />
                      </div>
                    </Document>
                  ) : (
                    <div className="text-black text-lg italic flex items-center justify-center lg:rounded-tr-lg lg:rounded-br-lg flex-col lg:flex-row w-[80vw] h-[40vw] lg:w-[40vw] lg:h-[40vw]  rounded-br-lg">
                      Fin.
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Document>
        </div>
      )}
    </>
  );
};

export default BookReaderView;
