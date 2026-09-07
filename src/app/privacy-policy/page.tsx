import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import LegalPage from '@/components/LegalPage';
import { breadcrumbSchema, pageMeta } from '@/lib/seo';
import { site } from '@/lib/site';

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Privacy Policy', href: '/privacy-policy' },
];

export const metadata = pageMeta({
  title: 'Privacy Policy',
  description:
    'How Lawson Personal Injury Attorneys collects, uses, and protects information submitted through this website, including contact forms, cookies, and analytics.',
  path: '/privacy-policy',
});

/**
 * TODO(client): review before launch and confirm two things in particular —
 * (1) which analytics and intake tools are actually deployed, so the sections
 * below match reality, and (2) whether the firm wants to add a CCPA/CPRA or
 * GDPR section. Georgia has no comprehensive state privacy statute, but a firm
 * that advertises beyond Georgia may still receive requests from residents of
 * states that do.
 */
export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <LegalPage title="Privacy Policy" updated="September 2025" crumbs={crumbs}>
        <p>
          {site.legalName} (“the firm,” “we,” or “us”) operates this website. This policy explains
          what information the site collects, why, and what we do with it. It applies to this website
          only — not to information you provide after becoming a client, which is governed by the
          attorney-client relationship and the rules of professional conduct.
        </p>

        <h2>Information you give us</h2>
        <p>
          If you submit the contact form or email or call the firm, we collect what you choose to send:
          typically your name, phone number, email address, the type of case, and whatever you tell us
          about your situation. We ask for this in order to evaluate and respond to your inquiry.
        </p>
        <p>
          Please do not send confidential or sensitive information through this website before an
          attorney-client relationship has been established in writing. See our{' '}
          <Link href="/disclaimer">Disclaimer</Link>.
        </p>

        <h2>Information collected automatically</h2>
        <p>
          Like most websites, this one collects certain technical information automatically when you
          visit, which may include:
        </p>
        <ul>
          <li>IP address and general geographic region</li>
          <li>Browser type, device type, and operating system</li>
          <li>Pages viewed, time on page, and the site or search that referred you</li>
          <li>Date and time of your visit</li>
        </ul>

        <h2>Cookies and analytics</h2>
        <p>
          This site uses Google Analytics 4 to understand how visitors find and use it. Google
          Analytics sets cookies and collects usage data on our behalf; that data is processed by
          Google under its own terms. We use it in aggregate — to see which pages are useful and where
          people leave — not to identify individual visitors.
        </p>
        <p>
          Most browsers let you block or delete cookies through their settings. Google also publishes a
          browser add-on that opts you out of Google Analytics entirely. Blocking cookies will not
          prevent you from using this site.
        </p>

        <h2>Third-party services on this site</h2>
        <p>
          Two outside services operate on this website and receive information directly from your
          browser:
        </p>
        <ul>
          <li>
            <strong>CaseClimb</strong> hosts the intake form on our contact page. When you complete
            that form, the information you enter is submitted to CaseClimb, which delivers it to the
            firm and stores it on our behalf. The form is embedded from CaseClimb’s servers and sets
            its own cookies subject to its consent settings.
          </li>
          <li>
            <strong>LeadConnector</strong> provides the chat widget that appears on every page. If
            you start a chat, the messages you send, along with any name, phone number, or email you
            provide, are processed by LeadConnector and passed to the firm.
          </li>
        </ul>
        <p>
          Both are used to receive and respond to inquiries, not for advertising. Each has its own
          privacy policy governing how it handles data on its systems. As with any method of
          contacting the firm, please do not send confidential details through the form or the chat
          before an attorney-client relationship has been established in writing.
        </p>

        <h2>How we use information</h2>
        <ul>
          <li>To respond to your inquiry and evaluate whether the firm can assist you</li>
          <li>To run a conflicts check before any representation begins</li>
          <li>To communicate with you about your inquiry by phone, email, or text</li>
          <li>To operate, secure, and improve this website</li>
          <li>To comply with legal, ethical, and regulatory obligations</li>
        </ul>

        <h2>We do not sell your information</h2>
        <p>
          The firm does not sell, rent, or trade personal information collected through this website.
          We do not share it with third parties for their own marketing purposes.
        </p>

        <h2>When we may share information</h2>
        <p>Information may be shared in limited circumstances:</p>
        <ul>
          <li>
            With service providers who operate parts of this site or the firm’s practice — website
            hosting, analytics, email, and case management — who are permitted to use it only to
            provide those services
          </li>
          <li>
            With co-counsel, experts, or others involved in a matter, where you are a client and it is
            necessary to the representation
          </li>
          <li>When required by law, subpoena, court order, or applicable rules of professional conduct</li>
          <li>To protect the rights, safety, or property of the firm, our clients, or others</li>
        </ul>

        <h2>Text messages</h2>
        <p>
          If you provide a mobile number and consent to be contacted — through the contact form, the
          chat widget, or by telephone — the firm may contact you by text about your inquiry or your
          matter. Message and data rates may apply. You can stop text
          messages at any time by replying STOP or by telling us.
        </p>

        <h2>Data retention and security</h2>
        <p>
          We keep inquiry information for as long as needed to respond, to run conflicts checks, and to
          meet our professional and legal obligations. We use reasonable administrative and technical
          measures to protect it. No website or method of electronic transmission is completely
          secure, and we cannot guarantee absolute security — which is another reason not to send
          sensitive information through this site.
        </p>

        <h2>Your choices</h2>
        <p>
          You may ask us what information we hold about you, ask us to correct it, or ask us to delete
          it, and we will honor those requests to the extent the law and our professional obligations
          allow. Some records must be retained under the rules governing attorneys. Contact us at{' '}
          <a href={site.emailHref}>{site.email}</a> or {site.phone}.
        </p>

        <h2>Children</h2>
        <p>
          This website is not directed to children under 13, and we do not knowingly collect their
          personal information. If you believe a child has provided information through this site,
          contact us and we will delete it.
        </p>

        <h2>Third-party sites</h2>
        <p>
          This site links to third-party services, including Google Maps and the firm’s Google Business
          Profile. Those services have their own privacy policies, and this policy does not apply to
          them.
        </p>

        <h2>Changes to this policy</h2>
        <p>
          We may update this policy from time to time. The revision date at the top of the page
          reflects the most recent change. Continued use of the site after an update means you accept
          the revised policy.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about this policy can be directed to {site.legalName}, {site.addressLine}, by phone
          at {site.phone}, or by email at <a href={site.emailHref}>{site.email}</a>.
        </p>
      </LegalPage>
    </>
  );
}
