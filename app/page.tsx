import { getTrending, getPopular, getTopRated, getUpcoming } from '@/lib/tmdb';
import Carousel from '@/components/Carousel';
import Link from 'next/link';
import { Play } from 'lucide-react';

export default async function Home() {
  const [trending, popularMovies, topRated, upcoming] = await Promise.all([
    getTrending(),
    getPopular('movie'),
    getTopRated('movie'),
    getUpcoming(),
  ]);

  const featured = trending[0];

  return (
    <div className="min-h-screen">
      {featured && (
        <div className="relative h-[70vh] mb-12">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original${featured.backdrop_path})`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/80 to-transparent" />
          </div>

          <div className="relative container mx-auto px-4 h-full flex items-end pb-20">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                {featured.title || featured.name}
              </h1>
              <p className="text-gray-300 text-lg mb-6 line-clamp-3">
                {featured.overview}
              </p>
              <Link
                href={`/${featured.media_type || 'movie'}/${featured.id}`}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
              >
                <Play className="w-5 h-5" />
                <span>Watch Now</span>
              </Link>
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto">
        <Carousel title="🔥 Trending Now" items={trending} />
        <Carousel title="🎬 Popular Movies" items={popularMovies} />
        <Carousel title="⭐ Top Rated" items={topRated} />
        <Carousel title="🎉 Coming Soon" items={upcoming} />
      </div>
    </div>
  );
}
