import { images } from "@/lib/assets";

export interface NavLink {
  label: string;
  href: string;
}

export interface CategoryItem {
  id: string;
  name: string;
  image: string;
  description?: string;
  count?: number;
}

export interface ProductVariant {
  label: string;
  volume: string;
  price: number;
}

export interface ProductItem {
  id: string;
  name: string;
  subtitle?: string;
  price: string;
  numericPrice: number;
  originalPrice?: string;
  image: string;
  gallery?: string[];
  category: "skincare" | "fragrance" | "beauty";
  rating?: number;
  reviewCount?: number;
  volume?: string;
  variants?: ProductVariant[];
  description: string;
  ritual?: string;
  ingredients?: string[];
  benefits?: string[];
  highlights?: string[];
  badge?: string;
  inStock?: boolean;
}

export interface FeatureItem {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: "ingredients" | "selected" | "routine" | "glow";
}

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Shop by Category", href: "/#categories" },
  { label: "Featured Products", href: "/#bestsellers" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export const categories: CategoryItem[] = [
  {
    id: "skincare",
    name: "SKINCARE",
    image: images.categorySkincare,
    description: "Deeply restorative formulas crafted with active botanical extracts.",
    count: 14,
  },
  {
    id: "fragrance",
    name: "FRAGRANCE",
    image: images.categoryFragrance,
    description: "Intoxicating olfactory narratives distilled in Grasse, France.",
    count: 9,
  },
  {
    id: "beauty",
    name: "BEAUTY",
    image: images.categoryBeauty,
    description: "Weightless pigments celebrating radiant, natural skin expression.",
    count: 18,
  },
];

export const products: ProductItem[] = [
  {
    id: "serum",
    name: "Hydrating Serum",
    subtitle: "Triple Hyaluronic & Botanical Peptide Infusion",
    price: "$42",
    numericPrice: 42,
    originalPrice: "$56",
    image: images.productSerum,
    gallery: [
      images.productSerum,
      images.bestsellerFeatured,
      images.categorySkincare,
    ],
    category: "skincare",
    rating: 4.9,
    reviewCount: 148,
    volume: "50ml / 1.7 fl. oz.",
    badge: "Bestseller",
    inStock: true,
    variants: [
      { label: "Standard", volume: "30ml", price: 32 },
      { label: "Full Size", volume: "50ml", price: 42 },
      { label: "Luxury Ritual", volume: "100ml", price: 74 },
    ],
    description:
      "A featherlight, quick-absorbing serum engineered to saturate dehydrated skin with multi-depth moisture. Formulated with three molecular weights of bio-compatible hyaluronic acid and fermented botanical peptides to restore bounce, calm redness, and deliver a dew-lit luminescence all day.",
    ritual:
      "Warm 3-4 drops between clean palms and gently press into damp face, neck, and décolletage after cleansing. Follow with your preferred daily moisturiser and sun shield.",
    ingredients: [
      "Multi-Molecular Hyaluronic Complex (Low, Medium & High Dalton)",
      "Fermented Green Tea Polyphenols",
      "Bio-identical Squalane (Olive Derived)",
      "Centella Asiatica (Cica) Extract",
      "Damask Rose Petal Distillate",
      "Niacinamide (Vitamin B3 2%)",
    ],
    benefits: [
      "Quenches 72 hours of cellular hydration",
      "Noticeably softens fine dry lines and re-plumps skin texture",
      "Protects the skin moisture barrier against dry air and blue light",
      "Safe for sensitive, acne-prone, and sensitized skin types",
    ],
    highlights: [
      "100% Vegan & Cruelty-Free",
      "Dermatologist Evaluated",
      "Paraben, Sulfate & Silicone Free",
      "Recyclable Frosted Glass Flacon",
    ],
  },
  {
    id: "perfume",
    name: "Bloom Eau de Parfum",
    subtitle: "Grasse Jasmine, Sparkling Bergamot & Cashmere Musk",
    price: "$97",
    numericPrice: 97,
    originalPrice: "$120",
    image: images.productPerfume,
    gallery: [
      images.productPerfume,
      images.aboutPerfume,
      images.categoryFragrance,
    ],
    category: "fragrance",
    rating: 4.8,
    reviewCount: 96,
    volume: "100ml / 3.4 fl. oz.",
    badge: "Award Winner",
    inStock: true,
    variants: [
      { label: "Travel Atomizer", volume: "15ml", price: 38 },
      { label: "Eau de Parfum", volume: "50ml", price: 68 },
      { label: "Signature Flacon", volume: "100ml", price: 97 },
    ],
    description:
      "An ethereal floral composition capturing the magic hour in Grasse. Bloom opens with radiant bursts of Calabrian bergamot and pink pepper, unfurling into velvety night-blooming jasmine and Turkish rose, before settling into a warm cocoon of cashmere musk, white amber, and clean cedarwood.",
    ritual:
      "Mist generously across pulse points: wrists, inner elbows, base of the neck, and behind the ears. For an intimate aura, mist through freshly brushed hair or clothing scarves.",
    ingredients: [
      "Organic Grain Alcohol 85% Vol.",
      "Grasse Jasminum Grandiflorum Absolute",
      "Calabrian Bergamot Peel Oil",
      "Turkish Rosa Damascena Extract",
      "Cashmere White Amber & Cedarwood Accords",
    ],
    benefits: [
      "Extensive 12+ hour sillage and longevity",
      "Pure botanical extracts cold-steeped in traditional copper stills",
      "Allergen-conscious formulation without phthalates or synthetic fixatives",
      "Handcrafted magnetic closure cap",
    ],
    highlights: [
      "Clean Artisan Perfumery",
      "Cruelty-Free Leaping Bunny Certified",
      "Sustainable French Glassware",
      "Free 2ml Discovery Vial Included",
    ],
  },
  {
    id: "lipstick",
    name: "Velvet Matte Lipstick",
    subtitle: "Cashmere Rose · Ultra-Hydrating Botanical Butter Blend",
    price: "$149",
    numericPrice: 149,
    originalPrice: "$175",
    image: images.productLipstick,
    gallery: [
      images.productLipstick,
      images.categoryBeauty,
      images.bestsellerFeatured,
    ],
    category: "beauty",
    rating: 4.9,
    reviewCount: 214,
    volume: "3.5g / 0.12 oz.",
    badge: "Limited Edition",
    inStock: true,
    variants: [
      { label: "01 - Velvet Rose", volume: "3.5g", price: 149 },
      { label: "02 - Nude Suede", volume: "3.5g", price: 149 },
      { label: "03 - Terracotta Glow", volume: "3.5g", price: 149 },
    ],
    description:
      "The pinnacle of couture lips. A weightless, blur-effect matte lipstick infused with wild mango butter, camellia seed oil, and micro-fine mineral pigments. Glides across lips like liquid silk, delivering 10-hour non-drying, high-impact pigment with a cloud-soft blurred finish.",
    ritual:
      "Glide directly from the custom sculpted bullet starting from the Cupid's bow moving outward. Blot gently with a tissue for a soft-focus bitten stain, or layer twice for couture opacity.",
    ingredients: [
      "Wild Mango Seed Butter (Irvingia Gabonensis)",
      "Camellia Japonica Tsubaki Oil",
      "Organic Jojoba Ester Wax",
      "Micronized Mineral Pigments",
      "Vitamin E Tocopherol",
    ],
    benefits: [
      "Featherweight breathable wear that never cracks or flakes",
      "Intense single-swipe color saturation",
      "Infused with nutrient-rich plant lipids to continually soften lip contours",
      "Weighted architectural brass flacon with magnetic snap",
    ],
    highlights: [
      "Refillable Luxury Casing",
      "Lead-Free, Paraben-Free, Fragrance-Free",
      "100% Cruelty-Free",
      "Made in Italy",
    ],
  },
  {
    id: "glow-oil",
    name: "Radiant Facial Oil",
    subtitle: "Cold-Pressed Marula, Rosehip & Golden Jojoba",
    price: "$64",
    numericPrice: 64,
    originalPrice: "$80",
    image: images.categorySkincare,
    gallery: [
      images.categorySkincare,
      images.productSerum,
      images.bestsellerFeatured,
    ],
    category: "skincare",
    rating: 5.0,
    reviewCount: 82,
    volume: "30ml / 1.0 fl. oz.",
    badge: "Editor's Pick",
    inStock: true,
    variants: [
      { label: "Standard Size", volume: "30ml", price: 64 },
      { label: "Deluxe Size", volume: "50ml", price: 92 },
    ],
    description:
      "An elixir of unrefined, golden botanical oils that delivers rapid restorative luminosity. Rich in vital omega fatty acids 3, 6, 7 & 9, this dry oil locks in moisture without clogging pores or feeling greasy, leaving skin with a lit-from-within satin aura.",
    ritual:
      "Warm 2-3 golden drops in hands, inhale the grounding botanical aroma, and gently press onto slightly damp skin as the final crowning step of your nighttime or morning skincare ritual.",
    ingredients: [
      "Virgin Cold-Pressed Marula Oil",
      "Chilean Rosehip Seed Fruit Oil",
      "Organic Golden Jojoba Oil",
      "Seabuckthorn Berry CO2 Extract",
      "Pure Frankincense & Neroli Essential Oils",
    ],
    benefits: [
      "Seals in deep hydration while repairing lipid barrier",
      "Promotes elasticity and evening of skin tone",
      "Non-comedogenic, dry-finish feel",
      "Provides antioxidant defense against environmental stressors",
    ],
    highlights: [
      "100% Pure Plant Extracts",
      "Zero Synthetic Fragrance",
      "Cold-Pressed & Unrefined",
      "UV-Protective Miron Glass",
    ],
  },
];

export const features: FeatureItem[] = [
  {
    id: "01",
    number: "01",
    title: "Premium Ingredients",
    description:
      "Carefully selected products made with quality ingredients chosen for your everyday beauty and skincare routine.",
    icon: "ingredients",
  },
  {
    id: "02",
    number: "02",
    title: "Thoughtfully Selected",
    description:
      "From skincare to beauty and fragrance, every product is chosen with care to bring you quality you can feel good about.",
    icon: "selected",
  },
  {
    id: "03",
    number: "03",
    title: "Beauty for Every Routine",
    description:
      "Discover essentials designed to complement different skin types, beauty needs and everyday rituals.",
    icon: "routine",
  },
  {
    id: "04",
    number: "04",
    title: "One Place, Your Glow",
    description:
      "Skincare, beauty and fragrance - thoughtfully brought together in one modern beauty destination.",
    icon: "glow",
  },
];

export const contactInfo = {
  email: "support@glglow.com",
  phone: "+1 234 567 8900",
  address: "123 Beauty Street\nNew York, NY 10001, USA",
} as const;
