import { IconLogo } from "@/components/icons/logo-icon";
import { ExplorePopover } from "./popover-explore";
import { CustomIcon } from "@/components/icons/custom-icons";
import { AuthLinks } from "./auth-links";
import ResponsiveNav from "./responsive";

const NavBar = () => {
  return (
    <>
      <header className="hidden md:block w-full h-[80px] bg-black-500 p-1 border-b border-black-500 shadow-lg shadow-gray-400">
        <h2 id="footer-heading" className="sr-only">
          Navbar
        </h2>
        <nav className="flex justify-between px-5 items-center text-primary text-3xl font-opensans">
          <div className="flex items-center space-x-5 w-1/3 relative ml-5">
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
      <ResponsiveNav />
    </>
  );
};

export default NavBar;
