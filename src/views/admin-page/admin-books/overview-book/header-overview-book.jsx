import { Avatar } from "@material-tailwind/react";

export const HeaderOverViewBook = ({ book }) => {
  return (
    <>
      {/* free or discounted */}
      {book.isFree || book.isDiscounted ? (
        <div className="absolute top-5 right-6">
          <svg
            width="27"
            height="26"
            viewBox="0 0 27 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="size-14 text-primary"
          >
            <path
              d="M13.5 0L15.6028 4.12816L19.3574 1.28741L19.392 5.88533L24.0547 4.89463L22.0142 9.05166L26.6615 10.1072L22.95 13L26.6615 15.8928L22.0142 16.9483L24.0547 21.1054L19.392 20.1147L19.3574 24.7126L15.6028 21.8718L13.5 26L11.3972 21.8718L7.64257 24.7126L7.60802 20.1147L2.94528 21.1054L4.98584 16.9483L0.338473 15.8928L4.05 13L0.338473 10.1072L4.98584 9.05166L2.94528 4.89463L7.60802 5.88533L7.64257 1.28741L11.3972 4.12816L13.5 0Z"
              fill="#EAD38D"
            />
          </svg>
          <div className="flex items-center justify-center absolute top-[18px] left-2.5 text-black-500 font-bold text-sm">
            {book.isFree && <span>Gratis</span>}
            {book.isDiscounted && <span> -{book.discount} </span>}
          </div>
        </div>
      ) : null}

      <h3 className="text-3xl font-semibold text-black">{book.title}</h3>
      <div className="flex items-center gap-3 my-2.5">
        <Avatar src={book.author.avatar} alt={book.author.name} size="sm" />
        <span className="text-gray-700 font-semibold">{book.author.name}</span>
      </div>
      <div className="flex gap-2">
        {book.isFree ? (
          <div className="p-1 h-8 flex items-center rounded-xl bg-green-800 -ml-[1px]">
            <span className="text-white-100 text-sm font-semibold">
              Gratuito!
            </span>
          </div>
        ) : (
          <div className="p-1 h-8 flex items-center rounded-xl bg-gray-cam -ml-[1px]">
            <span className="text-white-100 text-sm font-semibold">
              De Pago
            </span>
          </div>
        )}

        {book.isComplete ? (
          <div className="p-1 h-8 flex items-center rounded-xl bg-green-800 -ml-[1px]">
            <span className="text-white-100 text-sm font-semibold">
              Completada
            </span>
          </div>
        ) : (
          <div className="p-1 h-8 flex items-center rounded-xl bg-gray-cam -ml-[1px]">
            <span className="text-white-100 text-sm font-semibold">
              En curso
            </span>
          </div>
        )}
      </div>
    </>
  );
};
