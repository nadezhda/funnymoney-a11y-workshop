import type { ReactNode } from 'react';
import './Card.scss';

interface CardProps {
  children: ReactNode;
  variant?: 'default' | 'success' | 'error';
  className?: string;
}

export function Card({ children, variant = 'default', className = '' }: CardProps) {
  return (
    <div className={`card card--${variant} ${className}`.trim()}>
      {children}
    </div>
  );
}
