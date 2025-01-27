import React from 'react';
import { Star } from 'lucide-react';
import type { Movie } from '../types';

interface MovieCardProps {
  movie: Movie;
  onClick: () => void;
}

export function MovieCard({ movie, onClick }: MovieCardProps) {
  return (
    <button
      onClick={onClick}
      className="group relative overflow-hidden rounded-lg transition-all hover:scale-105 focus:outline-none text-left"
    >
      <img
        src={movie.posterUrl}
        alt={movie.title}
        className="h-[400px] w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end transform translate-y-2 group-hover:translate-y-0 transition-transform">
        <h3 className="text-xl font-bold text-white mb-2">{movie.title}</h3>
        <div className="flex items-center gap-2 text-yellow-400 mb-2">
          <Star className="w-4 h-4 fill-current" />
          <span>{movie.rating.toFixed(1)}</span>
        </div>
        <p className="text-gray-200 text-sm mb-2">{movie.duration} • {movie.year}</p>
        <div className="flex flex-wrap gap-2">
          {movie.genre.map((g) => (
            <span
              key={g}
              className="px-2 py-1 bg-white/20 rounded-full text-xs text-white"
            >
              {g}
            </span>
          ))}
        </div>
      </div>
    </button>
  );
}