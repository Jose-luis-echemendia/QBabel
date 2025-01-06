export const Hero = () => {
  return (
    <>
      <div className="relative pt-10 pb-5 flex flex-row border-b shadow-lg shadow-gray-400">
        <img
          src="/assets/icons/Vector1.svg"
          alt=""
          className="absolute left-0 top-[25px] w-[160px]"
        />
        <img
          src="/assets/icons/Vector2.svg"
          alt=""
          className="absolute right-0 top-[300px] w-[300px] z-10"
        />
        <div className="w-1/2 ml-36 mt-24 flex flex-col p-8">
          <h1 className="font-quicksand mb-10 text-8xl text-left font-bold">
            Hola, somos{' '}
            <span className="text-primary text-shadow text-shadow-y-5">
              QBabel
            </span>
          </h1>
          <span className="font-inter font-semibold text-2xl mb-6">
            La comunidad narrativa más grande de latinoamérica
          </span>
          <p className="text-left font-inter text-xl font-medium text-black text-opacity-60">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            impedit exercitationem inventore praesentium labore pariatur.
            Molestiae corrupti quis odit aliquam, eveniet veritatis tempora
            ipsam, fugiat nesciunt animi vel, rem in.
          </p>
          <span className="flex justify-center mt-14 font-inter font-extrabold text-shadow text-shadow-y-3 text-2xl">
            ¿Te apasiona leer o escribir?
          </span>
          <div className="flex justify-center items-center gap-10 mt-3">
            <button className="bg-black-500 py-4 px-20 rounded-xl">
              <span className="text-primary font-anton font-medium text-2xl">
                Leer
              </span>
            </button>
            <button className="bg-primary py-4 px-20 rounded-xl">
              <span className="text-black-500 font-anton font-medium text-2xl">
                Escribir
              </span>
            </button>
          </div>
        </div>
        <div className="w-1/2 relative flex items-center justify-center">
          <img
            src="/assets/images/home/image1.png"
            alt=""
            className="absolute mb-10 z-10 w-[500px] h-[600px]"
          />
          <img
            src="/assets/images/home/image2.png"
            alt=""
            className="absolute z-0 w-[700px] h-[700px]"
          />
        </div>
      </div>
    </>
  );
};
