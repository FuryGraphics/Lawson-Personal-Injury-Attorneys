import type { PracticePage } from './types';

/**
 * Part 6 — claims that are not ordinary negligence actions.
 *
 * Each of these carries deadlines and procedures that differ from the standard
 * two-year tort rule, so all four are flagged `nonTort` and the page template
 * suppresses the generic DeadlineNotice in favour of the rule stated in each
 * page's own Georgia section.
 */

export const medicalMalpractice: PracticePage = {
  slug: 'medical-malpractice',
  navLabel: 'Medical Malpractice',
  group: 'Professional & Product Claims',
  nonTort: true,
  h1: 'Atlanta Medical Malpractice Lawyer',
  targetKeyword: 'Medical Malpractice Lawyer Atlanta GA',
  metaTitle: 'Medical Malpractice Lawyer Atlanta GA',
  metaDescription:
    'Harmed by medical negligence in Georgia? Malpractice claims need an expert affidavit and face a 5-year repose. Free review — call (404) 394-9410 today.',
  label: 'Case type',
  deck: 'A bad outcome is not malpractice. The question is whether the care fell below what a competent provider would have done.',
  cardBlurb:
    'Claims against providers whose care fell below the standard — with Georgia’s affidavit and repose rules.',
  intro: [
    'Medical malpractice is the most procedurally demanding claim in this practice, and the one where the gap between a bad outcome and a viable case is widest. Medicine involves risk, and a poor result — even a devastating one — is not by itself evidence that anyone was negligent. The legal question is narrower: did the provider’s care fall below the standard a reasonably competent provider in that specialty would have met, and did that failure cause the harm?',
    'Answering it requires another physician. Georgia does not permit a malpractice case to be filed on suspicion. The complaint must be accompanied by an affidavit from a qualified expert identifying at least one specific negligent act or omission, which means a doctor in the relevant specialty has to review the records and put their name to the opinion before the case exists. That review takes time and costs money, and it happens before any recovery is possible.',
    'Georgia also imposes a statute of repose that can extinguish a claim before anyone knows it exists. Because of that, and because the affidavit requirement takes months to satisfy, the practical deadline in a malpractice case is far earlier than most people assume. Lawson Personal Injury Attorneys will tell you candidly and early whether a case is viable — many are not, and finding that out quickly is more useful than a long maybe.',
  ],
  handles: [
    { title: 'Surgical errors', body: 'Wrong-site surgery, retained instruments, and injuries to structures outside the operative field.' },
    { title: 'Misdiagnosis and delayed diagnosis', body: 'Cancer, stroke, heart attack, and infection missed where the presentation called for further workup.' },
    { title: 'Birth injuries', body: 'Harm to mother or infant from mismanaged labor, delayed cesarean, or failure to monitor fetal distress.' },
    { title: 'Medication and pharmacy errors', body: 'Wrong drug, wrong dose, and missed interactions, reaching prescribers, pharmacies, and facilities.' },
    { title: 'Anesthesia complications', body: 'Dosing errors, airway management failures, and inadequate monitoring during procedures.' },
    { title: 'Emergency room negligence', body: 'Failure to work up presenting symptoms, premature discharge, and triage failures.' },
    { title: 'Nursing home and facility neglect', body: 'Pressure injuries, falls, dehydration, and medication errors in long-term care.' },
    { title: 'Hospital-acquired infections', body: 'Where infection control practices fell below accepted standards.' },
  ],
  georgiaNote: {
    heading: 'The affidavit, the repose, and why timing is unforgiving',
    body: [
      'Georgia requires an expert affidavit with the complaint (O.C.G.A. § 9-11-9.1). A qualified expert — generally practicing in the same specialty — must review the records and identify at least one negligent act or omission. Filing without it subjects the case to dismissal. Obtaining it means getting complete records and paying for a genuine expert review, which routinely takes several months.',
      'The limitation period is generally two years from the date of the injury or death, not from the date of discovery (O.C.G.A. § 9-3-71). Layered on top is a five-year statute of repose that runs from the date of the negligent act and can bar a claim absolutely, even one nobody could reasonably have discovered in time. A separate one-year rule applies to foreign objects left in the body. Minors have modified rules, but they are narrower than in ordinary injury cases.',
      'Georgia also caps nothing on economic damages — an earlier cap on non-economic damages was struck down by the Georgia Supreme Court in 2010 — but emergency room care carries a heightened standard: claims arising from emergency medical care must be proven by clear and convincing evidence of gross negligence (O.C.G.A. § 51-1-29.5), which is a substantially harder standard than ordinary negligence.',
    ],
  },
  process: [
    { title: 'Free case review', body: 'What happened, what you were told, and what the timeline was. We will say early if we do not think there is a case.' },
    { title: 'Records and expert review', body: 'Complete records obtained and reviewed by a qualified specialist — the step that determines whether a case exists.' },
    { title: 'The affidavit', body: 'If the expert supports it, the affidavit required by O.C.G.A. § 9-11-9.1 is prepared and filed with the complaint.' },
    { title: 'Litigation', body: 'Malpractice cases are defended hard and settle later than most. The case is built for trial from the outset.' },
  ],
  faqs: [
    { q: 'I had a bad outcome. Is that malpractice?', a: 'Not necessarily, and this is the most important thing to understand early. Medicine carries inherent risk, and serious complications occur without anyone being negligent. The question is whether the care fell below what a reasonably competent provider in that specialty would have done — which requires another physician to review the records and say so.' },
    { q: 'Why does this cost so much to investigate?', a: 'Because Georgia requires an expert affidavit before a case can be filed. That means obtaining complete medical records and paying a qualified specialist to review them, often several thousand dollars, before anyone knows whether a claim exists. Firms absorb that cost, which is why they are selective about which cases they take.' },
    { q: 'How long do I have?', a: 'Generally two years from the date of injury or death — and importantly, that usually runs from the injury rather than from when you discovered it. A five-year statute of repose runs from the negligent act and can bar a claim outright. Because expert review takes months, waiting until year two is often waiting too long.' },
    { q: 'What is the statute of repose?', a: 'An absolute outer limit. Where a statute of limitations can sometimes be paused, Georgia\'s five-year repose in medical malpractice generally cannot. It runs from the date of the negligent act, which means a claim can expire before the harm becomes apparent. It is harsh, and it is the reason these cases should not sit.' },
    { q: 'Is an emergency room case different?', a: 'Considerably harder. Georgia requires claims arising from emergency medical care to be proven by clear and convincing evidence of gross negligence — a much higher bar than ordinary negligence. That standard was enacted to protect emergency providers making rapid decisions with incomplete information, and it makes many ER claims non-viable.' },
    { q: 'Can I sue for a nursing home injury?', a: 'Yes, and those claims are often more approachable than hospital cases. Depending on the facts, a nursing home claim may proceed as ordinary negligence rather than professional malpractice — which can mean no expert affidavit is required. Whether it is one or the other depends on whether the failure involved medical judgment or basic custodial care.' },
  ],
  related: ['catastrophic-injuries', 'wrongful-death', 'brain-injury'],
};

