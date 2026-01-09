# 🚀 Deployment Guide for StreamIt Pro

## Prerequisites
- GitHub account
- Vercel account (free tier works)
- TMDb API key (free from themoviedb.org)

## Step 1: Get TMDb API Key

1. Go to https://www.themoviedb.org/signup
2. Create a free account
3. Go to Settings → API → Request API Key
4. Choose "Developer" option
5. Fill in the application details (can be simple)
6. Copy your API key (v3 auth)

## Step 2: Deploy to Vercel

### Option A: Deploy via Vercel Dashboard

1. Go to https://vercel.com
2. Sign in with GitHub
3. Click "Add New Project"
4. Import your GitHub repository: `Samsaifirdxxx/Stream-it-pro`
5. Configure project:
   - Framework Preset: Next.js
   - Root Directory: ./
   - Build Command: `npm run build`
   - Output Directory: .next
6. Add Environment Variable:
   - Key: `NEXT_PUBLIC_TMDB_API_KEY`
   - Value: [Your TMDb API key]
7. Click "Deploy"

### Option B: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
cd streamit-pro
vercel

# Add environment variable
vercel env add NEXT_PUBLIC_TMDB_API_KEY

# Deploy to production
vercel --prod
```

## Step 3: Verify Deployment

1. Wait for deployment to complete (2-3 minutes)
2. Visit your deployment URL (e.g., `streamit-pro.vercel.app`)
3. Check that:
   - Homepage loads with trending content
   - Video players work with multiple providers
   - Navigation works (Trending, Movies, TV Shows)
   - Ad-blocker prevents redirects

## Step 4: Custom Domain (Optional)

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

## Troubleshooting

### Build Fails
- **Issue**: "Failed to fetch from TMDb"
- **Solution**: Make sure `NEXT_PUBLIC_TMDB_API_KEY` is set in Vercel environment variables

### Images Not Loading
- **Issue**: TMDb images not displaying
- **Solution**: Check that `next.config.ts` has correct image domains configured

### Video Players Not Working
- **Issue**: Iframe not loading
- **Solution**: Some providers may be blocked by browser. Try different provider tabs.

### Ad-Blocker Not Working
- **Issue**: Still getting redirects
- **Solution**: Clear browser cache and ensure latest deployment is active

## Environment Variables

Required:
- `NEXT_PUBLIC_TMDB_API_KEY` - Your TMDb API key

Optional:
- `NODE_ENV` - Set to "production" (auto-set by Vercel)

## Performance Optimization

1. **Enable Vercel Analytics** (free):
   - Go to project settings
   - Enable "Analytics"

2. **Enable Vercel Speed Insights**:
   - Go to project settings
   - Enable "Speed Insights"

3. **Configure Caching**:
   - TMDb API responses are cached for 1 hour by default
   - Adjust in `lib/tmdb.ts` if needed

## Monitoring

- Check deployment logs in Vercel dashboard
- Monitor API usage in TMDb account settings
- Set up Vercel notifications for deployment status

## Support

- Developer: [@Hellfirez3643](https://t.me/Hellfirez3643)
- GitHub Issues: https://github.com/Samsaifirdxxx/Stream-it-pro/issues

## Success Checklist

- [ ] TMDb API key obtained
- [ ] Repository pushed to GitHub
- [ ] Vercel project created
- [ ] Environment variable added
- [ ] Deployment successful
- [ ] Homepage loads correctly
- [ ] Video players work
- [ ] All navigation links work
- [ ] Mobile responsive design verified
- [ ] Custom domain configured (optional)

🎉 Congratulations! Your StreamIt Pro is now live!
