import { BRAND_NAME } from "@store/shared";
import type { Metadata } from "next";
import { PolicyPage } from "@/components/policies/PolicyPage";
export const metadata: Metadata = {
    title: `Cookies Policy | ${BRAND_NAME}`,
    description: `How ${BRAND_NAME} utilizes secure cookies to enhance, personalize and optimize your online storefront experience.`,
    alternates: {
        canonical: "/policies/cookies-policy",
    },
};
export default function Page() {
    return <PolicyPage policyType="cookies-policy"/>;
}

