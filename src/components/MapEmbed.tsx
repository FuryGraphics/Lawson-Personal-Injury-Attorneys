import { site } from '@/lib/site';

/**
 * Every map on the site — homepage, contact page, and all three location pages
 * — points at the one real office. A service-area page must never drop a pin on
 * a city where the firm has no office.
 *
 * The address and a directions link sit *behind* the iframe rather than inside
 * it. If Google's embed is slow, blocked by an extension, or refused in a
 * privacy-hardened browser, the visitor still sees where the office is and can
 * still get directions — the frame goes transparent and the fallback shows
 * through instead of leaving a grey rectangle.
 *
 * Loading is lazy because the map is always below the fold and Google's embed
 * is heavy; `eager` is available for the rare case where it is not.
 */
export default function MapEmbed({
  title,
  loading = 'lazy',
  className = '',
}: {
  title: string;
  loading?: 'lazy' | 'eager';
  className?: string;
}) {
  return (
    <div
      className={`relative isolate aspect-[4/3] w-full overflow-hidden border border-white/10 bg-night-raised lg:aspect-[16/10] ${className}`}
    >
      {/* Fallback layer — covered by the iframe once it paints. */}
      <div className="absolute inset-0 -z-10 flex flex-col items-center justify-center gap-3 p-8 text-center">
        <p className="label text-crest">{site.name}</p>
        <p className="text-[15px] leading-relaxed text-smoke">
          {site.address.street}
          <br />
          {site.address.city}, {site.address.state} {site.address.zip}
        </p>
        <a
          href={site.mapDirectionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="label mt-2 border-b border-white/25 pb-1 text-white/70 transition-colors hover:border-crest hover:text-crest"
        >
          Open in Google Maps →
        </a>
      </div>

      <iframe
        title={title}
        src={site.mapEmbedSrc}
        loading={loading}
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute inset-0 h-full w-full"
        style={{ border: 0 }}
        allowFullScreen
      />
    </div>
  );
}
