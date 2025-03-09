import { CustomCarousel } from "./carousel";
import { ContainerHome } from "@/containers/home";
import { CustomCarouselBooks } from "./carousel/books";

const HomeView = () => {
  return (
    <>
      <div className="min-h-screen h-full overflow-hidden">
        <h2 id="footer-heading" className="sr-only">
          Home
        </h2>
        <ContainerHome>
          <p>Lo más interesante de la semana</p>
          <CustomCarousel />
          <CustomCarouselBooks/>
          <p>Historias gratis escogidas por la comunidad</p>
          <p>historias completadas</p>
          <p>recomendaciones para ti</p>
          <p>lo mejor de romance y amor</p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque eos
            perferendis quidem fugiat, quo tenetur adipisci deserunt similique,
            perspiciatis et dolor animi. Libero modi provident reprehenderit
            labore non alias exercitationem.xxxxxxxxx
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque eos
            perferendis quidem fugiat, quo tenetur adipisci deserunt similique,
            perspiciatis et dolor animi. Libero modi provident reprehenderit
            labore non alias exercitationem.xxxxxxxxx
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque eos
            perferendis quidem fugiat, quo tenetur adipisci deserunt similique,
            perspiciatis et dolor animi. Libero modi provident reprehenderit
            labore non alias exercitationem.xxxxxxxxx
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque eos
            perferendis quidem fugiat, quo tenetur adipisci deserunt similique,
            perspiciatis et dolor animi. Libero modi provident reprehenderit
            labore non alias exercitationem.xxxxxxxxx
          </p>
        </ContainerHome>
      </div>
    </>
  );
};

export default HomeView;
