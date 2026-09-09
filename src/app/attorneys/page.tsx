import Image from 'next/image';
import Link from 'next/link';
import CTABand from '@/components/CTABand';
import Hero from '@/components/Hero';
import JsonLd from '@/components/JsonLd';
import Reveal from '@/components/Reveal';
import Section from '@/components/Section';
import { attorneys, firmApproach } from '@/lib/attorneys';
import { photos } from '@/lib/images';
import { breadcrumbSchema, pageMeta } from '@/lib/seo';

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Attorneys', href: '/attorneys' },
];

export const metadata = pageMeta({
  title: 'Our Attorneys',
  description:
    'Meet the attorneys at Lawson Personal Injury Attorneys, serving Atlanta and Gwinnett County, GA. Free case review, no fee unless we win — (678) 446-3655.',
  path: '/attorneys',
});

export default function AttorneysPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />

      <Hero
        crumbs={crumbs}
        image={photos.courthouse}
        label="The firm"
        title={
          <>
            The attorneys on <span className="em-crest">your side</span>
          </>
        }
        deck="Two lawyers, one kind of case, and a client who works directly with the person handling the file."
      />

      <Section tone="night">
        <ul className="grid gap-px bg-white/10 lg:grid-cols-2">
          {attorneys.map((a, i) => (
            <Reveal key={a.slug} as="li" delay={i * 0.08} className="bg-night">
              <Link href={`/attorneys/${a.slug}`} className="group flex h-full flex-col p-8 lg:p-10">
                <div className="relative aspect-[4/5] w-full max-w-[380px] overflow-hidden border border-white/10 bg-night-raised">
                  <Image
                    src={a.photo.src}
                    alt={a.photo.alt}
                    fill
                    priority={i === 0}
                    sizes="(max-width: 1024px) 90vw, 380px"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    style={{ objectPosition: a.photo.position }}
                  />
                </div>
                <h2 className="mt-8 font-display text-[1.8rem] leading-tight text-white transition-colors group-hover:text-crest">
                  {a.name}
                </h2>
                <p className="label mt-3 text-crest">{a.title}</p>
                <span className="underline-crest mt-5" aria-hidden="true" />
                <p className="mt-6 flex-1 leading-relaxed text-smoke">{a.cardBlurb}</p>
                <span className="label mt-7 flex items-center gap-3 text-white/70 transition-colors group-hover:text-crest">
                  Read full profile
                  <span className="h-px w-8 bg-current transition-all duration-300 group-hover:w-14" />
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section
        tone="bone"
        label="The work"
        title="How cases get handled here"
        intro="Four things that shape every file in this office, whichever attorney is carrying it."
        split
      >
        <ul className="grid gap-px bg-night/10 sm:grid-cols-2">
          {firmApproach.map((a, i) => (
            <Reveal key={a.title} as="li" delay={i * 0.06} className="bg-bone p-8 lg:p-9">
              <span className="block h-[3px] w-10 bg-crest-deep" aria-hidden="true" />
              <h3 className="mt-6 font-display text-[1.4rem] text-night">{a.title}</h3>
              <p className="mt-4 leading-relaxed text-ash">{a.body}</p>
            </Reveal>
          ))}
        </ul>
      </Section>

      <CTABand secondary={{ label: 'See practice areas', href: '/personal-injury' }} />
    </>
  );
}
