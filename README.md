# Lawson Personal Injury Attorneys

Marketing site for Lawson Personal Injury Attorneys — Yari D. Lawson, 320 S Perry St,
Lawrenceville, GA 30046, (404) 394-9410.

Next.js 15 (App Router) · React 19 · TypeScript · Tailwind 3.4. 38 pages, all statically
prerendered — 24 practice-area pages, 3 location pages, and 11 core pages.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

---

## ⚠️ Before this goes live

Three things need Yari's sign-off — two are assumptions this build had to make, one is a
conflict found in the intake data.

**1. Atlanta is the site-wide SEO target, Lawrenceville is the office.**
The intake form left "Primary City" blank. This build targets **Atlanta** site-wide (much
larger search volume) while every NAP block, map pin, and `LocalBusiness` schema points at the
real **Lawrenceville** office. `/atlanta` and `/decatur` say in plain copy that the firm serves
those cities *from* Lawrenceville — no page implies a second office.

If Yari would rather target Lawrenceville as primary, change `site.primaryCity` in
`src/lib/site.ts` and rewrite the H1s and meta titles on `/`, `/personal-injury`, and the six
case-type pages. That is roughly an hour of work, and it is much cheaper now than after the
pages are indexed.

**2. The Google Business Profile name does not match the site.**
The review link Yari supplied points at a profile named **"Lawson Car Accident and
Personal Injury Attorneys"**. This site uses **"Lawson Personal Injury Attorneys"**
everywhere — footer, schema, all three location pages. Google reads a mismatched name as
evidence of a different business, which undercuts exactly the local ranking these pages are
built for. Pick one canonical name, then make the site, the GBP, and every directory citation
agree. Changing the site side is a one-line edit to `site.name`.

**3. Two practice areas are not personal injury claims.**
The client-supplied list of 24 includes **Workers' Compensation** and **Medical Malpractice**,
and both are in the Personal Injury dropdown as requested. Neither is an ordinary negligence
action:

- Workers' comp is an administrative proceeding before the State Board, with a **30-day notice**
  requirement and a **one-year** filing deadline, no fault element, and no pain-and-suffering
  damages at all.
- Medical malpractice requires an **expert affidavit** under O.C.G.A. § 9-11-9.1 filed with the
  complaint, and faces a **five-year statute of repose** that can bar a claim before anyone
  knows it exists.
- Bad faith insurance similarly runs on a **60-day statutory demand** rather than the tort rules.

All three are flagged `nonTort: true` in the registry, which suppresses the generic two-year
deadline callout on those pages — showing it there would be actively misleading. Each states its
own rule instead.

Worth Yari's consideration: these three sit at `/personal-injury/<slug>` URLs and under a
"Personal Injury" menu label. That is defensible, and it is what was asked for, but if the firm
wants to rank for "workers compensation lawyer" as a distinct practice, giving them top-level
URLs and their own menu entry would serve that better. It is a data change, not a rebuild.

---

## Launch checklist

Ordered by what blocks launch. The contact form, chat widget, attorney photo, logo, and Google
review link are all now done — what remains is mostly client verification.

| # | Item | Where | Blocks launch |
|---|------|-------|:---:|
| 1 | ~~Wire the contact form~~ — **done.** `/contact` now embeds the client's CaseClimb form (`QElWDmDySuthx7ZVBfyh`). **Still submit a live test and confirm the lead arrives** before launch. | `CaseClimbForm.tsx` | ✅ |
| 2 | **GA4 measurement ID** — replace the `G-XXXXXXXXXX` placeholder. | `site.ga4Id` | ✅ |
| 3 | ~~Google review URL~~ — **done**, wired from the intake CSV. But see the naming conflict below; and ask Yari for the durable `g.page/r/...` short link. | `site.googleReviewUrl` | |
| 4 | ~~Attorney photo and logo~~ — **both done.** `yari.webp` is on `/attorney` and the homepage (576×653; a larger original would hold up better on retina). The logo is in the header and footer, and the whole palette is now derived from it. A **vector original** (SVG/AI/EPS) would be sharper than the supplied PDF raster. | — | |
| 5 | **Attorney review of all legal content.** Every Georgia statement is written to current law and cites the statute, but nothing here has been reviewed by the attorney whose name is on it. | `src/lib/practice/`, `src/lib/content.ts` | ✅ |
| 6 | **Disclaimer + privacy policy review** — standard Georgia boilerplate; confirm the responsible-attorney line and anything the State Bar requires. | `/disclaimer`, `/privacy-policy` | ✅ |
| 7 | Verify the map pin coordinates against the Google Business Profile. | `site.geo` | |
| 8 | Add social profile URLs, or leave blank — empty keys are filtered out of both the footer and schema `sameAs`. | `site.social` | |
| 9 | Credentials, case results, community involvement — see "What was left out" below. | `src/lib/attorney.ts` | |
| 10 | Write the five blog posts and flip `published: true`. | `src/lib/blog.ts` | |
| 11 | **Send a live test through the CaseClimb form and start a test chat**, and confirm both reach the firm. Embeds can render perfectly and still be misrouted. | — | ✅ |
| 12 | Style the LeadConnector launcher to match the palette if desired — it currently ships bright blue against a navy/periwinkle site. Configurable in the LeadConnector dashboard, not in this codebase. | — | |

