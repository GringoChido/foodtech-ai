"use client";

import { motion } from "framer-motion";
import { ChevronDown, Flame, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { getSlot } from "@/lib/image-config";

export const Hero = () => {
  const leftSlot = getSlot("hero-bg-left");
  const rightSlot = getSlot("hero-bg-right");

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-navy pt-20"
    >
      {/* Atmospheric background accents — desktop only */}
      <div
        className="pointer-events-none absolute inset-y-[10%] left-[-10%] hidden w-[35%] lg:block"
        style={{
          opacity: 0.15,
          maskImage: "linear-gradient(to right, black 0%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, black 0%, transparent 100%)",
        }}
      >
        <ImagePlaceholder
          id="hero-bg-left"
          alt={leftSlot?.alt.en ?? ""}
          aspectRatio="3:4"
          mood="warm"
          icon={Flame}
          src={leftSlot?.src}
          className="h-full w-full !rounded-none !aspect-auto"
        />
      </div>
      <div
        className="pointer-events-none absolute inset-y-[10%] right-[-10%] hidden w-[35%] lg:block"
        style={{
          opacity: 0.15,
          maskImage: "linear-gradient(to left, black 0%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to left, black 0%, transparent 100%)",
        }}
      >
        <ImagePlaceholder
          id="hero-bg-right"
          alt={rightSlot?.alt.en ?? ""}
          aspectRatio="3:4"
          mood="cool"
          icon={Smartphone}
          src={rightSlot?.src}
          className="h-full w-full !rounded-none !aspect-auto"
        />
      </div>

      {/* Mobile subtle background */}
      <div
        className="pointer-events-none absolute inset-0 lg:hidden"
        style={{ opacity: 0.08 }}
      >
        <ImagePlaceholder
          id="hero-bg-left-mobile"
          alt=""
          aspectRatio="16:9"
          mood="warm"
          className="h-full w-full !rounded-none !aspect-auto"
        />
      </div>

      <Container className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="font-heading text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[3.75rem]">
            Operational Empathy for the
            <br className="hidden sm:block" /> Multi-Unit Brand.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-cream/75 md:text-xl">
            Your restaurant doesn&apos;t need more software. It needs a better
            teammate. Scale your 4–15 unit group with calm, AI-native precision.
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-sm text-cream/50">
            FoodTech AI builds AI teammates — Xtock for predictive inventory and
            Vostre for voice ordering — that remove operational drag for 4–15 unit
            fast-casual restaurant groups.
          </p>
          <div className="mt-10">
            <Button as="a" href="#waitlist" size="lg">
              Apply for Pilot Access
            </Button>
          </div>
        </motion.div>
      </Container>

      <motion.a
        href="#problem"
        aria-label="Scroll to next section"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <ChevronDown className="h-8 w-8 text-cream/40" />
      </motion.a>
    </section>
  );
};
