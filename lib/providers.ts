export interface StreamProvider {
  id: string;
  name: string;
  quality: 'HD' | 'FHD' | 'CAM' | 'SD';
  getUrl: (type: 'movie' | 'tv', id: string, season?: number, episode?: number) => string;
  description: string;
}

export const streamProviders: StreamProvider[] = [
  {
    id: 'vidsrc-pro',
    name: 'VidSrc Pro',
    quality: 'FHD',
    description: 'Premium quality with subtitles',
    getUrl: (type, id, season, episode) => {
      if (type === 'tv' && season && episode) {
        return `https://vidsrc.pro/embed/tv/${id}/${season}/${episode}`;
      }
      return `https://vidsrc.pro/embed/movie/${id}`;
    }
  },
  {
    id: 'vidsrc-xyz',
    name: 'VidSrc XYZ',
    quality: 'FHD',
    description: 'Fast streaming with multiple servers',
    getUrl: (type, id, season, episode) => {
      if (type === 'tv' && season && episode) {
        return `https://vidsrc.xyz/embed/tv/${id}/${season}/${episode}`;
      }
      return `https://vidsrc.xyz/embed/movie/${id}`;
    }
  },
  {
    id: 'vidsrc-me',
    name: 'VidSrc ME',
    quality: 'HD',
    description: 'Reliable streaming source',
    getUrl: (type, id, season, episode) => {
      if (type === 'tv' && season && episode) {
        return `https://vidsrc.me/embed/tv?tmdb=${id}&season=${season}&episode=${episode}`;
      }
      return `https://vidsrc.me/embed/movie?tmdb=${id}`;
    }
  },
  {
    id: 'vidsrc-cc',
    name: 'VidSrc CC',
    quality: 'HD',
    description: 'Alternative streaming option',
    getUrl: (type, id, season, episode) => {
      if (type === 'tv' && season && episode) {
        return `https://vidsrc.cc/v2/embed/tv/${id}/${season}/${episode}`;
      }
      return `https://vidsrc.cc/v2/embed/movie/${id}`;
    }
  },
  {
    id: '2embed',
    name: '2Embed',
    quality: 'HD',
    description: 'Popular embed provider',
    getUrl: (type, id, season, episode) => {
      if (type === 'tv' && season && episode) {
        return `https://www.2embed.cc/embedtv/${id}&s=${season}&e=${episode}`;
      }
      return `https://www.2embed.cc/embed/${id}`;
    }
  },
  {
    id: 'superembed',
    name: 'SuperEmbed',
    quality: 'FHD',
    description: 'High quality streaming',
    getUrl: (type, id, season, episode) => {
      if (type === 'tv' && season && episode) {
        return `https://multiembed.mov/?video_id=${id}&tmdb=1&s=${season}&e=${episode}`;
      }
      return `https://multiembed.mov/?video_id=${id}&tmdb=1`;
    }
  },
  {
    id: 'embedsu',
    name: 'Embed.su',
    quality: 'HD',
    description: 'Stable streaming service',
    getUrl: (type, id, season, episode) => {
      if (type === 'tv' && season && episode) {
        return `https://embed.su/embed/tv/${id}/${season}/${episode}`;
      }
      return `https://embed.su/embed/movie/${id}`;
    }
  },
  {
    id: 'autoembed',
    name: 'AutoEmbed',
    quality: 'HD',
    description: 'Auto-select best source',
    getUrl: (type, id, season, episode) => {
      if (type === 'tv' && season && episode) {
        return `https://autoembed.co/tv/tmdb/${id}-${season}-${episode}`;
      }
      return `https://autoembed.co/movie/tmdb/${id}`;
    }
  },
  {
    id: 'moviesapi',
    name: 'MoviesAPI',
    quality: 'HD',
    description: 'Direct API streaming',
    getUrl: (type, id, season, episode) => {
      if (type === 'tv' && season && episode) {
        return `https://moviesapi.club/tv/${id}-${season}-${episode}`;
      }
      return `https://moviesapi.club/movie/${id}`;
    }
  },
  {
    id: 'smashystream',
    name: 'SmashyStream',
    quality: 'FHD',
    description: 'Premium streaming quality',
    getUrl: (type, id, season, episode) => {
      if (type === 'tv' && season && episode) {
        return `https://player.smashy.stream/tv/${id}?s=${season}&e=${episode}`;
      }
      return `https://player.smashy.stream/movie/${id}`;
    }
  }
];

export function getProviderUrl(
  providerId: string,
  type: 'movie' | 'tv',
  id: string,
  season?: number,
  episode?: number
): string {
  const provider = streamProviders.find(p => p.id === providerId);
  if (!provider) return streamProviders[0].getUrl(type, id, season, episode);
  return provider.getUrl(type, id, season, episode);
}
