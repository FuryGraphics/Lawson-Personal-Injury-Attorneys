import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import CTABand from '@/components/CTABand';
import Hero from '@/components/Hero';
import JsonLd from '@/components/JsonLd';
import Reveal from '@/components/Reveal';
import Section from '@/components/Section';
import { attorneySlugs, attorneys, getAttorney, hasCredentials, type CredentialItem } from '@/lib/attorneys';
import { photos } from '@/lib/images';
import { attorneySchema, breadcrumbSchema, pageMeta } from '@/lib/seo';
import { RESULTS_DISCLAIMER, site } from '@/lib/site';

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return attorneySlugs.map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  const a = getAttorney(slug);
  if (!a) return {};
  return pageMeta({
    title: a.metaTitle,
    description: a.metaDescription,
    path: `/attorneys/${a.slug}`,
    ogType: 'profile',
    absoluteTitle: true,
  });
}

export default async function AttorneyPage({ params }: Params) {
  const { slug } = await params;
  const a = getAttorney(slug);
  if (!a) notFound();

  const crumbs = [
    { name: 'Home', href: '/' },
    { name: 'Attorneys', href: '/attorneys' },
    { name: a.shortName, href: `/attorneys/${a.slug}` },
  ];
  const others = attorneys.filter((x) => x.slug !== a.slug);

  return (
    <>
      <JsonLd data={[attorneySchema(a), breadcrumbSchema(crumbs)]} />

      <Hero crumbs={crumbs} image={photos.courthouse} label={a.title} title={a.name} deck={a.deck} />

      <Section tone="night">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <div className="relative lg:sticky lg:top-32">
              <div className="relative aspect-[4/5] overflow-hidden border border-white/10 bg-night-raised">
                <Image
                  src={a.photo.src}
                  alt={a.photo.alt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 480px"
                  className="object-cover"
                  style={{ objectPosition: a.photo.position }}
                />
              </div>
              <span
                className="absolute -bottom-3 -right-3 -z-10 hidden h-full w-full border border-crest/30 lg:block"
                aria-hidden="true"
              />

              <div className="mt-8 border border-white/10 bg-night-raised p-7">
                <p className="label mb-4 text-crest">Contact {a.shortName}</p>
                {a.directPhone && (
                  <a
                    href={`tel:+1${a.directPhone.replace(/\D/g, '')}`}
                    className="block font-display text-[1.7rem] leading-none text-crest hover:text-crest-bright"
                  >
                    {a.directPhone}
                  </a>
                )}
                <a
                  href={`mailto:${a.email}`}
                  className="mt-3 block break-all text-[15px] text-crest hover:text-crest-bright"
                >
                  {a.email}
                </a>
                {a.languages.length > 0 && (
                  <p className="mt-4 text-[15px] leading-relaxed text-smoke">
                    Speaks {a.languages.join(' and ')}.
                  </p>
                )}
                <p className="mt-4 text-[15px] leading-relaxed text-smoke">
                  Free, confidential, and no obligation.
                </p>
                <Link href="/contact" className="btn-crest mt-6 w-full">
                  Request a Case Review
                </Link>
                <a href={site.phoneHref} className="btn-outline-light mt-3 w-full">
                  Call {site.phone}
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <p className="label mb-4 text-crest">About {a.shortName}</p>
            <h2 className="display-md text-white">{a.title}</h2>
            <span className="underline-crest mt-6" aria-hidden="true" />
            <div className="mt-8 space-y-6">
              {a.bio.map((para, i) => (
                <p key={i} className="max-w-measure text-[17px] leading-[1.75] text-smoke">
                  {para}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      {hasCredentials(a) && (
        <Section tone="bone" label="Background" title="Education, admissions and honors">
          <div className="grid gap-px bg-night/10 sm:grid-cols-2 lg:grid-cols-4">
            <Column title="Education" items={a.education} />
            <Column title="Bar admissions" items={a.admissions} />
            <Column title="Leadership" items={a.memberships} />
            <Column title="Honors" items={a.honors} />
          </div>
        </Section>
      )}

      {a.results.length > 0 && (
        <Section tone="raised" label="Case results" title="Selected results">
          <ul className="grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {a.results.map((r, i) => (
              <li key={i} className="bg-night-raised p-8">
                <p className="font-display text-[2.2rem] leading-none text-crest">{r.amount}</p>
                <p className="label mt-4 text-white/50">{r.caseType}</p>
                <p className="mt-4 text-[15px] leading-relaxed text-smoke">{r.detail}</p>
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-measure text-[14px] leading-relaxed text-white/45">
            {RESULTS_DISCLAIMER}
          </p>
        </Section>
      )}

      <Section tone="night" label="Also at the firm" title="The rest of the team">
        <ul className="grid gap-px bg-white/10 sm:grid-cols-2">
          {others.map((o) => (
            <li key={o.slug}>
              <Link
                href={`/attorneys/${o.slug}`}
                className="group flex h-full items-center gap-6 bg-night p-7 transition-colors hover:bg-night-raised"
              >
                <div className="relative h-24 w-20 shrink-0 overflow-hidden border border-white/10">
                  <Image
                    src={o.photo.src}
                    alt={o.photo.alt}
                    fill
                    sizes="80px"
                    className="object-cover"
                    style={{ objectPosition: o.photo.position }}
                  />
                </div>
                <div>
                  <h3 className="font-display text-xl text-white transition-colors group-hover:text-crest">
                    {o.name}
                  </h3>
                  <p className="label mt-2 text-crest">{o.title}</p>
                  <p className="mt-3 text-[15px] leading-relaxed text-smoke">{o.cardBlurb}</p>
                </div>
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/personal-injury"
              className="group flex h-full flex-col justify-center bg-night p-7 transition-colors hover:bg-night-raised"
            >
              <h3 className="font-display text-xl text-white transition-colors group-hover:text-crest">
                Practice Areas
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-smoke">
                The cases this firm handles, and what each one involves in Georgia.
              </p>
              <span className="label mt-5 text-crest">Continue →</span>
            </Link>
          </li>
        </ul>
      </Section>

      <CTABand
        heading={`Talk to ${a.shortName} about your case.`}
        secondary={{ label: 'See practice areas', href: '/personal-injury' }}
      />
    </>
  );
}

function Column({ title, items }: { title: string; items: CredentialItem[] }) {
  if (items.length === 0) return null;
  return (
    <div className="bg-bone p-7">
      <h3 className="label mb-5 text-crest-deep">{title}</h3>
      <ul className="space-y-4">
        {items.map((item) => (
          <li key={item.label}>
            <p className="text-[15px] leading-snug text-night">{item.label}</p>
            {item.detail && <p className="mt-1 text-[14px] leading-relaxed text-ash">{item.detail}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}
