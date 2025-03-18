import { CustomCarousel } from "./carousel";
import { ContainerHome } from "@/containers/home";
import { CustomCarouselBooks } from "./carousel/books";
import { BookGroupCard } from "./carousel/books/carousel-items";
import { useState, useEffect } from "react";

const HomeView = () => {
  const [boolsPerSlide, setBoolsPerSlide] = useState(8)
  const [carouselSize, setCarouselSize] = useState(80)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 400px)');

    const handleResize = (e) => {
      if (e.matches) {
        setBoolsPerSlide(4)
        setCarouselSize(52)
      } else {
        setBoolsPerSlide(8)
        setCarouselSize(80)
      }
    };

    // Añadir el evento listener
    mediaQuery.addEventListener('change', handleResize);

    // Comprobar inicialmente el tamaño de la pantalla
    handleResize(mediaQuery);

    // Limpiar el evento listener al desmontar el componente
    return () => {
      mediaQuery.removeEventListener('change', handleResize);
    };
  }, []);

  return (
    <>
      <div className="min-h-screen h-full overflow-hidden py-10 mt-5">
        <h2 id="footer-heading" className="sr-only">
          Home
        </h2>
        <ContainerHome>
          <div className="flex flex-col gap-1">
            <span className="ml-7 text-black font-bold font-opensans text-lg leading-8">
              Lo mejor de fantasía para ti
            </span>
            <CustomCarouselBooks carouselSize={`h-${carouselSize}`} boolsPerSlide={boolsPerSlide} />
          </div>
          <CustomCarousel />
          <div className="flex flex-col gap-1">
            <span className="ml-7 text-black font-bold font-opensans text-lg leading-8">
              Lo mejor de fantasía para ti
            </span>
            <CustomCarouselBooks carouselSize={`h-${carouselSize}`} boolsPerSlide={boolsPerSlide} />
          </div>
          <div className="flex flex-col gap-1">
            <span className="ml-7 text-black font-bold font-opensans text-lg leading-8">
              Lo mejor de fantasía para ti
            </span>
            <CustomCarouselBooks carouselSize={`h-${carouselSize}`} boolsPerSlide={boolsPerSlide} />
          </div>
          <div className="flex flex-col gap-0">
            <span className="ml-7 text-black font-bold font-opensans text-lg leading-8">
              Las mejores selecciones para ti para ti
            </span>
            <CustomCarouselBooks boolsPerSlide={boolsPerSlide} carouselSize={`h-${carouselSize}`} />
          </div>

          <div className="flex flex-col gap-1">
            <span className="ml-7 text-black font-bold font-opensans text-lg leading-8">
              Lo mejor de fantasía para ti
            </span>
            <CustomCarouselBooks carouselSize={`h-${carouselSize}`} boolsPerSlide={boolsPerSlide} />
          </div>
          <div className="flex flex-col gap-1">
            <span className="ml-7 text-black font-bold font-opensans text-lg leading-8">
              Lo mejor de fantasía para ti
            </span>
            <CustomCarouselBooks carouselSize={`h-${carouselSize}`} boolsPerSlide={boolsPerSlide} />
          </div>
          <div className="flex flex-col gap-0">
            <span className="flex gap-2 lg:-mb-1.5 mb-4 items-center justify-start ml-7 text-black font-bold font-opensans text-lg leading-8">
              Historias gratis de la semana escogidas por la comunidad
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 text-gray-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <small className="text-gray-600">22d 1h</small>
            </span>
            <CustomCarouselBooks
              boolsPerSlide={boolsPerSlide === 4 ? 1 : 2}
              carouselSize={`h-full`}
              CarouselItemComponent={BookGroupCard}
            />
          </div>
          <div className="flex flex-col gap-1">
            <span className="ml-7 text-gray-800 font-opensans text-lg -mb-2">
              Historias fascinante de tus escritos de QBabel
            </span>
            <span className="ml-7 flex gap-1.5 items-center text-black font-bold font-opensans text-lg leading-8">
              Historias para amar
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6 text-red-400 mt-0.5"
              >
                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
              </svg>
            </span>
            <CustomCarouselBooks carouselSize={`h-${carouselSize}`} boolsPerSlide={boolsPerSlide} />
          </div>
        </ContainerHome>
      </div>
    </>
  );
};

export default HomeView;
