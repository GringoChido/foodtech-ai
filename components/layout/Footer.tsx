"use client";

import { Building2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { GrainOverlay } from "@/components/ui/GrainOverlay";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { getSlot } from "@/lib/image-config";

const quickLinks = [
  { key: "home", href: "#" },
  { key: "xtock", href: "#solutions", label: "Xtock" },
  { key: "vostre", href: "#solutions", label: "Vostre" },
  { key: "faq", href: "#faq", label: "FAQ" },
  { key: "apply", href: "#waitlist" },
];

export const Footer = () => {
  const t = useTranslations("footer");
  const ambianceSlot = getSlot("footer-ambiance");

  return (
    <footer className="relative overflow-hidden bg-charcoal pt-16 pb-8">
      <GrainOverlay />

      <div className="pointer-events-none absolute inset-0 hidden md:block" style={{ opacity: 0.06 }}>
        <ImagePlaceholder
          id="footer-ambiance"
          alt={ambianceSlot?.alt.en ?? ""}
          aspectRatio="21:9"
          mood="neutral"
          icon={Building2}
          src={ambianceSlot?.src}
          className="h-full w-full !rounded-none !aspect-auto mix-blend-lighten"
        />
      </div>

      <Container className="relative z-[2]">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <p className="font-heading text-xl font-bold text-white">FoodTech AI</p>
            <p className="mt-3 text-sm leading-relaxed text-cream/60">{t("tagline")}</p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-cream/40">{t("quickLinks")}</p>
            <ul className="mt-4 flex flex-col gap-2">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <a href={link.href} className="text-sm text-cream/60 transition-colors hover:text-cream">
                    {link.label ?? t(link.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-cream/40">{t("contact")}</p>
            <ul className="mt-4 flex flex-col gap-2">
              <li>
                <a href="mailto:hello@foodtechai.net" className="text-sm text-cream/60 transition-colors hover:text-cream">
                  hello@foodtechai.net
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-cream/40">
              {t("copyright", { year: new Date().getFullYear() })}
            </p>
            <div className="flex gap-4 text-xs text-cream/40">
              <span>{t("privacy")}</span>
              <span>{t("terms")}</span>
            </div>
          </div>
          <p className="mt-4 text-center text-xs text-cream/30">
            {t("builtBy")}{" "}
            <a
              href="https://untold.works"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-cream/50"
            >
              Untold.works
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
};
