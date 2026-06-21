import {
  productAsset,
  productMediaAsset,
  type ProductImage,
} from "@/lib/media";
import { market, type StoreCurrency } from "@/lib/market";
import {
  faqs,
  type FAQItem,
} from "./productSections";

export type ProductGift = {
  id: string;
  name: string;
  valueCents: number;
  image: string;
  label: string;
  href: string;
};

export type ProductSpec = {
  label: string;
  value: string;
};

export type IncludedItem = {
  quantity: string;
  label: string;
  tag?: string;
};

export type Product = {
  id: string;
  sku: string;
  slug: string;
  template: "mask" | "torch";
  name: string;
  heroTitle: string;
  heroEmphasis: string;
  shortDescription: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  currency: StoreCurrency;
  priceCents: number;
  compareAtCents: number;
  rating: number;
  reviewCount: number;
  customerCount: string;
  promoCode: string;
  promoLabel: string;
  cartImage: string;
  gallery: ProductImage[];
  gifts: ProductGift[];
  specs: ProductSpec[];
  included: IncludedItem[];
  highlights: string[];
  keyBenefits?: string[];
  differentiators?: string[];
  faqs: FAQItem[];
  wavelengths?: any[];
  badges: string[];
};

const toothbrushAsset = (fileName: string) =>
  productAsset(fileName, "miroooo-electric-toothbrush-x2");

const toothbrushMediaAsset = (fileName: string) =>
  productMediaAsset(fileName, "miroooo-electric-toothbrush-x2");

