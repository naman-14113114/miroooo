import { BRAND_NAME } from "@store/shared";
export const aboutHero = {
    eyebrow: `About ${BRAND_NAME}`,
    title: "Welcome to " + BRAND_NAME + ".com!",
    copy: "At " + BRAND_NAME + ".com, we are more than just an online store; we are a community dedicated to providing high-quality, affordable products that enhance your daily life. Our mission is to make shopping easy, enjoyable, and reliable for our customers around the world.",
    imageDesktop: "/images/about/about-hero-desktop-v4.webp",
    imageMobile: "/images/about/about-hero-desktop-v4.webp",
};
export const aboutSections = [
    {
        id: "our-team",
        eyebrow: "Who we are",
        title: "Our Team",
        copy: `Behind ${BRAND_NAME} is a close-knit team of oral care enthusiasts, engineers, and customer advocates. We are not just selling a product; we use the ${BRAND_NAME} Electric Toothbrush X2 ourselves. From our product design team optimizing the sonic vibration motor for maximum cleaning power, to our dedicated customer support squad who are always ready to guide you on your oral care journey, everyone at ${BRAND_NAME} is united by one common goal: delivering an exceptional experience and a noticeably healthier smile to you.`,
        image: {
            src: "/images/about/about-team-v3.webp",
            alt: `The ${BRAND_NAME} team designing high-performance sonic oral care solutions`
        },
        align: "left" as const,
    },
    {
        id: "our-story",
        eyebrow: "How we started",
        title: "Our Story",
        copy: `The idea for ${BRAND_NAME} was born out of genuine frustration with bulky, outdated electric toothbrushes. We were tired of devices that were either too large for travel, made of cheap plastic, or needed constant charging.

We knew the science behind sonic brushing worked, but the available options were either too expensive, too bulky, or poorly designed. So, we changed the standard. We created the ${BRAND_NAME} Electric Toothbrush X2: a sleek, ultra-portable device packed with 32,000 sonic vibrations per minute, 3 customizable modes, and a 60-day battery. Today, we are proud to have helped thousands of customers upgrade their daily oral care routine.`,
        image: {
            src: "/images/about/about-story-v3.webp",
            alt: `The story and inspiration behind the portable ${BRAND_NAME} Electric Toothbrush X2`
        },
        align: "right" as const,
    },
    {
        id: "trust-transparency",
        eyebrow: "Values",
        title: "Trust and Transparency",
        copy: `When it comes to your skin, trust is everything. That's why transparency is woven into the fabric of our brand. We don't believe in exaggerated claims or hidden fine print.

- Tested for Safety: The ${BRAND_NAME} Electric Toothbrush X2 is rigorously tested to ensure it is safe, effective, and built to last.
- Privacy First: We utilize state-of-the-art encryption to ensure your personal data and payment information are always 100% secure.
- The 30-Day Money-Back Guarantee: We are so confident in our technology that we back it up with a risk-free 30-day money-back guarantee. If you do not love the clean, you do not pay.`,
        image: {
            src: "/images/about/about-trust.png",
            alt: "Goddess guarantee, safety certificates and top security standard badges"
        },
        align: "left" as const,
    },
    {
        id: "customer-support",
        eyebrow: "Support",
        title: "Customer Support",
        copy: "We understand that great customer service is crucial. That's why we have a dedicated support team ready to assist you with any questions or concerns. You can reach us at:\n\n- Email: support@buudy.com\n- Operating Hours: Monday to Friday, 9am - 5pm GMT",
        image: {
            src: "/images/about/about-support.png",
            alt: "Dedicated customer service representatives ready to assist you"
        },
        align: "right" as const,
    }
];

