"use client";

import { motion } from "framer-motion";
import { Plug, ShieldCheck } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Container } from "@/components/ui/Container";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { getSlot } from "@/lib/image-config";

const steps = [
  {
    number: "01",
    title: "Connect",
    timeline: "Day 1",
    description:
      "24-hour white-glove onboarding. We connect to your POS and inventory systems. You don't lift a finger.",
    imageId: "how-it-works-connect",
    imageIcon: Plug,
  },
  {
    number: "02",
    title: "Learn",
    timeline: "Days 2–3",
    description:
      '48-hour "Time to Value" shift study. Your AI teammate observes your operation and builds its understanding.',
    imageId: null,
    imageIcon: null,
  },
  {
    number: "03",
    title: "Verify",
    timeline: "Days 3–8",
    description:
      "7-Day Confidence Phase. Every decision requires your approval via WhatsApp. **100% human veto power.**",
    imageId: "how-it-works-verify",
    imageIcon: ShieldCheck,
  },
  {
    number: "04",
    title: "Execute",
    timeline: "Day 8+",
    description:
      "Full autonomy option unlocks after Day 8. Or keep human-in-the-loop forever. Your call.",
    imageId: null,
    imageIcon: null,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const stepVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const renderDescription = (text: string) => {
  const parts = text.split(/\*\*(.*?)\*\*/);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-semibold text-white">
        {part}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    )
  );
};

export const HowItWorks = () => (
  <SectionWrapper id="how-it-works" bg="navy">
    <Container>
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-sage">
          How It Works
        </p>
        <h2 className="mt-4 font-heading text-3xl font-bold text-white md:text-[3rem]">
          From Handshake to Teammate in 8 Days.
        </h2>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="relative mt-16"
      >
        {/* Desktop connector line */}
        <div className="absolute top-[88px] right-0 left-0 hidden h-0.5 bg-white/10 md:block" />
        {/* Mobile connector line */}
        <div className="absolute top-0 bottom-0 left-6 w-0.5 bg-white/10 md:hidden" />

        <div className="grid gap-8 md:grid-cols-4 md:gap-6">
          {steps.map((step) => {
            const slot = step.imageId ? getSlot(step.imageId) : null;

            return (
              <motion.div
                key={step.number}
                variants={stepVariants}
                className="group relative pl-16 md:pl-0 md:text-center"
              >
                {/* Step image thumbnail + number */}
                <div className="relative md:mx-auto md:mb-6">
                  {slot && step.imageIcon ? (
                    <div className="absolute left-0 top-0 md:relative md:mx-auto">
                      <div className="relative h-20 w-20 md:h-[120px] md:w-[120px] md:mx-auto">
                        <ImagePlaceholder
                          id={step.imageId!}
                          alt={slot.alt.en}
                          aspectRatio="1:1"
                          mood={slot.mood}
                          icon={step.imageIcon}
                          src={slot.src}
                          className="!rounded-xl border-2 border-sage/30 opacity-80"
                        />
                        {/* Number circle overlapping bottom */}
                        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex h-10 w-10 items-center justify-center rounded-full border-2 border-sage/30 bg-navy font-heading text-sm font-extrabold text-sage md:h-12 md:w-12 md:text-lg">
                          {step.number}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full border-2 border-sage/30 bg-navy font-heading text-lg font-extrabold text-sage md:relative md:mx-auto">
                      {step.number}
                    </div>
                  )}
                </div>

                <div className={slot ? "mt-6 md:mt-0" : ""}>
                  <p className="text-xs font-semibold uppercase tracking-wider text-sage/60">
                    {step.timeline}
                  </p>
                  <h3 className="mt-2 font-heading text-xl font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream/60">
                    {renderDescription(step.description)}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </Container>
  </SectionWrapper>
);
