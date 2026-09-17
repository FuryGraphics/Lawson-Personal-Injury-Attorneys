import type { Metadata } from 'next';
import { serviceAreaNames, site, socialLinks } from './site';

type PageMetaArgs = {
  title: string;
  description: string;
  path: string;
  ogType?: 'website' | 'article' | 'profile';
  /**
   * Skip the "| Lawson Law" suffix the layout template appends. Used by the
   * attorney profiles, where the lawyer's own surname already carries the
   * brand and the suffix would repeat "Lawson" inside one title.
   */
  absoluteTitle?: boolean;
};

/**
 * Every page builds its metadata here so the title suffix, canonical, and OG
 * block stay uniform. `title` is the page-specific half — the firm name is
 * appended once, in the layout template.
 */
export function pageMeta({
  title,
  description,
  path,
  ogType = 'website',
  absoluteTitle = false,
}: PageMetaArgs): Metadata {
  const url = `${site.url}${path === '/' ? '' : path}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: absoluteTitle ? title : `${title} | ${site.titleBrand}`,
      description,
      url,
      siteName: site.name,
      locale: 'en_US',
      type: ogType,
    },
    twitter: {
      card: 'summary_large_image',
      title: absoluteTitle ? title : `${title} | ${site.titleBrand}`,
      description,
    },
  };
}

export type Crumb = { name: string; href: string };

export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: `${site.url}${c.href === '/' ? '' : c.href}`,
    })),
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

const postalAddress = {
  '@type': 'PostalAddress',
  streetAddress: site.address.street,
  addressLocality: site.address.city,
  addressRegion: site.address.state,
  postalCode: site.address.zip,
  addressCountry: 'US',
};

const geo = {
  '@type': 'GeoCoordinates',
  latitude: site.geo.lat,
  longitude: site.geo.lng,
};

// Open 24/7, matching the Google Business Profile. Seven days, midnight to
// 23:59 — the conventional way to express "always open" in schema.org.
const openingHours = {
  '@type': 'OpeningHoursSpecification',
  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  opens: site.hoursSpec.opens,
  closes: site.hoursSpec.closes,
};

const sameAs = socialLinks.map((s) => s.href);

const areaServed = serviceAreaNames.map((name) => ({
  '@type': name.endsWith('County') ? 'AdministrativeArea' : 'City',
  name,
}));

/**
 * Note: no `aggregateRating` or `review` property is emitted anywhere on this
 * site. Reviews live on Google and the count is not known at build time —
 * hardcoding a rating into schema is a routine cause of structured-data
 * penalties and is not worth the star snippet.
 */
export function legalServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    '@id': `${site.url}/#organization`,
    name: site.name,
    legalName: site.legalName,
    description: `Personal injury law firm serving Atlanta, Lawrenceville, and the greater metro Atlanta area from an office in Lawrenceville, Georgia. Car, truck, motorcycle, and pedestrian accidents, slip and fall, and wrongful death.`,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    address: postalAddress,
    geo,
    areaServed,
    knowsAbout: [
      'Personal injury law',
      'Car accident claims',
      'Truck accident claims',
      'Motorcycle accident claims',
      'Pedestrian accident claims',
      'Premises liability',
      'Wrongful death claims',
    ],
    founder: { '@type': 'Person', name: site.attorney },
    employee: [
      { '@type': 'Person', name: 'Yari D. Lawson', jobTitle: 'Attorney and Founder' },
      { '@type': 'Person', name: 'Boris Y. Milter', jobTitle: 'Senior Associate Attorney' },
    ],
    openingHoursSpecification: [openingHours],
    ...(sameAs.length ? { sameAs } : {}),
  };
}

/**
 * Location pages. All three carry the same Lawrenceville address — the firm has
 * one office, and a service-area page must never imply a second one.
 */
export function localBusinessSchema(opts: { path: string; cityName: string; description: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${site.url}${opts.path}/#localbusiness`,
    name: site.name,
    description: opts.description,
    url: `${site.url}${opts.path}`,
    telephone: site.phone,
    email: site.email,
    address: postalAddress,
    geo,
    areaServed: { '@type': 'City', name: `${opts.cityName}, GA` },
    parentOrganization: { '@id': `${site.url}/#organization` },
    openingHoursSpecification: [openingHours],
    ...(sameAs.length ? { sameAs } : {}),
  };
}

export function attorneySchema(a: {
  slug: string;
  name: string;
  title: string;
  email: string;
  languages: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Attorney',
    '@id': `${site.url}/attorneys/${a.slug}#person`,
    name: a.name,
    jobTitle: a.title,
    url: `${site.url}/attorneys/${a.slug}`,
    telephone: site.phone,
    email: a.email,
    address: postalAddress,
    worksFor: { '@type': 'LegalService', '@id': `${site.url}/#organization`, name: site.name },
    areaServed,
    knowsAbout: ['Personal injury law', 'Georgia civil litigation', 'Insurance claims'],
    ...(a.languages.length ? { knowsLanguage: a.languages } : {}),
  };
}
