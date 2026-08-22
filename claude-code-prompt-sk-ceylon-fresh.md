# Claude Code Prompt — SK Ceylon Export Website (Next.js SSG, Fresh Design)

Paste everything below the line into Claude Code, run from an empty project folder.

---

Build a production-ready marketing website for **SK Ceylon (Pvt) Ltd**, a Sri Lankan coco peat and coir export company selling to international B2B buyers (greenhouse substrate importers in the Netherlands, South Korea, Japan, UAE, and India). The site's single job: get a buyer to send a Request for Quotation.

## Tech stack (strict)

- **Next.js 15, App Router, TypeScript**
- **Static export**: `output: 'export'` in `next.config.ts` — the site must build to pure static HTML with zero server dependencies, deployable on Vercel
- **Tailwind CSS v4** for styling
- `next/font` for all fonts — no external font `<link>` tags
- `next/image` with `unoptimized: true` (required for static export)
- No CMS, no database, no API routes. All content lives in typed constants under `src/content/`

## Design brief — design this fresh

You have full creative freedom on the visual design. Before writing any code, propose a design direction: palette (named hex values), typography pairing, layout concept, and one signature element that makes the site memorable. Present it to me for approval before building.

Constraints and guidance for that direction:

- **Audience calibration:** buyers are procurement managers and greenhouse operators in Europe, East Asia and the Gulf. The site must read as credible, precise and quality-obsessed — premium B2B, not a marketing brochure and not a generic template
- **The product's world is the material:** coconut husk, golden coir fiber, dark pith, greenhouse rows, lab measurement. Draw the palette and imagery language from that world rather than generic corporate colors
- **Data is the hero:** SK Ceylon's differentiator is lab-tested consistency (EC, pH, moisture, compression specs). Product data should be a visible, designed element throughout — consider a monospace or tabular treatment for all numbers and specs
- **Avoid**: template-feeling hero-with-stock-photo layouts, purple/blue SaaS gradients, and decoration that doesn't serve the content
- Quality floor without being asked: responsive to 360px, visible keyboard focus, prefers-reduced-motion respected, no layout shift

## Pages & structure

1. `/` — Home: hero with primary RFQ call-to-action; key specs presented prominently (EC washed < 0.5 mS/cm (1:1.5) · pH 5.5–6.8 · Moisture < 18% at packing · Compression 5:1); target markets (Netherlands, South Korea, Japan, UAE, India, Saudi Arabia); products preview; quality process summary; compliance strip; closing RFQ section
2. `/products` — index plus one page per product via `generateStaticParams`:
   - `5kg-coco-peat-blocks` — 30×30×12 cm, 5:1 compression, expands ~70–75 L, washed/unwashed, low-EC grade available
   - `husk-chips` — graded 1–3 cm, washed on request, blocks or loose
   - `grow-bags` — 100×15×12 cm standard, UV-stabilized white/black film, custom blends 50:50–70:30 peat:chips, buffered on request, planting/drain holes to buyer spec
   - `coir-fiber` — compressed bales ~100–120 kg, bristle and mattress fiber
   Each product page: full spec table, packing details, applications, RFQ CTA.
3. `/quality` — the four-checkpoint process, expanded:
   - 01 Source — CDA-registered mills only, with washing capability, inside the Kurunegala–Puttalam coconut triangle
   - 02 Test — independent Colombo laboratory verifies EC, pH and moisture pre-shipment; reports shared with every quotation
   - 03 Certify — CDA export permit and quality certificate, phytosanitary certificate, fumigation where the destination requires
   - 04 Load — container loading personally supervised at the mill
   Plus: what buyers receive with every quotation (lab report, mill photos, packing spec)
4. `/about` — Colombo-based exporter sourcing from the coconut triangle; founder-supervised quality; direct, personal accountability as the positioning
5. `/contact` — RFQ instructions with a `mailto:` CTA (info@skceylon.lk, subject "RFQ — Coco Peat", body template: Product / Blend & EC grade / Monthly volume / Destination port). Details: WhatsApp +94 7X XXX XXXX (placeholder), FOB Colombo · 40ft HC, lead time 3–5 weeks. No contact form — static export has no backend.

## SEO requirements (priority, not afterthought)

- Per-page `metadata` exports: unique titles ("{Page} — SK Ceylon | Coco Peat & Coir Exports Sri Lanka"), descriptions, canonical URLs, Open Graph + Twitter cards
- JSON-LD: `Organization` sitewide; `Product` on each product page; `BreadcrumbList` on product pages
- `sitemap.ts` and `robots.ts` via App Router metadata routes
- Semantic HTML: one H1 per page, correct heading hierarchy, descriptive alt text
- Target keywords naturally: "coco peat exporter Sri Lanka", "coco peat blocks supplier", "coco grow bags manufacturer", "low EC coco peat", "coir fiber exporter"
- Production domain `https://skceylon.lk` for canonicals/sitemap, configurable via a single constant

## Performance budget

- Lighthouse 95+ all categories, mobile
- Server components everywhere except where interactivity genuinely requires a client component
- No third-party scripts

## Workflow

1. **First: present the design direction** (palette, type, layout concept, signature element) and wait for my approval
2. Scaffold with create-next-app, configure static export, verify `npm run build` passes
3. Build page by page, running the build after each page
4. Finish with: `README.md` (local dev, content editing, step-by-step Vercel deployment via GitHub import, custom domain setup) and a list of placeholders I must replace before launch (email, WhatsApp, domain, and the CDA/EDB registration claims which must only go live once registrations are complete)
