import { BestBooks } from "./best-books";
import { Features } from "./features";
import { Hero } from "./hero";

const HomeView = () => {
  return (
    <>
      <div className="min-h-screen">
        <h2 id="footer-heading" className="sr-only">
          Home
        </h2>
        <Hero />
        <Features />
        <BestBooks/>
      </div>
    </>
  );
};

export default HomeView;
