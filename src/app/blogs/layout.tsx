import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blogs & Insights | CodeHera Technologies',
  description: 'Explore the latest insights, tutorials, and engineering deep-dives from the experts at CodeHera. Topics cover AI, cloud infrastructure, and modern software development.',
};

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
