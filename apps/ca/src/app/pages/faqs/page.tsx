import { BRAND_NAME } from "@store/shared";
import type { Metadata } from "next";
import { FaqPage } from "@/components/faq/FaqPage";
import { absoluteUrl } from "@/lib/site";
export const metadata: Metadata = {
    title: `Frequently Asked Questions | Help & Support - ${BRAND_NAME}`,
    description: `Find answers to shipping policies, return policies, order tracking, payment methods, and technical questions about the ${BRAND_NAME} LED Skincare Mask.`,
    alternates: {
        canonical: "/pages/faqs",
    },
    openGraph: {
        title: `${BRAND_NAME} Help Center | Frequently Asked Questions`,
        description: `Find answers to shipping policies, return policies, order tracking, payment methods, and technical questions about the ${BRAND_NAME} LED Skincare Mask.`,
        url: absoluteUrl("/pages/faqs"),
    },
};
export default function Page() {
    return <FaqPage />;
}

