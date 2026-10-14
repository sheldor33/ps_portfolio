import type { MetadataRoute } from "next";
import { getProjectIds } from "@/lib/data";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://sheldor33.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectEntries = getProjectIds().map((id) => ({
    url: `${siteUrl}/work/${id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...projectEntries,
  ];
}
