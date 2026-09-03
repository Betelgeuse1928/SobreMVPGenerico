import React, { ReactNode } from 'react';

export const Container = ({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) => <div className={`mx-auto w-full max-w-6xl px-6 sm:px-10 ${className}`}>{children}</div>;
