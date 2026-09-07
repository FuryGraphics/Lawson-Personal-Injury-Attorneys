import type { PracticePage } from './types';

/** Part 3 — the remaining motor vehicle case types. */

export const bicycleAccidents: PracticePage = {
  slug: 'bicycle-accidents',
  navLabel: 'Bicycle Accidents',
  group: 'Motor Vehicle Accidents',
  h1: 'Atlanta Bicycle Accident Lawyer',
  targetKeyword: 'Bicycle Accident Lawyer Atlanta GA',
  metaTitle: 'Bicycle Accident Lawyer Atlanta GA',
  metaDescription:
    'Hit while cycling in Atlanta? We handle Georgia bicycle accident claims and push back on driver-blame defenses. Free case review — call (404) 394-9410.',
  label: 'Case type',
  deck: 'Georgia gives cyclists the same right to the road as any vehicle. Drivers, and their insurers, frequently behave as though it does not.',
  cardBlurb:
    'Right-hook, dooring, and unsafe-pass collisions for cyclists on metro Atlanta roads and the BeltLine.',
  intro: [
    'Atlanta has added bike lanes and multi-use paths faster than it has changed driver behavior. The BeltLine, the PATH network, and the painted lanes on Peachtree, Ponce, and Edgewood put cyclists next to traffic that is still driving as though they are not there. The collisions that follow are rarely subtle: a right hook at an intersection, a door opened into the lane, a driver passing far closer than the three feet Georgia requires.',
    'The legal problem is that a cyclist arrives at the claim carrying the same presumption a motorcyclist does. The adjuster wants to know whether you had lights, whether you were wearing a helmet, whether you were "darting" — and every one of those questions is aimed at comparative fault rather than at what the driver did. Because a bicycle leaves little physical evidence and a cyclist is often too injured to document the scene, that argument goes unanswered unless someone gathers the proof quickly.',
    'Lawson Personal Injury Attorneys handles bicycle claims by establishing the road position, the sightlines, and the driver’s speed with something better than recollection: scene measurements, nearby camera footage, bike computer or phone GPS data where it exists, and the damage pattern on both the bicycle and the vehicle.',
  ],
  handles: [
    { title: 'Right-hook and left-cross collisions', body: 'A driver turning across a cyclist traveling lawfully straight — the most common serious bicycle collision at Atlanta intersections.' },
    { title: 'Dooring', body: 'A parked vehicle’s door opened into the bike lane. Georgia law puts that duty on the person opening the door, not on the cyclist.' },
    { title: 'Unsafe passing', body: 'Georgia requires drivers to leave at least three feet when passing a cyclist. Close passes that cause a fall are a violation even without contact.' },
    { title: 'Rear-end and overtaking crashes', body: 'Distracted drivers striking a cyclist from behind, often on roads with no shoulder and no bike lane.' },
    { title: 'BeltLine and multi-use path collisions', body: 'Conflicts at path-road crossings, where drivers routinely fail to yield at marked crossings.' },
    { title: 'Road defects and construction hazards', body: 'Unmarked pavement drop-offs, grates, and debris — claims that may reach a contractor or a government entity with short notice deadlines.' },
    { title: 'Hit-and-run', body: 'When the driver flees, uninsured motorist coverage on your own auto policy often applies even though you were on a bicycle.' },
    { title: 'Catastrophic and fatal bicycle injuries', body: 'Traumatic brain and spinal injuries, and wrongful death claims where a family has lost someone.' },
  ],
  georgiaNote: {
    heading: 'What Georgia law gives cyclists',
    body: [
      'Georgia treats a bicycle as a vehicle. A cyclist has the same rights and duties as a driver (O.C.G.A. § 40-6-291), which means a driver who fails to yield to a bicycle has failed to yield to traffic — not to an obstacle that should not have been there.',
      'Two rules matter constantly in these cases. Drivers overtaking a bicycle must leave a safe distance of at least three feet (O.C.G.A. § 40-6-56). And while Georgia requires helmets only for riders under 16 (O.C.G.A. § 40-6-296), an adult riding without one has not broken any law — the defense may still raise it, but it reaches only injuries a helmet would actually have prevented, and it says nothing about who caused the collision.',
      'The usual deadlines apply: two years for personal injury, two for wrongful death, and a much shorter ante litem notice — six to twelve months — if a city, county, or state entity contributed through road design, signal timing, or a government vehicle.',
    ],
  },
  process: [
    { title: 'Free case review', body: 'What the road looked like, what the driver did, what injuries you have, and what coverage exists — including UM on your own auto policy.' },
    { title: 'Urgent evidence work', body: 'Camera footage requests, scene measurements, preservation of the bicycle itself, and GPS or bike computer data before it is lost.' },
    { title: 'Answering the blame', body: 'Establishing lawful road position, lighting, and the driver’s stopping distance so comparative fault is met with measurements rather than argument.' },
    { title: 'Demand or suit', body: 'A full demand once treatment stabilizes, and a filed case inside the two-year deadline if the offer does not reflect the harm.' },
  ],
  faqs: [
    { q: 'I was not wearing a helmet. Does that end my claim?', a: 'No. Georgia only requires helmets for cyclists under 16, so an adult riding without one has broken no law. The defense may still argue it contributed to head injuries specifically, but it has no bearing on a broken collarbone or a shattered knee, and none at all on who caused the collision.' },
    { q: 'Do I have a claim if I was riding outside the bike lane?', a: 'Usually yes. Georgia cyclists are generally required to ride as near to the right side as practicable, but the statute has real exceptions — avoiding hazards, debris, parked cars, substandard-width lanes, and preparing for a left turn all permit taking the lane. Riding outside a bike lane is not automatically negligence.' },
    { q: 'The driver says I came out of nowhere. How do you answer that?', a: 'With physical evidence. Sightline analysis from the driver’s actual position, the point of impact, damage patterns on the bike and vehicle, and any available footage. "I never saw them" is not a defense in Georgia — drivers owe a duty to keep a proper lookout for everything lawfully on the road.' },
    { q: 'Can I use my car insurance if I was on a bicycle?', a: 'Often, yes — and it surprises most people. Uninsured and underinsured motorist coverage on your own auto policy typically follows you as a person, not just as a driver, so it can apply when you are struck while cycling. A policy held by a resident relative may also apply.' },
    { q: 'What if the crash was caused by a pothole or bad road?', a: 'That can be a claim against whoever is responsible for maintaining the road, which is frequently a government entity. Those claims are viable but the notice deadlines are dramatically shorter — six months for a municipality, twelve for a county or the State of Georgia — and they run from the date of the incident, not from when you finish treatment.' },
    { q: 'How long do I have to file?', a: 'Two years from the date of the collision for a personal injury claim in Georgia (O.C.G.A. § 9-3-33). But footage from nearby businesses is typically overwritten within one to four weeks, so the practical window for building the case is far shorter than the legal one.' },
  ],
  related: ['pedestrian-accidents', 'car-accidents', 'brain-injury'],
};

