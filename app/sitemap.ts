import type { MetadataRoute } from "next";
import { site, projects } from "@/lib/content";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/portfolio",
    "/o-mne",
    "/kontakt",
    ...projects.map((p) => `/portfolio/${p.slug}`),
  ].map((path) => ({
    url: site.url + path,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
