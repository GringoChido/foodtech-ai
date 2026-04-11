'use client';

import { GrainOverlay } from '@/components/ui/GrainOverlay';
import { CursorGlow } from '@/components/ui/CursorGlow';

interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  bg?: 'navy' | 'charcoal' | 'cream' | 'sage';
  grain?: boolean;
  cursorGlow?: boolean;
}

const bgClasses: Record<string, string> = {
  navy: 'bg-navy text-cream',
  charcoal: 'bg-charcoal text-cream',
  cream: 'bg-cream text-navy',
  sage: 'bg-sage text-navy',
};

export const SectionWrapper = ({
  children,
  id,
  className = '',
  bg = 'navy',
  grain = false,
  cursorGlow = false,
}: SectionWrapperProps) => (
  <section
    id={id}
    className={`relative overflow-hidden py-20 md:py-28 lg:py-32 ${bgClasses[bg]} ${className}`}
  >
    {grain && <GrainOverlay />}
    {cursorGlow && <CursorGlow />}
    <div className="relative z-[2]">
      {children}
    </div>
  </section>
);
