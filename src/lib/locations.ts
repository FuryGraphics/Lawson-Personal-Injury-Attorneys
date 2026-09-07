import { serviceAreas, site } from './site';

/**
 * The three location pages.
 *
 * One office, three pages. Lawrenceville is where the firm actually sits, so it
 * carries the office block and is the strongest local-SEO anchor. Atlanta and
 * Decatur are service-area pages: they get LocalBusiness schema pointing at the
 * same Lawrenceville address and say so in the copy. Implying a second office
 * would be both an SEO problem and a false statement.
 */
export type LocationPage = {
  slug: string;
  city: string;
  county: string;
  isOffice: boolean;
  targetKeyword: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  deck: string;
  intro: string[];
  /** Where a case from this area is actually heard. */
  court: { name: string; address: string; note: string };
  /** Roads and areas where the firm's cases in this market tend to originate. */
  corridors: string[];
  /** Nearby places served from this page, as chips. */
  nearby: string[];
};

export const locationPages: LocationPage[] = [
  {
    slug: 'atlanta',
    city: 'Atlanta',
    county: 'Fulton County',
    isOffice: false,
    targetKeyword: 'Personal Injury Attorney Atlanta GA',
    metaTitle: 'Personal Injury Attorney Atlanta GA',
    metaDescription:
      'Personal injury attorney serving Atlanta, GA. Car, truck, motorcycle and pedestrian accidents, slip and fall, wrongful death. Call (404) 394-9410 today.',
    h1: 'Personal Injury Attorney in Atlanta, GA',
    deck: 'Serving Atlanta and Fulton County from our office in Lawrenceville, thirty miles up I-85.',
    intro: [
      'Atlanta produces a particular kind of injury case. The Downtown Connector merges the two busiest interstates in the Southeast into fourteen lanes of stop-and-go, I-285 carries freight around the city at speeds the design never anticipated, and the surface arterials — Peachtree, Ponce, Memorial, Moreland — put pedestrians and cyclists next to traffic moving far faster than the posted limit. The result is a high volume of collisions and a correspondingly practiced set of insurance defenses.',
      'Lawson Personal Injury Attorneys represents people injured across Atlanta and Fulton County. The firm handles car and truck collisions, motorcycle and pedestrian cases, premises liability claims against businesses and apartment complexes, and wrongful death claims for families. Every case is a personal injury case — there is no other department here.',
      'The office is in Lawrenceville, and Atlanta clients are served from there. In practice that changes very little: the initial consultation happens by phone or video, records and signatures move electronically, and we come to you when meeting in person is easier than the reverse. What it does mean is that the address on every page of this site is the same one, because there is only one office.',
    ],
    court: {
      name: 'Fulton County Justice Center Tower',
      address: '185 Central Avenue SW, Atlanta, GA 30303',
      note: 'Fulton County State Court hears most auto and premises injury cases; Superior Court takes matters without a damages cap and cases involving equitable relief. Which court a case belongs in depends on the amount in controversy and where the defendant resides.',
    },
    corridors: [
      'I-75 / I-85 Downtown Connector',
      'I-285 (the Perimeter)',
      'I-20 through West End and Grant Park',
      'Georgia 400',
      'Peachtree Street and Peachtree Road',
      'Ponce de Leon Avenue',
      'Memorial Drive',
      'Moreland Avenue',
    ],
    nearby: ['Decatur', 'Stone Mountain', 'Fulton County', 'Clayton County', 'Cobb County', 'Henry County'],
  },
  {
    slug: 'lawrenceville',
    city: 'Lawrenceville',
    county: 'Gwinnett County',
    isOffice: true,
    targetKeyword: 'Personal Injury Attorney Lawrenceville GA',
    metaTitle: 'Personal Injury Attorney Lawrenceville GA',
    metaDescription:
      'Personal injury attorney in Lawrenceville, GA, on the courthouse square at 320 S Perry St. Free consultation, no fee unless we win. Call (404) 394-9410 today.',
    h1: 'Personal Injury Attorney in Lawrenceville, GA',
    deck: 'Our office sits on the courthouse square in downtown Lawrenceville, a short walk from where Gwinnett County cases are heard.',
    intro: [
      'Lawrenceville is home. The office is at 320 S Perry Street, on the square in the middle of downtown, a few minutes’ walk from the Gwinnett Justice and Administration Center where this county’s injury cases are filed and tried. Being local is not a marketing line here — it is why a client can drop off records in person and why we know the intersections in the police reports we read.',
      'Gwinnett County has grown faster than its road network. Georgia 316 carries commuter and commercial traffic at interstate speeds through at-grade intersections, Sugarloaf Parkway and Lawrenceville-Suwanee Road move volume the original design never contemplated, and the I-85 corridor through Gwinnett is one of the heaviest freight routes in the state. The collisions that follow are the core of what this firm does.',
      'Lawson Personal Injury Attorneys handles car, truck, motorcycle, and pedestrian collisions, premises liability claims against stores and apartment complexes, and wrongful death cases for Gwinnett County families. The consultation is free, the conversation is confidential, and there is no fee unless we recover for you.',
    ],
    court: {
      name: 'Gwinnett Justice and Administration Center',
      address: '75 Langley Drive, Lawrenceville, GA 30046',
      note: 'Gwinnett County State Court handles the majority of personal injury filings in the county; Superior Court takes cases without a damages cap. The courthouse is roughly half a mile from our office on the square.',
    },
    corridors: [
      'Georgia 316 (University Parkway)',
      'I-85 through Gwinnett',
      'Sugarloaf Parkway',
      'Lawrenceville-Suwanee Road',
      'Highway 20 / Buford Drive',
      'Scenic Highway (SR 124)',
      'Old Norcross Road',
      'Duluth Highway',
    ],
    nearby: ['Duluth', 'Snellville', 'Suwanee', 'Buford', 'Norcross', 'Grayson', 'Dacula', 'Barrow County', 'Hall County'],
  },
  {
    slug: 'decatur',
    city: 'Decatur',
    county: 'DeKalb County',
    isOffice: false,
    targetKeyword: 'Personal Injury Attorney Decatur GA',
    metaTitle: 'Personal Injury Attorney Decatur GA',
    metaDescription:
      'Personal injury attorney serving Decatur and DeKalb County, GA. Accident, premises liability, and wrongful death claims. Free case review — call (404) 394-9410.',
    h1: 'Personal Injury Attorney in Decatur, GA',
    deck: 'Serving Decatur, Stone Mountain, and DeKalb County from our Lawrenceville office.',
    intro: [
      'Decatur is dense, walkable in the center, and surrounded by corridors that are not. That combination produces a distinctive mix of cases: pedestrian and cyclist collisions around the square and the MARTA stations, and higher-speed crashes on Memorial Drive, Scott Boulevard, Lawrenceville Highway, and the stretch of I-285 that runs along the county’s eastern edge.',
      'Lawson Personal Injury Attorneys represents injured people throughout Decatur, Stone Mountain, and DeKalb County — car, truck, motorcycle, and pedestrian collisions, slip and fall and negligent security claims against apartment complexes and businesses, and wrongful death cases. Every one of them is handled by an attorney who does only injury work.',
      'The firm’s office is in Lawrenceville, roughly a half hour up I-85, and DeKalb County clients are served from there. Consultations start by phone or video, paperwork moves electronically, and we travel to meet clients when that is the easier arrangement. There is one office and one address, and it appears identically everywhere on this site.',
    ],
    court: {
      name: 'DeKalb County Courthouse',
      address: '556 North McDonough Street, Decatur, GA 30030',
      note: 'DeKalb County State Court hears most personal injury cases arising in the county, with Superior Court taking matters that exceed its jurisdiction. The courthouse sits on the Decatur square.',
    },
    corridors: [
      'I-285 along the DeKalb line',
      'I-20 through east DeKalb',
      'Memorial Drive',
      'Scott Boulevard / Lawrenceville Highway',
      'Ponce de Leon Avenue',
      'Candler Road',
      'Covington Highway',
      'Church Street',
    ],
    nearby: ['Stone Mountain', 'Avondale Estates', 'Clarkston', 'Tucker', 'Atlanta', 'DeKalb County'],
  },
];

export function getLocationPage(slug: string) {
  return locationPages.find((l) => l.slug === slug);
}

export const locationLinks = locationPages.map((l) => ({
  label: `${l.city}, GA`,
  href: `/${l.slug}`,
}));

/** Chips for a location page: the other two pages plus this page's nearby list. */
export function nearbyChips(current: LocationPage) {
  const others = locationPages
    .filter((l) => l.slug !== current.slug)
    .map((l) => ({ label: l.city, href: `/${l.slug}` }));

  const rest = current.nearby.map((name) => {
    const match = serviceAreas.find((a) => a.name === name);
    return { label: name, href: match ? match.href : `/${current.slug}` };
  });

  // De-duplicate by label, keeping the linked location pages first.
  const seen = new Set<string>();
  return [...others, ...rest].filter((c) => {
    if (seen.has(c.label)) return false;
    seen.add(c.label);
    return true;
  });
}

export const officeLocation = locationPages.find((l) => l.isOffice) ?? locationPages[1];

export const officeNap = {
  name: site.name,
  street: site.address.street,
  cityStateZip: `${site.address.city}, ${site.address.state} ${site.address.zip}`,
  phone: site.phone,
};
