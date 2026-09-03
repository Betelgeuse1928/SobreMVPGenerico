import React, { ReactNode } from 'react';

export const InvSection = ({
  id,
  title,
  children,
}: {
  id?: string;
  title?: string;
  children: ReactNode;
}) => (
  <section id={id} className="mx-auto w-full max-w-md px-6 py-14">
    {title && (
      <h2 className="font-display text-2xl" style={{ color: 'var(--inv-ink)' }}>
        {title}
      </h2>
    )}
    <div className={title ? 'mt-6' : ''}>{children}</div>
  </section>
);
