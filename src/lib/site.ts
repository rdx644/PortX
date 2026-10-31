// Netlify URL is the stable production address, including on deploy previews.
// An explicitly configured public domain remains the first choice.
const netlifyUrl =
  process.env.NETLIFY === 'true'
    ? process.env.URL || process.env.DEPLOY_PRIME_URL || process.env.DEPLOY_URL
    : undefined;
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  netlifyUrl ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000');