export const productLiability: PracticePage = {
  slug: 'product-liability',
  navLabel: 'Product Liability',
  group: 'Professional & Product Claims',
  h1: 'Atlanta Product Liability Lawyer',
  targetKeyword: 'Product Liability Lawyer Atlanta GA',
  metaTitle: 'Product Liability Lawyer Atlanta GA',
  metaDescription:
    'Injured by a defective product in Georgia? Manufacturers face strict liability for design and manufacturing defects. Free review — (404) 394-9410 today.',
  label: 'Case type',
  deck: 'Against a manufacturer, Georgia does not require proof of carelessness — only that the product was defective when it was sold.',
  cardBlurb:
    'Strict liability claims against manufacturers of defective and unreasonably dangerous products.',
  intro: [
    'Product liability is one of the few areas where Georgia does not require proof that anyone was careless. Under the state’s strict liability statute, a manufacturer is liable if the product it sold was not merchantable and reasonably suited for its intended use, and that defect caused injury. Whether the manufacturer exercised reasonable care is beside the point — the focus is the product, not the conduct.',
    'Defects come in three forms. A manufacturing defect means this particular unit came out wrong. A design defect means every unit is dangerous because of how it was designed — the harder and more valuable claim, since it implicates an entire product line. A failure to warn means the product was dangerous in a way an ordinary user would not anticipate and the warnings did not say so.',
    'These are expensive cases to build. They require engineering experts, testing, and often the preservation of the product itself in its post-incident condition — which is why the single most important thing after a product injury is to keep the item and not let anyone take it away. Lawson Personal Injury Attorneys handles product claims arising from vehicles and components, machinery, consumer goods, and medical devices.',
  ],
  handles: [
    { title: 'Defective vehicle components', body: 'Airbags, seat belts, tires, brakes, and roof structures that fail in foreseeable crashes.' },
    { title: 'Industrial machinery', body: 'Unguarded machines and missing safety interlocks that injure workers — often alongside a comp claim.' },
    { title: 'Consumer product failures', body: 'Appliances, tools, furniture, and household goods that fail dangerously in ordinary use.' },
    { title: 'Defective medical devices', body: 'Implants, surgical hardware, and equipment that failed or was inadequately tested.' },
    { title: 'Pharmaceutical injuries', body: 'Harm from drugs with inadequate warnings or undisclosed risks.' },
    { title: 'Children’s products and toys', body: 'Choking hazards, lead content, and failures of car seats and cribs.' },
    { title: 'Fires and battery failures', body: 'Lithium-ion and electrical failures causing burns and property loss.' },
    { title: 'Recreational and sporting equipment', body: 'Helmets, harnesses, and protective gear that failed to protect as designed.' },
  ],
  georgiaNote: {
    heading: 'Strict liability, and the ten-year repose',
    body: [
      'Georgia’s product liability statute (O.C.G.A. § 51-1-11) imposes strict liability on manufacturers: if a product sold as new was not merchantable and reasonably suited for its intended use when it left the manufacturer, and that condition caused injury, liability follows without proof of negligence. That is a meaningful advantage over an ordinary negligence claim.',
      'The statute also draws an important line. Strict liability applies to manufacturers, not to retailers and distributors who merely sold the product — those parties can generally only be reached through ordinary negligence or breach of warranty theories. Identifying the actual manufacturer, which for components and imported goods can take work, is therefore central.',
      'Two time limits apply. The ordinary two-year personal injury deadline governs, and a ten-year statute of repose runs from the date the product was first sold for use or consumption — barring most claims on older products regardless of when the injury occurred. The repose does not apply to failure-to-warn claims arising after sale, or where the conduct manifested willful or reckless disregard for life. Preserve the product itself: without it, proving a defect becomes very difficult.',
    ],
  },
  process: [
    { title: 'Preserve the product', body: 'Before anything else. Do not return it, discard it, or let an insurer or employer take it — the item is the evidence.' },
    { title: 'Identify the chain', body: 'Manufacturer, component makers, distributors, and retailers, plus any recall or complaint history for the product.' },
    { title: 'Engineering analysis', body: 'Expert examination and testing to establish the defect and whether a safer alternative design existed.' },
    { title: 'Claim or suit', body: 'Manufacturers defend product cases seriously; the file is built for litigation from the beginning.' },
  ],
  faqs: [
    { q: 'Do I have to prove the manufacturer was careless?', a: 'No, and that is what makes these claims distinctive. Georgia applies strict liability to manufacturers: if the product was defective and unreasonably dangerous when it left them and that caused your injury, liability follows. You do not have to prove how the defect happened or that anyone was negligent.' },
    { q: 'What should I do with the product?', a: 'Keep it, exactly as it is. Do not return it to the retailer, send it to the manufacturer for inspection, throw it away, or allow an insurer or employer to take it. The product itself is usually the single most important piece of evidence, and proving a defect without it is dramatically harder.' },
    { q: 'The product was recalled. Does that prove my case?', a: 'It helps considerably but does not decide it. A recall is strong evidence that a defect existed, and it establishes the manufacturer knew. You still have to show the defect caused your specific injury. Conversely, the absence of a recall does not mean a product was not defective.' },
    { q: 'Can I sue the store that sold it?', a: 'Sometimes, but on different terms. Georgia\'s strict liability statute applies to manufacturers, not to sellers who merely passed the product along. Retailers and distributors can generally only be reached through negligence or breach of warranty theories — which is why identifying the actual manufacturer matters so much.' },
    { q: 'The product is old. Is it too late?', a: 'Possibly. Georgia has a ten-year statute of repose running from the first sale of the product for use, which bars most claims on older items regardless of when the injury happened. There are exceptions — failure to warn about a danger discovered after sale, and conduct showing willful or reckless disregard for life — but they are narrow.' },
    { q: 'I was hurt by a machine at work. Is that a product case?', a: 'It may be both. Workers\' compensation covers the employment side and bars a claim against your employer, but nothing bars a product liability claim against the machine\'s manufacturer. Unguarded machinery and missing safety interlocks are among the most common third-party claims in workplace injury cases.' },
  ],
  related: ['workplace-accidents', 'construction-accidents', 'catastrophic-injuries'],
};

