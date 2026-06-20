import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://osmani.com.ng/sitemap.xml",
    host: "https://osmani.com.ng",
  };
}
