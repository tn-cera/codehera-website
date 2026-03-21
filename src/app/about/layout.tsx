import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | CodeHera Technologies',
  description: 'CodeHera is an IT services and consulting company built for organizations that need reliable software, scalable infrastructure, and consulting that translates strategy into execution. Learn more about our Mission and Vision.',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
