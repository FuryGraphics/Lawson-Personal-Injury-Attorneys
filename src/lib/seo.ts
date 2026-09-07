import type { Metadata } from 'next';
import { serviceAreaNames, site, socialLinks } from './site';

type PageMetaArgs = {
  title: string;
  description: string;
  path: string;
  ogType?: 'website' | 'article' | 'profile';
};

/**
 * Every page builds its metadata here so the title suffix, canonical, and OG
 * block stay uniform. `title` is the page-specific half — the firm name is
 * appended once, in the layout template.
 */
export function pageMeta({ title, description, path, ogType = 'website' }: PageMetaArgs): Metadata {
  const url = `${site.url}${path === '/' ? '' : path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${site.name}`,
      description,
      url,
      siteName: site.name,
      locale: 'en_US',
      type: ogType,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${site.name}`,
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

const openingHours = {
  '@type': 'OpeningHoursSpecification',
  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
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
    priceRange: 'Contingency fee — no fee unless we win',
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
    priceRange: 'Contingency fee — no fee unless we win',
    areaServed: { '@type': 'City', name: `${opts.cityName}, GA` },
    parentOrganization: { '@id': `${site.url}/#organization` },
    openingHoursSpecification: [openingHours],
    ...(sameAs.length ? { sameAs } : {}),
  };
}

export function attorneySchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Attorney',
    '@id': `${site.url}/attorney#person`,
    name: site.attorney,
    jobTitle: 'Attorney and Founder',
    url: `${site.url}/attorney`,
    telephone: site.phone,
    email: site.email,
    address: postalAddress,
    worksFor: { '@type': 'LegalService', '@id': `${site.url}/#organization`, name: site.name },
    areaServed: areaServed,
    knowsAbout: ['Personal injury law', 'Georgia civil litigation', 'Insurance claims'],
    ...(sameAs.length ? { sameAs } : {}),
  };
}
