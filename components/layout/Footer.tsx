"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { GrainOverlay } from "@/components/ui/GrainOverlay";

const quickLinks = [
  { key: "home", href: "#" },
  { key: "xtock", href: "#solutions", label: "Xtock" },
  { key: "vostre", href: "#solutions", label: "Voztre" },
  { key: "faq", href: "#faq", label: "FAQ" },
  { key: "apply", href: "#waitlist" },
];

export const Footer = () => {
  const t = useTranslations("footer");

  return (
    <footer className="relative overflow-hidden bg-navy pt-8 pb-6">
      <GrainOverlay />

      <Container className="relative z-[2]">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="shrink-0">
            <p className="font-heading text-lg font-bold text-white">FoodTech AI</p>
            <p className="mt-1 text-sm text-cream/60">{t("tagline")}</p>
          </div>

          <nav className="flex flex-wrap gap-x-5 gap-y-1 text-sm">
            {quickLinks.map((link) => (
              <a key={link.key} href={link.href} className="text-cream/60 transition-colors hover:text-cream">
                {link.label ?? t(link.key)}
              </a>
            ))}
            <a href="mailto:hello@foodtechai.net" className="text-cream/60 transition-colors hover:text-cream">
              hello@foodtechai.net
            </a>
          </nav>
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-2 border-t border-white/10 pt-4 text-xs text-cream/40 sm:flex-row">
          <p>{t("copyright", { year: new Date().getFullYear() })}</p>
          <div className="flex items-center gap-4">
            <span>{t("privacy")}</span>
            <span>{t("terms")}</span>
            <span>
              {t("builtBy")}{" "}
              <a
                href="https://untold.works"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-cream/50"
              >
                Untold.works
              </a>
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
};
