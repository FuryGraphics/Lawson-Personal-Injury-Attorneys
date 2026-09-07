import { notFound } from 'next/navigation';
import CTABand from '@/components/CTABand';
import DeadlineNotice from '@/components/DeadlineNotice';
import FAQAccordion from '@/components/FAQAccordion';
import Hero from '@/components/Hero';
import JsonLd from '@/components/JsonLd';
import ProcessSteps from '@/components/ProcessSteps';
import RelatedPages from '@/components/RelatedPages';
import Reveal from '@/components/Reveal';
import Section from '@/components/Section';
import { photos } from '@/lib/images';
import { getPracticePage, practiceHref, practiceSlugs } from '@/lib/practice';
import { breadcrumbSchema, faqSchema, pageMeta } from '@/lib/seo';

type Params = { params: Promise<{ slug: string }> };

/**
 * One template, six pages. The brief calls for an identical structure across
 * the case types, so this renders from the registry rather than existing as six
 * near-duplicate files that drift apart the first time one gets edited.
 */
export function generateStaticParams() {
  return practiceSlugs.map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  const page = getPracticePage(slug);
  if (!page) return {};
  return pageMeta({
    title: page.metaTitle,
    description: page.metaDescription,
    path: practiceHref(page.slug),
  });
}

export default async function PracticeSubPage({ params }: Params) {
  const { slug } = await params;
  const page = getPracticePage(slug);
  if (!page) notFound();

  const crumbs = [
    { name: 'Home', href: '/' },
    { name: 'Personal Injury', href: '/personal-injury' },
    { name: page.navLabel, href: practiceHref(page.slug) },
  ];

  /* Keyed off the nav group so a new case type inherits the right backdrop
     automatically. Only the vehicle and civic groups get a photograph — there is
     no honest stock image for a brain injury or an assault claim, and reaching
     for one would be worse than the gradient. */
  const heroImage =
    page.group === 'Motor Vehicle Accidents'
      ? photos.highwayAmber
      : page.group === 'Professional & Product Claims' || page.group === 'Work Injuries'
        ? photos.courthouse
        : undefined;

  return (
    <>
      <JsonLd data={[breadcrumbSchema(crumbs), faqSchema(page.faqs)]} />

      <Hero crumbs={crumbs} image={heroImage} label={page.label} title={page.h1} deck={page.deck} />

      <Section tone="night">
        <Reveal className={`grid gap-12 ${page.nonTort ? '' : 'lg:grid-cols-[1.1fr_0.9fr]'}`}>
          <div className="space-y-5 text-[17px] leading-[1.75] text-smoke">
            {page.intro.map((p, i) => (
              <p key={i} className="max-w-measure">
                {p}
              </p>
            ))}
          </div>
          {/* Workers' comp, malpractice, and bad faith run on their own
              deadlines — showing the generic two-year notice beside them would
              be actively misleading. Those pages state their rule in the
              Georgia-law section instead. */}
          {!page.nonTort && (
            <div className="lg:pt-4">
              <DeadlineNotice tone="night" />
            </div>
          )}
        </Reveal>
      </Section>

      <Section
        tone="bone"
        label="What we handle"
        title={`${page.navLabel.replace(/s$/, '')} cases we take`}
        intro="These are the situations that make up most of this firm's work in this area. If yours is not listed, it does not mean you do not have a claim."
        split
      >
        <ul className="grid gap-px bg-night/10 sm:grid-cols-2">
          {page.handles.map((h, i) => (
            <Reveal key={h.title} as="li" delay={i * 0.04} className="bg-bone p-7 lg:p-8">
              <h3 className="font-display text-[1.25rem] leading-snug text-night">{h.title}</h3>
              <span className="mt-3 block h-[2px] w-8 bg-crest-deep" aria-hidden="true" />
              <p className="mt-4 text-[15px] leading-relaxed text-ash">{h.body}</p>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section tone="raised">
        <Reveal className="grid gap-12 lg:grid-cols-[0.45fr_1fr] lg:items-start">
          <div>
            <p className="label mb-4 text-crest">Georgia law</p>
            <h2 className="display-md text-white">{page.georgiaNote.heading}</h2>
            <span className="underline-crest mt-6" aria-hidden="true" />
          </div>
          <div className="space-y-5 text-[17px] leading-[1.75] text-smoke">
            {page.georgiaNote.body.map((p, i) => (
              <p key={i} className="max-w-measure">
                {p}
              </p>
            ))}
          </div>
        </Reveal>
      </Section>

      <Section
        tone="night"
        label="The process"
        title="How we handle it"
        intro="The first step costs nothing and obligates you to nothing."
        split
      >
        <ProcessSteps steps={page.process} tone="night" />
      </Section>

      <Section
        tone="bone"
        label="Questions"
        title={`${page.navLabel}: common questions`}
        intro="Six questions that come up in nearly every consultation on this kind of case."
        split
      >
        <FAQAccordion faqs={page.faqs} tone="bone" />
      </Section>

      <Section
        tone="night"
        label="Related"
        title="Other cases we handle"
        intro="Injury cases rarely arrive in tidy categories. These are the ones that most often overlap with this one."
        split
      >
        <RelatedPages slugs={page.related} tone="night" />
      </Section>

      <CTABand secondary={{ label: 'All practice areas', href: '/personal-injury' }} />
    </>
  );
}
