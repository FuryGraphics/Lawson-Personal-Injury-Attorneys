import type { PracticePage } from './types';

/** Part 5 — premises, negligent security, and workplace injury. */

export const premisesLiability: PracticePage = {
  slug: 'premises-liability',
  navLabel: 'Premises Liability',
  group: 'Premises & Security',
  featured: true,
  h1: 'Atlanta Premises Liability Lawyer',
  targetKeyword: 'Premises Liability Lawyer Atlanta GA',
  metaTitle: 'Premises Liability Lawyer Atlanta GA',
  metaDescription:
    'Hurt on unsafe property in Atlanta? Georgia premises claims turn on what the owner knew and ignored. Free review, no fee unless we win — (404) 394-9410.',
  label: 'Case type',
  deck: 'Property owners are not insurers of everyone who walks in. They are responsible for what they knew, or should have known, and left alone.',
  cardBlurb:
    'Claims against owners and occupiers for hazards they knew about and failed to fix or warn about.',
  intro: [
    'Premises liability is the broad category that slip and fall sits inside. It covers any injury caused by a dangerous condition on property someone else owns or controls — a broken stair, an unlit parking deck, a collapsing balcony, an unsecured pool, a hazard left in a walkway. The unifying legal question is not whether you were hurt. It is what the owner knew.',
    'Georgia requires proof of superior knowledge: that the owner or occupier knew about the hazard, or would have known through a reasonable inspection routine, and that you did not and could not reasonably have seen it. That standard is what makes these cases records-driven. Inspection logs, work orders, maintenance schedules, prior incident reports at the same location, tenant complaints, and code inspection history are what establish knowledge — and nearly all of it sits in the defendant’s files on a retention schedule.',
    'Your status on the property matters too, and it can decide the case before the hazard is ever discussed. Georgia owes invitees — customers, tenants, business guests — ordinary care. Licensees, present for their own purposes with permission, are owed only protection from willful or wanton injury. Establishing which you were is part of the work.',
  ],
  handles: [
    { title: 'Apartment complex injuries', body: 'Stairs, balconies, walkways, laundry rooms, and common areas a landlord controls and was on notice about.' },
    { title: 'Retail and grocery store hazards', body: 'Spills, debris, and tracked-in water, where sweep logs and prior incidents establish constructive knowledge.' },
    { title: 'Stairway and handrail failures', body: 'Inconsistent risers, missing rails, and worn nosings that violate the applicable building code.' },
    { title: 'Inadequate lighting', body: 'Parking decks, stairwells, and walkways dark enough that a hazard could not reasonably be seen.' },
    { title: 'Swimming pool and drowning claims', body: 'Unsecured pools, absent barriers, and missing safety equipment at complexes and hotels.' },
    { title: 'Falling objects and structural failures', body: 'Collapsing decks and balconies, falling merchandise, and unsecured fixtures.' },
    { title: 'Construction and renovation hazards', body: 'Open work areas in occupied buildings where the public was not properly excluded.' },
    { title: 'Elevator and escalator injuries', body: 'Maintenance and inspection failures, where the service contractor may share liability.' },
  ],
  georgiaNote: {
    heading: 'Superior knowledge, and the status of the person injured',
    body: [
      'Georgia’s premises statute is short: an owner or occupier who induces others onto the property for a lawful purpose is liable for injuries caused by a failure to exercise ordinary care in keeping the premises safe (O.C.G.A. § 51-3-1). Georgia courts built the working test on top of it — the plaintiff must show the defendant had superior knowledge of the hazard.',
      'That splits into actual knowledge, which is usually proven by a prior complaint or report, and constructive knowledge, which turns on how long the hazard existed and whether a reasonable inspection routine would have found it. Inspection and sweep logs are consequently the most valuable documents in most of these files — and the most likely to be destroyed on schedule if no preservation demand is sent.',
      'The other half is your status. Invitees are owed ordinary care. Licensees are owed only protection against willful or wanton injury (O.C.G.A. § 51-3-2), a far lower duty. Trespassers are owed less still, with narrow exceptions including the attractive nuisance doctrine that can apply where children are drawn onto property by something like an unsecured pool.',
    ],
  },
  process: [
    { title: 'Free case review', body: 'What the hazard was, how long it was there, who controlled the space, and what was reported at the time.' },
    { title: 'Preservation demands', body: 'Immediate written demands for surveillance footage, incident reports, inspection logs, and prior complaints.' },
    { title: 'Proving knowledge', body: 'Assembling the record showing the owner knew or should have known — and meeting the open-and-obvious defense directly.' },
    { title: 'Demand or suit', body: 'Presentation to the property insurer, and filing within two years if the response does not match the harm.' },
  ],
  faqs: [
    { q: 'Is a property owner automatically liable if I am hurt there?', a: 'No. Georgia does not make an owner an insurer of everyone who enters. The claim requires superior knowledge — that they knew or reasonably should have known about the hazard and you did not. An injury alone, without that, is not a viable premises claim.' },
    { q: 'What is the difference between this and a slip and fall case?', a: 'Slip and fall is one kind of premises liability claim. Premises liability also covers structural failures, inadequate lighting, unsecured pools, falling objects, and negligent security. The legal test is the same; the evidence differs by hazard.' },
    { q: 'The hazard was obvious. Does that end my claim?', a: 'It is the most common defense, and it does not automatically end anything. The question is whether your knowledge genuinely equaled the owner\'s, and whether a reasonable person in your position could have avoided it. Distraction created by the property itself — displays, signage, a crowded aisle — is relevant, and Georgia courts have accepted it.' },
    { q: 'Can I sue my landlord for a common area injury?', a: 'Yes, where the injury occurred in an area the landlord controls — stairwells, walkways, parking areas, laundry rooms — and they knew or should have known of the hazard. Written maintenance requests are powerful here because they establish notice with a date attached. Complaints from other tenants matter for the same reason.' },
    { q: 'How fast does the evidence disappear?', a: 'Faster than the legal deadline suggests. Surveillance footage is commonly overwritten within one to four weeks. Hazards get repaired, which is good for everyone but removes the physical evidence. Inspection logs are retained on business schedules that are often measured in months.' },
    { q: 'What if I was partly at fault?', a: 'You can still recover if you are less than 50 percent responsible, with the award reduced by your share (O.C.G.A. § 51-12-33). Being familiar with the property, looking at a phone, or wearing particular footwear are all arguments the defense makes. They rarely end a case alone, but each assigned percentage point has a dollar value.' },
  ],
  related: ['slip-and-fall', 'assault-injuries', 'child-injuries'],
};

