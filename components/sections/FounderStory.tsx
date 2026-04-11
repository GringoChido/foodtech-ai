"use client";

import { motion } from "framer-motion";
import { User, Clock } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Container } from "@/components/ui/Container";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { getSlot } from "@/lib/image-config";

export const FounderStory = () => {
  const portraitSlot = getSlot("founder-portrait");
  const kitchenSlot = getSlot("founder-kitchen");

  return (
    <section id="founder" className="relative overflow-hidden bg-charcoal py-20 md:py-28 lg:py-32">
      {/* Kitchen background atmospheric image */}
      <div
        className="pointer-events-none absolute inset-0 hidden md:block"
        style={{ opacity: 0.08 }}
      >
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
      {/* Even more subtle on mobile */}
      <div
        className="pointer-events-none absolute inset-0 md:hidden"
        style={{ opacity: 0.05 }}
      >
        <ImagePlaceholder
          id="founder-kitchen-mobile"
          alt=""
          aspectRatio="16:9"
          mood="warm"
          className="h-full w-full !rounded-none !aspect-auto"
        />
      </div>

      <Container className="relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-5">
          {/* Mobile portrait — shown first on small screens */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex justify-center lg:hidden"
          >
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-3"
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-sage">
              Why We Built This
            </p>
            <h2 className="mt-4 font-heading text-3xl font-bold text-white md:text-[3rem]">
              20 Years in the Trenches.
            </h2>

            <article className="mt-8 space-y-6 border-l-[3px] border-sage pl-6 text-lg leading-relaxed text-cream/80 md:text-xl">
              <p>
                &ldquo;I&apos;ve spent 20 years in this industry — not behind a
                screen, but behind a line. I know what it feels like to finish
                cleaning a greasy kitchen at 11 PM and then sit down to make
                $5,000 in inventory decisions while you can barely keep your eyes
                open.
              </p>
              <p>
                That&apos;s the moment I built FoodTech AI for. Not the boardroom.
                Not the investor pitch. The midnight moment when a tired operator
                needs a teammate who&apos;s already done the math.
              </p>
              <p>
                We don&apos;t build software. We build AI teammates that remove
                the operational drag that keeps good operators from becoming great
                brands.&rdquo;
              </p>
            </article>

            <p className="mt-8 font-heading text-base font-semibold text-cream/90">
              — Felipe Gómez, Founder
            </p>
          </motion.div>

          {/* Desktop portrait */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="hidden justify-center lg:col-span-2 lg:flex"
          >
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
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
