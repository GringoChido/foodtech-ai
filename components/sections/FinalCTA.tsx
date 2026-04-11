"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { WaitlistForm } from "@/components/forms/WaitlistForm";

export const FinalCTA = () => {
  const t = useTranslations("cta");

  return (
    <section id="waitlist" className="relative overflow-hidden bg-base py-20 md:py-28 lg:py-32">
      {/* Background photo */}
      <div className="absolute inset-0">
        <Image
          src="/images/team-plating.jpg"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-base/80" />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(163,177,138,0.08) 0%, transparent 60%)",
          }}
        />
      </div>

      <Container className="relative z-10 max-w-2xl text-center">
        <AnimateIn>
          <h2 className="font-heading text-3xl font-bold text-white md:text-[3rem]">
            {t("headline")}
          </h2>
          <p className="mt-4 text-white/60">{t("description")}</p>
        </AnimateIn>

        <AnimateIn delay={0.2}>
          <div className="mt-10">
            <WaitlistForm />
          </div>
        </AnimateIn>

        <AnimateIn delay={0.3}>
          <p className="mt-6 text-sm text-white/40">{t("disclaimer")}</p>
        </AnimateIn>
      </Container>
    </section>
  );
};
