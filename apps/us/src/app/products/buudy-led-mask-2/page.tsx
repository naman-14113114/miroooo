import type { Metadata } from "next";
import { ProductPage } from "@/components/product/ProductPage";
import { storeToothbrush } from "@/data/products";
import { ledMaskSeoFaqs } from "@/data/seoFaqs";
import {
  breadcrumbJsonLd,
  faqJsonLd,
  organizationJsonLd,
  productJsonLd,
  websiteJsonLd,
} from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";

const pagePath = "/products/miroooo-electric-toothbrush-x2";
const pageProduct = {
  ...storeToothbrush,
  slug: "miroooo-electric-toothbrush-x2",
};

export const revalidate = 86400;

export const metadata: Metadata = {
  title: storeToothbrush.seoTitle,
  description: storeToothbrush.seoDescription,
  keywords: [
    "Miroooo Electric Toothbrush",
    "sonic toothbrush",
    "electric toothbrush",
    "portable toothbrush",
    "aluminum toothbrush",
    "travel toothbrush",
    "USB-C toothbrush",
  ],
  alternates: {
    canonical: "/products/miroooo-electric-toothbrush-x2",
    languages: {
      "en-US": pagePath,
    },
  },
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: storeToothbrush.seoTitle,
    description: storeToothbrush.description,
    url: absoluteUrl(pagePath),
    type: "website",
    images: [
      {
        url: storeToothbrush.gallery[0].src,
        width: 1200,
        height: 1200,
        alt: storeToothbrush.gallery[0].alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: storeToothbrush.seoTitle,
    description: storeToothbrush.seoDescription,
    images: [storeToothbrush.gallery[0].src],
  },
};

export default function StoreMaskProductRouteTwo() {
  const productFaqs = [...ledMaskSeoFaqs, ...storeToothbrush.faqs];

  return (
    <>
      {[
        organizationJsonLd(),
        websiteJsonLd(),
        productJsonLd(pageProduct),
        breadcrumbJsonLd([
          { name: "Home", url: "/" },
          { name: storeToothbrush.name, url: pagePath },
        ]),
        faqJsonLd(productFaqs),
      ].map((schema, index) => (
        <script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          key={index}
          type="application/ld+json"
        />
      ))}
      <ProductPage product={pageProduct} />
    </>
  );
}
