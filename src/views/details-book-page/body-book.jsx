export const CustomBodyBook = ({ book }) => {
  return (
    <>
      <div className="col-span-4 flex flex-col justify-start items-start py-10 gap-6">
        <figure className="flex gap-5 justify-center items-center">
          <img
            src={book.author.avatar}
            alt={book.author.name}
            className="w-10 h-10 object-cover rounded-full"
          />
          <figcaption>{book.author.name}</figcaption>
        </figure>
        {book.isComplete && (
          <div className="p-2 rounded-xl bg-green-800 -ml-[1px]">
            <span className="text-white-100 font-semibold">Completada</span>
          </div>
        )}
        <div className="text-gray-800 text-base text-start text-balance leading-7 font-normal">
          {book.description}
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          quas ipsa, vitae ipsum ipsam nihil consectetur non ratione eligendi.
          Quia minima deserunt dolorum earum. Harum itaque officia architecto
          libero veniam!
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          quas ipsa, vitae ipsum ipsam nihil consectetur non ratione eligendi.
          Quia minima deserunt dolorum earum. Harum itaque officia architecto
          libero veniam!
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          quas ipsa, vitae ipsum ipsam nihil consectetur non ratione eligendi.
          Quia minima deserunt dolorum earum. Harum itaque officia architecto
          libero veniam!
        </div>
      </div>
    </>
  );
};
