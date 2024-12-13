import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 font-normal text-[12px] leading-[18px] font-poppins text-[#737791] mx-auto'>© 2024 VoyPati Made by <Link href='https://noxcreation.dev/' target='_blank' className='underline' rel='noreferrer'>NOX Creation</Link></div>
  )
}

export default Footer
