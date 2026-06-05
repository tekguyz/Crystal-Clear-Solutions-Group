import React from 'react';

export function SectionWrapper({
  children,
  id,
  className = '',
}: {
  children: React.ReactNode;
  id?: string;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`py-[clamp(4.5rem,9vw,7rem)] ${className}`}
    >
      {children}
    </section>
  );
}