export const busAccidents: PracticePage = {
  slug: 'bus-accidents',
  navLabel: 'Bus Accidents',
  group: 'Motor Vehicle Accidents',
  h1: 'Atlanta Bus Accident Lawyer',
  targetKeyword: 'Bus Accident Lawyer Atlanta GA',
  metaTitle: 'Bus Accident Lawyer Atlanta GA',
  metaDescription:
    'Injured on or by a bus in Atlanta? MARTA and school bus claims carry short notice deadlines. Free case review, no fee unless we win — call (404) 394-9410.',
  label: 'Case type',
  deck: 'A claim against a public transit agency can expire in six months. That is the first thing to know, and most people never hear it.',
  cardBlurb:
    'MARTA, school bus, charter, and shuttle claims — including the short government notice deadlines.',
  intro: [
    'Bus cases split into two very different kinds. One involves a private carrier — a charter, a shuttle, a tour operator, an interstate line — which is a commercial vehicle claim governed by the same federal and state rules that apply to trucking. The other involves a government operator: MARTA, a county school system, a municipal transit service. Those claims are still viable, but they run on a different and far less forgiving clock.',
    'That distinction decides cases before anyone reaches the merits. Georgia requires an ante litem notice before suing a governmental entity, and the window can be as short as six months from the incident. MARTA has its own notice requirement. A family that spends a year focused on their child’s recovery after a school bus collision can find the claim gone before they ever spoke to a lawyer, no matter how clearly the driver was at fault.',
    'Lawson Personal Injury Attorneys handles bus claims with that deadline as the first order of business — identifying the correct entity, serving proper notice in time, and then building the case through the driver qualification records, maintenance history, route and camera footage, and the operator’s own incident reporting.',
  ],
  handles: [
    { title: 'MARTA bus and rail incidents', body: 'Collisions, falls from sudden stops or starts, and boarding and alighting injuries — all subject to MARTA’s own notice requirements.' },
    { title: 'School bus collisions', body: 'Claims against a county school system, a contracted operator, or a driver who ran a stop arm.' },
    { title: 'Passenger injuries', body: 'Injuries sustained aboard the bus, where the carrier owes a heightened duty of care to the people it carries.' },
    { title: 'Pedestrians and cyclists struck by buses', body: 'Blind-spot and wide-turn collisions involving a vehicle with very limited direct sightlines.' },
    { title: 'Charter, tour, and shuttle bus crashes', body: 'Private carriers subject to federal safety regulations, hours-of-service limits, and substantial insurance.' },
    { title: 'Boarding and alighting injuries', body: 'Falls caused by a bus stopping short of the curb, on uneven ground, or pulling away too early.' },
    { title: 'Negligent hiring and maintenance', body: 'Claims against the operator itself where the driver qualification file or maintenance record shows a known problem.' },
    { title: 'Multi-passenger incidents', body: 'Collisions injuring many people at once, where available coverage has to be identified early because it may be shared.' },
  ],
  georgiaNote: {
    heading: 'Ante litem notice — the deadline that ends most bus claims',
    body: [
      'Before suing a Georgia city you must give ante litem notice within six months of the incident (O.C.G.A. § 36-33-5). For a county, the window is twelve months (O.C.G.A. § 36-11-1). For the State of Georgia and its agencies, the Georgia Tort Claims Act requires notice within twelve months (O.C.G.A. § 50-21-26). MARTA operates under its own statutory notice provision.',
      'These are not the statute of limitations — they are additional, earlier requirements, and they are strictly enforced. A notice that goes to the wrong entity, omits required content, or arrives a day late will end an otherwise strong claim. Identifying the correct defendant is itself a real question: a school bus route may be run by the district, by a contractor, or by both.',
      'Sovereign immunity also caps what can be recovered from state entities and limits the theories available. None of this makes a bus claim not worth bringing. It makes it a claim where the first few weeks matter more than in almost any other kind of case.',
    ],
  },
  process: [
    { title: 'Immediate deadline triage', body: 'Before anything else: identifying whether a government entity is involved and what notice is due, and when.' },
    { title: 'Notice and preservation', body: 'Serving proper ante litem notice, and demanding the operator preserve onboard video, route data, and driver records.' },
    { title: 'Building the claim', body: 'Driver qualification and training files, maintenance history, prior incidents on the route, and the carrier’s own reporting.' },
    { title: 'Resolution', body: 'A demand supported by that record, and suit within the applicable limitation period if the response does not reflect the harm.' },
  ],
  faqs: [
    { q: 'Can I sue MARTA or a school district?', a: 'Yes, but under conditions that do not apply to private defendants. Governmental entities are protected by sovereign immunity, which is waived only in specific circumstances and up to specific limits, and you must serve an ante litem notice well before filing suit. It is entirely possible to have a strong case and lose it purely on notice.' },
    { q: 'How long do I really have?', a: 'Potentially as little as six months from the date of the incident for a claim against a city, and twelve months for a county or the State. That is the notice deadline, which comes long before the two-year filing deadline. If a bus was involved, treat the clock as running from day one.' },
    { q: 'My child was hurt on a school bus. What should we do first?', a: 'Get the incident documented with the school and the district in writing, request that onboard video be preserved immediately — much of it overwrites within days — and get medical evaluation even if the injury seems minor. Then speak with a lawyer quickly, because the notice deadline runs regardless of how young the child is.' },
    { q: 'Is there video?', a: 'Almost always. Modern transit and school buses carry multiple interior and exterior cameras. The problem is retention: footage is frequently overwritten on a rolling schedule measured in days or a few weeks unless someone sends a written preservation demand naming the route, vehicle, date, and time.' },
    { q: 'I was hurt by a sudden stop, not a collision. Is that a claim?', a: 'It can be. Common carriers owe passengers a heightened duty of care in Georgia. But routine jolts and ordinary movement are not negligence on their own — the question is whether the stop or turn was unnecessarily abrupt for the conditions, which is where onboard video and the driver’s own account matter.' },
    { q: 'What if the bus was a private charter or shuttle?', a: 'Then it is a commercial vehicle case rather than a government claim: no ante litem notice, the ordinary two-year deadline, and typically much larger insurance policies. Federal motor carrier safety regulations on driver hours, qualification, and maintenance usually apply, and violations of them are powerful evidence.' },
  ],
  related: ['truck-accidents', 'car-accidents', 'catastrophic-injuries'],
};

