"use client";

import { motion } from "framer-motion";
import { ShoppingCart, Truck, UserX } from "lucide-react";
import { useTranslations } from "next-intl";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Container } from "@/components/ui/Container";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { StatCallout } from "@/components/ui/StatCallout";

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

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-12 grid gap-6 md:grid-cols-3"
        >
          {problemKeys.map((key, i) => {
            const Icon = problemIcons[i];
            return (
              <motion.div key={key} variants={cardVariants}>
                <div className="h-full rounded-2xl bg-charcoal border border-white/10 p-6 md:p-8 shadow-lg transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl hover:border-white/20">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-sage/10">
                    <Icon className="h-8 w-8 text-sage" />
                  </div>
                  <h3 className="mt-4 font-heading text-xl font-bold text-white">
                    {t(`cards.${key}.title`)}
                  </h3>
                  <p className="mt-3 text-cream/65 leading-relaxed">
                    {t(`cards.${key}.description`)}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </SectionWrapper>
  );
};
