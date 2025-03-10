import { CustomCarousel } from "./carousel";
import { ContainerHome } from "@/containers/home";
import { CustomCarouselBooks } from "./carousel/books";
import { BookGroupCard } from "./carousel/books/carousel-items";

const HomeView = () => {
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
            <CustomCarouselBooks carouselSize={"h-80"} />
          </div>
          <CustomCarousel />
          <div className="flex flex-col gap-1">
            <span className="ml-7 text-black font-bold font-opensans text-lg leading-8">
              Lo mejor de fantasía para ti
            </span>
            <CustomCarouselBooks carouselSize={"h-96"}/>
          </div>
          <div className="flex flex-col gap-1">
            <span className="ml-7 text-black font-bold font-opensans text-lg leading-8">
              Lo mejor de fantasía para ti
            </span>
            <CustomCarouselBooks carouselSize={"h-96"}/>
          </div>
          <div className="flex flex-col gap-0">
            <span className="ml-7 text-black font-bold font-opensans text-lg leading-8">
              Las mejores selecciones para ti para ti
            </span>
            <CustomCarouselBooks boolsPerSlide={6} carouselSize={"h-96"} />
          </div>

          <div className="flex flex-col gap-1">
            <span className="ml-7 text-black font-bold font-opensans text-lg leading-8">
              Lo mejor de fantasía para ti
            </span>
            <CustomCarouselBooks carouselSize={"h-96"}/>
          </div>
          <div className="flex flex-col gap-1">
            <span className="ml-7 text-black font-bold font-opensans text-lg leading-8">
              Lo mejor de fantasía para ti
            </span>
            <CustomCarouselBooks carouselSize={"h-96"}/>
          </div>
          <div className="flex flex-col gap-0">
            <span className="flex gap-2 -mb-1.5 items-center justify-start ml-7 text-black font-bold font-opensans text-lg leading-8">
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
              boolsPerSlide={2}
              carouselSize="h-80"
              CarouselItemComponent={BookGroupCard}
            />
          </div>
          <p>historias completadas</p>
          <p>recomendaciones para ti</p>
          <p>lo mejor de romance y amor</p>
        </ContainerHome>
      </div>
    </>
  );
};

export default HomeView;