export const uberAccidents: PracticePage = {
  slug: 'uber-accidents',
  navLabel: 'Uber Accidents',
  group: 'Motor Vehicle Accidents',
  h1: 'Atlanta Uber Accident Lawyer',
  targetKeyword: 'Uber Accident Lawyer Atlanta GA',
  metaTitle: 'Uber Accident Lawyer Atlanta GA',
  metaDescription:
    'Injured in an Uber in Atlanta? Coverage depends on the app status at impact. We find the policy that applies. Free review — call (404) 394-9410 today.',
  label: 'Case type',
  deck: 'Uber carries a million-dollar policy — but only during part of the trip. Which part decides what your claim is worth.',
  cardBlurb:
    'Rideshare claims where coverage turns on whether the app was on and a passenger was aboard.',
  intro: [
    'A rideshare collision looks like an ordinary car accident and is not one. The vehicle is privately owned, the driver is an independent contractor, and the insurance that applies depends entirely on what the driver was doing at the moment of impact. The same crash can be a $25,000 claim or a $1,000,000 claim depending on a fact recorded in Uber’s app data and nowhere else.',
    'That is the whole battleground. If the app was off, only the driver’s personal auto policy applies — and most personal policies contain a livery exclusion that may leave a gap. If the app was on and the driver was waiting for a request, Uber provides contingent coverage at limited amounts. Once a ride has been accepted and through the end of the trip, a $1,000,000 third-party liability policy applies, along with uninsured and underinsured motorist coverage.',
    'Lawson Personal Injury Attorneys handles Uber claims by establishing the app status with evidence rather than accepting a characterization: trip records, the driver’s own app history, timestamps against the collision report, and where necessary a preservation demand to the company before the data ages out.',
  ],
  handles: [
    { title: 'Passenger injuries', body: 'If you were riding, you are almost certainly not at fault — and the trip-period policy is at its highest limits.' },
    { title: 'Struck by an Uber driver', body: 'Claims by other motorists, cyclists, and pedestrians, where app status still controls which policy responds.' },
    { title: 'Uber driver injured by another driver', body: 'Drivers have claims too, including under Uber’s UM/UIM coverage during a trip.' },
    { title: 'Uninsured and underinsured motorists', body: 'Uber’s trip-period UM/UIM coverage frequently exceeds anything the at-fault driver carries.' },
    { title: 'App-off and waiting-period gaps', body: 'The hardest coverage scenarios, where a personal policy’s livery exclusion may collide with Uber’s contingent coverage.' },
    { title: 'Assault and unsafe driver claims', body: 'Cases raising the company’s screening and response practices as well as the driver’s conduct.' },
    { title: 'Pickup and drop-off injuries', body: 'People hurt entering or exiting a vehicle stopped somewhere unsafe.' },
    { title: 'Multi-vehicle rideshare collisions', body: 'Crashes with several insurers, where establishing the order of events determines who pays.' },
  ],
  georgiaNote: {
    heading: 'The three coverage periods',
    body: [
      'Georgia regulates transportation network companies by statute, and Uber’s coverage tracks three distinct periods. App off: the driver is a private motorist and only their personal policy applies. App on but no ride accepted: contingent liability coverage applies at reduced limits, commonly $50,000 per person and $100,000 per accident. Ride accepted through drop-off: $1,000,000 in third-party liability, plus uninsured/underinsured motorist coverage.',
      'Because the difference between those tiers is enormous, the app status at the moment of impact is the single most valuable fact in the case. It lives in Uber’s records. A driver’s recollection, or an insurer’s summary of it, is not the same thing as the trip data.',
      'Georgia’s ordinary rules otherwise apply: two years to file (O.C.G.A. § 9-3-33), and modified comparative negligence with a 50 percent bar (O.C.G.A. § 51-12-33). As a passenger you are essentially never assigned fault, which is why passenger claims are often the cleanest liability cases in the practice.',
    ],
  },
  process: [
    { title: 'Free case review', body: 'What you were doing, what the driver was doing, and what the app was doing — the last one usually decides the value.' },
    { title: 'Locking down app data', body: 'Preservation demands for trip records and timestamps, matched against the collision report and your own ride receipt.' },
    { title: 'Identifying every policy', body: 'The rideshare policy, the driver’s personal policy, any other driver’s policy, and your own UM coverage.' },
    { title: 'Demand or suit', body: 'A demand against the correct layer of coverage, and suit inside the two-year deadline if it is not met honestly.' },
  ],
  faqs: [
    { q: 'I was a passenger. Whose insurance pays?', a: 'If the trip was underway, Uber’s $1,000,000 third-party liability policy applies — regardless of whether your driver or the other driver caused it. If the other driver was at fault and underinsured, Uber’s UM/UIM coverage can fill the gap. As a passenger you are effectively never assigned comparative fault.' },
    { q: 'How do you prove the app was on?', a: 'Through the company’s own records. Trip data, acceptance and drop-off timestamps, and GPS traces are all obtainable, and your ride receipt is useful corroboration. We send a written preservation demand early rather than relying on how an adjuster characterizes the driver’s status.' },
    { q: 'The Uber driver’s insurance denied the claim. Is that the end?', a: 'No, and it is common. Most personal auto policies contain a livery exclusion that denies coverage while driving for hire — which is exactly the situation the rideshare policy exists to cover. A denial from the personal carrier often points toward the correct policy rather than away from a claim.' },
    { q: 'Should I just accept what Uber’s insurer offers?', a: 'Not without review. Rideshare claims are handled by adjusters who deal with high volume and know most claimants do not know which coverage tier applies. A quick offer frequently reflects the lower waiting-period limits when the trip-period policy is the one actually in play.' },
    { q: 'Can I sue Uber itself?', a: 'Usually the claim runs against the insurance rather than the company, because drivers are classified as independent contractors. Claims aimed at Uber directly — negligent screening, or failure to act on complaints about a driver — exist but are harder, and depend heavily on the specific facts.' },
    { q: 'How long do I have to file?', a: 'Two years from the date of the collision, the same as any Georgia injury claim. The practical urgency is different though: app and trip data are held by a third party on its own retention schedule, so a preservation demand should go out well before the legal deadline is a concern.' },
  ],
  related: ['lyft-accidents', 'taxi-accidents', 'car-accidents'],
};

