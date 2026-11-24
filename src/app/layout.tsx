import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { AppNavigation } from '@/components/AppNavigation';
import { Footer } from '@/components/Footer';
import { PwaServiceWorker } from '@/components/PwaServiceWorker';
import { RouteTransition } from '@/components/RouteTransition';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://viavalves.vercel.app'),
  title: 'Via Valves | Industrial Valve Sourcing',
  description: 'Source industrial valves from verified factories. WhatsApp: +62 *12345678 | Email: info@viavalves.id.',
  openGraph: {
    type: 'website',
    siteName: 'Via Valves',
    title: 'Via Valves | Industrial Valve Sourcing',
    description: 'Source industrial valves from verified factories. WhatsApp: +62 *12345678 | Email: info@viavalves.id.',
    url: '/',
    images: [
      {
        url: '/favicon-512x512.png',
        width: 512,
        height: 512,
        alt: 'Via Valves',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Via Valves | Industrial Valve Sourcing',
    description: 'Source industrial valves from verified factories. WhatsApp: +62 *12345678 | Email: info@viavalves.id.',
    images: ['/favicon-512x512.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.png?v=9', type: 'image/png', sizes: '512x512' },
      { url: '/favicon-192x192.png?v=9', type: 'image/png', sizes: '192x192' },
      { url: '/favicon-512x512.png?v=9', type: 'image/png', sizes: '512x512' },
      { url: '/favicon-32x32.png?v=9', type: 'image/png', sizes: '32x32' },
      { url: '/favicon.ico?v=9', sizes: 'any' },
    ],
    shortcut: '/favicon.png?v=9',
    apple: [
      { url: '/apple-touch-icon.png?v=9', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable} scroll-smooth`}>
      <body className="bg-white text-ink font-sans antialiased selection:bg-amber selection:text-navy">
        <div className="flex min-h-screen flex-col">
          <AppNavigation />
          <main className="app-main flex-1">
            <RouteTransition>{children}</RouteTransition>
            <Footer />
          </main>
          <PwaServiceWorker />
        </div>
      </body>
    </html>
  );
}
