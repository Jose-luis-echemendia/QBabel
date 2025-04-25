import { useState } from "react";

export const ReviewForm = () => {
  const [comment, setComment] = useState("");

  return (
    <>
      <div className="flex items-center justify-center gap-2 mb-4">
        <div className="flex gap-2 hover:cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          <span className="text-sm">Agregar</span>
        </div>
        <div className="h-6 w-[2px] bg-primary"></div>
        <span className="text-sm">valorar</span>
        <input type="range" className="w-40 accent-primary" />
      </div>
      <form action="">
        <div className="relative">
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="lg:w-[600px] w-[350px] min-h-[50px] h-[100px] max-h-[300px] border-2 border-gray-300 shadow-md py-4 pl-4 pr-12 rounded-xl resize-none overflow-hidden whitespace-normal break-words  focus:ring-primary focus:border-primary focus:outline-none"
            placeholder="Escribe un comentario..."
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 absolute bottom-5 right-4 hover:cursor-pointer"
            onClick={() => alert("Mensaje registrado")}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
            />
          </svg>
        </div>
      </form>
    </>
  );
};
