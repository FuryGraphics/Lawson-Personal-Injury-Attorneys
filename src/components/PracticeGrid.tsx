import Link from 'next/link';
import { featuredPractices, practiceHref, practicePages } from '@/lib/practice';
import Reveal from './Reveal';

/**
 * The case-type grid.
 *
 * Defaults to the six featured types — a wall of all twenty-four is a worse
 * front door than a curated set, and every surface that uses this also links to
 * the full index. Pass `all` on the pages whose job is to be exhaustive.
 */
export default function PracticeGrid({
  tone = 'night',
  all = false,
}: {
  tone?: 'night' | 'bone';
  all?: boolean;
}) {
  const dark = tone === 'night';
  const pages = all ? practicePages : featuredPractices;

  return (
    <ul className={`grid gap-px ${dark ? 'bg-white/10' : 'bg-night/10'} sm:grid-cols-2 lg:grid-cols-3`}>
      {pages.map((p, i) => (
        <Reveal key={p.slug} as="li" delay={i * 0.05}>
          <Link
            href={practiceHref(p.slug)}
            className={`group flex h-full flex-col p-8 transition-colors ${
              dark ? 'bg-night hover:bg-night-raised' : 'bg-bone hover:bg-bone-warm'
            }`}
          >
            <span className={`label ${dark ? 'text-crest/50' : 'text-crest-deep/60'}`}>
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3
              className={`mt-5 font-display text-[1.5rem] leading-snug transition-colors ${
                dark ? 'text-white group-hover:text-crest' : 'text-night group-hover:text-crest-deep'
              }`}
            >
              {p.navLabel}
            </h3>
            <span
              className={`mt-4 block h-[2px] w-10 transition-all duration-300 group-hover:w-16 ${
                dark ? 'bg-crest' : 'bg-crest-deep'
              }`}
              aria-hidden="true"
            />
            <p className={`mt-5 flex-1 text-[15px] leading-relaxed ${dark ? 'text-smoke' : 'text-ash'}`}>
              {p.cardBlurb}
            </p>
            <span
              className={`label mt-7 flex items-center gap-3 ${
                dark ? 'text-white/70 group-hover:text-crest' : 'text-ash group-hover:text-crest-deep'
              }`}
            >
              Learn more
              <span className="h-px w-8 bg-current transition-all duration-300 group-hover:w-14" />
            </span>
          </Link>
        </Reveal>
      ))}
    </ul>
  );
}
