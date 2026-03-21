import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers',
  description:
    'Explore career opportunities at CodeHera Technologies. We hire engineers and consultants for client delivery across software development, cloud, security, and data.',
  alternates: {
    canonical: '/careers',
  },
  openGraph: {
    title: 'Careers | CodeHera Technologies',
    description:
      'Join our delivery teams: software engineering, cloud, security, and data roles for enterprise and product work.',
    url: '/careers',
  },
};

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return children;
}
