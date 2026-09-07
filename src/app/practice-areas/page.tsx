import Link from 'next/link';
import CTABand from '@/components/CTABand';
import DeadlineNotice from '@/components/DeadlineNotice';
import Hero from '@/components/Hero';
import JsonLd from '@/components/JsonLd';
import PracticeGrid from '@/components/PracticeGrid';
import ProcessSteps from '@/components/ProcessSteps';
import Reveal from '@/components/Reveal';
import Section from '@/components/Section';
import { shortProcess } from '@/lib/content';
import { photos } from '@/lib/images';
import { breadcrumbSchema, pageMeta } from '@/lib/seo';

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Practice Areas', href: '/practice-areas' },
];

export const metadata = pageMeta({
  title: 'Atlanta GA Personal Injury Law Firm',
  description:
    'Atlanta personal injury law firm handling car, truck, motorcycle and pedestrian accidents, slip and fall, and wrongful death. Call (404) 394-9410 today.',
  path: '/practice-areas',
});

export default function PracticeAreasPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />

      <Hero
        crumbs={crumbs}
        image={photos.courthouse}
        label="Practice areas"
        title={
          <>
            An Atlanta <span className="em-crest">personal injury</span> law firm
          </>
        }
        deck="Twenty-four case types, and a single question underneath all of them: who is responsible, and what is the harm actually worth?"
      />

      <Section tone="night">
        <Reveal className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="label mb-4 text-crest">The firm</p>
            <h2 className="display-md max-w-[18ch] text-white">
              Injury work is the whole practice
            </h2>
            <span className="underline-crest mt-6" aria-hidden="true" />
            <div className="mt-8 space-y-5 text-[17px] leading-[1.75] text-smoke">
              <p className="max-w-measure">
                Lawson Personal Injury Attorneys represents injured people. That covers more ground than
                it sounds like — vehicle collisions, unsafe property, workplace injury, defective
                products, medical negligence, and insurers that will not pay — but it is one kind of
                work. Injury law is not a body of statutes you learn once; it is a working knowledge of
                how particular insurers evaluate particular claims, which defense arguments recur, what
                a Georgia jury does with disputed liability, and how a file has to be built in the
                first month to still be worth something in the eighteenth.
              </p>
              <p className="max-w-measure">
                That knowledge only accumulates if injury work is the whole practice rather than one
                revenue line among several. It is. The adjusters are familiar, the defense playbooks are
                familiar, and the courts in Gwinnett, Fulton, and DeKalb counties are familiar.
              </p>
              <p className="max-w-measure">
                The firm represents people hurt in vehicle collisions of every kind, people injured on
                property that was not maintained, and families who have lost someone to another
                party’s negligence. Consultations are free, and there is no fee unless there is a
                recovery.
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
        title="What we handle"
        intro="All twenty-four, grouped by the kind of claim. If none fits exactly, call — most injury claims belong in one of these even when they do not look like it at first."
        split
      >
        <PracticeGrid tone="bone" all />
      </Section>

      <Section
        tone="night"
        label="How it works"
        title="Three steps, start to finish"
        intro="Injury claims vary enormously in complexity, but the shape of the process does not change much."
        split
      >
        <ProcessSteps steps={shortProcess} tone="night" />
      </Section>

      <Section tone="raised">
        <Reveal className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h2 className="display-md max-w-[22ch] text-white">
              Not sure which of these describes your case?
            </h2>
            <span className="underline-crest mt-6" aria-hidden="true" />
            <p className="mt-6 max-w-measure leading-relaxed text-smoke">
              That is completely normal, and it is not something you need to work out before calling.
              Describe what happened in plain language and we will tell you what kind of claim it is,
              whether it is worth pursuing, and what the deadline looks like.
            </p>
          </div>
          <div className="flex flex-col gap-3 lg:min-w-[260px]">
            <Link href="/contact" className="btn-crest">
              Free Case Review
            </Link>
            <Link href="/personal-injury/faq" className="btn-outline-light">
              Read the FAQ
            </Link>
          </div>
        </Reveal>
      </Section>

      <CTABand />
    </>
  );
}
