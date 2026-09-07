import { site } from './site';

/**
 * Attorney profile.
 *
 * The narrative below describes how the firm works, which is verifiable from
 * the brief. The factual credential arrays are EMPTY on purpose: law school,
 * admission dates, bar memberships, and case results are specific claims about
 * a real, licensed attorney, and inventing them would be both false and a
 * Georgia RPC 7.1 problem. Each section below renders only when its array has
 * entries, so the page is complete and honest today and gets richer the moment
 * the client fills these in.
 *
 * TODO(client): supply the following from Yari and populate the arrays.
 *   - education:    law school and undergraduate institutions, with years
 *   - admissions:   state bars and federal courts, with admission years
 *   - memberships:  bar associations, trial lawyer organizations, sections
 *   - honors:       any awards or recognitions the firm wants listed
 *   - results:      case results, each with enough detail to substantiate
 *                   (results must be accompanied by RESULTS_DISCLAIMER)
 *   - community:    civic and community involvement worth naming
 */
export type CredentialItem = { label: string; detail?: string };

export const attorneyProfile = {
  name: site.attorney,
  title: 'Attorney and Founder',

  /** Two-line summary used in the hero. Safe, non-factual, verifiable. */
  deck: 'A personal injury practice built so the attorney evaluating your claim is the one you can actually reach about it.',

  bio: [
    'Lawson Personal Injury Attorneys exists to do one thing: represent people who have been hurt by someone else’s carelessness. That covers a lot of ground — vehicle collisions, unsafe property, workplace injury, defective products, medical negligence, and insurers that will not pay — but it is one kind of work, and it is the only kind this office does. That focus is a practical decision rather than a marketing one. Insurance defense strategies repeat, adjusters behave in patterns, and Georgia’s courts have their own rhythms. Seeing the same terrain every day is what lets a small firm meet a large insurer on level ground.',
    'The other decision built into this practice is about access. In a lot of injury firms the person you sign with is not the person who handles your case, and the number you call reaches a case manager whose job is to relay a message to someone else. Clients here work with their attorney. That means a straight answer about where the case stands, what the offer on the table actually reflects, and what the realistic range looks like — including when the answer is not the one anyone wanted.',
    'Injury cases arrive at bad moments. People come in hurt, out of work, holding bills that do not pause for a claim, and being asked to make decisions under pressure from an adjuster with far more practice at this than they have. The job is to take that weight off — to handle the insurer, preserve the evidence before it disappears, document the injury properly, and protect the deadlines — so the client can spend their attention on recovering instead of on a claim file.',
  ],

  /** Why the work matters — the "Why Yari Fights for Injury Victims" section. */
  approach: [
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
  ],

  education: [] as CredentialItem[],
  admissions: [] as CredentialItem[],
  memberships: [] as CredentialItem[],
  honors: [] as CredentialItem[],
  community: [] as CredentialItem[],

  /**
   * Case results. Each entry needs to be substantiable, and the page renders
   * RESULTS_DISCLAIMER alongside any that appear.
   */
  results: [] as { amount: string; caseType: string; detail: string }[],
};

export const hasCredentials =
  attorneyProfile.education.length > 0 ||
  attorneyProfile.admissions.length > 0 ||
  attorneyProfile.memberships.length > 0 ||
  attorneyProfile.honors.length > 0;
