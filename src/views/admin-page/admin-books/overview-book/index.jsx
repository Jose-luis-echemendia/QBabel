import { BodyOverviewBook } from "./body-overview-book";
import { CoverGalleries } from "./cover-galleries";
import { FooterOverviewBook } from "./footer-overview-book";
import { HeaderOverViewBook } from "./header-overview-book";

export const OverViewBook = ({ book }) => {
  return (
    <>
      <section className="p-5 grid grid-cols-11 gap-3">
        <div className="col-span-4 h-full">
          <CoverGalleries covers={book.covers} alt={book.title} />
        </div>
        <div className="col-span-7 relative flex flex-col gap-3 leading-8">
          <HeaderOverViewBook book={book} />
          <BodyOverviewBook book={book} />
        </div>
        <div className="col-span-11 mt-4">
          <FooterOverviewBook book={book}/>
        </div>
      </section>
    </>
  );
};
