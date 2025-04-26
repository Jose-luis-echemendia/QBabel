import React, { useEffect, useRef } from 'react'
import classNames from 'classnames'

const CustomSelect = ({
  options,
  value,
  onChange,
  className,
  placeholder = 'Buscar...',
  textVariant = 'gray',
  popoverIndex = 'z-10'
}) => {
  const dropdownRef = useRef(null)
  const [isOpen, setIsOpen] = React.useState(false)
  const [searchTerm, setSearchTerm] = React.useState('')

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    // Agregar el evento de clic al documento
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      // Limpiar el evento al desmontar el componente
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const filteredOptions = options.filter((option) =>
    option.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleClearSelection = () => {
    onChange(null) // O cualquier valor que utilices para indicar que no hay selección
  }

  return (
    <div ref={dropdownRef} className={classNames('relative w-32', className)}>
      <button
        className={classNames(
          'w-full h-auto bg-transparent rounded-lg flex flex-row justify-between items-center gap-[8px] px-[9px]',
          textVariant === 'gray' && 'text-gray-400',
          textVariant === 'orange' && 'text-gray-500'
        )}
        onClick={(e) => {
          e.preventDefault()
          toggleDropdown()
        }}
      >
        <label className='flex-1 block text-left font-normal truncate font-ibm'>
          {options.find((option) => option?.id === value)?.name || '---'}
        </label>
        {value && (
          <button
            className='text-red-500 ml-2'
            onClick={(e) => {
              e.stopPropagation()
              handleClearSelection()
            }}
          >
            &times; {/* Aquí se usa la "X" */}
          </button>
        )}
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className={classNames(
            'h-5 w-5 ml-2 ease-in-out duration-300',
            isOpen ? 'rotate-180' : 'rotate-0'
          )}
          viewBox='0 0 20 20'
          fill='currentColor'
        >
          <path
            fillRule='evenodd'
            d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
            clipRule='evenodd'
          />
        </svg>
      </button>
      <div
        className={classNames(
          'absolute z-10 top-full left-0 max-h-[175px] overflow-y-auto scrollbar-hidden w-full bg-white border border-gray-300 rounded-lg shadow-lg py-1 mt-1',
          !isOpen && 'hidden'
        )}
      >
        <input
          type='text'
          placeholder={placeholder}
          className='w-full px-2 py-1 border-b border-gray-300 focus:outline-none'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {filteredOptions.map((option) => (
          <div
            key={option?.id}
            className={`px-2 py-2 cursor-pointer hover:bg-white-300 block text-left font-normal text-[15px] truncate font-ibm ${
              value === option.id && 'font-semibold'
            }`}
            onClick={(e) => {
              e.preventDefault()
              onChange(option?.id)
              setSearchTerm('') // Limpiar el campo de búsqueda al seleccionar
              toggleDropdown()
            }}
          >
            {option?.name}
          </div>
        ))}
      </div>
    </div>
  )
}

export default CustomSelect
