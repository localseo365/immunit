import { defineConfig } from 'astro/config';

const pages = [
  {
    url: '/',
    lastmod: new Date().toISOString(),
    changefreq: 'weekly',
    priority: 1.0
  },
  {
    url: '/legal',
    lastmod: new Date().toISOString(),
    changefreq: 'monthly',
    priority: 0.5
  },
  {
    url: '/privacidad',
    lastmod: new Date().toISOString(),
    changefreq: 'monthly',
    priority: 0.5
  },
  {
    url: '/cookies',
    lastmod: new Date().toISOString(),
    changefreq: 'monthly',
    priority: 0.5
  },
  {
    url: '/terminos',
    lastmod: new Date().toISOString(),
    changefreq: 'monthly',
    priority: 0.5
  }
];

export async function GET() {
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  ${pages.map(page => `
  <url>
    <loc>https://immunit.vercel.app${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
  `).join('')}
</urlset>`,
    {
      headers: {
        'Content-Type': 'application/xml'
      }
    }
  );
}