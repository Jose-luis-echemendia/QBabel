import { BestAuthorPage } from "./best-author";
import { BestBooks } from "./best-books";
import { ExploitYourTalent } from "./exploit-your-talent";
import { Hero } from "./hero";
import { Opinions } from "./Opinions";
import { Categories } from "./categories";
import { Login } from "../auth/login";

const WelcomeView = () => {
  return (
    <>
      <div className="hidden md:block md:min-h-screen md:overflow-hidden">
        <h2 id="footer-heading" className="sr-only">
          Welcome
        </h2>
        <Hero />
        <ExploitYourTalent />
        <BestAuthorPage />
        <BestBooks />
        <Categories />
        <Opinions />
      </div>
      <div className="lg:hidden">
        <Login />
      </div>
    </>
  );
};

export default WelcomeView;
