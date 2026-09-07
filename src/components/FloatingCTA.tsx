import Link from 'next/link';
import { site } from '@/lib/site';

/**
 * Mobile-only call bar fixed to the bottom of every page, per the brief.
 * Hidden at md and up, where the header CTA is always visible instead.
 */
export default function FloatingCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-crest/30 bg-night/95 backdrop-blur md:hidden">
      <a href={site.phoneHref} className="label flex items-center justify-center py-4 text-crest">
        Call Now
      </a>
      <Link href="/contact" className="label flex items-center justify-center bg-crest py-4 text-night">
        Free Review
      </Link>
    </div>
  );
}
