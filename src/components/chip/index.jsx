import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const CustomChip = ({
  label = 'label',
  variant = 'outlined' ?? 'filled',
  color = 'gray' ?? 'blue' ?? 'red' ?? 'orange' ?? 'green'
}) => {
  const colors = {
    gray: {
      fontColor: '#ffffff',
      chipColor: '#718096'
    },
    blue: {
      fontColor: '#2B6CB0',
      chipColor: '#3182CE'
    },
    orange: {
      fontColor: '#C05621',
      chipColor: '#DD6B20'
    },
    green: {
      fontColor: '#25855A',
      chipColor: '#38A169'
    },
    red: {
      fontColor: '#C53030',
      chipColor: '#E53E3E'
    }
  }

  return (
    <div
      className={classNames(
        'relative h-[16px] flex items-center justify-center text-center rounded-[2px] px-[4px] gap-[10px]',
        variant === 'outlined' && 'border-[1px] border-solid'
      )}
      style={{
        backgroundColor: variant === 'filled' ? colors[color].chipColor : 'transparent',
        borderColor: variant === 'outlined' ? colors[color].chipColor : 'transparent'
      }}
    >
      <label
        className={classNames(
          'font-bold font-poppins text-[12px] leading-[16px] uppercase'
        )}
        style={{
          color: variant === 'outlined' ? colors[color].chipColor : colors[color].fontColor
        }}
      >
        {label}
      </label>
    </div>
  )
}

CustomChip.propTypes = {
  /**
   * Informacion q se muestra en el componente
   * **/
  label: PropTypes.string.isRequired,
  /**
   * variantes del componente
   * default: outlined
   * outlined | filled
   * **/
  variant: PropTypes.string,
  /**
   * variantes del color del componente
   * default: gray
   * gray | blue | red | orange | green
   * **/
  color: PropTypes.string
}

export default CustomChip
