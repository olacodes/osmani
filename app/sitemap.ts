import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://osmani.com.ng";
  const now = new Date();
  const paths: { path: string; priority: number }[] = [
    { path: "/", priority: 1 },
    { path: "/contact", priority: 0.8 },
    { path: "/legal", priority: 0.5 },
    { path: "/press", priority: 0.6 },
    { path: "/privacy", priority: 0.3 },
  ];
  return paths.map(({ path, priority }) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority,
  }));
}
