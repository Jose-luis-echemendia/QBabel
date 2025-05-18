import { useEffect } from "react";
import { useAppSelector } from "@/hooks/redux/useStore";
import { useCategory } from "@/hooks/redux/useCategory";

export const CategoriesModal = ({
  selectedCategories,
  setSelectedCategories,
  handleOpen,
}) => {
  const { handleGetCategories } = useCategory();

  const categories = useAppSelector(
    (state) => (state.category.categories)
  );

  useEffect(() => {
    handleGetCategories();
  }, []);

  const toggleCategory = (category) => {
    setSelectedCategories((prevSelected) => {
      const isAlreadySelected = prevSelected.some(
        (item) => item.uid === category.uid
      );
      if (isAlreadySelected) {
        return prevSelected.filter((item) => item.uid !== category.uid);
      } else {
        return [...prevSelected, category];
      }
    });
  };

  const handleCancel = () => {
    setSelectedCategories([]);
    handleOpen();
  };

  const isSelected = (category) =>
    selectedCategories.some((item) => item.uid === category.uid);

  return (
    <div className="flex flex-col gap-10 justify-center items-center py-10">
      <h6 className="text-xl font-semibold mt-3">
        Selecciona las categorias de su libro
      </h6>
      <div className="flex gap-6 p-5 flex-wrap justify-center">
        {categories.length > 0 ? (
          categories.map((category) => (
            <button
              key={category.uid}
              className={`p-2 px-2.5 rounded-full cursor-pointer transition-colors duration-200 ${
                isSelected(category)
                  ? "bg-primary text-black-500"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
              onClick={() => toggleCategory(category)}
            >
              <span>{category.name}</span>
            </button>
          ))
        ) : (
          <span>Not categories registered</span>
        )}
      </div>
      <div className="flex gap-10">
        <button
          className="bg-black-500 py-2 px-10 rounded-xl"
          onClick={handleOpen}
        >
          <span className="text-primary font-anton font-medium">Aceptar</span>
        </button>
        <button
          className="bg-primary py-2 px-10 rounded-xl"
          onClick={handleCancel}
        >
          <span className="text-black-500 font-anton font-medium">
            Cancelar
          </span>
        </button>
      </div>
    </div>
  );
};
