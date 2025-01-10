import { BestAuthor } from './best-author';
import { BestBooks } from './best-books';
import { ExploitYourTalent } from './explota-tu-talento';
import { Hero } from './hero';

const HomeView = () => {
  return (
    <>
      <div className="min-h-screen overflow-hidden">
        <h2 id="footer-heading" className="sr-only">
          Home
        </h2>
        <Hero />
        <ExploitYourTalent />
        <BestAuthor />
        <BestBooks />
      </div>
    </>
  );
};

export default HomeView;
