import type { Step } from '@/lib/practice';
import Reveal from './Reveal';

/**
 * Numbered because the content genuinely is a sequence — a client moves through
 * these stages in order. Outline numerals rather than filled, so the count
 * reads as structure and not as decoration competing with the headings.
 */
export default function ProcessSteps({ steps, tone = 'night' }: { steps: Step[]; tone?: 'night' | 'bone' }) {
  const dark = tone === 'night';
  const cols = steps.length === 3 ? 'sm:grid-cols-3' : 'sm:grid-cols-2 lg:grid-cols-4';

  return (
    <ol className={`grid gap-px ${dark ? 'bg-white/10' : 'bg-night/10'} ${cols}`}>
      {steps.map((s, i) => (
        <Reveal
          key={s.title}
          as="li"
          delay={i * 0.07}
          className={`relative px-7 pb-9 pt-8 ${dark ? 'bg-night' : 'bg-bone'}`}
        >
          <span
            className="block font-display text-[3.5rem] leading-none text-transparent"
            style={{
              WebkitTextStroke: `1px ${dark ? 'rgba(169,174,203,0.6)' : 'rgba(75,78,102,0.5)'}`,
            }}
            aria-hidden="true"
          >
            {String(i + 1).padStart(2, '0')}
          </span>
          <h3 className={`mt-5 font-display text-xl ${dark ? 'text-white' : 'text-night'}`}>{s.title}</h3>
          <p className={`mt-3 text-[15px] leading-relaxed ${dark ? 'text-smoke' : 'text-ash'}`}>{s.body}</p>
        </Reveal>
      ))}
    </ol>
  );
}
