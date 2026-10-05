import './globals.css';
import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Faithfeast',
  description: 'A daily drop marketplace for local food communities',
  manifest: '/manifest.json',
  openGraph: {
    title: 'Faithfeast',
    description: 'A daily drop marketplace for local food communities',
    images: ['/images/faithfeast-logo.jpeg'],
  },
};

export const viewport: Viewport = {
  themeColor: '#0f0f0f',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
