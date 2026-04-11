"use client";

import { motion } from "framer-motion";
import { PackageCheck, Phone } from "lucide-react";
import { useTranslations } from "next-intl";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { getSlot } from "@/lib/image-config";

interface ChatBubbleProps {
  text: string;
  time: string;
  incoming?: boolean;
}

const ChatBubble = ({ text, time, incoming = false }: ChatBubbleProps) => (
  <div className={`flex ${incoming ? "justify-start" : "justify-end"}`}>
    <div
      className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
        incoming
          ? "rounded-bl-sm bg-white text-navy"
          : "rounded-br-sm bg-[#DCF8C6] text-navy"
      }`}
    >
      <p className="whitespace-pre-line">{text}</p>
      <p className="mt-1 text-right text-[10px] text-navy/40">{time}</p>
    </div>
  </div>
);

const messageContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.5 } },
};

const messageVariants = {
  hidden: { opacity: 0, y: 10, scale: 0.95 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.3, ease: "easeOut" as const },
  },
};

const WhatsAppMockup = ({
  contactName,
  messages,
}: {
  contactName: string;
  messages: ChatBubbleProps[];
}) => (
  <div className="overflow-hidden rounded-xl border border-navy/10 shadow-md">
    <div className="flex items-center gap-3 bg-[#075E54] px-4 py-3">
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-xs font-bold text-white">
        {contactName[0]}
      </div>
      <div>
        <p className="text-sm font-medium text-white">{contactName}</p>
        <p className="text-[10px] text-white/60">online</p>
      </div>
    </div>
    <motion.div
      variants={messageContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="flex flex-col gap-2.5 bg-[#ECE5DD] p-4"
    >
      {messages.map((msg, i) => (
        <motion.div key={i} variants={messageVariants}>
          <ChatBubble {...msg} />
        </motion.div>
      ))}
    </motion.div>
  </div>
);

const xtockMessages: ChatBubbleProps[] = [
  { text: "Good morning! Based on this week's sales trends and your Thursday rush pattern, here's your suggested produce order for Sysco:", time: "8:02 AM", incoming: true },
  { text: "Romaine lettuce: 24 cases\nTomatoes: 18 cases\nAvocados: 12 cases\nTotal: $1,847", time: "8:02 AM", incoming: true },
  { text: "Looks good, send it 👍", time: "8:04 AM" },
  { text: "Done! Order confirmed with Sysco. Delivery set for Thursday 6 AM.", time: "8:04 AM", incoming: true },
];

const vostreMessages: ChatBubbleProps[] = [
  { text: "Hi! I'd like to place an order for pickup.", time: "7:15 PM", incoming: true },
  { text: "Of course! I can help you with that. What would you like to order?", time: "7:15 PM" },
  { text: "2 chicken burritos and a large horchata please", time: "7:16 PM", incoming: true },
  { text: "Got it! 2 chicken burritos ($11.98) and 1 large horchata ($4.49). Total: $16.47. Ready in 15 minutes. Confirm?", time: "7:16 PM" },
  { text: "Yes, confirmed!", time: "7:17 PM", incoming: true },
];

export const Solutions = () => {
  const t = useTranslations("solutions");
  const xtockSlot = getSlot("solutions-xtock-context");
  const vostreSlot = getSlot("solutions-vostre-context");

  const xtockFeatures: string[] = [
    t("xtock.features.0"),
    t("xtock.features.1"),
    t("xtock.features.2"),
  ];
  const vostreFeatures: string[] = [
    t("vostre.features.0"),
    t("vostre.features.1"),
    t("vostre.features.2"),
  ];

  return (
    <SectionWrapper id="solutions" bg="cream">
      <Container>
        <AnimateIn>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-sage-hover">
              {t("eyebrow")}
            </p>
            <h2 className="mt-4 font-heading text-3xl font-bold text-navy md:text-[3rem]">
              {t("headline")}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-navy/70">
              {t("description")}
            </p>
          </div>
        </AnimateIn>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <AnimateIn direction="left">
            <Card variant="light" className="h-full">
              <Badge className="bg-sage/20 text-sage-hover">{t("xtock.badge")}</Badge>
              <h3 className="mt-4 font-heading text-2xl font-bold text-navy md:text-[1.875rem]">
                {t("xtock.name")}
              </h3>
              <p className="mt-1 text-navy/60">{t("xtock.tagline")}</p>
              <p className="mt-2 text-sm text-navy/50">{t("xtock.aeo")}</p>
              <ul className="mt-5 flex flex-col gap-2.5 text-sm text-navy/80">
                {xtockFeatures.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="mt-0.5 text-sage">&#10003;</span>
                    {f}
                  </li>
                ))}
              </ul>

              <div className="relative mt-6 overflow-hidden rounded-lg shadow-[inset_0_0_40px_rgba(0,0,0,0.3)]">
                <ImagePlaceholder
                  id="solutions-xtock-context"
                  alt={xtockSlot?.alt.en ?? ""}
                  aspectRatio="4:3"
                  mood="cool"
                  icon={PackageCheck}
                  label="In action"
                  src={xtockSlot?.src}
                  className="!rounded-lg h-[180px] !aspect-auto"
                />
                <div className="pointer-events-none absolute inset-0 bg-sage/10 mix-blend-multiply" />
              </div>

              <p className="mt-3 mb-1 text-center text-[10px] font-medium uppercase tracking-widest text-navy/30">
                &#8595; {t("xtock.seeWhatsApp")}
              </p>

              <div className="rounded-[1.5rem] border border-gray-300/30 shadow-2xl overflow-hidden rotate-1">
                <WhatsAppMockup contactName="Xtock" messages={xtockMessages} />
              </div>
            </Card>
          </AnimateIn>

          <AnimateIn direction="right">
            <Card variant="light" className="h-full">
              <Badge className="bg-sage/20 text-sage-hover">{t("vostre.badge")}</Badge>
              <h3 className="mt-4 font-heading text-2xl font-bold text-navy md:text-[1.875rem]">
                {t("vostre.name")}
              </h3>
              <p className="mt-1 text-navy/60">{t("vostre.tagline")}</p>
              <p className="mt-2 text-sm text-navy/50">{t("vostre.aeo")}</p>
              <ul className="mt-5 flex flex-col gap-2.5 text-sm text-navy/80">
                {vostreFeatures.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="mt-0.5 text-sage">&#10003;</span>
                    {f}
                  </li>
                ))}
              </ul>

              <div className="relative mt-6 overflow-hidden rounded-lg shadow-[inset_0_0_40px_rgba(0,0,0,0.3)]">
                <ImagePlaceholder
                  id="solutions-vostre-context"
                  alt={vostreSlot?.alt.en ?? ""}
                  aspectRatio="4:3"
                  mood="cool"
                  icon={Phone}
                  label="In action"
                  src={vostreSlot?.src}
                  className="!rounded-lg h-[180px] !aspect-auto"
                />
                <div className="pointer-events-none absolute inset-0 bg-sage/10 mix-blend-multiply" />
              </div>

              <p className="mt-3 mb-1 text-center text-[10px] font-medium uppercase tracking-widest text-navy/30">
                &#8595; {t("vostre.seeWhatsApp")}
              </p>

              <div className="rounded-[1.5rem] border border-gray-300/30 shadow-2xl overflow-hidden -rotate-1">
                <WhatsAppMockup contactName="Vostre" messages={vostreMessages} />
              </div>
            </Card>
          </AnimateIn>
        </div>
      </Container>
    </SectionWrapper>
  );
};
