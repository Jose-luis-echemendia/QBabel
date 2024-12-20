import { Hero } from "./hero";

const HomeView = () => {
  return (
    <>
      <div className="min-h-screen">
        <h2 id="footer-heading" className="sr-only">
          Home
        </h2>
        <Hero />
      </div>
    </>
  );
};

export default HomeView;
