import React from "react";
import { FC, ReactElement } from "react";
import { PiCursorClick } from "react-icons/pi";

interface CustomButtonProps {
  buttonIcon?: ReactElement | any;
  onClick?: () => void;
  iconProps?: Record<string, any>;
}

const CustomButton: FC<CustomButtonProps> = ({
  buttonIcon = <PiCursorClick />,
  iconProps = { size: 64 },
  onClick,
}) => {
  const IconWithProps = React.cloneElement(buttonIcon, iconProps);

  return (
    <button
      type="button"
      className=" rounded-xl hover:bg-custom-dark"
      onClick={onClick}
    >
      {IconWithProps}
    </button>
  );
};

export default CustomButton;