export const workersCompensation: PracticePage = {
  slug: 'workers-compensation',
  navLabel: "Workers' Compensation",
  group: 'Work Injuries',
  nonTort: true,
  h1: "Atlanta Workers' Compensation Lawyer",
  targetKeyword: 'Workers Compensation Lawyer Atlanta GA',
  metaTitle: "Workers' Compensation Lawyer Atlanta GA",
  metaDescription:
    'Hurt on the job in Georgia? Report within 30 days and file within one year. We handle denials and disputed benefits. Free review — (404) 394-9410 today.',
  label: 'Case type',
  deck: 'Report it within 30 days. That single requirement ends more valid Georgia claims than any argument about the injury itself.',
  cardBlurb:
    'Georgia workers’ compensation claims, denials, and disputed benefits before the State Board.',
  intro: [
    'Workers’ compensation is not a personal injury lawsuit and does not work like one. It is an administrative system before the State Board of Workers’ Compensation, and the trade-off at its center is fixed: you do not have to prove your employer did anything wrong, and in exchange you cannot sue them and cannot recover for pain and suffering. Benefits are medical treatment plus income benefits at roughly two-thirds of your average weekly wage, subject to a statutory cap.',
    'That is a genuinely useful system when it works. The problems are procedural, and they are where claims are lost. Notice must reach the employer within 30 days. The claim must be filed with the State Board within one year. Treatment generally has to come from a physician on the employer’s posted panel, and treating outside it can mean the bills are not covered. Insurers deny claims over late notice, over whether an injury arose out of employment, and over whether ongoing treatment is still necessary.',
    'The other half of the analysis is the one most workers never hear: whether a third-party claim exists alongside the comp claim. Comp bars suits against your employer — not against anyone else. Lawson Personal Injury Attorneys looks at both, because for a serious injury the third-party claim is usually where the meaningful compensation is.',
  ],
  handles: [
    { title: 'Denied claims', body: 'Denials over notice, causation, or whether the injury arose out of and in the course of employment.' },
    { title: 'Terminated or reduced benefits', body: 'Where an insurer has cut off income benefits or refused to authorize further treatment.' },
    { title: 'Disputed medical treatment', body: 'Authorized physician disputes, denied referrals, and refused surgery authorizations.' },
    { title: 'Permanent partial disability ratings', body: 'Disputes over the impairment rating that determines a substantial part of the benefit.' },
    { title: 'Repetitive stress and occupational disease', body: 'Cumulative injuries and workplace illness, which are compensable but routinely contested.' },
    { title: 'Return-to-work and light duty disputes', body: 'Where an offered position does not actually fit the restrictions a physician imposed.' },
    { title: 'Settlement evaluation', body: 'Assessing whether a proposed lump-sum settlement reflects future treatment and lost earning capacity.' },
    { title: 'Third-party claims alongside comp', body: 'Identifying negligence claims against anyone other than your employer, which comp does not bar.' },
  ],
  georgiaNote: {
    heading: 'The deadlines and the panel — where Georgia claims are actually lost',
    body: [
      'Two deadlines govern. Notice of the injury must be given to the employer as soon as possible and no later than 30 days after the accident (O.C.G.A. § 34-9-80). The claim must then be filed with the State Board of Workers’ Compensation within one year of the injury (O.C.G.A. § 34-9-82). The 30-day notice is the one most commonly missed, frequently by workers who assumed telling a supervisor verbally was enough or who hoped an injury would resolve on its own.',
      'Georgia employers must post a panel of physicians, and an injured worker generally must treat with a doctor from that panel for the care to be covered. There is a real exception worth knowing: where the panel is not properly posted, not explained, or otherwise invalid, the worker may be entitled to choose their own physician — and improperly maintained panels are common.',
      'Benefits are capped. Income benefits run at two-thirds of the average weekly wage up to a statutory maximum, and there is no recovery for pain and suffering at all. For a worker with a permanent injury that ceiling is the whole problem, and it is the reason a third-party negligence claim — against a manufacturer, a contractor, a property owner, or a driver — matters so much when one exists.',
    ],
  },
  process: [
    { title: 'Free case review', body: 'What happened, when you reported it, who you have treated with, and where the claim stands now.' },
    { title: 'Protecting the claim', body: 'Notice, filing with the State Board, and getting the authorized-physician question right before it costs you coverage.' },
    { title: 'Disputes and hearings', body: 'Challenging denials, terminated benefits, refused treatment, and disputed impairment ratings before the Board.' },
    { title: 'The third-party question', body: 'Identifying any non-employer whose negligence contributed, since comp does not bar that claim.' },
  ],
  faqs: [
    { q: 'How long do I have to report a work injury in Georgia?', a: 'You must notify your employer as soon as possible and no later than 30 days after the accident, then file with the State Board of Workers\' Compensation within one year. The 30-day notice is short, strictly applied, and the single most common reason valid Georgia claims fail. Report in writing if you can.' },
    { q: 'Can I choose my own doctor?', a: 'Usually not initially. Georgia employers must post a panel of physicians and you generally must treat with one of them. But the exception matters: if the panel was not properly posted, not explained to employees, or is otherwise invalid, you may be entitled to select your own physician. Improperly maintained panels are common enough to be worth checking.' },
    { q: 'My claim was denied. Is it over?', a: 'No. Denials are routine and frequently rest on disputed facts — whether notice was timely, whether the injury arose from work, whether treatment is still necessary. Denials can be challenged through the State Board, and many are resolved once the medical documentation and notice timeline are properly assembled.' },
    { q: 'Can I get money for pain and suffering?', a: 'Not through workers\' compensation. The system pays authorized medical treatment and income benefits at roughly two-thirds of your average weekly wage up to a cap, and nothing for pain and suffering. That is the trade-off for not having to prove fault. It is also why a third-party claim, where one exists, matters so much.' },
    { q: 'Can I sue my employer instead?', a: 'Generally no — workers\' compensation is an exclusive remedy against your employer. But it does not bar claims against anyone else: a manufacturer whose machine was defective, another contractor on the site, a property owner, or a driver who hit you while you were working. That is a separate claim with full damages.' },
    { q: 'Should I accept the settlement they offered?', a: 'Have it reviewed first. A workers\' compensation settlement typically closes out future medical treatment as well as income benefits, so accepting one means absorbing the cost of care you have not had yet. Whether the number is reasonable depends on your impairment rating, your restrictions, and what treatment is still likely.' },
  ],
  related: ['workplace-accidents', 'construction-accidents', 'product-liability'],
};

