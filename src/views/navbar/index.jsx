import { IconLogo } from "@/components/icons/logo-icon";
import { ExplorePopover } from "./popover-explore";
import { AuthLinks } from "./auth-links";
import { useAppSelector } from "@/hooks/redux/useStore";
import { SearchBar } from "./search";
import ResponsiveNav from "./responsive";
import { useEffect } from "react";
import { useCategory } from "@/hooks/redux/useCategory";

const NavBar = () => {
  const auth = useAppSelector((state) => state.auth);
  const { handleGetCategories } = useCategory();

  useEffect(() => {
    handleGetCategories({ type: "book", is_active: true });
  }, []);

  return (
    <>
      <header className="hidden md:block w-full h-[80px] bg-black-500 p-1 border-b border-black-500 shadow-lg shadow-gray-400">
        <h2 id="footer-heading" className="sr-only">
          Navbar
        </h2>
        <nav className="flex justify-between px-5 items-center text-primary text-3xl font-opensans">
          <div className="flex items-center space-x-5 w-1/3 relative ml-16">
            <IconLogo size="80" />
            <div className="p-1 mb-1">
              <ExplorePopover />
            </div>
            <SearchBar />
          </div>
          <div>
            <AuthLinks />
          </div>
        </nav>
      </header>
      {auth.isAuthenticated && <ResponsiveNav />}
    </>
  );
};

export default NavBar;
