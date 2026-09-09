import Image from 'next/image';
import Link from 'next/link';
import { locationLinks } from '@/lib/locations';
import { practiceByGroup } from '@/lib/practice';
import {
  CONTINGENCY_NOTICE,
  NO_RELATIONSHIP_NOTICE,
  RESULTS_DISCLAIMER,
  serviceAreaChips,
  site,
  socialLinks,
} from '@/lib/site';

/**
 * The NAP block here is the canonical one. It renders from lib/site so it stays
 * byte-identical to the location pages and the LocalBusiness schema.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-night-deep text-smoke">
      <div className="container-x pb-14 pt-20">
        <div className="grid gap-10 border-b border-white/10 pb-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <Image
              src="/images/lawson-logo-light.png"
              alt={site.name}
              width={2000}
              height={592}
              className="h-14 w-auto lg:h-16"
            />
            <span className="underline-crest mt-6" aria-hidden="true" />
            <p className="mt-6 max-w-[48ch] leading-relaxed">
              A personal injury firm led by {site.attorney}, representing injured people and their
              families across metro Atlanta and Gwinnett County from an office on the Lawrenceville
              square.
            </p>
          </div>
          <div className="lg:text-right">
            <a
              href={site.phoneHref}
              className="font-display text-[2.2rem] leading-none text-crest hover:text-crest-bright"
            >
              {site.phone}
            </a>
            <p className="label mt-4 text-white/40">Free case review · No fee unless we win</p>
          </div>
        </div>

        <div className="grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {/* Two columns of grouped case types — nineteen links in one stack
              makes the footer taller than most of the pages above it. */}
          <FooterCol title="Practice Areas">
            <FooterLink href="/personal-injury">Personal Injury Overview</FooterLink>
            {practiceByGroup.slice(0, 2).map((g) => (
              <div key={g.group} className="pt-3">
                <p className="mb-1.5 text-[13px] uppercase tracking-[0.14em] text-white/35">
                  {g.group}
                </p>
                {g.pages.map((page) => (
                  <FooterLink key={page.slug} href={`/personal-injury/${page.slug}`}>
                    {page.navLabel}
                  </FooterLink>
                ))}
              </div>
            ))}
          </FooterCol>

          <FooterCol title="More Case Types">
            {practiceByGroup.slice(2).map((g) => (
              <div key={g.group} className="pb-3">
                <p className="mb-1.5 text-[13px] uppercase tracking-[0.14em] text-white/35">
                  {g.group}
                </p>
                {g.pages.map((page) => (
                  <FooterLink key={page.slug} href={`/personal-injury/${page.slug}`}>
                    {page.navLabel}
                  </FooterLink>
                ))}
              </div>
            ))}
            <FooterLink href="/personal-injury/faq">Injury FAQ</FooterLink>
          </FooterCol>

          <FooterCol title="Firm">
            <FooterLink href="/attorneys">Our Attorneys</FooterLink>
            <FooterLink href="/practice-areas">Practice Areas</FooterLink>
            <FooterLink href="/testimonials">Reviews</FooterLink>
            <FooterLink href="/blog">Blog</FooterLink>
            <FooterLink href="/contact">Contact</FooterLink>
            <FooterLink href="/sitemap">Sitemap</FooterLink>
          </FooterCol>

          <FooterCol title="Where We Practice">
            {locationLinks.map((l) => (
              <FooterLink key={l.href} href={l.href}>
                {l.label}
              </FooterLink>
            ))}
            <p className="mt-3 text-[14px] leading-relaxed text-white/40">
              {serviceAreaChips.map((c) => c.label).join(' · ')}
            </p>
          </FooterCol>

          {/* NAP — name, address, phone. Must match the Google Business Profile exactly. */}
          <FooterCol title="Office">
            <address className="not-italic text-[15px] leading-relaxed text-white/70">
              <span className="block text-white">{site.name}</span>
              {site.address.street}
              <br />
              {site.address.city}, {site.address.state} {site.address.zip}
            </address>
            <a href={site.phoneHref} className="mt-3 block text-[15px] text-crest hover:text-crest-bright">
              {site.phone}
            </a>
            <a href={site.emailHref} className="block break-all text-[15px] text-crest hover:text-crest-bright">
              {site.email}
            </a>
            <p className="mt-3 text-[15px] leading-relaxed text-white/70">{site.hoursShort}</p>
            <a
              href={site.mapDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="label mt-4 inline-block text-white/50 hover:text-crest"
            >
              Get directions →
            </a>
            {socialLinks.length > 0 && (
              <div className="mt-5 flex gap-5">
                {socialLinks.map((s) => (
                  <a
                    key={s.href}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="label text-white/50 hover:text-crest"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            )}
          </FooterCol>
        </div>

        <div className="border-t border-white/10 pt-10 text-[13px] leading-relaxed text-white/40">
          <p className="label mb-4 text-white/60">Attorney Advertising</p>
          <p className="mb-3 max-w-[92ch]">{NO_RELATIONSHIP_NOTICE}</p>
          <p className="mb-3 max-w-[92ch]">{RESULTS_DISCLAIMER}</p>
          <p className="mb-8 max-w-[92ch]">{CONTINGENCY_NOTICE}</p>
          <div className="flex flex-col justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
            <p>
              © {year} {site.legalName}. All rights reserved.
            </p>
            <div className="label flex flex-wrap gap-6">
              <Link href="/disclaimer" className="hover:text-crest">
                Disclaimer
              </Link>
              <Link href="/privacy-policy" className="hover:text-crest">
                Privacy Policy
              </Link>
              <Link href="/sitemap" className="hover:text-crest">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="label mb-5 text-crest">{title}</h2>
      <div className="space-y-2">{children}</div>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="block text-[15px] text-white/70 transition-colors hover:text-crest">
      {children}
    </Link>
  );
}