export const badFaithInsurance: PracticePage = {
  slug: 'bad-faith-insurance',
  navLabel: 'Bad Faith Insurance',
  group: 'Professional & Product Claims',
  nonTort: true,
  h1: 'Atlanta Bad Faith Insurance Lawyer',
  targetKeyword: 'Bad Faith Insurance Lawyer Atlanta GA',
  metaTitle: 'Bad Faith Insurance Lawyer Atlanta GA',
  metaDescription:
    'Insurer refusing to pay a valid Georgia claim? A 60-day written demand can expose them to penalties and fees. Free review — call (404) 394-9410 today.',
  label: 'Case type',
  deck: 'Georgia gives you a specific tool against an insurer that refuses to pay: a written demand, and sixty days.',
  cardBlurb:
    'Claims against insurers that refuse to pay, delay without cause, or fail to settle within limits.',
  intro: [
    'An insurance policy is a contract, and a refusal to pay a covered claim is a breach of it. Georgia goes further than ordinary contract law in one specific circumstance: where an insurer refuses to pay in bad faith, the policyholder can recover not only the claim itself but a statutory penalty and attorney fees on top of it.',
    'Getting there requires following the statute precisely. Georgia’s first-party bad faith provision requires a written demand for payment, after which the insurer has 60 days to pay. If it refuses and the refusal was in bad faith — meaning without reasonable or probable cause — the insured may recover a penalty of up to 50 percent of the loss or $5,000, whichever is greater, plus reasonable attorney fees. That 60-day demand is a precondition, not a formality: skip it and the penalty is unavailable no matter how badly the insurer behaved.',
    'A separate and often larger problem arises in third-party cases, where an insurer refuses a reasonable settlement offer within policy limits and exposes its own insured to a judgment above them. Lawson Personal Injury Attorneys handles both — the first-party fight with your own insurer, and failure-to-settle claims against a carrier that gambled with someone else’s money.',
  ],
  handles: [
    { title: 'Denied first-party claims', body: 'Auto, homeowner, and property claims refused without reasonable or probable cause.' },
    { title: 'Uninsured motorist bad faith', body: 'Your own insurer refusing to pay UM benefits you paid premiums for.' },
    { title: 'Unreasonable delay', body: 'Claims left unresolved through repeated requests for material the insurer already holds.' },
    { title: 'Failure to settle within limits', body: 'A carrier refusing a reasonable within-limits offer and exposing its insured to an excess judgment.' },
    { title: 'Lowball valuations', body: 'Offers unsupported by the policy language or by the actual documented loss.' },
    { title: 'Inadequate investigation', body: 'Denials issued without meaningful review of the evidence available to the insurer.' },
    { title: 'Misrepresenting policy terms', body: 'Insurers relying on exclusions that do not apply or coverage limits that are not what the policy says.' },
    { title: 'Property and storm claim denials', body: 'Wind, hail, water, and fire losses denied or grossly undervalued.' },
  ],
  georgiaNote: {
    heading: 'The 60-day demand, and what bad faith actually requires',
    body: [
      'Georgia’s bad faith statute (O.C.G.A. § 33-4-6) applies to first-party claims — your claim against your own insurer. The procedure is specific: a written demand for payment must be made, and the insurer then has 60 days to pay. Only after that period runs without payment can the bad faith penalty be sought. Filing suit without having made the demand forfeits the penalty even in an otherwise strong case.',
      'The standard is meaningful. Bad faith means refusal without reasonable or probable cause. An insurer that denies a claim based on a genuine coverage dispute or a real factual question is not acting in bad faith even if it turns out to be wrong. What the statute reaches is the refusal with no reasonable basis at all — the denial that ignores the evidence, invents an exclusion, or simply stalls.',
      'Third-party failure-to-settle is a different animal and is governed by case law rather than § 33-4-6. Where a carrier refuses a reasonable offer within policy limits and its insured is then hit with an excess judgment, the insurer can be liable for the whole judgment, not just the policy limit. Those claims typically belong to the insured, though they are frequently assigned to the injured party as part of a resolution.',
    ],
  },
  process: [
    { title: 'Policy and claim review', body: 'Reading the actual policy language against the denial letter — insurers regularly cite provisions that do not say what they claim.' },
    { title: 'Documenting the record', body: 'Assembling the claim file, correspondence, and evidence establishing the insurer had no reasonable basis.' },
    { title: 'The statutory demand', body: 'A written demand under O.C.G.A. § 33-4-6, starting the 60-day clock that makes the penalty available.' },
    { title: 'Suit', body: 'If the 60 days pass without payment, suit for the loss plus the statutory penalty and attorney fees.' },
  ],
  faqs: [
    { q: 'What actually counts as bad faith in Georgia?', a: 'A refusal to pay a covered claim without reasonable or probable cause. That is a real standard, not a general complaint about an insurer being difficult. A carrier that denies based on a genuine coverage dispute or a legitimate factual question is not in bad faith even if it is ultimately wrong. The statute reaches denials with no reasonable basis at all.' },
    { q: 'What can I recover?', a: 'The claim itself, plus — if bad faith is established — a statutory penalty of up to 50 percent of the loss or $5,000, whichever is greater, plus reasonable attorney fees. That fee-shifting provision is what makes these claims viable, since the underlying loss is often too small to justify litigation on its own.' },
    { q: 'What is the 60-day demand?', a: 'A precondition to the penalty. Georgia requires a written demand for payment, after which the insurer has 60 days to pay before a bad faith penalty can be sought. It is not optional — filing suit without having made a proper demand forfeits the penalty regardless of how the insurer behaved.' },
    { q: 'My own insurer is denying my UM claim. Is that bad faith?', a: 'It can be. Uninsured motorist claims are first-party claims against your own carrier, and once you are making a claim against them the relationship is genuinely adversarial. If they are refusing to pay UM benefits without a reasonable basis, the bad faith statute applies the same way it does to any other first-party claim.' },
    { q: 'The insurer refused a settlement and now my insured faces a huge judgment.', a: 'That is a failure-to-settle claim, which is different from statutory bad faith. Where a carrier unreasonably refuses a reasonable within-limits offer and its insured is hit with an excess judgment, the insurer can be liable for the entire judgment rather than just the policy limit. These claims belong to the insured and are often assigned as part of a resolution.' },
    { q: 'How long do I have?', a: 'A breach of contract claim on a written insurance policy generally follows Georgia\'s six-year limitation, but many policies contain their own shorter suit-limitation provisions — sometimes as short as one or two years — and those are frequently enforced. The policy language controls, so it needs to be read early rather than assumed.' },
  ],
  related: ['car-accidents', 'premises-liability', 'workers-compensation'],
};
