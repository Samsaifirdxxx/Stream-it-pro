import { getPopular, Movie } from '@/lib/tmdb';
import ContentCard from '@/components/ContentCard';

export default async function TVShowsPage() {
  const shows = await getPopular('tv');

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-white mb-8">📺 Popular TV Shows</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {shows.map((item: Movie) => (
          <ContentCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
