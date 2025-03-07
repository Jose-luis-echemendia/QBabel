import SidebarAccordion from '@views/sidebar/accordion-items/Accordion'
import { getSidebarElements } from './sidebar-data'
import { IconLogo } from '@/components/icons/log-icon'


const CustomSideBar = () => {


  const sideBarElements = getSidebarElements(t, pathName)

  console.log(t('orders_defectiveProducts', { returnObjects: true }))

  return (
    <aside className="relative py-[20px]">
      <IconLogo size="80" />
      <SidebarAccordion elements={sideBarElements} />
    </aside>
  )
}


export default CustomSideBar
