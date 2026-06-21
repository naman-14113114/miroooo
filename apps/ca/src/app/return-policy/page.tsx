import { BRAND_NAME } from "@store/shared";
import type { Metadata } from "next";
import { PolicyPage } from "@/components/policies/PolicyPage";
export const metadata: Metadata = {
    title: `Return Policy | ${BRAND_NAME}`,
    description: `Learn about the simple, stress-free replacement policy and goddess guarantees for the ${BRAND_NAME} LED Skincare Mask.`,
    alternates: {
        canonical: "/policies/return-policy",
    },
};
export default function Page() {
    return <PolicyPage policyType="return-policy"/>;
}

