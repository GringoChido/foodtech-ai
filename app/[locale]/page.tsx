import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Solutions } from "@/components/sections/Solutions";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { FounderStory } from "@/components/sections/FounderStory";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { allSchemas } from "@/lib/schema";
import { ChatWidget } from "@/components/chatbot/ChatWidget";

export default function HomePage() {
  return (
    <>
      {allSchemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <Header />
      <main id="main-content">
        <Hero />
        {/* Hero → Problem: both navy, subtle rule */}
        <div className="h-px bg-white/5" />
        <Problem />
        {/* Problem (navy) → Products (cream) */}
        <div className="h-24 md:h-32 bg-gradient-to-b from-navy to-cream" />
        <Solutions />
        {/* Products (cream) → How It Works (navy) */}
        <div className="h-24 md:h-32 bg-gradient-to-b from-cream to-navy" />
        <HowItWorks />
        {/* How It Works (navy) → Founder (charcoal) */}
        <div className="h-16 md:h-24 bg-gradient-to-b from-navy to-charcoal" />
        <FounderStory />
        {/* Founder (charcoal) → FAQ (navy) */}
        <div className="h-16 md:h-24 bg-gradient-to-b from-charcoal to-navy" />
        <FAQ />
        {/* FAQ (navy) → CTA (sage) */}
        <div className="h-24 md:h-32 bg-gradient-to-b from-navy to-sage" />
        <FinalCTA />
        {/* CTA (sage) → Footer (navy) */}
        <div className="h-24 md:h-32 bg-gradient-to-b from-sage to-navy" />
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}
