import { homeAsset, productAsset, productMediaAsset } from "@/lib/media";
import { storeToothbrush } from "./products";

export const homeHero = {
  eyebrow: "Sonic Oral Care",
  title: "Powerful Clean. Half the Size.",
  copy: "The Miroooo Electric Toothbrush X2 delivers 32,000 sonic vibrations per minute in an ultra-lightweight aluminum body. 3 brushing modes, 60-day battery life, and IPX7 waterproof — the ultimate travel-ready oral care companion.",
  ctaLabel: "Shop Now",
  ctaHref: `/products/${storeToothbrush.slug}`,
  images: [
    {
      src: homeAsset("01-home-toothbrush-hero.png"),
      alt: "Miroooo Electric Toothbrush X2 sleek aluminum body",
    },
    {
      src: homeAsset("02-home-lifestyle-clean.png"),
      alt: "Dentist-level clean with 32,000 sonic vibrations per minute",
    },
    {
      src: homeAsset("03-home-sonic-technology.png"),
      alt: "Sonic technology pushing water and paste deep between teeth",
    },
  ],
};

export const homeMaskSpotlight = {
  eyebrow: "Meet the X2",
  title: "The Future of Sonic Oral Care",
  copy: "Say goodbye to bulky, outdated electric toothbrushes. The Miroooo X2 delivers dentist-approved sonic cleaning in a sleek, lightweight aluminum body. 32,000 vibrations per minute for a noticeably whiter, healthier smile. With 3 customizable modes, 60-day battery life, and an IPX7 waterproof rating, it adapts to your routine — at home or on the go.",
  image: {
    src: homeAsset("04-home-battery-spotlight.png"),
    alt: "60-day battery life with USB-C fast charging",
  },
  product: storeToothbrush,
};

export const homeSkincareGuideIntro = {
  eyebrow: "Find Your Mode",
  title: "Which Brushing Mode Is Right for You?",
  copy: "Whether you want a gentle daily clean, a whitening boost, or a deep cleanse, the Miroooo X2 has a mode for every need. Toggle seamlessly between Standard, Whitening, and Deep Cleansing for a personalized brushing experience every single day.",
  ctaLabel: "Learn More",
  ctaHref: `/products/${storeToothbrush.slug}`,
};

export const homeTechnologySpotlight = {
  eyebrow: "Sonic Technology",
  title: "Fluid Dynamics That Reach Where Brushes Can't.",
  copy: "Traditional brushing relies on harsh mechanical scrubbing, which can damage enamel and recede gums. Sonic technology uses high-speed micro-vibrations to create fluid dynamics, pushing water and toothpaste deep between teeth and along the gumline. It is gentler, significantly more effective, and leaves your mouth feeling like you just walked out of a professional dental cleaning.",
  ctaLabel: "Discover the X2",
  ctaHref: `/products/${storeToothbrush.slug}`,
  image: {
    src: productAsset("08-3-modes.png", "miroooo-electric-toothbrush-x2"),
    alt: "3 brushing modes: Standard, Whitening, Deep Cleansing",
  },
};

export const homeFeatureCards = [
  {
    title: "3 Brushing Modes",
    copy: "Toggle seamlessly between Standard, Whitening, and Deep Cleansing modes for a personalized brushing experience every single day.",
    image: homeAsset("05-home-3-modes.png"),
  },
  {
    title: "Travel Ready",
    copy: "At only 51g, the Miroooo X2 is half the size of standard electric toothbrushes. Includes a sleek, durable travel case for easy packing wherever you go.",
    image: homeAsset("06-home-travel-ready.png"),
  },
  {
    title: "Premium Aluminum Body",
    copy: "Crafted from lightweight aluminum alloy with a smooth, durable finish. IPX7 waterproof — fully washable and shower-safe.",
    image: homeAsset("07-home-aluminum-body.png"),
  },
];

export const homeLightTherapy = {
  eyebrow: "Why Sonic?",
  title: "Why Switch to a Sonic Toothbrush?",
  copy: "Traditional brushing relies on harsh mechanical scrubbing, which can damage enamel and recede gums. Sonic technology uses high-speed micro-vibrations to create fluid dynamics, pushing water and toothpaste deep between teeth and along the gumline. It is gentler, significantly more effective, and leaves your mouth feeling like you just walked out of a professional dental cleaning. The Miroooo X2 is highly recommended for users with braces, implants, and sensitive teeth who need power without the pain.",
  image: {
    src: homeAsset("02-home-lifestyle-clean.png"),
    alt: "Sonic toothbrush technology delivering a professional dental clean feeling",
  },
};

export const homeYoungerYou = {
  title: "A Whiter, Healthier Smile",
  copy: "The Miroooo X2's high vibration frequency effectively removes discoloration from coffee, tea, and tobacco. Its gentle sonic waves clean the edges of your gums far better than ordinary brushes, helping to prevent soreness, bleeding, and gingivitis. Ready for a noticeably brighter smile?",
  image: {
    src: homeAsset("03-home-sonic-technology.png"),
    alt: "Whiter teeth and healthier gums with sonic brushing technology",
  },
};

export const homeTorchSpotlight = {
  eyebrow: "Travel Companion",
  title: "The Ultimate Travel Companion.",
  copy: "Never worry about bulky charging docks taking up bathroom space again. The Miroooo X2 is beautifully minimal and comes with a sleek, durable travel case. Just pack it, go, and enjoy a premium brushing experience wherever you are in the world. With 60-day battery life and USB-C fast charging, you will never be caught without power.",
  ctaLabel: "Shop Now",
  ctaHref: `/products/${storeToothbrush.slug}`,
  image: {
    src: productMediaAsset("banner-collage.png", "miroooo-electric-toothbrush-x2"),
    alt: "Miroooo Electric Toothbrush X2 with travel case and accessories",
  },
  product: storeToothbrush,
};

export const homeWavelengthMap = {
  eyebrow: "3 Modes Explained",
  title: "Customized for Your Oral Care Needs",
  copy: "Whether you have sensitive gums, braces, or want to tackle stubborn coffee stains, the Miroooo X2 adapts to you with three powerful modes.",
  zones: [
    "Standard: General daily cleaning for gentle brushing and sensitive gums",
    "Whitening: High vibration frequency to remove coffee, tea, and tobacco stains",
    "Deep Cleansing: Extraordinarily effective brushing for a thorough clean",
  ],
};

export const homeCustomerReviewsGrid = {
  title: "Ready for a Whiter Smile?",
  copy: "Join 2,800+ happy customers who have upgraded their oral care routine with the Miroooo Electric Toothbrush X2.",
  ctaLabel: "Read Reviews",
  ctaHref: "/pages/about-us",
  image: productMediaAsset("banner-collage.png", "miroooo-electric-toothbrush-x2"),
};
