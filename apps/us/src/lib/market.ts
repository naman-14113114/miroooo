export const market = {
    siteUrl: "https://us.example.com",
    locale: "en-US",
    currency: "USD",
    country: "United States",
    marketLabel: "US",
    flagEmoji: "🇺🇸",
    madeInLabel: "Made in USA",
    checkoutSource: "us_store",
    checkoutUtmSource: "us.example.com",
    checkoutUtmCampaign: "us_led_mask",
    supportHours: "Monday to Friday, 9:00 AM to 5:00 PM EST",
} as const;
export type StoreCurrency = "USD" | "GBP" | "CAD" | "AUD";

