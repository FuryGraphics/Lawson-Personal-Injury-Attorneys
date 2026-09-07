import Link from 'next/link';
import CTABand from '@/components/CTABand';
import DeadlineNotice from '@/components/DeadlineNotice';
import FAQAccordion from '@/components/FAQAccordion';
import Hero from '@/components/Hero';
import JsonLd from '@/components/JsonLd';
import Reveal from '@/components/Reveal';
import Section from '@/components/Section';
import { masterFaqGroups, masterFaqs } from '@/lib/content';
import { practiceByGroup, practiceHref } from '@/lib/practice';
import { photos } from '@/lib/images';
import { breadcrumbSchema, faqSchema, pageMeta } from '@/lib/seo';

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Personal Injury', href: '/personal-injury' },
  { name: 'FAQ', href: '/personal-injury/faq' },
];

export const metadata = pageMeta({
  title: 'Personal Injury FAQ Atlanta GA',
  description:
    'Answers to common Georgia personal injury questions: filing deadlines, comparative fault, insurance, case value, and fees. Free review — (404) 394-9410.',
  path: '/personal-injury/faq',
});

export default function InjuryFaqPage() {
  return (
    <>
      {/* One FAQPage entity covering every question on the page, built from the
          same array the accordion renders — they cannot drift. */}
      <JsonLd data={[breadcrumbSchema(crumbs), faqSchema(masterFaqs)]} />

      <Hero
        crumbs={crumbs}
        image={photos.highwayBlue}
        label="Frequently asked"
        title={
          <>
            Georgia personal injury <span className="em-crest">questions</span>
          </>
        }
        deck="Fifteen questions that come up in almost every consultation — about deadlines, fault, insurance, what a case is worth, and what hiring a lawyer actually costs."
      />

      <Section tone="night">
        <Reveal className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-5 text-[17px] leading-[1.75] text-smoke">
            <p className="max-w-measure">
              Most people arrive at an injury claim knowing nothing about how one works, which is
              normal — it is not a thing anyone plans to need. The questions below are the ones that
              come up first, answered the way we would answer them on the phone.
            </p>
            <p className="max-w-measure">
              None of it is legal advice about your situation. Georgia law is consistent, but cases are
              not, and the answer that fits your facts may differ from the general one. If you want a
              read on your own case, that conversation is free.
            </p>
          </div>
          <div className="lg:pt-2">
            <DeadlineNotice tone="night" />
          </div>
        </Reveal>
      </Section>

      {masterFaqGroups.map((group, i) => (
        <Section
          key={group.heading}
          tone={i % 2 === 0 ? 'bone' : 'night'}
          label={`Part ${String(i + 1).padStart(2, '0')}`}
          title={group.heading}
        >
          <FAQAccordion faqs={group.faqs} tone={i % 2 === 0 ? 'bone' : 'night'} startOpen={null} />
        </Section>
      ))}

      <Section
        tone="raised"
        label="By case type"
        title="Questions specific to your kind of case"
        intro="Every case-type page carries its own set of six questions covering the issues particular to it."
        split
      >
        <div className="space-y-12">
          {practiceByGroup.map((g, gi) => (
            <Reveal key={g.group} delay={gi * 0.04}>
              <h3 className="label mb-5 border-b border-white/10 pb-3 text-crest">{g.group}</h3>
              <ul className="grid gap-x-10 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
                {g.pages.map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={practiceHref(p.slug)}
                      className="group flex items-baseline justify-between gap-4 border-b border-white/[0.07] py-2.5"
                    >
                      <span className="text-[15px] text-white/75 transition-colors group-hover:text-crest">
                        {p.navLabel}
                      </span>
                      <span className="label shrink-0 text-white/30 transition-colors group-hover:text-crest">
                        {p.faqs.length} Q
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTABand
        heading="Still have a question we did not answer?"
        body="Ask it directly. The consultation is free and confidential, and it does not obligate you to hire anyone."
        secondary={{ label: 'Personal injury overview', href: '/personal-injury' }}
      />
    </>
  );
}
