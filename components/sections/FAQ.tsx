"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Container } from "@/components/ui/Container";
import { Accordion } from "@/components/ui/Accordion";
import { FAQ_ITEMS } from "@/lib/constants";

export const FAQ = () => (
  <SectionWrapper id="faq" bg="navy">
    <Container className="max-w-3xl">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-sage">
          Questions &amp; Trust
        </p>
        <h2 className="mt-4 font-heading text-3xl font-bold text-white md:text-[3rem]">
          Built for Operators Who&apos;ve Been Burned by Software Before.
        </h2>
      </div>

      <div className="mt-12">
        <Accordion items={FAQ_ITEMS} />
      </div>
    </Container>
  </SectionWrapper>
);
