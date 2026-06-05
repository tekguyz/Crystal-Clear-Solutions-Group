import React from 'react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  hasPromo?: boolean;
}

export function ServiceCard({ icon, title, description, hasPromo }: ServiceCardProps) {
  return (
    <div className="group relative bg-white rounded-[var(--radius-card)] border border-navy-light/10 p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-sky transition-all duration-300 flex flex-col">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div className="p-3.5 bg-sky-light/30 text-sky rounded-xl group-hover:bg-sky group-hover:text-white transition-colors duration-300">
          {icon}
        </div>
        {hasPromo && (
          <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-sky text-[10px] font-bold text-white uppercase tracking-widest shadow-sm">
            20% Off
          </span>
        )}
      </div>
      <h4 className="text-lg font-bold text-navy mb-2.5 group-hover:text-sky transition-colors">{title}</h4>
      <p className="text-[13px] font-medium text-ink/70 leading-relaxed flex-1">
        {description}
      </p>
    </div>
  );
}

