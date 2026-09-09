import Image from 'next/image';
import Link from 'next/link';
import CTABand from '@/components/CTABand';
import ImageBand from '@/components/ImageBand';
import ChipLinks from '@/components/ChipLinks';
import FAQAccordion from '@/components/FAQAccordion';
import Hero from '@/components/Hero';
import JsonLd from '@/components/JsonLd';
import PracticeGrid from '@/components/PracticeGrid';
import ProcessSteps from '@/components/ProcessSteps';
import Reveal from '@/components/Reveal';
import ReviewsWidget from '@/components/ReviewsWidget';
import Section from '@/components/Section';
import TrustBar from '@/components/TrustBar';
import { differentiators, firmProcess, homepageFaqs } from '@/lib/content';
import { photos } from '@/lib/images';
import { locationPages } from '@/lib/locations';
import { faqSchema, legalServiceSchema, pageMeta } from '@/lib/seo';
import { serviceAreaChips, site } from '@/lib/site';

export const metadata = {
  ...pageMeta({
    title: 'Personal Injury Attorney Lawrenceville GA',
    description:
      'Atlanta personal injury attorney handling car, truck, motorcycle and pedestrian accidents, slip and fall, and wrongful death. Free case review, no fee.',
    path: '/',
  }),
  // The homepage sets its own full title rather than taking the template.
  title: `Personal Injury Attorney Lawrenceville GA | ${site.name}`,
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={[legalServiceSchema(), faqSchema(homepageFaqs)]} />

      <Hero
        size="home"
        image={photos.atlantaSkyline}
        label="Lawrenceville · Gwinnett County · Metro Atlanta"
        title={
          <>
            Lawrenceville <span className="em-crest">Personal Injury</span> Attorney
          </>
        }
        deck="Someone else's negligence put you here. Lawson Personal Injury Attorneys handles the insurance company, the evidence, and the deadlines — so you can put your attention back on getting better."
      />

      <TrustBar />

      <Section
        tone="night"
        label="What we handle"
        title="How people get hurt, and what we do about it"
        intro={
          <>
            <p className="mb-4">
              We represent people who have been seriously hurt — in vehicle collisions, on unsafe
              property, and at work — and families who have lost someone. Every case comes down to the
              same two questions: who is responsible, and what is the harm actually worth?
            </p>
            <p>These are the cases we are asked about most. Call and we will point you the right way.</p>
          </>
        }
        split
      >
        <PracticeGrid tone="night" />
      </Section>

      <Section
        tone="bone"
        label="Why Lawson"
        title="What you should expect from a firm this size"
        intro="Bigger is not better. What matters is whether the person handling your case knows it in detail and answers the phone."
        split
      >
        <ul className="grid gap-px bg-night/10 sm:grid-cols-2">
          {differentiators.map((d, i) => (
            <Reveal key={d.title} as="li" delay={i * 0.06} className="bg-bone p-8 lg:p-9">
              <span className="block h-[3px] w-10 bg-crest-deep" aria-hidden="true" />
              <h3 className="mt-6 font-display text-[1.4rem] text-night">{d.title}</h3>
              <p className="mt-4 leading-relaxed text-ash">{d.body}</p>
            </Reveal>
          ))}
        </ul>
      </Section>

      <ImageBand
        photo={photos.highwayAmber}
        label="Why it matters"
        heading="The evidence is disappearing while you recover."
        body="Surveillance footage is overwritten in weeks. Vehicles get repaired or scrapped. Witnesses move. Most of what decides a case is gathered in the first month — long before anyone is talking about a settlement number."
      />

      {/* Attorney teaser */}
      <Section tone="raised">
        <Reveal className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden border border-white/10 bg-night">
              <Image
                src={photos.yariPortrait.src}
                alt={photos.yariPortrait.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
                style={{ objectPosition: photos.yariPortrait.position }}
              />
            </div>
            <span className="absolute -bottom-3 -right-3 -z-10 hidden h-full w-full border border-crest/30 lg:block" aria-hidden="true" />
          </div>

          <div>
            <p className="label mb-4 text-crest">Your attorney</p>
            <h2 className="display-lg text-white">{site.attorney}</h2>
            <span className="underline-crest mt-6" aria-hidden="true" />
            <p className="mt-7 max-w-measure text-lg leading-[1.7] text-smoke">
              Lawson Personal Injury Attorneys is built around a straightforward idea: the person who
              evaluates your claim should be the person you can reach about it. No case managers
              relaying messages, no file passed between departments.
            </p>
            <p className="mt-5 max-w-measure leading-relaxed text-smoke">
              The firm represents injured people and their families throughout metro Atlanta and
              Gwinnett County from an office on the Lawrenceville square — car and truck collisions,
              motorcycle and pedestrian cases, premises liability, and wrongful death.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/attorneys" className="btn-crest">
                Meet the Attorneys
              </Link>
              <Link href="/testimonials" className="btn-outline-light">
                Client Reviews
              </Link>
            </div>
          </div>
        </Reveal>
      </Section>

      <Section
        tone="night"
        label="How it works"
        title="What happens after you call"
        intro="No obligation attaches to the first conversation, and nothing is signed until you have read it and want to."
        split
      >
        <ProcessSteps steps={firmProcess} tone="night" />
      </Section>

      <Section
        tone="bone"
        label="Reviews"
        title="What clients say"
        intro="The firm's reviews live on Google, where they are verified and outside our control."
        split
      >
        <ReviewsWidget tone="bone" />
      </Section>

      <Section
        tone="night"
        label="Service area"
        title="Where we practice"
        intro="One office, in Lawrenceville. From it the firm serves the metro Atlanta counties and the cities inside them."
        split
      >
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <ul className="grid gap-px bg-white/10 sm:grid-cols-3">
              {locationPages.map((l, i) => (
                <Reveal key={l.slug} as="li" delay={i * 0.06}>
                  <Link href={`/${l.slug}`} className="group block h-full bg-night p-7 transition-colors hover:bg-night-raised">
                    <h3 className="font-display text-xl text-white transition-colors group-hover:text-crest">
                      {l.city}
                    </h3>
                    <p className="mt-2 text-[14px] text-smoke">{l.county}</p>
                    {l.isOffice && <p className="label mt-4 text-crest">Our office</p>}
                  </Link>
                </Reveal>
              ))}
            </ul>
          </div>

          <Reveal>
            <p className="label mb-5 text-white/40">Also serving</p>
            <ChipLinks chips={serviceAreaChips} tone="night" />
            <p className="mt-8 max-w-measure leading-relaxed text-smoke">
              Gwinnett, Fulton, DeKalb, Cobb, Clayton, Henry, Barrow, and Hall counties, and the
              cities across them — including Atlanta, Lawrenceville, Decatur, and Stone Mountain.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section
        tone="raised"
        label="Common questions"
        title="Questions people ask first"
        intro={
          <>
            <p className="mb-6">
              Three of the questions that come up in almost every first call. There are a dozen more
              on the full FAQ.
            </p>
            <Link href="/personal-injury/faq" className="btn-outline-light">
              Read the full FAQ
            </Link>
          </>
        }
        split
      >
        <FAQAccordion faqs={homepageFaqs} tone="night" />
      </Section>

      <CTABand />
    </>
  );
}
