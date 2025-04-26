'use-client'
import React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'
import classNames from 'classnames'

const CustomAvatar = ({
  className,
  url,
  variant = 'circular' ?? 'rounded' ?? 'square',
  withBorder = false
}) => {
  return (
    <Image
      className={classNames(
        variant === 'circular' && 'rounded-full',
        variant === 'rounded' && 'rounded-lg',
        variant === 'square' && 'rounded',
        withBorder === true && 'border-[1px] border-solid border-gray-400',
        className
      )}
      src={url}
      height={24}
      width={24}
      alt='avatar'
      variant={variant}
    />
  )
}

CustomAvatar.propTypes = {
  /**
   * Estilos adicionales al componete
   **/
  className: PropTypes.string,
  /**
   * direccion de donde se encuentra la imagen
   **/
  url: PropTypes.string.isRequired,
  /**
   * Posibles variantes del componente
   * 'circular' ?? 'rounded' ?? 'square'
   **/
  variant: PropTypes.string,
  /**
   * Indica si el coponente tiene borde o no
   * **/
  withBorder: PropTypes.bool
}

export default CustomAvatar
