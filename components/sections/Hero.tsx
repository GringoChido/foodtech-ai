"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { GrainOverlay } from "@/components/ui/GrainOverlay";
import { CursorGlow } from "@/components/ui/CursorGlow";
import { AnimateIn } from "@/components/ui/AnimateIn";

export const Hero = () => {
  const t = useTranslations("hero");

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-navy pt-20"
    >
      {/* Layer 1: Base dark */}
      <div className="absolute inset-0 bg-navy" />

      {/* Layer 2: Warm ambient glow — simulates kitchen warmth */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 30% 40%, rgba(188,108,37,0.08) 0%, transparent 70%), radial-gradient(ellipse 60% 50% at 70% 60%, rgba(163,177,138,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Layer 3: Motion blur streaks — subtle horizontal light */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.04]"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(245,241,235,0.3) 20%, transparent 40%, rgba(163,177,138,0.2) 60%, transparent 80%)",
        }}
      />

      {/* Layer 4: Grain texture */}
      <GrainOverlay />

      {/* Layer 5: Vignette */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 40%, rgba(13,27,42,0.6) 100%)",
        }}
      />

      <CursorGlow />

      <Container className="relative z-10 text-center">
        <AnimateIn direction="up" delay={0}>
          <h1 className="font-heading text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[3.75rem]">
            {t("headline")}
          </h1>
        </AnimateIn>
        <AnimateIn direction="up" delay={0.15}>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-cream/75 md:text-xl">
            {t("subheadline")}
          </p>
        </AnimateIn>
        <AnimateIn direction="up" delay={0.25}>
          <p className="mx-auto mt-4 max-w-3xl text-sm text-cream/50">
            {t("aeo")}
          </p>
        </AnimateIn>
        <AnimateIn direction="up" delay={0.35}>
          <div className="mt-10">
            <Button as="a" href="#waitlist" size="lg">
              {t("cta")}
            </Button>
          </div>
        </AnimateIn>
      </Container>

      <motion.a
        href="#problem"
        aria-label={t("scrollLabel")}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <ChevronDown className="h-8 w-8 text-cream/50" />
      </motion.a>
    </section>
  );
};
