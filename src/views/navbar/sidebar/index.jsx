import SidebarAccordion from './accordion-items/Accordion'
import { IconLogo } from '@/components/icons/logo-icon'


const CustomSideBar = () => {


  return (
    <aside className="relative py-[20px]">
      <IconLogo size="80" />
      <SidebarAccordion />
    </aside>
  )
}


export default CustomSideBar
