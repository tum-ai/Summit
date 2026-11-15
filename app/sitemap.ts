import type { MetadataRoute } from "next";
import { copy } from "@/content/copy";

const SITE_URL = copy.meta.siteUrl;

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: SITE_URL, changeFrequency: "weekly", priority: 1 }];
}
