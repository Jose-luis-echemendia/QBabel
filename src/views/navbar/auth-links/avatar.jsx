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
import PropTypes from "prop-types";

const profileMenuItems = [
  {
    label: "Mi perfil",
    // icon: UserCircleIcon,
  },
  {
    label: "Mi biblioteca",
    // icon: UserCircleIcon,
  },
  {
    label: "Mi buzón",
    // icon: Cog6ToothIcon,
  },
  {
    label: "Inbox",
    // icon: InboxArrowDownIcon,
  },
  {
    label: "Ayuda",
    // icon: LifebuoyIcon,
  },
  {
    label: "Cerrar sesión",
    // icon: PowerIcon,
  },
];

export const CustomAvatar = ({ imageAvatar, user }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  console.log(user);
  const closeMenu = () => setIsMenuOpen(false);
  return (
    <>
      <div className="mr-10">
        <Menu open={isMenuOpen} handler={setIsMenuOpen} className="">
          <MenuHandler>
            <Button
              variant="text"
              color="blue-gray"
              className="flex items-center rounded-full p-0"
            >
              <div className="flex items-center gap-4 mr-5">
                <Avatar src={imageAvatar.image} alt={imageAvatar.alt} />
                <div>
                  <Typography variant="h6" className="text-primary">
                    {user.user_name}
                  </Typography>
                </div>
              </div>
            </Button>
          </MenuHandler>
          <MenuList className="">
            {profileMenuItems.map(({ label, icon }, key) => {
              const isLastItem = key === profileMenuItems.length - 1;
              return (
                <MenuItem
                  key={label}
                  onClick={closeMenu}
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
