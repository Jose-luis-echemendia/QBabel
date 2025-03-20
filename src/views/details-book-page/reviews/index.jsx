import { ReviewForm } from "./review-form";
import { Reviews } from "./reviews";

export const ReviewsBook = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <ReviewForm />
      <Reviews />
    </div>
  );
};