### Third-party embeds

Two vendor scripts run site-wide or on `/contact`:

- **CaseClimb intake form** (`/contact`) — an iframe form plus `form_embed.js`, which posts height
  messages back and resizes the frame. It replaced a hand-built form that deliberately refused to
  render a submit button until an endpoint existed, on the grounds that a law firm form which
  looks functional but posts into nothing loses cases silently. The endpoint now exists.
- **LeadConnector chat widget** (every page) — renders its own launcher bottom-right.

The chat launcher is fixed at `bottom: 20px`, which lands it on top of the mobile call bar (51px
tall). `ChatWidgetOffset` lifts it to 76px on screens under 768px. The widget renders into an
*open shadow root*, so a normal global CSS rule cannot reach it — the component appends a
stylesheet to that root instead. It polls briefly, gives up after ten seconds, and if the vendor
renames the class the rule simply stops matching: degraded, not broken.

Both vendors receive visitor data, so both are disclosed in the privacy policy.

---

## What was left out, and why

Three kinds of content are **structurally present but empty**, and will render the moment they
are filled in. None of it was invented.

**Attorney credentials** (`src/lib/attorney.ts`) — education, bar admissions, memberships, and
honors are empty arrays. Law school, admission dates, and bar memberships are specific factual
claims about a real licensed attorney; fabricating them would be false and a Georgia Rule of
Professional Conduct 7.1 problem. The `/attorney` page conditionally renders these sections, so
it reads as complete today and gets richer when the arrays are populated.

**Case results** (`attorneyProfile.results`) — same reasoning. Any figure has to be
substantiable. When results are added, `RESULTS_DISCLAIMER` renders automatically alongside
them on both `/attorney` and `/testimonials`.

**Testimonials** — `/testimonials` links out to the Google Business Profile rather than
reprinting quotes. Transcribed testimonials attributed to initials cannot be verified by a
visitor and are worth little; verified Google reviews are worth something. No `aggregateRating`
appears anywhere in the schema either — hardcoding a star rating that drifts out of date is a
routine cause of structured-data penalties.

The trust bar (`site.trustBar`) is likewise free of numbers. Years in practice, case counts,
and recovery totals all need substantiation under RPC 7.1. See `TRUST_BAR_TODO` for how to
swap them in.

---

## Architecture

```
src/
  app/                          20 routes + robots.ts + sitemap.ts + not-found
    personal-injury/[slug]/     one template → 24 case-type pages
    atlanta|lawrenceville|decatur/   thin routes over LocationPageView
  components/                   21 components
  lib/
    site.ts                     NAP, service areas, legal notices — single source of truth
    seo.ts                      pageMeta() + every schema helper
    practice/                   the six case types, full content
    locations.ts                the three location pages
    content.ts                  firm process, differentiators, 15-question master FAQ
    attorney.ts                 bio + the empty credential arrays
    blog.ts                     five seeded topics
```

**Content is data, not markup.** Adding a twenty-fifth case type means adding one object to
`src/lib/practice/` — it appears in the nav mega-menu, the mobile drawer, the footer, the card
grids, the FAQ index, `/sitemap`, and `sitemap.xml` automatically. Nothing else to touch.

The 24 case types are grouped into five nav columns (`PracticeGroup` in
`src/lib/practice/types.ts`): Motor Vehicle Accidents, Premises & Security, Serious &
Catastrophic Injury, Work Injuries, and Professional & Product Claims. Six are marked
`featured` and are what the homepage grid shows — a 24-card wall is a worse front door than a
curated set, and every surface links onward to the full index.

**NAP consistency is enforced by construction.** Every address, phone number, and business name
on the site renders from `src/lib/site.ts`, including inside the schema. There is no way for
the footer and a location page to disagree, which is the most common local-SEO own goal.

### Photography

All backdrop imagery is Unsplash stock, downloaded to `/public/images` rather than hotlinked, so
there is no runtime dependency on a third-party CDN and Next can optimize it. Sources, licence,
and per-file usage are recorded in [`public/images/CREDITS.md`](public/images/CREDITS.md).

Images sit behind a two-axis gradient at ~30–34% opacity: a horizontal wash so headline copy
stays on near-solid ground, and a vertical one so the fixed header never lands on a bright patch
of sky. They are atmosphere, never content — no fact appears only in a photograph.

Two rules the build holds to:

- **The attorney portrait is the only photograph of a real person.** A stock photo of a stranger
  standing in for a named, licensed attorney is a misrepresentation.
