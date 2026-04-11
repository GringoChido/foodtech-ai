"use client";

import { motion } from "framer-motion";
import { Plug, ShieldCheck } from "lucide-react";
import { useTranslations } from "next-intl";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Container } from "@/components/ui/Container";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { getSlot } from "@/lib/image-config";

const stepKeys = ["connect", "learn", "verify", "execute"] as const;

const stepMeta = {
  connect: { number: "01", imageId: "how-it-works-connect", imageIcon: Plug },
  learn: { number: "02", imageId: null, imageIcon: null },
  verify: { number: "03", imageId: "how-it-works-verify", imageIcon: ShieldCheck },
  execute: { number: "04", imageId: null, imageIcon: null },
};

const renderDescription = (text: string) => {
  const parts = text.split(/\*\*(.*?)\*\*/);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-semibold text-white">{part}</strong>
    ) : (
      <span key={i}>{part}</span>
    )
  );
};

export const HowItWorks = () => {
  const t = useTranslations("howItWorks");

  return (
    <SectionWrapper id="how-it-works" bg="navy" grain cursorGlow>
      <Container>
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

        <div className="relative mt-16">
          <div
            className="absolute top-[88px] right-[calc(12.5%+20px)] left-[calc(12.5%+20px)] hidden h-[2px] md:block"
            style={{ background: 'linear-gradient(to right, rgba(163,177,138,0.3), rgba(163,177,138,1))' }}
          />
          <div
            className="absolute left-[20px] top-[60px] bottom-[60px] w-[2px] md:hidden"
            style={{ background: 'linear-gradient(to bottom, rgba(163,177,138,0.3), rgba(163,177,138,1))' }}
          />

          <div className="grid gap-8 md:grid-cols-4 md:gap-6">
            {stepKeys.map((key, index) => {
              const meta = stepMeta[key];
              const slot = meta.imageId ? getSlot(meta.imageId) : null;

              return (
                <AnimateIn key={key} delay={index * 0.15}>
                  <div className="group relative pl-16 md:pl-0 md:text-center">
                    <div className="relative md:mx-auto md:mb-6">
                      {slot && meta.imageIcon ? (
                        <div className="absolute left-0 top-0 md:relative md:mx-auto">
                          <div className="relative h-20 w-20 md:h-[120px] md:w-[120px] md:mx-auto">
                            <ImagePlaceholder
                              id={meta.imageId!}
                              alt={slot.alt.en}
                              aspectRatio="1:1"
                              mood={slot.mood}
                              icon={meta.imageIcon}
                              src={slot.src}
                              className="!rounded-xl border-2 border-sage/30 opacity-80"
                            />
                            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2">
                              <div className="relative flex h-10 w-10 items-center justify-center rounded-full border-2 border-sage/30 bg-navy font-heading text-sm font-extrabold text-sage md:h-12 md:w-12 md:text-lg">
                                {meta.number}
                                <motion.div
                                  className="absolute inset-0 rounded-full border-2 border-sage"
                                  initial={{ scale: 1, opacity: 0.6 }}
                                  whileInView={{ scale: 1.8, opacity: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ duration: 0.8, ease: "easeOut" }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="absolute left-0 top-0 md:relative md:mx-auto">
                          <div className="relative flex h-12 w-12 items-center justify-center rounded-full border-2 border-sage/30 bg-navy font-heading text-lg font-extrabold text-sage">
                            {meta.number}
                            <motion.div
                              className="absolute inset-0 rounded-full border-2 border-sage"
                              initial={{ scale: 1, opacity: 0.6 }}
                              whileInView={{ scale: 1.8, opacity: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.8, ease: "easeOut" }}
                            />
                          </div>
                        </div>
                      )}
                    </div>

                    <div className={slot ? "mt-6 md:mt-0" : ""}>
                      <span className="inline-block px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-mono tracking-wider text-cream/70">
                        {t(`steps.${key}.timeline`)}
                      </span>
                      <h3 className="mt-2 font-heading text-xl font-bold text-white">
                        {t(`steps.${key}.title`)}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-cream/60">
                        {renderDescription(t(`steps.${key}.description`))}
                      </p>
                    </div>
                  </div>
                </AnimateIn>
              );
            })}
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
};
