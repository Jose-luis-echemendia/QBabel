import React from "react";
import PropTypes from "prop-types";
import { Rating } from "@material-tailwind/react";

function CustomRating({
  RatedIcon = null,
  UnratedIcon = null,
  value = 0,
  readonly = false,
  onChange = () => {},
}) {
  return (
    <Rating
      ratedIcon={RatedIcon ? <RatedIcon /> : undefined}
      unratedIcon={UnratedIcon ? <UnratedIcon /> : undefined}
      value={value}
      readonly={readonly}
      onChange={onChange}
    />
  );
}

// PropTypes for CustomRating
CustomRating.propTypes = {
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
  onChange: PropTypes.func,
};

export default CustomRating;
