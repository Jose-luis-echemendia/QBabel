import { Decorator } from "./decorator";

const Footer = () => {
  return (
    <footer className="w-full max-h-screen h-full p-10 relative flex justify-center items-center bg-[#2E2E2E] text-primary">
      <section className="flex flex-col justify-center items-center">
        <h2 className="font-italianno mx-auto w-fit mt-2 font-bold text-[64px]">QBabel siempre disponible para usted</h2>
        <div className="flex flex-row gap-20 justify-center items-center">
          <h5 className="font-italianno mx-auto w-fit mt-2 font-bold text-[64px]">Has realidad tu historia!</h5>
          <div>
            <div className="">a</div>
            <div className="">a</div>
            <div className="">a</div>
          </div>
        </div>
      </section>
      <Decorator/>
    </footer>
  )
}

export default Footer;
