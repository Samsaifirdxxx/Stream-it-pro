# ⚡ Quick Start Guide

## 🎯 Deploy to Vercel in 5 Minutes

### Step 1: Get TMDb API Key (2 minutes)
1. Visit: https://www.themoviedb.org/signup
2. Create free account
3. Go to: Settings → API → Request API Key
4. Choose "Developer" → Fill simple form
5. **Copy your API key** (starts with a letter, ~32 characters)

### Step 2: Deploy to Vercel (3 minutes)

#### Option A: One-Click Deploy (Easiest)
1. Click: [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Samsaifirdxxx/Stream-it-pro)
2. Sign in with GitHub
3. Click "Create" (repository will be forked)
4. Add environment variable:
   - Name: `NEXT_PUBLIC_TMDB_API_KEY`
   - Value: [Paste your TMDb API key]
5. Click "Deploy"
6. Wait 2-3 minutes
7. **Done!** Click "Visit" to see your site

#### Option B: Import Existing Repository
1. Go to: https://vercel.com/new
2. Import: `Samsaifirdxxx/Stream-it-pro`
3. Add environment variable:
   - Name: `NEXT_PUBLIC_TMDB_API_KEY`
   - Value: [Your TMDb API key]
4. Click "Deploy"
5. **Done!**

### Step 3: Verify (30 seconds)
✅ Homepage shows trending movies/shows  
✅ Click any content → Detail page loads  
✅ Video player shows 10+ provider tabs  
✅ Clicking player doesn't redirect (ad-blocker works)  
✅ Navigation works (Trending, Movies, TV Shows)  

## 🎉 Success!
Your StreamIt Pro is now live at: `your-project.vercel.app`

## 🔧 Troubleshooting

**Problem**: "Failed to fetch from TMDb"  
**Solution**: Check environment variable is set correctly in Vercel dashboard

**Problem**: Images not loading  
**Solution**: Wait 1-2 minutes for first build to complete, then refresh

**Problem**: Video not playing  
**Solution**: Try different provider tabs - some may be blocked by your ISP

## 📱 Share Your Site
- Custom domain: Vercel Settings → Domains
- Share link: `https://your-project.vercel.app`

## 💬 Support
Telegram: [@Hellfirez3643](https://t.me/Hellfirez3643)

---

**Total Time**: ~5 minutes  
**Cost**: $0 (Free tier)  
**Difficulty**: Easy ⭐
