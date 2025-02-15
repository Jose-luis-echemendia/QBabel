// best-author-page.jsx
import { Carrusel } from "./carrusel";

export const BestAuthorPage = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col p-20 -mt-10 mb-20">
      <div>
        <p className="mx-auto w-fit text-[20px] font-opensans font-semibold mt-28 text-[#644844]">
          Find out more about what we do for writers →
        </p>

        <h2 className="mx-auto w-fit font-quicksand mt-16 font-bold text-[64px] text-[#644844]">
          Escritores destacados
        </h2>
      </div>
      <div className="flex flex-row justify-center items-center">
        <img
          src="/assets/images/home/best_author/Vector.png"
          alt=""
          className="absolute top-36 -left-0 w-[500px] h-[800px] z-[-1]"
        />
        <Carrusel />
      </div>
    </section>
  );
};
