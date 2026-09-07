import Link from 'next/link';
import { resolveRelated } from '@/lib/practice';
import Reveal from './Reveal';

/**
 * Internal-link strip at the foot of each case-type page. The brief requires
 * every page to link out to 2–3 related pages; this renders the `related` array
 * from the registry so those links are data rather than hand-maintained markup.
 */
export default function RelatedPages({ slugs, tone = 'bone' }: { slugs: string[]; tone?: 'night' | 'bone' }) {
  const items = slugs.map(resolveRelated).filter((x): x is NonNullable<typeof x> => x !== null);
  if (items.length === 0) return null;

  const dark = tone === 'night';

  return (
    <ul className={`grid gap-px ${dark ? 'bg-white/10' : 'bg-night/10'} sm:grid-cols-3`}>
      {items.map((item, i) => (
        <Reveal key={item.href} as="li" delay={i * 0.06}>
          <Link
            href={item.href}
            className={`group flex h-full flex-col p-7 transition-colors ${
              dark ? 'bg-night hover:bg-night-raised' : 'bg-bone hover:bg-bone-warm'
            }`}
          >
            <h3
              className={`font-display text-xl transition-colors ${
                dark ? 'text-white group-hover:text-crest' : 'text-night group-hover:text-crest-deep'
              }`}
            >
              {item.label}
            </h3>
            <p className={`mt-3 flex-1 text-[15px] leading-relaxed ${dark ? 'text-smoke' : 'text-ash'}`}>
              {item.blurb}
            </p>
            <span className={`label mt-5 ${dark ? 'text-crest' : 'text-crest-deep'}`}>Read more →</span>
          </Link>
        </Reveal>
      ))}
    </ul>
  );
}
