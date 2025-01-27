import React from 'react';
import { Navbar } from './components/Navbar';
import { MovieCard } from './components/MovieCard';
import { LatestMovies } from './components/LatestMovies';
import { MovieDetailsModal } from './components/MovieDetailsModal';
import { OwnerInfo } from './components/OwnerInfo';
import { Categories } from './components/Categories';
import { Footer } from './components/Footer';
import { ContactForm } from './components/ContactForm';
import { Search } from 'lucide-react';
import type { Movie } from './types';

// Sample data
const latestMovies: Movie[] = [
  {
    id: '1',
    title: 'Jailer',
    description: 'A retired jailer goes on a manhunt to find his son\'s killers.',
    posterUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    year: 2023,
    genre: ['Action', 'Drama', 'Thriller'],
    director: 'Nelson Dilipkumar',
    cast: ['Rajinikanth', 'Mohanlal', 'Jackie Shroff'],
    rating: 4.5,
    duration: '2h 48m',
    quality: ['4K HDR', '1080p', '720p'],
    audio: ['Tamil', 'Telugu', 'Hindi'],
    downloads: 150000,
    likes: 25000,
    channelName: 'TamilRockers',
    channelLink: 'https://example.com/tamilrockers',
    downloadLinks: [
      {
        quality: '4K HDR',
        size: '8.5 GB',
        url: 'https://example.com/download/jailer-4k'
      },
      {
        quality: '1080p',
        size: '2.1 GB',
        url: 'https://example.com/download/jailer-1080p'
      },
      {
        quality: '720p',
        size: '1.1 GB',
        url: 'https://example.com/download/jailer-720p'
      }
    ]
  },
  // ... (keep other movie data)
];

const allMovies = [
  ...latestMovies,
  {
    id: '6',
    title: 'Captain Miller',
    description: 'An action-adventure film set in the pre-independence era.',
    posterUrl: 'https://images.unsplash.com/photo-1533928298208-27ff66555d8d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    year: 2024,
    genre: ['Action', 'Adventure', 'Period'],
    director: 'Arun Matheswaran',
    cast: ['Dhanush', 'Priyanka Mohan'],
    rating: 4.4,
    duration: '2h 37m',
    quality: ['4K HDR', '1080p', '720p'],
    audio: ['Tamil', 'Telugu', 'Hindi'],
    downloads: 90000,
    likes: 15000,
    channelName: 'TamilGun',
    channelLink: 'https://example.com/tamilgun',
    downloadLinks: [
      {
        quality: '4K HDR',
        size: '8.7 GB',
        url: 'https://example.com/download/captain-miller-4k'
      },
      {
        quality: '1080p',
        size: '2.2 GB',
        url: 'https://example.com/download/captain-miller-1080p'
      },
      {
        quality: '720p',
        size: '1.1 GB',
        url: 'https://example.com/download/captain-miller-720p'
      }
    ]
  }
];

function App() {
  const [theme, setTheme] = React.useState<'light' | 'dark'>('dark');
  const [selectedMovie, setSelectedMovie] = React.useState<Movie | null>(null);
  const [showContactForm, setShowContactForm] = React.useState(false);
  const [showOwnerInfo, setShowOwnerInfo] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [movieSearchTerm, setMovieSearchTerm] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null);
  const [currentSlide, setCurrentSlide] = React.useState(0);

  React.useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const filteredMovies = React.useMemo(() => {
    let filtered = allMovies;
    
    if (searchTerm) {
      filtered = filtered.filter(movie => 
        movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        movie.director.toLowerCase().includes(searchTerm.toLowerCase()) ||
        movie.cast.some(actor => actor.toLowerCase().includes(searchTerm.toLowerCase())) ||
        movie.genre.some(g => g.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    if (movieSearchTerm) {
      filtered = filtered.filter(movie =>
        movie.title.toLowerCase().includes(movieSearchTerm.toLowerCase())
      );
    }

    if (selectedCategory) {
      filtered = filtered.filter(movie =>
        movie.genre.some(g => g.toLowerCase() === selectedCategory.toLowerCase())
      );
    }

    return filtered;
  }, [searchTerm, movieSearchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <Navbar 
        theme={theme} 
        onToggleTheme={toggleTheme}
        onContactClick={() => setShowContactForm(true)}
        onOwnerInfoClick={() => setShowOwnerInfo(true)}
        onSearch={setSearchTerm}
        searchTerm={searchTerm}
      />
      
      <main className="pt-20 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Latest Movies Carousel */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Latest Releases</h2>
            <LatestMovies 
              movies={latestMovies.slice(0, 5)} 
              onMovieSelect={setSelectedMovie}
              currentSlide={currentSlide}
            />
          </section>

          {/* Categories */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Categories</h2>
            <Categories 
              onCategorySelect={setSelectedCategory}
              selectedCategory={selectedCategory}
              movies={allMovies}
            />
          </section>

          {/* All Movies Grid */}
          <section className="mb-12">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <div className="flex-1 w-full sm:w-auto">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {selectedCategory ? `${selectedCategory} Movies` : 'All Movies'}
                </h2>
                <div className="relative mt-2">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={movieSearchTerm}
                    onChange={(e) => setMovieSearchTerm(e.target.value)}
                    placeholder="Search movies by title..."
                    className="w-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-red-600"
                  />
                </div>
              </div>
              {selectedCategory && (
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="text-red-600 hover:text-red-700 font-medium"
                >
                  Clear Filter
                </button>
              )}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 overflow-y-auto">
              {filteredMovies.map((movie) => (
                <MovieCard
                  key={movie.id}
                  movie={movie}
                  onClick={() => setSelectedMovie(movie)}
                />
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />

      {selectedMovie && (
        <MovieDetailsModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}

      {showContactForm && (
        <ContactForm onClose={() => setShowContactForm(false)} />
      )}

      {showOwnerInfo && (
        <OwnerInfo onClose={() => setShowOwnerInfo(false)} />
      )}
    </div>
  );
}

export default App;