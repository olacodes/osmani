# Deploying osmani.com.ng

Step-by-step deployment to Vercel. This project is **front-end only** — there are no environment variables, databases, or secrets to set up.

## 0. Prerequisites

- Node.js 22+ installed locally
- A Vercel account (free tier is fine) — sign up at https://vercel.com/signup
- This repo cloned and `npm install` already run

## 1. Install the Vercel CLI (one-time)

```bash
npm i -g vercel
vercel --version   # confirm
vercel login       # opens browser, follow prompts
vercel whoami      # confirm you're signed in
```

## 2. Link this project to Vercel

From the repo root:

```bash
vercel link
```

Answer the prompts:
- **Set up "~/work/2026/osmani"?** → `Y`
- **Which scope?** → pick your personal account or team
- **Link to existing project?** → `N` (creating new)
- **Project name?** → `osmani` (or whatever you prefer — this controls the default `*.vercel.app` URL)
- **Directory?** → `./` (just press enter)

This creates `.vercel/project.json` (already git-ignored).

## 3. First preview deploy

```bash
vercel
```

Vercel builds and gives you a preview URL like `https://osmani-abc123.vercel.app`. Open it, click around — confirm:

- Home loads, the brass `capital` italic renders, dark/light toggle works
- `/contact` form opens your mail client when submitted
- `/legal`, `/press`, `/privacy` all load
- `/opengraph-image` returns a PNG (used for social previews)
- `/sitemap.xml` and `/robots.txt` are accessible

## 4. Production deploy

When the preview looks right:

```bash
vercel --prod
```

This deploys to your project's production URL. Note the URL Vercel prints — you'll add the custom domain to it next.

## 5. Add your custom domain (osmani.com.ng)

```bash
vercel domains add osmani.com.ng
```

Vercel will print DNS instructions. Update DNS at your domain registrar:

- **Apex / root** (`osmani.com.ng`): set an **A record** to `76.76.21.21`
- **www subdomain**: set a **CNAME** record to `cname.vercel-dns.com`

(Exact values Vercel prints take precedence — copy from the CLI output if different.)

Then verify and bind to this project:

```bash
vercel domains ls                  # confirm domain shows up
vercel alias <production-url> osmani.com.ng
```

DNS propagation usually takes 5–30 minutes. Once it's live, Vercel auto-provisions HTTPS for you.

## 6. Push the repo (optional but recommended)

If you push the repo to GitHub and connect Vercel to it, every `git push` deploys a preview, and merges to `main` deploy to production automatically. To set up:

1. Visit your project in the Vercel dashboard
2. **Settings → Git → Connect Git Repository**
3. Pick your GitHub org and the `osmani` repo

After that the CLI becomes optional — pushes do the work.

## 7. Health check after going live

```bash
# Replace with your real URL
curl -I https://osmani.com.ng/
curl -I https://osmani.com.ng/contact
curl -I https://osmani.com.ng/sitemap.xml
curl -I https://osmani.com.ng/opengraph-image
```

All should return `200 OK`.

## What's already configured

- `vercel.ts` — security headers (HSTS, X-Frame-Options, Referrer-Policy, Permissions-Policy), image cache rules, `/chattosales → /#flagship` and `/verify → /legal` redirects.
- `app/sitemap.ts` and `app/robots.ts` — auto-generated `/sitemap.xml` and `/robots.txt`.
- `app/opengraph-image.tsx` — dynamic Open Graph image for social shares (charcoal + brass).
- `app/layout.tsx` — Organization JSON-LD with the verified CAC RC, TIN, and registered address.
- `package.json` — `engines.node: >=22.0.0` so Vercel picks Node 24 LTS (the default).

## Costs

This site is fully static (only `/opengraph-image` runs at the edge). On Vercel's Hobby plan you'd typically pay **$0/month** unless traffic crosses Hobby limits.

## If something breaks

| Symptom | Most likely cause |
|---|---|
| Build fails on Vercel but succeeds locally | Node version mismatch — confirm `engines.node` matches Vercel's. Hard refresh build log in dashboard. |
| `/opengraph-image` returns 500 | Edge runtime issue — check Vercel function logs. |
| Custom domain shows "DNS_PROBE..." | DNS not propagated yet. Wait 15–30 min. |
| Site loads but no CSS | Hard refresh browser. Browser is serving cached old CSS. |
| Theme toggle flickers on first paint | Already prevented via `next-themes` `attribute="class"` + `suppressHydrationWarning`. If it's still happening, file an issue with the browser/version. |

## Rollback

If a deploy goes wrong:

```bash
vercel rollback                    # interactive — pick a known-good deployment
```

Or in the dashboard: **Deployments → pick a previous one → Promote to Production**.
