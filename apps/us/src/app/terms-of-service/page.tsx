import { BRAND_NAME } from "@store/shared";
import type { Metadata } from "next";
import { PolicyPage } from "@/components/policies/PolicyPage";
export const metadata: Metadata = {
    title: `Terms of Service | ${BRAND_NAME}`,
    description: `Store operations, guidelines, terms, conditions, and service agreements of the ${BRAND_NAME} LED store.`,
    alternates: {
        canonical: "/policies/terms-of-service",
    },
};
export default function Page() {
    return <PolicyPage policyType="terms-of-service"/>;
}

