import React from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string; // Add className prop
}

const Button = ({ text, onClick, disabled = false, className = "" }: ButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`py-2 px-4 text-lg font-semibold rounded-full ${
        disabled
          ? "opacity-50 cursor-not-allowed bg-gray-300 text-gray-500"
          : "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 focus:ring-opacity-50"
      } ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
