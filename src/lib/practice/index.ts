import { carAccidents, motorcycleAccidents, truckAccidents } from './pi-part1';
import { pedestrianAccidents, slipAndFall, wrongfulDeath } from './pi-part2';
import { bicycleAccidents, busAccidents, lyftAccidents, taxiAccidents, uberAccidents } from './pi-part3';
import { brainInjury, catastrophicInjuries, childInjuries, dogBites } from './pi-part4';
import { assaultInjuries, premisesLiability, sexualAssaults, workplaceAccidents } from './pi-part5';
import { practiceGroupOrder, type PracticeGroup, type PracticePage } from './types';

export type { Faq, PracticeGroup, PracticePage, Step } from './types';
export { practiceGroupOrder } from './types';

/**
 * The registry — the 19 case types the firm actually handles.
 *
 * Nav, footer, card grids, the FAQ index, the HTML sitemap, and sitemap.xml all
 * read from this array. Adding a twenty-fifth means adding it here and nothing
 * else. Order within each group is roughly by search volume.
 */
export const practicePages: PracticePage[] = [
  // Catastrophic and wrongful death lead: these are the cases the firm is built
  // around, and they set the order of the nav, the card grids, and the sitemap.
  wrongfulDeath,
  catastrophicInjuries,
  brainInjury,
  childInjuries,
  // Motor vehicle
  carAccidents,
  truckAccidents,
  motorcycleAccidents,
  pedestrianAccidents,
  bicycleAccidents,
  uberAccidents,
  lyftAccidents,
  busAccidents,
  taxiAccidents,
  // Premises, property and workplace
  premisesLiability,
  slipAndFall,
  dogBites,
  assaultInjuries,
  sexualAssaults,
  workplaceAccidents,
];

export const practiceBase = '/personal-injury';

export function practiceHref(slug: string) {
  return `${practiceBase}/${slug}`;
}

export function getPracticePage(slug: string): PracticePage | undefined {
  return practicePages.find((p) => p.slug === slug);
}

export const practiceSlugs = practicePages.map((p) => p.slug);

export const practicePaths = practicePages.map((p) => practiceHref(p.slug));

/** Flat link list — footer columns and the HTML sitemap. */
export const practiceLinks = practicePages.map((p) => ({
  label: p.navLabel,
  href: practiceHref(p.slug),
}));

/**
 * Grouped for the nav mega-menu — three columns, in the order defined by
 * practiceGroupOrder.
 */
export type GroupedPractice = { group: PracticeGroup; pages: PracticePage[] };

export const practiceByGroup: GroupedPractice[] = practiceGroupOrder
  .map((group) => ({ group, pages: practicePages.filter((p) => p.group === group) }))
  .filter((g) => g.pages.length > 0);

/**
 * The homepage grid shows these nine rather than all 19, in registry order — so
 * wrongful death, catastrophic injury and brain injury occupy the top row and
 * the vehicle cases follow. Every grid links onward to the full index.
 */
export const featuredPractices = practicePages.filter((p) => p.featured);

/** Resolves a `related` entry to a card. */
export function resolveRelated(entry: string): { label: string; href: string; blurb: string } | null {
  const page = getPracticePage(entry);
  if (!page) return null;
  return { label: page.navLabel, href: practiceHref(page.slug), blurb: page.cardBlurb };
}
