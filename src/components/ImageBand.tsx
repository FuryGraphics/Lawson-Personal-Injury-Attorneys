import Image from 'next/image';
import type { Photo } from '@/lib/images';
import Reveal from './Reveal';

/**
 * A full-bleed photographic band used to break up the long pages.
 *
 * Deliberately quiet: one line of copy over a heavily darkened photograph. It
 * exists to give the eye somewhere to rest between dense text sections, not to
 * carry information — so nothing here is the only place a fact appears.
 */
export default function ImageBand({
  photo,
  label,
  heading,
  body,
  height = 'md',
}: {
  photo: Photo;
  label?: string;
  heading: string;
  body?: string;
  height?: 'sm' | 'md';
}) {
  return (
    <section
      className={`relative isolate flex items-center overflow-hidden bg-night ${
        height === 'sm' ? 'min-h-[320px] py-20' : 'min-h-[420px] py-24 lg:min-h-[480px]'
      }`}
    >
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        loading="lazy"
        sizes="100vw"
        className="-z-10 object-cover opacity-[0.3]"
        style={{ objectPosition: photo.position }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-night via-night/85 to-night/40"
      />
      <div className="grain absolute inset-0 -z-10" aria-hidden="true" />

      <div className="container-x">
        <Reveal>
          {label && <p className="label mb-5 text-crest">{label}</p>}
          <h2 className="display-md max-w-[24ch] text-white">{heading}</h2>
          <span className="underline-crest mt-6" aria-hidden="true" />
          {body && <p className="mt-7 max-w-[56ch] text-lg leading-[1.65] text-smoke">{body}</p>}
        </Reveal>
      </div>
    </section>
  );
}
