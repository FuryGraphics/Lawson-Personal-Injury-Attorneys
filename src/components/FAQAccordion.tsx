'use client';

import { useState } from 'react';
import type { Faq } from '@/lib/practice';

/**
 * The visible half of every FAQ on the site. The schema half is emitted
 * separately by faqSchema() so the two always come from the same array.
 */
export default function FAQAccordion({
  faqs,
  tone = 'night',
  startOpen = 0,
}: {
  faqs: Faq[];
  tone?: 'night' | 'bone';
  startOpen?: number | null;
}) {
  const [open, setOpen] = useState<number | null>(startOpen);
  const dark = tone === 'night';
  const border = dark ? 'border-white/10' : 'border-night/10';

  return (
    <div className={`border-t ${border}`}>
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q} className={`border-b ${border}`}>
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className={`group flex w-full items-start gap-6 py-6 text-left transition-colors ${
                  dark ? 'text-white hover:text-crest' : 'text-night hover:text-crest-deep'
                }`}
              >
                <span className={`label mt-2 shrink-0 ${dark ? 'text-crest/50' : 'text-crest-deep/60'}`}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="flex-1 font-display text-[1.3rem] leading-snug">{f.q}</span>
                <span
                  aria-hidden="true"
                  className={`mt-1.5 shrink-0 text-xl leading-none transition-transform duration-300 ${
                    dark ? 'text-crest' : 'text-crest-deep'
                  } ${isOpen ? 'rotate-45' : ''}`}
                >
                  +
                </span>
              </button>
            </h3>
            <div
              className={`grid transition-all duration-300 ${
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <p
                  className={`max-w-measure pb-8 pl-0 leading-[1.7] md:pl-[3.9rem] ${
                    dark ? 'text-smoke' : 'text-ash'
                  }`}
                >
                  {f.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
