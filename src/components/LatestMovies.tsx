import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { Movie } from '../types';

interface LatestMoviesProps {
  movies: Movie[];
  onMovieSelect: (movie: Movie) => void;
}

export function LatestMovies({ movies, onMovieSelect }: LatestMoviesProps) {
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
        {movies.map((movie) => (
          <button
            key={movie.id}
            onClick={() => onMovieSelect(movie)}
            className="flex-none w-[300px] group/card focus:outline-none"
          >
            <div className="relative aspect-[2/3] rounded-lg overflow-hidden">
              <img
                src={movie.posterUrl}
                alt={movie.title}
                className="w-full h-full object-cover transition-transform group-hover/card:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity">
                <div className="absolute bottom-0 p-4">
                  <h3 className="text-lg font-bold text-white">{movie.title}</h3>
                  <p className="text-sm text-gray-200">{movie.year}</p>
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>
      
      <button
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-0"
        disabled={scrollContainer.current?.scrollLeft === 0}
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
}