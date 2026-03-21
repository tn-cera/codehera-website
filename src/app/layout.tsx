import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const hasSiteUrl = Boolean(siteUrl);

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: 'CodeHera Technologies | IT Consulting & Software Development',
  description: 'Built for scale and performance. CodeHera delivers cutting-edge software development, cloud infrastructure, and AI solutions.',
  keywords: ['CodeHera', 'CodeHera Technologies', 'Code Hera', 'codehera.in', 'IT Services', 'Software Development Company', 'AI Solutions', 'Cloud Infrastructure'],
  icons: {
    icon: [{ url: '/codehera-logo-only.png', type: 'image/png' }],
    shortcut: '/codehera-logo-only.png',
    apple: '/codehera-logo-only.png',
  },
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

// JSON-LD must always use absolute URLs (avoid "undefined/..." when env is missing locally).
const jsonLdBase = (siteUrl ?? 'https://www.codehera.in').replace(/\/$/, '');

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${jsonLdBase}/#organization`,
      name: 'CodeHera Technologies',
      url: jsonLdBase,
      email: 'contact@codehera.in',
      sameAs: [
        'https://www.linkedin.com/company/code-hera',
        'https://www.instagram.com/codehera',
        'https://twitter.com/codehera',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${jsonLdBase}/#website`,
      url: jsonLdBase,
      name: 'CodeHera',
      publisher: {
        '@id': `${jsonLdBase}/#organization`
      },
    },
    {
      '@type': 'SiteNavigationElement',
      '@id': `${jsonLdBase}/#navigation`,
      name: ['Home', 'About Us', 'Services', 'Careers', 'Blogs', 'Contact Us'],
      url: [
        `${jsonLdBase}/`,
        `${jsonLdBase}/about`,
        `${jsonLdBase}/services`,
        `${jsonLdBase}/careers`,
        `${jsonLdBase}/blogs`,
        `${jsonLdBase}/contact`
      ]
    }
  ]
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
