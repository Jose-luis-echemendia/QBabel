import { CoverGalleries } from "./cover-galleries";

export const OverViewBook = ({ book }) => {
  return (
    <>
      <section className="p-5">
        <CoverGalleries covers={book.covers} alt={book.title}></CoverGalleries>
      </section>
    </>
  );
};