export const assaultInjuries: PracticePage = {
  slug: 'assault-injuries',
  navLabel: 'Assault Injuries',
  group: 'Premises & Security',
  h1: 'Atlanta Assault Injury and Negligent Security Lawyer',
  targetKeyword: 'Assault Injury Lawyer Atlanta GA',
  metaTitle: 'Assault Injury & Negligent Security Lawyer Atlanta GA',
  metaDescription:
    'Assaulted on someone else\'s property in Atlanta? A negligent security claim against the owner may exist. Free, confidential review — (404) 394-9410 today.',
  label: 'Case type',
  deck: 'The person who attacked you is rarely the only one responsible — and often not the one with insurance.',
  cardBlurb:
    'Negligent security claims against property owners who knew violence was foreseeable and did nothing.',
  intro: [
    'Being assaulted on someone else’s property raises a question most people never think to ask: was there a reason it happened there? Apartment complexes, parking decks, hotels, bars, and shopping centers that have experienced repeated violent crime often know exactly what is happening on their property — through police calls, incident reports, and tenant complaints — and decline to spend money on lighting, working locks, functioning cameras, or security personnel.',
    'Georgia recognizes a claim against a property owner in that situation. It is called negligent security, and it does not require the owner to have done anything to you directly. It asks whether a violent act was reasonably foreseeable given what the owner knew, and whether they exercised ordinary care to guard against it. If they did not, they can be liable for what happened even though a criminal, not the owner, committed it.',
    'This matters practically, because the person who assaulted you may never be identified, may be incarcerated, and almost certainly has no assets. The property owner has insurance. Lawson Personal Injury Attorneys handles these claims confidentially and at the client’s pace, understanding that a civil case is a decision, not an obligation.',
  ],
  handles: [
    { title: 'Apartment complex assaults', body: 'Broken gates, non-functioning locks, dark walkways, and complexes with documented crime histories.' },
    { title: 'Parking lot and deck attacks', body: 'Inadequate lighting, absent patrols, and non-working cameras in areas known for incidents.' },
    { title: 'Hotel and motel incidents', body: 'Key control failures, unsecured entrances, and properties on notice of prior crime.' },
    { title: 'Bar and nightclub violence', body: 'Inadequate or overly aggressive security, and over-service claims under Georgia’s dram shop statute.' },
    { title: 'Retail and mall assaults', body: 'Incidents in stores and shopping centers with a documented pattern of similar events.' },
    { title: 'Gas station and convenience store robberies', body: 'Locations with repeated armed incidents and no meaningful security response.' },
    { title: 'Assaults by employees', body: 'Claims for negligent hiring, training, retention, or supervision where the employer knew or should have known.' },
    { title: 'Injuries from excessive force by security', body: 'Where the security personnel themselves caused the harm.' },
  ],
  georgiaNote: {
    heading: 'Foreseeability, and the prior-incident record',
    body: [
      'Georgia law requires an owner or occupier to exercise ordinary care to keep the premises safe (O.C.G.A. § 51-3-1), and that duty can extend to protecting invitees from the criminal acts of third parties. The controlling question is foreseeability: whether the owner knew or should have known that a criminal attack was reasonably likely, most commonly established through substantially similar prior incidents on or near the property.',
      'That makes the prior-incident record the center of the case. Police call histories, internal incident reports, tenant and guest complaints, prior civil claims, and crime statistics for the immediate area establish what the owner knew. Owners routinely claim the attack was unforeseeable, and that claim frequently does not survive the call log.',
      'Where foreseeability is established, the next question is what ordinary care required — lighting, functioning locks and gates, working cameras, staffing, and response protocols — and whether the failure caused this attack. Georgia\'s two-year deadline applies (O.C.G.A. § 9-3-33), though a related criminal prosecution can affect timing in some circumstances. A pending criminal case does not require the civil claim to wait.',
    ],
  },
  process: [
    { title: 'A confidential conversation', body: 'Free, private, and at your pace. Nothing is filed and nothing becomes public because you asked a question.' },
    { title: 'Building the crime history', body: 'Police call records, incident reports, and complaints establishing what the property owner knew before it happened.' },
    { title: 'Examining the security itself', body: 'Lighting levels, lock and gate function, camera coverage and whether it was recording, and staffing at the time.' },
    { title: 'Claim against the owner', body: 'A demand to the property\'s insurer, and suit within the deadline if it is not resolved fairly.' },
  ],
  faqs: [
    { q: 'The person who attacked me was never caught. Do I still have a claim?', a: 'Often yes — and this is the central point of negligent security. The claim runs against the property owner for failing to provide reasonable security given a foreseeable risk, not against the attacker. Whether the assailant is identified, charged, or convicted does not determine whether the owner met its own duty.' },
    { q: 'How do you prove the property owner should have known?', a: 'Primarily through the prior-incident record: police call histories for the address, the owner\'s own incident reports, tenant and guest complaints, prior lawsuits, and area crime data. A complex with dozens of police calls for violent crime in two years has a difficult time arguing an assault was unforeseeable.' },
    { q: 'There is a criminal case going on. Should I wait?', a: 'No. The civil claim and the criminal prosecution are separate proceedings with different purposes and different standards of proof, and they can run at the same time. A conviction is not required for a civil claim, and an acquittal does not end one. Waiting mostly costs evidence and can cost the deadline.' },
    { q: 'Will I have to testify publicly?', a: 'Most civil claims resolve without a trial. If a case is filed you would give a deposition, which is not a public proceeding. Courts can also enter protective orders limiting disclosure of sensitive information. These are reasonable concerns and worth discussing before anything is filed.' },
    { q: 'What does "reasonable security" actually mean?', a: 'It depends on the foreseeable risk. For a property with a documented history of violent crime, ordinary care may require working gates and locks, adequate lighting, functioning cameras, and staffed patrols. For a location with no such history, far less. The standard scales to what the owner knew.' },
    { q: 'How long do I have?', a: 'Generally two years from the date of the assault for a personal injury claim in Georgia. But the evidence that proves foreseeability — security footage in particular — is often gone within weeks, and call records take time to obtain, so the useful window is much shorter than the legal one.' },
  ],
  related: ['premises-liability', 'sexual-assaults', 'catastrophic-injuries'],
};

