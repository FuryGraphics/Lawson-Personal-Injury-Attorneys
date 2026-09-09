import type { Faq, Step } from './practice';

/**
 * Content shared across pages rather than owned by one case type: the firm-wide
 * process, the differentiators, and the master FAQ behind /personal-injury/faq.
 */

/** The four-step arc used on the homepage, the hub, and /personal-injury. */
export const firmProcess: Step[] = [
  {
    title: 'Free case review',
    body: 'A real conversation about what happened, what the claim looks like, and whether you need a lawyer. Sometimes the honest answer is that you do not.',
  },
  {
    title: 'Investigate and preserve',
    body: 'Evidence goes first: footage, vehicle data, incident reports, witnesses. We send preservation demands before anything cycles or gets repaired.',
  },
  {
    title: 'Document and demand',
    body: 'Once your treatment stabilizes, we assemble the medical record, the wage loss, and the human cost into a demand against every applicable policy.',
  },
  {
    title: 'Negotiate or try it',
    body: 'Most cases settle. The ones that settle well are the ones the insurer believes will otherwise be filed and tried inside the two-year deadline.',
  },
];

/** Three steps, for the places a shorter version of the arc fits better. */
export const shortProcess: Step[] = [
  {
    title: 'Consult',
    body: 'Free, confidential, no obligation. We tell you what we actually think, including when we think you do not need us.',
  },
  {
    title: 'Investigate',
    body: 'We preserve the evidence, identify every liable party, and find every policy that could pay before it becomes a problem.',
  },
  {
    title: 'Recover',
    body: 'We negotiate hard against the insurer and file suit when the offer does not match the harm. No fee unless we win.',
  },
];

export type Differentiator = { title: string; body: string };

/**
 * Deliberately about how the firm works rather than what it has won. Every
 * comparative or results-based claim has to be substantiable under Georgia RPC
 * 7.1 — those go in once the client supplies the underlying facts.
 */
export const differentiators: Differentiator[] = [
  {
    title: 'You work with your attorney',
    body: 'Not a case manager relaying messages. At a firm this size the person evaluating your claim is the person you call, and you get a straight answer about where it stands.',
  },
  {
    title: 'Personal injury is all we do',
    body: 'Not one department among several. Every case in this office is an injury case, which makes the insurance adjusters, the defense playbooks, and the Georgia courts familiar ground rather than occasional.',
  },
  {
    title: 'Prepared as though it will be tried',
    body: 'Most claims settle, and settlement value tracks how the case would hold up if it did not. Building each file to that standard is what makes the negotiation work.',
  },
  {
    title: 'No fee unless we win',
    body: 'The fee is a percentage of the recovery, in writing before anything begins. If there is no recovery there is no fee — the risk sits with us, not with you.',
  },
];

/**
 * The master FAQ. /personal-injury/faq renders all of it and emits it as
 * FAQPage schema; the homepage teases three. Grouped so fifteen questions read
 * as sections rather than a wall.
 */
export type FaqGroup = { heading: string; faqs: Faq[] };

