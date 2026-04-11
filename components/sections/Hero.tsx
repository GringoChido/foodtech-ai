"use client";

import { motion } from "framer-motion";
import { ChevronDown, Flame, Smartphone } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { GrainOverlay } from "@/components/ui/GrainOverlay";
import { CursorGlow } from "@/components/ui/CursorGlow";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { getSlot } from "@/lib/image-config";

export const Hero = () => {
  const t = useTranslations("hero");
  const leftSlot = getSlot("hero-bg-left");
  const rightSlot = getSlot("hero-bg-right");

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-navy pt-20"
    >
      <GrainOverlay />
      <CursorGlow />

      <div
        aria-hidden="true"
        className="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] z-0"
        style={{
          background: 'radial-gradient(ellipse, rgba(163,177,138,0.08) 0%, transparent 70%)',
        }}
      />

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
