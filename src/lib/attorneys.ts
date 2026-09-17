import { site } from './site';

/**
 * The firm's attorneys.
 *
 * Yari's factual credential arrays are still empty on purpose — law school,
 * admission dates and bar memberships are specific claims about a licensed
 * attorney, and inventing them would be false and a Georgia RPC 7.1 problem.
 * Every section renders only when its array has entries, so a profile is
 * complete and honest today and gets richer when the facts arrive.
 *
 * Boris's entries come verbatim from the bio the firm supplied.
 *
 * TODO(client): supply Yari's education, bar admissions, memberships, honors
 * and any case results, and they will render automatically.
 */
export type CredentialItem = { label: string; detail?: string };

export type Attorney = {
  slug: string;
  name: string;
  shortName: string;
  title: string;
  email: string;
  directPhone?: string;
  photo: { src: string; alt: string; position: string };
  /** One-sentence hero deck. */
  deck: string;
  /** Two lines for the roster card. */
  cardBlurb: string;
  bio: string[];
  languages: string[];
  education: CredentialItem[];
  admissions: CredentialItem[];
  memberships: CredentialItem[];
  honors: CredentialItem[];
  results: { amount: string; caseType: string; detail: string }[];
  metaTitle: string;
  metaDescription: string;
};

export const attorneys: Attorney[] = [
  {
    slug: 'yari-lawson',
    name: 'Yari D. Lawson',
    shortName: 'Yari Lawson',
    title: 'Attorney and Founder',
    email: site.email,
    photo: {
      src: '/images/yari-lawson.jpg',
      alt: 'Yari D. Lawson, founding attorney of Lawson Personal Injury Attorneys.',
      position: 'center 18%',
    },
    deck: 'A personal injury practice built so the attorney evaluating your claim is the one you can actually reach about it.',
    cardBlurb:
      'Founder of the firm, built around serious injury and wrongful death cases across metro Atlanta.',
    bio: [
      'Lawson Personal Injury Attorneys exists to do one thing: represent people who have been hurt by someone else’s carelessness. That covers vehicle collisions, unsafe and unsecured property, and injuries at work caused by someone other than an employer — with the firm’s weight behind the catastrophic injury and wrongful death cases where the stakes for a family are highest.',
      'The other decision built into this practice is about access. In a lot of injury firms the person you sign with is not the person who handles your case, and the number you call reaches a case manager whose job is to relay a message to someone else. Clients here work with their attorney. That means a straight answer about where the case stands, what the offer on the table actually reflects, and what the realistic range looks like — including when the answer is not the one anyone wanted.',
      'Injury cases arrive at bad moments. People come in hurt, out of work, holding bills that do not pause for a claim, and being asked to make decisions under pressure from an adjuster with far more practice at this than they have. The job is to take that weight off — to handle the insurer, preserve the evidence before it disappears, document the injury properly, and protect the deadlines — so the client can spend their attention on recovering instead of on a claim file.',
    ],
    languages: [],
    education: [],
    admissions: [],
    memberships: [],
    honors: [],
    results: [],
    metaTitle: 'Yari Lawson — Personal Injury Attorney, Lawrenceville GA',
    metaDescription:
      'Meet Yari D. Lawson, the Atlanta and Lawrenceville personal injury attorney behind Lawson Personal Injury Attorneys. Free review — call (678) 446-3655.',
  },
  {
    slug: 'boris-milter',
    name: 'Boris Y. Milter',
    shortName: 'Boris Milter',
    title: 'Senior Associate Attorney',
    email: 'Boris@LawsonFirm.com',
    directPhone: '678.262.0687',
    photo: {
      src: '/images/boris-milter.jpg',
      alt: 'Boris Y. Milter, Senior Associate Attorney at Lawson Personal Injury Attorneys.',
      position: 'center 15%',
    },
    deck: 'Fifteen years for injured families — including time spent on the other side, defending the insurance companies he now takes on.',
    cardBlurb:
      'Senior Associate Attorney. Former insurance-defense litigator in trucking and commercial transportation.',
    bio: [
      'Boris Y. Milter is the Senior Associate Attorney at Lawson Personal Injury Attorneys and has spent more than 15 years fighting for individuals and families whose lives have been changed by serious injuries and wrongful death. He is passionate about helping injured people level the playing field against insurance companies, large corporations, and other powerful interests, ensuring that his clients have a strong advocate in their corner when they need one most.',
      'Recognized as a Georgia Rising Star by Super Lawyers, Attorney Milter is known for his preparation, determination, and unwavering commitment to achieving results for his clients. Fluent in Russian, he proudly serves a diverse client base and is dedicated to ensuring that every client feels heard, respected, and empowered throughout the legal process.',
      'Throughout his career, Attorney Milter has represented victims of trucking and commercial vehicle collisions, automobile accidents, premises liability incidents, negligent security, nursing home abuse and neglect, workplace injuries, and other catastrophic injury claims. He understands that every case represents more than a legal dispute — it represents a person, a family, and a future that has been disrupted by someone else’s negligence.',
      'What sets Attorney Milter apart is his unique perspective. Earlier in his legal career he represented clients across a range of practice areas, but the most significant experience was his time as a litigation attorney at one of Georgia’s leading insurance-defense firms, where he represented insurance companies and their insureds in trucking and commercial transportation cases. That work gave him firsthand insight into how carriers evaluate claims, defend lawsuits, and attempt to minimize financial exposure. Today he uses that knowledge to anticipate defense strategies, expose weaknesses in their positions, and advocate more effectively for his clients.',
      'Attorney Milter’s approach combines aggressive advocacy with genuine compassion, allowing him to pursue maximum compensation while providing clients with the guidance, communication, and support they deserve throughout the legal process.',
    ],
    languages: ['English', 'Russian'],
    education: [
      {
        label: 'Juris Doctor — Atlanta’s John Marshall Law School',
        detail: 'Ranked 5th in his graduating class. President, Student Bar Association. Executive Legislative Editor, John Marshall Law Journal.',
      },
    ],
    admissions: [{ label: 'State Bar of Georgia' }],
    memberships: [
      { label: 'Chair, AJMLS Alumni Board' },
      {
        label: 'State Bar of Georgia, Young Lawyers Division',
        detail: 'Member-at-Large, Executive Council. Graduate of the Georgia YLD Leadership Academy.',
      },
    ],
    honors: [{ label: 'Georgia Rising Star', detail: 'Super Lawyers' }],
    results: [],
    metaTitle: 'Boris Milter — Personal Injury Attorney, Lawrenceville GA',
    metaDescription:
      'Meet Boris Y. Milter, Senior Associate Attorney at Lawson Personal Injury Attorneys. 15+ years, former insurance defense counsel. Call (678) 446-3655.',
  },
];

