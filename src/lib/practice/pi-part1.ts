import type { PracticePage } from './types';

/**
 * Case-type pages, part 1 — car, truck, and motorcycle.
 *
 * Every legal statement here is written to Georgia law and cites the statute
 * where a reader benefits from the reference. TODO(client): the whole registry
 * should get an attorney read-through before launch; nothing in it is a
 * substitute for Yari's own judgment about how the firm describes its work.
 */

export const carAccidents: PracticePage = {
  slug: 'car-accidents',
  navLabel: 'Car Accidents',
  group: 'Motor Vehicle Accidents',
  featured: true,
  h1: 'Atlanta Car Accident Lawyer',
  targetKeyword: 'Car Accident Lawyer Atlanta GA',
  metaTitle: 'Car Accident Lawyer Atlanta GA',
  metaDescription:
    'Injured in an Atlanta car accident? We handle Georgia crash and uninsured motorist claims with no fee unless we win. Call (678) 446-3655 for a free review.',
  label: 'Case type',
  deck: 'The insurance company opened a file on your crash within hours. You should have someone doing the same for you.',
  cardBlurb:
    'Rear-end, intersection, hit-and-run, and uninsured motorist claims across metro Atlanta and Gwinnett County.',
  intro: [
    'A car accident claim in Georgia is a fight about two things: who caused the collision, and what the harm is actually worth. The other driver’s insurer starts working on both the day the crash is reported. An adjuster pulls the police report, reviews the property damage photographs, and starts building the argument that the impact was minor, that the injuries came from something else, or that you share enough of the blame to cut the payout down.',
    'Most people meet that effort alone, and usually at the worst possible moment — in pain, out of work, and holding an estimate for a car they still owe money on. The recorded statement an adjuster asks for in the first week is not a formality. Neither is the medical authorization that lets them read a decade of your health history looking for a pre-existing condition to blame.',
    'Lawson Personal Injury Attorneys handles the claim from that point forward. We collect the evidence while it still exists, document the injury properly through your treating providers, identify every policy that could apply — including your own uninsured motorist coverage — and put a demand together that reflects the whole loss, not just the emergency room bill.',
  ],
  handles: [
    {
      title: 'Rear-end collisions',
      body: 'The most common crash on I-285 and Georgia 316, and the one insurers most often try to reduce to a soft-tissue file worth a few thousand dollars.',
    },
    {
      title: 'Intersection and left-turn crashes',
      body: 'Disputed-fault collisions where the case usually turns on signal timing, independent witnesses, and nearby camera footage that is overwritten within days.',
    },
    {
      title: 'Hit-and-run',
      body: 'When the at-fault driver is never identified, the claim generally shifts to your own uninsured motorist coverage — which has its own notice requirements.',
    },
    {
      title: 'Uninsured and underinsured motorist claims',
      body: 'Georgia only requires 25/50/25 liability limits. When the at-fault driver carries the minimum and your injuries do not fit inside it, UM coverage is what is left.',
    },
    {
      title: 'Rideshare and delivery-vehicle collisions',
      body: 'Uber, Lyft, and delivery drivers carry layered coverage that changes depending on whether the app was on and a passenger was aboard.',
    },
    {
      title: 'Distracted and impaired driving',
      body: 'Phone records, receipts, and citation history that establish more than ordinary negligence and can support a claim for punitive damages.',
    },
    {
      title: 'Multi-vehicle pileups',
      body: 'Chain-reaction crashes on the Perimeter where several insurers each argue that someone else in the line started it.',
    },
    {
      title: 'Passenger injury claims',
      body: 'If you were a passenger, you were almost certainly not at fault — and you may have a claim against more than one driver.',
    },
  ],
  georgiaNote: {
    heading: 'What Georgia law does to a car accident claim',
    body: [
      'Georgia gives you two years from the date of the crash to file a personal injury lawsuit (O.C.G.A. § 9-3-33). Property damage carries four. Those deadlines sound generous until you realize how much of the evidence — intersection camera footage, vehicle event data, a witness who still remembers the light — disappears in the first month.',
      'Georgia also follows modified comparative negligence (O.C.G.A. § 51-12-33). If you are found partly responsible, your recovery drops by your percentage of fault, and if you are found 50 percent or more responsible, you recover nothing. That rule is exactly why an adjuster asks open-ended questions about what you could have done differently. A few percentage points of assigned blame is real money, and at the margin it is the whole case.',
      'If the crash involved a city, county, or state vehicle, a much shorter ante litem notice deadline applies — six months for a municipality, twelve for a county or the State of Georgia. Miss it and the claim is gone regardless of how clear the fault was.',
    ],
  },
  process: [
    {
      title: 'Free case review',
      body: 'Tell us what happened. We explain what the claim looks like, what it is likely worth, and whether you need a lawyer at all — some cases genuinely do not.',
    },
    {
      title: 'Evidence and treatment',
      body: 'We send preservation letters, pull the report and any available footage, and make sure your treatment is documented in a way an adjuster cannot dismiss.',
    },
    {
      title: 'Demand and negotiation',
      body: 'Once your condition is stable, we assemble the medical record, the wage loss, and the human cost into a demand and negotiate against every applicable policy.',
    },
    {
      title: 'Suit if the number is wrong',
      body: 'If the offer does not reflect the harm, we file within the two-year deadline and try the case. Insurers price a file differently once that is credible.',
    },
  ],
  faqs: [
    {
      q: 'What if the other driver had no insurance?',
      a: 'Then the claim usually moves to your own uninsured motorist (UM) coverage, which Georgia insurers must offer and most drivers carry without realizing it. Using it does not raise your rates for someone else’s fault. UM claims have their own notice requirements and your insurer is, at that point, effectively on the other side — so it is worth having the claim handled the same way you would handle one against a stranger.',
    },
    {
      q: 'How long do I have to file a car accident claim in Georgia?',
      a: 'Two years from the date of the crash for personal injury, and four years for property damage (O.C.G.A. § 9-3-33). If a government vehicle was involved, an ante litem notice comes due far sooner — six months for a city, twelve months for a county or the state. Waiting also costs you evidence: camera footage is typically overwritten in days or weeks.',
    },
    {
      q: 'Do I have to go to court?',
      a: 'Usually not. The large majority of Georgia car accident claims resolve through negotiation without a trial. But the settlement value of a case is set partly by whether the insurer believes you are willing and able to try it. Preparing a case as though it will be tried is what makes it settle for a fair number.',
    },
    {
      q: 'The adjuster wants a recorded statement. Should I give one?',
      a: 'Not before you have talked to a lawyer. You have no legal obligation to give a recorded statement to the other driver’s insurer, and the questions are written to produce quotable answers about your speed, your attention, and how you felt at the scene — before you knew the extent of your injuries. Your own insurer is different; your policy generally requires cooperation with them.',
    },
    {
      q: 'What is my car accident case worth?',
      a: 'It depends on the severity and permanence of the injury, the total medical treatment, lost income, the available insurance limits, and how clear fault is. Anyone who gives you a number in the first phone call is guessing. What we can tell you early is the realistic range and what would move the case toward the top of it.',
    },
    {
      q: 'What does it cost to hire you?',
      a: 'Nothing up front. We work on a contingency fee — the fee is a percentage of what we recover, and if there is no recovery there is no fee. Case expenses are explained in writing before the representation begins, so nothing about the arrangement is a surprise at the end.',
    },
  ],
  related: ['truck-accidents', 'pedestrian-accidents', 'motorcycle-accidents'],
};

