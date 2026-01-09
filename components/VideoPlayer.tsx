'use client';

import { useState } from 'react';
import { streamProviders, getProviderUrl } from '@/lib/providers';

interface VideoPlayerProps {
  type: 'movie' | 'tv';
  id: string;
  season?: number;
  episode?: number;
}

export default function VideoPlayer({ type, id, season, episode }: VideoPlayerProps) {
  const [selectedProvider, setSelectedProvider] = useState(streamProviders[0].id);
  const streamUrl = getProviderUrl(selectedProvider, type, id, season, episode);

  const currentProvider = streamProviders.find(p => p.id === selectedProvider);

  return (
    <div className="w-full">
      <div className="bg-gray-800 rounded-lg overflow-hidden mb-4">
        <div className="flex flex-wrap gap-2 p-4 border-b border-gray-700">
          {streamProviders.map((provider) => (
            <button
              key={provider.id}
              onClick={() => setSelectedProvider(provider.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedProvider === provider.id
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              <div className="flex items-center space-x-2">
                <span>{provider.name}</span>
                <span className={`text-xs px-2 py-0.5 rounded ${
                  provider.quality === 'FHD' ? 'bg-green-500' :
                  provider.quality === 'HD' ? 'bg-blue-500' :
                  provider.quality === 'SD' ? 'bg-yellow-500' : 'bg-gray-500'
                }`}>
                  {provider.quality}
                </span>
              </div>
            </button>
          ))}
        </div>

        {currentProvider && (
          <div className="p-4 bg-gray-900/50">
            <p className="text-sm text-gray-400 mb-2">
              <span className="font-semibold text-purple-400">{currentProvider.name}</span> - {currentProvider.description}
            </p>
          </div>
        )}

        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          <iframe
            src={streamUrl}
            className="absolute top-0 left-0 w-full h-full"
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            sandbox="allow-scripts allow-same-origin allow-presentation"
            referrerPolicy="origin"
            title="Video Player"
          />
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 border border-purple-500/30 rounded-lg p-4">
        <h3 className="text-white font-semibold mb-2">🛡️ Ad-Blocker Active</h3>
        <p className="text-gray-300 text-sm">
          Our advanced ad-blocking technology prevents redirects and pop-ups. Enjoy uninterrupted streaming!
        </p>
      </div>
    </div>
  );
}