export const lyftAccidents: PracticePage = {
  slug: 'lyft-accidents',
  navLabel: 'Lyft Accidents',
  group: 'Motor Vehicle Accidents',
  h1: 'Atlanta Lyft Accident Lawyer',
  targetKeyword: 'Lyft Accident Lawyer Atlanta GA',
  metaTitle: 'Lyft Accident Lawyer Atlanta GA',
  metaDescription:
    'Hurt in a Lyft in Atlanta? Which policy pays depends on the app status at impact, and we establish it with trip data. Free review — (404) 394-9410 today.',
  label: 'Case type',
  deck: 'Lyft’s coverage works in tiers. Getting into the right tier is most of the work in these cases.',
  cardBlurb:
    'Lyft passenger and third-party claims, and the coverage tiers that decide what a case is worth.',
  intro: [
    'Lyft collisions raise the same structural question every rideshare case does: which insurance policy is on the hook. The driver owns the car and works as an independent contractor, so there is no single obvious insurer. What responds depends on the driver’s status in the app at the moment of impact, and the gap between the tiers is large enough that it usually matters more than any argument about fault.',
    'With the app off, the driver is simply a private motorist and their personal policy applies — often with a livery exclusion lurking in it. With the app on and no ride accepted, Lyft provides contingent liability coverage at limited amounts. From ride acceptance through drop-off, a $1,000,000 third-party liability policy applies, together with uninsured and underinsured motorist coverage.',
    'Lawson Personal Injury Attorneys treats the app status as a fact to be proven, not accepted. Trip records, acceptance and completion timestamps, GPS data, and your own ride receipt establish which tier applies, and a preservation demand goes out early so that data still exists when it is needed.',
  ],
  handles: [
    { title: 'Passenger injuries', body: 'Riders hurt during a trip, where liability is rarely in dispute and the highest coverage tier applies.' },
    { title: 'Collisions caused by a Lyft driver', body: 'Claims by other motorists, cyclists, and pedestrians struck by a driver on the platform.' },
    { title: 'Lyft drivers injured on the job', body: 'Drivers have their own claims, including under Lyft’s UM/UIM coverage during a trip.' },
    { title: 'Underinsured at-fault drivers', body: 'Where the other driver carries Georgia minimums, Lyft’s UM/UIM coverage is often what makes the claim whole.' },
    { title: 'Coverage denials and disputes', body: 'Personal carrier denies, rideshare carrier points back — resolving which policy actually responds.' },
    { title: 'Pickup and drop-off injuries', body: 'People hurt getting in or out of a vehicle stopped in an unsafe location.' },
    { title: 'Distracted driving claims', body: 'Drivers dividing attention between the road and the app, which is documented in the device data.' },
    { title: 'Serious and fatal rideshare collisions', body: 'Catastrophic injury and wrongful death claims against the trip-period policy.' },
  ],
  georgiaNote: {
    heading: 'Which policy responds, and when',
    body: [
      'Georgia’s transportation network company statutes require rideshare operators to carry coverage that steps up with the driver’s status. App off, the driver’s personal policy is the only one in play. App on and waiting, contingent coverage applies at reduced limits — commonly $50,000 per person and $100,000 per accident. From acceptance through drop-off, a $1,000,000 liability policy applies along with UM/UIM.',
      'The practical consequence is that the same collision can be worth wildly different amounts depending on a timestamp. That timestamp is held by Lyft, not by the driver and not by the adjuster, which is why the data request matters more here than in a standard auto case.',
      'Everything else follows ordinary Georgia law: a two-year filing deadline (O.C.G.A. § 9-3-33), and modified comparative negligence barring recovery at 50 percent fault (O.C.G.A. § 51-12-33). Passengers are essentially never assigned a share.',
    ],
  },
  process: [
    { title: 'Free case review', body: 'The trip, the collision, the injuries, and — critically — what the driver’s app status was when it happened.' },
    { title: 'Data preservation', body: 'Written demands for trip records and timestamps before they age off, matched against the report and your receipt.' },
    { title: 'Mapping the coverage', body: 'Rideshare policy, driver’s personal policy, other drivers’ policies, and your own UM — all identified before any demand goes out.' },
    { title: 'Demand or suit', body: 'Presenting the claim against the correct tier, and filing within two years if the number does not reflect the harm.' },
  ],
  faqs: [
    { q: 'Is a Lyft claim different from an Uber claim?', a: 'Structurally, no. Both operate under the same Georgia transportation network company framework and both carry $1,000,000 in third-party liability during an accepted trip, with reduced contingent coverage while a driver waits. The differences are procedural — how each company handles data requests and which insurer administers the claim.' },
    { q: 'I was a passenger and my driver was not at fault. Am I covered?', a: 'Yes. During a trip, Lyft’s coverage includes uninsured and underinsured motorist protection, so if the at-fault driver has no insurance or Georgia-minimum limits that do not cover your injuries, that coverage can respond. Your claim does not depend on your own driver being to blame.' },
    { q: 'What if the driver had not accepted a ride yet?', a: 'Then you are in the waiting period, where contingent coverage applies at substantially lower limits — commonly $50,000 per person. This is exactly why establishing the timestamp matters: a few minutes can be the difference between a $50,000 ceiling and a $1,000,000 one.' },
    { q: 'The driver’s personal insurer denied it. What now?', a: 'That is expected rather than alarming. Personal auto policies typically exclude driving for hire, so a denial usually confirms the rideshare policy is the one that should respond. The denial letter itself is often useful in establishing which coverage applies.' },
    { q: 'Do I need my ride receipt?', a: 'Keep it, yes. It gives independent confirmation of the trip, the time, the route, and the driver, and it is a useful cross-check against the records the company produces. Screenshots of the app around the time of the collision are worth saving too.' },
    { q: 'How much is a rideshare case worth?', a: 'It depends on the injury, the treatment, and the lost income like any injury claim — but the available coverage tier sets a practical ceiling. A serious injury during an accepted trip has room to be valued properly; the same injury during the waiting period may run into policy limits quickly.' },
  ],
  related: ['uber-accidents', 'taxi-accidents', 'car-accidents'],
};

