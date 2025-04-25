import CustomFooter from "@/components/footer";
import { Decorator } from "./decorator";

const Footer = () => {
  return (
    <footer className="w-full max-h-screen h-full p-10 relative flex justify-center items-center bg-[#2E2E2E] text-primary">
      <section className="flex flex-col gap-6 justify-center items-center w-full">
        <figure className="border border-primary rounded-full p-0 m-0">
          <img
            src="/assets/images/home/footer/1.png"
            alt="logo"
            className="object-cover"
          />
        </figure>
        <div className="flex justify-center items-center gap-10 mt-1">
          <button className="bg-primary py-2 px-10 rounded-xl">
            <span className="text-white-100 font-anton font-medium text-2xl">
              Leer
            </span>
          </button>
          <button className="bg-primary py-2 px-6 rounded-xl">
            <span className="text-black-500 font-anton font-medium text-2xl">
              Escribir
            </span>
          </button>
        </div>
        <h2 className="font-italianno mx-auto w-fit mt-2 text-[50px] leading-[55px] text-center">
          Has realidad tu historia!
        </h2>
        <CustomFooter />
      </section>
      <Decorator />
    </footer>
  );
};

export default Footer;
