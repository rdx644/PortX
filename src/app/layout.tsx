import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { ScrollReveals } from '@/components/ui/ScrollReveals';
import { Navigation } from '@/components/navigation/Navigation';
import { Footer } from '@/components/sections/Contact';
import { siteUrl } from '@/lib/site';
import './globals.css';
const geist = localFont({
  src: '../../node_modules/@fontsource/geist/files/geist-latin-400-normal.woff2',
  variable: '--font-body',
  display: 'swap',
  weight: '400',
});
const geistMedium = localFont({
  src: '../../node_modules/@fontsource/geist/files/geist-latin-900-normal.woff2',
  variable: '--font-display',
  display: 'swap',
  weight: '900',
});
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Shubham Putitundi — Software & Cloud Engineer',
    template: '%s — Shubham Putitundi',
  },
  description:
    'Software engineering, cloud infrastructure, and intelligent applications. Selected engineering work by Shubham Putitundi.',
  openGraph: {
    title: 'Shubham Putitundi — Software & Cloud Engineer',
    description: 'Reliable systems. Thoughtful engineering. Explore the work behind the code.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Shubham Putitundi',
  },
  twitter: { card: 'summary_large_image' },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Shubham Putitundi',
    url: siteUrl,
    sameAs: [
      'https://github.com/rdx644',
      'https://www.linkedin.com/in/shubham-putitundi-b41a802b1',
    ],
    knowsAbout: ['Software Engineering', 'Cloud Computing', 'Cybersecurity'],
  };
  return (
    <html lang="en" className={`${geist.variable} ${geistMedium.variable}`}>
      <body id="top">
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <ScrollReveals />
        <Navigation />
        {children}
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(person).replace(/</g, '\\u003c') }}
        />
      </body>
    </html>
  );
}
