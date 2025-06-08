import { useProfile } from "@/hooks/redux/useProfile";
import { useAppSelector } from "@/hooks/redux/useStore";
import { Link } from "react-router-dom";

export const Profiles = () => {
  const profiles = useAppSelector((state) => state.profile.profiles);
  const loading = useAppSelector((state) => state.book.loading);

  const { handlefollowerWriter } = useProfile();

  return (
    <>
      <div className="col-span-8 grid grid-cols-2 w-full h-fit py-3 px-8 gap-9 mt-5">
        {loading ? (
          <div className="col-span-2 text-center text-gray-500">
            <div className="col-span-2 flex flex-col gap-4 items-center justify-center h-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-14 animate-spin text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v1.5m0 15V21m8.25-9h-1.5M4.5 12H3m16.5 6.75l-.75-.75m-15 0l-.75.75m15-15l-.75.75M4.5 4.5l-.75-.75M12 12a3 3 0 100-6 3 3 0 000 6z"
                />
              </svg>
              ... Cargando libros
            </div>
            ;
          </div>
        ) : profiles && !loading ? (
          profiles.map((profile) => (
            <div
              key={profile.id}
              className="relative h-full flex items-center justify-between py-3 px-6 gap-1.5 bg-white rounded-lg shadow-xl hover:scale-105 transition-transform duration-200"
            >
              <Link
                to={`/profile/${profile.user_name}`}
                className="flex gap-2 items-start justify-start w-full h-full"
              >
                <img
                  src={profile.avatar_details.image}
                  alt={profile.user_name}
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div className="flex flex-col gap-1.5 ml-1.5">
                  <h6 className="font-semibold text-xl">{profile.user_name}</h6>
                  <span className="text-gray-600 font-medium">
                    {profile.email}
                  </span>
                  <div className="flex gap-3 w-full">
                    <div className="text-sm">
                      <span className="font-semibold">
                        {profile.count_books}{" "}
                      </span>
                      historias
                    </div>
                    <div className="text-sm">
                      <span className="font-semibold">
                        {profile.count_reads}{" "}
                      </span>
                      listas de lecturas
                    </div>
                    <div className="text-sm">
                      <span className="font-semibold">
                        {profile.count_follower}
                      </span>{" "}
                      Seguidores
                    </div>
                  </div>
                </div>
              </Link>
              <div className="">
                <button
                  onClick={() => handlefollowerWriter({ writer: profile.uid })}
                  className="flex place-items-center gap-1 py-2 px-5 relative bg-gray-300 rounded-full font-semibold"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-7"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
                    />
                  </svg>
                  <span>Seguir</span>
                </button>
              </div>
            </div>
          ))
        ) : (
          <>
            <div className="col-span-2 text-center text-gray-500">
              No se encontraron perfiles.
            </div>
          </>
        )}
      </div>
    </>
  );
};
