"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { AnimateIn } from "@/components/ui/AnimateIn";
import {
  BarChart3,
  TrendingUp,
  Bell,
  CalendarCheck,
  Heart,
  Sparkles,
} from "lucide-react";

const TiltCard = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(mouseY, [0, 1], [5, -5]), {
    stiffness: 150,
    damping: 15,
  });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-5, 5]), {
    stiffness: 150,
    damping: 15,
  });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const FeatureRow = ({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) => (
  <div className="flex items-start gap-3">
    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.03] text-white/50">
      {icon}
    </div>
    <p className="pt-1.5 text-sm leading-relaxed text-white/45">{text}</p>
  </div>
);

const XtockCard = () => {
  const t = useTranslations("solutions");

  return (
    <TiltCard className="h-full">
      <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 backdrop-blur-xl md:p-10">
        {/* Linear-style green backlight */}
        <div
          aria-hidden="true"
          className="absolute -left-32 -top-32 h-96 w-96 rounded-full opacity-[0.06] blur-[100px] transition-opacity duration-700 group-hover:opacity-[0.12]"
          style={{ background: "#25D366" }}
        />

        <div className="relative z-10">
          <span className="inline-flex items-center rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.15em] text-white/40">
            {t("xtock.badge")}
          </span>

          <h3 className="mt-6 font-heading text-4xl font-extrabold tracking-tighter text-white md:text-5xl">
            {t("xtock.name")}
          </h3>

          <p className="mt-2 text-lg font-medium text-white/60">
            {t("xtock.tagline")}
          </p>

          <p className="mt-4 leading-relaxed text-white/40">
            {t("xtock.description")}
          </p>

          <div className="mt-8 flex flex-col gap-4">
            <FeatureRow
              icon={<BarChart3 className="h-4 w-4" />}
              text={t("xtock.features.0")}
            />
            <FeatureRow
              icon={<TrendingUp className="h-4 w-4" />}
              text={t("xtock.features.1")}
            />
            <FeatureRow
              icon={<Bell className="h-4 w-4" />}
              text={t("xtock.features.2")}
            />
          </div>

          {/* Photo accent */}
          <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-xl border border-white/[0.06]">
            <Image
              src="/images/xtock-inventory.png"
              alt="Chef checking inventory in walk-in cooler"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-base/60 to-transparent" />
          </div>
        </div>
      </div>
    </TiltCard>
  );
};

const VoztreCard = () => {
  const t = useTranslations("solutions");

  return (
    <TiltCard className="h-full">
      <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 backdrop-blur-xl md:p-10">
        {/* Vercel-style animated border beam */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        >
          {/* Traveling light */}
          <div
            className="absolute h-20 w-20 rounded-full blur-xl"
            style={{
              background: "rgba(245,158,11,0.3)",
              animation: "border-beam-travel 4s linear infinite",
              top: 0,
              left: 0,
            }}
          />
        </div>

        {/* Warm ambient glow */}
        <div
          aria-hidden="true"
          className="absolute -right-32 -top-32 h-96 w-96 rounded-full opacity-[0.04] blur-[100px] transition-opacity duration-700 group-hover:opacity-[0.08]"
          style={{ background: "#F59E0B" }}
        />

        <div className="relative z-10">
          <span className="inline-flex items-center rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.15em] text-white/40">
            {t("vostre.badge")}
          </span>

          <h3 className="mt-6 font-heading text-4xl font-extrabold tracking-tighter text-white md:text-5xl">
            {t("vostre.name")}
          </h3>

          <p className="mt-2 text-lg font-medium text-white/60">
            {t("vostre.tagline")}
          </p>

          <p className="mt-4 leading-relaxed text-white/40">
            {t("vostre.description")}
          </p>

          <div className="mt-8 flex flex-col gap-4">
            <FeatureRow
              icon={<CalendarCheck className="h-4 w-4" />}
              text={t("vostre.features.0")}
            />
            <FeatureRow
              icon={<Heart className="h-4 w-4" />}
              text={t("vostre.features.1")}
            />
            <FeatureRow
              icon={<Sparkles className="h-4 w-4" />}
              text={t("vostre.features.2")}
            />
          </div>

          {/* Photo accent */}
          <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-xl border border-white/[0.06]">
            <Image
              src="/images/vostre-hospitality.jpg"
              alt="Restaurant operator managing guest experience on tablet"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-base/60 to-transparent" />
          </div>
        </div>
      </div>
    </TiltCard>
  );
};

export const ProductFeatures = () => {
  const t = useTranslations("solutions");

  return (
    <section
      id="solutions"
      className="relative overflow-hidden bg-base pt-24 pb-24 md:pt-32 md:pb-32"
    >
      <Container className="relative z-10">
        <AnimateIn>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/25">
              {t("eyebrow")}
            </p>
            <h2 className="mt-4 font-heading text-4xl font-extrabold tracking-tighter text-white md:text-6xl">
              {t("headline")}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/35">
              {t("description")}
            </p>
          </div>
        </AnimateIn>

        {/* Bento Grid — Asymmetric */}
        <div className="mt-16 grid gap-5 lg:grid-cols-2">
          <AnimateIn direction="left" delay={0.1}>
            <XtockCard />
          </AnimateIn>
          <AnimateIn direction="right" delay={0.2}>
            <VoztreCard />
          </AnimateIn>
        </div>
      </Container>
    </section>
  );
};
