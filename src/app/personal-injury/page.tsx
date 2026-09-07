import Link from 'next/link';
import CTABand from '@/components/CTABand';
import ChipLinks from '@/components/ChipLinks';
import DeadlineNotice from '@/components/DeadlineNotice';
import Hero from '@/components/Hero';
import ImageBand from '@/components/ImageBand';
import JsonLd from '@/components/JsonLd';
import PracticeGrid from '@/components/PracticeGrid';
import ProcessSteps from '@/components/ProcessSteps';
import Reveal from '@/components/Reveal';
import Section from '@/components/Section';
import { firmProcess } from '@/lib/content';
import { photos } from '@/lib/images';
import { breadcrumbSchema, pageMeta } from '@/lib/seo';
import { serviceAreaChips } from '@/lib/site';

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Personal Injury', href: '/personal-injury' },
];

export const metadata = pageMeta({
  title: 'Personal Injury Lawyer Atlanta GA',
  description:
    'Personal injury lawyer serving Atlanta and Gwinnett County, GA. We handle the insurer, the evidence, and the deadlines. Free case review — call (404) 394-9410.',
  path: '/personal-injury',
});

const recoverable = [
  'Emergency treatment, hospitalization, surgery, and follow-up care',
  'Physical therapy, rehabilitation, and future medical treatment',
  'Wages lost while you could not work, and reduced earning capacity going forward',
  'Pain, suffering, and the loss of the things you used to be able to do',
  'Disfigurement, scarring, and permanent impairment',
  'Property damage, including the diminished value of a repaired vehicle',
  'Out-of-pocket costs — transportation to appointments, household help, medical equipment',
  'In cases of willful or reckless conduct, punitive damages',
];

export default function PersonalInjuryPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />

      <Hero
        crumbs={crumbs}
        image={photos.highwayAmber}
        label="Personal injury"
        title={
          <>
            Atlanta <span className="em-crest">Personal Injury</span> Lawyer
          </>
        }
        deck="If someone else's carelessness hurt you, Georgia law gives you a claim. What it does not do is make the claim easy, or the deadline forgiving."
      />

      <Section tone="night">
        <Reveal className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="label mb-4 text-crest">The basics</p>
            <h2 className="display-md max-w-[20ch] text-white">What counts as a personal injury case</h2>
            <span className="underline-crest mt-6" aria-hidden="true" />
            <div className="mt-8 space-y-5 text-[17px] leading-[1.75] text-smoke">
              <p className="max-w-measure">
                A personal injury claim exists when someone owed you a duty of care, failed to meet it,
                and that failure caused you harm. Stated that plainly it sounds abstract. In practice it
                is a driver who looked at a phone instead of the road, a store that left a spill for
                forty minutes, a trucking company that put a driver past their legal hours, or a
                landlord who knew a stairwell light had been out for a month.
              </p>
              <p className="max-w-measure">
                What makes it a case rather than a misfortune is that someone else’s choice caused it,
                and Georgia law lets you ask them to make it right. What makes it difficult is that the
                person you are actually asking is an insurance company, whose adjuster handles hundreds
                of these a year while you handle one, in pain, for the first time.
              </p>
              <p className="max-w-measure">
                A lawyer’s job in that gap is not mysterious. It is to preserve the evidence before it
                is gone, document the injury so it cannot be waved away, identify every policy that
                could pay, calculate what the loss actually comes to over a lifetime rather than a
                billing cycle, and be genuinely willing to try the case if the offer does not reflect
                it. That last part is what moves the number.
              </p>
            </div>
          </div>

          <div className="lg:pt-16">
            <DeadlineNotice tone="night" />
          </div>
        </Reveal>
      </Section>

      <Section
        tone="bone"
        label="Case types"
        title="Every way these cases arrive"
        intro="Each has its own evidence, its own defenses, and its own corner of Georgia law. Some — workers' compensation, malpractice, bad faith — run on deadlines of their own."
        split
      >
        <PracticeGrid tone="bone" all />
      </Section>

      <Section
        tone="night"
        label="Damages"
        title="What a claim can recover"
        intro="Georgia allows recovery for the economic loss and for the human cost. The second is harder to document and is where most under-settled cases lose their value."
        split
      >
        <ul className="grid gap-x-12 gap-y-4 sm:grid-cols-2">
          {recoverable.map((item, i) => (
            <Reveal
              key={item}
              as="li"
              delay={i * 0.03}
              className="relative border-b border-white/10 pb-4 pl-7 text-[16px] leading-relaxed text-smoke"
            >
              <span className="absolute left-0 top-0 text-crest" aria-hidden="true">
                —
              </span>
              {item}
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section
        tone="raised"
        label="The process"
        title="How a case actually moves"
        intro="Four stages. The first one costs nothing and commits you to nothing."
        split
      >
        <ProcessSteps steps={firmProcess} tone="night" />
      </Section>

      <ImageBand
        photo={photos.atlantaAerial}
        label="Metro Atlanta"
        heading="One office, and the whole metro to work in."
        body="From the Lawrenceville square we take cases across Gwinnett, Fulton, DeKalb, Cobb, Clayton, Henry, Barrow, and Hall counties."
        height="sm"
      />

      <Section tone="bone">
        <Reveal className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="label mb-4 text-crest-deep">A fair question</p>
            <h2 className="display-md max-w-[20ch] text-night">
              Why hire a lawyer instead of handling it yourself?
            </h2>
            <span className="mt-6 block h-[3px] w-20 bg-crest-deep" aria-hidden="true" />
            <div className="mt-8 space-y-5 text-[17px] leading-[1.75] text-ash">
              <p className="max-w-measure">
                Sometimes you should not. A fender-bender with no injury and a clear-liability property
                damage claim is usually faster and cheaper to handle yourself, and a firm that tells you
                otherwise is selling you something. We will say so on the phone.
              </p>
              <p className="max-w-measure">
                The calculation changes when there is real medical treatment, when fault is disputed,
                when the at-fault driver is uninsured, when a commercial vehicle or a business is
                involved, or when the injury is permanent. In those cases the questions that determine
                what you recover — which policies apply, how a treatment gap is characterized, what
                future care costs, whether a comparative fault argument sticks — are not things most
                people can evaluate against a professional adjuster.
              </p>
              <p className="max-w-measure">
                The other half is structural. Contingency fees mean the cost of finding out is zero. A
                consultation does not obligate you to hire anyone, and if the honest answer is that the
                case does not need a lawyer, that is the answer you will get.
              </p>
            </div>
            <Link href="/contact" className="btn-outline-dark mt-9">
              Ask us about your case
            </Link>
          </div>

          <div className="lg:pt-14">
            <div className="border border-night/15 bg-bone-warm p-8">
              <p className="label mb-5 text-crest-deep">Where we practice</p>
              <ChipLinks chips={serviceAreaChips} tone="bone" />
              <p className="mt-7 max-w-measure text-[15px] leading-relaxed text-ash">
                One office, on the square in Lawrenceville, serving the metro Atlanta counties and the
                cities inside them.
              </p>
            </div>
          </div>
        </Reveal>
      </Section>

      <CTABand />
    </>
  );
}
