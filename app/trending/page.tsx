import { getTrending, Movie } from '@/lib/tmdb';
import ContentCard from '@/components/ContentCard';

export default async function TrendingPage() {
  const trending = await getTrending();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-white mb-8">🔥 Trending Now</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {trending.map((item: Movie) => (
          <ContentCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
