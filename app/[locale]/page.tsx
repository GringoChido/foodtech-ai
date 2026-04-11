import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Solutions } from "@/components/sections/Solutions";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { FounderStory } from "@/components/sections/FounderStory";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { SectionDivider } from "@/components/ui/SectionDivider";
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
        {/* Hero → Problem: same navy, subtle rule */}
        <div className="h-px bg-white/5" />
        <Problem />
        {/* Problem → Solutions */}
        <SectionDivider fillColor="#F5F1EB" position="bottom" />
        <Solutions />
        {/* Solutions → How It Works */}
        <SectionDivider fillColor="#0D1B2A" position="bottom" />
        <HowItWorks />
        {/* How It Works → Founder */}
        <SectionDivider fillColor="#1B263B" position="bottom" />
        <FounderStory />
        {/* Founder → FAQ */}
        <SectionDivider fillColor="#0D1B2A" position="bottom" />
        <FAQ />
        {/* FAQ → Final CTA */}
        <SectionDivider fillColor="#A3B18A" position="bottom" />
        <FinalCTA />
        {/* Final CTA → Footer */}
        <SectionDivider fillColor="#0D1B2A" position="bottom" />
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}
