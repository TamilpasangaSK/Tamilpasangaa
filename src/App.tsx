import React from 'react';
import { Navbar } from './components/Navbar';
import { MovieCard } from './components/MovieCard';
import { LatestMovies } from './components/LatestMovies';
import { MovieDetailsModal } from './components/MovieDetailsModal';
import { OwnerInfo } from './components/OwnerInfo';
import { Categories } from './components/Categories';
import { Footer } from './components/Footer';
import { ContactForm } from './components/ContactForm';
import type { Movie } from './types';

// Sample data - In a real app, this would come from an API
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
  {
    id: '2',
    title: 'Leo',
    description: 'A café owner becomes entangled in a dangerous criminal conspiracy.',
    posterUrl: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    year: 2023,
    genre: ['Action', 'Crime', 'Thriller'],
    director: 'Lokesh Kanagaraj',
    cast: ['Vijay', 'Sanjay Dutt', 'Trisha'],
    rating: 4.3,
    duration: '2h 44m',
    quality: ['4K HDR', '1080p', '720p'],
    audio: ['Tamil', 'Telugu', 'Hindi', 'Malayalam'],
    downloads: 200000,
    likes: 35000,
    channelName: 'TamilBlasters',
    channelLink: 'https://example.com/tamilblasters',
    downloadLinks: [
      {
        quality: '4K HDR',
        size: '9.2 GB',
        url: 'https://example.com/download/leo-4k'
      },
      {
        quality: '1080p',
        size: '2.3 GB',
        url: 'https://example.com/download/leo-1080p'
      },
      {
        quality: '720p',
        size: '1.2 GB',
        url: 'https://example.com/download/leo-720p'
      }
    ]
  },
  {
    id: '3',
    title: 'Ponniyin Selvan: II',
    description: 'Epic historical action drama based on Kalki\'s novel.',
    posterUrl: 'https://images.unsplash.com/photo-1533928298208-27ff66555d8d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    year: 2023,
    genre: ['Historical', 'Drama', 'Action'],
    director: 'Mani Ratnam',
    cast: ['Vikram', 'Aishwarya Rai', 'Karthi'],
    rating: 4.7,
    duration: '2h 45m',
    quality: ['4K HDR', '1080p', '720p'],
    audio: ['Tamil', 'Telugu', 'Hindi', 'Malayalam', 'Kannada'],
    downloads: 180000,
    likes: 40000,
    channelName: 'TamilMV',
    channelLink: 'https://example.com/tamilmv',
    downloadLinks: [
      {
        quality: '4K HDR',
        size: '9.8 GB',
        url: 'https://example.com/download/ps2-4k'
      },
      {
        quality: '1080p',
        size: '2.5 GB',
        url: 'https://example.com/download/ps2-1080p'
      },
      {
        quality: '720p',
        size: '1.3 GB',
        url: 'https://example.com/download/ps2-720p'
      }
    ]
  },
  {
    id: '4',
    title: 'Varisu',
    description: 'A business heir must take over his father\'s empire amid family politics.',
    posterUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    year: 2023,
    genre: ['Drama', 'Action', 'Family'],
    director: 'Vamshi Paidipally',
    cast: ['Vijay', 'Rashmika Mandanna'],
    rating: 4.2,
    duration: '2h 49m',
    quality: ['4K HDR', '1080p', '720p'],
    audio: ['Tamil', 'Telugu', 'Hindi'],
    downloads: 120000,
    likes: 20000,
    channelName: 'TamilYogi',
    channelLink: 'https://example.com/tamilyogi',
    downloadLinks: [
      {
        quality: '4K HDR',
        size: '8.8 GB',
        url: 'https://example.com/download/varisu-4k'
      },
      {
        quality: '1080p',
        size: '2.2 GB',
        url: 'https://example.com/download/varisu-1080p'
      },
      {
        quality: '720p',
        size: '1.1 GB',
        url: 'https://example.com/download/varisu-720p'
      }
    ]
  },
  {
    id: '5',
    title: 'Thunivu',
    description: 'A mysterious mastermind and his team form a plan to rob a bank.',
    posterUrl: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    year: 2023,
    genre: ['Action', 'Thriller', 'Crime'],
    director: 'H. Vinoth',
    cast: ['Ajith Kumar', 'Manju Warrier'],
    rating: 4.1,
    duration: '2h 32m',
    quality: ['4K HDR', '1080p', '720p'],
    audio: ['Tamil', 'Telugu', 'Hindi'],
    downloads: 110000,
    likes: 18000,
    channelName: 'TamilPlay',
    channelLink: 'https://example.com/tamilplay',
    downloadLinks: [
      {
        quality: '4K HDR',
        size: '8.1 GB',
        url: 'https://example.com/download/thunivu-4k'
      },
      {
        quality: '1080p',
        size: '2.0 GB',
        url: 'https://example.com/download/thunivu-1080p'
      },
      {
        quality: '720p',
        size: '1.0 GB',
        url: 'https://example.com/download/thunivu-720p'
      }
    ]
  }
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

  React.useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <Navbar 
        theme={theme} 
        onToggleTheme={toggleTheme} 
        onContactClick={() => setShowContactForm(true)}
      />
      
      <main className="pt-20 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Latest Movies Scroll */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Latest Releases</h2>
            <LatestMovies movies={latestMovies} onMovieSelect={setSelectedMovie} />
          </section>

          {/* Categories */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Categories</h2>
            <Categories />
          </section>

          {/* Owner Info Section */}
          <section className="mb-12">
            <OwnerInfo />
          </section>

          {/* All Movies Grid */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">All Movies</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {allMovies.map((movie) => (
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
    </div>
  );
}

export default App;