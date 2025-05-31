import { ReviewForm } from "./review-form";
import { Reviews } from "./reviews";
import { useGetCommentFromBook } from "@/hooks/jquery/useCommentQuery";

export const ReviewsBook = ({ pkBook }) => {
  const { data, isLoading, isError } = useGetCommentFromBook(pkBook);

  const commentFromBook = data?.results.comments || [];

  return (
    <div className="flex flex-col items-center justify-center gap-0">
      <ReviewForm />
      {isLoading && <div>Cargando reseñas...</div>}
      {isError && <div>Error al cargar reseñas</div>}

      {!isLoading && !isError && commentFromBook && (
        <Reviews reviews={commentFromBook} />
      )}
    </div>
  );
};