export const truckAccidents: PracticePage = {
  slug: 'truck-accidents',
  navLabel: 'Truck Accidents',
  group: 'Motor Vehicle Accidents',
  featured: true,
  h1: 'Atlanta Truck Accident Lawyer',
  targetKeyword: 'Truck Accident Lawyer Atlanta GA',
  metaTitle: 'Truck Accident Lawyer Atlanta GA',
  metaDescription:
    'Hit by a commercial truck in Atlanta? We pursue trucking companies under federal safety rules. Free case review, no fee unless we win — (678) 446-3655.',
  label: 'Case type',
  deck: 'A trucking company can have investigators at the scene before the road reopens. The evidence that decides your case starts disappearing that fast.',
  cardBlurb:
    'Commercial trucking claims governed by federal safety regulations — jackknife, underride, and blind-spot collisions.',
  intro: [
    'A collision with an eighty-thousand-pound tractor-trailer is not a bigger car accident. It is a different kind of case, against a different kind of opponent, under a different body of law. Interstate motor carriers answer to the Federal Motor Carrier Safety Administration, and those regulations govern how long a driver may be behind the wheel, how a load must be secured, how a carrier must screen and supervise the people it hires, and what records it has to keep.',
    'That regulatory layer is an advantage, but only if someone uses it quickly. Electronic logging data, engine control module downloads, dispatch messages, drug and alcohol testing records, maintenance files, and the driver qualification file are all discoverable — and all subject to retention periods that let them be destroyed on a schedule if no one has demanded they be preserved.',
    'Meanwhile the carrier’s rapid-response team is already working. It is standard practice in the trucking industry to send an adjuster and often an accident reconstructionist to the scene the same day. Lawson Personal Injury Attorneys moves on the same timeline: preservation letters out immediately, the vehicle and its data secured, and the case built against the carrier and its insurer rather than only the driver.',
  ],
  handles: [
    {
      title: 'Jackknife and rollover crashes',
      body: 'Often traceable to speed for conditions, brake maintenance, or an improperly distributed load rather than simple driver error.',
    },
    {
      title: 'Underride collisions',
      body: 'Catastrophic by design. Rear and side guard condition, conspicuity tape, and lighting compliance all become central issues.',
    },
    {
      title: 'Blind-spot and wide-turn collisions',
      body: 'Mirror configuration, camera systems, and whether the driver was trained on the equipment they were operating that day.',
    },
    {
      title: 'Hours-of-service violations',
      body: 'Electronic logging device data compared against fuel receipts, tolls, and dispatch records to show a driver who should not have been driving.',
    },
    {
      title: 'Improper loading and cargo shift',
      body: 'Liability that frequently reaches past the carrier to the shipper or the loading facility that packed the trailer.',
    },
    {
      title: 'Negligent hiring, training, and retention',
      body: 'A claim against the company itself when the driver qualification file shows a history the carrier should have acted on.',
    },
    {
      title: 'Maintenance and equipment failure',
      body: 'Brake, tire, and inspection records showing deferred repairs on a truck that should have been out of service.',
    },
    {
      title: 'Delivery and box-truck collisions',
      body: 'Local commercial vehicles that fall outside some federal rules but still carry substantial policies and employer liability.',
    },
  ],
  georgiaNote: {
    heading: 'Why the trucking company is the real defendant',
    body: [
      'Under respondeat superior, a motor carrier is responsible for the negligence of a driver acting within the scope of employment. That matters practically, because the driver may carry nothing while the carrier’s policy runs into the millions — federal minimums start at $750,000 for interstate carriers and go higher for hazardous cargo.',
      'Georgia also recognizes claims aimed at the company’s own conduct: negligent hiring, negligent training, negligent supervision, and negligent entrustment. Those are separate from the driver’s negligence and they are frequently the more valuable claims, because they reach the decisions that put an unqualified driver on Georgia 400 in the first place.',
      'The two-year filing deadline under O.C.G.A. § 9-3-33 applies here as well, and Georgia’s 50 percent comparative fault bar applies with it. Carriers litigate fault hard for exactly that reason — pushing a share of blame onto the injured driver is the cheapest defense available to them.',
    ],
  },
  process: [
    {
      title: 'Immediate preservation',
      body: 'Spoliation letters to the carrier, the insurer, and the tow yard demanding the truck, the ECM data, and the electronic logs be held.',
    },
    {
      title: 'Investigation',
      body: 'Reconstruction where warranted, plus the driver qualification file, maintenance history, dispatch records, and drug and alcohol testing results.',
    },
    {
      title: 'Building the full claim',
      body: 'Identifying every liable party — driver, carrier, broker, shipper, maintenance contractor — and every policy stacked behind them.',
    },
    {
      title: 'Negotiation or suit',
      body: 'A demand supported by the regulatory violations, and a filed case if the carrier’s insurer will not value the harm honestly.',
    },
  ],
  faqs: [
    {
      q: 'Who is actually liable in a truck accident?',
      a: 'Often more than one party. The driver is liable for their own negligence, and the motor carrier is generally liable for the driver’s conduct in the scope of employment — plus separately liable for its own decisions in hiring, training, supervising, and maintaining equipment. Depending on the facts, the shipper, the freight broker, the loading facility, or a maintenance contractor can also be in the case.',
    },
    {
      q: 'What is the black box, and can we get the data?',
      a: 'Commercial trucks carry an engine control module that records speed, braking, throttle, and fault codes, and most carriers also run electronic logging devices tracking hours of service. Both are obtainable, but only if preservation is demanded early. Data can be overwritten in normal operation and retention periods are short, which is why a spoliation letter on day one matters more in trucking cases than almost anywhere else.',
    },
    {
      q: 'How do federal regulations help my case?',
      a: 'The Federal Motor Carrier Safety Regulations set enforceable standards for driving hours, inspections, maintenance, cargo securement, and driver qualification. A documented violation is powerful evidence of negligence and frequently reframes the case from an argument about a moment of inattention into a record of a company that cut corners on schedule.',
    },
    {
      q: 'The insurance adjuster called the next day with an offer. Should I take it?',
      a: 'A fast offer usually means the carrier has already assessed its exposure and would like to close the file before you know the extent of your injuries. Once you sign a release the claim is over, including for treatment you have not had yet. Have the offer reviewed before you respond to it.',
    },
    {
      q: 'How long do truck accident cases take?',
      a: 'Longer than a routine car accident claim, generally. There are more parties, more records, and more insurance. The first requirement is medical: your case cannot be valued honestly until your treating providers can say where you are going to end up. After that, resolution depends on whether the carrier’s insurer negotiates in good faith.',
    },
    {
      q: 'What if the truck driver was not from Georgia?',
      a: 'That is ordinary in interstate trucking and does not prevent the case from being brought here. A crash on Georgia roads is generally litigated in Georgia, and interstate carriers are required to be amenable to suit where they operate. Which county the case belongs in is a question we work through as part of the investigation.',
    },
  ],
  related: ['car-accidents', 'wrongful-death', 'motorcycle-accidents'],
};

