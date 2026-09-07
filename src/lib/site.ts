/**
 * Single source of truth for firm facts. Every NAP rendering on the site reads
 * from here so the name/address/phone stay byte-identical across the footer,
 * the location pages, and the LocalBusiness schema — inconsistent NAP is the
 * most common local-SEO own goal.
 *
 * TODO(client) items below are the fields the intake form left blank or that
 * arrived as Google Drive links. They must be confirmed before launch.
 */
export const site = {
  name: 'Lawson Personal Injury Attorneys',
  legalName: 'Lawson Personal Injury Attorneys',
  attorney: 'Yari D. Lawson',
  attorneyShort: 'Yari Lawson',
  url: 'https://www.lawsonfirm.com',

  phone: '(404) 394-9410',
  phoneHref: 'tel:+14043949410',
  email: 'yari@lawsonfirm.com',
  emailHref: 'mailto:yari@lawsonfirm.com',

  address: {
    street: '320 S Perry St',
    city: 'Lawrenceville',
    state: 'GA',
    zip: '30046',
    county: 'Gwinnett County',
  },
  addressLine: '320 S Perry St, Lawrenceville, GA 30046',
  // Approximate — downtown Lawrenceville, S Perry St at the courthouse square.
  // TODO(client): verify against the Google Business Profile pin before launch.
  geo: { lat: 33.9526, lng: -83.9977 },

  hours: 'Monday–Friday, 9:00 a.m. – 5:00 p.m. Calls returned after hours and on weekends.',
  hoursShort: 'Mon–Fri 9–5 · Calls returned after hours',
  hoursSpec: { opens: '09:00', closes: '17:00' },

  /**
   * The brief keeps Atlanta as the site-wide SEO target (larger metro, far more
   * search volume) while the physical office — and therefore every NAP block and
   * map pin on the site — stays Lawrenceville.
   * TODO(client): confirm with Yari that Atlanta is the intended primary market
   * rather than Lawrenceville.
   */
  primaryCity: 'Atlanta',
  primaryState: 'GA',

  /**
   * From the client's intake form. `authuser=0` has been stripped — it pins the
   * link to whichever Google account was signed in when it was copied and can
   * send a visitor to the wrong account's view.
   *
   * TODO(client): the Google Business Profile this points at is named "Lawson
   * Car Accident and Personal Injury Attorneys", which does NOT match the
   * business name used across this site. Google treats a mismatched name as a
   * signal about a different business, so one of the two should change. Confirm
   * with Yari which is the canonical name, then make the site, the GBP, and
   * every citation agree.
   *
   * TODO(client): ask Yari for the short review link from the GBP dashboard
   * (the https://g.page/r/... form). It is far more durable than this one — the
   * `stick` and `mat` parameters below are session artifacts and can rot.
   */
  googleReviewUrl:
    'https://www.google.com/search?q=Lawson+Car+Accident+and+Personal+Injury+Attorneys&stick=H4sIAAAAAAAA_-NgU1I1qLCwSDM1sDQ3NzUyTk1KTTG2MqgwTTY0NbMwT00zMkqyMLE0WsRq6JNYXpyfp-CcWKTgmJycmZKaV6KQmJeiEJBaBBRPzFHwzMsqLapUcCwpyS_KS60sBgCZdBBEXQAAAA&hl=en&mat=CbBmxLoNNolcElcBa0lj_5aHiD-Ph_y-Cj3hkOh2BMXfEsLnbV0tmI7EVGlDVUdWhVmgVtuQHsDcmHD4Cp4HuDVn2TH0AA7N4LeUzcaaypKS_ty8PeqZ17Usm2wDlj24_cI',
  googleWriteReviewUrl:
    'https://www.google.com/search?q=Lawson+Car+Accident+and+Personal+Injury+Attorneys&stick=H4sIAAAAAAAA_-NgU1I1qLCwSDM1sDQ3NzUyTk1KTTG2MqgwTTY0NbMwT00zMkqyMLE0WsRq6JNYXpyfp-CcWKTgmJycmZKaV6KQmJeiEJBaBBRPzFHwzMsqLapUcCwpyS_KS60sBgCZdBBEXQAAAA&hl=en&mat=CbBmxLoNNolcElcBa0lj_5aHiD-Ph_y-Cj3hkOh2BMXfEsLnbV0tmI7EVGlDVUdWhVmgVtuQHsDcmHD4Cp4HuDVn2TH0AA7N4LeUzcaaypKS_ty8PeqZ17Usm2wDlj24_cI',

  mapEmbedSrc:
    'https://www.google.com/maps?q=320+S+Perry+St+Lawrenceville+GA+30046&output=embed',
  mapDirectionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=320+S+Perry+St+Lawrenceville+GA+30046',

  // TODO(client): replace with the firm's real GA4 measurement ID before launch.
  ga4Id: 'G-XXXXXXXXXX',

  social: {
    // TODO(client): add real profile URLs, or delete the keys to drop the links
    // and the schema sameAs entries.
    facebook: '',
    linkedin: '',
    instagram: '',
  },
};

