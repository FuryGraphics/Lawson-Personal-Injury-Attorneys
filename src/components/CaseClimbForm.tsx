import Script from 'next/script';
import { NO_RELATIONSHIP_NOTICE } from '@/lib/site';

/**
 * Client's CaseClimb intake form, embedded as an iframe.
 *
 * This replaces the hand-built form that previously stood here. That one
 * deliberately refused to render a submit button until an endpoint was
 * configured, because a law firm form that looks functional but posts into
 * nothing loses cases silently. The endpoint now exists, so the real form
 * takes over and that guard is no longer needed.
 *
 * The vendor's form_embed.js posts height messages back to the parent and
 * resizes the iframe, so the wrapper carries a min-height matching the form's
 * declared `data-height` to avoid a layout jump before the script runs.
 *
 * The iframe styles itself, so it sits on a light panel rather than the dark
 * ground — a default-styled form dropped straight onto #161822 reads as broken.
 *
 * TODO(client): submit a live test through this form and confirm the lead
 * arrives in CaseClimb before launch.
 */
export default function CaseClimbForm() {
  return (
    <div className="border border-white/10 bg-night-raised p-6 lg:p-8">
      {/* No heading here: the embedded form supplies its own ("Get a free
          consultation") and the page hero already sets the context. Two
          headings stacked read as a mistake. */}
      <div className="overflow-hidden rounded-[10px] bg-white">
        <iframe
          src="https://services.caseclimb.com/widget/form/QElWDmDySuthx7ZVBfyh"
          id="inline-QElWDmDySuthx7ZVBfyh"
          title="Website Form (Lawson Personal Injury Attorneys)"
          className="block w-full border-none"
          style={{ minHeight: 540, borderRadius: 10 }}
          data-layout="{'id':'INLINE'}"
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name="Website Form (Lawson Personal Injury Attorneys)"
          data-height="540"
          data-layout-iframe-id="inline-QElWDmDySuthx7ZVBfyh"
          data-form-id="QElWDmDySuthx7ZVBfyh"
          data-cookie-consent="true"
          data-cookie-consent-provider="auto"
        />
      </div>

      <p className="mt-6 text-[13px] leading-relaxed text-white/45">{NO_RELATIONSHIP_NOTICE}</p>

      <Script src="https://services.caseclimb.com/js/form_embed.js" strategy="afterInteractive" />
    </div>
  );
}
