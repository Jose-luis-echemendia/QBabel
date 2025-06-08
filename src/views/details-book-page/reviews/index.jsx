import { ReviewForm } from "./review-form";
import { Reviews } from "./reviews";
import { useGetCommentFromBook } from "@/hooks/jquery/useCommentQuery";
import { useAppSelector } from "@/hooks/redux/useStore";

export const ReviewsBook = ({ pkBook }) => {
  const comments = useAppSelector((state) => state.comment.comments);
  const { data, isLoading, isError } = useGetCommentFromBook(pkBook);

  const commentFromBook = data?.results.comments || [];

  return (
    <div className="flex flex-col items-center justify-center gap-0">
      <ReviewForm pkBook={pkBook} />
      {isLoading && <div>Cargando reseñas...</div>}
      {isError && <div>Error al cargar reseñas</div>}

      {!isLoading && !isError && commentFromBook && (
        <Reviews reviews={comments} />
      )}
    </div>
  );
};
