import React from 'react';
import { Search, Film, User } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

interface NavbarProps {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
  onContactClick: () => void;
}

export function Navbar({ theme, onToggleTheme, onContactClick }: NavbarProps) {
  return (
    <nav className="bg-white/95 dark:bg-black/95 backdrop-blur-sm fixed w-full z-50 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Film className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-700 text-white p-1.5 rounded-lg" />
            <span className="ml-2 text-xl font-bold bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
              TamilPasanga
            </span>
          </div>

          <div className="flex-1 max-w-xl mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search movies, actors, directors..."
                className="w-full bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
            <button 
              onClick={onContactClick}
              className="px-4 py-2 text-gray-700 dark:text-white hover:text-red-600 dark:hover:text-red-600 transition-colors"
            >
              Contact
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-full transition-all duration-300 transform hover:-translate-y-0.5">
              <User className="w-4 h-4" />
              <span>Account</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}