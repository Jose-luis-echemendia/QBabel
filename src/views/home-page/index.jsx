import { BestAuthorPage } from './best-author';
import { BestBooks } from './best-books';
import { ExploitYourTalent } from './exploit-your-talent';
import { Hero } from './hero';
import { Opinions } from './Opinions';
import Categoria from './categories';

const HomeView = () => {
  return (
    <>
      <div className="min-h-screen overflow-hidden">
        <h2 id="footer-heading" className="sr-only">
          Home
        </h2>
        <Hero />
        <ExploitYourTalent />
        <BestAuthorPage />
        <BestBooks />
        <Categoria/>
        <Opinions />
      </div>
    </>
  );
};

export default HomeView;