export const storeToothbrush: Product = {
  id: "miroooo-electric-toothbrush-x2",
  sku: "MIR-X2-001",
  slug: "miroooo-electric-toothbrush-x2",
  template: "mask",
  name: "Miroooo Electric Toothbrush X2",
  heroTitle: "Miroooo Electric",
  heroEmphasis: "Toothbrush X2",
  shortDescription:
    "32,000 sonic vibrations per minute. 3 brushing modes. 60-day battery life. IPX7 waterproof. Travel-ready.",
  description:
    "The Miroooo Electric Toothbrush X2 delivers dentist-grade sonic cleaning in a sleek, lightweight aluminum body. With 32,000 micro-vibrations per minute, 3 customizable modes — Standard, Whitening, and Deep Cleansing — and up to 60 days of battery life on a single charge, it is the ultimate oral care companion for home and travel. The IPX7 waterproof rating means you can use it in the shower or rinse it under the tap without worry. At just 51 grams, it is half the size of standard electric toothbrushes, yet it packs professional-grade power into a premium aluminum finish. Includes a sleek travel case and 2 premium brush heads.",
  seoTitle: "Miroooo Electric Toothbrush X2 | Sonic Cleaning 32,000 VPM",
  seoDescription:
    "Shop the Miroooo Electric Toothbrush X2. 32,000 sonic vibrations, 3 modes, 60-day battery, IPX7 waterproof, travel case included. Free shipping.",
  currency: market.currency,
  priceCents: 11900,
  compareAtCents: 19900,
  rating: 4.8,
  reviewCount: 2847,
  customerCount: "2,800+",
  promoCode: "MIRSAVE",
  promoLabel: "Save $80 — Limited Time",
  cartImage: toothbrushAsset("01-miroooo-toothbrush-x2-hero.png"),
  gallery: [
    {
      src: toothbrushAsset("01-miroooo-toothbrush-x2-hero.png"),
      alt: "Miroooo Electric Toothbrush X2 hero image showing the sleek aluminum body",
    },
    {
      src: toothbrushAsset("02-color-silver.png"),
      alt: "Miroooo Electric Toothbrush X2 in Silver color variant",
    },
    {
      src: toothbrushAsset("03-color-gray.png"),
      alt: "Miroooo Electric Toothbrush X2 in Gray color variant",
    },
    {
      src: toothbrushAsset("04-color-pink.png"),
      alt: "Miroooo Electric Toothbrush X2 in Pink color variant",
    },
    {
      src: toothbrushAsset("05-travel-case.png"),
      alt: "Premium travel case included with Miroooo Electric Toothbrush X2",
    },
    {
      src: toothbrushAsset("06-usb-c-charging.png"),
      alt: "USB-C fast charging with 60-day battery life",
    },
    {
      src: toothbrushAsset("07-ipx7-waterproof.png"),
      alt: "IPX7 waterproof rating — shower-safe and washable",
    },
    {
      src: toothbrushAsset("08-3-modes.png"),
      alt: "3 brushing modes: Standard, Whitening, Deep Cleansing",
    },
    {
      src: toothbrushAsset("09-lightweight-51g.png"),
      alt: "Ultra-lightweight at only 51 grams with aluminum body",
    },
  ],
  gifts: [
    {
      id: "premium-travel-case",
      name: "Premium Travel Case",
      valueCents: 2900,
      image: toothbrushAsset("05-travel-case.png"),
      label: "Sleek & durable travel case included free",
      href: "/products/miroooo-electric-toothbrush-x2",
    },
    {
      id: "extra-brush-heads",
      name: "2x Extra Brush Heads",
      valueCents: 1500,
      image: toothbrushAsset("01-miroooo-toothbrush-x2-hero.png"),
      label: "2 premium brush heads included free",
      href: "/products/miroooo-electric-toothbrush-x2",
    },
  ],
  specs: [
    { label: "Vibration Frequency", value: "32,000 VPM" },
    { label: "Brushing Modes", value: "3 (Standard, Whitening, Deep Cleansing)" },
    { label: "Battery Life", value: "Up to 60 days" },
    { label: "Charging", value: "USB-C Fast Charging" },
    { label: "Waterproof Rating", value: "IPX7" },
    { label: "Weight", value: "51g" },
    { label: "Body Material", value: "Aluminum Alloy" },
    { label: "Timer", value: "2-minute auto-timer with 30-second quadrant alerts" },
    { label: "Included", value: "Toothbrush, 2 Brush Heads, Travel Case, USB-C Cable" },
    { label: "Warranty", value: "1 Year" },
    { label: "Available Colors", value: "Silver, Gray, Pink" },
  ],
  included: [
    { quantity: "1x", label: "Miroooo Electric Toothbrush X2", tag: "Choice of Silver, Gray, or Pink" },
    { quantity: "2x", label: "Premium Brush Heads" },
    { quantity: "1x", label: "Sleek Travel Case" },
    { quantity: "1x", label: "USB-C Charging Cable" },
    { quantity: "1x", label: "User Manual" },
    { quantity: "1x", label: "1-Year Warranty Card" },
  ],
  highlights: [
    "32,000 sonic vibrations per minute for a dentist-level clean",
    "3 brushing modes: Standard, Whitening, Deep Cleansing",
    "60-day battery life on a single charge",
    "IPX7 waterproof — fully washable and shower-safe",
    "Ultra-lightweight aluminum body at just 51g",
    "Includes premium travel case and 2 brush heads",
  ],
  keyBenefits: [
    "Removes plaque and surface stains 5x more effectively than manual brushing",
    "Gentle on gums — perfect for sensitive teeth and braces",
    "Sonic fluid dynamics push water and paste deep between teeth",
    "Compact and travel-ready with a sleek aluminum finish",
    "2-minute auto-timer with 30-second quadrant alerts",
    "USB-C fast charging for modern convenience",
    "Premium look and feel at an accessible price",
  ],
  differentiators: [
    "Half the size of standard electric toothbrushes",
    "3x longer battery life than leading competitors",
    "Aluminum body vs. cheap plastic competitors",
    "60-day charge vs. weekly charging for others",
    "IPX7 waterproof rating",
    "Includes travel case and 2 heads at no extra cost",
    "30-day money-back guarantee",
  ],
  faqs,
  badges: [
    "32,000 VPM Sonic Power",
    "60-Day Battery Life",
    "IPX7 Waterproof",
    "3 Brushing Modes",
  ],
};

export const products = [storeToothbrush];

export const productsById = Object.fromEntries(
  products.map((product) => [product.id, product]),
) as Record<string, Product>;

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getProductById(id: string) {
  return productsById[id];
}
