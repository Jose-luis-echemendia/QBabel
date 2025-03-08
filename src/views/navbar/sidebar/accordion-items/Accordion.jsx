import { useState } from 'react'
import { Accordion, AccordionHeader, AccordionBody, List, ListItem } from '@material-tailwind/react'
import { IconCollapse } from '@components/icons/custom-icons'
import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid'
import { elements } from '../sidebar-data'

const SidebarAccordion = ({ elements }) => {
  const [open, setOpen] = useState(0)

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value)
  }



  const sideBarElementsStyle =
    'font-poppins text-[14px] text-center font-semibold leading-[28px] text-[#A0AEC0]'

  return (
    <div className='w-[229px]'>
      {elements.map((element) => (
        <Accordion
          className='relative'
          key={element.id}
          open={open === element.id}
          icon={
            element.subElements.length !== 0 && (
              <IconCollapse
                className={`mx-auto transition-transform ${
                  open === element.id ? 'rotate-180' : ''
                }`}
              />
            )
          }
        >
          {/* Borde izquierdo cuando se selecciona */}
          {element.highlightPath.includes(pathName) && (
            <span className=" before:absolute before:right-full before:top-0 before:h-full before:w-1 before:bg-primary before:content-[''] flex items-center before:rounded-br-full before:rounded-tr-full before:-translate-x-full" />
          )}
          {/* ------------------------------------- */}
          <ListItem className='p-0' selected={open === element.id}>
            <AccordionHeader onClick={() => handleOpen(element.id)} className='border-b-0 p-3'>
              {element.icon}
              <span
                className={`${sideBarElementsStyle} ${
                  element.highlightPath.includes(pathName) && 'text-primary'
                }`}
              >
                {element.label}
              </span>
            </AccordionHeader>
          </ListItem>
          {element.subElements.length > 0 && (
            <AccordionBody className='py-1'>
              <List className='p-0'>
                {element.subElements.map((subElement) => (
                  <ListItem key={uuidv4()}>
                    <span className={`${sideBarElementsStyle} ml-[30%]`}>{subElement}</span>
                  </ListItem>
                ))}
              </List>
            </AccordionBody>
          )}
        </Accordion>
      ))}
    </div>
  )
}

export default SidebarAccordion

SidebarAccordion.propTypes = {
  elements: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      subElements: PropTypes.arrayOf(PropTypes.string),
      icon: PropTypes.element.isRequired
    })
  ).isRequired
}
