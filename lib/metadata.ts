import type { Metadata } from "next";

export const siteMetadata: Metadata = {
  metadataBase: new URL("https://www.foodtechai.net"),
  title: {
    default: "FoodTech AI — AI Teammates for Multi-Unit Restaurant Operators",
    template: "%s | FoodTech AI",
  },
  description:
    "FoodTech AI builds AI teammates that remove operational drag for 4–15 unit fast-casual restaurant groups. Predictive inventory with Xtock. AI voice ordering with Voztre. Join the Founding Pilot.",
  keywords: [
    "restaurant AI",
    "multi-unit restaurant technology",
    "predictive inventory ordering",
    "AI voice ordering restaurants",
    "restaurant operations automation",
    "food service AI",
    "restaurant inventory management AI",
    "multi-unit restaurant management",
    "restaurant tech startup",
    "AI for fast casual restaurants",
    "reduce food waste AI",
    "restaurant phone ordering AI",
    "operational efficiency restaurants",
  ],
  authors: [{ name: "FoodTech AI" }],
  creator: "FoodTech AI",
  publisher: "FoodTech AI",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.foodtechai.net",
    siteName: "FoodTech AI",
    title: "FoodTech AI — AI Teammates for Multi-Unit Restaurant Operators",
    description:
      "Stop managing software. Start onboarding AI teammates that remove operational drag for your 4–15 unit restaurant group.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "FoodTech AI — Operational Empathy for Multi-Unit Brands",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FoodTech AI — AI Teammates for Multi-Unit Restaurant Operators",
    description:
      "Predictive inventory. AI voice ordering. Built for operators, not IT departments.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.foodtechai.net",
    languages: {
      es: "https://www.foodtechai.net",
      en: "https://www.foodtechai.net/en",
    },
  },
};
