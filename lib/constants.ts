export const NAV_ITEMS = [
  { label: "Problem", href: "#problem" },
  { label: "Solutions", href: "#solutions" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "About", href: "#founder" },
  { label: "FAQ", href: "#faq" },
] as const;

export const FAQ_ITEMS = [
  {
    question: "What if the AI makes a bad ordering decision?",
    answer:
      "It can't — not without your approval. During the 7-Day Confidence Phase, every single decision goes through you via WhatsApp. After Day 8, you choose your autonomy level. And you always retain 100% veto power, forever.",
  },
  {
    question: "How long does onboarding take?",
    answer:
      "24 hours to connect. 48 hours to learn. 7 days to build confidence. You'll see value within the first shift study.",
  },
  {
    question: "What systems do you integrate with?",
    answer:
      "We offer white-glove credentialing and connect to major POS and inventory systems. We handle the technical setup entirely — you don't need an IT team.",
  },
  {
    question: "What does a trial look like?",
    answer:
      "30-day Xtock trial. 7-day Voztre trial. No contracts. No setup fees. If it doesn't earn its keep, you walk.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Enterprise-grade encryption in transit and at rest. We never sell your data. We never train on your data. Your operational intelligence stays yours.",
  },
  {
    question: "What's the pricing model?",
    answer:
      "We'll share specific pricing during your pilot onboarding call. Our model is designed so the AI pays for itself within the first month through recovered margins and reduced waste.",
  },
] as const;

export const LOCATION_OPTIONS = [
  { value: "", label: "Select range" },
  { value: "1-3", label: "1–3 locations" },
  { value: "4-7", label: "4–7 locations" },
  { value: "8-15", label: "8–15 locations" },
  { value: "16+", label: "16+ locations" },
] as const;
