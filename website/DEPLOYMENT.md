# LookSpace Website - Vercel Deployment Guide

## Overview

LookSpace is a cinematic, futuristic Next.js landing page built for the immersive space simulation universe. This guide covers deployment to Vercel and production launch.

## Prerequisites

- GitHub account with repository access
- Vercel account (free tier supported)
- Node.js 18+ (for local testing)

## Deployment Steps

### 1. Connect GitHub to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "Add New..." → "Project"
4. Find and import the `brunobrandao01/LookSpace` repository
5. Vercel will auto-detect Next.js

### 2. Configure Project Settings

**Root Directory:** `website/`

This is critical - Vercel must be configured to use `website/` as the root directory since the entire LookSpace monorepo contains multiple projects.

**Build Command:** `npm run build`
**Output Directory:** `.next`
**Install Command:** `npm ci`

### 3. Environment Variables (Optional)

Add to Vercel project settings if needed:

```
NEXT_PUBLIC_APP_NAME=LookSpace
NEXT_PUBLIC_APP_VERSION=0.1.0
```

### 4. Deploy

Once connected, Vercel will:
1. Auto-deploy on every push to `main` branch
2. Create preview deployments for pull requests
3. Build the Next.js application
4. Optimize and deploy to CDN

## Local Testing

### Install Dependencies

```bash
cd website
npm install
```

### Run Development Server

```bash
npm run dev
```

Access at `http://localhost:3000`

### Production Build

```bash
npm run build
npm start
```

## Production Configuration

The production build is optimized with:

- **Compression enabled** - gzip/brotli compression for assets
- **SWC minification** - fast JavaScript/CSS minification
- **Image optimization** - AVIF/WebP formats
- **Security headers** - X-Frame-Options, X-XSS-Protection, etc.
- **Cache control** - optimal caching strategies via vercel.json
- **No source maps** - production source maps disabled for security

## Troubleshooting

### Build Fails

1. Verify Node.js version: `node --version` (should be 18+)
2. Check `package.json` dependencies are valid
3. Clear build cache: `rm -rf .next node_modules && npm install`
4. Check for TypeScript errors: `npx tsc --noEmit`

### Deployment Slow

1. Check `node_modules` size - may need to audit dependencies
2. Review `.vercelignore` - unnecessary files should be excluded
3. Verify cache control headers in `vercel.json`

### Pages Not Loading

1. Verify root directory is set to `website/` in Vercel
2. Check Vercel deployment logs for build errors
3. Ensure all environment variables are set

### Missing Styles or Animations

1. Clear browser cache (Ctrl+Shift+Delete)
2. Verify Tailwind CSS build: `npm run build` completes
3. Check Framer Motion imports: `import { motion } from 'framer-motion'`

## Production Readiness Checklist

- [x] Next.js 16.2.6+ configured
- [x] TypeScript strict mode enabled
- [x] Tailwind CSS production build
- [x] Framer Motion animations working
- [x] All components properly imported
- [x] vercel.json configured
- [x] .vercelignore configured
- [x] Security headers enabled
- [x] Image optimization configured
- [x] Environment variables documented
- [x] npm dependencies audit passed
- [x] Production build successful

## Monitoring

After deployment, monitor at:

- **Vercel Dashboard:** https://vercel.com/dashboard
- **Real-time logs:** Deploy details and function logs
- **Web Analytics:** Built-in Vercel Analytics (optional)

## Custom Domain

To add a custom domain:

1. Go to Vercel project settings → Domains
2. Add custom domain
3. Update DNS records as instructed
4. Wait for SSL certificate (auto-provisioned)

## Performance Tips

1. **Images:** Use `next/image` component for optimization
2. **Code splitting:** Next.js auto-splits per route
3. **CSS:** Tailwind CSS only includes used styles
4. **JavaScript:** Framer Motion tree-shakes unused animations
5. **Caching:** Vercel CDN caches static assets globally

## Support

- **Vercel Docs:** https://vercel.com/docs
- **Next.js Docs:** https://nextjs.org/docs
- **Framer Motion:** https://www.framer.com/motion/
- **Tailwind CSS:** https://tailwindcss.com/docs

## Next Steps

1. Commit and push this guide to GitHub
2. Connect LookSpace repository to Vercel
3. Monitor first deployment
4. Test all pages and animations
5. Enable custom domain when ready
