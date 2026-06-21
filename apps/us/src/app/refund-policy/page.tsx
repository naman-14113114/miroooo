import { BRAND_NAME } from "@store/shared";
import type { Metadata } from "next";
import { PolicyPage } from "@/components/policies/PolicyPage";
export const metadata: Metadata = {
    title: `Refund Policy | ${BRAND_NAME}`,
    description: `Conditions regarding order cancellations, adjustments, and refunds for ${BRAND_NAME} Light Therapy purchases.`,
    alternates: {
        canonical: "/policies/refund-policy",
    },
};
export default function Page() {
    return <PolicyPage policyType="refund-policy"/>;
}

