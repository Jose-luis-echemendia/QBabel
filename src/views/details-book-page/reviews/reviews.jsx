import CustomRating from "@/components/rating";
import { useComment } from "@/hooks/redux/useComment";
import { useAppSelector } from "@/hooks/redux/useStore";
import { comment } from "postcss";
import { useState } from "react";

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

export const Review = ({ review }) => {
  const [userReacted, setUserReacted] = useState(review.user_reacted);
  const { handleReactComment, handleUnReactComment } = useComment();
  const user = useAppSelector((state) => state.auth.user);

  return (
    <>
      <div className="col-span-3 flex justify-between gap-2 bg-white shadow-md p-4 rounded-lg">
        <div className="flex flex-col gap-4 items-start justify-start ml-1.5">
          <div className="flex gap-3 pt-3">
            <img
              src="/assets/images/avatar.jpeg"
              alt={review.profile.avatar_details.image}
              className="w-12 h-12 object-cover rounded-full ml-0.5"
            />
            <div className="flex flex-col ml-0.5">
              <span className="font-semibold">{review.profile.user_name}</span>
              <CustomRating
                value={review.rating}
                RatedIcon={RatedIcon}
                UnratedIcon={UnratedIcon}
                readonly={true}
              />
            </div>
          </div>
          <p className="text-gray-700 italic mt-2.5">{review.comment}</p>
        </div>
        <div className="flex flex-col justify-between py-2 items-center gap-2 mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5 hover:cursor-pointer -mt-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5 hover:cursor-pointer text-primary-100"
              onClick={() => {
                if (userReacted) {
                  handleUnReactComment(review.user_react_uid);
                } else {
                  handleReactComment({ comment: review.uid, user: user.uid });
                }
                setUserReacted(!userReacted);
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                fill={userReacted && "currentColor"}
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export const Reviews = ({ reviews }) => {

  return (
    <>
      <div className="grid grid-cols-6 gap-10 container mx-auto lg:px-20 px-6 my-10 ">
        {reviews.map((review) => (
          <Review key={review.uid} review={review} />
        ))}
        <div className="col-span-6 flex justify-center items-center mt-4">
          <button className="w-1/2 h-12 border-2 border-primary rounded-full hover:bg-gray-50">
            <span className="font-semibold">Mostrar más</span>
          </button>
        </div>
      </div>
    </>
  );
};
