import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import { blogPosts } from '@/lib/blog';
import { locationPages } from '@/lib/locations';
import { practiceByGroup, practiceHref } from '@/lib/practice';
import { breadcrumbSchema, pageMeta } from '@/lib/seo';
import { site } from '@/lib/site';

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Sitemap', href: '/sitemap' },
];

export const metadata = pageMeta({
  title: 'Sitemap',
  description:
    'Every page on the Lawson Personal Injury Attorneys website — practice areas, service areas, attorney profile, blog, and firm information. Call (404) 394-9410.',
  path: '/sitemap',
});

const coreLinks = [
  { label: 'Home', href: '/' },
  { label: `Attorney ${site.attorneyShort}`, href: '/attorney' },
  { label: 'Practice Areas', href: '/practice-areas' },
  { label: 'Client Reviews', href: '/testimonials' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
  { label: 'Disclaimer', href: '/disclaimer' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Sitemap', href: '/sitemap' },
];

/**
 * The human-readable sitemap. The machine-readable one is generated separately
 * by src/app/sitemap.ts at /sitemap.xml — different route, different audience.
 */
export default function HtmlSitemapPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />

      <div className="bg-bone">
        <div className="container-x pb-24 pt-32 lg:pt-40">
          <Breadcrumbs crumbs={crumbs} tone="light" className="mb-8" />
          <h1 className="display-lg text-night">Sitemap</h1>
          <span className="underline-crest-anim mt-7 !bg-crest-deep" aria-hidden="true" />
          <p className="mt-8 max-w-measure text-lg leading-[1.65] text-ash">
            Every page on this site. The machine-readable version is at{' '}
            <a href="/sitemap.xml" className="text-crest-deep underline underline-offset-2">
              /sitemap.xml
            </a>
            .
          </p>

          <div className="mt-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            <Group title="Firm">
              {coreLinks.map((l) => (
                <Row key={l.href} href={l.href}>
                  {l.label}
                </Row>
              ))}
            </Group>

            <Group title="Personal Injury">
              <Row href="/personal-injury">Personal Injury Overview</Row>
              {practiceByGroup.map((g) => (
                <li key={g.group} className="pt-4">
                  <p className="label mb-1 text-ash/50">{g.group}</p>
                  <ul>
                    {g.pages.map((p) => (
                      <Row key={p.slug} href={practiceHref(p.slug)}>
                        {p.navLabel}
                      </Row>
                    ))}
                  </ul>
                </li>
              ))}
              <li className="pt-4">
                <ul>
                  <Row href="/personal-injury/faq">Personal Injury FAQ</Row>
                </ul>
              </li>
            </Group>

            <Group title="Service Areas">
              {locationPages.map((l) => (
                <Row key={l.slug} href={`/${l.slug}`}>
                  {l.city}, GA — {l.county}
                </Row>
              ))}
            </Group>

            <Group title="Blog Topics">
              {blogPosts.map((p) => (
                <li key={p.slug} className="border-b border-night/10 py-2.5">
                  {p.published ? (
                    <Link href={`/blog/${p.slug}`} className="text-[15px] text-ash hover:text-crest-deep">
                      {p.title}
                    </Link>
                  ) : (
                    <span className="text-[15px] text-ash/60">
                      {p.title} <span className="text-ash/40">(in progress)</span>
                    </span>
                  )}
                </li>
              ))}
            </Group>
          </div>

          <div className="mt-20 border-t border-night/10 pt-10">
            <p className="label mb-4 text-crest-deep">Office</p>
            <address className="not-italic leading-relaxed text-ash">
              <span className="block text-night">{site.name}</span>
              {site.addressLine}
              <br />
              <a href={site.phoneHref} className="text-crest-deep hover:text-night">
                {site.phone}
              </a>
            </address>
          </div>
        </div>
      </div>
    </>
  );
}

function Group({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="label mb-5 text-crest-deep">{title}</h2>
      <ul>{children}</ul>
    </div>
  );
}

function Row({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li className="border-b border-night/10 py-2.5">
      <Link href={href} className="text-[15px] text-ash transition-colors hover:text-crest-deep">
        {children}
      </Link>
    </li>
  );
}
