import { useComment } from "@/hooks/redux/useComment";
import { ReviewForm } from "./review-form";
import { Reviews } from "./reviews";
import { useAppSelector } from "@/hooks/redux/useStore";
import { useEffect } from "react";

export const ReviewsBook = ({ pkBook }) => {
  const comments = useAppSelector((state) => state.comment.comments);
  const { handleGetComments } = useComment();

  useEffect(() => {
    handleGetComments(pkBook);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-0">
      <ReviewForm pkBook={pkBook} />
      {comments && <Reviews reviews={comments} />}
    </div>
  );
};
