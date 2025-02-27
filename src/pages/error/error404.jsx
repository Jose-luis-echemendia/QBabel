import { Link } from "react-router-dom";

export const Error404 = () => {
  return (
    <>
      <div className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center mt-20">
          <div className="flex items-center justify-center gap-5">
            <h3 className="text-[100px] font-semibold text-[#2E2E2E]">404</h3>
            <figure className="-mt-10">
              <img
                src="/assets/images/error/1.png"
                alt="mascota"
                className="object-cover"
              />
            </figure>
          </div>
          <p className="mt-6 text-xl leading-7 text-gray-600">
            Lo sentimos, no pudimos encontrar la página que estás buscando.
          </p>
          <div className="mt-12 flex items-center justify-center gap-x-6">
            <Link
              to={"/"}
              className="rounded-xl bg-primary px-7 py-5 text-sm font-semibold text-black shadow-lg hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Regresar al inicio
            </Link>
            <Link
              to={"#"}
              className="relative text-sm font-semibold text-gray-900 rounded-xl py-5 px-2 overflow-hidden"
            >
              {/* Contenido del botón */}
              Contactar con soporte <span aria-hidden="true">&rarr;</span>
              {/* Sombra solo en la parte superior */}
              <div className="absolute inset-x-0 top-0 h-1 shadow-lg"></div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
