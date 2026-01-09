import { getTVDetails, getImageUrl } from '@/lib/tmdb';
import VideoPlayer from '@/components/VideoPlayer';
import Image from 'next/image';
import { Star, Calendar } from 'lucide-react';

export default async function TVShowPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const show = await getTVDetails(id);

  return (
    <div className="min-h-screen">
      <div
        className="relative h-[50vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${getImageUrl(show.backdrop_path, 'original')})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/80 to-transparent" />
      </div>

      <div className="container mx-auto px-4 -mt-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <Image
                src={getImageUrl(show.poster_path)}
                alt={show.name || 'TV show poster'}
                width={500}
                height={750}
                className="w-full"
              />
            </div>
          </div>

          <div className="lg:col-span-2">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {show.name}
            </h1>

            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="flex items-center space-x-2 bg-yellow-500/20 px-3 py-1 rounded-lg">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <span className="text-white font-semibold">{show.vote_average.toFixed(1)}</span>
              </div>
              {show.first_air_date && (
                <div className="flex items-center space-x-2 text-gray-300">
                  <Calendar className="w-5 h-5" />
                  <span>{new Date(show.first_air_date).getFullYear()}</span>
                </div>
              )}
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {show.genres.map((genre) => (
                <span
                  key={genre.id}
                  className="px-3 py-1 bg-purple-600/30 text-purple-300 rounded-full text-sm"
                >
                  {genre.name}
                </span>
              ))}
            </div>

            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              {show.overview}
            </p>

            <VideoPlayer type="tv" id={id} season={1} episode={1} />

            {show.credits && show.credits.cast.length > 0 && (
              <div className="mt-12">
                <h2 className="text-2xl font-bold text-white mb-6">Cast</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {show.credits.cast.slice(0, 8).map((actor) => (
                    <div key={actor.id} className="text-center">
                      <div className="relative w-full aspect-square rounded-lg overflow-hidden mb-2">
                        <Image
                          src={getImageUrl(actor.profile_path)}
                          alt={actor.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <p className="text-white font-semibold text-sm">{actor.name}</p>
                      <p className="text-gray-400 text-xs">{actor.character}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
