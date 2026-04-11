"use client";

import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Container } from "@/components/ui/Container";
import { Accordion } from "@/components/ui/Accordion";
import { AnimateIn } from "@/components/ui/AnimateIn";

const ShaderBackground = dynamic(
  () => import("@/components/ui/ShaderBackground"),
  { ssr: false }
);

const FAQ_KEYS = ["badDecision", "onboarding", "integrations", "trial", "security", "pricing"] as const;

export const FAQ = () => {
  const t = useTranslations("faq");

  const items = FAQ_KEYS.map((key) => ({
    question: t(`items.${key}.question`),
    answer: t(`items.${key}.answer`),
  }));

  return (
    <SectionWrapper id="faq" bg="navy" grain cursorGlow>
      {/* Animated shader background — subtle accent */}
      <div className="absolute inset-0 z-0 opacity-[0.12]">
        <ShaderBackground />
      </div>

      <Container className="max-w-3xl">
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

        <div className="mt-12">
          <Accordion items={items} />
        </div>
      </Container>
    </SectionWrapper>
  );
};
