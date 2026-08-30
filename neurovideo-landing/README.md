# NeuroVideo landing

Production-ready static Astro site for **NeuroVideo | Rata_mult**. The build output in `dist/` can be served by any static web server; Node.js is not needed in production.

## Start

```bash
npm install
npm run dev
```

Production: `npm run build`. Preview: `npm run preview`.

## Common edits

### Change price
Edit `src/content/site.ts` (`product.price`, `product.title`, and `product.headerCta`).

### Change Telegram channel
Edit `telegram.channelUrl` in `src/content/site.ts`.

### Add portfolio item
1. Copy its poster and optional MP4 into `public/images/` and `public/videos/`.
2. Add one object to `works.items` in `src/content/site.ts`.

### Change payment link
Edit `product.paymentUrl` in `src/content/site.ts`.

### Change author image
Replace `public/images/author.svg`, retaining the filename.

## Content and media
Business copy, navigation, FAQs, links, paths, and product details live in `src/content/site.ts`. Included images are deliberate lightweight placeholders; replace them with licensed production media. MP4 files are optional: the poster remains visible when a video is absent or fails to load.

## Required before launch
Replace `{{INN}}`, `{{EMAIL}}`, Telegram-channel and payment-link placeholders; supply approved legal documents and real media. Never commit credentials or bot/payment-provider secrets.

See [README_DEPLOY.md](README_DEPLOY.md) for Pages and nginx instructions.
