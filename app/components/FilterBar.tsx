'use client';

import { SlidersHorizontal } from 'lucide-react';

export function FilterBar() {
  return (
    <div className="mb-6 flex items-center gap-3 overflow-x-auto pb-2">
      <button className="flex items-center gap-2 bg-surface text-fg px-4 py-2 rounded-lg whitespace-nowrap hover:bg-surface/80 transition-colors duration-200">
        <SlidersHorizontal className="w-4 h-4" />
        Filters
      </button>
      <button className="bg-accent text-white px-4 py-2 rounded-lg whitespace-nowrap hover:bg-accent/90 transition-colors duration-200">
        All Dogs
      </button>
      <button className="bg-surface text-fg px-4 py-2 rounded-lg whitespace-nowrap hover:bg-surface/80 transition-colors duration-200">
        Small
      </button>
      <button className="bg-surface text-fg px-4 py-2 rounded-lg whitespace-nowrap hover:bg-surface/80 transition-colors duration-200">
        Medium
      </button>
      <button className="bg-surface text-fg px-4 py-2 rounded-lg whitespace-nowrap hover:bg-surface/80 transition-colors duration-200">
        Large
      </button>
    </div>
  );
}
