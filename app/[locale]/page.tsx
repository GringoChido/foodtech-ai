import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { ProductFeatures } from "@/components/sections/ProductFeatures";
import { BuiltFromInside } from "@/components/sections/BuiltFromInside";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { FounderStory } from "@/components/sections/FounderStory";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { WhatsAppFloating } from "@/components/sections/WhatsAppFloating";
import { allSchemas } from "@/lib/schema";

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
        <ProductFeatures />
        <div className="h-px bg-white/[0.04]" />
        <Problem />
        <div className="h-px bg-white/[0.04]" />
        <BuiltFromInside />
        <div className="h-px bg-white/[0.04]" />
        <HowItWorks />
        <div className="h-px bg-white/[0.04]" />
        <FounderStory />
        <div className="h-px bg-white/[0.04]" />
        <FAQ />
        <div className="h-px bg-white/[0.04]" />
        <FinalCTA />
        <div className="h-px bg-white/[0.04]" />
      </main>
      <Footer />
      <WhatsAppFloating />
    </>
  );
}
