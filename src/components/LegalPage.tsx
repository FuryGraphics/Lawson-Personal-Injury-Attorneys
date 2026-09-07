import type { ReactNode } from 'react';
import Breadcrumbs, { type Crumb } from './Breadcrumbs';

/**
 * Wrapper for the two long-form legal pages. Renders on bone rather than night:
 * these are the only pages on the site anyone reads top to bottom, and dark
 * grounds are measurably harder for sustained reading.
 */
export default function LegalPage({
  title,
  updated,
  crumbs,
  children,
}: {
  title: string;
  updated: string;
  crumbs: Crumb[];
  children: ReactNode;
}) {
  return (
    <article className="bg-bone">
      <div className="container-x pb-24 pt-32 lg:pt-40">
        <Breadcrumbs crumbs={crumbs} tone="light" className="mb-8" />
        <h1 className="display-lg max-w-[20ch] text-night">{title}</h1>
        <span className="underline-crest-anim mt-7 !bg-crest-deep" aria-hidden="true" />
        <p className="label mt-7 text-ash/70">Last updated {updated}</p>

        <div className="prose-legal mt-14 text-ash">{children}</div>
      </div>
    </article>
  );
}
