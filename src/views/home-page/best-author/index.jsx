// best-author-page.jsx
import { BestAuthor } from './best-author';
import { schemaImages } from './schema/schema-images';

export const BestAuthorPage = () => {
  return (
    <section className="relative w-full min-h-screen z-10 ">
      <p className="mx-auto w-fit text-[20px] font-opensans font-semibold mt-28 text-[#644844]">
        Find out more about what we do for writers →
      </p>

      <h2 className="mx-auto w-fit font-quicksand mt-16 font-bold text-[64px] text-[#644844]">
        Escritores destacados
      </h2>

      <img
        src="/assets/images/home/best_author/Vector.png"
        alt=""
        className="relative -top-32  w-[500px] h-[900px]"
      />

      <BestAuthor images={schemaImages} />
    </section>
  );
};
