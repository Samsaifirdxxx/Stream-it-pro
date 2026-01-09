const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY || '';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';

export interface Movie {
  id: number;
  title?: string;
  name?: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
  release_date?: string;
  first_air_date?: string;
  media_type?: string;
  genre_ids?: number[];
}

export interface MovieDetails extends Movie {
  runtime?: number;
  genres: { id: number; name: string }[];
  credits?: {
    cast: Array<{
      id: number;
      name: string;
      character: string;
      profile_path: string;
    }>;
  };
  videos?: {
    results: Array<{
      key: string;
      type: string;
      site: string;
    }>;
  };
}

async function fetchFromTMDB(endpoint: string) {
  const url = `${BASE_URL}${endpoint}${endpoint.includes('?') ? '&' : '?'}api_key=${API_KEY}`;
  const response = await fetch(url, { next: { revalidate: 3600 } });
  if (!response.ok) throw new Error('Failed to fetch from TMDb');
  return response.json();
}

export async function getTrending(mediaType: string = 'all', timeWindow: string = 'week') {
  const data = await fetchFromTMDB(`/trending/${mediaType}/${timeWindow}`);
  return data.results;
}

export async function getPopular(mediaType: string = 'movie') {
  const data = await fetchFromTMDB(`/${mediaType}/popular`);
  return data.results;
}

export async function getTopRated(mediaType: string = 'movie') {
  const data = await fetchFromTMDB(`/${mediaType}/top_rated`);
  return data.results;
}

export async function getUpcoming() {
  const data = await fetchFromTMDB('/movie/upcoming');
  return data.results;
}

export async function getMovieDetails(id: string): Promise<MovieDetails> {
  const data = await fetchFromTMDB(`/movie/${id}?append_to_response=credits,videos`);
  return data;
}

export async function getTVDetails(id: string): Promise<MovieDetails> {
  const data = await fetchFromTMDB(`/tv/${id}?append_to_response=credits,videos`);
  return data;
}

export async function searchContent(query: string) {
  const data = await fetchFromTMDB(`/search/multi?query=${encodeURIComponent(query)}`);
  return data.results;
}

export function getImageUrl(path: string, size: string = 'w500') {
  if (!path) return '/placeholder.jpg';
  return `${IMAGE_BASE_URL}/${size}${path}`;
}

export function getBackdropUrl(path: string) {
  return getImageUrl(path, 'original');
}
