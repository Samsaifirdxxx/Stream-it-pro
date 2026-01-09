'use client';

import Link from 'next/link';
import { Film, Tv, TrendingUp, Search } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-purple-500/20">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-2 rounded-lg group-hover:scale-110 transition-transform">
              <Film className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              StreamIt Pro
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/trending" className="flex items-center space-x-2 text-gray-300 hover:text-purple-400 transition-colors">
              <TrendingUp className="w-5 h-5" />
              <span>Trending</span>
            </Link>
            <Link href="/movies" className="flex items-center space-x-2 text-gray-300 hover:text-purple-400 transition-colors">
              <Film className="w-5 h-5" />
              <span>Movies</span>
            </Link>
            <Link href="/tv-shows" className="flex items-center space-x-2 text-gray-300 hover:text-purple-400 transition-colors">
              <Tv className="w-5 h-5" />
              <span>TV Shows</span>
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-300 hover:text-purple-400"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-2">
            <Link href="/trending" className="block py-2 text-gray-300 hover:text-purple-400">
              Trending
            </Link>
            <Link href="/movies" className="block py-2 text-gray-300 hover:text-purple-400">
              Movies
            </Link>
            <Link href="/tv-shows" className="block py-2 text-gray-300 hover:text-purple-400">
              TV Shows
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
