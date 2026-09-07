import Link from 'next/link';

export type Chip = { label: string; href: string };

/** Service-area chips. Underline-on-hover rather than pills — quieter, and it
    keeps a long list of city names from reading as a tag cloud. */
export default function ChipLinks({ chips, tone = 'night' }: { chips: Chip[]; tone?: 'night' | 'bone' }) {
  const dark = tone === 'night';
  return (
    <ul className="flex flex-wrap gap-x-6 gap-y-3">
      {chips.map((c) => (
        <li key={`${c.href}-${c.label}`}>
          <Link
            href={c.href}
            className={`label border-b pb-1.5 transition-colors ${
              dark
                ? 'border-white/15 text-white/65 hover:border-crest hover:text-crest'
                : 'border-night/15 text-ash hover:border-crest-deep hover:text-crest-deep'
            }`}
          >
            {c.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
