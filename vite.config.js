import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const SITE_PATHS = [
  '/',
  '/about',
  '/services',
  '/services/neuroscience',
  '/services/surgery',
  '/services/cancer-care',
  '/services/diagnostics',
  '/services/emergency',
  '/doctors',
  '/doctors/aria-salehi',
  '/doctors/lina-karimi',
  '/doctors/yasin-noori',
  '/doctors/soraya-ahmadi',
  '/patients',
  '/research',
  '/news',
  '/news/understanding-stroke-signs',
  '/news/early-cancer-screening',
  '/news/advanced-imaging-explained',
  '/news/diagnostics-wing-opens',
  '/news/clinical-research-partnership',
  '/news/residency-applications-2027',
  '/contact',
  '/appointment',
  '/privacy',
  '/terms',
  '/disclaimer',
  '/accessibility',
];

function sitemapPlugin(origin) {
  return {
    name: 'write-sitemap',
    closeBundle() {
      const base = String(origin || '').replace(/\/$/, '');
      const loc = (route) => (base ? `${base}${route}` : route);
      const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${SITE_PATHS.map((route) => `  <url>
    <loc>${loc(route)}</loc>
    <changefreq>${route === '/' ? 'daily' : 'weekly'}</changefreq>
    <priority>${route === '/' ? '1.0' : route.split('/').length <= 2 ? '0.8' : '0.6'}</priority>
  </url>`).join('\n')}
</urlset>
`;
      fs.writeFileSync(path.resolve(__dirname, 'public/sitemap.xml'), xml);
      try {
        fs.writeFileSync(path.resolve(__dirname, 'dist/sitemap.xml'), xml);
      } catch {
        // dist may not exist during a failed build
      }
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, __dirname, '');
  return {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    plugins: [
      react(),
      sitemapPlugin(env.VITE_SITE_URL),
    ],
  };
});
