import { CoverGalleries } from "./cover-galleries";

export const OverViewBook = ({ book }) => {
  return (
    <>
      <section className="p-5 grid grid-cols-11">
        <div className="col-span-4 bg-blue-200">
          <CoverGalleries
            covers={book.covers}
            alt={book.title}
          ></CoverGalleries>
        </div>
        <div className="col-span-7 bg-red-200">sdf</div>
      </section>
    </>
  );
};
