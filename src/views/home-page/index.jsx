import { CustomCarousel } from "./carousel";
import { ContainerHome } from "@/containers/home";
import { CustomCarouselBooks } from "./carousel/books";

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
            <CustomCarouselBooks />
          </div>
          <CustomCarousel />
          <div className="flex flex-col gap-1">
            <span className="ml-7 text-black font-bold font-opensans text-lg leading-8">
              Lo mejor de fantasía para ti
            </span>
            <CustomCarouselBooks />
          </div>
          <div className="flex flex-col gap-1">
            <span className="ml-7 text-black font-bold font-opensans text-lg leading-8">
              Lo mejor de fantasía para ti
            </span>
            <CustomCarouselBooks />
          </div>
          <div className="flex flex-col gap-1">
            <span className="ml-7 text-black font-bold font-opensans text-lg leading-8">
              Las mejores selecciones para ti para ti
            </span>
            <CustomCarouselBooks boolsPerSlide={6} carouselSize="h-80" />
          </div>

          <div className="flex flex-col gap-1">
            <span className="ml-7 text-black font-bold font-opensans text-lg leading-8">
              Lo mejor de fantasía para ti
            </span>
            <CustomCarouselBooks />
          </div>
          <div className="flex flex-col gap-1">
            <span className="ml-7 text-black font-bold font-opensans text-lg leading-8">
              Lo mejor de fantasía para ti
            </span>
            <CustomCarouselBooks />
          </div>
          <p>Historias gratis escogidas por la comunidad</p>
          <p>historias completadas</p>
          <p>recomendaciones para ti</p>
          <p>lo mejor de romance y amor</p>
        </ContainerHome>
      </div>
    </>
  );
};

export default HomeView;
