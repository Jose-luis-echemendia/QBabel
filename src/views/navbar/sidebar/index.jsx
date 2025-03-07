import SidebarAccordion from '@views/sidebar/accordion-items/Accordion'
import { getSidebarElements } from './sidebar-data'
import { IconLogo } from '@/components/icons/log-icon'


const CustomSideBar = ({ className }) => {


  const sideBarElements = getSidebarElements(t, pathName)

  console.log(t('orders_defectiveProducts', { returnObjects: true }))

  return (
    <aside className={classNames('relative py-[20px]', className)}>
      <IconLogo size="80" />
      <SidebarAccordion elements={sideBarElements} />
    </aside>
  )
}

// Exportar el componente optimizado
export default React.memo(CustomSideBar)
