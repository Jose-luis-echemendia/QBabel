'use client'
import React from 'react'
import PropTypes from 'prop-types'
import { Dialog, DialogHeader, DialogBody, DialogFooter } from '@material-tailwind/react'
import classNames from 'classnames'

const CustomModal = ({
  open,
  handleOpen,
  classNameDialog,
  classNameHeader,
  classNameBody,
  classNameFooter,
  size,
  header,
  children,
  footer
}) => {
  return (
    <>
      <Dialog
        open={open}
        handler={handleOpen}
        size={size || 'md'}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 }
        }}
        className={classNames(
          'shadow-none',
          'relative w-[448px] rounded-[6px] bg-white-100 shadow-custom-modal',
          classNameDialog
        )}
      >
        {header && <DialogHeader className={classNameHeader}>{header}</DialogHeader>}
        <DialogBody className={classNames('', classNameBody)}>{children}</DialogBody>

        {footer && <DialogFooter className={classNameFooter}>{footer}</DialogFooter>}
      </Dialog>
    </>
  )
}

CustomModal.propTypes = {
  handleOpen: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  classNameDialog: PropTypes.string,
  classNameHeader: PropTypes.string,
  classNameBody: PropTypes.string,
  classNameFooter: PropTypes.string,
  /**
   * size === "xs" || "sm" || "md" || "lg" || "xl" ||"xxl"
   * **/
  size: PropTypes.string,
  header: PropTypes.element,
  footer: PropTypes.element
}

export default CustomModal
