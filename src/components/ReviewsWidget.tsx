import { site } from '@/lib/site';
import Reveal from './Reveal';

/**
 * Google reviews.
 *
 * Deliberately a live link out rather than transcribed review text. Two
 * reasons: the firm's review link was not supplied with the intake form (see
 * the TODO in lib/site), and copying review content onto the site would mean
 * publishing testimonials that cannot be verified from here. Neither invented
 * reviews nor a hardcoded star rating in schema is worth the risk.
 *
 * TODO(client): once the Google review URL is confirmed, this can either stay
 * as-is or be swapped for an embedded feed widget (Elfsight, Trustindex, or a
 * Places API pull). If a feed is embedded, it must render real reviews only —
 * and aggregateRating schema should still be left off unless the firm is
 * prepared to keep it accurate.
 */
export default function ReviewsWidget({ tone = 'night' }: { tone?: 'night' | 'bone' }) {
  const dark = tone === 'night';

  return (
    <Reveal
      className={`border p-9 lg:p-12 ${
        dark ? 'border-white/10 bg-night-raised' : 'border-night/10 bg-bone-warm'
      }`}
    >
      <div className="grid gap-9 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <div className="mb-5 flex items-center gap-3" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg key={i} viewBox="0 0 20 20" className={`h-5 w-5 ${dark ? 'text-crest' : 'text-crest-deep'}`} fill="currentColor">
                <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
              </svg>
            ))}
          </div>
          <h3 className={`display-md max-w-[22ch] ${dark ? 'text-white' : 'text-night'}`}>
            Read what clients say on Google
          </h3>
          <p className={`mt-5 max-w-measure leading-relaxed ${dark ? 'text-smoke' : 'text-ash'}`}>
            Reviews live on the firm’s Google Business Profile, where they are verified and cannot be
            edited by us. That is the honest place to read them — including any review the firm would
            rather you did not see.
          </p>
        </div>

        <div className="flex flex-col gap-3 lg:min-w-[240px]">
          <a
            href={site.googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={dark ? 'btn-crest' : 'btn-outline-dark'}
          >
            Read Google Reviews
          </a>
          <a
            href={site.googleWriteReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={dark ? 'btn-outline-light' : 'btn-outline-dark'}
          >
            Leave a Review
          </a>
        </div>
      </div>
    </Reveal>
  );
}
