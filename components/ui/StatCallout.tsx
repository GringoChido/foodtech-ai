'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface StatCalloutProps {
  value: number;
  prefix?: string;
  suffix?: string;
  label?: string;
}

export const StatCallout = ({ value, prefix = '', suffix = '', label }: StatCalloutProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 1500;
    const startTime = Date.now();

    const tick = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setDisplayValue(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [isInView, value]);

  return (
    <div ref={ref} className="my-8 text-center">
      <span className="font-heading text-5xl md:text-7xl font-extrabold text-terracotta tabular-nums">
        {prefix}{displayValue.toLocaleString()}{suffix}
      </span>
      {label && (
        <p className="text-cream/60 text-base md:text-lg mt-2">{label}</p>
      )}
      <div className="mx-auto mt-3 w-12 h-[3px] bg-terracotta/60 rounded-full" />
    </div>
  );
};
