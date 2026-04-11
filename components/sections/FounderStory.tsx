"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { GrainOverlay } from "@/components/ui/GrainOverlay";
import { Container } from "@/components/ui/Container";
import { AnimateIn } from "@/components/ui/AnimateIn";

export const FounderStory = () => {
  const t = useTranslations("founder");

  return (
    <section id="founder" className="relative overflow-hidden bg-charcoal py-20 md:py-28 lg:py-32">
      <GrainOverlay />

      <Container className="relative z-[2]">
        <div className="grid items-center gap-12 lg:grid-cols-5">
          {/* Kitchen atmosphere photo — mobile */}
          <AnimateIn className="flex justify-center lg:hidden">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/[0.06]">
              <Image
                src="/images/founder-kitchen.jpg"
                alt="Back-of-house restaurant kitchen"
                fill
                className="object-cover"
                style={{ objectPosition: "15% center" }}
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
            </div>
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

          {/* Kitchen atmosphere photo — desktop */}
          <AnimateIn direction="right" delay={0.2} className="hidden lg:col-span-2 lg:block">
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/[0.06]">
              <Image
                src="/images/founder-kitchen.jpg"
                alt="Back-of-house restaurant kitchen"
                fill
                className="object-cover"
                style={{ objectPosition: "15% center" }}
                sizes="40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent" />
            </div>
          </AnimateIn>
        </div>
      </Container>
    </section>
  );
};
