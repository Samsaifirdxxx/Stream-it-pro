# 🎬 StreamIt Pro

A powerful and modern streaming platform built with Next.js 14, featuring multiple video providers, ad-blocking technology, and a beautiful UI.

## ✨ Features

### 🎥 Multiple Streaming Providers (10+)
- **VidSrc Pro** - Premium quality with subtitles (FHD)
- **VidSrc XYZ** - Fast streaming with multiple servers (FHD)
- **VidSrc ME** - Reliable streaming source (HD)
- **VidSrc CC** - Alternative streaming option (HD)
- **2Embed** - Popular embed provider (HD)
- **SuperEmbed** - High quality streaming (FHD)
- **Embed.su** - Stable streaming service (HD)
- **AutoEmbed** - Auto-select best source (HD)
- **MoviesAPI** - Direct API streaming (HD)
- **SmashyStream** - Premium streaming quality (FHD)

### 🛡️ Advanced Ad-Blocking
- Iframe sandbox attributes prevent redirects and pop-ups
- Click-jacking protection built-in
- No annoying ads or redirects when clicking player

### 🎨 Modern Design
- Glassmorphism UI with Tailwind CSS
- Purple gradient branding
- Smooth animations and transitions
- Fully responsive (mobile, tablet, desktop)

### 📱 Features
- Movie & TV show detail pages with cast information
- Trending, Popular, Top Rated, Upcoming sections
- Hero section with featured content
- Search functionality
- TMDb API integration

### 👤 Developer Signature
- Telegram: [@Hellfirez3643](https://t.me/Hellfirez3643)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- TMDb API key (free from [themoviedb.org](https://www.themoviedb.org/settings/api))

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Samsaifirdxxx/Stream-it-pro.git
cd Stream-it-pro
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env.local` file:
```bash
cp .env.example .env.local
```

4. Add your TMDb API key to `.env.local`:
```
NEXT_PUBLIC_TMDB_API_KEY=your_api_key_here
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🌐 Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Samsaifirdxxx/Stream-it-pro)

1. Click the button above or go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Add environment variable: `NEXT_PUBLIC_TMDB_API_KEY`
4. Deploy!

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **API:** TMDb API
- **Icons:** Lucide React
- **Deployment:** Vercel

## 📝 Project Structure

```
streamit-pro/
├── app/
│   ├── movie/[id]/     # Movie detail pages
│   ├── tv/[id]/        # TV show detail pages
│   ├── trending/       # Trending content
│   ├── movies/         # Movies listing
│   ├── tv-shows/       # TV shows listing
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/
│   ├── Header.tsx      # Navigation header
│   ├── Footer.tsx      # Footer with signature
│   ├── ContentCard.tsx # Content card component
│   ├── Carousel.tsx    # Horizontal carousel
│   └── VideoPlayer.tsx # Video player with providers
├── lib/
│   ├── tmdb.ts         # TMDb API functions
│   └── providers.ts    # Streaming providers config
└── public/             # Static assets
```

## 🎯 Key Features Comparison

| Feature | StreamIt Pro | Reference Site |
|---------|-------------|----------------|
| Streaming Providers | 10+ | 1-2 |
| Ad-Blocking | ✅ Advanced | ❌ None |
| UI/UX | Modern Glassmorphism | Basic |
| Type Safety | TypeScript | JavaScript |
| Performance | Next.js 14 | Standard |
| Responsive Design | Fully Responsive | Limited |

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Developer

Built with ❤️ by [@Hellfirez3643](https://t.me/Hellfirez3643)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## ⭐ Show Your Support

Give a ⭐️ if you like this project!
