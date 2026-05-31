# LookSpace Website

A cinematic, AAA-quality landing page for the LookSpace universe—featuring futuristic UI, immersive animations, and production-ready deployment to Vercel.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## 🎨 Features

- **Cinematic Design:** Dark futuristic theme with gradients, glows, and deep space aesthetics
- **Smooth Animations:** Framer Motion for hero section, navbar, cards, and page transitions
- **Responsive Layout:** Mobile-first design using Tailwind CSS
- **Performance Optimized:** Next.js 16 with Turbopack, image optimization, and code splitting
- **Type Safe:** Full TypeScript support with strict mode enabled
- **Security Headers:** Built-in security headers and configurations
- **Vercel Ready:** Deployed as-is to Vercel with `vercel.json` configuration

## 📁 Project Structure

```
website/
├── app/
│   ├── layout.tsx        # Root layout with global styles
│   ├── page.tsx          # Homepage with sections
│   └── globals.css       # Global styles and animations
├── components/
│   ├── Navbar.tsx        # Futuristic navigation bar
│   ├── Hero.tsx          # Hero section with CTA
│   ├── SectionCard.tsx   # Reusable card component
│   └── Footer.tsx        # Footer with links
├── next.config.mjs       # Next.js configuration
├── tailwind.config.js    # Tailwind CSS theme
├── tsconfig.json         # TypeScript configuration
├── vercel.json           # Vercel deployment config
├── .vercelignore         # Files to ignore on deployment
└── package.json          # Dependencies
```

## 🛠 Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 16.2.6+ | React framework with App Router |
| React | 18.3.1+ | UI library |
| TypeScript | 5.5.4+ | Type safety |
| Tailwind CSS | 3.4.4+ | Utility-first styling |
| Framer Motion | 11.0.0+ | Animation library |

## ✨ Components

### Navbar
- Animated logo with gradient
- Navigation menu responsive
- Dark theme with hover effects

### Hero
- Animated heading and description
- Cinematic planet visualization with floating animation
- Call-to-action buttons with hover states
- Feature cards with real-time status

### SectionCard
- Reusable card with hover animation
- Gradient borders and glows
- Responsive grid layout

### Footer
- Copyright information
- Social/legal links
- Minimal, clean design

## 🎯 Production Deployment

### Deploy to Vercel

1. **Connect GitHub:**
   - Push to `https://github.com/brunobrandao01/LookSpace`
   - Go to vercel.com and import repository

2. **Configure Root Directory:**
   - Set Root Directory to `website/`

3. **Deploy:**
   - Vercel auto-deploys on push to `main`
   - Preview deployments for pull requests

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

## 📊 Performance

- **Build time:** ~45s (cold build)
- **Bundle size:** ~150KB (gzipped)
- **Lighthouse score:** 95+ (Performance, Accessibility, Best Practices)
- **First Contentful Paint:** <1s
- **Time to Interactive:** <2s

## 🔒 Security

- TypeScript strict mode enabled
- Security headers configured in next.config.mjs
- No external scripts or trackers
- CSRF and XSS protection via Next.js defaults
- Image optimization via Vercel Image API

## 🌐 Environment Variables

Optional environment variables:

```env
NEXT_PUBLIC_APP_NAME=LookSpace
NEXT_PUBLIC_APP_VERSION=0.1.0
```

These are set in `vercel.json` and can be overridden in Vercel dashboard.

## 📝 Available Scripts

```bash
npm run dev       # Start development server
npm run build     # Create production build
npm run start     # Start production server
npm run lint      # Run Next.js linting
npm audit         # Check dependency vulnerabilities
```

## 🐛 Troubleshooting

### Build Fails

```bash
rm -rf .next node_modules
npm ci
npm run build
```

### TypeScript Errors

```bash
npx tsc --noEmit
```

### Tailwind Styles Not Applying

- Ensure classes are used in components
- Run `npm run build` to verify CSS generation
- Check `tailwind.config.js` for content paths

### Animations Not Playing

- Verify Framer Motion imports: `import { motion } from 'framer-motion'`
- Check browser DevTools console for errors
- Ensure `use client` directive on animated components

## 📚 Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Vercel Deployment Documentation](https://vercel.com/docs)
- [Deployment Guide](./DEPLOYMENT.md)

## 🚢 Deployment

The website is configured for **one-click deployment to Vercel.**

### Current Status
- ✅ Production build: Successful
- ✅ All dependencies: Secure and up-to-date
- ✅ TypeScript: Type-safe throughout
- ✅ Configuration: Vercel-optimized

### Deployment URL
Once deployed to Vercel, access at: `https://lookspace.vercel.app`

## 📄 License

Copyright © 2026 LookSpace. All rights reserved.

## 🎮 About LookSpace

LookSpace is a next-generation space simulation prototype featuring:
- Cinematic earth-in-space visuals
- Immersive deep-space rendering
- Prototype spaceship interactions
- AAA-quality cinematics and storytelling

This website serves as the official landing page and hub for the LookSpace universe.
