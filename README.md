# Mehan Observatory

The interactive companion to Ashok Mehan's *History's Future: The Singularity Is Here*.

The site turns the book's ideas into instruments: a frontier-model comparison terminal, an acceleration ledger tied to published essays, and an interactive clock-speed laboratory.

## Local development

```bash
npm ci
npm run dev
```

## Validation

```bash
npm run build:static
```

The static production bundle is written to `out/`.

## Production

Pushes to `main` trigger `.github/workflows/deploy.yml`. GitHub Actions obtains short-lived AWS credentials through OIDC, builds the site, synchronizes `out/` to the dedicated `mehanonline-com-site` S3 bucket, and invalidates the `mehanonline.com` CloudFront distribution.

No long-lived AWS credentials are stored in GitHub.