export const masterFaqGroups: FaqGroup[] = [
  {
    heading: 'Deadlines and getting started',
    faqs: [
      {
        q: 'How long do I have to file a personal injury claim in Georgia?',
        a: 'Two years from the date of injury for most personal injury claims, and two years from the date of death for wrongful death (O.C.G.A. § 9-3-33). Property damage carries four years. If a city, county, or state entity is involved, an ante litem notice comes due much sooner — six months for a municipality, twelve months for a county or the State of Georgia — and missing it ends the claim no matter how strong it is.',
      },
      {
        q: 'What should I do in the first 48 hours after an accident?',
        a: 'Get medical attention even if you think you can wait, because a gap in treatment is the first thing an insurer uses to argue you were not hurt. Make sure a written report exists. Photograph everything — vehicles, the scene, the hazard, your injuries. Get names and numbers for witnesses. Then decline to give a recorded statement to the other side’s insurer until you have talked to a lawyer.',
      },
      {
        q: 'Is it too late if my accident was months ago?',
        a: 'Probably not, if you are inside the two-year window. But evidence degrades on a much faster schedule than the statute does: surveillance footage is routinely overwritten in one to four weeks, vehicles get repaired or scrapped, and witnesses become hard to find. A case brought late is not impossible — it is just built from less.',
      },
      {
        q: 'Do I actually need a lawyer for this?',
        a: 'Not always, and we will say so when we think you do not. A minor property-damage claim with no injury is often better handled yourself. When there is real medical treatment, disputed fault, an uninsured driver, a commercial vehicle, or a permanent injury, the difference in outcome is usually larger than the fee.',
      },
    ],
  },
  {
    heading: 'Fault, insurance, and how Georgia law works',
    faqs: [
      {
        q: 'What if I was partly at fault for the accident?',
        a: 'Georgia uses modified comparative negligence with a 50 percent bar (O.C.G.A. § 51-12-33). If you are partly responsible, your recovery is reduced by your percentage of fault — and if you are found 50 percent or more responsible, you recover nothing. That rule is exactly why insurers work so hard to assign you a share, and why early recorded statements carry real risk.',
      },
      {
        q: 'The insurance adjuster seems helpful. Why would I not just work with them?',
        a: 'Because the adjuster’s job is to close your claim for as little as the file will justify. That is not dishonesty, it is the role. Being pleasant is entirely compatible with recording a statement designed to establish comparative fault, requesting a broad medical authorization to hunt for a pre-existing condition, and offering a quick settlement before anyone knows the extent of the injury.',
      },
      {
        q: 'What if the at-fault driver had no insurance, or not enough?',
        a: 'Georgia requires only $25,000 per person and $50,000 per accident in bodily injury liability coverage, which a serious injury passes easily. Your own uninsured/underinsured motorist coverage is usually the next source, and depending on how the policies are written, more than one may apply. Finding all available coverage is one of the first things a lawyer does.',
      },
      {
        q: 'Should I give a recorded statement?',
        a: 'Not to the other side’s insurer, and not before speaking with a lawyer. You have no obligation to do it. Your own insurer is a different matter — your policy generally requires you to cooperate with them — though it is still worth understanding the questions before you answer them.',
      },
      {
        q: 'Who pays my medical bills while the case is pending?',
        a: 'Typically your health insurance, MedPay coverage if your auto policy includes it, or a provider treating on a lien. The at-fault party’s insurer does not pay bills as they arrive; it pays once, at the end. Health insurers and some providers then assert reimbursement rights against the settlement, and negotiating those down is a large part of what determines what you actually keep.',
      },
    ],
  },
  {
    heading: 'Value, fees, and how long it takes',
    faqs: [
      {
        q: 'How much is my personal injury case worth?',
        a: 'It depends on the severity and permanence of the injury, the total reasonable medical treatment, lost income and lost earning capacity, how clearly fault falls on the other side, and — often decisively — how much insurance exists. Anyone who quotes a figure on the first call is guessing. What can be given early is a realistic range and a clear view of what would move the case within it.',
      },
      {
        q: 'What does it cost to hire a personal injury lawyer?',
        a: 'Nothing up front. Personal injury work is done on a contingency fee: the fee is a percentage of the recovery, and there is no fee if there is no recovery. Case expenses — records, filing fees, experts — are separate and are explained in writing before the representation begins, so nothing at the end is a surprise.',
      },
      {
        q: 'How long will my case take?',
        a: 'The first constraint is medical: a case cannot be valued honestly until your treating providers can say where you are likely to end up, which can take months. After that, a straightforward claim with clear fault may resolve in a few months, while a disputed or catastrophic case that gets filed can run considerably longer. We would rather be candid about that than promise a date we do not control.',
      },
      {
        q: 'Will I have to go to court?',
        a: 'Most likely not — the large majority of injury claims resolve without a trial. But cases settle well precisely when the other side believes they will otherwise be filed and tried, so the file gets built for that possibility from the beginning.',
      },
      {
        q: 'What if the insurance company already made me an offer?',
        a: 'Have it reviewed before you accept. Early offers arrive before the full extent of treatment is known, and once you sign a release the claim is closed — including for care you have not had yet. Reviewing an offer costs nothing and does not obligate you to hire anyone.',
      },
      {
        q: 'Do you handle cases outside Atlanta?',
        a: 'Yes. The office is in Lawrenceville, and the firm serves Gwinnett County along with Fulton, DeKalb, Cobb, Clayton, Henry, Barrow, and Hall counties, and cities across the metro area including Atlanta, Decatur, and Stone Mountain.',
      },
    ],
  },
];

/** Flattened for FAQPage schema and the homepage teaser. */
export const masterFaqs: Faq[] = masterFaqGroups.flatMap((g) => g.faqs);

/** The three questions people most reliably arrive with. */
export const homepageFaqs: Faq[] = [masterFaqs[0], masterFaqs[4], masterFaqs[10]];
