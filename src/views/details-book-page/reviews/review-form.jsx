import { useState } from "react";
import { useForm } from "@/hooks/useForm";
import { schemaComment } from "@/helpers/yup-schemas";
import { useCreateComment } from "@/hooks/jquery/useCommentQuery";
import CustomRating from "@/components/rating";

function RatedIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-6 w-6 text-primary-100" // Controla el color del trazo
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="currentColor"
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
      />
    </svg>
  );
}

function UnratedIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-6 w-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
      />
    </svg>
  );
}

export const ReviewForm = ({ pkBook }) => {
  const { register, handleSubmit, errors, setValue } = useForm(schemaComment);
  const [rating, setRating] = useState(0);

  const { mutate: createComment } = useCreateComment();

  const handleRatingChange = (newRating) => {
    setRating(newRating);
    setValue("rating", newRating); // <-- Actualiza en React Hook Form
  };

  const onSubmit = (data) => {
    const payload = {
      comment: data.comment,
      rating: rating || 0,
      book: pkBook,
    };

    console.log(payload);
    createComment(payload);
  };

  return (
    <>
      <form
        action=""
        className="relative flex flex-col gap-1 items-center justify-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-4">
          <h6 className="font-opensans font-semibold text-xl">
            Escribe tu reseña aquí
          </h6>
        </div>
        <div className="flex items-center justify-center gap-2 mb-4">
          <CustomRating
            RatedIcon={RatedIcon}
            UnratedIcon={UnratedIcon}
            onChange={handleRatingChange}
          />
          {errors.rating && (
            <p className="text-red-500 text-sm mt-1">{errors.rating.message}</p>
          )}
        </div>

        <div className="">
          <textarea
            name="comment"
            {...register("comment")}
            className="lg:w-[600px] w-[350px] min-h-[50px] h-[100px] max-h-[300px] border-2 border-gray-300 shadow-md py-4 pl-4 pr-12 rounded-xl resize-none overflow-hidden whitespace-normal break-words  focus:ring-primary focus:border-primary focus:outline-none"
            placeholder="Escribe un comentario..."
          />
          {errors.comment && (
            <p className="absolute text-red-500 text-sm mt-1">
              {errors.comment.message}
            </p>
          )}
        </div>
        <button className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 absolute bottom-5 right-4 hover:cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
            />
          </svg>
        </button>
      </form>
    </>
  );
};