- **No staged accident, injury, or hospital imagery.** It reads as exploitative on a real firm's
  site and is the most common way injury-firm websites cheapen themselves. Case-type pages in
  the trauma-adjacent groups get no photograph at all — there is no honest stock image for a
  brain injury or an assault claim, and reaching for one is worse than the gradient.

`TODO(client)`: stock is a placeholder, not a destination. Real photographs of the office on the
Lawrenceville square and the Gwinnett courthouse would differentiate the site from every other
Georgia injury firm drawing on the same Unsplash library.

### Design system

**Derived from the client's logo**, which supplies exactly two colours: a slate-periwinkle
`#70738A` for the heraldic eagle and the "PERSONAL INJURY ATTORNEYS" line, and a near-black navy
`#2B2D39` for the "Lawson" wordmark. The original brief specified a gold accent; the logo
superseded it.

Neither logo colour is usable as text. `#70738A` measures **3.80:1** on the dark ground and
**4.17:1** on the light one — failing WCAG AA in every text role — and as a solid fill it cannot
carry dark *or* light text. It is kept as `crest.brand` for the logo and decorative fills only.
Text roles use tuned tints, all verified at 6.6:1 or better:

| Token | Value | Role | Contrast |
|---|---|---|---|
| `night` | `#161822` | primary ground (the logo navy, darkened) | — |
| `night-raised` | `#1F2230` | cards and panels | — |
| `night-deep` | `#0E1017` | footer base | — |
| `crest` | `#A9AECB` | accent and links on dark | 8.08:1 |
| `crest-bright` | `#C9CDE0` | emphasis, CTA fill | 11.19:1 |
| `crest-deep` | `#4B4E66` | accent on the light ground | 7.29:1 |
| `crest-brand` | `#70738A` | **the logo colour — decorative only** | 3.80:1 ✗ |
| `bone` / `bone-warm` | `#F2F2F6` / `#E7E7EE` | light reading ground | — |
| `smoke` | `#A2A6B6` | body copy on night | 7.30:1 |
| `ash` | `#474B5C` | body copy on bone | 7.74:1 |

Dark-first, with `bone` as the counter-tone for long-form reading — the disclaimer, the privacy
policy, and the FAQ groups — because sustained reading on a dark ground is measurably worse.

The signature device is the **crest rule beneath every H1 and section heading**, animated with
`scaleX` so it draws rather than fades. It lives in `.underline-crest` / `.underline-crest-anim`
in `globals.css` and is applied by `Hero` and `Section`, so no page implements it by hand.

### Logo assets

`public/images/lawson-logo.png` is the artwork exactly as supplied — use it on light grounds.
`lawson-logo-light.png` is a recoloured variant for the dark header and footer: the navy
wordmark becomes bone, the slate mark becomes the crest accent. Both are 2000×592 with alpha,
generated from the client's PDF.

TODO(client): both are raster. If a vector original (SVG/AI/EPS) exists, it would be sharper at
every size and smaller on the wire — worth requesting.

### Scroll animation

`Reveal` renders content **visible by default** and only hides it once the client has confirmed
it can reveal it again. If JavaScript fails, is blocked, or a crawler skips it, every section
still renders rather than sitting at `opacity: 0` forever. It also respects
`prefers-reduced-motion` and leaves above-the-fold elements alone so nothing flashes on load.

---

## SEO

Every requirement in the brief is implemented and verified against the built output:

- Unique `<title>` and canonical on all 38 pages; the firm name is appended once by the layout template
- Every meta description lands in the **150–160 character** window, each with a city and a CTA
- Exactly one `<h1>` per page
- Open Graph + Twitter card tags on every page
- Breadcrumb nav and `BreadcrumbList` schema on all 37 inner pages
- `LegalService` (home), `Attorney` (`/attorney`), `LocalBusiness` (all three location pages),
  `FAQPage` (the 25 pages with an accordion) — all validated as parsing JSON
- `robots.txt` and `sitemap.xml` generated at the root; unpublished blog posts are excluded
  from the XML sitemap so nothing thin gets submitted
- Every page carries at least 2 internal links in `<main>`; a full crawl finds no dead links

FAQ schema is generated from the same array the accordion renders, so the visible questions and
the structured data cannot drift apart.

## Accessibility

Skip-to-content link, semantic landmarks, `aria-expanded` on every disclosure, labelled form
controls, visible focus rings, 16px form inputs to stop iOS zoom-on-focus, and a
`prefers-reduced-motion` block that disables all animation.

## Deployment

Fully static — deploys to Vercel with no configuration and no environment variables. If deploying elsewhere, `output: 'export'` in `next.config.mjs` will produce a
static bundle; nothing in the site requires a Node runtime.

## Local development note

Do **not** run `npm run build` while `npm run dev` is running — they share the `.next`
directory, and the build overwrites the chunks the dev server is serving, producing
`Cannot find module './vendor-chunks/...'` and a 500 on every route. Stop the dev server first,
or run the build with a separate `distDir`. If it happens: `rm -rf .next` and restart.
