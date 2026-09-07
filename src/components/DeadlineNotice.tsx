import Link from 'next/link';

/**
 * The two-year statute of limitations, stated plainly.
 *
 * This is the single most consequential fact a visitor to an injury site can
 * leave with, and the one most likely to cost them the claim if they never hear
 * it. It appears on the case-type pages and the FAQ as a bordered aside rather
 * than body copy, so it survives skim-reading.
 */
export default function DeadlineNotice({ tone = 'night' }: { tone?: 'night' | 'bone' }) {
  const dark = tone === 'night';

  return (
    <aside
      className={`border-l-2 p-7 lg:p-8 ${
        dark ? 'border-crest bg-night-raised' : 'border-crest-deep bg-bone-warm'
      }`}
    >
      <p className={`label mb-4 ${dark ? 'text-crest' : 'text-crest-deep'}`}>The deadline in Georgia</p>
      <p className={`max-w-measure text-[17px] leading-[1.7] ${dark ? 'text-white/85' : 'text-ash'}`}>
        Most Georgia personal injury claims must be filed within{' '}
        <strong className={dark ? 'text-white' : 'text-night'}>two years</strong> of the date of injury
        (O.C.G.A. § 9-3-33). Claims involving a city, county, or state entity require an ante litem
        notice far sooner — six to twelve months. Evidence moves faster still: surveillance footage is
        often overwritten within weeks.
      </p>
      <Link
        href="/personal-injury/faq"
        className={`label mt-6 inline-block border-b pb-1 transition-colors ${
          dark
            ? 'border-white/20 text-white/70 hover:border-crest hover:text-crest'
            : 'border-night/20 text-ash hover:border-crest-deep hover:text-crest-deep'
        }`}
      >
        More on Georgia deadlines →
      </Link>
    </aside>
  );
}
