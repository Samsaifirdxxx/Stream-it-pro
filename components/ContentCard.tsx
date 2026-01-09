import Link from 'next/link';
import Image from 'next/image';
import { Movie, getImageUrl } from '@/lib/tmdb';
import { Star } from 'lucide-react';

interface ContentCardProps {
  item: Movie;
}

export default function ContentCard({ item }: ContentCardProps) {
  const title = item.title || item.name || 'Untitled';
  const mediaType = item.media_type || (item.title ? 'movie' : 'tv');
  const href = `/${mediaType}/${item.id}`;
  const rating = item.vote_average?.toFixed(1) || 'N/A';

  return (
    <Link href={href} className="group block">
      <div className="relative overflow-hidden rounded-lg bg-gray-800 transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-purple-500/50">
        <div className="aspect-[2/3] relative">
          <Image
            src={getImageUrl(item.poster_path)}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <div className="absolute top-2 right-2 bg-black/80 backdrop-blur-sm px-2 py-1 rounded-md flex items-center space-x-1">
          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
          <span className="text-white text-sm font-semibold">{rating}</span>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h3 className="text-white font-semibold text-sm line-clamp-2">{title}</h3>
          <p className="text-gray-300 text-xs mt-1">
            {item.release_date?.split('-')[0] || item.first_air_date?.split('-')[0] || 'N/A'}
          </p>
        </div>
      </div>
    </Link>
  );
}