export const sexualAssaults: PracticePage = {
  slug: 'sexual-assaults',
  navLabel: 'Sexual Assault',
  group: 'Premises & Security',
  h1: 'Atlanta Sexual Assault Civil Claims Lawyer',
  targetKeyword: 'Sexual Assault Lawyer Atlanta GA',
  metaTitle: 'Sexual Assault Civil Claims Lawyer Atlanta GA',
  metaDescription:
    'Survivors of sexual assault in Georgia may have a civil claim against a negligent business or institution. Free, confidential consultation — (404) 394-9410.',
  label: 'Case type',
  deck: 'A civil claim is separate from any criminal case, and it belongs to you rather than to a prosecutor.',
  cardBlurb:
    'Confidential civil claims for survivors, including against institutions that enabled the harm.',
  intro: [
    'This is a difficult page to be reading, and there is no obligation attached to reading it. What follows is information, not a recommendation about what you should do.',
    'A civil claim is a different thing from a criminal case. A criminal prosecution is brought by the State, controlled by a prosecutor, and requires proof beyond a reasonable doubt. A civil claim belongs to you — you decide whether to bring it, what to seek, and whether to settle — and it is decided by a lower standard of proof. That is why a civil claim can succeed where a criminal case was never brought, was dropped, or ended in acquittal.',
    'Civil claims frequently run against more than the individual. Hotels, apartment complexes, employers, rideshare and transport companies, schools, medical practices, and youth organizations can be liable where they failed to screen someone, ignored complaints, kept a known risk in place, or provided no security in a setting where they knew it was needed. Those institutions carry insurance, which is often what makes a recovery meaningful.',
    'Lawson Personal Injury Attorneys handles these matters confidentially and without pressure. A first conversation is free, private, and commits you to nothing at all.',
  ],
  handles: [
    { title: 'Claims against negligent institutions', body: 'Employers, schools, care facilities, and organizations that failed to screen, supervise, or act on what they knew.' },
    { title: 'Hotel and short-term rental incidents', body: 'Key control failures, unsecured access, and properties on notice of prior incidents.' },
    { title: 'Apartment complex assaults', body: 'Broken locks and gates, absent security, and complexes with documented prior incidents.' },
    { title: 'Rideshare and transport assaults', body: 'Claims raising a company’s driver screening, monitoring, and complaint-response practices.' },
    { title: 'Workplace assault and harassment', body: 'Where an employer knew of prior conduct and kept the person in place.' },
    { title: 'Assaults in medical and care settings', body: 'Facilities responsible for supervising staff with access to vulnerable patients.' },
    { title: 'Claims involving minors', body: 'Georgia provides substantially extended deadlines for childhood sexual abuse claims.' },
    { title: 'Claims against the individual', body: 'Direct claims where the person has assets or applicable coverage.' },
  ],
  georgiaNote: {
    heading: 'Deadlines, standards, and confidentiality',
    body: [
      'The civil standard of proof is a preponderance of the evidence — more likely than not — rather than the beyond-a-reasonable-doubt standard a criminal case requires. This is the single most important structural difference, and it is why the outcome of a criminal case, or the absence of one, does not determine whether a civil claim can succeed.',
      'Deadlines vary and are worth checking rather than assuming. A civil claim by an adult survivor generally follows Georgia’s two-year personal injury limitation. Claims arising from childhood sexual abuse are governed by a separate statute (O.C.G.A. § 9-3-33.1) that provides a substantially longer window, and in some circumstances allows claims against entities to be brought after a survivor comes to understand the connection between the abuse and the harm. If you are unsure whether time has run, that is a question worth asking rather than assuming the answer.',
      'On privacy: civil filings are public records, but courts can enter protective orders, and Georgia courts have permitted survivors to proceed under a pseudonym in appropriate cases. Most civil claims resolve without trial. These are legitimate concerns and they can be discussed fully before anything is filed.',
    ],
  },
  process: [
    { title: 'A confidential conversation', body: 'Free, private, no obligation. You control what you share and how far anything goes. Nothing is filed because you asked a question.' },
    { title: 'Understanding the options', body: 'Who may be responsible, what deadlines apply to your situation, and what a claim would realistically involve.' },
    { title: 'Building it carefully', body: 'Institutional records, prior complaints, and security or supervision failures — with your privacy protected throughout.' },
    { title: 'Resolution on your terms', body: 'You decide whether to settle and on what terms. The decisions in a civil claim are yours to make.' },
  ],
  faqs: [
    { q: 'Do I have to report to police to bring a civil claim?', a: 'No. A civil claim is independent of the criminal system. A police report can be useful evidence, but its absence does not prevent a claim, and you are not required to participate in a criminal prosecution in order to pursue one.' },
    { q: 'The criminal case was dropped, or there was an acquittal. Is a civil claim still possible?', a: 'Yes. The standards of proof are different — a civil claim requires only that something be more likely than not, while a criminal conviction requires proof beyond a reasonable doubt. Cases that do not meet the criminal standard regularly meet the civil one.' },
    { q: 'Can I sue a business or organization rather than the individual?', a: 'Often, and it is frequently the more meaningful claim. Where a hotel, employer, school, apartment complex, transport company, or care facility failed to screen someone, ignored complaints, or provided no security where it was clearly needed, it may be liable for its own negligence — and it carries insurance the individual almost certainly does not.' },
    { q: 'Will my name become public?', a: 'Court filings are public records, but there are real protections. Courts can enter protective orders limiting disclosure, and Georgia courts have allowed survivors to proceed under a pseudonym where circumstances warrant it. Most civil claims also resolve without a trial. This can be discussed thoroughly before anything is filed.' },
    { q: 'How long do I have?', a: 'It depends on the circumstances and is worth asking about rather than assuming. Adult survivors generally face Georgia\'s two-year personal injury deadline. Claims arising from childhood sexual abuse fall under a separate statute with a substantially longer window and, in some situations, a later start date. If you think time may have run, ask before concluding it has.' },
    { q: 'I am not sure I want to do anything. Is it still worth calling?', a: 'Yes, and a call commits you to nothing. Many people want to understand their options without deciding anything, and that is a complete reason to have the conversation. It is free, it is confidential, and you can end it at any point. If the answer is that this is not the right time, that is a legitimate answer.' },
  ],
  related: ['assault-injuries', 'premises-liability', 'child-injuries'],
};

