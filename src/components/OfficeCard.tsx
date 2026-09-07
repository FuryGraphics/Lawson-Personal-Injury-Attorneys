import { site } from '@/lib/site';

/**
 * The office block. Renders the NAP from lib/site so contact, footer, and the
 * three location pages are guaranteed to agree — Google treats a mismatched
 * address as a different business.
 */
export default function OfficeCard({ tone = 'night' }: { tone?: 'night' | 'bone' }) {
  const dark = tone === 'night';
  const border = dark ? 'border-white/10' : 'border-night/15';
  const heading = dark ? 'text-crest' : 'text-crest-deep';
  const value = dark ? 'text-white' : 'text-night';
  const muted = dark ? 'text-smoke' : 'text-ash';
  const link = dark ? 'text-crest hover:text-crest-bright' : 'text-crest-deep hover:text-night';

  return (
    <div className={`border ${border} ${dark ? 'bg-night-raised' : 'bg-bone-warm'} p-8 lg:p-9`}>
      <p className={`label mb-6 ${heading}`}>Our office</p>

      <address className={`not-italic text-[17px] leading-[1.7] ${muted}`}>
        <span className={`block font-display text-xl ${value}`}>{site.name}</span>
        <span className="mt-2 block">
          {site.address.street}
          <br />
          {site.address.city}, {site.address.state} {site.address.zip}
        </span>
      </address>

      <dl className={`mt-7 space-y-4 border-t ${border} pt-7`}>
        <div>
          <dt className={`label mb-1.5 ${dark ? 'text-white/40' : 'text-ash/70'}`}>Phone</dt>
          <dd>
            <a href={site.phoneHref} className={`font-display text-[1.6rem] leading-none ${link}`}>
              {site.phone}
            </a>
          </dd>
        </div>
        <div>
          <dt className={`label mb-1.5 ${dark ? 'text-white/40' : 'text-ash/70'}`}>Email</dt>
          <dd>
            <a href={site.emailHref} className={`break-all text-[15px] ${link}`}>
              {site.email}
            </a>
          </dd>
        </div>
        <div>
          <dt className={`label mb-1.5 ${dark ? 'text-white/40' : 'text-ash/70'}`}>Hours</dt>
          <dd className={`text-[15px] leading-relaxed ${muted}`}>{site.hours}</dd>
        </div>
      </dl>

      <a
        href={site.mapDirectionsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`label mt-7 inline-block border-b pb-1 transition-colors ${
          dark
            ? 'border-white/20 text-white/70 hover:border-crest hover:text-crest'
            : 'border-night/20 text-ash hover:border-crest-deep hover:text-crest-deep'
        }`}
      >
        Get directions →
      </a>
    </div>
  );
}
