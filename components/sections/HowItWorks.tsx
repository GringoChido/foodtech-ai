"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Container } from "@/components/ui/Container";
import { AnimateIn } from "@/components/ui/AnimateIn";

const stepKeys = ["connect", "learn", "verify", "execute"] as const;

const renderDescription = (text: string) => {
  const parts = text.split(/\*\*(.*?)\*\*/);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-semibold text-white">{part}</strong>
    ) : (
      <span key={i}>{part}</span>
    )
  );
};

export const HowItWorks = () => {
  const t = useTranslations("howItWorks");

  return (
    <SectionWrapper id="how-it-works" bg="navy" grain cursorGlow>
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

        <div className="relative mt-16">
          {/* Horizontal connector line — desktop */}
          <div className="absolute top-[18px] right-[12.5%] left-[12.5%] hidden h-px md:block bg-white/10" />

          {/* Vertical connector line — mobile */}
          <div className="absolute left-[18px] top-[36px] bottom-[36px] w-px md:hidden bg-white/10" />

          <div className="grid gap-10 md:grid-cols-4 md:gap-6">
            {stepKeys.map((key, index) => (
              <AnimateIn key={key} delay={index * 0.15}>
                <div className="relative pl-12 md:pl-0 md:text-center">
                  {/* Dot */}
                  <div className="absolute left-2.5 top-1 md:relative md:left-auto md:top-auto md:mx-auto md:mb-6">
                    <div className="relative flex h-[14px] w-[14px] items-center justify-center">
                      <div className="h-3 w-3 rounded-full bg-sage" />
                      <motion.div
                        className="absolute inset-0 rounded-full border border-sage/50"
                        initial={{ scale: 1, opacity: 0.6 }}
                        whileInView={{ scale: 2.5, opacity: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                      />
                    </div>
                  </div>

                  <span className="inline-block px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-mono tracking-wider text-cream/70">
                    {t(`steps.${key}.timeline`)}
                  </span>
                  <h3 className="mt-2 font-heading text-xl font-bold text-white">
                    {t(`steps.${key}.title`)}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream/60">
                    {renderDescription(t(`steps.${key}.description`))}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
};
