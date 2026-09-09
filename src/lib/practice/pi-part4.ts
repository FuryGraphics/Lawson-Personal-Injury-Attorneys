import type { PracticePage } from './types';

/** Part 4 — serious and catastrophic injury, and injuries to children. */

export const brainInjury: PracticePage = {
  slug: 'brain-injury',
  navLabel: 'Brain Injury',
  group: 'Catastrophic & Wrongful Death',
  featured: true,
  h1: 'Lawrenceville Traumatic Brain Injury Lawyer',
  targetKeyword: 'Brain Injury Lawyer Lawrenceville GA',
  metaTitle: 'Traumatic Brain Injury Lawyer Lawrenceville GA',
  metaDescription:
    'Traumatic brain injury in Lawrenceville? TBI claims turn on proving an injury that scans often miss. Free case review, no fee unless we win — (678) 446-3655.',
  label: 'Case type',
  deck: 'A normal CT scan does not mean a normal brain. Most of the work in a TBI case is proving that.',
  cardBlurb:
    'Traumatic brain injury claims, including the mild TBI cases insurers routinely dispute.',
  intro: [
    'Traumatic brain injury is the injury insurers fight hardest, because it is the one that is easiest to make look like nothing. There is often no cast, no scar, and no dramatic imaging. A CT scan in the emergency room comes back unremarkable — which is expected in most mild TBI — and that single line in the record becomes the foundation of a defense arguing the client is exaggerating or has a psychological problem unrelated to the collision.',
    'Meanwhile the person is living with something they cannot explain. Word-finding trouble. Losing the thread mid-conversation. Light and noise that have become intolerable. Irritability that is straining a marriage. Fatigue that arrives at two in the afternoon and ends the day. Many clients have been told these are stress or anxiety, and many have started to believe it.',
    'Building a brain injury case means replacing that vacuum with evidence: neuropsychological testing that measures deficits objectively, advanced imaging where it is warranted, treating specialists rather than a general practitioner, and — often the most persuasive material in the file — testimony from the people who knew the client before, describing precisely what changed.',
  ],
  handles: [
    { title: 'Mild TBI and concussion', body: 'The most disputed category, and the one where objective neuropsychological testing does the heaviest lifting.' },
    { title: 'Moderate and severe TBI', body: 'Injuries with imaging findings, where the fight moves from whether it happened to what lifetime care costs.' },
    { title: 'Post-concussive syndrome', body: 'Symptoms persisting long past the expected recovery window, which insurers frequently attribute to something else.' },
    { title: 'Diffuse axonal injury', body: 'Shearing injury from rotational force, often invisible on standard CT and requiring specialized imaging.' },
    { title: 'Second-impact and repeat injuries', body: 'Cases where a prior head injury made this one worse — which under Georgia law does not reduce the claim.' },
    { title: 'Anoxic and hypoxic brain injury', body: 'Oxygen deprivation from near-drowning, cardiac events, or anesthesia errors.' },
    { title: 'Skull fractures and hemorrhage', body: 'Subdural and epidural bleeds requiring surgical intervention and long rehabilitation.' },
    { title: 'Pediatric brain injury', body: 'Children whose deficits may not fully appear until developmental milestones are missed years later.' },
  ],
  georgiaNote: {
    heading: 'The eggshell plaintiff, and why a prior condition does not sink the case',
    body: [
      'Georgia follows the eggshell plaintiff rule: a defendant takes the injured person as they find them. If a prior concussion, a learning difference, or an existing neurological condition made this injury worse than it would have been for someone else, the defendant is still responsible for the full extent of the harm they caused. Insurers argue pre-existing conditions constantly, and it is far less effective as a defense than they suggest.',
      'What the defense is really doing is attacking causation — arguing the deficits existed before, or come from depression, or from aging. That argument is answered with a documented baseline: school and work records, performance reviews, and testimony from family and colleagues about function before and after.',
      'The valuation problem is distinct. A brain injury’s largest costs are usually future ones — lost earning capacity over a working life, and care that may extend for decades. Georgia allows recovery for both, but they must be proven with expert testimony rather than asserted. The two-year filing deadline under O.C.G.A. § 9-3-33 applies, and it is tight for an injury whose full extent can take a year or more to become clear.',
    ],
  },
  process: [
    { title: 'Free case review', body: 'What happened, what you have noticed since, and what the medical record currently does and does not say.' },
    { title: 'Getting the right workup', body: 'Referral to neurology, neuropsychology, and rehabilitation specialists — a normal ER scan is not a diagnosis.' },
    { title: 'Documenting the change', body: 'Baseline records plus before-and-after accounts from family, friends, and colleagues who can describe what is different.' },
    { title: 'Proving lifetime cost', body: 'Life care planning and vocational expert work to establish future care and lost earning capacity, then demand or suit.' },
  ],
  faqs: [
    { q: 'My CT scan was normal. Do I still have a brain injury case?', a: 'Very possibly. Standard CT is designed to find bleeding and fractures — emergencies — not the diffuse microscopic damage that causes most persistent post-concussive symptoms. A normal scan is the expected result in mild TBI. Diagnosis comes from clinical evaluation and neuropsychological testing, not from that scan.' },
    { q: 'I never lost consciousness. Does that matter?', a: 'No. Loss of consciousness is not required for a traumatic brain injury, and most concussions occur without it. What matters is the mechanism of injury and the symptoms that followed — confusion, headache, memory trouble, light sensitivity, mood change. The defense will raise it anyway.' },
    { q: 'How do you prove symptoms nobody can see?', a: 'Neuropsychological testing measures memory, processing speed, and executive function against normed data, and includes validity measures showing the person is not exaggerating. That is combined with treating specialists\' opinions and testimony from people who knew you before — the co-worker who noticed you stopped handling a task you used to do easily is often more persuasive than any expert.' },
    { q: 'I had a concussion years ago. Will that be used against me?', a: 'It will be raised, and it should not succeed. Georgia\'s eggshell plaintiff rule means a defendant takes you as they find you — if a prior injury made this one worse, they are responsible for the full result. Prior history changes the analysis of what is attributable to this event; it does not eliminate the claim.' },
    { q: 'How long should I wait before settling?', a: 'Longer than feels comfortable. Brain injury recovery is not linear, and the point at which a physician can say where you will end up may be a year or more out. Settling before then means guessing at the most expensive part of the case. Once you sign a release it is over, including for care you have not had yet.' },
    { q: 'What is a brain injury case worth?', a: 'It depends heavily on whether the deficits are permanent and whether they affect your ability to work. A TBI that ends a career carries lost earning capacity over decades plus a lifetime of care, which is a very different number from a concussion that resolves in months. Available insurance frequently sets the practical ceiling.' },
  ],
  related: ['catastrophic-injuries', 'car-accidents', 'motorcycle-accidents'],
};

