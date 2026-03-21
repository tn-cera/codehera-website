import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers | Join CodeHera Technologies',
  description: 'Join CodeHera to work on cutting-edge software development, cloud infrastructure, and AI solutions. Find your next role with us today.',
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
