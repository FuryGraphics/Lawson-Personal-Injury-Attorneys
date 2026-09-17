'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { practiceByGroup } from '@/lib/practice';
import { locationLinks } from '@/lib/locations';
import { site } from '@/lib/site';

const primaryLinks = [
  { label: 'Attorneys', href: '/attorneys' },
  { label: 'Practice Areas', href: '/practice-areas' },
];

const tailLinks = [
  { label: 'Reviews', href: '/testimonials' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

/** Pages that open on bone need a solid header from the first pixel. */
const lightHeroPages = new Set(['/disclaimer', '/privacy-policy', '/sitemap']);

/**
 * Transparent over the hero, solid once scrolled — the behaviour specified in
 * the brief. The Personal Injury mega-menu carries all 19 case types in three
 * grouped columns so the top level stays short.
 */
export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const [mobileDropOpen, setMobileDropOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setDropOpen(false);
    setMobileDropOpen(false);
  }, [pathname]);

  // Escape closes whichever layer is open. Without this the dropdown can only be
  // dismissed by moving the pointer away, which strands keyboard users inside it.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      setDropOpen(false);
      setMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const solid = scrolled || menuOpen || lightHeroPages.has(pathname);
  const inPractice = pathname.startsWith('/personal-injury') || pathname.startsWith('/practice-areas');

  const openDrop = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setDropOpen(true);
  };
  const closeDrop = () => {
    closeTimer.current = setTimeout(() => setDropOpen(false), 120);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? 'bg-night/95 backdrop-blur-sm' : 'bg-gradient-to-b from-black/70 to-transparent'
      }`}
    >
      {/* Utility bar. Collapses on scroll so the header tightens to one row. */}
      <div
        className={`hidden overflow-hidden border-b border-white/10 transition-all duration-300 lg:block ${
          scrolled ? 'max-h-0 opacity-0' : 'max-h-12 opacity-100'
        }`}
      >
        <div className="container-x flex h-11 items-center justify-between">
          <p className="label text-white/50">
            {site.addressLine}
            <span className="mx-3 text-white/20">/</span>
            <span className="text-crest">Open 24 hours</span>
          </p>
          <p className="label flex items-center gap-3 text-white/50">
            Answered 24/7
            <span className="text-white/20">/</span>
            <a href={site.phoneHref} className="text-crest hover:text-crest-bright">
              {site.phone}
            </a>
          </p>
        </div>
      </div>

      <div className="container-x flex h-[76px] items-center justify-between gap-4">
        <Link href="/" className="flex shrink-0 items-center" aria-label={`${site.name} — home`}>
          {/* Client artwork, recoloured for a dark ground: the navy wordmark
              becomes bone and the slate mark becomes the crest accent. The
              as-supplied version lives at /images/lawson-logo.png for any
              light-background use. */}
          <Image
            src="/images/lawson-logo-light.png"
            alt={site.name}
            width={2000}
            height={592}
            priority
            className="h-9 w-auto sm:h-10"
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          <NavLink href="/attorneys" active={pathname.startsWith('/attorneys')}>
            Attorneys
          </NavLink>

          <div onMouseEnter={openDrop} onMouseLeave={closeDrop}>
            <button
              type="button"
              className={`flex items-center gap-1.5 whitespace-nowrap text-[11px] font-medium uppercase tracking-[0.16em] transition-colors ${
                inPractice ? 'text-crest' : 'text-white/80 hover:text-crest'
              }`}
              aria-expanded={dropOpen}
              aria-haspopup="true"
              onClick={() => {
                // Not a blind toggle. On a pointer device hover has already
                // opened the panel by the time the click lands, so toggling
                // would slam it shut on the very click meant to engage it —
                // and with the pointer still parked on the trigger, no fresh
                // mouseenter fires to reopen it. Open when closed; when it is
                // already open, the click means "take me to the overview".
                if (dropOpen) router.push('/personal-injury');
                else setDropOpen(true);
              }}
            >
              Personal Injury
              <svg
                className={`h-3 w-3 transition-transform ${dropOpen ? 'rotate-180' : ''}`}
                viewBox="0 0 12 12"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
                aria-hidden="true"
              >
                <path d="m2.5 4.5 3.5 3.5 3.5-3.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {dropOpen && (
              /* Full-width mega-menu. Nineteen case types do not fit in a
                 single dropdown column, so they render as the three groups
                 defined in the registry.

                 Anchored to the header with top-full rather than a fixed
                 viewport offset: the utility bar collapses on scroll, so a
                 hardcoded top overlaps the nav row in one state and floats
                 below it in the other. */
              <div className="absolute inset-x-0 top-full z-50 px-6 sm:px-10">
                <div className="mx-auto w-full max-w-content">
                  <div className="animate-rise border border-white/10 bg-night-raised shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)]">
                    <div className="grid grid-cols-2 gap-x-8 gap-y-8 p-8 xl:grid-cols-5">
                      {practiceByGroup.map((g) => (
                        <div key={g.group}>
                          <h3 className="label mb-4 border-b border-white/10 pb-3 text-crest">
                            {g.group}
                          </h3>
                          <ul className="space-y-1">
                            {g.pages.map((page) => (
                              <li key={page.slug}>
                                <Link
                                  href={`/personal-injury/${page.slug}`}
                                  className="block py-1.5 text-[14px] leading-snug text-white/65 transition-colors hover:text-crest"
                                >
                                  {page.navLabel}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 px-8 py-4">
                      <Link href="/personal-injury" className="label text-white/70 hover:text-crest">
                        Personal Injury Overview
                      </Link>
                      <Link href="/personal-injury/faq" className="label text-crest hover:text-crest-bright">
                        Injury FAQ →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {tailLinks.map((l) => (
            <NavLink key={l.href} href={l.href} active={pathname.startsWith(l.href)}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-4 lg:flex">
          <a href={site.phoneHref} className="hidden text-[13px] text-crest hover:text-crest-bright xl:block">
            {site.phone}
          </a>
          <Link href="/contact" className="btn-crest !px-5 !py-3">
            Free Review
          </Link>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center border border-white/20 text-white lg:hidden"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.6} aria-hidden="true">
            {menuOpen ? (
              <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path strokeLinecap="round" d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </div>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-crest/30 to-transparent" />

      {menuOpen && (
        <div className="max-h-[calc(100vh-76px)] overflow-y-auto bg-night pb-16 lg:hidden">
          <nav className="container-x flex flex-col py-4" aria-label="Mobile">
            <MobileLink href="/">Home</MobileLink>
            {primaryLinks.slice(0, 1).map((l) => (
              <MobileLink key={l.href} href={l.href}>
                {l.label}
              </MobileLink>
            ))}

            <button
              type="button"
              className="flex items-center justify-between border-b border-white/10 py-4 text-left font-display text-lg text-white"
              onClick={() => setMobileDropOpen((v) => !v)}
              aria-expanded={mobileDropOpen}
            >
              Personal Injury
              <span className="text-crest">{mobileDropOpen ? '−' : '+'}</span>
            </button>
            {mobileDropOpen && (
              <div className="border-b border-white/10 bg-white/[0.03] px-4 py-4">
                <MobileSubLink href="/personal-injury">Personal Injury Overview</MobileSubLink>
                {practiceByGroup.map((g) => (
                  <div key={g.group} className="mt-5">
                    <p className="label mb-2 text-crest/70">{g.group}</p>
                    {g.pages.map((page) => (
                      <MobileSubLink key={page.slug} href={`/personal-injury/${page.slug}`}>
                        {page.navLabel}
                      </MobileSubLink>
                    ))}
                  </div>
                ))}
                <div className="mt-5">
                  <MobileSubLink href="/personal-injury/faq">Injury FAQ</MobileSubLink>
                </div>
              </div>
            )}

            <MobileLink href="/practice-areas">Practice Areas</MobileLink>
            {tailLinks.map((l) => (
              <MobileLink key={l.href} href={l.href}>
                {l.label}
              </MobileLink>
            ))}

            <p className="label mb-2 mt-8 text-crest">Where we practice</p>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {locationLinks.map((l) => (
                <Link key={l.href} href={l.href} className="text-[15px] text-white/60 hover:text-crest">
                  {l.label}
                </Link>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3">
              <Link href="/contact" className="btn-crest w-full">
                Free Case Review
              </Link>
              <a href={site.phoneHref} className="btn-outline-light w-full">
                Call {site.phone}
              </a>
              <p className="label mt-2 text-center text-white/40">Free, confidential case review</p>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

function NavLink({ href, active, children }: { href: string; active: boolean; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className={`whitespace-nowrap text-[11px] font-medium uppercase tracking-[0.16em] transition-colors ${
        active ? 'text-crest' : 'text-white/80 hover:text-crest'
      }`}
    >
      {children}
    </Link>
  );
}

function MobileLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="border-b border-white/10 py-4 font-display text-lg text-white hover:text-crest">
      {children}
    </Link>
  );
}

function MobileSubLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="block py-2 text-[15px] text-white/60 hover:text-crest">
      {children}
    </Link>
  );
}
