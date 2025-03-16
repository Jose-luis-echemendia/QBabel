import {
  Avatar,
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { useAppSelector } from "@/hooks/redux/useStore";
import { useAuth } from "@/hooks/redux/useAuth";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const profileMenuItems = [
  {
    label: "Mi perfil",
    component: <NavLink to="/#" />,
    action: null,
    // icon: UserCircleIcon,
  },
  {
    label: "Administración",
    component: <NavLink to="/#" />,
    action: null,
    // icon: UserCircleIcon,
  },
  {
    label: "Mi biblioteca",
    component: <NavLink to="/#" />,
    action: null,
    // icon: UserCircleIcon,
  },
  {
    label: "Mi buzón",
    component: <NavLink to="/#" />,
    action: null,
    // icon: Cog6ToothIcon,
  },
  {
    label: "Inbox",
    component: <NavLink to="/#" />,
    action: null,
    // icon: InboxArrowDownIcon,
  },
  {
    label: "Ayuda",
    component: <NavLink to="/#" />,
    action: null,
    // icon: LifebuoyIcon,
  },
  {
    label: "Cerrar sesión",
    component: <NavLink to="/" />,
    action: null,
    // icon: PowerIcon,
  },
];

export const CustomAvatar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);
  const auth = useAppSelector((state) => state.auth);
  const { handleLogout } = useAuth();

  return (
    <>
      <div className="mr-10 lg:ml-0 ml-2">
        <Menu open={isMenuOpen} handler={setIsMenuOpen} className="">
          <MenuHandler>
            <Button
              variant="text"
              color="blue-gray"
              className="flex items-center rounded-full p-0"
            >
              <div className="flex items-center gap-4 md:mr-5 -mr-7 lg:w-full lg:h-full size-12">
                <Avatar
                  src={auth.profile.avatar_details.image}
                  alt={auth.profile.avatar_details.alt}
                />
                <div className="hidden md:block">
                  <Typography variant="h6" className="text-primary">
                    {auth.user.user_name}
                  </Typography>
                </div>
              </div>
            </Button>
          </MenuHandler>
          <MenuList className="">
            {profileMenuItems.map(({ label, icon }, key) => {
              const isLastItem = key === profileMenuItems.length - 1;
              if (label === "Administración" && auth.user.role !== "Admin")
                return null;
              return (
                <MenuItem
                  key={label}
                  onClick={label === "Cerrar sesión" ? closeMenu : closeMenu}
                  className={`flex items-center gap-2 rounded ${
                    isLastItem
                      ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                      : ""
                  }`}
                >
                  {/* {React.createElement(icon, {
                                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                                strokeWidth: 2,
                            })} */}
                  <Typography
                    as="span"
                    variant="small"
                    className="font-normal"
                    color={isLastItem ? "red" : "inherit"}
                  >
                    {label}
                  </Typography>
                </MenuItem>
              );
            })}
          </MenuList>
        </Menu>
      </div>
    </>
  );
};

CustomAvatar.propTypes = {
  imageAvatar: PropTypes.shape({
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
};
