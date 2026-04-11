"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { AnimateIn } from "@/components/ui/AnimateIn";

export const BuiltFromInside = () => {
  const t = useTranslations("builtFromInside");

  return (
    <section className="relative overflow-hidden bg-base py-24 md:py-32">
      {/* Subtle top border */}
      <div className="absolute inset-x-0 top-0 h-px bg-white/[0.04]" />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text content */}
          <div>
            <AnimateIn direction="up">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/30">
                {t("eyebrow")}
              </p>
              <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-tighter text-white md:text-5xl">
                {t("headline")}
              </h2>
            </AnimateIn>

            <AnimateIn direction="up" delay={0.1}>
              <p className="mt-6 leading-relaxed text-white/50">
                {t("description")}
              </p>
            </AnimateIn>

            <AnimateIn direction="up" delay={0.2}>
              <p className="mt-4 leading-relaxed text-white/50">
                {t("paragraph2")}
              </p>
            </AnimateIn>

            <AnimateIn direction="up" delay={0.3}>
              <div className="mt-8 rounded-xl border border-white/[0.06] bg-white/[0.02] px-6 py-5">
                <p className="text-sm font-medium leading-relaxed text-white/60">
                  {t("callout")}
                </p>
              </div>
            </AnimateIn>
          </div>

          {/* Photo */}
          <AnimateIn direction="right" delay={0.15}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/[0.06]">
              <Image
                src="/images/built-inside.webp"
                alt={t("imagePlaceholder")}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-base/40 to-transparent" />
            </div>
          </AnimateIn>
        </div>
      </Container>
    </section>
  );
};
