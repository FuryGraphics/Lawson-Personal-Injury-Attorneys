import type { Config } from 'tailwindcss';

/**
 * Palette derived from the client's logo.
 *
 * The mark supplies exactly two colours: a slate-periwinkle (#70738A) for the
 * heraldic eagle and the "PERSONAL INJURY ATTORNEYS" line, and a near-black
 * navy (#2B2D39) for the "Lawson" wordmark.
 *
 * Neither is usable as a text colour on its own — #70738A measures 3.80:1 on
 * the dark ground and 4.17:1 on the light one, so it fails WCAG AA in every
 * text role, and as a solid fill it cannot carry dark OR light text. It is kept
 * here as `crest.brand` for the logo and for decorative fills only. The text
 * roles use tuned tints of it, all verified at 6.6:1 or better.
 */
const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        // Ground family — the logo's navy, darkened into a usable range.
        night: {
          DEFAULT: '#161822', // primary ground
          raised: '#1F2230', // cards and panels sitting on the ground
          deep: '#0E1017', // footer base, image overlays
          line: '#2E3242', // hairline dividers on dark
        },
        crest: {
          DEFAULT: '#A9AECB', // accent + links on dark — 8.08:1 on ground
          bright: '#C9CDE0', // emphasis and the CTA fill — 11.19:1 on ground
          deep: '#4B4E66', // accent on the light ground — 7.29:1 on bone
          brand: '#70738A', // the logo colour itself. Decorative use only.
        },
        bone: {
          DEFAULT: '#F2F2F6',
          warm: '#E7E7EE',
        },
        smoke: '#A2A6B6', // body copy on night — 7.30:1
        ash: '#474B5C', // body copy on bone — 7.74:1
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1240px',
        measure: '68ch',
      },
      keyframes: {
        'underline-in': {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
        rise: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'underline-in': 'underline-in 0.9s cubic-bezier(0.22,1,0.36,1) 0.25s both',
        rise: 'rise 0.7s cubic-bezier(0.22,1,0.36,1) both',
      },
    },
  },
  plugins: [],
};

export default config;
