import React from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
}

const Button = ({ text, onClick, disabled = false }: ButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`py-5 px-5 text-xl inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg ${
        disabled
          ? "opacity-50 cursor-not-allowed"
          : "bg-blue-600 text-white hover:bg-blue-700"
      }`}
    >
      {text}
    </button>
  );
};

export default Button;
