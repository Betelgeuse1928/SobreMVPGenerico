import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'solid' | 'outline' | 'ghost';
}

export const Button = ({ variant = 'solid', className = '', children, ...props }: ButtonProps) => {
  const base =
    'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer';
  const variants = {
    solid: 'bg-brass text-paper-light hover:bg-brass-light',
    outline: 'border border-ink/25 text-ink hover:border-ink/50',
    ghost: 'text-ink hover:text-brass-dark',
  };
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};
