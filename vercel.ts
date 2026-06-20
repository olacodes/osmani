import { routes, type VercelConfig } from "@vercel/config/v1";

/**
 * Vercel project configuration for Osmani Technologies.
 * See: https://vercel.com/docs/project-configuration/vercel-ts
 */
export const config: VercelConfig = {
  framework: "nextjs",
  buildCommand: "next build",
  /**
   * Best-effort security headers applied to every response.
   * - `X-Content-Type-Options: nosniff` blocks MIME sniffing.
   * - `X-Frame-Options: SAMEORIGIN` prevents the site from being iframed by other origins.
   * - `Referrer-Policy` limits info leaked to third parties on outbound clicks.
   * - `Permissions-Policy` opts out of sensor APIs we don't use.
   * - `Strict-Transport-Security` enforces HTTPS for a year, including subdomains.
   */
  headers: [
    routes.header("/(.*)", [
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "X-Frame-Options", value: "SAMEORIGIN" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      {
        key: "Permissions-Policy",
        value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
      },
      {
        key: "Strict-Transport-Security",
        value: "max-age=31536000; includeSubDomains; preload",
      },
    ]),
    routes.cacheControl("/favicon.svg", { public: true, maxAge: "1 day" }),
    routes.cacheControl("/(.*)\\.(jpg|jpeg|png|webp|avif|svg)", {
      public: true,
      maxAge: "30 days",
    }),
  ],
  redirects: [
    /** Convenience link for /chattosales → flagship section. */
    {
      source: "/chattosales",
      destination: "/#flagship",
      permanent: false,
    },
    /** Visiting /verify jumps to the CAC details on the legal page. */
    {
      source: "/verify",
      destination: "/legal",
      permanent: false,
    },
  ],
};

export default config;
