import Link from 'next/link';
import CTABand from '@/components/CTABand';
import ChipLinks from '@/components/ChipLinks';
import DeadlineNotice from '@/components/DeadlineNotice';
import Hero from '@/components/Hero';
import JsonLd from '@/components/JsonLd';
import ImageBand from '@/components/ImageBand';
import MapEmbed from '@/components/MapEmbed';
import OfficeCard from '@/components/OfficeCard';
import PracticeGrid from '@/components/PracticeGrid';
import Reveal from '@/components/Reveal';
import Section from '@/components/Section';
import { photos } from '@/lib/images';
import { nearbyChips, type LocationPage } from '@/lib/locations';
import { breadcrumbSchema, localBusinessSchema } from '@/lib/seo';
import { site } from '@/lib/site';

/**
 * Shared body for the three location pages. Each route file supplies its data
 * entry and its metadata; everything below is identical by design so the pages
 * are consistent rather than three separately-maintained near-copies.
 *
 * Note the office block: all three pages show the same Lawrenceville address,
 * and the two service-area pages say in the copy that the firm serves the city
 * from Lawrenceville. Implying an office where there is none would be both a
 * false statement and a NAP-consistency problem with Google.
 */
export default function LocationPageView({ location }: { location: LocationPage }) {
  const crumbs = [
    { name: 'Home', href: '/' },
    { name: `${location.city}, GA`, href: `/${location.slug}` },
  ];

  return (
    <>
      <JsonLd
        data={[
          localBusinessSchema({
            path: `/${location.slug}`,
            cityName: location.city,
            description: location.metaDescription,
          }),
          breadcrumbSchema(crumbs),
        ]}
      />

      <Hero
        crumbs={crumbs}
        // Atlanta gets the skyline it is actually named for; the two county
        // seats get the courthouse, which is what their pages are about.
        image={location.slug === 'atlanta' ? photos.atlantaSkyline : photos.courthouse}
        label={location.isOffice ? 'Our office' : `${location.county} · Service area`}
        // Each entry supplies its own H1 now: the Lawrenceville page targets
        // Gwinnett County rather than repeating the homepage's city keyword.
        title={location.h1}
        deck={location.deck}
      />

      <Section tone="night">
        <Reveal className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-5 text-[17px] leading-[1.75] text-smoke">
            {location.intro.map((p, i) => (
              <p key={i} className="max-w-measure">
                {p}
              </p>
            ))}
          </div>
          <div className="lg:pt-4">
            <DeadlineNotice tone="night" />
          </div>
        </Reveal>
      </Section>

      {/* Office + map. Same address on every location page. */}
      <Section
        tone="raised"
        label={location.isOffice ? 'Visit us' : 'Find us'}
        title={location.isOffice ? 'On the Lawrenceville square' : `Serving ${location.city} from Lawrenceville`}
        intro={
          location.isOffice
            ? 'The office is a short walk from the Gwinnett County courthouse. Parking is on the square.'
            : `The firm has one office, in Lawrenceville. ${location.city} clients are served from there — consultations start by phone or video, and we travel to meet clients when that is easier.`
        }
        split
      >
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <OfficeCard tone="night" />
          <MapEmbed title={`Map to ${site.name} at ${site.addressLine}`} />
        </div>
      </Section>

      <ImageBand
        photo={photos.highwayAmber}
        label={location.county}
        heading={`Most of our ${location.city} cases start on a road like this one.`}
        body="Vehicle collisions are the largest share of the practice — but the most serious cases are the catastrophic injuries and wrongful deaths that follow them."
        height="sm"
      />

      <Section
        tone="bone"
        label="Practice areas"
        title={`Cases we handle in ${location.city}`}
        intro="Personal injury is all this firm does. These are the cases we are asked about most — the full list runs to nineteen."
        split
      >
        <PracticeGrid tone="bone" />
      </Section>

      <Section tone="night">
        <Reveal className="grid gap-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="label mb-4 text-crest">Where cases are heard</p>
            <h2 className="display-md max-w-[20ch] text-white">{location.court.name}</h2>
            <span className="underline-crest mt-6" aria-hidden="true" />
            <p className="mt-7 text-[15px] leading-relaxed text-white/50">{location.court.address}</p>
            <p className="mt-5 max-w-measure text-[17px] leading-[1.75] text-smoke">
              {location.court.note}
            </p>
          </div>

          <div>
            <p className="label mb-4 text-crest">Where these cases happen</p>
            <h2 className="display-md max-w-[20ch] text-white">
              Roads and corridors in {location.county}
            </h2>
            <span className="underline-crest mt-6" aria-hidden="true" />
            <ul className="mt-7 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {location.corridors.map((c) => (
                <li key={c} className="relative border-b border-white/10 pb-3 pl-6 text-[15px] text-smoke">
                  <span className="absolute left-0 top-0 text-crest" aria-hidden="true">
                    —
                  </span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Section>

      <Section
        tone="raised"
        label="Nearby"
        title="Other areas we serve"
        intro="The firm takes cases throughout the metro Atlanta counties. These are the communities nearest to this one."
        split
      >
        <ChipLinks chips={nearbyChips(location)} tone="night" />

        <div className="mt-12 grid gap-px bg-white/10 sm:grid-cols-3">
          <NextCard
            href="/personal-injury"
            title="Personal Injury"
            body="What counts as a claim in Georgia, what it can recover, and how the process works."
          />
          <NextCard
            href="/personal-injury/faq"
            title="Injury FAQ"
            body="Deadlines, comparative fault, insurance, case value, and what hiring a lawyer costs."
          />
          <NextCard
            href="/contact"
            title="Free Case Review"
            body="Tell us what happened. Free, confidential, and no obligation to hire anyone."
          />
        </div>
      </Section>

      <CTABand
        heading={`Injured in ${location.city}? Let's talk.`}
        secondary={{ label: 'See practice areas', href: '/personal-injury' }}
      />
    </>
  );
}

function NextCard({ href, title, body }: { href: string; title: string; body: string }) {
  return (
    <Link href={href} className="group block bg-night-raised p-7 transition-colors hover:bg-night">
      <h3 className="font-display text-xl text-white transition-colors group-hover:text-crest">{title}</h3>
      <p className="mt-3 text-[15px] leading-relaxed text-smoke">{body}</p>
      <span className="label mt-5 block text-crest">Continue →</span>
    </Link>
  );
}
