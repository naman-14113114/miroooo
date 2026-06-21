import { BRAND_NAME } from "@store/shared";
import type { Metadata } from "next";
import { HomePage } from "@/components/home/HomePage";
import { market } from "@/lib/market";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo";
export const metadata: Metadata = {
    title: `Miroooo Electric Toothbrush X2 | Sonic Oral Care`,
    description: `Shop ${BRAND_NAME} for the Electric Toothbrush X2. 32,000 sonic vibrations, 3 brushing modes, 60-day battery, IPX7 waterproof, aluminum body, travel case included. Free shipping.`,
    alternates: {
        canonical: "/",
    },
    keywords: [
        "Miroooo Electric Toothbrush",
        "sonic toothbrush",
        "electric toothbrush",
        "portable toothbrush",
        "aluminum toothbrush",
        "travel toothbrush",
    ],
    openGraph: {
        title: `Miroooo Electric Toothbrush X2 | ${BRAND_NAME}`,
        description: `The ${BRAND_NAME} Electric Toothbrush X2 with 32,000 sonic vibrations, 3 modes, 60-day battery, and IPX7 waterproof rating.`,
        url: market.siteUrl,
        images: [
            {
                url: "/images/products/miroooo-electric-toothbrush-x2/01-miroooo-toothbrush-x2-hero.png",
                width: 1200,
                height: 1200,
                alt: `${BRAND_NAME} Electric Toothbrush X2`,
            },
        ],
    },
};
export default function Page() {
    return (<>
      {[organizationJsonLd(), websiteJsonLd()].map((schema, index) => (<script dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} key={index} type="application/ld+json"/>))}
      <HomePage />
    </>);
}
