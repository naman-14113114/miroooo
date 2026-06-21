import { BRAND_NAME } from "@store/shared";
import type { Metadata } from "next";
import { PolicyPage } from "@/components/policies/PolicyPage";
export const metadata: Metadata = {
    title: `Privacy Policy | ${BRAND_NAME}`,
    description: `Understand how ${BRAND_NAME} collects, protects and handles your personal information when buying LED masks.`,
    alternates: {
        canonical: "/policies/privacy-policy",
    },
};
export default function Page() {
    return <PolicyPage policyType="privacy-policy"/>;
}

