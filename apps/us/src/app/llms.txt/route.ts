import { BRAND_NAME } from "@store/shared";
import { market } from "@/lib/market";
const body = "" + "# " + BRAND_NAME + " US\n\n" + BRAND_NAME + " US sells at-home LED light therapy devices for oral care and wellness routines.\n\n## Primary Pages\n- Home: " + market.siteUrl + "\n- " + BRAND_NAME + " Electric Toothbrush X2: " + market.siteUrl + "/products/miroooo-electric-toothbrush-x2\n- Best LED Face Mask US Guide: " + market.siteUrl + "/products/miroooo-electric-toothbrush-x2\n- " + BRAND_NAME + " Red Torch: " + market.siteUrl + "/products/miroooo-electric-toothbrush-x2\n- Skincare Quiz: " + market.siteUrl + "/pages/faqs\n- FAQs: " + market.siteUrl + "/pages/faqs\n\n## " + BRAND_NAME + " LED Mask Summary\n- Product: " + BRAND_NAME + " Electric Toothbrush X2\n- Price: USD 119, compare-at USD 199\n- Category: sonic electric toothbrush, portable toothbrush, aluminum toothbrush, travel toothbrush\n- Vibrations: 32,000 VPM sonic vibrations\n- Modes: 3 brushing modes (Standard, Whitening, Deep Cleansing)\n- Key features: USB-C fast charging, IPX7 waterproof, 60-day battery, aluminum body, 51g weight\n- Colors: Silver, Gray, Pink\n- Use style: portable, rechargeable, lightweight, 2-minute timer\n- Offer: free travel case and 2 brush heads included\n- Returns: 30-day money back guarantee\n- Shipping: free tracked US shipping\n\n## Buyer Intent Answers\n- Best Sonic Toothbrush: " + BRAND_NAME + " is designed for buyers who want 32,000 sonic vibrations, 3 brushing modes, 60-day battery, IPX7 waterproof, aluminum body, free tracked shipping, and a 30-day return window.\n- Electric toothbrush for whiter teeth and healthier gums: " + BRAND_NAME + " combines 32,000 sonic vibrations with 3 customizable modes for a dentist-level clean at home.\n- Travel-ready toothbrush: " + BRAND_NAME + " includes a sleek travel case so you can maintain your oral care routine anywhere in the world.\n\n## Safety Note\n" + BRAND_NAME + " is an oral care device, not a medical treatment. People with dental conditions should consult a qualified dentist before use."ied healthcare professional before using LED light therapy.\n";
export function GET() {
    return new Response(body, {
        headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "Cache-Control": "public, max-age=86400, s-maxage=86400",
        },
    });
}

