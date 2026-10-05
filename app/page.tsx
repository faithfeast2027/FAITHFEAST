import './globals.css';
import type { Metadata } from 'next';
import Link from 'next/link';
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
        <header className="page-shell topbar">
          <Link href="/" className="logo" aria-label="Faith Feast home">
            <span className="logo-mark">F</span>
            <span>Faith Feast</span>
          </Link>
          <nav className="nav-links" aria-label="Main navigation">
            <Link href="/" className="nav-button">Home</Link>
            <Link href="/login" className="nav-button">Login</Link>
            <Link href="/customer" className="nav-button">Customer</Link>
            <Link href="/vendor" className="nav-button">Vendor</Link>
            <Link href="/driver" className="nav-button">Driver</Link>
          </nav>
        </header>
        <PwaInstallButton />
        {children}
      </body>
    </html>
  );
}
