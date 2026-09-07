import type { ReactNode } from 'react';
import Reveal from './Reveal';

type SectionProps = {
  id?: string;
  /** night is the site ground; bone is the light counter-tone for long reading. */
  tone?: 'night' | 'raised' | 'bone' | 'bone-warm';
  label?: string;
  title?: ReactNode;
  intro?: ReactNode;
  /** Places the intro beside the heading instead of beneath it. */
  split?: boolean;
  className?: string;
  children: ReactNode;
};

const tones = {
  night: 'bg-night text-smoke',
  raised: 'bg-night-raised text-smoke',
  bone: 'bg-bone text-ash',
  'bone-warm': 'bg-bone-warm text-ash',
};

/**
 * Standard section wrapper. The heading block carries the brief's crest
 * underline device, so every H2 on the site gets it without each page
 * re-implementing it.
 */
export default function Section({
  id,
  tone = 'night',
  label,
  title,
  intro,
  split = false,
  className = '',
  children,
}: SectionProps) {
  const dark = tone === 'night' || tone === 'raised';
  const hasHead = label || title || intro;

  return (
    <section id={id} className={`${tones[tone]} py-20 lg:py-28 ${className}`}>
      <div className="container-x">
        {hasHead && (
          <Reveal className={`mb-14 ${split ? 'grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end' : ''}`}>
            <div>
              {label && (
                <p className={`label mb-4 ${dark ? 'text-crest' : 'text-crest-deep'}`}>{label}</p>
              )}
              {title && (
                <>
                  <h2 className={`display-lg max-w-[20ch] ${dark ? 'text-white' : 'text-night'}`}>
                    {title}
                  </h2>
                  <span className="underline-crest mt-6" aria-hidden="true" />
                </>
              )}
            </div>
            {intro && (
              <div
                className={`${split ? '' : 'mt-7'} max-w-measure text-lg leading-[1.65] ${
                  dark ? 'text-smoke' : 'text-ash'
                }`}
              >
                {intro}
              </div>
            )}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}
