"use client";

import React from 'react';

interface ServiceTabsProps {
  categories: string[];
  activeCategory: string;
  onSelect: (cat: string) => void;
}

export function ServiceTabs({ categories, activeCategory, onSelect }: ServiceTabsProps) {
  return (
    <div className="w-full overflow-x-auto scrollbar-hide pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
      <div className="flex flex-nowrap gap-2 sm:gap-3 min-w-max pb-1">
        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => onSelect(cat)}
              className={`px-5 py-2.5 rounded-full text-[13px] sm:text-sm font-bold transition-all focus:outline-none focus:ring-2 focus:ring-sky/50 ${
                isActive 
                  ? "bg-navy text-white shadow-md shadow-navy/20" 
                  : "bg-white border border-navy/10 text-navy hover:bg-sky-light/30 hover:border-sky/40"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>
    </div>
  );
}

