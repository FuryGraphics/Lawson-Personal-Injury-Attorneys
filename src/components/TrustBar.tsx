import { trustBar } from '@/lib/site';
import Reveal from './Reveal';

/**
 * Four cells directly beneath the hero. Every claim here is about how the firm
 * charges and operates rather than what it has recovered — results claims need
 * substantiation under Georgia RPC 7.1 and the client has not supplied figures.
 * See TRUST_BAR_TODO in lib/site.
 */
export default function TrustBar() {
  return (
    <section className="border-b border-night-line bg-night-raised">
      <div className="container-x">
        <ul className="grid gap-px bg-white/[0.07] sm:grid-cols-2 lg:grid-cols-4">
          {trustBar.map((item, i) => (
            <Reveal
              key={item.stat}
              as="li"
              delay={i * 0.05}
              className="bg-night-raised px-6 py-9 text-center sm:px-4"
            >
              <p className="font-display text-[1.9rem] leading-none text-crest">{item.stat}</p>
              <p className="mt-3 text-[14px] leading-snug text-smoke">{item.label}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