export const catastrophicInjuries: PracticePage = {
  slug: 'catastrophic-injuries',
  navLabel: 'Catastrophic Injuries',
  group: 'Catastrophic & Wrongful Death',
  featured: true,
  h1: 'Lawrenceville Catastrophic Injury Lawyer',
  targetKeyword: 'Catastrophic Injury Lawyer Lawrenceville GA',
  metaTitle: 'Catastrophic Injury Lawyer Lawrenceville GA',
  metaDescription:
    'Life-altering injury in Lawrenceville? Catastrophic claims turn on proving lifetime care and lost earning capacity. Free review — call (678) 446-3655 today.',
  label: 'Case type',
  deck: 'When an injury is permanent, the case stops being about medical bills and becomes about the next forty years.',
  cardBlurb:
    'Spinal cord injury, amputation, severe burns, and other permanent, life-altering harm.',
  intro: [
    'A catastrophic injury case is a different exercise from an ordinary injury claim. The medical bills already incurred, however large, are usually the smallest part of the number. What matters is the rest of a life: attendant care, home modification, adaptive equipment that wears out and must be replaced on a schedule, surgeries that are foreseeable but have not happened yet, and a career that either ended or narrowed permanently.',
    'None of that is recoverable simply by asserting it. Georgia allows future damages, but they must be proven — through a life care planner who prices the care year by year, a vocational expert who establishes what earning capacity was lost, and an economist who reduces the whole thing to present value. Insurers defend these cases by attacking each of those experts, because every assumption they dislodge is worth a substantial sum.',
    'There is also a practical dimension that arrives immediately. Families face home modifications, lost income on both sides, and decisions about long-term care while the claim is years from resolution. Lawson Personal Injury Attorneys handles catastrophic cases with both timelines in view: the immediate one and the lifetime one.',
  ],
  handles: [
    { title: 'Spinal cord injury and paralysis', body: 'Paraplegia and quadriplegia claims, where attendant care and accessible housing dominate the valuation.' },
    { title: 'Amputation and limb loss', body: 'Including prosthetic replacement cycles that continue for the rest of a life.' },
    { title: 'Severe burns', body: 'Multiple reconstructive surgeries, scarring, and the psychological injury that accompanies disfigurement.' },
    { title: 'Traumatic brain injury', body: 'Severe TBI requiring supervision or assistance with daily living.' },
    { title: 'Multiple orthopedic trauma', body: 'Crush injuries and complex fractures leading to permanent limitation and chronic pain.' },
    { title: 'Loss of vision or hearing', body: 'Sensory loss that changes what work is possible and what independence looks like.' },
    { title: 'Internal organ damage', body: 'Injuries requiring ongoing management, transplant, or dialysis.' },
    { title: 'Injuries requiring lifetime care', body: 'Any injury where the person will need paid assistance indefinitely.' },
  ],
  georgiaNote: {
    heading: 'Proving a lifetime, and finding enough insurance to cover it',
    body: [
      'Georgia permits recovery for future medical expenses, future lost earnings, diminished earning capacity, and the non-economic harm of permanent impairment. The evidentiary burden is real: future damages must be established to a reasonable degree of certainty through expert testimony, not estimated. A life care plan, a vocational assessment, and an economic present-value analysis are the standard toolkit.',
      'The harder problem is frequently coverage. A catastrophic injury can exhaust a defendant’s policy immediately, which makes finding every available layer the difference between a claim that compensates and one that does not. That means umbrella and excess policies, employer coverage where the defendant was working, commercial policies, other potentially liable parties, and the client’s own underinsured motorist coverage.',
      'Georgia’s comparative negligence rule bites hardest here. In a case worth millions, ten percent of assigned fault is an enormous sum, and a finding of fifty percent eliminates the claim entirely. That is why liability gets investigated as thoroughly as damages even when fault looks obvious.',
    ],
  },
  process: [
    { title: 'Immediate stabilization', body: 'Sorting out health coverage, letters of protection, and how care gets paid for while the claim proceeds.' },
    { title: 'Full liability investigation', body: 'Every potentially responsible party identified, because a single policy rarely covers a catastrophic loss.' },
    { title: 'Proving the lifetime', body: 'Life care planning, vocational and economic experts, and the medical opinions that establish permanence.' },
    { title: 'Resolution built to last', body: 'A demand reflecting the whole future, with structured settlement and lien resolution handled so the recovery survives.' },
  ],
  faqs: [
    { q: 'What makes an injury "catastrophic"?', a: 'Functionally, an injury that permanently changes what you can do — spinal cord injury, amputation, severe burns, serious brain injury, or organ damage requiring ongoing treatment. The legal significance is that future damages, rather than past medical bills, become the dominant component of the claim.' },
    { q: 'How do you calculate what a lifetime of care costs?', a: 'A life care planner — usually a rehabilitation professional — builds an itemized plan: attendant care hours, equipment and its replacement cycle, home and vehicle modification, medication, and anticipated procedures. An economist then reduces it to present value. It is detailed work, and it is the part the defense targets hardest.' },
    { q: 'The insurance policy is not big enough. What happens?', a: 'Then the search for other coverage becomes the case. Umbrella and excess policies, employer coverage if the defendant was working, commercial policies, other liable parties, and your own underinsured motorist coverage all get examined. Where a defendant has assets beyond insurance, that is evaluated too — though collecting against individuals is often difficult.' },
    { q: 'How long do these cases take?', a: 'Longer than most, and for a good reason: the case cannot be valued until physicians can say what the permanent condition is, which frequently takes a year or more. Rushing to settle a catastrophic case is how people end up without the resources to pay for the care they will need in year fifteen.' },
    { q: 'Should I take a structured settlement?', a: 'It is worth serious consideration in a catastrophic case. A structure pays over time rather than in a lump sum, which protects against the recovery being exhausted early and can carry tax advantages. Whether it fits depends on the family\'s circumstances, and it is a decision to make with financial advice, not under pressure.' },
    { q: 'Who pays for care while the case is pending?', a: 'Usually health insurance, sometimes Medicare or Medicaid, and sometimes providers treating under a letter of protection. Those payers assert reimbursement rights against the eventual settlement, and negotiating those liens down is a significant part of what determines the family\'s net recovery.' },
  ],
  related: ['brain-injury', 'wrongful-death', 'truck-accidents'],
};

