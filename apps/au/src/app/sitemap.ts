import type { MetadataRoute } from "next";
import { market } from "@/lib/market";

const routes = [
  { path: "/", lastModified: "2026-05-28", changeFrequency: "weekly", priority: 1 },
  { path: "/products/miroooo-electric-toothbrush-x2", lastModified: "2026-06-20", changeFrequency: "weekly", priority: 1 },
  { path: "/pages/best-led-face-mask-Australia", lastModified: "2026-06-05", changeFrequency: "weekly", priority: 0.95 },
  
  { path: "/cart", lastModified: "2026-05-28", changeFrequency: "monthly", priority: 0.4 },
  { path: "/pages/contact-us", lastModified: "2026-05-29", changeFrequency: "monthly", priority: 0.6 },
  { path: "/pages/about-us", lastModified: "2026-06-01", changeFrequency: "monthly", priority: 0.6 },
  { path: "/pages/faqs", lastModified: "2026-06-01", changeFrequency: "monthly", priority: 0.6 },
  { path: "/order-tracking", lastModified: "2026-06-01", changeFrequency: "monthly", priority: 0.5 },
  { path: "/shipping-policy", lastModified: "2026-06-01", changeFrequency: "monthly", priority: 0.4 },
  { path: "/return-policy", lastModified: "2026-06-01", changeFrequency: "monthly", priority: 0.4 },
  { path: "/refund-policy", lastModified: "2026-06-01", changeFrequency: "monthly", priority: 0.4 },
  { path: "/privacy-policy", lastModified: "2026-06-01", changeFrequency: "monthly", priority: 0.3 },
  { path: "/terms-of-service", lastModified: "2026-06-01", changeFrequency: "monthly", priority: 0.3 },
  { path: "/cookies-policy", lastModified: "2026-06-01", changeFrequency: "monthly", priority: 0.3 },
  
  { path: "/pages/premium-travel-case", lastModified: "2026-06-20", changeFrequency: "monthly", priority: 0.6 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${market.siteUrl}${route.path === "/" ? "" : route.path}`,
    lastModified: new Date(route.lastModified),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