export const constructionAccidents: PracticePage = {
  slug: 'construction-accidents',
  navLabel: 'Construction Accidents',
  group: 'Work Injuries',
  h1: 'Atlanta Construction Accident Lawyer',
  targetKeyword: 'Construction Accident Lawyer Atlanta GA',
  metaTitle: 'Construction Accident Lawyer Atlanta GA',
  metaDescription:
    'Hurt on an Atlanta construction site? You may well have a third-party claim reaching far beyond workers\' comp. Free review — call (404) 394-9410 today.',
  label: 'Case type',
  deck: 'Workers’ compensation is not the end of the analysis on a construction site. It is the beginning of it.',
  cardBlurb:
    'Site injury claims — including third-party claims that reach beyond workers’ compensation.',
  intro: [
    'Construction sites are the clearest example of a place where workers’ compensation alone undercompensates a serious injury. Comp pays medical treatment and a portion of lost wages. It does not pay for pain and suffering, and it does not pay for the loss of a life you were able to live before. For a worker with a permanent injury, that gap is the difference between getting by and not.',
    'What makes construction different is how many separate companies operate on one site. A general contractor, subcontractors in several trades, equipment lessors, property owners, architects, engineers, and material suppliers may all be present. Workers’ compensation is an exclusive remedy against your employer — but it does not bar a negligence claim against any of those other parties. A scaffold erected by another subcontractor, a defective lift, an owner who kept trades working in the same space against the site plan: each is a third-party claim that can be brought alongside a comp claim.',
    'Lawson Personal Injury Attorneys examines construction injuries with that structure in mind — identifying every entity on the site, obtaining the safety and OSHA record, and pursuing the third-party claim while the workers’ compensation claim proceeds on its own track.',
  ],
  handles: [
    { title: 'Falls from height', body: 'Scaffolding, ladders, roofs, and openings — consistently the leading cause of construction fatalities.' },
    { title: 'Struck-by and caught-between injuries', body: 'Falling materials, swinging loads, and workers caught in equipment or between vehicles.' },
    { title: 'Crane and heavy equipment incidents', body: 'Operator error, mechanical failure, and improper rigging, often reaching an equipment lessor or maintenance contractor.' },
    { title: 'Electrocution', body: 'Contact with live lines and improperly grounded equipment — one of the industry’s "fatal four" hazards.' },
    { title: 'Trench and excavation collapse', body: 'Failures of shoring and protective systems required by federal safety standards.' },
    { title: 'Defective tools and equipment', body: 'Product liability claims against manufacturers of machinery that failed.' },
    { title: 'Site vehicle collisions', body: 'Injuries involving trucks, loaders, and forklifts moving on and around the site.' },
    { title: 'Fires, explosions, and chemical exposure', body: 'Burn injuries and respiratory harm from site conditions and materials handling.' },
  ],
  georgiaNote: {
    heading: 'The exclusive remedy rule, and what it does not cover',
    body: [
      'Georgia’s workers’ compensation system is an exclusive remedy: an injured employee generally cannot sue their own employer in tort, and in exchange receives benefits without having to prove fault. That trade-off is why comp claims pay medical and partial wage benefits but never pain and suffering.',
      'The exclusivity stops at the employer. A negligence claim against a different company on the site — another subcontractor, the general contractor where it is not your statutory employer, an equipment lessor, a property owner, a designer, a manufacturer — is not barred. These third-party claims are where compensation for the full harm comes from, and on a multi-employer site they are common rather than exotic.',
      'Both tracks run at once and interact. The comp insurer typically holds a subrogation lien against any third-party recovery, so how and when each claim resolves affects what the worker actually keeps. OSHA citations and the site safety record are valuable evidence for the third-party claim. Note the deadlines differ: the comp claim generally requires notice within 30 days and filing within one year, while the third-party negligence claim follows Georgia’s two-year rule.',
    ],
  },
  process: [
    { title: 'Free case review', body: 'Who you work for, who else was on the site, what happened, and whether a comp claim has been filed.' },
    { title: 'Mapping the site', body: 'Every contractor, subcontractor, lessor, and owner identified — the third-party claim depends on knowing who was there.' },
    { title: 'Safety record and evidence', body: 'OSHA reports, site safety plans, inspection records, equipment maintenance history, and witness accounts.' },
    { title: 'Running both claims', body: 'Comp benefits protected while the third-party case is built, with the subrogation lien negotiated at resolution.' },
  ],
  faqs: [
    { q: 'I am getting workers\' comp. Can I still bring a claim?', a: 'Possibly, and it is worth checking in every construction case. Workers\' compensation bars claims against your employer, but not against other companies on the site — another subcontractor, an equipment lessor, a property owner, or a manufacturer. That third-party claim is where damages like pain and suffering come from.' },
    { q: 'Why is workers\' compensation not enough?', a: 'Because it is designed to be limited. Comp pays medical treatment and a percentage of lost wages, but nothing for pain and suffering, nothing for loss of enjoyment of life, and nothing for the full extent of diminished earning capacity. For a permanent injury the gap between what comp pays and what the harm is worth is very large.' },
    { q: 'Will I lose my job if I make a claim?', a: 'Retaliating against a worker for pursuing a workers\' compensation claim is unlawful in Georgia. That is not the same as saying it never happens, and it is a legitimate worry — particularly for workers on smaller crews. It is worth discussing directly, and it should not be a reason to leave a serious injury uncompensated.' },
    { q: 'Does it matter if I am undocumented?', a: 'Immigration status does not bar a workers\' compensation claim or a personal injury claim in Georgia. Injured workers have rights regardless of status, and consultations are confidential. This is a common and understandable fear that keeps people from getting treatment they are entitled to.' },
    { q: 'Was I an employee or an independent contractor?', a: 'It matters a great deal and is not decided by what a company calls you. Georgia looks at the actual working relationship — control over the work, who supplies tools, how you are paid. Workers labeled independent contractors are frequently employees in law, and if you are genuinely a contractor, the exclusive remedy bar may not apply at all, which can open a direct claim.' },
    { q: 'How long do I have?', a: 'Two different clocks. The workers\' compensation claim generally requires notice to the employer within 30 days and a filing within one year. The third-party negligence claim follows Georgia\'s two-year deadline. The comp deadline is the short one and the one most often missed.' },
  ],
  related: ['workplace-accidents', 'workers-compensation', 'catastrophic-injuries'],
};

