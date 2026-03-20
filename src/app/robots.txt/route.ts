import { NextRequest, NextResponse } from 'next/server';

function getOrigin(req: NextRequest) {
  // Prefer Next's computed origin (should be correct behind proxies).
  const origin = req.nextUrl?.origin;
  if (origin) return origin;

  const host = (req.headers.get('x-forwarded-host') ?? req.headers.get('host'))?.trim();
  const forwardedProto = req.headers.get('x-forwarded-proto');
  const proto = (forwardedProto ? forwardedProto.split(',')[0].trim() : undefined) ?? 'https';

  if (host) return `${proto}://${host}`.replace(/\/$/, '');

  // Safe fallback for your current domain.
  return 'https://www.codehera.in';
}

export async function GET(req: NextRequest) {
  const base = getOrigin(req);
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

