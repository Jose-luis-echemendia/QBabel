import PropTypes from 'prop-types'
import React from 'react'
import { Button } from '@material-tailwind/react'
import classNames from '@node_modules/classnames'

const SubPageButton = ({ text, selected, className }) => {
  return (
    <Button
      className={classNames(`${selected ? 'text-primary bg-primary/10' : 'text-[#A0AEC0]'}  min-w-[123px] h-full `)}
      variant={`${selected ? '' : 'text'}`}
    >
      {text}
    </Button>
  )
}

export default SubPageButton

PropTypes.text = PropTypes.string.isRequired
/**
 *
 * @param {boolean} selected
 */
PropTypes.selected = PropTypes.bool.isRequired
/**
 *
 * @param {string} text
 */
