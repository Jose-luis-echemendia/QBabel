import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

function CustomButton({
  name,
  className,
  add,
  cancel,
  action,
  IconLeft,
  IconRight,
  iconCenter,
  iconSize,
}) {
  return (
    <button
      className={classNames(
        "flex flex-row gap-[6px] h-[40px] px-[16px] items-center justify-center rounded-[16px]",
        "font-opensans font-bold text-[14px] leading-[16px]",
        add && " text-[#fff]",
        cancel && "bg-[#fff]  border-[1px] border-solid ",
        className
      )}
      onClick={action}
    >
      {IconLeft && (
        <IconLeft
          className="h-[16px] w-[16px]"
          height={16 || iconSize}
          width={16 || iconSize}
          color={cancel ? "#261E1B" : "#fff"}
        />
      )}
      {name && <span className="font-semibold leading-6">{name}</span>}
      {iconCenter && (
        <IconRight
          className="h-[16px] w-[16px]"
          height={16 || iconSize}
          width={16 || iconSize}
          color={cancel ? "#261E1B" : "#fff"}
        />
      )}
      {IconRight && (
        <IconRight
          className="h-[16px] w-[16px]"
          height={16 || iconSize}
          width={16 || iconSize}
          color={cancel ? "#261E1B" : "#fff"}
        />
      )}
    </button>
  );
}

CustomButton.propTypes = {
  /**
   * Label del boton (campo opcional)
   **/
  name: PropTypes.string,
  /**
   * Nueva informacion css para el boton (campo opcional)
   **/
  className: PropTypes.string,
  /**
   * variable q define si es un boton de añadir (campo opcional)
   **/
  add: PropTypes.bool,
  /**
   * variable q define si es un boton de añadir (campo opcional)
   **/
  cancel: PropTypes.bool,
  /**
   * Metodo que indica la accion que se va a ejecutar una vez pulsado el boton
   * **/
  action: PropTypes.func,
};

export default CustomButton;
