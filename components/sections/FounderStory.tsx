"use client";

import { User, Clock } from "lucide-react";
import { useTranslations } from "next-intl";
import { GrainOverlay } from "@/components/ui/GrainOverlay";
import { Container } from "@/components/ui/Container";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { getSlot } from "@/lib/image-config";

export const FounderStory = () => {
  const t = useTranslations("founder");
  const portraitSlot = getSlot("founder-portrait");
  const kitchenSlot = getSlot("founder-kitchen");

  return (
    <section id="founder" className="relative overflow-hidden bg-charcoal py-20 md:py-28 lg:py-32">
      <GrainOverlay />

      <div className="pointer-events-none absolute inset-0 hidden md:block" style={{ opacity: 0.08 }}>
        <ImagePlaceholder
          id="founder-kitchen"
          alt={kitchenSlot?.alt.en ?? ""}
          aspectRatio="16:9"
          mood="warm"
          icon={Clock}
          src={kitchenSlot?.src}
          className="h-full w-full !rounded-none !aspect-auto mix-blend-lighten"
        />
      </div>
      <div className="pointer-events-none absolute inset-0 md:hidden" style={{ opacity: 0.05 }}>
        <ImagePlaceholder
          id="founder-kitchen-mobile"
          alt=""
          aspectRatio="16:9"
          mood="warm"
          className="h-full w-full !rounded-none !aspect-auto"
        />
      </div>

      <Container className="relative z-[2]">
        <div className="grid items-center gap-12 lg:grid-cols-5">
          <AnimateIn className="flex justify-center lg:hidden">
            <div className="w-[60%] max-w-[280px]">
              <ImagePlaceholder
                id="founder-portrait"
                alt={portraitSlot?.alt.en ?? ""}
                aspectRatio="4:5"
                mood="warm"
                icon={User}
                label="Felipe Gómez"
                src={portraitSlot?.src}
                className="border border-sage/20 shadow-[0_0_60px_rgba(163,177,138,0.15)]"
              />
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

          <AnimateIn direction="right" delay={0.2} className="hidden justify-center lg:col-span-2 lg:flex">
            <div className="max-w-[380px]">
              <ImagePlaceholder
                id="founder-portrait"
                alt={portraitSlot?.alt.en ?? ""}
                aspectRatio="4:5"
                mood="warm"
                icon={User}
                label="Felipe Gómez"
                src={portraitSlot?.src}
                className="border border-sage/20 shadow-[0_0_60px_rgba(163,177,138,0.15)] transition-all duration-300 hover:border-sage/40 hover:shadow-[0_0_80px_rgba(163,177,138,0.25)]"
              />
            </div>
          </AnimateIn>
        </div>
      </Container>
    </section>
  );
};