/** Social links that actually have a URL — used by the footer and schema sameAs. */
export const socialLinks = Object.entries(site.social)
  .filter(([, url]) => url)
  .map(([key, url]) => ({
    label: key.charAt(0).toUpperCase() + key.slice(1),
    href: url,
  }));

/* ---- Standing legal notices ------------------------------------------- */

export const RESULTS_DISCLAIMER =
  'Prior results do not guarantee a similar outcome. Every case is different and must be evaluated on its own facts.';

export const NO_RELATIONSHIP_NOTICE =
  'The information on this website is provided for general informational purposes only and is not legal advice. Viewing this site, contacting the firm through it, or submitting information through a form on it does not create an attorney-client relationship. Please do not send confidential information until an attorney-client relationship has been established in writing.';

export const CONTINGENCY_NOTICE =
  'No attorney fee is charged unless a recovery is obtained. Case expenses and costs may still apply and are explained in the written fee agreement before any representation begins.';

/* ---- Service area ------------------------------------------------------ */

export type NavItem = { label: string; href: string };

/**
 * Cities and counties from the intake form. Three of them have full location
 * pages; the rest appear as chip lists on those pages and in the footer. The
 * `href` points to the nearest location page so no chip is a dead end.
 */
export const serviceAreas: { name: string; type: 'city' | 'county'; href: string }[] = [
  { name: 'Atlanta', type: 'city', href: '/atlanta' },
  { name: 'Lawrenceville', type: 'city', href: '/lawrenceville' },
  { name: 'Decatur', type: 'city', href: '/decatur' },
  { name: 'Stone Mountain', type: 'city', href: '/decatur' },
  { name: 'Gwinnett County', type: 'county', href: '/lawrenceville' },
  { name: 'Fulton County', type: 'county', href: '/atlanta' },
  { name: 'DeKalb County', type: 'county', href: '/decatur' },
  { name: 'Clayton County', type: 'county', href: '/atlanta' },
  { name: 'Henry County', type: 'county', href: '/atlanta' },
  { name: 'Barrow County', type: 'county', href: '/lawrenceville' },
  { name: 'Hall County', type: 'county', href: '/lawrenceville' },
  { name: 'Cobb County', type: 'county', href: '/atlanta' },
];

export const serviceAreaChips: NavItem[] = serviceAreas.map((a) => ({
  label: a.name,
  href: a.href,
}));

/** Plain-text list for schema areaServed and prose. */
export const serviceAreaNames = serviceAreas.map((a) => a.name);

/* ---- Trust bar --------------------------------------------------------- */

/**
 * Deliberately free of numbers. Years in practice, case counts, and recovery
 * totals are all claims the firm has to be able to substantiate under Georgia
 * Rule of Professional Conduct 7.1 — they go in only once the client supplies
 * them. See TRUST_BAR_TODO.
 */
export const trustBar = [
  { stat: 'No fee', label: 'unless we win your case' },
  { stat: 'Free', label: 'confidential case review' },
  { stat: 'Direct', label: 'access to your attorney' },
  { stat: 'Metro-wide', label: 'Atlanta and Gwinnett County' },
];

export const TRUST_BAR_TODO =
  'TODO(client): if Yari wants years-in-practice, case volume, or recovery figures in the trust bar, supply the substantiated numbers and they will replace two of these cells. Every such claim needs the results disclaimer alongside it under Georgia RPC 7.1.';
