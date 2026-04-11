"use client";

import { Users } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Container } from "@/components/ui/Container";
import { WaitlistForm } from "@/components/forms/WaitlistForm";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { getSlot } from "@/lib/image-config";

export const FinalCTA = () => {
  const teamSlot = getSlot("cta-team");

  return (
    <div className="relative overflow-hidden">
      <SectionWrapper id="waitlist" bg="sage" className="relative">
        {/* Aspirational team background — desktop only */}
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
          <h2 className="font-heading text-3xl font-bold text-navy md:text-[3rem]">
            Stop Managing Software. Start Onboarding Your New Teammates.
          </h2>
          <p className="mt-4 text-navy/70">
            Join our Founding Pilot Waitlist. Priority given to 4–15 unit groups.
          </p>

          <div className="mt-10">
            <WaitlistForm />
          </div>

          <p className="mt-6 text-sm text-navy/50">
            No credit card. No contracts. Just a conversation.
          </p>
        </Container>
      </SectionWrapper>
    </div>
  );
};
