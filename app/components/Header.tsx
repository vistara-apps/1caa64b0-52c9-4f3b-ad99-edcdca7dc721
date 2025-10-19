'use client';

import { Menu, Bell, User } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-surface border-b border-fg/10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between max-w-md">
        <button className="p-2 hover:bg-bg/50 rounded-lg transition-colors duration-200">
          <Menu className="w-6 h-6 text-fg" />
        </button>
        
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-fg">PawConnect</span>
          <span className="text-2xl">🐾</span>
        </div>

        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-bg/50 rounded-lg transition-colors duration-200 relative">
            <Bell className="w-6 h-6 text-fg" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full"></span>
          </button>
          <button className="p-2 hover:bg-bg/50 rounded-lg transition-colors duration-200">
            <User className="w-6 h-6 text-fg" />
          </button>
        </div>
      </div>
    </header>
  );
}
