import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services | CodeHera Technologies',
  description: 'From AI development to web platforms, cloud engineering, cybersecurity, big data architecture, and IT staffing. We deliver robust solutions tailored to your scale.',
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
