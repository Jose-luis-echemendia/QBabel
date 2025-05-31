import { useParams } from "react-router-dom";
import { CustomBodyBook } from "./body-book";
import { CustomFooterBook } from "./footer-book";
import { CustomHeaderBook } from "./header-book";
import { RelatedInformationBook } from "./related-information-book";
import { RecommendationsBooks } from "./related-information-book/recommendations-books";
import { ReviewsBook } from "./reviews";
import { useEffect } from "react";
import { useBook } from "@/hooks/redux/useBook";
import { useAppSelector } from "@/hooks/redux/useStore";

const DetailsBookView = () => {
  const params = useParams();
  const { handleGetBookForId } = useBook();
  const booksState = useAppSelector((state) => state.book);
  const { loading, book } = booksState;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    const uid = params.bookId;
    handleGetBookForId(uid);
  }, [params]);

  return (
    <>
      {!loading && book && (
        <article className="min-h-screen w-full h-full py-5 mx-0">
          <CustomHeaderBook book={book} />
          <div className="lg:grid lg:grid-cols-6 lg:gap-10 lg:container lg:mx-auto lg:px-20 w-[400px]">
            <div className="col-span-4 flex flex-col gap-10 lg:p-0 p-3">
              <CustomBodyBook book={book} />
              <CustomFooterBook book={book} />
            </div>
            <div className="col-span-2">
              <RelatedInformationBook />
            </div>
            <div className="col-span-6">
              <ReviewsBook pkBook={book.uid} />
            </div>
            <hr className="col-span-6" />
            <div className="col-span-6">
              <RecommendationsBooks books={[book, book, book]} />
            </div>
          </div>
        </article>
      )}
    </>
  );
};

export default DetailsBookView;
