import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const categories = [
  { id: 'action', name: 'Action', count: 156, gradient: 'from-blue-500 to-blue-700' },
  { id: 'comedy', name: 'Comedy', count: 123, gradient: 'from-green-500 to-green-700' },
  { id: 'drama', name: 'Drama', count: 98, gradient: 'from-yellow-500 to-yellow-700' },
  { id: 'romance', name: 'Romance', count: 87, gradient: 'from-pink-500 to-pink-700' },
  { id: 'thriller', name: 'Thriller', count: 76, gradient: 'from-purple-500 to-purple-700' },
  { id: 'horror', name: 'Horror', count: 65, gradient: 'from-red-500 to-red-700' },
  { id: 'family', name: 'Family', count: 54, gradient: 'from-indigo-500 to-indigo-700' },
  { id: 'adventure', name: 'Adventure', count: 43, gradient: 'from-orange-500 to-orange-700' },
  { id: 'fantasy', name: 'Fantasy', count: 32, gradient: 'from-teal-500 to-teal-700' },
  { id: 'sci-fi', name: 'Sci-Fi', count: 21, gradient: 'from-cyan-500 to-cyan-700' },
  { id: 'crime', name: 'Crime', count: 45, gradient: 'from-rose-500 to-rose-700' },
  { id: 'mystery', name: 'Mystery', count: 34, gradient: 'from-violet-500 to-violet-700' },
];

export function Categories() {
  const scrollContainer = React.useRef<HTMLDivElement>(null);

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
        className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide scroll-smooth"
      >
        {categories.map((category) => (
          <button
            key={category.id}
            className={`flex-none px-6 py-3 bg-gradient-to-r ${category.gradient} rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 focus:outline-none group`}
          >
            <div className="text-center">
              <h3 className="text-lg font-semibold text-white group-hover:scale-105 transition-transform">
                {category.name}
              </h3>
              <p className="text-sm text-white/80">
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