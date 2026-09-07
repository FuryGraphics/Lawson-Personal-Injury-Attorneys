import Link from 'next/link';
import CTABand from '@/components/CTABand';
import Hero from '@/components/Hero';
import JsonLd from '@/components/JsonLd';
import Reveal from '@/components/Reveal';
import ReviewsWidget from '@/components/ReviewsWidget';
import Section from '@/components/Section';
import { attorneyProfile } from '@/lib/attorney';
import { photos } from '@/lib/images';
import { breadcrumbSchema, pageMeta } from '@/lib/seo';
import { RESULTS_DISCLAIMER, site } from '@/lib/site';

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Reviews', href: '/testimonials' },
];

export const metadata = pageMeta({
  title: 'Lawson Personal Injury Attorneys Reviews',
  description:
    'Read verified Google reviews for Lawson Personal Injury Attorneys in Lawrenceville and Atlanta, GA. Free case review, and no fee unless we win your case.',
  path: '/testimonials',
});

export default function TestimonialsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />

      <Hero
        crumbs={crumbs}
        image={photos.courthouse}
        label="Client reviews"
        title={
          <>
            What clients <span className="em-crest">say</span>
          </>
        }
        deck="The firm's reviews live on Google, where they are verified, timestamped, and outside our control. That is the honest place to read them."
      />

      <Section tone="night">
        <Reveal className="grid gap-12 lg:grid-cols-[1fr_1fr]">
          <div className="space-y-5 text-[17px] leading-[1.75] text-smoke">
            <p className="max-w-measure">
              Plenty of law firm websites carry pages of glowing quotes attributed to initials. There
              is no way for you to check any of them, which makes them worth roughly nothing as
              evidence about whether a firm is any good.
            </p>
            <p className="max-w-measure">
              So this page does not reprint testimonials. It points you at the Google Business Profile,
              where reviews are tied to real accounts, carry dates, cannot be edited by the firm, and
              include the critical ones alongside the positive. If you are going to trust a stranger
              with a case that matters, you should be reading the version we do not control.
            </p>
            <p className="max-w-measure">
              If you have worked with the firm, a review there is genuinely useful to the next person
              trying to make this decision.
            </p>
          </div>

          <div className="lg:pt-2">
            <ReviewsWidget tone="night" />
          </div>
        </Reveal>
      </Section>

      {/* Case results appear only once the client supplies substantiable figures.
          See the TODO block in lib/attorney. */}
      {attorneyProfile.results.length > 0 && (
        <Section
          tone="bone"
          label="Case results"
          title="Selected results"
          intro="Every case is different, and past outcomes are not a prediction about yours."
          split
        >
          <ul className="grid gap-px bg-night/10 sm:grid-cols-2 lg:grid-cols-3">
            {attorneyProfile.results.map((r, i) => (
              <Reveal key={i} as="li" delay={i * 0.05} className="bg-bone p-8">
                <p className="font-display text-[2.2rem] leading-none text-crest-deep">{r.amount}</p>
                <p className="label mt-4 text-ash/70">{r.caseType}</p>
                <p className="mt-4 text-[15px] leading-relaxed text-ash">{r.detail}</p>
              </Reveal>
            ))}
          </ul>
          <p className="mt-8 max-w-measure text-[14px] leading-relaxed text-ash/80">
            {RESULTS_DISCLAIMER}
          </p>
        </Section>
      )}

      <Section
        tone="bone"
        label="What to expect"
        title="The things clients tend to mention"
        intro="Not quotes — just the parts of how this firm works that come up most often."
        split
      >
        <ul className="grid gap-px bg-night/10 sm:grid-cols-2">
          {attorneyProfile.approach.map((a, i) => (
            <Reveal key={a.title} as="li" delay={i * 0.06} className="bg-bone p-8 lg:p-9">
              <span className="block h-[3px] w-10 bg-crest-deep" aria-hidden="true" />
              <h3 className="mt-6 font-display text-[1.4rem] text-night">{a.title}</h3>
              <p className="mt-4 leading-relaxed text-ash">{a.body}</p>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section tone="raised">
        <Reveal className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h2 className="display-md max-w-[24ch] text-white">
              Want to talk to {site.attorneyShort} before you decide?
            </h2>
            <span className="underline-crest mt-6" aria-hidden="true" />
            <p className="mt-6 max-w-measure leading-relaxed text-smoke">
              Reviews only tell you so much. A conversation about your actual case tells you more, and
              it costs nothing.
            </p>
          </div>
          <div className="flex flex-col gap-3 lg:min-w-[260px]">
            <Link href="/contact" className="btn-crest">
              Free Case Review
            </Link>
            <Link href="/attorney" className="btn-outline-light">
              About the attorney
            </Link>
          </div>
        </Reveal>
      </Section>

      <CTABand secondary={{ label: 'About the attorney', href: '/attorney' }} />
    </>
  );
}
