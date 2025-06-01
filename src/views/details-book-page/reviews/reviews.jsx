export const Reviews = ({ reviews }) => {
  console.log(reviews);
  return (
    <>
      <div className="grid grid-cols-6 gap-10 container mx-auto lg:px-20 px-6 my-10 ">
        {reviews.map((review) => (
          <div
            key={review.uid}
            className="col-span-3 flex justify-between gap-2 bg-white shadow-md p-4 rounded-lg"
          >
            <div className="flex flex-col gap-4 items-start justify-start">
              <div className="flex gap-3">
                <img
                  src="/assets/images/avatar.jpeg"
                  alt={review.profile.avatar_details.image}
                  className="w-7 h-7 object-cover rounded-full"
                />
                <span className="font-semibold">
                  {review.profile.user_name}
                </span>
              </div>
              <p className="text-gray-700">{review.comment}</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5 hover:cursor-pointer -mt-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5 hover:cursor-pointer text-primary-100"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill={review.user_reacted ? "currentColor" : ""}
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            </div>
          </div>
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
