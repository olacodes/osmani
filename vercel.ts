import { routes, type VercelConfig } from "@vercel/config/v1";

export const config: VercelConfig = {
  framework: "nextjs",
  buildCommand: "next build",
  headers: [
    routes.header("/(.*)", [
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "X-Frame-Options", value: "SAMEORIGIN" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
    ]),
    routes.cacheControl("/favicon.svg", { public: true, maxAge: "1 day" }),
  ],
  redirects: [
    {
      source: "/chattosales",
      destination: "/#flagship",
      permanent: false,
    },
  ],
};

export default config;
