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
  IconCenter,
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
          height={iconSize || 16}
          width={iconSize || 16}
          color={cancel ? "#261E1B" : "#fff"}
        />
      )}
      {name && <span className="font-semibold leading-6">{name}</span>}
      {IconCenter && (
        <IconCenter
          className="h-[16px] w-[16px]"
          height={iconSize || 16}
          width={iconSize || 16}
          color={cancel ? "#261E1B" : "#fff"}
        />
      )}
      {IconRight && (
        <IconRight
          className="h-[16px] w-[16px]"
          height={iconSize || 16}
          width={iconSize || 16}
          color={cancel ? "#261E1B" : "#fff"}
        />
      )}
    </button>
  );
}

CustomButton.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
  add: PropTypes.bool,
  cancel: PropTypes.bool,
  action: PropTypes.func,
  IconLeft: PropTypes.elementType,
  IconRight: PropTypes.elementType,
  IconCenter: PropTypes.elementType,
  iconSize: PropTypes.number,
};

export default CustomButton;
