import React from 'react';
import { X, Heart, Share2, Download, ExternalLink } from 'lucide-react';
import type { Movie } from '../types';

interface MovieDetailsModalProps {
  movie: Movie;
  onClose: () => void;
}

export function MovieDetailsModal({ movie, onClose }: MovieDetailsModalProps) {
  const [liked, setLiked] = React.useState(false);
  const modalRef = React.useRef<HTMLDivElement>(null);

  const handleShare = async () => {
    try {
      await navigator.share({
        title: movie.title,
        text: `Check out ${movie.title} on TamilPasanga!`,
        url: window.location.href,
      });
    } catch (err) {
      console.log('Error sharing:', err);
    }
  };

  const handleDownload = (url: string) => {
    window.open(url, '_blank');
  };

  // Enable touch scrolling for mobile
  React.useEffect(() => {
    const modal = modalRef.current;
    if (modal) {
      modal.style.overscrollBehavior = 'contain';
    }
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 overflow-y-auto touch-pan-y">
      <div 
        ref={modalRef}
        className="relative w-full max-w-4xl bg-white dark:bg-gray-900 rounded-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 z-10"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          {/* Left side - Poster */}
          <div className="relative aspect-[2/3] rounded-lg overflow-hidden">
            <img
              src={movie.posterUrl}
              alt={movie.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right side - Details */}
          <div className="flex flex-col">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent mb-2">
              {movie.title}
            </h2>
            
            <div className="flex items-center gap-4 mb-4">
              <button
                onClick={() => setLiked(!liked)}
                className={`flex items-center gap-2 ${
                  liked ? 'text-red-500' : 'text-gray-500 dark:text-gray-400'
                }`}
              >
                <Heart className={`w-5 h-5 ${liked ? 'fill-current' : ''}`} />
                <span>{movie.likes + (liked ? 1 : 0)}</span>
              </button>
              <button
                onClick={handleShare}
                className="flex items-center gap-2 text-gray-500 dark:text-gray-400"
              >
                <Share2 className="w-5 h-5" />
                <span>Share</span>
              </button>
            </div>

            <div className="space-y-4 mb-6 overflow-y-auto">
              <div>
                <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-1">
                  Quality
                </h3>
                <div className="flex flex-wrap gap-2">
                  {movie.quality.map((q) => (
                    <span
                      key={q}
                      className="px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-full text-sm"
                    >
                      {q}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-1">
                  Audio
                </h3>
                <div className="flex flex-wrap gap-2">
                  {movie.audio.map((a) => (
                    <span
                      key={a}
                      className="px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-full text-sm"
                    >
                      {a}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-1">
                  Channel
                </h3>
                <a
                  href={movie.channelLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {movie.channelName}
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <div className="download-section">
                <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">
                  Downloads
                </h3>
                <div className="space-y-2 overflow-y-auto touch-pan-y">
                  {movie.downloadLinks.map((link) => (
                    <button
                      key={link.quality}
                      onClick={() => handleDownload(link.url)}
                      className="flex items-center justify-between w-full px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-100 dark:from-gray-800 dark:to-gray-800 hover:from-red-500 hover:to-red-600 group rounded-lg transition-all duration-300"
                    >
                      <span className="flex items-center gap-2 text-gray-900 dark:text-white group-hover:text-white">
                        <Download className="w-4 h-4" />
                        {link.quality}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-white">
                        {link.size}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-sm text-gray-500 dark:text-gray-400">
              {movie.downloads.toLocaleString()} downloads
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}