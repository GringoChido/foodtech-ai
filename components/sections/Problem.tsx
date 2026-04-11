"use client";

import { motion } from "framer-motion";
import { ShoppingCart, Truck, UserX, LayoutDashboard } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { getSlot } from "@/lib/image-config";

const problems = [
  {
    icon: ShoppingCart,
    title: "Ordering Guesswork",
    description:
      "Manual inventory decisions made tired, late, and without data. Waste adds up silently across every location.",
  },
  {
    icon: Truck,
    title: "Delivery Chaos",
    description:
      "Missed phone orders. 3PD commission bleed. Revenue leaking through channels you can't monitor at scale.",
  },
  {
    icon: UserX,
    title: "Staff Burnout",
    description:
      "Your best managers are drowning in operational drag instead of leading their teams and growing your brand.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export const Problem = () => {
  const stripSlot = getSlot("problem-hero");

  return (
    <SectionWrapper id="problem" bg="navy">
      <Container>
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-sage">
            The Multi-Unit Trap
          </p>
          <h2 className="mt-4 font-heading text-3xl font-bold text-white md:text-[3rem]">
            The Execution Gap Is Costing You{" "}
            <span className="text-terracotta">$5,000/Month</span> Per Location.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-cream/70">
            Your GMs are exhausted — acting as human bridges between fragmented
            tools, making $5,000 inventory decisions at midnight, and absorbing
            the &ldquo;management tax&rdquo; that comes with scaling past 4 units.
          </p>
        </div>

        {/* Cinematic strip */}
        <div className="relative mx-auto mt-12 mb-12 max-w-6xl overflow-hidden rounded-xl border border-white/10">
          <ImagePlaceholder
            id="problem-hero"
            alt={stripSlot?.alt.en ?? ""}
            aspectRatio="21:9"
            mood="warm"
            icon={LayoutDashboard}
            label="The management tax"
            src={stripSlot?.src}
            className="md:!aspect-[21/9] !aspect-video"
          />
          {/* Duotone overlays for when real image is present */}
          <div className="pointer-events-none absolute inset-0 bg-navy/60 mix-blend-multiply" />
          <div className="pointer-events-none absolute inset-0 bg-terracotta/10 mix-blend-screen" />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-6 md:grid-cols-3"
        >
          {problems.map((item) => (
            <motion.div key={item.title} variants={cardVariants}>
              <Card className="h-full">
                <item.icon className="h-10 w-10 text-sage" />
                <h3 className="mt-4 font-heading text-xl font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-cream/65 leading-relaxed">
                  {item.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </SectionWrapper>
  );
};
