import { schemaImagesCategoria } from "@/views/welcome-page/categories/images-categoria";
import { v4 as uuidi } from "uuid";

export const Categories = () => {
  return (
    <>
      <div className="grid grid-cols-8 justify-start items-center h-full z-10 gap-7 border p-5 rounded-md shadow-md">
        {schemaImagesCategoria.map((category) => (
          <div key={uuidi()} className="bg-gray-200 py-2 px-3 rounded-2xl flex items-center justify-center">
            <span className="text-black text-sm">{category.text}</span>
          </div>
        ))}
      </div>
    </>
  );
};
