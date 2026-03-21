import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

const defaultSite = 'https://www.codehera.in';
const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? defaultSite).replace(/\/$/, '');

const defaultDescription =
  'CodeHera Technologies provides IT services and consulting: custom software development, cloud & DevOps, cybersecurity, data engineering, AI solutions, and IT staffing for organizations worldwide.';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'CodeHera Technologies | IT Services & Consulting',
    template: '%s | CodeHera Technologies',
  },
  description: defaultDescription,
  keywords: [
    'CodeHera',
    'CodeHera Technologies',
    'IT services',
    'IT consulting',
    'software development',
    'cloud consulting',
    'DevOps',
    'codehera.in',
  ],
  icons: {
    icon: [{ url: '/codehera-logo-only.png', type: 'image/png' }],
    shortcut: '/codehera-logo-only.png',
    apple: '/codehera-logo-only.png',
  },
  openGraph: {
    type: 'website',
    url: baseUrl,
    siteName: 'CodeHera Technologies',
    locale: 'en_IN',
    title: 'CodeHera Technologies | IT Services & Consulting',
    description: defaultDescription,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CodeHera Technologies | IT Services & Consulting',
    description: defaultDescription,
  },
};

const orgDescription =
  'IT services and consulting company specializing in software development, cloud & DevOps, security, data engineering, AI, and IT staffing.';

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${baseUrl}/#organization`,
      name: 'CodeHera Technologies',
      description: orgDescription,
      url: baseUrl,
      email: 'contact@codehera.in',
      sameAs: [
        'https://www.linkedin.com/company/code-hera',
        'https://www.instagram.com/codehera',
        'https://twitter.com/codehera',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${baseUrl}/#website`,
      url: baseUrl,
      name: 'CodeHera Technologies',
      description: defaultDescription,
      publisher: {
        '@id': `${baseUrl}/#organization`,
      },
    },
    {
      '@type': 'SiteNavigationElement',
      '@id': `${baseUrl}/#navigation`,
      name: ['Home', 'About Us', 'Services', 'Careers', 'Blogs', 'Contact Us'],
      url: [
        `${baseUrl}/`,
        `${baseUrl}/about`,
        `${baseUrl}/services`,
        `${baseUrl}/careers`,
        `${baseUrl}/blogs`,
        `${baseUrl}/contact`,
      ],
    },
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
