import { IconCalendar } from '@components/icons/custom-icons'
import classNames from 'classnames'
import React from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const CustomDatePicker = ({
  className,
  startDate,
  setStartDate,
  endDate,
  showIcon = false,
  placeholder = 'Inicio'
}) => {
  const [isOpen, setIsOpen] = React.useState(false)

  const handleIconClick = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <div className='relative'>
      <DatePicker
        className={classNames('h-[32px] pl-8', className)} // Añade padding a la izquierda para el ícono
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        dateFormat='dd/MM/yyyy'
        placeholderText={placeholder}
        open={isOpen} // Controla la apertura del DatePicker
        onClickOutside={() => setIsOpen(false)} // Cierra el DatePicker al hacer clic fuera
      />
      {/* Ícono de calendario */}
      {showIcon && (
        <div
          className='absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer'
          onClick={handleIconClick} // Abre/cierra el DatePicker al hacer clic en el ícono
        >
          <IconCalendar className='w-4 h-4' /> {/* Ajusta el tamaño según sea necesario */}
        </div>
      )}
    </div>
  )
}

export default CustomDatePicker
