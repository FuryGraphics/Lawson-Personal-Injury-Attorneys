'use client';

import { useEffect } from 'react';

/**
 * The LeadConnector launcher is fixed at `bottom: 20px`, which lands it on top
 * of our mobile call bar (measured: 51px tall). The widget renders into an open
 * shadow root, so the only way to reach the button is to append a stylesheet to
 * that root — a normal global rule cannot cross the boundary.
 *
 * Written defensively: it polls briefly for the element, gives up after ten
 * seconds, and only shifts the bubble on small screens. If the vendor renames
 * the class the rule stops matching and we are back to the original overlap —
 * degraded, not broken.
 */
const CSS = `
@media (max-width: 767px) {
  .lc_text-widget--bubble { bottom: 76px !important; }
}
`;

export default function ChatWidgetOffset() {
  useEffect(() => {
    let attempts = 0;
    const id = window.setInterval(() => {
      attempts += 1;
      const root = document.querySelector('chat-widget')?.shadowRoot;

      if (root && !root.querySelector('style[data-lawson-offset]')) {
        const style = document.createElement('style');
        style.setAttribute('data-lawson-offset', '');
        style.textContent = CSS;
        root.appendChild(style);
        window.clearInterval(id);
      } else if (attempts > 40) {
        window.clearInterval(id);
      }
    }, 250);

    return () => window.clearInterval(id);
  }, []);

  return null;
}
