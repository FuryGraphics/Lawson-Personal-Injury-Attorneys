import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { site } from '@/lib/site';
import Breadcrumbs, { type Crumb } from './Breadcrumbs';

type HeroProps = {
  label?: string;
  title: ReactNode;
  deck?: string;
  crumbs?: Crumb[];
  /** Optional background photograph. Path under /public. */
  image?: { src: string; alt: string; position?: string };
  size?: 'home' | 'inner';
  actions?: boolean;
  children?: ReactNode;
};

/**
 * Dark hero with the crest rule beneath the H1 — the brief's signature device,
 * present on every page. The rule animates in with scaleX so it draws rather
 * than fades.
 *
 * The photograph is optional and always sits behind a heavy gradient: the
 * headline has to stay legible, so the image is atmosphere rather than
 * content. Pages without one fall back to the gradient field, which is
 * designed to stand on its own.
 */
export default function Hero({
  label,
  title,
  deck,
  crumbs,
  image,
  size = 'inner',
  actions = true,
  children,
}: HeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-night">
      {image ? (
        <>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-[0.34]"
            style={{ objectPosition: image.position ?? 'center' }}
          />
          {/* Two overlays: a horizontal wash so copy on the left stays on a
              near-solid ground, and a vertical one so the fixed header does not
              sit on a bright patch of sky. */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-night via-night/88 to-night/45"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-b from-night/85 via-transparent to-night/70"
          />
        </>
      ) : (
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_12%_-10%,rgba(169,174,203,0.18),transparent_58%),radial-gradient(ellipse_at_88%_15%,rgba(112,115,138,0.14),transparent_55%)]"
        />
      )}
      <div className="grain absolute inset-0" aria-hidden="true" />

      <div
        className={`container-x relative ${
          size === 'home' ? 'pb-16 pt-32 lg:pb-20 lg:pt-44' : 'pb-16 pt-32 lg:pb-20 lg:pt-40'
        }`}
      >
        {crumbs && <Breadcrumbs crumbs={crumbs} className="mb-8" />}

        {label && <p className="label mb-5 text-crest">{label}</p>}

        <h1
          className={`text-white ${size === 'home' ? 'display-xl max-w-[16ch]' : 'display-lg max-w-[18ch]'}`}
        >
          {title}
        </h1>

        {/* The crest underline required beneath every H1. */}
        <span className="underline-crest-anim mt-7" aria-hidden="true" />

        {deck && (
          <p className="mt-8 max-w-[52ch] text-lg leading-[1.6] text-smoke lg:text-xl">{deck}</p>
        )}

        {actions && (
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link href="/contact" className="btn-crest">
              Free Case Review
            </Link>
            <a href={site.phoneHref} className="btn-outline-light">
              {site.phone}
            </a>
          </div>
        )}

        {children}
      </div>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-crest/25 to-transparent" />
    </section>
  );
}
