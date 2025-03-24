import { profilesData } from "@/constants/home-page/profiles";

export const Profiles = () => {
  return (
    <>
      <div className="col-span-8 grid grid-cols-2 w-full h-fit py-3 px-8 gap-9 mt-5">
        {profilesData.map((profile) => (
          <div
            key={profile.id}
            className="relative h-full flex items-center justify-between py-3 px-6 gap-1.5 bg-white rounded-lg shadow-xl hover:scale-105 transition-transform duration-200"
          >
            <div className="flex gap-2 items-start justify-start w-full h-full">
              <img
                src={profile.avatar}
                alt={profile.userName}
                className="w-20 h-20 rounded-full object-cover"
              />
              <div className="flex flex-col gap-1.5">
                <h6 className="font-semibold text-xl">{profile.name}</h6>
                <span className="text-gray-600 font-medium"> {profile.userName} </span>
                <div className="flex gap-3 w-full">
                  <div className="text-sm">
                    <span className="font-semibold">{profile.history}</span> historias
                  </div>
                  <div className="text-sm">
                    <span className="font-semibold">{profile.readingList}</span> listas de lecturas
                  </div>
                  <div className="text-sm">
                    <span className="font-semibold">{profile.followers}</span> Seguidores
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <button className="flex place-items-center gap-1 py-2 px-5 relative bg-gray-300 rounded-full font-semibold">
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
        ))}
      </div>
    </>
  );
};
