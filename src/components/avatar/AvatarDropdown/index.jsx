'use client'
import React from 'react'
import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography
} from '@material-tailwind/react'
import CustomAvatar from '@/components/avatar'

const profileMenuItems = [
  {
    label: 'My Profile'
    // icon: UserCircleIcon,
  },
  {
    label: 'Edit Profile'
    // icon: Cog6ToothIcon,
  },
  {
    label: 'Inbox'
    // icon: InboxArrowDownIcon,
  },
  {
    label: 'Help'
    // icon: LifebuoyIcon,
  },
  {
    label: 'Sign Out'
    // icon: PowerIcon,
  }
]

export function AvatarDropdown () {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen}>
      <MenuHandler>
        <Button
          variant='text'
          color='blue-gray'
          className='flex items-center rounded-full p-0'
        >
          <CustomAvatar className='h-[40px] w-[40px]' url='/assets/images/avatar1.png' />
        </Button>
      </MenuHandler>
      <MenuList className=''>
        {profileMenuItems.map(({ label, icon }, key) => {
          const isLastItem = key === profileMenuItems.length - 1
          return (
            <MenuItem
              key={label}
              onClick={closeMenu}
              className={`flex items-center gap-2 rounded ${isLastItem
                                ? 'hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10'
                                : ''
                                }`}
            >
              {/* {React.createElement(icon, {
                                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                                strokeWidth: 2,
                            })} */}
              <Typography
                as='span'
                variant='small'
                className='font-normal'
                color={isLastItem ? 'red' : 'inherit'}
              >
                {label}
              </Typography>
            </MenuItem>
          )
        })}
      </MenuList>
    </Menu>
  )
}
