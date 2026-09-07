import Link from 'next/link';

export type Crumb = { name: string; href: string };

/** Required on every inner page. Pairs with breadcrumbSchema() from lib/seo. */
export default function Breadcrumbs({
  crumbs,
  className = '',
  tone = 'dark',
}: {
  crumbs: Crumb[];
  className?: string;
  tone?: 'dark' | 'light';
}) {
  const dark = tone === 'dark';
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className={`label flex flex-wrap items-center gap-2.5 ${dark ? 'text-white/40' : 'text-ash/60'}`}>
        {crumbs.map((c, i) => {
          const last = i === crumbs.length - 1;
          return (
            <li key={c.href} className="flex items-center gap-2.5">
              {last ? (
                <span className={dark ? 'text-crest' : 'text-crest-deep'} aria-current="page">
                  {c.name}
                </span>
              ) : (
                <Link href={c.href} className="transition-colors hover:text-crest">
                  {c.name}
                </Link>
              )}
              {!last && <span aria-hidden="true">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
