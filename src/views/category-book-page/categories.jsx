import { schemaImagesCategoria } from "@/views/welcome-page/categories/images-categoria";
import { v4 as uuidi } from "uuid";

export const Categories = () => {
  return (
    <div className="relative z-10 h-[250px] border p-5 rounded-xl shadow-xl pt-12">
      {/* Título con efecto de guiones */}
      <h6 className="absolute -top-8 left-[10%] -translate-x-1/2 font-italianno text-[40px] flex items-center bg-white px-2 before:content-[''] before:flex-1 before:border-b-2 before:border-dashed before:border-gray-300 before:mr-2 after:content-[''] after:flex-1 after:border-b-2 after:border-dashed after:border-gray-300 after:ml-2">
        Etiquetas:
      </h6>

      {/* Contenedor de etiquetas */}
      <div className="grid grid-cols-8 justify-start items-center gap-7">
        {schemaImagesCategoria.map((category) => (
          <div
            key={uuidi()}
            className="bg-gray-200 py-2 px-3 rounded-2xl flex items-center justify-center"
          >
            <span className="text-black text-sm">{category.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
