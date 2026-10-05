import './globals.css';
import type { Metadata } from 'next';
import { PwaInstallButton } from '@/components/PwaInstallButton';

export const metadata: Metadata = {
  title: 'Faith Feast',
  description: 'Daily food drops and fair driver earnings.',
  manifest: '/manifest.webmanifest',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Faith Feast',
  },
  themeColor: '#f43f5e',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <PwaInstallButton />
        {children}
      </body>
    </html>
  );
}
