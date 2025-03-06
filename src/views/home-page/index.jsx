import { CustomCarousel } from "./carousel";
import { ContainerHome } from "@/containers/home";

const HomeView = () => {
  return (
    <>
      <div className="min-h-screen h-full overflow-hidden">
        <h2 id="footer-heading" className="sr-only">
          Home
        </h2>
        <ContainerHome>
          <p>
          Lo más interesante de la semana
          </p>
          <CustomCarousel />
          <p>
            Historias gratis escogidas por la comunidad
          </p>
          <p>
            historias completadas
          </p>
          <p>recomendaciones para ti</p>
          <p>lo mejor de romance y amor</p>
        </ContainerHome>
      </div>
    </>
  );
};

export default HomeView;
