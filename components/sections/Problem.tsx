"use client";

import { motion } from "framer-motion";
import { ShoppingCart, Truck, UserX, LayoutDashboard } from "lucide-react";
import { useTranslations } from "next-intl";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { StatCallout } from "@/components/ui/StatCallout";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { getSlot } from "@/lib/image-config";

const problemIcons = [ShoppingCart, Truck, UserX];
const problemKeys = ["ordering", "delivery", "burnout"] as const;

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export const Problem = () => {
  const t = useTranslations("problem");
  const stripSlot = getSlot("problem-hero");

  return (
    <SectionWrapper id="problem" bg="navy" grain cursorGlow>
      <Container>
        <AnimateIn>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-sage">
              {t("eyebrow")}
            </p>
            <h2 className="mt-4 font-heading text-3xl font-bold text-white md:text-[3rem]">
              {t("headline")}
            </h2>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <StatCallout
            value={5000}
            prefix="$"
            label={t("statLabel")}
          />
        </AnimateIn>

        <AnimateIn delay={0.15}>
          <p className="mx-auto max-w-3xl text-center text-lg text-cream/70">
            {t("description")}
          </p>
        </AnimateIn>

        <AnimateIn className="my-10">
          <div className="relative mx-auto max-w-6xl overflow-hidden rounded-xl border border-white/10">
            <ImagePlaceholder
              id="problem-hero"
              alt={stripSlot?.alt.en ?? ""}
              aspectRatio="21:9"
              mood="warm"
              icon={LayoutDashboard}
              label="The management tax"
              src={stripSlot?.src}
              className="md:!aspect-[21/9] !aspect-video"
            />
            <div className="pointer-events-none absolute inset-0 bg-navy/60 mix-blend-multiply" />
            <div className="pointer-events-none absolute inset-0 bg-terracotta/10 mix-blend-screen" />
          </div>
        </AnimateIn>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-6 md:grid-cols-3"
        >
          {problemKeys.map((key, i) => {
            const Icon = problemIcons[i];
            return (
              <motion.div key={key} variants={cardVariants}>
                <Card className="h-full border-t-2 border-t-terracotta/60">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-terracotta/10">
                    <Icon className="h-8 w-8 text-sage" />
                  </div>
                  <h3 className="mt-4 font-heading text-xl font-bold text-white">
                    {t(`cards.${key}.title`)}
                  </h3>
                  <p className="mt-3 text-cream/65 leading-relaxed">
                    {t(`cards.${key}.description`)}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </SectionWrapper>
  );
};