export function getAttorney(slug: string) {
  return attorneys.find((a) => a.slug === slug);
}

export const attorneySlugs = attorneys.map((a) => a.slug);

export const attorneyLinks = attorneys.map((a) => ({
  label: a.shortName,
  href: `/attorneys/${a.slug}`,
}));

export function hasCredentials(a: Attorney) {
  return (
    a.education.length > 0 ||
    a.admissions.length > 0 ||
    a.memberships.length > 0 ||
    a.honors.length > 0
  );
}

/** Firm-level, not attorney-level: why these cases get handled the way they do. */
export const firmApproach = [
  {
    title: 'The imbalance is the point',
    body: 'An insurer handles thousands of claims a year with trained adjusters, defense counsel on retainer, and software that prices your injury. You are handling one, for the first time, while hurt. Closing that gap is the entire function of a personal injury lawyer.',
  },
  {
    title: 'Evidence has a shelf life',
    body: 'Surveillance footage is overwritten in weeks. Vehicles get repaired or scrapped. Witnesses move and memories soften. Much of the work that decides a case happens in the first thirty days, long before anyone is thinking about a settlement number.',
  },
  {
    title: 'A settlement is not a favor',
    body: 'An offer reflects what the insurer believes the case is worth to them if they fight it. Building a file that would hold up at trial is what changes that calculation — which is why most cases that settle well were prepared as though they would not.',
  },
  {
    title: 'Clients deserve the real answer',
    body: 'Including when it is unwelcome: that a claim is weaker than they hoped, that the available insurance caps what is possible, or that they do not need a lawyer at all. That candor costs some cases. It is worth more than the fee.',
  },
];
