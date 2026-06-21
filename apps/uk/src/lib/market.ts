export const market = {
    siteUrl: "https://uk.example.com",
    locale: "en-GB",
    currency: "GBP",
    country: "United Kingdom",
    marketLabel: "UK",
    madeInLabel: "Made in UK",
    checkoutSource: "uk_store",
    checkoutUtmSource: "uk.example.com",
    checkoutUtmCampaign: "uk_led_mask",
    supportHours: "Monday to Friday, 9:00 AM to 5:00 PM GMT",
} as const;
export type StoreCurrency = "USD" | "GBP" | "CAD" | "AUD";

