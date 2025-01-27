import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { Movie } from '../types';

interface CategoriesProps {
  onCategorySelect: (category: string | null) => void;
  selectedCategory: string | null;
  movies: Movie[]; // Add movies prop to calculate counts
}

export function Categories({ onCategorySelect, selectedCategory, movies }: CategoriesProps) {
  const scrollContainer = React.useRef<HTMLDivElement>(null);

  // Calculate genre counts from actual movies
  const genreCounts = React.useMemo(() => {
    const counts: Record<string, number> = {};
    movies.forEach(movie => {
      movie.genre.forEach(genre => {
        counts[genre] = (counts[genre] || 0) + 1;
      });
    });
    return counts;
  }, [movies]);

  const categories = [
    { id: 'action', name: 'Action', gradient: 'from-blue-500 to-blue-700' },
    { id: 'comedy', name: 'Comedy', gradient: 'from-green-500 to-green-700' },
    { id: 'drama', name: 'Drama', gradient: 'from-yellow-500 to-yellow-700' },
    { id: 'romance', name: 'Romance', gradient: 'from-pink-500 to-pink-700' },
    { id: 'thriller', name: 'Thriller', gradient: 'from-purple-500 to-purple-700' },
    { id: 'horror', name: 'Horror', gradient: 'from-red-500 to-red-700' },
    { id: 'family', name: 'Family', gradient: 'from-indigo-500 to-indigo-700' },
    { id: 'adventure', name: 'Adventure', gradient: 'from-orange-500 to-orange-700' },
    { id: 'fantasy', name: 'Fantasy', gradient: 'from-teal-500 to-teal-700' },
    { id: 'sci-fi', name: 'Sci-Fi', gradient: 'from-cyan-500 to-cyan-700' },
    { id: 'crime', name: 'Crime', gradient: 'from-rose-500 to-rose-700' },
    { id: 'mystery', name: 'Mystery', gradient: 'from-violet-500 to-violet-700' },
  ].map(category => ({
    ...category,
    count: genreCounts[category.name] || 0
  }));

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainer.current) {
      const scrollAmount = 400;
      scrollContainer.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative group">
      <div
        ref={scrollContainer}
        className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide scroll-smooth touch-pan-x"
      >
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategorySelect(selectedCategory === category.name ? null : category.name)}
            className={`flex-none px-6 py-3 rounded-lg shadow-md transition-all duration-300 transform hover:-translate-y-1 focus:outline-none group ${
              selectedCategory === category.name
                ? 'bg-gradient-to-r ' + category.gradient
                : 'bg-gray-100 dark:bg-gray-800 hover:bg-gradient-to-r hover:' + category.gradient
            }`}
          >
            <div className="text-center">
              <h3 className={`text-lg font-semibold group-hover:scale-105 transition-transform ${
                selectedCategory === category.name ? 'text-white' : 'text-gray-900 dark:text-white'
              }`}>
                {category.name}
              </h3>
              <p className={`text-sm ${
                selectedCategory === category.name ? 'text-white/80' : 'text-gray-600 dark:text-gray-400'
              }`}>
                {category.count} movies
              </p>
            </div>
          </button>
        ))}
      </div>

      <button
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-black/80 to-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:scale-110"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-gradient-to-l from-black/80 to-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:scale-110"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
}