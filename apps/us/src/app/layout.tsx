import { BRAND_NAME } from "@store/shared";
import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono, Playfair_Display } from "next/font/google";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { CartMinimalFooter } from "@/components/layout/CartMinimalFooter";
import { CartMinimalHeader } from "@/components/layout/CartMinimalHeader";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { RouteChrome } from "@/components/layout/RouteChrome";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { CartProvider } from "@/components/cart/CartProvider";
import { ClarityAnalytics } from "@/components/integrations/ClarityAnalytics";
import { KlaviyoAnalytics } from "@/components/integrations/KlaviyoAnalytics";
import { PageMediaPreloader } from "@/components/integrations/PageMediaPreloader";
import { TawkToWidget } from "@/components/integrations/TawkToWidget";
import { market } from "@/lib/market";
import "./globals.css";
const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});
const fraunces = Fraunces({
    subsets: ["latin"],
    style: ["normal", "italic"],
    variable: "--font-fraunces",
    display: "swap",
});
const jetBrains = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-jetbrains",
    display: "swap",
});
const playfair = Playfair_Display({
    subsets: ["latin"],
    style: ["normal", "italic"],
    variable: "--font-playfair",
    display: "swap",
});
export const metadata: Metadata = {
    metadataBase: new URL(market.siteUrl),
    title: {
        default: `Miroooo Electric Toothbrush X2 | ${BRAND_NAME} Sonic Oral Care`,
        template: `%s | ${BRAND_NAME}`,
    },
    description: "Shop the Miroooo Electric Toothbrush X2. 32,000 sonic vibrations per minute, 3 brushing modes, 60-day battery, IPX7 waterproof, aluminum body, travel case included. Free shipping.",
    applicationName: BRAND_NAME,
    keywords: [
        "Miroooo Electric Toothbrush",
        "sonic toothbrush",
        "electric toothbrush",
        "portable toothbrush",
        "aluminum toothbrush",
        "travel toothbrush",
        "USB-C charging",
        "IPX7 waterproof toothbrush",
    ],
    alternates: {
        canonical: "/",
        languages: {
            "en-US": "/",
        },
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
        },
    },
    openGraph: {
        siteName: BRAND_NAME,
        type: "website",
        url: market.siteUrl,
        locale: "en_US",
        title: `Miroooo Electric Toothbrush X2 | ${BRAND_NAME}`,
        description: "The Miroooo Electric Toothbrush X2 with 32,000 sonic vibrations, 3 modes, 60-day battery, IPX7 waterproof rating, and premium aluminum body.",
        images: [
            {
                url: "/images/products/miroooo-electric-toothbrush-x2/01-miroooo-toothbrush-x2-hero.png",
                width: 1200,
                height: 1200,
                alt: `${BRAND_NAME} Electric Toothbrush X2`,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: `Miroooo Electric Toothbrush X2 | ${BRAND_NAME}`,
        description: "32,000 sonic vibrations, 3 brushing modes, 60-day battery, IPX7 waterproof, aluminum body.",
        images: ["/images/products/miroooo-electric-toothbrush-x2/01-miroooo-toothbrush-x2-hero.png"],
    },
};
export default function RootLayout({ children, }: Readonly<{
    children: React.ReactNode;
}>) {
    return (<html lang="en-US" className={`${inter.variable} ${fraunces.variable} ${jetBrains.variable} ${playfair.variable}`} data-scroll-behavior="smooth">
      <body>
        <CartProvider>
          <RouteChrome cartFooter={<CartMinimalFooter />} cartHeader={<>
                <AnnouncementBar />
                <CartMinimalHeader />
              </>} defaultFooter={<Footer />} defaultHeader={<>
                <AnnouncementBar />
                <Header />
              </>}>
            {children}
          </RouteChrome>
          <PageMediaPreloader />
          <CartDrawer />
        </CartProvider>
        <ClarityAnalytics />
        <KlaviyoAnalytics />
        <TawkToWidget />
      </body>
    </html>);
}