export const workplaceAccidents: PracticePage = {
  slug: 'workplace-accidents',
  navLabel: 'Workplace Accidents',
  group: 'Work Injuries',
  h1: 'Atlanta Workplace Accident Lawyer',
  targetKeyword: 'Workplace Accident Lawyer Atlanta GA',
  metaTitle: 'Workplace Accident Lawyer Atlanta GA',
  metaDescription:
    'Injured at work in Atlanta? You may have a third-party claim on top of workers\' comp. Free case review, no fee unless we win — call (404) 394-9410 today.',
  label: 'Case type',
  deck: 'The first question is not what happened. It is who else was involved besides your employer.',
  cardBlurb:
    'On-the-job injuries, and the third-party claims that often exist alongside a comp claim.',
  intro: [
    'Most people injured at work assume workers’ compensation is the whole of it. Often it is not. Comp is an exclusive remedy against your employer, but it says nothing about anyone else — and a great many workplace injuries involve someone else: a delivery driver from another company, a contractor servicing equipment, a manufacturer whose machine had no guard, a property owner who let a hazard stand in a building you were working in.',
    'That distinction matters because the two systems compensate very differently. Workers’ compensation pays medical treatment and a portion of lost wages, on a schedule, without regard to fault. It pays nothing for pain and suffering and nothing for the full extent of a permanently diminished career. A third-party negligence claim covers exactly what comp leaves out.',
    'The other reason to look carefully is that the comp system has traps. Notice deadlines are short, authorized-physician rules control who you may treat with, and an insurer that disputes the claim can leave a worker with neither benefits nor income. Lawson Personal Injury Attorneys looks at a workplace injury as two questions at once: is the comp claim being handled properly, and does a third-party claim exist alongside it?',
  ],
  handles: [
    { title: 'Machinery and equipment injuries', body: 'Unguarded machinery and failures that can support a product liability claim against a manufacturer.' },
    { title: 'Falls at work', body: 'From height and on the same level, including falls on property controlled by someone other than your employer.' },
    { title: 'Vehicle collisions on the job', body: 'Injuries while driving for work — a third-party claim against the at-fault driver runs alongside comp.' },
    { title: 'Warehouse and forklift incidents', body: 'Struck-by and caught-between injuries in distribution facilities across metro Atlanta.' },
    { title: 'Repetitive stress and cumulative trauma', body: 'Injuries developing over time, which are compensable but frequently disputed.' },
    { title: 'Chemical exposure and burns', body: 'Respiratory injury and burns, potentially reaching a chemical manufacturer or supplier.' },
    { title: 'Injuries on someone else’s property', body: 'Delivery drivers, service technicians, and anyone hurt working at a location their employer does not control.' },
    { title: 'Denied and disputed comp claims', body: 'Where the insurer has denied the claim, cut off benefits, or is disputing the treatment you need.' },
  ],
  georgiaNote: {
    heading: 'Two systems, two sets of deadlines',
    body: [
      'Georgia workers’ compensation is no-fault and exclusive: you do not have to prove your employer did anything wrong, and in exchange you generally cannot sue them. Benefits cover authorized medical treatment and income benefits at roughly two-thirds of your average weekly wage, subject to a statutory cap. There is no recovery for pain and suffering.',
      'A third-party claim is an ordinary negligence action against someone other than your employer, and nothing about workers’ compensation bars it. It carries the full range of tort damages. Where both exist, the comp insurer typically asserts a subrogation lien against the third-party recovery, so sequencing and lien negotiation materially affect what the worker keeps.',
      'The deadlines differ and the comp one is short. Report the injury to your employer as soon as possible and within 30 days, and file the claim with the State Board of Workers’ Compensation within one year of the injury. A third-party claim follows Georgia’s ordinary two-year limitation. Missing the 30-day notice is the most common way a valid workplace claim is lost.',
    ],
  },
  process: [
    { title: 'Free case review', body: 'What happened, who else was involved, whether the injury was reported, and where the comp claim currently stands.' },
    { title: 'Protecting the comp claim', body: 'Notice, filing, and the authorized-physician rules — the procedural traps that cost workers benefits.' },
    { title: 'Finding the third-party claim', body: 'Every non-employer whose conduct contributed, from equipment manufacturers to other contractors to property owners.' },
    { title: 'Coordinating both', body: 'Running the claims together and negotiating the comp lien so the net recovery reflects the actual harm.' },
  ],
  faqs: [
    { q: 'Can I sue my employer for a workplace injury?', a: 'Generally no. Georgia workers\' compensation is an exclusive remedy against your employer — you receive benefits without proving fault, and give up the right to sue them in tort. Narrow exceptions exist, but the more productive question is usually whether someone other than your employer contributed.' },
    { q: 'What is a third-party claim?', a: 'A negligence claim against anyone other than your employer who contributed to the injury: another contractor, an equipment manufacturer, a property owner, a driver who hit you while you were working. It is not barred by workers\' compensation, and it covers pain and suffering and full lost earning capacity — which comp does not.' },
    { q: 'How long do I have to report an injury?', a: 'Report it to your employer immediately and no later than 30 days after the injury, and file with the State Board of Workers\' Compensation within one year. That 30-day notice requirement is short and strictly applied, and it is the most common way an otherwise valid claim is lost.' },
    { q: 'Can I see my own doctor?', a: 'In Georgia, usually not at first. Employers are required to post a panel of physicians, and you generally must treat with a doctor from that panel for the treatment to be covered. There are exceptions — emergencies, and situations where the panel is invalid or was never properly posted — and an improperly maintained panel can open up your choice.' },
    { q: 'My claim was denied. What now?', a: 'A denial is not the end. Claims are denied for many reasons, including disputes about whether the injury arose from work, late notice, or the adequacy of medical documentation. Denials can be challenged before the State Board, and getting the medical record and the notice timeline right is usually what resolves them.' },
    { q: 'Will pursuing this cost me my job?', a: 'Retaliation for filing a workers\' compensation claim is unlawful in Georgia. That protection is real but it is not a guarantee against a difficult workplace, and the concern is legitimate. It is worth talking through — an untreated serious injury has costs of its own that last much longer.' },
  ],
  related: ['workers-compensation', 'construction-accidents', 'product-liability'],
};
