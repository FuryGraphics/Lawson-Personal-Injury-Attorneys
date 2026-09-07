/** The five columns the 24 case types are grouped into, in nav order. */
export type PracticeGroup =
  | 'Motor Vehicle Accidents'
  | 'Premises & Security'
  | 'Serious & Catastrophic Injury'
  | 'Work Injuries'
  | 'Professional & Product Claims';

export const practiceGroupOrder: PracticeGroup[] = [
  'Motor Vehicle Accidents',
  'Premises & Security',
  'Serious & Catastrophic Injury',
  'Work Injuries',
  'Professional & Product Claims',
];

export type Faq = { q: string; a: string };

export type Step = { title: string; body: string };

export type PracticePage = {
  /** URL segment under /personal-injury. */
  slug: string;
  /** Short form for nav, cards, and breadcrumbs. */
  navLabel: string;
  /** Which nav column this belongs in. */
  group: PracticeGroup;
  /**
   * Surfaced on the homepage grid and listed first inside its nav group.
   * Six of the twenty-four — a grid of all 24 on the homepage is unusable.
   */
  featured?: boolean;
  /**
   * True where the claim is NOT a standard negligence action — workers'
   * compensation, medical malpractice, bad faith. These carry different
   * deadlines and procedures, so the pages suppress the generic two-year
   * DeadlineNotice and state their own rule instead.
   */
  nonTort?: boolean;
  /** Page H1. */
  h1: string;
  /** The keyword this page is built to rank for. */
  targetKeyword: string;
  /** <title> — the firm name is appended by the layout template. */
  metaTitle: string;
  /** 150–160 characters, includes the city and a call to action. */
  metaDescription: string;
  /** Eyebrow label above the H1. */
  label: string;
  /** One-sentence hero deck. */
  deck: string;
  /** Two-line summary used on the case-type cards. */
  cardBlurb: string;
  /** Opening section — roughly 200 words, in three paragraphs. */
  intro: string[];
  /** "What we handle" — the case types inside this case type. */
  handles: { title: string; body: string }[];
  /** The section carrying the Georgia-law point specific to this case type. */
  georgiaNote: { heading: string; body: string[] };
  /** Case-specific process timeline. */
  process: Step[];
  /** Six questions. Feeds both the accordion and the FAQPage schema. */
  faqs: Faq[];
  /** Slugs of sibling pages for the related strip. */
  related: string[];
};
