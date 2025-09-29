import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  to?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  to,
  href,
  onClick,
  className = '',
  style = {},
  type = 'button'
}) => {
  const baseClasses = `
    inline-flex items-center justify-center
    min-w-[180px] h-[48px]
    px-[24px] py-[12px]
    font-medium text-[16px] leading-[1.5em]
    rounded-[25px]
    transition-all duration-200
    cursor-pointer
    ${className}
  `.trim().replace(/\s+/g, ' ');

  const variantClasses = {
    primary: 'bg-[#4EC6C6] text-[#0F071D] hover:bg-[#3AB5B5]',
    secondary: 'bg-transparent border-2 border-[#4EC6C6] text-[#4EC6C6] hover:bg-[#4EC6C6] hover:text-[#0F071D]'
  };

  const finalClasses = `${baseClasses} ${variantClasses[variant]}`;
  const finalStyle = { fontFamily: 'Roboto', ...style };

  if (to) {
    return (
      <Link to={to} className={finalClasses} style={finalStyle}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={finalClasses} style={finalStyle} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={finalClasses} style={finalStyle}>
      {children}
    </button>
  );
};

export default Button; 