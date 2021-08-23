import React, { ReactNode } from 'react';
import './style.css';

export interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children: ReactNode;
}

const Button = ({ children, variant }: ButtonProps) => {
  return <button className={`btn btn-${variant}`}>{children}</button>;
};

export default Button;
