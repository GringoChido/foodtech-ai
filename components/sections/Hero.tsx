"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { GrainOverlay } from "@/components/ui/GrainOverlay";
import { AnimateIn } from "@/components/ui/AnimateIn";

export const Hero = () => {
  const t = useTranslations("hero");

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-base"
    >
      {/* Full-bleed cinematic photo */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-chef.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />

        {/* Heavy dark overlay for text legibility */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-base/70"
        />

        {/* Warm culinary ambient tint */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(188,108,37,0.08) 0%, transparent 60%)",
          }}
        />

        {/* Heavy bottom vignette — melts into black */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, transparent 30%, rgba(10,10,10,0.6) 65%, #0a0a0a 100%)",
          }}
        />

        {/* Side vignettes */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(10,10,10,0.7) 0%, transparent 25%, transparent 75%, rgba(10,10,10,0.7) 100%)",
          }}
        />

        {/* Top gradient for header readability */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-40"
          style={{
            background:
              "linear-gradient(to bottom, rgba(10,10,10,0.6) 0%, transparent 100%)",
          }}
        />

        <GrainOverlay />
      </div>

      {/* Content */}
      <Container className="relative z-10 flex min-h-screen flex-col items-center justify-center pb-24 pt-32 text-center">
        <AnimateIn direction="up" delay={0}>
          <h1 className="mx-auto max-w-5xl font-heading text-5xl font-extrabold tracking-tighter text-white sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            {t("headline")}
          </h1>
        </AnimateIn>

        <AnimateIn direction="up" delay={0.1}>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/55 md:text-xl">
            {t("subheadline")}
          </p>
        </AnimateIn>

        <AnimateIn direction="up" delay={0.2}>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button as="a" href="#waitlist" size="lg">
              {t("cta")}
            </Button>
          </div>
        </AnimateIn>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mx-auto mt-14 flex max-w-xl flex-wrap items-center justify-center gap-10 md:gap-14"
        >
          {[
            { stat: t("resultStat1"), label: t("resultLabel1") },
            { stat: t("resultStat2"), label: t("resultLabel2") },
            { stat: t("resultStat3"), label: t("resultLabel3") },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <p className="font-heading text-2xl font-extrabold tracking-tighter text-white md:text-3xl">
                {s.stat}
              </p>
              <p className="mt-0.5 text-xs text-white/30">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </Container>

      {/* Scroll indicator */}
      <motion.a
        href="#solutions"
        aria-label={t("scrollLabel")}
        className="absolute bottom-8 left-1/2 z-30 -translate-x-1/2"
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <ChevronDown className="h-6 w-6 text-white/20" />
      </motion.a>
    </section>
  );
};
