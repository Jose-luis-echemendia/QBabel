import { IconLogo } from "@/components/icons/logo.-icon";
import { ExplorePopover } from "./popover-explore";
import { CustomIcon } from "@/components/icons/custom-icons";

const NavBar = () => {
  return (
    <>
      <header className="w-full h-[110px] bg-black-500 p-1">
        <nav className="flex justify-between px-5 items-center text-primary text-3xl font-opensans">
          <div className="flex items-center space-x-10 w-1/3">
            <IconLogo size="120" />
            <ExplorePopover />
            <div className="relative">
              <input
                type="text"
                className="bg-white-100 bg-opacity-20 py-3 rounded-xl text-primary placeholder-primary pl-12"
                placeholder="Buscar"
              />
              <CustomIcon
                src="/assets/searchIcon.svg"
                size="30"
                className="absolute left-2 top-1/2 transform -translate-y-1/2 text-primary"
              />
            </div>
          </div>
          <div>Registrarse iniciar sesión</div>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
