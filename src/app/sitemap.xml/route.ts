import { NextResponse } from 'next/server';
import { posts } from '../blogs/posts';

function escapeXml(unsafe: string) {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<':
        return '&lt;';
      case '>':
        return '&gt;';
      case '&':
        return '&amp;';
      case '\'':
        return '&apos;';
      case '"':
        return '&quot;';
      default:
        return c;
    }
  });
}

export async function GET() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';
  const base = siteUrl.replace(/\/$/, '');
  const now = new Date().toISOString().slice(0, 10);

  const staticUrls = [
    '/',
    '/about',
    '/services',
    '/careers',
    '/blogs',
    '/contact',
  ];

  const blogUrls = posts.map((p) => `/blogs/${p.id}`);

  const urls = [...staticUrls, ...blogUrls];

  const xmlUrls = urls
    .map((path) => {
      const url = `${base}${path}`;
      return `<url><loc>${escapeXml(url)}</loc><lastmod>${now}</lastmod><changefreq>weekly</changefreq><priority>${path === '/' ? '1.0' : '0.6'}</priority></url>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${xmlUrls}\n</urlset>\n`;

  return new NextResponse(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}

