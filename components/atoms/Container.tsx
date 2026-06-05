import React from 'react';

export function Container({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`max-w-7xl mx-auto px-[clamp(1.25rem,5vw,3rem)] ${className}`} id="container-root">
      {children}
    </div>
  );
}
