import { ReviewForm } from "./review-form";
import { Reviews } from "./reviews";

export const ReviewsBook = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-0">
      <ReviewForm />
      <Reviews />
    </div>
  );
};
