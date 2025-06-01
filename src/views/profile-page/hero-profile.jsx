import { useAppSelector } from "@/hooks/redux/useStore";

export const HeroProfile = ({ userName }) => {
  const profile = useAppSelector((state) => state.profile.profile);

  return (
    <div className="relative h-auto md:h-[380px] bg-green-600 flex flex-col items-center justify-center p-4">
      {/* Avatar */}
      <div className="w-20 h-20 md:w-36 md:h-36 text-4xl md:text-5xl text-white bg-green-700 rounded-full  flex justify-center items-center border border-white border-opacity-50">
        <img
          className="rounded-full object-cover"
          src={profile?.avatar_details.image}
          alt={profile?.user_name || userName}
        />
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="absolute size-5 top-[170px] right-[46%]"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
        />
      </svg>

      {/* Email y usuario */}
      <span className="mt-3 text-2xl md:text-3xl text-center text-white text-shadow font-quicksand">
        {profile?.user_name}
      </span>
      <span className="text-center text-white">{profile?.email}</span>

      {/* Secciones de obras, lecturas, seguidores y seguidos */}
      <div className="flex space-x-4 md:space-x-8 mt-4 text-white">
        <div className="w-24 text-center hover:font-bold transition duration-200">
          <p className="font-bold">{profile?.count_books}</p>
          <span>Obras</span>
        </div>
        <div className="w-24 text-center hover:font-bold transition duration-200 mt-3">
          <p className="font-bold">{profile?.count_reads}</p>
          <span>lecturas</span>
        </div>
        <div className="w-24 text-center hover:font-bold transition duration-200 mt-3">
          <p className="font-bold">{profile?.count_follower}</p>
          <span>Seguidores</span>
        </div>
        <div className="w-24 text-center hover:font-bold transition duration-200">
          <p className="font-bold">{profile?.count_follower}</p>
          <span>Siguiendo</span>
        </div>
      </div>
    </div>
  );
};
