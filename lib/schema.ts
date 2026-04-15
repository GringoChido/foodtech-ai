import { FAQ_ITEMS } from "./constants";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "FoodTech AI",
  url: "https://www.foodtechai.net",
  logo: "https://www.foodtechai.net/logo.png",
  description:
    "AI teammates that remove operational drag for multi-unit restaurant operators.",
  founder: {
    "@type": "Person",
    name: "Felipe Gómez",
  },
  foundingDate: "2024",
  industry: "Restaurant Technology",
  sameAs: [],
};

export const xtockSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Xtock by FoodTech AI",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web, WhatsApp",
  description:
    "Predictive inventory ordering AI for multi-unit restaurants. Saves 45 minutes per day. 100% human-in-the-loop via WhatsApp.",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/PreOrder",
    price: "0",
    priceCurrency: "USD",
    description: "30-day free trial",
  },
};

export const vostreSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Voztre by FoodTech AI",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web, WhatsApp, Phone",
  description:
    "AI voice agent that handles phone and WhatsApp orders for restaurants 24/7. Zero missed orders, zero 3PD commissions on direct calls.",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/PreOrder",
    price: "0",
    priceCurrency: "USD",
    description: "7-day free trial",
  },
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "FoodTech AI — AI Teammates for Multi-Unit Restaurant Operators",
  description:
    "FoodTech AI builds AI teammates — Xtock for predictive inventory and Voztre for voice ordering — that remove operational drag for 4–15 unit fast-casual restaurant groups.",
  isPartOf: {
    "@type": "WebSite",
    name: "FoodTech AI",
    url: "https://www.foodtechai.net",
  },
  about: {
    "@type": "Thing",
    name: "AI for Restaurant Operations",
  },
};

export const allSchemas = [
  organizationSchema,
  xtockSchema,
  vostreSchema,
  faqSchema,
  webPageSchema,
];
