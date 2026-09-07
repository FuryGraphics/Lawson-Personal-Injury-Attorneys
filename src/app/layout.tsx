import type { Metadata } from 'next';
import Script from 'next/script';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';
import ChatWidgetOffset from '@/components/ChatWidgetOffset';
import { site } from '@/lib/site';

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    // Pages set the keyword half; the firm name is appended once, here.
    default: `Personal Injury Attorney Atlanta GA | ${site.name}`,
    template: `%s | ${site.name}`,
  },
  description:
    'Lawson Personal Injury Attorneys represents injured people across Atlanta and Gwinnett County, GA. Free case review, no fee unless we win — (404) 394-9410.',
  applicationName: site.name,
  authors: [{ name: site.attorney }],
  robots: { index: true, follow: true },
  icons: { icon: '/favicon.svg' },
  formatDetection: { telephone: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        {/* GA4 — TODO(client): replace site.ga4Id with the firm's real
            measurement ID. The placeholder is inert, so leaving it does no
            harm beyond collecting nothing. */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${site.ga4Id}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${site.ga4Id}');
          `}
        </Script>

        {/* LeadConnector chat widget. Renders its own launcher bottom-right;
            ChatWidgetOffset lifts it clear of the mobile call bar. */}
        <Script
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="6a9ee058ba70a028e7b1b1c1"
          strategy="afterInteractive"
        />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-crest focus:px-4 focus:py-2 focus:text-night"
        >
          Skip to content
        </a>
        <Header />
        {/* Bottom padding clears the fixed mobile call bar. */}
        <main id="main" className="pb-[60px] md:pb-0">
          {children}
        </main>
        <Footer />
        <FloatingCTA />
        <ChatWidgetOffset />
      </body>
    </html>
  );
}
