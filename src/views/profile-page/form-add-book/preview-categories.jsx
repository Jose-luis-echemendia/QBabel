export const PreviewCategories = ({ categories }) => {
  console.log("categories", categories);
  return (
    <>
      <div className="flex gap-3 flex-wrap">
        {categories.map((category) => (
          <span
            key={category.uid}
            className="bg-primary rounded-full p-2 px-2.5 text-black-500"
          >
            {category.name}
          </span>
        ))}
      </div>
    </>
  );
};
