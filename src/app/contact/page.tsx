import Link from 'next/link';
import CTABand from '@/components/CTABand';
import CaseClimbForm from '@/components/CaseClimbForm';
import Hero from '@/components/Hero';
import JsonLd from '@/components/JsonLd';
import MapEmbed from '@/components/MapEmbed';
import OfficeCard from '@/components/OfficeCard';
import ProcessSteps from '@/components/ProcessSteps';
import Reveal from '@/components/Reveal';
import Section from '@/components/Section';
import { photos } from '@/lib/images';
import { breadcrumbSchema, pageMeta } from '@/lib/seo';
import { site } from '@/lib/site';

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Contact', href: '/contact' },
];

export const metadata = pageMeta({
  title: 'Free Case Review — Lawrenceville GA',
  description:
    'Request a free consultation with an Atlanta personal injury lawyer. Call (678) 446-3655 or send a message. No fee unless we win your case. Se responde rápido.',
  path: '/contact',
});

const afterContact = [
  {
    title: 'We call you back',
    body: 'The phone is answered around the clock. If a deadline may be close or the situation is urgent, call rather than waiting on a reply to a form.',
  },
  {
    title: 'We listen first',
    body: 'What happened, what injuries there are, what treatment you have had, and what the insurer has already asked you for.',
  },
  {
    title: 'You get a straight answer',
    body: 'Whether there is a claim worth pursuing, what the realistic range looks like, and what the deadline is — including when the answer is that you do not need us.',
  },
  {
    title: 'You decide',
    body: 'Nothing is signed on the call. If you want to move forward, the fee agreement is in writing and you read it before anything begins.',
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />

      <Hero
        crumbs={crumbs}
        image={photos.atlantaSkyline}
        label="Free case review"
        title={
          <>
            Tell us what <span className="em-crest">happened</span>
          </>
        }
        deck="The consultation is free, the conversation is confidential, and there is no fee unless we win. If we think you do not need a lawyer, we will say so."
        actions={false}
      >
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a href={site.phoneHref} className="btn-crest">
            Call {site.phone}
          </a>
          <a href={site.emailHref} className="btn-outline-light">
            Email the firm
          </a>
        </div>
      </Hero>

      <Section tone="night">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <CaseClimbForm />
          </Reveal>

          <Reveal delay={0.08} className="space-y-8">
            <OfficeCard tone="night" />

            <div className="border border-white/10 bg-night-raised p-8">
              <p className="label mb-4 text-crest">Before you call an adjuster</p>
              <p className="max-w-measure text-[15px] leading-relaxed text-smoke">
                You are not required to give the other side’s insurer a recorded statement, and you do
                not have to sign a blanket medical authorization. Both requests are routine, and both
                are designed to help them, not you. It costs nothing to ask about them first.
              </p>
              <Link
                href="/personal-injury/faq"
                className="label mt-6 inline-block border-b border-white/20 pb-1 text-white/70 transition-colors hover:border-crest hover:text-crest"
              >
                Read the FAQ →
              </Link>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section
        tone="raised"
        label="What happens next"
        title="After you contact us"
        intro="No obligation attaches to any of this. The first conversation is genuinely free."
        split
      >
        <ProcessSteps steps={afterContact} tone="night" />
      </Section>

      <Section
        tone="bone"
        label="Find us"
        title="320 S Perry Street, Lawrenceville"
        intro="On the square in downtown Lawrenceville, a short walk from the Gwinnett County courthouse."
        split
      >
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <MapEmbed title={`Map to ${site.name} at ${site.addressLine}`} />
          <div className="space-y-6">
            <div className="border border-night/15 bg-bone-warm p-7">
              <p className="label mb-4 text-crest-deep">Serving</p>
              <ul className="space-y-2 text-[15px] leading-relaxed text-ash">
                <li>
                  <Link href="/atlanta" className="hover:text-crest-deep">
                    Atlanta and Fulton County →
                  </Link>
                </li>
                <li>
                  <Link href="/lawrenceville" className="hover:text-crest-deep">
                    Lawrenceville and Gwinnett County →
                  </Link>
                </li>
                <li>
                  <Link href="/decatur" className="hover:text-crest-deep">
                    Decatur and DeKalb County →
                  </Link>
                </li>
              </ul>
              <p className="mt-5 text-[15px] leading-relaxed text-ash">
                Plus Cobb, Clayton, Henry, Barrow, and Hall counties, and Stone Mountain.
              </p>
            </div>
            <div className="border border-night/15 bg-bone-warm p-7">
              <p className="label mb-4 text-crest-deep">Practice areas</p>
              <Link href="/practice-areas" className="btn-outline-dark w-full">
                See all practice areas
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <CTABand
        heading="The call is free. The deadline is not."
        body="Georgia gives you two years to file most injury claims, and far less if a government entity is involved. Evidence disappears much sooner than that."
      />
    </>
  );
}
