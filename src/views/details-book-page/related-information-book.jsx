import { bestBooksData } from "@/constants/home-page/best-books";
import { v4 as uuid } from "uuid";

export const RelatedInformationBook = () => {
  return (
    <>
      <div className="col-span-2 py-10 mt-10">
        <div className="flex flex-col gap-5 justify-start items-start -mt-10 shadow-2xl shadow-gray-400 py-4 px-6 rounded-2xl">
          <span className="font-semibold text-xl pt-4">También te puede interesar</span>
          {bestBooksData.map(book => (
            <div key={uuid()} className="flex gap-2">
              <figure>
                <img src={book.img} alt={book.tittle} />
              </figure>
              <div className="flex flex-col gap-1.5">
                <h6>{book.tittle}</h6>
                <div>

                </div>
                <p>
                {book.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