export const motorcycleAccidents: PracticePage = {
  slug: 'motorcycle-accidents',
  navLabel: 'Motorcycle Accidents',
  group: 'Motor Vehicle Accidents',
  featured: true,
  h1: 'Atlanta Motorcycle Accident Lawyer',
  targetKeyword: 'Motorcycle Accident Lawyer Atlanta GA',
  metaTitle: 'Motorcycle Accident Lawyer Atlanta GA',
  metaDescription:
    'Motorcycle crash in Atlanta or Gwinnett County? We push back on rider bias and build the claim your injuries deserve. Free case review — call (678) 446-3655.',
  label: 'Case type',
  deck: 'Riders start these cases behind. The first job is dismantling the assumption that you were the reckless one.',
  cardBlurb:
    'Left-turn, lane-change, and dooring crashes — built to overcome the bias riders face from adjusters and juries.',
  intro: [
    'Motorcycle cases carry a problem no other injury case does: the assumption. Adjusters, and often jurors, arrive with a mental image of riders as fast and reckless, and that image does real work against a claim before anyone looks at the evidence. It shows up as a low first offer, an aggressive comparative fault argument, and questions about your speed that continue long after the physical evidence has answered them.',
    'The facts are usually the opposite. A large share of motorcycle collisions in metro Atlanta involve a driver turning left across a rider’s path or changing lanes into a motorcycle they never looked for. The rider had a fraction of a second and no crumple zone. What follows tends to be severe — orthopedic injuries, road rash requiring grafts, traumatic brain injury — and expensive in ways that outlast the treatment.',
    'The work is to replace the assumption with evidence: scene measurements, sightline analysis, helmet and gear documentation, and where it is warranted, accident reconstruction that establishes the timeline the driver is describing was not physically possible. Lawson Personal Injury Attorneys builds motorcycle claims knowing that the bias is the first defense we have to beat.',
  ],
  handles: [
    {
      title: 'Left-turn collisions',
      body: 'The classic and most common motorcycle case — a driver turning across the rider’s lane, usually with a "I never saw them" account.',
    },
    {
      title: 'Lane-change and blind-spot crashes',
      body: 'Drivers merging into a motorcycle they never checked for, often on the Downtown Connector and I-285.',
    },
    {
      title: 'Dooring',
      body: 'A parked vehicle’s door opened into a rider’s path, which is negligence on the part of the person who opened it.',
    },
    {
      title: 'Road hazards and defective surfaces',
      body: 'Unmarked pavement drop-offs, potholes, and debris — claims that may run against a contractor or a government entity with short notice deadlines.',
    },
    {
      title: 'Rear-end collisions at stops',
      body: 'A struck rider is thrown clear; injuries are routinely severe even when the vehicle damage is modest.',
    },
    {
      title: 'Uninsured and underinsured drivers',
      body: 'Georgia’s 25/50/25 minimums rarely cover a serious motorcycle injury, which makes UM coverage central to these cases.',
    },
    {
      title: 'Defective motorcycle components',
      body: 'Brake, tire, and steering failures that shift the claim toward a product liability theory against a manufacturer.',
    },
    {
      title: 'Catastrophic and permanent injury',
      body: 'Amputation, spinal injury, and traumatic brain injury claims where future care and lost earning capacity are the largest components.',
    },
  ],
  georgiaNote: {
    heading: 'Georgia rules riders should know',
    body: [
      'Georgia has a universal helmet law: every rider and passenger must wear an approved helmet (O.C.G.A. § 40-6-315). If you were wearing one, that fact takes an argument away from the defense early. If you were not, the case is harder but not over — the question becomes what role, if any, the helmet actually played in the specific injuries you sustained.',
      'Lane splitting is not legal in Georgia, and two motorcycles may only share a lane by mutual consent (O.C.G.A. § 40-6-312). Riders are otherwise entitled to the full use of a lane, and a driver who crowds a motorcycle out of one is at fault in the same way they would be with any other vehicle.',
      'Georgia’s modified comparative negligence rule matters more here than anywhere. Because a percentage of fault assigned to the rider reduces the recovery dollar for dollar — and eliminates it entirely at 50 percent — the defense invests heavily in shifting a share onto the rider. Answering that argument with physical evidence is most of the case.',
    ],
  },
  process: [
    {
      title: 'Free case review',
      body: 'We talk through the crash, the injuries, and the coverage available — including your own UM policy, which often matters most here.',
    },
    {
      title: 'Scene and evidence work',
      body: 'Photographs, measurements, sightlines, gear and helmet preservation, and reconstruction where speed or timing is disputed.',
    },
    {
      title: 'Documenting the full injury',
      body: 'Orthopedic and neurological treatment, scarring, and the future care and earning capacity that follow a permanent injury.',
    },
    {
      title: 'Demand, negotiation, suit',
      body: 'A demand that confronts the bias directly with evidence — and a filed case when the insurer keeps pricing the rider, not the crash.',
    },
  ],
  faqs: [
    {
      q: 'I was not wearing a helmet. Do I still have a case?',
      a: 'Very likely, though it is a harder one. Georgia requires helmets, so the defense will raise it — but the argument only reaches injuries a helmet would actually have prevented. It has little to do with a broken leg or a shoulder injury. It does not automatically bar the claim, and it does not decide fault for the collision itself.',
    },
    {
      q: 'The driver says they never saw me. Does that help or hurt?',
      a: 'It helps. "I never saw the motorcycle" is not a defense in Georgia; drivers have a duty to look for and yield to traffic that is lawfully there, motorcycles included. That statement is closer to an admission of failing to keep a proper lookout than an excuse, and it is worth locking down early before it gets refined.',
    },
    {
      q: 'How do you deal with the bias against riders?',
      a: 'With evidence rather than argument. Documented speed, physical scene measurements, the driver’s own statements, and where appropriate a reconstruction expert. Once the timeline is established objectively, the assumption stops doing work. Presenting the rider as an ordinary person with an ordinary commute, rather than as a category, is the rest of it.',
    },
    {
      q: 'The at-fault driver’s policy will not cover my injuries. What now?',
      a: 'This is common, because Georgia only requires $25,000 per person in bodily injury coverage and serious motorcycle injuries pass that quickly. The next layer is usually your own uninsured/underinsured motorist coverage, and depending on how your policies are written, more than one may apply. Identifying all available coverage is one of the first things we do.',
    },
    {
      q: 'How long do I have to file?',
      a: 'Two years from the date of the crash for a personal injury claim in Georgia (O.C.G.A. § 9-3-33). If a government entity contributed — a road defect, for instance — an ante litem notice can be due within six to twelve months, which is much sooner than most people expect.',
    },
    {
      q: 'What is a motorcycle accident case worth?',
      a: 'Motorcycle injuries tend to be more severe than car accident injuries, so the medical treatment, permanent impairment, and lost earning capacity are usually larger. But value is also capped in practice by available insurance. An honest estimate needs the medical picture and the full coverage picture, and both take some weeks to assemble.',
    },
  ],
  related: ['car-accidents', 'wrongful-death', 'pedestrian-accidents'],
};
