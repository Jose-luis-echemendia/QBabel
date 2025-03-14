import { IconLogo } from "@/components/icons/logo-icon";
import { ExplorePopover } from "./popover-explore";
import { CustomIcon } from "@/components/icons/custom-icons";
import { AuthLinks } from "./auth-links";
import { Link } from "react-router-dom";

export const itemsNavbar = [
  {
    id: 1,
    title: "Home",
    icon: (
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
          d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        />
      </svg>
    ),
    link: "/",
  },
  {
    id: 2,
    title: "User",
    icon: (
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
          d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
        />
      </svg>
    ),
    link: "/AboutMe",
  },
  {
    id: 3,
    title: "Book",
    icon: (
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
          d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
        />
      </svg>
    ),
    link: "/services",
  },
  {
    id: 4,
    title: "Target",
    icon: (
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
          d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
        />
      </svg>
    ),
    link: "/Proyects",
  },
];

const NavBar = () => {
  return (
    <>
      <header className="hidden md:block w-full h-[80px] bg-black-500 p-1 border-b border-black-500 shadow-lg shadow-gray-400">
        <h2 id="footer-heading" className="sr-only">
          Navbar
        </h2>
        <nav className="flex justify-between px-5 items-center text-primary text-3xl font-opensans">
          <div className="flex items-center space-x-5 w-1/3 relative">
            <IconLogo size="80" />
            <div className="p-1 mb-1">
              <ExplorePopover />
            </div>
            <div className="relative mb-1.5">
              <input
                type="text"
                className="bg-white-100 bg-opacity-20 py-2 rounded-xl text-xl text-primary placeholder-primary pl-14 focus:outline-none ml-8"
                placeholder="Buscar"
              />
              <button>
                <CustomIcon
                  src="/assets/icons/searchIcon.svg"
                  size="30"
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 text-primary ml-10"
                />
              </button>
            </div>
          </div>
          <div>
            <AuthLinks />
          </div>
        </nav>
      </header>
      <nav className="pt-5 -mb-10 lg:hidden">
        <div className="flex items-center justify-center gap-2 px-4 py-1 rounded-full bg-white/15 background-blur-sm">
          {itemsNavbar.map((item) => (
            <div
              key={item.id}
              className="px-3 py-2 transition duration-150 rounded-full cursor-pointer hover:bg-secondary hover:text-black"
              data-tooltip-target="tooltip-default"
            >
              <Link href={item.link} className="bg-primary">
                {item.icon}
              </Link>
            </div>
          ))}
        </div>
      </nav>
    </>
  );
};

export default NavBar;
