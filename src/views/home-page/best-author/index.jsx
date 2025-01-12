// best-author-page.jsx
import { BestAuthor } from './best-author';
import { schemaImages } from './schema/schema-images';

export const BestAuthorPage = () => {
  return (
    <section className="relative min-h-screen z-0 p-10">
      <p className="text-center text-[20px] font-opensans font-semibold mt-16 text-[#644844]">
        Find out more about what we do for writers →
      </p>

      <h2 className="text-center font-quicksand mt-16 font-bold text-[64px] text-[#644844]">
        Escritores destacados
      </h2>

      <BestAuthor images={schemaImages} />
    </section>
  );
};
