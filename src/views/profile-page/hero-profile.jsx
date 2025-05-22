import { useAppSelector } from "@/hooks/redux/useStore";

export const HeroProfile = () => {
  const profile = useAppSelector((state) => state.profile.profile);


  return (
    <div className="h-auto md:h-80 bg-green-600 flex flex-col items-center justify-center p-4">
      {/* Avatar */}
      <div className="w-20 h-20 md:w-24 md:h-24 text-4xl md:text-5xl text-white bg-green-700 rounded-full flex justify-center items-center border border-white border-opacity-50">
        A
      </div>

      {/* Nombre y usuario */}
      <span className="mt-3 text-2xl md:text-3xl text-center text-white text-shadow font-quicksand">
        Andy Torres
      </span>
      <span className="text-center text-white">@AndyTorres585</span>

      {/* Secciones de obras, lecturas y seguidores */}
      <div className="flex space-x-4 md:space-x-8 mt-4 text-white">
        <div className="w-24 text-center hover:font-bold transition duration-200">
          <p className="font-bold">0</p>
          <span>Obras</span>
        </div>
        <div className="w-24 text-center hover:font-bold transition duration-200 mt-3">
          <p className="font-bold">1</p>
          <span>Lista de lectura</span>
        </div>
        <div className="w-24 text-center hover:font-bold transition duration-200">
          <p className="font-bold">1</p>
          <span>Seguidor</span>
        </div>
      </div>
    </div>
  );
};
