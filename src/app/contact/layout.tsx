import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | CodeHera Technologies',
  description: 'Get in touch with CodeHera. Whether you need engineering support, cloud consulting, or IT staff augmentation, our experts are ready to partner with you.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
