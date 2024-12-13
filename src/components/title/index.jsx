import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

function CustomTitle ({ title, subTitle, className }) {
  return (
    <div
      className={classNames(
        'relative flex flex-col gap-[5px] items-start justify-start w-[100%]',
        className
      )}
    >
      <h1 className='font-poppins font-semibold text-[20px] leading-[30px] text-[#05004E]'>{title}</h1>
      {subTitle && (
        <h2 className='font-poppins font-normal text-[16px] leading-[24px] text-[#737791]'>
          {subTitle}
        </h2>
      )}
    </div>
  )
}

CustomTitle.propTypes = {
  /**
   * Label del titulo
   **/
  title: PropTypes.string.isRequired,
  /**
   * Label del sub titulo (campo opcional)
   **/
  subTitle: PropTypes.string,
  /**
   * Nueva informacion css para el boton (campo opcional)
   **/
  className: PropTypes.string
}

export default CustomTitle
