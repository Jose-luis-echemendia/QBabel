import { schemaImagesCategoria } from "@/views/welcome-page/categories/images-categoria";
import { v4 as uuidi } from "uuid";

export const Categories = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center items-center w-full h-full">
        {schemaImagesCategoria.map((category) => (
          <div key={uuidi()} className="bg-gay-600 py-2 px-5">
            <span className="text-black">{category.text}</span>
          </div>
        ))}
      </div>
    </>
  );
};
