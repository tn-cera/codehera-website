import { NextResponse } from 'next/server';

export async function GET() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';
  const base = siteUrl.replace(/\/$/, '');
  const sitemapUrl = `${base}/sitemap.xml`;

  const body = [
    'User-agent: *',
    'Allow: /',
    `Sitemap: ${sitemapUrl}`,
    '',
  ].join('\n');

  return new NextResponse(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}

