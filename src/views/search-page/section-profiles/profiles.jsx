import { profilesData } from "@/constants/home-page/profiles";

export const Profiles = () => {
  return (
    <>
      <div className="col-span-8 grid grid-cols-2 w-full h-fit py-3 px-8 gap-9 mt-5">
        {profilesData.map((book) => (
          <div
            key={book.id}
            className="relative h-full flex items-center justify-between py-3 px-5 gap-1.5 bg-white rounded-lg shadow-xl hover:scale-105 transition-transform duration-200"
          >
            <div>info</div>
            <div>Seguir</div>
          </div>
        ))}
      </div>
    </>
  );
};
