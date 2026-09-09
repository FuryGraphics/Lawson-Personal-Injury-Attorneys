import Image from 'next/image';
import Link from 'next/link';
import CTABand from '@/components/CTABand';
import Hero from '@/components/Hero';
import JsonLd from '@/components/JsonLd';
import Reveal from '@/components/Reveal';
import Section from '@/components/Section';
import { attorneyProfile, hasCredentials } from '@/lib/attorney';
import { photos } from '@/lib/images';
import { attorneySchema, breadcrumbSchema, pageMeta } from '@/lib/seo';
import { RESULTS_DISCLAIMER, site } from '@/lib/site';

const crumbs = [
  { name: 'Home', href: '/' },
  { name: `Attorney ${site.attorneyShort}`, href: '/attorney' },
];

export const metadata = pageMeta({
  title: 'Yari Lawson — Atlanta Personal Injury Lawyer',
  description:
    'Meet Yari D. Lawson, the Atlanta and Lawrenceville personal injury attorney behind Lawson Personal Injury Attorneys. Free review — call (678) 446-3655.',
  path: '/attorney',
  ogType: 'profile',
});

export default function AttorneyPage() {
  return (
    <>
      <JsonLd data={[attorneySchema(), breadcrumbSchema(crumbs)]} />

      <Hero
        crumbs={crumbs}
        image={photos.courthouse}
        label={attorneyProfile.title}
        title={attorneyProfile.name}
        deck={attorneyProfile.deck}
      />

      <Section tone="night">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <div className="relative lg:sticky lg:top-32">
              <div className="relative aspect-[4/5] overflow-hidden border border-white/10 bg-night-raised">
                <Image
                  src={photos.yariPortrait.src}
                  alt={photos.yariPortrait.alt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 480px"
                  className="object-cover"
                  style={{ objectPosition: photos.yariPortrait.position }}
                />
              </div>
              <span
                className="absolute -bottom-3 -right-3 -z-10 hidden h-full w-full border border-crest/30 lg:block"
                aria-hidden="true"
              />

              <div className="mt-8 border border-white/10 bg-night-raised p-7">
                <p className="label mb-4 text-crest">Speak with {site.attorneyShort}</p>
                <a href={site.phoneHref} className="block font-display text-[1.8rem] leading-none text-crest hover:text-crest-bright">
                  {site.phone}
                </a>
                <p className="mt-4 text-[15px] leading-relaxed text-smoke">
                  Free, confidential, and no obligation. There is no fee unless we win.
                </p>
                <Link href="/contact" className="btn-crest mt-6 w-full">
                  Request a Case Review
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <p className="label mb-4 text-crest">About the firm</p>
            <h2 className="display-md text-white">
              Serious injury cases, and <span className="em-crest">nothing else</span>
            </h2>
            <span className="underline-crest mt-6" aria-hidden="true" />
            <div className="mt-8 space-y-6">
              {attorneyProfile.bio.map((p, i) => (
                <p key={i} className="max-w-measure text-[17px] leading-[1.75] text-smoke">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      <Section
        tone="bone"
        label="The work"
        title="Why this firm fights for injury victims"
        intro="Four things that shape how every file in this office gets handled."
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

      {/* Renders only once the client supplies real credentials — see lib/attorney. */}
      {hasCredentials && (
        <Section tone="night" label="Background" title="Education and admissions">
          <div className="grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            <CredentialColumn title="Education" items={attorneyProfile.education} />
            <CredentialColumn title="Bar admissions" items={attorneyProfile.admissions} />
            <CredentialColumn title="Memberships" items={attorneyProfile.memberships} />
            <CredentialColumn title="Honors" items={attorneyProfile.honors} />
          </div>
        </Section>
      )}

      {/* Likewise: no case results appear until they can be substantiated. */}
      {attorneyProfile.results.length > 0 && (
        <Section tone="raised" label="Case results" title="Selected results">
          <ul className="grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {attorneyProfile.results.map((r, i) => (
              <Reveal key={i} as="li" delay={i * 0.05} className="bg-night-raised p-8">
                <p className="font-display text-[2.2rem] leading-none text-crest">{r.amount}</p>
                <p className="label mt-4 text-white/50">{r.caseType}</p>
                <p className="mt-4 text-[15px] leading-relaxed text-smoke">{r.detail}</p>
              </Reveal>
            ))}
          </ul>
          <p className="mt-8 max-w-measure text-[14px] leading-relaxed text-white/45">
            {RESULTS_DISCLAIMER}
          </p>
        </Section>
      )}

      {attorneyProfile.community.length > 0 && (
        <Section tone="bone" label="Community" title="Outside the office">
          <ul className="grid gap-px bg-night/10 sm:grid-cols-2 lg:grid-cols-3">
            {attorneyProfile.community.map((c) => (
              <li key={c.label} className="bg-bone p-7">
                <h3 className="font-display text-lg text-night">{c.label}</h3>
                {c.detail && <p className="mt-2 text-[15px] leading-relaxed text-ash">{c.detail}</p>}
              </li>
            ))}
          </ul>
        </Section>
      )}

      <Section tone="night" label="Next" title="Where to go from here">
        <div className="grid gap-px bg-white/10 sm:grid-cols-3">
          <NextLink
            href="/personal-injury"
            title="Personal Injury"
            body="The six kinds of case this firm handles, and what each one involves in Georgia."
          />
          <NextLink
            href="/testimonials"
            title="Client Reviews"
            body="What clients say, on the firm's verified Google Business Profile."
          />
          <NextLink
            href="/contact"
            title="Free Case Review"
            body="Tell us what happened. The consultation is free, private, and carries no obligation."
          />
        </div>
      </Section>

      <CTABand
        heading={`Talk to ${site.attorneyShort} about your case.`}
        secondary={{ label: 'See practice areas', href: '/personal-injury' }}
      />
    </>
  );
}

function CredentialColumn({ title, items }: { title: string; items: { label: string; detail?: string }[] }) {
  if (items.length === 0) return null;
  return (
    <div className="bg-night p-7">
      <h3 className="label mb-5 text-crest">{title}</h3>
      <ul className="space-y-4">
        {items.map((item) => (
          <li key={item.label}>
            <p className="text-[15px] leading-snug text-white">{item.label}</p>
            {item.detail && <p className="mt-1 text-[14px] text-smoke">{item.detail}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}

function NextLink({ href, title, body }: { href: string; title: string; body: string }) {
  return (
    <Link href={href} className="group block bg-night p-7 transition-colors hover:bg-night-raised">
      <h3 className="font-display text-xl text-white transition-colors group-hover:text-crest">{title}</h3>
      <p className="mt-3 text-[15px] leading-relaxed text-smoke">{body}</p>
      <span className="label mt-5 block text-crest">Continue →</span>
    </Link>
  );
}
