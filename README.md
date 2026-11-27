# Samia Jannat Event Organizers — website

Marketing site for [samiajannatevent.com](https://samiajannatevent.com), a Dubai-based event management company.

Built with Next.js 16 (App Router), React 19 and Tailwind CSS 4. All pages are statically pre-rendered.

## Development

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build   # production build
```

## Project layout

- `app/` — routes (`page.js` per page), shared `layout.js`, `sitemap.js`, `robots.js`
- `app/components/` — sections used on the home page plus the navbar and footer
- `app/data/services.js` — content for `/services` and `/services/[id]`
- `public/images/` — all site images (served through `next/image`)

## Contact form

The form sends through [EmailJS](https://www.emailjs.com/) from the browser. The service, template and public key ids are at the top of `app/components/ContactUs.js`. Restrict allowed origins to the site domain in the EmailJS dashboard.
