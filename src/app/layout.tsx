import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const hasSiteUrl = Boolean(siteUrl);

export const metadata: Metadata = {
  title: 'CodeHera | Engineering the Future of Intelligent Systems',
  description: 'Built for scale and performance. AI at the core of every system.',
  ...(hasSiteUrl
    ? {
        metadataBase: new URL(siteUrl as string),
        alternates: {
          canonical: '/',
        },
        openGraph: {
          type: 'website',
          url: siteUrl,
          title: 'CodeHera | Engineering the Future of Intelligent Systems',
          description: 'Built for scale and performance. AI at the core of every system.',
          siteName: 'CodeHera',
        },
        twitter: {
          card: 'summary_large_image',
          title: 'CodeHera | Engineering the Future of Intelligent Systems',
          description: 'Built for scale and performance. AI at the core of every system.',
        },
      }
    : {}),
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'CodeHera Technologies',
  url: hasSiteUrl ? siteUrl : undefined,
  email: 'contact@codehera.in',
  sameAs: [
    'https://www.linkedin.com/company/code-hera',
    'https://www.instagram.com/codehera',
    'https://twitter.com/codehera',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} min-h-screen flex flex-col`}>
        <script
          type="application/ld+json"
          // JSON-LD helps search engines understand your site quickly.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Navbar />
        {/* Grain overlay for polish */}
        <div className="noise-overlay" />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
