import type { MetadataRoute } from 'next';
import { publishedPosts } from '@/lib/blog';
import { locationPages } from '@/lib/locations';
import { practicePaths } from '@/lib/practice';
import { site } from '@/lib/site';

type Entry = { path: string; priority: number; changeFrequency: 'weekly' | 'monthly' | 'yearly' };

/**
 * /sitemap.xml. Note this coexists with the HTML sitemap at src/app/sitemap/ —
 * Next serves this metadata route at /sitemap.xml and the page at /sitemap, so
 * the two do not collide.
 *
 * Unpublished blog posts are deliberately excluded: submitting URLs that render
 * nothing is a reliable way to earn a thin-content signal.
 */
const staticRoutes: Entry[] = [
  { path: '/', priority: 1.0, changeFrequency: 'weekly' },
  { path: '/personal-injury', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/practice-areas', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/contact', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/attorney', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/personal-injury/faq', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/testimonials', priority: 0.6, changeFrequency: 'weekly' },
  { path: '/blog', priority: 0.6, changeFrequency: 'weekly' },
  { path: '/sitemap', priority: 0.3, changeFrequency: 'monthly' },
  { path: '/disclaimer', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly' },
];

const practiceRoutes: Entry[] = practicePaths.map((path) => ({
  path,
  priority: 0.8,
  changeFrequency: 'monthly',
}));

const locationRoutes: Entry[] = locationPages.map((l) => ({
  path: `/${l.slug}`,
  // Lawrenceville carries the real office, so it is the primary local page.
  priority: l.isOffice ? 0.9 : 0.8,
  changeFrequency: 'monthly',
}));

const blogRoutes: Entry[] = publishedPosts.map((p) => ({
  path: `/blog/${p.slug}`,
  priority: 0.5,
  changeFrequency: 'monthly',
}));

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [...staticRoutes, ...practiceRoutes, ...locationRoutes, ...blogRoutes].map((r) => ({
    url: `${site.url}${r.path === '/' ? '' : r.path}`,
    lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
