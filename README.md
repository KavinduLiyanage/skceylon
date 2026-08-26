# SK Ceylon — Marketing Website

Static marketing site for **SK Ceylon (Pvt) Ltd**, a Sri Lankan coco peat and
coir exporter. Built with Next.js 15 (App Router, TypeScript), Tailwind CSS v4
and `output: 'export'` — the build produces pure static HTML in `out/` with no
server dependencies.

## Local development

```bash
npm install
npm run dev        # http://localhost:3000
```

Production build (also runs the static export):

```bash
npm run build      # output lands in out/
```

To preview the exported site exactly as it will be served:

```bash
npx serve out
```

## Editing content

All copy and data live in typed constants under `src/content/` — no CMS:

| File | What's in it |
| --- | --- |
| `src/content/site.ts` | Domain, company details, contact email/WhatsApp, headline specs, markets, trade terms, compliance list, nav, RFQ email template |
| `src/content/products.ts` | The four products: descriptions, spec tables, packing, applications |
| `src/content/quality.ts` | The four quality checkpoints and "with every quotation" items |

Edit the constants, run `npm run build`, redeploy. Adding a product to
`PRODUCTS` automatically creates its page, sitemap entry and footer link.

Design tokens (palette, fonts) are defined in `src/app/globals.css` under
`@theme`. Fonts are loaded via `next/font` in `src/app/layout.tsx`.

## Deploying to Vercel (via GitHub import)

1. Push this repository to GitHub:
   ```bash
   git init            # if not already a repo
   git add -A
   git commit -m "SK Ceylon website"
   git remote add origin git@github.com:<your-user>/sk-ceylon.git
   git push -u origin main
   ```
2. Go to [vercel.com/new](https://vercel.com/new), sign in with GitHub, and
   **Import** the `sk-ceylon` repository.
3. Vercel auto-detects Next.js. No settings need changing — `output: 'export'`
   is picked up automatically. Click **Deploy**.
4. Every push to `main` now redeploys automatically. Preview deployments are
   created for pull requests.

### Custom domain (skceylon.lk)

1. In the Vercel project: **Settings → Domains → Add**, enter `skceylon.lk`
   (and add `www.skceylon.lk`, redirecting it to the apex).
2. At your DNS provider for `.lk` (e.g. LK Domain Registry / your registrar's
   DNS panel), add the records Vercel shows you — typically:
   - `A` record for `skceylon.lk` → `76.76.21.21`
   - `CNAME` for `www` → `cname.vercel-dns.com`
3. Wait for DNS propagation; Vercel provisions HTTPS automatically.
4. If you ever serve from a different domain, change the single `SITE_URL`
   constant in `src/content/site.ts` — canonicals, sitemap, robots and JSON-LD
   all derive from it.

## Placeholders to replace before launch

Search for these and replace with real values:

1. **Contact email** — `info@skceylon.lk` in `src/content/site.ts`
   (`COMPANY.email`). Must be a live, monitored mailbox: every RFQ CTA on the
   site, including the contact-page inquiry form, is a `mailto:` to this
   address. (The form composes a pre-filled email in the buyer's mail client —
   there is no backend. If you later want server-side submissions, swap
   `src/components/InquiryForm.tsx` to post to a service like Formspree.)
2. **WhatsApp number** — set to `+94 76 867 7530 / +94 77 422 9289` in
   `src/content/site.ts` (`COMPANY.whatsapp`).
3. **Domain** — `SITE_URL` in `src/content/site.ts` is set to
   `https://skceylon.lk`. Confirm this is the domain you actually launch on.
4. **CDA / EDB registration claims** — the site states that shipments carry a
   **CDA export permit and quality certificate** and that sourcing is from
   **CDA-registered mills** (home page, `/quality`, footer compliance strip,
   `src/content/quality.ts` and `src/content/site.ts`). **These claims must
   only go live once the registrations are actually complete.** If launch
   happens before registration, soften or remove that copy first.
5. **Photography** — current photos in `public/images/` are CC-licensed
   stock from Wikimedia Commons (credits in the footer, sourced from
   `IMAGE_CREDITS` in `src/content/site.ts`). They are legal for commercial
   use with the credit line kept, but replace them with your own mill,
   product and loading photos when available — then drop the credits.
6. **Lab report / mill photos promise** — the site repeatedly promises an
   independent Colombo lab report, mill photos and a packing spec with every
   quotation. Make sure the sales process can actually deliver this from day
   one.

## Quality floor built in

- Responsive to 360 px wide, no horizontal scrolling
- Visible keyboard focus (green ring; gold on dark sections), skip-to-content link
- `prefers-reduced-motion` respected
- No third-party scripts, no external font `<link>` tags (fonts via `next/font`)
- Per-page metadata, canonicals, Open Graph image, `sitemap.xml`, `robots.txt`
- JSON-LD: `Organization` sitewide, `Product` + `BreadcrumbList` on product pages
