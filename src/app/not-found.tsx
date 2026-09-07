import Link from 'next/link';
import { practiceHref, practicePages } from '@/lib/practice';
import { site } from '@/lib/site';

export const metadata = {
  title: 'Page Not Found',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="bg-night">
      <div className="container-x pb-24 pt-36 lg:pt-48">
        <p className="label mb-5 text-crest">404</p>
        <h1 className="display-lg max-w-[18ch] text-white">This page does not exist</h1>
        <span className="underline-crest mt-7" aria-hidden="true" />
        <p className="mt-8 max-w-measure text-lg leading-[1.6] text-smoke">
          The link may be out of date. If you were looking for help with an injury claim, the pages
          below cover most of what the firm handles — or just call {site.phone}.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link href="/contact" className="btn-crest">
            Free Case Review
          </Link>
          <a href={site.phoneHref} className="btn-outline-light">
            Call {site.phone}
          </a>
        </div>

        <ul className="mt-16 grid gap-x-10 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
          {practicePages.map((p) => (
            <li key={p.slug} className="border-b border-white/10 pb-3">
              <Link href={practiceHref(p.slug)} className="text-[15px] text-white/70 hover:text-crest">
                {p.navLabel}
              </Link>
            </li>
          ))}
          <li className="border-b border-white/10 pb-3">
            <Link href="/sitemap" className="text-[15px] text-white/70 hover:text-crest">
              Full sitemap
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
