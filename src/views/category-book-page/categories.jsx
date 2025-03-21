import { schemaImagesCategoria } from "@/views/welcome-page/categories/images-categoria";
import { v4 as uuidi } from "uuid";

export const Categories = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center items-center w-full h-full z-10 gap-10">
        {schemaImagesCategoria.map((category) => (
          <div key={uuidi()} className="bg-gray-400 py-2 px-5 rounded-2xl">
            <span className="text-black">{category.text}</span>
          </div>
        ))}
      </div>
    </>
  );
};
