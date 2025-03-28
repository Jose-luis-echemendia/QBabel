import { CoverGalleries } from "./cover-galleries";

export const OverViewBook = ({ book }) => {
  return (
    <>
      <section className="p-5 grid grid-cols-10 w-[100vw] h-[80vh]">
        <div className="col-span-4">
          <CoverGalleries
            covers={book.covers}
            alt={book.title}
          ></CoverGalleries>
        </div>
        <div className="col-span-6">sdf</div>
      </section>
    </>
  );
};
