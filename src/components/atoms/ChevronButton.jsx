import {
  ChevronUpIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";

const ChevronButton = ({
  direction,
  className,
  onClick,
  ariaLabel,
  disabled,
  ...rest
}) => {
  let chevron;

  if (direction === "left") {
    chevron = <ChevronLeftIcon />;
  } else if (direction === "right") {
    chevron = <ChevronRightIcon />;
  } else if (direction === "up") {
    chevron = <ChevronUpIcon />;
  } else if (direction === "down") {
    chevron = <ChevronDownIcon />;
  } else {
    console.warn(
      "Invalid direction prop for ChevronButton. Use 'left', 'right', 'up', or 'down'."
    );
    return null;
  }

  return (
    <button
      type="button"
      className={className}
      onClick={onClick}
      aria-label={ariaLabel}
      disabled={disabled}
      {...rest}
    >
      {chevron}
    </button>
  );
};

export default ChevronButton;
