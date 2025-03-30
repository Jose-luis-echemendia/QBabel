"use client";
import PropTypes from "prop-types";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import classNames from "classnames";

const ExitButton = ({ handleOpen }) => {
  console.log(handleOpen);
  return (
    <button
      type="button"
      onClick={() => handleOpen()}
      className="absolute -top-10 right-2.5 text-white cursor-pointer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18 18 6M6 6l12 12"
        />
      </svg>
    </button>
  );
};

export const CustomModal = ({
  open,
  handleOpen,
  classNameDialog,
  classNameHeader,
  classNameBody,
  classNameFooter,
  size,
  header,
  children,
  footer,
  exitButton = false,
}) => {
  return (
    <>
      <Dialog
        open={open}
        handler={handleOpen}
        size={size || "md"}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
        className={classNames(
          "shadow-none",
          "relative w-[448px] rounded-[6px] bg-white-100 shadow-custom-modal",
          classNameDialog
        )}
      >
        {exitButton && <ExitButton handleOpen={handleOpen} />}

        {header && (
          <DialogHeader className={classNameHeader}>{header}</DialogHeader>
        )}
        <DialogBody className={classNames("", classNameBody)}>
          {children}
        </DialogBody>

        {footer && (
          <DialogFooter className={classNameFooter}>{footer}</DialogFooter>
        )}
      </Dialog>
    </>
  );
};

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
  footer: PropTypes.element,
  exitButton: PropTypes.bool,
};

ExitButton.propTypes = {
  handleOpen: PropTypes.func.isRequired,
};