export const taxiAccidents: PracticePage = {
  slug: 'taxi-accidents',
  navLabel: 'Taxi Accidents',
  group: 'Motor Vehicle Accidents',
  h1: 'Atlanta Taxi Accident Lawyer',
  targetKeyword: 'Taxi Accident Lawyer Atlanta GA',
  metaTitle: 'Taxi Accident Lawyer Atlanta GA',
  metaDescription:
    'Injured in a taxi in Atlanta? Cabs are common carriers owing their passengers a heightened duty of care. Free case review today — call (404) 394-9410.',
  label: 'Case type',
  deck: 'A taxi is a common carrier. Georgia holds it to a higher standard of care than an ordinary driver.',
  cardBlurb:
    'Taxi and airport shuttle claims, where common carrier duties and commercial policies apply.',
  intro: [
    'Taxis occupy a different legal category from rideshare vehicles, and it works in a passenger’s favor. A cab operating for hire is a common carrier, and Georgia holds common carriers to an elevated standard: extraordinary diligence in protecting the people they transport, rather than the ordinary care every driver owes. That standard applies to how the vehicle is driven, how it is maintained, and where passengers are picked up and set down.',
    'The insurance picture is also different. Taxi companies are generally required to carry commercial liability coverage well above Georgia’s personal auto minimums, and there is usually a company behind the driver rather than an independent contractor arrangement designed to keep the platform at arm’s length. That means respondeat superior liability, and it means claims aimed at the company’s own hiring, training, and maintenance decisions.',
    'Lawson Personal Injury Attorneys handles taxi claims for passengers, for other motorists, and for pedestrians and cyclists struck by cabs — including the airport and hotel shuttle operations that make up a large share of this work in Atlanta.',
  ],
  handles: [
    { title: 'Passenger injuries', body: 'Collisions, sudden stops, and injuries during a fare, all measured against the common carrier standard.' },
    { title: 'Airport and hotel shuttles', body: 'High-volume operations around Hartsfield-Jackson with commercial policies and corporate operators behind them.' },
    { title: 'Struck by a taxi', body: 'Claims by other drivers, cyclists, and pedestrians, including at pickup zones and curbside stops.' },
    { title: 'Unsafe pickup and drop-off', body: 'Passengers discharged into traffic, onto uneven ground, or somewhere they had to cross unsafely.' },
    { title: 'Vehicle maintenance failures', body: 'Brake, tire, and inspection records showing deferred repairs on a vehicle carrying paying passengers.' },
    { title: 'Negligent hiring and supervision', body: 'Claims against the company where the driver’s record should have kept them off the road.' },
    { title: 'Uninsured and underinsured drivers', body: 'Where another motorist caused it and cannot cover the harm, UM coverage becomes central.' },
    { title: 'Assault and passenger safety claims', body: 'Cases raising the operator’s screening and response practices alongside the driver’s conduct.' },
  ],
  georgiaNote: {
    heading: 'The common carrier standard',
    body: [
      'Georgia imposes a heightened duty on carriers of passengers: a common carrier must exercise extraordinary diligence to protect the lives and persons of its passengers (O.C.G.A. § 46-9-132). That is a meaningfully higher bar than the ordinary care a private driver owes, and it applies for as long as the passenger relationship lasts — including while boarding and alighting.',
      'Practically, that means conduct a jury might excuse in a private motorist can be negligence in a cab driver. It also means the company’s systems are in play: how it screens drivers, how it maintains vehicles, and how it responds to complaints all bear on whether extraordinary diligence was exercised.',
      'The ordinary Georgia deadlines apply — two years for personal injury under O.C.G.A. § 9-3-33 — with the usual caveat that if a government-operated vehicle or a public airport authority is involved, a much shorter ante litem notice may be required.',
    ],
  },
  process: [
    { title: 'Free case review', body: 'The trip, the collision, and who actually operated the vehicle — driver, company, or contracted operator.' },
    { title: 'Preservation and records', body: 'Dispatch logs, in-vehicle camera footage, maintenance history, and the driver’s qualification file.' },
    { title: 'Applying the higher standard', body: 'Building the case against the extraordinary diligence bar rather than ordinary negligence.' },
    { title: 'Demand or suit', body: 'A demand against the commercial policy, and suit within two years if it is not met honestly.' },
  ],
  faqs: [
    { q: 'Is a taxi claim better than a rideshare claim?', a: 'Often, in two respects. Taxis are common carriers held to extraordinary diligence rather than ordinary care, and there is usually a company directly liable for the driver rather than an independent contractor structure. Commercial policies also tend to be substantial. The trade-off is that taxi operators are frequently more experienced at defending claims.' },
    { q: 'What does "extraordinary diligence" actually mean?', a: 'It is a higher standard than the ordinary care every driver owes. Georgia law requires a common carrier to protect its passengers with a degree of care that a very prudent operator would use. In practice it means conduct that might be excused in a private motorist — an abrupt maneuver, a stop in a poor location — can support liability here.' },
    { q: 'I was hurt getting out of the cab, not in a crash. Do I have a claim?', a: 'Possibly. The carrier’s duty extends to boarding and alighting, so discharging a passenger into a traffic lane, onto broken pavement, or somewhere requiring an unsafe crossing can be negligence. The location the driver chose is part of the claim.' },
    { q: 'Who do I sue — the driver or the company?', a: 'Frequently both. The driver is liable for their own negligence, and the company is generally liable for a driver acting within the scope of employment, plus separately liable for its own hiring, training, and maintenance decisions. Sorting out the operator structure is part of the early investigation.' },
    { q: 'Is there video?', a: 'Many cabs and nearly all airport shuttles carry cameras, and Hartsfield-Jackson has extensive coverage of its pickup zones. All of it is on a retention schedule, and much of it overwrites within days, so a written preservation demand needs to go out quickly.' },
    { q: 'How long do I have to file?', a: 'Two years from the date of injury for a Georgia personal injury claim. If an airport authority or another government entity is involved, an ante litem notice may be due within six to twelve months, which is a much tighter constraint.' },
  ],
  related: ['uber-accidents', 'lyft-accidents', 'bus-accidents'],
};
