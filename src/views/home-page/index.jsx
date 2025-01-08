import { BestBooks } from "./best-books";
import { Test } from "./best-books/test";
import { ExploitYourTalent } from "./explota-tu-talento";
import { Hero } from "./hero";

const HomeView = () => {
  return (
    <>
      <div className="min-h-screen">
        <h2 id="footer-heading" className="sr-only">
          Home
        </h2>
        <Hero />
        <ExploitYourTalent />
        <BestBooks/>
      </div>
    </>
  );
};

export default HomeView;
