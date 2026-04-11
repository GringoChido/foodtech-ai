"use client";

import { useTranslations } from "next-intl";
import { GrainOverlay } from "@/components/ui/GrainOverlay";
import { Container } from "@/components/ui/Container";
import { AnimateIn } from "@/components/ui/AnimateIn";

const InitialsAvatar = () => (
  <div className="flex h-32 w-32 items-center justify-center rounded-full border-2 border-sage/30 bg-charcoal shadow-[0_0_60px_rgba(163,177,138,0.15)] transition-all duration-300 hover:border-sage/50 hover:shadow-[0_0_80px_rgba(163,177,138,0.25)]">
    <span className="font-heading text-4xl font-extrabold text-sage">FG</span>
  </div>
);

export const FounderStory = () => {
  const t = useTranslations("founder");

  return (
    <section id="founder" className="relative overflow-hidden bg-charcoal py-20 md:py-28 lg:py-32">
      <GrainOverlay />

      <Container className="relative z-[2]">
        <div className="grid items-center gap-12 lg:grid-cols-5">
          {/* Mobile portrait */}
          <AnimateIn className="flex justify-center lg:hidden">
            <InitialsAvatar />
          </AnimateIn>

          <div className="lg:col-span-3">
            <AnimateIn>
              <p className="text-sm font-semibold uppercase tracking-widest text-sage">
                {t("eyebrow")}
              </p>
              <h2 className="mt-4 font-heading text-3xl font-bold text-white md:text-[3rem]">
                {t("headline")}
              </h2>
            </AnimateIn>

            <AnimateIn delay={0.15}>
              <article className="relative mt-8 space-y-6 pl-6 text-lg leading-relaxed text-cream/80 md:text-xl">
                <div
                  className="absolute left-0 top-0 bottom-0 w-1 rounded-full"
                  style={{ background: 'linear-gradient(to bottom, rgba(163,177,138,1), rgba(163,177,138,0.2))' }}
                />
                <span
                  aria-hidden="true"
                  className="absolute -top-4 -left-2 font-heading text-[12rem] md:text-[16rem] leading-none text-sage/[0.07] select-none pointer-events-none z-0"
                >
                  &ldquo;
                </span>
                <p className="relative z-[1]">&ldquo;{t("quote1")}</p>
                <p className="relative z-[1]">{t("quote2")}</p>
                <p className="relative z-[1]">{t("quote3")}&rdquo;</p>
              </article>
            </AnimateIn>

            <AnimateIn delay={0.2}>
              <p className="mt-8 font-heading text-base font-semibold text-cream/90">
                {t("attribution")}
              </p>
            </AnimateIn>
          </div>

          {/* Desktop portrait */}
          <AnimateIn direction="right" delay={0.2} className="hidden justify-center lg:col-span-2 lg:flex">
            <InitialsAvatar />
          </AnimateIn>
        </div>
      </Container>
    </section>
  );
};
