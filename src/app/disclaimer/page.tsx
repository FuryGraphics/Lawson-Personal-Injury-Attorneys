import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import LegalPage from '@/components/LegalPage';
import { breadcrumbSchema, pageMeta } from '@/lib/seo';
import { site } from '@/lib/site';

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Disclaimer', href: '/disclaimer' },
];

export const metadata = pageMeta({
  title: 'Disclaimer',
  description:
    'Legal disclaimer for Lawson Personal Injury Attorneys in Lawrenceville, GA — attorney advertising, no attorney-client relationship, no guaranteed results.',
  path: '/disclaimer',
});

/**
 * TODO(client): this is standard Georgia attorney-advertising boilerplate and
 * should be reviewed by the firm before launch — particularly the responsible-
 * attorney line and anything the State Bar of Georgia requires for the firm's
 * specific advertising.
 */
export default function DisclaimerPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <LegalPage title="Disclaimer" updated="September 2025" crumbs={crumbs}>
        <h2>Attorney advertising</h2>
        <p>
          This website is an advertisement for legal services. It is published by{' '}
          {site.legalName}, {site.addressLine}. {site.attorney} is responsible for the content of this
          site. The firm practices law only in jurisdictions where its attorneys are licensed.
        </p>

        <h2>No legal advice</h2>
        <p>
          The information on this website is provided for general informational purposes only. It is
          not legal advice, and it is not a substitute for advice from a licensed attorney about your
          specific circumstances. Personal injury law is fact-dependent: outcomes turn on details that
          a general description cannot account for, and the law changes. Do not act, or decline to act,
          based on anything you read here without first consulting an attorney.
        </p>

        <h2>No attorney-client relationship</h2>
        <p>
          Viewing this website, sending a message through a form on it, or emailing or calling the firm
          does not create an attorney-client relationship. An attorney-client relationship with{' '}
          {site.legalName} is formed only when the firm and the client execute a written engagement
          agreement.
        </p>
        <p>
          Because no relationship exists until then, please do not send confidential or
          time-sensitive information through this website. Information sent before an engagement
          agreement is signed may not be treated as privileged or confidential, and the firm may
          already represent another party with adverse interests.
        </p>

        <h2>No guarantee of results</h2>
        <p>
          Any case results, testimonials, or endorsements that may appear on this website describe
          matters handled for particular clients under particular facts. They do not constitute a
          guarantee, warranty, or prediction about the outcome of any other matter. Prior results do
          not guarantee a similar outcome. Every case is different and must be evaluated on its own
          facts.
        </p>

        <h2>Fees and costs</h2>
        <p>
          The firm handles personal injury matters on a contingency fee basis. No attorney fee is
          charged unless a recovery is obtained. Case expenses and costs — filing fees, records
          charges, expert fees, and similar items — are separate from the attorney fee, and the
          responsibility for them is set out in the written fee agreement provided before any
          representation begins.
        </p>

        <h2>Time limits</h2>
        <p>
          Georgia law imposes strict deadlines on personal injury claims, including a general two-year
          statute of limitations under O.C.G.A. § 9-3-33 and substantially shorter ante litem notice
          requirements for claims involving governmental entities. Missing an applicable deadline can
          permanently bar a claim regardless of its merit. Nothing on this site should be relied on to
          determine the deadline that applies to your matter.
        </p>

        <h2>Third-party links and content</h2>
        <p>
          This website may link to third-party websites, including the firm’s Google Business Profile
          and mapping services. Those sites are not controlled by the firm, and the firm is not
          responsible for their content, availability, or privacy practices. A link is not an
          endorsement.
        </p>

        <h2>Jurisdiction</h2>
        <p>
          The firm’s attorneys are licensed to practice in the State of Georgia. This website is not
          intended to solicit clients in jurisdictions where doing so would violate applicable rules of
          professional conduct or where the firm’s attorneys are not authorized to practice.
        </p>

        <h2>Accuracy and changes</h2>
        <p>
          The firm makes a reasonable effort to keep this site accurate but does not warrant that it
          is complete, current, or error-free. Content may be changed or removed at any time without
          notice.
        </p>

        <h2>Questions</h2>
        <p>
          Questions about this disclaimer can be directed to{' '}
          <a href={site.emailHref}>{site.email}</a> or {site.phone}. See also our{' '}
          <Link href="/privacy-policy">Privacy Policy</Link>.
        </p>
      </LegalPage>
    </>
  );
}
