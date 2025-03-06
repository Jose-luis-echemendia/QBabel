import CustomFooter  from "@/components/footer";
import { Decorator } from "./decorator";

const Footer = () => {
  return (
    <footer className="w-full max-h-screen h-full p-10 relative flex justify-center items-center bg-[#2E2E2E] text-primary">
      <section className="flex flex-col justify-center items-center w-full">
        <h2 className="font-italianno mx-auto w-fit mt-2 text-[64px]">
          QBabel siempre disponible para usted
        </h2>
        <div className="w-full grid grid-cols-10 gap-20 justify-center items-center px-16">
          <div className="col-span-3 flex flex-col justify-center items-center gap-10">
            <figure className="border border-primary rounded-full p-0 m-0">
              <img
                src="/assets/images/home/footer/1.png"
                alt="logo"
                className="object-cover"
              />
            </figure>
            <div className="flex justify-center items-center gap-10 mt-3">
              <button className="bg-primary py-4 px-14 rounded-xl">
                <span className="text-white-100 font-anton font-medium text-2xl">
                  Leer
                </span>
              </button>
              <button className="bg-primary py-4 px-14 rounded-xl">
                <span className="text-black-500 font-anton font-medium text-2xl">
                  Escribir
                </span>
              </button>
            </div>
            <h5 className="font-italianno mx-auto w-fit mt-2 text-[64px] leading-[55px] text-center">
              Has realidad tu historia!
            </h5>
          </div>
          <div className="col-span-6 grid grid-cols-3 gap-10 ml-10 -mt-20">
            <div className="font-quicksand text-3xl">Subtitulo</div>
            <div className="font-quicksand text-3xl">Subtitulo</div>
            <div className="font-quicksand text-3xl">Subtitulo</div>
            <div className="">links</div>
            <div className="">links</div>
            <div className="">links</div>
            <div className="">links</div>
            <div className="">links</div>
            <div className="">links</div>
            <div className="">links</div>
            <div className="">links</div>
            <div className="">links</div>
            <div className="">links</div>
            <div className="">links</div>
            <div className="">links</div>
          </div>
        </div>
        <CustomFooter />
      </section>
      <Decorator />
    </footer>
  );
};

export default Footer;
