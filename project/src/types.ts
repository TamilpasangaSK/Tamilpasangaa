export interface Movie {
  id: string;
  title: string;
  description: string;
  posterUrl: string;
  year: number;
  genre: string[];
  director: string;
  cast: string[];
  rating: number;
  duration: string;
  quality: string[];
  audio: string[];
  downloads: number;
  likes: number;
  channelName: string;
  channelLink: string;
  downloadLinks: {
    quality: string;
    size: string;
    url: string;
  }[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  favorites: string[];
}