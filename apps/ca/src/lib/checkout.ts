export function getCheckoutUrl() {
  return process.env.NEXT_PUBLIC_CHECKOUT_URL?.trim() ?? "";
}
