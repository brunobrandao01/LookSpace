import './globals.css';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'LookSpace - Cinematic Space Simulation',
  description: 'LookSpace is the cinematic AAA space simulation prototype with futuristic UI and immersive universe storytelling.',
  manifest: '/manifest.webmanifest',
  themeColor: '#02020d',
  icons: [
    { rel: 'icon', url: '/favicon.svg' },
    { rel: 'apple-touch-icon', url: '/app-icon.svg', sizes: '180x180' },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
