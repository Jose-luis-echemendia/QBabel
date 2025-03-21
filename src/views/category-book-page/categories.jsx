import { schemaImagesCategoria } from "@/views/welcome-page/categories/images-categoria";
import { v4 as uuidi } from "uuid";

export const Categories = () => {
  return (
    <>
      <div className="relative z-10 h-[250px] border p-5 rounded-md shadow-md pt-12">
        <h6 className="absolute -top-5 font-italianno text-[40px] ml-3">Etiquetas:</h6>
        <div className="grid grid-cols-8 justify-start items-center gap-7 ">
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
    </>
  );
};
