import Link from 'next/link';
import BlogIndex from '@/components/BlogIndex';
import CTABand from '@/components/CTABand';
import Hero from '@/components/Hero';
import JsonLd from '@/components/JsonLd';
import Reveal from '@/components/Reveal';
import Section from '@/components/Section';
import { photos } from '@/lib/images';
import { breadcrumbSchema, pageMeta } from '@/lib/seo';

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Blog', href: '/blog' },
];

export const metadata = pageMeta({
  title: 'Atlanta Personal Injury Legal Tips',
  description:
    'Plain-English guidance on Georgia personal injury law: filing deadlines, what to do after a crash, case value, and premises liability. Call (404) 394-9410.',
  path: '/blog',
});

export default function BlogPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />

      <Hero
        crumbs={crumbs}
        image={photos.highwayLong}
        label="Blog"
        title={
          <>
            Georgia injury law, <span className="em-crest">explained</span>
          </>
        }
        deck="Practical guidance on the questions that actually determine what happens to a claim — deadlines, evidence, insurance, and value."
      />

      <Section tone="night">
        <Reveal className="mb-14 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="label mb-4 text-crest">Articles</p>
            <h2 className="display-md max-w-[20ch] text-white">Written for people, not for search engines</h2>
            <span className="underline-crest mt-6" aria-hidden="true" />
          </div>
          <p className="max-w-measure text-lg leading-[1.65] text-smoke">
            These pieces are being written and reviewed before publication. In the meantime, each topic
            below links to the practice page that covers the same ground in depth.
          </p>
        </Reveal>

        <BlogIndex />
      </Section>

      <Section tone="raised">
        <Reveal className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h2 className="display-md max-w-[24ch] text-white">
              Have a question these do not answer?
            </h2>
            <span className="underline-crest mt-6" aria-hidden="true" />
            <p className="mt-6 max-w-measure leading-relaxed text-smoke">
              The injury FAQ covers fifteen of the most common ones. If yours is not there, ask it
              directly — the consultation is free.
            </p>
          </div>
          <div className="flex flex-col gap-3 lg:min-w-[260px]">
            <Link href="/personal-injury/faq" className="btn-crest">
              Read the FAQ
            </Link>
            <Link href="/contact" className="btn-outline-light">
              Ask a question
            </Link>
          </div>
        </Reveal>
      </Section>

      <CTABand secondary={{ label: 'Read the Injury FAQ', href: '/personal-injury/faq' }} />
    </>
  );
}
