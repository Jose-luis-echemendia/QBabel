import React from 'react'
import PropTypes from 'prop-types'
import { Rating } from '@material-tailwind/react'

function CustomRating ({
  srcRatedIcon = null,
  srcUnratedIcon = null,
  value = 0,
  readonly = false,
  onChange = () => {}
}) {
  return (
    <Rating
      ratedIcon={srcRatedIcon ? <img src={srcRatedIcon} alt='ratedIcon' /> : undefined}
      unratedIcon={srcUnratedIcon ? <img src={srcUnratedIcon} alt='unratedIcon' /> : undefined}
      value={value}
      readonly={readonly}
      onChange={onChange}
    />
  )
}

// PropTypes for CustomRating
CustomRating.propTypes = {
  /**
   * Icono para las estrellas calificadas. Si no se proporciona, se usará el predeterminado de Material Tailwind.
   */
  srcRatedIcon: PropTypes.string,
  /**
   * Icono para las estrellas no calificadas. Si no se proporciona, se usará el predeterminado de Material Tailwind.
   */
  srcUnratedIcon: PropTypes.string,
  /**
   * Valor actual de la calificación. Debe ser un número entre 0 y el máximo permitido.
   */
  value: PropTypes.number,
  /**
   * Indica si la calificación es de solo lectura.
   */
  readonly: PropTypes.bool,
  /**
   * Función que se ejecuta cuando el valor de la calificación cambia.
   */
  onChange: PropTypes.func
}

export default CustomRating
