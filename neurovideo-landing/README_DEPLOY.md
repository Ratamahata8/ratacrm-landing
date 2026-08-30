# Deployment

## Build

```bash
npm install # first install; commit the generated package-lock.json
npm ci      # subsequent reproducible installs
npm run build
```

Deploy the generated `dist/` directory. No Node.js runtime is required after build.

## GitHub Pages: project URL

1. Push this directory as repository `neurovideo-landing` (normally on `main`).
2. In **Settings → Pages → Build and deployment**, select **GitHub Actions**.
3. The included workflow builds with `PUBLIC_SITE_URL=https://USERNAME.github.io` and `PUBLIC_BASE_PATH=/neurovideo-landing`, producing `https://USERNAME.github.io/neurovideo-landing/`.
4. Replace `USERNAME` only if running locally; the workflow derives the repository owner automatically.

Astro's `site` is the origin, while `base` is the repository path. All project assets and home links use `BASE_URL` so they work below that path.

## Switch Pages to `neurovideo.ratacrm.ru`

1. Add the custom domain in **Settings → Pages**.
2. At the DNS provider (not in this repository), add a CNAME record for host `neurovideo` pointing to `USERNAME.github.io`. Do not change DNS without the domain owner's approval.
3. Wait for GitHub's DNS check, then enable **Enforce HTTPS**.
4. Change the workflow build environment to `PUBLIC_SITE_URL: https://neurovideo.ratacrm.ru` and `PUBLIC_BASE_PATH: /`.
5. Optionally add `public/CNAME` containing only `neurovideo.ratacrm.ru`, then rebuild.
6. Update the absolute sitemap URL in `public/robots.txt` if the final domain differs.

## nginx variant 1: separate subdomain

Build and upload `dist/` to `/var/www/neurovideo/dist`. Use the commented server template in `deploy/nginx-neurovideo.example.conf`. Obtain/configure TLS using the server owner's normal process. The default Astro configuration (`site=https://neurovideo.ratacrm.ru`, `base=/`) is appropriate.

## nginx variant 2: existing-domain path

For `https://ratacrm.ru/neurovideo/`, build with:

```bash
PUBLIC_SITE_URL=https://ratacrm.ru PUBLIC_BASE_PATH=/neurovideo npm run build
```

Upload the result, then adapt the example `location /neurovideo/` block to the **existing reviewed** server configuration. Do not overwrite the current RataCRM nginx configuration. Test asset URLs and legal routes after deployment.
