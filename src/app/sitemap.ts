import { MetadataRoute } from 'next';
import { posts } from './blogs/posts';

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.codehera.in').replace(/\/$/, '');

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/about', '/services', '/careers', '/blogs', '/contact'];

  const staticEntries = routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: (route === '' ? 'weekly' : 'monthly') as MetadataRoute.Sitemap[number]['changeFrequency'],
    priority: route === '' ? 1 : 0.8,
  }));

  const blogEntries = posts.map((p) => ({
    url: `${siteUrl}/blogs/${p.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  return [...staticEntries, ...blogEntries];
}
