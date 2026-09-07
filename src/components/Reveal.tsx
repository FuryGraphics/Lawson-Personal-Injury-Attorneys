'use client';

import { createElement, useEffect, useRef, useState, type ReactNode } from 'react';

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: 'div' | 'section' | 'li' | 'article';
};

/**
 * Scroll-triggered fade-up.
 *
 * Content renders VISIBLE by default and is only hidden once the client has
 * confirmed it can reveal it again. That ordering matters on a law firm site:
 * if JavaScript fails, is blocked, or a crawler skips it, every section still
 * renders rather than sitting at opacity 0 forever. Elements already on screen
 * at mount are left alone so nothing flashes above the fold.
 */
export default function Reveal({ children, delay = 0, className = '', as = 'div' }: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [hidden, setHidden] = useState(false);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight) return;

    setHidden(true);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { rootMargin: '0px 0px -80px 0px' },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const invisible = hidden && !shown;

  return createElement(
    as,
    {
      ref,
      className: `transition-[opacity,transform] duration-700 ease-out ${
        invisible ? 'translate-y-7 opacity-0' : 'translate-y-0 opacity-100'
      } ${className}`,
      style: shown && delay ? { transitionDelay: `${delay}s` } : undefined,
    },
    children,
  );
}
