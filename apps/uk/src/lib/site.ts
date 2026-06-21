import { market } from "@/lib/market";

export const defaultSiteUrl = market.siteUrl;
export const plusbaseStoreUrl = process.env.PLUSBASE_ORIGIN?.trim() ?? "";

const plusbaseBridgePath = "/pages/add-to-cart";

export function getSiteUrl() {
  return (process.env.NEXT_PUBLIC_SITE_URL ?? defaultSiteUrl).replace(/\/+$/, "");
}

export function absoluteUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${getSiteUrl()}${normalizedPath}`;
}

export function getPlusbaseCheckoutBridgeUrl() {
  const configured = process.env.NEXT_PUBLIC_PLUSBASE_ADD_TO_CART_URL?.trim();
  if (!configured) {
    throw new Error("PlusBase checkout is unavailable until NEXT_PUBLIC_PLUSBASE_ADD_TO_CART_URL is configured.");
  }
  return configured;
}

export type CheckoutBridgeOptions = {
  checkoutRef?: string;
  quantity?: number;
  giftQuantity?: number;
  source?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  extraParams?: Record<string, string | number | boolean | null | undefined>;
};

export function buildPlusbaseCheckoutUrl(options: CheckoutBridgeOptions = {}) {
  const url = new URL(getPlusbaseCheckoutBridgeUrl());
  const quantity = Math.max(1, Math.round(options.quantity ?? 1));
  const giftQuantity = Math.max(
    1,
    Math.round(options.giftQuantity ?? options.quantity ?? 1),
  );

  const params: Record<string, string> = {
    variant_id: process.env.PLUSBASE_MASK_VARIANT_ID ?? "",
    product_id: process.env.PLUSBASE_MASK_PRODUCT_ID ?? "",
    quantity: String(quantity),
    qty: String(quantity),
    product_quantity: String(quantity),
    gift_variant_id: process.env.PLUSBASE_GIFT_VARIANT_ID ?? "",
    gift_product_id: process.env.PLUSBASE_GIFT_PRODUCT_ID ?? "",
    gift_quantity: String(giftQuantity),
    gift: "extra-brush-heads",
    redirect: "checkout",
    product_handle: "miroooo-electric-toothbrush-x2",
    source: options.source ?? market.checkoutSource,
    utm_source: options.utmSource ?? market.checkoutUtmSource,
    utm_medium: options.utmMedium ?? "store_cart_checkout",
    utm_campaign: options.utmCampaign ?? market.checkoutUtmCampaign,
  };

  if (options.checkoutRef) {
    params.checkout_ref = options.checkoutRef;
  }

  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.set(key, value);
  });

  Object.entries(options.extraParams ?? {}).forEach(([key, value]) => {
    if (value != null && value !== "") {
      url.searchParams.set(key, String(value));
    }
  });

  return url.toString();
}
