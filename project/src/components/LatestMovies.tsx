import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { Movie } from '../types';

interface LatestMoviesProps {
  movies: Movie[];
  onMovieSelect: (movie: Movie) => void;
  currentSlide: number;
}

export function LatestMovies({ movies, onMovieSelect, currentSlide }: LatestMoviesProps) {
  const scrollContainer = React.useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    if (scrollContainer.current) {
      const slideWidth = scrollContainer.current.offsetWidth;
      scrollContainer.current.scrollTo({
        left: slideWidth * ((currentSlide + 1) % movies.length),
        behavior: 'smooth'
      });
    }
  };

  const prevSlide = () => {
    if (scrollContainer.current) {
      const slideWidth = scrollContainer.current.offsetWidth;
      scrollContainer.current.scrollTo({
        left: slideWidth * ((currentSlide - 1 + movies.length) % movies.length),
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative group">
      <div
        ref={scrollContainer}
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide scroll-smooth"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {movies.map((movie, index) => (
          <div
            key={movie.id}
            className="flex-none w-full snap-center"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            <button
              onClick={() => onMovieSelect(movie)}
              className="relative w-full aspect-[21/9] group/card focus:outline-none"
            >
              <img
                src={movie.posterUrl}
                alt={movie.title}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-100">
                <div className="absolute bottom-0 p-6">
                  <h3 className="text-3xl font-bold text-white mb-2">{movie.title}</h3>
                  <p className="text-lg text-gray-200 mb-4">{movie.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {movie.genre.map((g) => (
                      <span
                        key={g}
                        className="px-3 py-1 bg-white/20 rounded-full text-sm text-white"
                      >
                        {g}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </button>
          </div>
        ))}
      </div>
      
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {movies.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide ? 'bg-white w-4' : 'bg-white/50'
            }`}
            onClick={() => {
              if (scrollContainer.current) {
                const slideWidth = scrollContainer.current.offsetWidth;
                scrollContainer.current.scrollTo({
                  left: slideWidth * index,
                  behavior: 'smooth'
                });
              }
            }}
          />
        ))}
      </div>
    </div>
  );
}