export const childInjuries: PracticePage = {
  slug: 'child-injuries',
  navLabel: 'Child Injuries',
  group: 'Catastrophic & Wrongful Death',
  h1: 'Lawrenceville Child Injury Lawyer',
  targetKeyword: 'Child Injury Lawyer Lawrenceville GA',
  metaTitle: 'Child Injury Lawyer Lawrenceville GA',
  metaDescription:
    'Your child was hurt by someone else’s negligence in Lawrenceville? Georgia protects minors’ claims differently. Free, private consultation — (678) 446-3655.',
  label: 'Case type',
  deck: 'Georgia does not judge a child by an adult standard — and it does not let anyone settle a child’s claim quietly.',
  cardBlurb:
    'Claims on behalf of injured minors, with the court protections Georgia builds around them.',
  intro: [
    'When a child is hurt, the legal questions arrive at the worst possible moment and in an unfamiliar shape. Georgia treats a minor’s claim differently from an adult’s in several ways that matter, and most families do not learn about them until someone explains it.',
    'The first difference is fault. Georgia does not hold young children to an adult standard of care, and children under a certain age are generally presumed incapable of negligence at all. The comparative fault argument that dominates adult cases — that the injured person should have been more careful — carries far less weight against a seven-year-old who ran into a street.',
    'The second is time. A minor’s claim is generally tolled, meaning the two-year clock does not run in the ordinary way while the child is under 18. That does not mean waiting is wise: evidence still disappears on its own schedule, and a parent’s own separate claim for the child’s medical expenses follows the ordinary deadline. The third difference is protective — a settlement of a minor’s claim above a statutory threshold requires court approval, so no insurer can quietly resolve your child’s case for a fraction of its value.',
  ],
  handles: [
    { title: 'Children struck as pedestrians', body: 'School zones, bus stops, and residential streets, where drivers owe heightened attentiveness.' },
    { title: 'Child passengers in collisions', body: 'Including claims involving improper restraint systems and defective child seats.' },
    { title: 'School and daycare injuries', body: 'Supervision failures, playground hazards, and — where a public school is involved — short ante litem deadlines.' },
    { title: 'Playground and recreational injuries', body: 'Defective or poorly maintained equipment, inadequate surfacing, and absent supervision.' },
    { title: 'Swimming pool and drowning incidents', body: 'Inadequate fencing, absent lifeguards, and unsecured pools at apartment complexes and homes.' },
    { title: 'Dog bites and animal attacks', body: 'Children are bitten more often than adults and injured more severely, frequently on the face.' },
    { title: 'Defective toys and products', body: 'Product liability claims against manufacturers for hazards that reached a child.' },
    { title: 'Birth and pediatric medical injuries', body: 'Claims arising from negligent care, which follow the medical malpractice rules rather than ordinary negligence.' },
  ],
  georgiaNote: {
    heading: 'How Georgia protects a minor’s claim',
    body: [
      'Georgia tolls the statute of limitations for minors: the two-year period for a child’s personal injury claim generally does not begin to run until the child turns 18, giving them until 20 to file. But a parent’s own derivative claim — for the medical expenses they paid and services lost — is not tolled and follows the ordinary two-year deadline. Families regularly preserve the child’s claim while losing their own.',
      'On fault, Georgia does not apply the adult standard to children. A child under 13 cannot be charged with criminal negligence, and in civil cases young children are generally held only to the care expected of a child of similar age, capacity, and experience — if they are held to any standard at all. This substantially weakens the comparative negligence defense that reduces most adult recoveries.',
      'Settlements are supervised. Under Georgia law, resolving a minor’s claim above a statutory threshold requires appointment of a conservator and court approval of the settlement. It adds process, and it exists for a good reason: it stops a claim worth a great deal from being settled for very little by someone under pressure. Where a public school or government entity is involved, the ante litem notice deadlines still apply and are not tolled by the child’s age.',
    ],
  },
  process: [
    { title: 'A conversation, no pressure', body: 'Free and confidential. We explain how a minor’s claim works and what deadlines actually apply to your family.' },
    { title: 'Evidence and medical care', body: 'Preserving footage and incident reports, and making sure the child is evaluated by people who treat children.' },
    { title: 'Understanding the long term', body: 'Some childhood injuries do not fully reveal themselves until later developmental stages, which affects timing and value.' },
    { title: 'Court approval and protection', body: 'Conservatorship and judicial approval where required, so the recovery is preserved for the child.' },
  ],
  faqs: [
    { q: 'How long do we have to file a claim for our child?', a: 'The child\'s own claim is generally tolled until they turn 18, giving them until age 20. But your separate claim as a parent — for the medical bills you paid — follows the ordinary two-year deadline and is not tolled. Waiting also costs evidence, so the tolling rule is a safety net rather than a plan.' },
    { q: 'The other side says my child ran out and it was unavoidable. Is that a defense?', a: 'Much weaker than it would be against an adult. Georgia does not hold young children to an adult standard of care, and very young children are generally presumed incapable of negligence. Drivers are expected to anticipate that children behave unpredictably, particularly near schools, parks, and residential streets.' },
    { q: 'Do we need court approval to settle?', a: 'For settlements above a statutory threshold, yes — Georgia requires a conservator be appointed and the settlement approved by a court. It is a protection, not an obstacle: it exists to prevent a child\'s claim from being resolved for far less than it is worth, and to ensure the funds are preserved for them.' },
    { q: 'My child was hurt at a public school. Is that different?', a: 'Yes, and it is urgent. Claims against a public school system or other government entity require ante litem notice — as little as six months for a municipality, twelve for a county or the State — and those deadlines are not tolled by the child\'s age. The protective tolling rule does not help here.' },
    { q: 'What if the injury might affect my child later in life?', a: 'That is a real consideration, particularly with head injuries and growth plate fractures, where consequences can emerge years later as developmental milestones are missed or growth is affected. It is one reason not to resolve a child\'s claim quickly, and one reason pediatric specialist evaluation matters more than a general assessment.' },
    { q: 'Who receives the money?', a: 'The child does, not the parents. Where court approval is required, funds are typically placed in a conservatorship, a restricted account, or a structured settlement that pays out at or after age 18. Parents may separately recover the medical expenses they actually paid, through their own claim.' },
  ],
  related: ['pedestrian-accidents', 'dog-bites', 'premises-liability'],
};

