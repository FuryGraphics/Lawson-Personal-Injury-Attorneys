import Link from 'next/link';
import { site } from '@/lib/site';
import Reveal from './Reveal';

type Props = {
  heading?: string;
  body?: string;
  secondary?: { label: string; href: string };
};

/**
 * The full-width crest CTA that closes every page. It is the one solid-crest
 * surface on the site, which is what makes it read as the end of the page
 * rather than another section.
 */
export default function CTABand({
  heading = 'Talk to a lawyer before you talk to the adjuster.',
  body = 'The consultation is free and confidential, and there is no fee unless we win. If we think you do not need us, we will tell you that too.',
  secondary = { label: 'Read the Injury FAQ', href: '/personal-injury/faq' },
}: Props) {
  return (
    <section className="bg-crest text-night">
      <div className="container-x py-20 lg:py-24">
        <Reveal className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <p className="label mb-5 text-night/60">Free case review</p>
            <h2 className="display-lg max-w-[20ch] text-night">{heading}</h2>
            <span className="mt-6 block h-[3px] w-20 bg-night/70" aria-hidden="true" />
            <p className="mt-7 max-w-[54ch] leading-relaxed text-night/80">{body}</p>
          </div>

          <div className="lg:pb-2">
            <a
              href={site.phoneHref}
              className="block font-display text-[2.6rem] leading-none text-night transition-opacity hover:opacity-70"
            >
              {site.phone}
            </a>
            <p className="label mt-4 text-night/60">{site.hoursShort}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="btn bg-night text-bone hover:bg-night-raised focus-visible:ring-night focus-visible:ring-offset-crest"
              >
                Start My Case Review
              </Link>
              <Link
                href={secondary.href}
                className="btn border border-night/30 text-night hover:border-night hover:bg-night/10 focus-visible:ring-night focus-visible:ring-offset-crest"
              >
                {secondary.label}
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
