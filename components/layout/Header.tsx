"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";
import { LanguageToggle } from "@/components/layout/LanguageToggle";

const NAV_KEYS = [
  { key: "problem", href: "#problem" },
  { key: "solutions", href: "#solutions" },
  { key: "howItWorks", href: "#how-it-works" },
  { key: "about", href: "#founder" },
  { key: "faq", href: "#faq" },
] as const;

export const Header = () => {
  const t = useTranslations("nav");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-navy/90 backdrop-blur-md shadow-lg"
          : "bg-navy"
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <a
          href="#"
          className="font-heading text-xl font-bold text-white tracking-tight"
        >
          FoodTech AI
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {NAV_KEYS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-sm font-medium text-cream/70 transition-colors hover:text-cream after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-sage after:transition-all after:duration-300 hover:after:w-full"
            >
              {t(item.key)}
            </a>
          ))}
          <LanguageToggle />
          <Button as="a" href="#waitlist" size="sm">
            {t("cta")}
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageToggle />
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="inline-flex items-center justify-center rounded-lg p-2 text-cream transition-colors hover:bg-white/10 min-h-[44px] min-w-[44px]"
            aria-expanded={isMobileOpen}
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
          >
            {isMobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="border-t border-white/10 bg-navy px-4 pb-6 pt-4 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {NAV_KEYS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="rounded-lg px-3 py-2 text-base font-medium text-cream/80 transition-colors hover:bg-white/5 hover:text-cream"
                >
                  {t(item.key)}
                </a>
              ))}
              <Button
                as="a"
                href="#waitlist"
                size="md"
                className="mt-2 w-full text-center"
              >
                {t("cta")}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
