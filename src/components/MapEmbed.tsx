import { site } from '@/lib/site';

/**
 * Every map on the site — contact page and all three location pages — points at
 * the one real office. A service-area page must never drop a pin on a city
 * where the firm has no office.
 *
 * The iframe is lazy-loaded so it stays out of the critical path; Google's embed
 * is heavy and it is always below the fold.
 */
export default function MapEmbed({ title }: { title: string }) {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden border border-white/10 bg-night-raised lg:aspect-[16/10]">
      <iframe
        title={title}
        src={site.mapEmbedSrc}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute inset-0 h-full w-full"
        style={{ border: 0 }}
        allowFullScreen
      />
    </div>
  );
}
