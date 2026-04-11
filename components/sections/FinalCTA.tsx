"use client";

import { Users } from "lucide-react";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { WaitlistForm } from "@/components/forms/WaitlistForm";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { getSlot } from "@/lib/image-config";

export const FinalCTA = () => {
  const t = useTranslations("cta");
  const teamSlot = getSlot("cta-team");

  return (
    <section id="waitlist" className="cta-animated-gradient relative overflow-hidden py-20 md:py-28 lg:py-32">
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-[70%] md:block"
        style={{
          opacity: 0.1,
          maskImage: "linear-gradient(to bottom, transparent 0%, black 50%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 50%)",
        }}
      >
        <ImagePlaceholder
          id="cta-team"
          alt={teamSlot?.alt.en ?? ""}
          aspectRatio="16:9"
          mood="cool"
          icon={Users}
          src={teamSlot?.src}
          className="h-full w-full !rounded-none !aspect-auto mix-blend-overlay"
        />
      </div>

      <Container className="relative z-10 max-w-2xl text-center">
        <AnimateIn>
          <h2 className="font-heading text-3xl font-bold text-navy md:text-[3rem]">
            {t("headline")}
          </h2>
          <p className="mt-4 text-navy/70">{t("description")}</p>
        </AnimateIn>

        <AnimateIn delay={0.2}>
          <div className="mt-10">
            <WaitlistForm />
          </div>
        </AnimateIn>

        <AnimateIn delay={0.3}>
          <p className="mt-6 text-sm text-navy/50">{t("disclaimer")}</p>
        </AnimateIn>
      </Container>
    </section>
  );
};
