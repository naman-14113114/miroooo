import { productAsset, productMediaAsset } from "@/lib/media";

export type Feature = {
  title: string;
  kicker: string;
  body: string;
};

export type Transformation = {
  id: string;
  concern: string;
  image: string;
  title: string;
  quote: string;
  name: string;
};

export type ReviewVideo = {
  id: string;
  poster: string;
  src: string;
  fallbackSrc?: string;
};

export type Wavelength = {
  nm: string;
  name: string;
  description: string;
  color: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export const features: Feature[] = [
  {
    title: "32,000 Sonic Vibrations Per Minute",
    kicker: "Professional Power",
    body: "The Miroooo X2 delivers 32,000 micro-vibrations per minute — creating fluid dynamics that push water and toothpaste deep between teeth and along the gumline. This is the same sonic technology trusted by dental professionals, now in a compact, portable form.",
  },
  {
    title: "3 Customizable Brushing Modes",
    kicker: "Personalized Clean",
    body: "Toggle seamlessly between Standard for gentle daily cleaning, Whitening for high-vibration stain removal, and Deep Cleansing for an extraordinarily thorough brushing experience. Whether you have sensitive gums or want to tackle stubborn coffee stains, the X2 adapts to you.",
  },
  {
    title: "60-Day Battery on One Charge",
    kicker: "Built to Last",
    body: "With USB-C fast charging, the Miroooo X2 lasts up to 60 days on a single charge. No more weekly charging docks cluttering your bathroom counter. Just charge and go — perfect for home, travel, and everything in between.",
  },
  {
    title: "IPX7 Waterproof & Shower-Safe",
    kicker: "Fully Washable",
    body: "The entire Miroooo X2 is IPX7 rated, meaning it is fully waterproof and safe to use in the shower. Rinse it under the tap, brush in the shower, or clean it with ease — the aluminum body is built to handle it all.",
  },
  {
    title: "Ultra-Portable Travel Design",
    kicker: "Only 51 Grams",
    body: "At half the size of standard electric toothbrushes, the Miroooo X2 weighs just 51 grams. It comes with a sleek, durable travel case that makes packing effortless. Never worry about bulky charging docks again — just pack it, go, and enjoy a premium brushing experience anywhere.",
  },
  {
    title: "Premium Aluminum Body",
    kicker: "Crafted to Impress",
    body: "Unlike cheap plastic competitors, the Miroooo X2 features a sleek aluminum alloy body with a smooth, durable finish. It feels premium in your hand, resists wear, and looks stunning on any bathroom counter. Available in Silver, Gray, and Pink.",
  },
];

export const realLifeImages = [
  {
    src: productAsset("01-miroooo-toothbrush-x2-hero.png", "miroooo-electric-toothbrush-x2"),
    alt: "Miroooo Electric Toothbrush X2 sleek aluminum design",
  },
  {
    src: productAsset("02-color-silver.png", "miroooo-electric-toothbrush-x2"),
    alt: "Miroooo X2 Silver color variant with premium finish",
  },
  {
    src: productAsset("05-travel-case.png", "miroooo-electric-toothbrush-x2"),
    alt: "Premium travel case included with every Miroooo X2",
  },
  {
    src: productAsset("06-usb-c-charging.png", "miroooo-electric-toothbrush-x2"),
    alt: "USB-C fast charging for modern convenience",
  },
  {
    src: productAsset("07-ipx7-waterproof.png", "miroooo-electric-toothbrush-x2"),
    alt: "IPX7 waterproof — fully washable and shower-safe",
  },
  {
    src: productAsset("08-3-modes.png", "miroooo-electric-toothbrush-x2"),
    alt: "3 brushing modes: Standard, Whitening, Deep Cleansing",
  },
  {
    src: productAsset("09-lightweight-51g.png", "miroooo-electric-toothbrush-x2"),
    alt: "Ultra-lightweight at only 51 grams",
  },
  {
    src: productAsset("03-color-gray.png", "miroooo-electric-toothbrush-x2"),
    alt: "Miroooo X2 Gray color variant",
  },
];

export const transformations: Transformation[] = [
  {
    id: "result-01",
    image: productAsset("02-color-silver.png", "miroooo-electric-toothbrush-x2"),
    concern: "Yellow Teeth",
    title: "Noticeably Whiter Smile",
    quote:
      "After just 2 weeks of using the Whitening mode, my teeth are visibly brighter. The coffee stains I have had for years are almost gone. I can not believe the difference.",
    name: "Sarah M.",
  },
  {
    id: "result-02",
    image: productAsset("03-color-gray.png", "miroooo-electric-toothbrush-x2"),
    concern: "Sensitive Gums",
    title: "No More Bleeding Gums",
    quote:
      "I have always struggled with bleeding gums from aggressive brushing. The Standard mode on the Miroooo X2 is so gentle yet effective. My gums have never felt healthier.",
    name: "James T.",
  },
  {
    id: "result-03",
    image: productAsset("04-color-pink.png", "miroooo-electric-toothbrush-x2"),
    concern: "Coffee Stains",
    title: "Stain-Free Teeth",
    quote:
      "As a coffee lover, I had accepted stained teeth as part of life. The Deep Cleansing mode on the X2 has changed that completely. My teeth feel like I just had a professional cleaning.",
    name: "Emily R.",
  },
  {
    id: "result-04",
    image: productAsset("01-miroooo-toothbrush-x2-hero.png", "miroooo-electric-toothbrush-x2"),
    concern: "Braces Care",
    title: "Perfect for Braces",
    quote:
      "Finding a good toothbrush with braces was impossible until the Miroooo X2. The sonic vibrations clean around my brackets better than anything I have tried. Highly recommend for anyone with braces.",
    name: "David L.",
  },
  {
    id: "result-05",
    image: productAsset("05-travel-case.png", "miroooo-electric-toothbrush-x2"),
    concern: "Travel Hassle",
    title: "Ultimate Travel Companion",
    quote:
      "I travel constantly for work and the Miroooo X2 is a game changer. The travel case is sleek, the battery lasts forever, and it is so light I forget I packed it. Best travel toothbrush ever.",
    name: "Priya K.",
  },
  {
    id: "result-06",
    image: productAsset("07-ipx7-waterproof.png", "miroooo-electric-toothbrush-x2"),
    concern: "Shower Brushing",
    title: "Shower-Safe & Easy",
    quote:
      "I love brushing in the shower and the IPX7 rating means I never worry about water damage. The aluminum body feels premium and the 2-minute timer keeps me on track every morning.",
    name: "Michael B.",
  },
  {
    id: "result-07",
    image: productAsset("08-3-modes.png", "miroooo-electric-toothbrush-x2"),
    concern: "Inconsistent Clean",
    title: "3 Modes for Every Need",
    quote:
      "Having 3 modes means I can customize my brushing every day. Standard for mornings, Whitening before a night out, and Deep Cleansing on Sundays. It feels like having 3 different toothbrushes in one.",
    name: "Anna W.",
  },
  {
    id: "result-08",
    image: productAsset("09-lightweight-51g.png", "miroooo-electric-toothbrush-x2"),
    concern: "Bulky Brushes",
    title: "So Light, So Powerful",
    quote:
      "At 51g, the Miroooo X2 is half the size of my old electric brush but feels way more powerful. The aluminum body is a massive upgrade over plastic. It looks and feels like a luxury product.",
    name: "Chris D.",
  },
];

export const reviewVideos: ReviewVideo[] = [
  {
    id: "review-01",
    poster: "https://images.videowise.com/cdn_v_i/XS/converted/thumbnails/1719486304350_448129a4-6d94-4e44-b8af-511f3e7999b2.webp",
    src: "",
    fallbackSrc: "",
  },
];

export const wavelengths: Wavelength[] = [
  {
    nm: "Mode 1",
    name: "Standard",
    color: "#4a90d9",
    description: "Gentle daily cleaning for sensitive gums and general oral care. Perfect for everyday use with a balanced vibration intensity.",
  },
  {
    nm: "Mode 2",
    name: "Whitening",
    color: "#e8a52c",
    description: "High vibration frequency to effectively remove discoloration from coffee, tea, and tobacco. Brightens your smile with consistent use.",
  },
  {
    nm: "Mode 3",
    name: "Deep Cleansing",
    color: "#5cc987",
    description: "Extraordinarily effective brushing for a thorough clean. Targets hard-to-reach areas and delivers a professional-level cleaning experience.",
  },
];

export const torchWavelengths: Wavelength[] = [];

export const torchFeatures: Feature[] = [];

export const torchDetailImages: any[] = [];

export const torchHowToUse: string[] = [];

export const torchFaqs: FAQItem[] = [];

export const expertVideo = {
  poster: productAsset("01-miroooo-toothbrush-x2-hero.png", "miroooo-electric-toothbrush-x2"),
  src: "",
};

export const comparison = {
  intro: "See how the Miroooo Electric Toothbrush X2 compares to leading competitors and why thousands have made the switch.",
  columns: [
    { label: "Miroooo X2", price: "$119", featured: true },
    { label: "Oral-B Pro", price: "$149" },
    { label: "Philips Sonicare", price: "$179" },
    { label: "Manual Brush", price: "$5" },
  ],
  rows: [
    ["Vibrations Per Minute", "32,000 VPM", "31,000 VPM", "31,000 VPM", "N/A"],
    ["Brushing Modes", "3 modes", "2 modes", "3 modes", "1 mode"],
    ["Battery Life", "60 days", "14 days", "14 days", "N/A"],
    ["Body Material", "Aluminum Alloy", "Plastic", "Plastic", "Plastic"],
    ["Weight", "51g", "130g", "140g", "20g"],
    ["Waterproof Rating", "IPX7", "IPX7", "IPX7", "N/A"],
    ["Travel Case Included", "Yes", "No", "No", "N/A"],
  ],
};

export const touchTech = [
  {
    title: "Sonic Fluid Dynamics",
    body: "Micro-vibrations create fluid dynamics that push water and paste between teeth and along the gumline — cleaning areas traditional brushes simply can not reach.",
  },
  {
    title: "Smart Timer",
    body: "Built-in 2-minute auto-timer with 30-second quadrant alerts ensures you brush every section of your mouth evenly for a complete clean every time.",
  },
  {
    title: "Pressure-Sensitive Button",
    body: "The sensitive pressure button provides smooth, intuitive operation. No complicated menus — just press and toggle between modes effortlessly.",
  },
];

export const faqs: FAQItem[] = [
  {
    question: "How often should I replace the brush heads?",
    answer:
      "We recommend replacing your brush heads every 3 months for optimal cleaning performance. Worn bristles are less effective at removing plaque and can irritate gums. The Miroooo X2 includes 2 premium brush heads, and replacements are available on our website.",
  },
  {
    question: "Is the Miroooo X2 suitable for sensitive teeth and gums?",
    answer:
      "Yes! The Standard mode is specifically designed for gentle brushing and sensitive gums. The sonic vibrations are much gentler than traditional mechanical scrubbing, and many users with braces, implants, and sensitive teeth report significant improvement in gum comfort after switching to the Miroooo X2.",
  },
  {
    question: "How long does the battery last?",
    answer:
      "The Miroooo X2 delivers an impressive 60 days of battery life on a single charge with regular use (2x daily). It charges via USB-C, so you can use any modern phone charger or power bank. A full charge takes approximately 2 hours.",
  },
  {
    question: "Can I use the Miroooo X2 in the shower?",
    answer:
      "Absolutely. The Miroooo X2 is IPX7 rated, meaning it is fully waterproof and safe to use in the shower. You can also rinse it under the tap without any worry. The aluminum body is designed to resist moisture and maintain its premium look over time.",
  },
  {
    question: "What is the difference between the 3 brushing modes?",
    answer:
      "Standard mode provides a gentle, balanced clean for everyday use — ideal for sensitive gums. Whitening mode uses higher vibration frequency to break down and remove surface stains from coffee, tea, and tobacco. Deep Cleansing mode delivers maximum power for an extraordinarily thorough brushing experience, perfect for days when you want that fresh-from-the-dentist feeling.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We offer a 30-day money-back guarantee. If you are not completely satisfied with your Miroooo Electric Toothbrush X2, simply contact our support team within 30 days of delivery for a full refund. We are confident you will love the difference, but your satisfaction is our priority.",
  },
];
