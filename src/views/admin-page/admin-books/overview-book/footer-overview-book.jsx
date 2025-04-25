export const FooterOverviewBook = ({ book }) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-8">
        <div className="flex gap-10 items-center justify-center">
          {!book.isFree && (
            <>
              <div className="flex flex-col gap-2 items-center justify-center px-1.5">
                <span className="flex gap-1.5  text-gray-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>

                  <small className="text-lg">Price</small>
                </span>
                <span className="text-xl font-bold">{book.price}</span>
              </div>
              <div className="w-[1px] bg-gray-400 -mx-3 h-14" />
            </>
          )}
          <div className="flex flex-col gap-2 items-center justify-center">
            <span className="flex gap-1.5 text-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
              <small className="text-lg">Lecturas</small>
            </span>
            <span className="text-xl font-bold">{book.reads}</span>
          </div>
          <div className="w-[1px] bg-gray-400 -mx-3 h-14" />
          <div className="flex flex-col gap-2 items-center justify-center">
            <span className="flex gap-1.5 text-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                />
              </svg>
              <small className="text-lg">Votos</small>
            </span>
            <span className="text-xl font-bold">{book.reviews}</span>
          </div>
          <div className="w-[1px] bg-gray-400 -mx-3 h-14" />
          <div className="flex flex-col gap-2 items-center justify-center">
            <span className="flex gap-1.5 text-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                />
              </svg>

              <small className="text-lg">Capítulos</small>
            </span>
            <span className="text-xl font-bold">{book.parts}</span>
          </div>
          <div className="w-[1px] bg-gray-400 -mx-3 h-14" />
          <div className="flex flex-col gap-2 items-center justify-center">
            <span className="flex gap-1.5 text-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 10.5v6m3-3H9m4.06-7.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
                />
              </svg>

              <small className="text-lg">Registrado</small>
            </span>
            <span className="text-xl font-bold">{book.createdAt}</span>
          </div>
          <div className="w-[1px] bg-gray-400 -mx-3 h-14" />
          <div className="flex flex-col gap-2 items-center justify-center">
            <span className="flex gap-1.5 text-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                />
              </svg>

              <small className="text-lg">Actualizado</small>
            </span>
            <span className="text-xl font-bold">{book.updatedAt}</span>
          </div>
        </div>
        <div>
          <button className="bg-primary py-2.5 px-16 rounded-full">
            <span className="font-semibold text-black-80 hover:text-gray-800">
              Ver Detalles
            </span>
          </button>
        </div>
      </div>
    </>
  );
};
