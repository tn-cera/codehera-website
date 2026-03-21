import type { Metadata } from 'next';
import HomePageClient from './HomePageClient';

const site = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.codehera.in').replace(/\/$/, '');

const homeTitle = 'CodeHera Technologies | IT Services, Software Development & Consulting';
const homeDescription =
  'CodeHera Technologies is an IT services and consulting company. We deliver custom software development, cloud & DevOps, cybersecurity, data engineering, AI solutions, and IT staffing for organizations worldwide.';

export const metadata: Metadata = {
  title: homeTitle,
  description: homeDescription,
  keywords: [
    'CodeHera',
    'CodeHera Technologies',
    'IT services company',
    'software development company',
    'IT consulting',
    'cloud consulting',
    'DevOps services',
    'codehera.in',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: site,
    siteName: 'CodeHera Technologies',
    locale: 'en_IN',
    title: 'CodeHera Technologies | IT Services & Consulting',
    description: homeDescription,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CodeHera Technologies | IT Services & Consulting',
    description: homeDescription,
  },
};

export default function HomePage() {
  return <HomePageClient />;
}
