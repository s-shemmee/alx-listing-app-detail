import React from 'react';
import { ButtonProps } from '@/interfaces';

const Button: React.FC<ButtonProps> = ({ text, onClick, variant = 'primary' }) => {
  const baseStyles = 'px-4 py-2 rounded font-semibold focus:outline-none';
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-300 text-gray-800 hover:bg-gray-400',
  };

  return (
    <button className={`${baseStyles} ${variants[variant]}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
