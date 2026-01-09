import { Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-purple-500/20 mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              StreamIt Pro
            </h3>
            <p className="text-gray-400 text-sm">
              Your ultimate destination for streaming movies and TV shows. Enjoy unlimited entertainment with multiple providers and ad-free experience.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="/trending" className="hover:text-purple-400 transition-colors">Trending</a></li>
              <li><a href="/movies" className="hover:text-purple-400 transition-colors">Movies</a></li>
              <li><a href="/tv-shows" className="hover:text-purple-400 transition-colors">TV Shows</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Connect With Us</h4>
            <a
              href="https://t.me/Hellfirez3643"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-2 rounded-lg transition-all transform hover:scale-105"
            >
              <Send className="w-4 h-4" />
              <span>@Hellfirez3643</span>
            </a>
            <p className="text-gray-400 text-xs mt-4">
              Developer Signature: Built with ❤️ by @Hellfirez3643
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} StreamIt Pro. All rights reserved.</p>
          <p className="mt-2">Powered by TMDb API • Multiple Premium Providers • Ad-Free Experience</p>
        </div>
      </div>
    </footer>
  );
}
