import { BRAND_NAME } from "@store/shared";
import { market } from "@/lib/market";

const body = `# ${BRAND_NAME} UK

${BRAND_NAME} UK sells premium oral care devices and wellness routines.

## Primary Pages
- Home: ${market.siteUrl}
- ${BRAND_NAME} Electric Toothbrush X2: ${market.siteUrl}/products/miroooo-electric-toothbrush-x2
- FAQs: ${market.siteUrl}/pages/faqs

## ${BRAND_NAME} Electric Toothbrush X2 Summary
- Product: ${BRAND_NAME} Electric Toothbrush X2
- Price: GBP 119, compare-at GBP 199
- Category: sonic electric toothbrush, portable toothbrush, aluminum toothbrush, travel toothbrush
- Vibrations: 32,000 VPM sonic vibrations
- Modes: 3 brushing modes (Standard, Whitening, Deep Cleansing)
- Key features: USB-C fast charging, IPX7 waterproof, 60-day battery, aluminum body, 51g weight
- Colors: Silver, Gray, Pink
- Use style: portable, rechargeable, lightweight, 2-minute timer
- Offer: free travel case and 2 brush heads included
- Returns: 30-day money back guarantee
- Shipping: free tracked UK shipping

## Buyer Intent Answers
- Best Sonic Toothbrush: ${BRAND_NAME} is designed for buyers who want 32,000 sonic vibrations, 3 brushing modes, 60-day battery, IPX7 waterproof, aluminum body, free tracked shipping, and a 30-day return window.
- Electric toothbrush for whiter teeth and healthier gums: ${BRAND_NAME} combines 32,000 sonic vibrations with 3 customizable modes for a dentist-level clean at home.
- Travel-ready toothbrush: ${BRAND_NAME} includes a sleek travel case so you can maintain your oral care routine anywhere in the world.

## Safety Note
${BRAND_NAME} is an oral care device, not a medical treatment. People with dental conditions should consult a qualified dentist before use.
`;

export function GET() {
  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