export const dogBites: PracticePage = {
  slug: 'dog-bites',
  navLabel: 'Dog Bites',
  group: 'Premises, Property & Workplace',
  h1: 'Lawrenceville Dog Bite Lawyer',
  targetKeyword: 'Dog Bite Lawyer Lawrenceville GA',
  metaTitle: 'Dog Bite Lawyer Lawrenceville GA',
  metaDescription:
    'Bitten by a dog in Georgia? These claims usually turn on a leash law violation or a known vicious propensity. Free review — call (678) 446-3655 today.',
  label: 'Case type',
  deck: 'Georgia is not a strict liability state for dog bites. What usually carries these cases is the local leash ordinance.',
  cardBlurb:
    'Dog bite and animal attack claims under Georgia’s vicious-propensity and leash-law rules.',
  intro: [
    'Georgia is not one of the states where a dog owner is automatically liable for a bite. The governing statute requires showing that the animal was vicious or dangerous and that the owner managed it carelessly — which owners understand well enough to say, immediately and reliably, that the dog had never done anything like this before.',
    'That is why leash ordinances matter so much here. Nearly every metro Atlanta jurisdiction — Gwinnett, Fulton, DeKalb, and the cities inside them — requires dogs to be leashed or confined. Georgia courts have long treated a violation of such an ordinance as satisfying the vicious-propensity element, which means an at-large dog can support a claim regardless of whether it had ever bitten anyone before. Establishing where the dog was and what the local ordinance required is frequently the whole case.',
    'The injuries themselves are often worse than people expect. Dog bites cause crush and tearing damage rather than clean wounds, carry high infection risk, and frequently leave permanent scarring — disproportionately to the face in children. Lawson Personal Injury Attorneys handles these claims through homeowner and renter policies, which is usually where the coverage sits.',
  ],
  handles: [
    { title: 'Leash law violations', body: 'Dogs at large in violation of a county or city ordinance — the most direct route to liability in Georgia.' },
    { title: 'Attacks by dogs with a known history', body: 'Prior bites, prior complaints, or animal control records establishing the owner knew.' },
    { title: 'Injuries to children', body: 'Bites to the face and head, where scarring is permanent and the psychological injury is real.' },
    { title: 'Attacks on delivery and service workers', body: 'People bitten doing their jobs, who may have both a claim and a workers’ compensation issue.' },
    { title: 'Landlord and property manager liability', body: 'Claims against a landlord who knew a dangerous animal was kept on the property and did nothing.' },
    { title: 'Injuries without a bite', body: 'Knockdowns and falls caused by a dog running loose, which are claims even where no bite occurred.' },
    { title: 'Attacks in parks and common areas', body: 'Incidents in apartment complexes and public spaces where confinement rules applied.' },
    { title: 'Scarring and reconstructive treatment', body: 'Claims where the ongoing cost is plastic surgery and the permanent harm is disfigurement.' },
  ],
  georgiaNote: {
    heading: 'Vicious propensity, and the leash-law shortcut',
    body: [
      'Georgia’s dog bite statute (O.C.G.A. § 51-2-7) makes an owner liable where a vicious or dangerous animal causes injury through the owner’s careless management or by being permitted to go at liberty — and where the injured person did not provoke it. Read narrowly, that seems to require proof the dog had shown dangerous tendencies before, which is the "one free bite" idea people have heard of.',
      'The statute contains its own answer. It provides that an animal required to be leashed by local ordinance, and running at large in violation of that ordinance, satisfies the vicious-propensity element. Because virtually every metro Atlanta jurisdiction has a leash or confinement ordinance, establishing that the dog was loose where it should not have been often does the work that proving a bite history would otherwise require.',
      'Provocation is the defense that remains, and it is fact-specific — a child reaching toward a dog is generally not provocation in the legal sense. Coverage typically comes from a homeowner or renter policy, and some policies exclude particular breeds, which is worth identifying early. The ordinary two-year deadline applies, with tolling for minors.',
    ],
  },
  process: [
    { title: 'Free case review', body: 'Where it happened, whether the dog was confined or loose, and what the local ordinance required there.' },
    { title: 'Records and history', body: 'Animal control reports, prior complaints, and witness accounts establishing what the owner knew.' },
    { title: 'Documenting the injury', body: 'Wound care, infection treatment, and — where scarring is permanent — plastic surgery evaluation.' },
    { title: 'Claim against the policy', body: 'A demand to the homeowner or renter carrier, and suit within two years if it is not resolved fairly.' },
  ],
  faqs: [
    { q: 'Does Georgia have a "one free bite" rule?', a: 'Not really, though the idea comes from a real feature of the statute. Georgia requires proof of a vicious or dangerous propensity, which a prior bite would establish — but the statute also provides that a dog running at large in violation of a local leash ordinance satisfies that element. Since nearly every metro Atlanta jurisdiction has such an ordinance, a loose dog is usually enough.' },
    { q: 'Who actually pays?', a: 'Almost always a homeowner or renter insurance policy, which typically covers dog bite liability. This is why a claim rarely means financial ruin for a neighbor or friend — it is their insurer that responds. Some policies exclude specific breeds or have a prior-bite exclusion, which we check early.' },
    { q: 'The owner says my child provoked the dog. Is that a defense?', a: 'Provocation is a defense under the statute, but it means something more than a child being present or reaching toward an animal. Courts look at whether the injured person did something that would genuinely provoke a reaction. It is raised in most cases and succeeds in far fewer.' },
    { q: 'What should I do right after a bite?', a: 'Get medical treatment — bite wounds carry serious infection risk regardless of how they look. Report the bite to animal control, which creates an official record and may reveal prior complaints. Photograph the wounds before they heal and at intervals, and identify the owner and any witnesses.' },
    { q: 'What if the dog belongs to a friend or family member?', a: 'It is an understandable hesitation, and the claim is against their insurance policy rather than against them personally. Insurers price that risk and collect premiums for it. Declining to make a claim does not help the owner — it just means you absorb medical costs their policy exists to pay.' },
    { q: 'My child has permanent scarring. How does that affect the claim?', a: 'Significantly. Georgia allows recovery for disfigurement and the psychological harm that accompanies it, in addition to medical treatment. Facial scarring in a child is valued seriously, and a plastic surgery evaluation projecting future revision procedures is usually a necessary part of the file.' },
  ],
  related: ['premises-liability', 'child-injuries', 'assault-injuries'],
};
