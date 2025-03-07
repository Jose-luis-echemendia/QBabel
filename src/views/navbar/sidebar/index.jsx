import React from 'react'
import Image from 'next/image'
import '@components/i18n'
import classNames from 'classnames'
import SidebarAccordion from '@views/sidebar/accordion-items/Accordion'
import { usePathname } from 'next/navigation'
import { getSidebarElements } from './sidebar-data'
import { useTranslation } from 'react-i18next'

const CustomSideBar = ({ className }) => {
  const { t } = useTranslation('sidebar')
  const pathName = usePathname()
  // Generar elementos de la barra lateral dinámicamente
  const sideBarElements = getSidebarElements(t, pathName)

  console.log(t('orders_defectiveProducts', { returnObjects: true }))

  return (
    <aside className={classNames('relative py-[20px]', className)}>
      <Image
        src='/assets/images/logo.svg'
        width={126}
        height={32}
        alt='logo'
        className='mx-auto mb-9'
      />
      <SidebarAccordion elements={sideBarElements} />
    </aside>
  )
}

// Exportar el componente optimizado
export default React.memo(CustomSideBar)
