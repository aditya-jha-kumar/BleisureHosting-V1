import React from "react";

interface ButtonProps {
  text: string;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const Button = ({
  text,
  onClick,
  disabled = false,
  className,
}: ButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={className}
    >
      {text}
    </button>
  );
};

export default Button;
