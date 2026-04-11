'use client';

import { useEffect, useRef } from 'react';

export const CursorGlow = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia('(max-width: 1023px)').matches) return;

    const parent = el.parentElement;
    if (!parent) return;

    const handler = (e: MouseEvent) => {
      const rect = parent.getBoundingClientRect();
      el.style.setProperty('--glow-x', `${e.clientX - rect.left}px`);
      el.style.setProperty('--glow-y', `${e.clientY - rect.top}px`);
      el.style.opacity = '1';
    };

    const leave = () => {
      el.style.opacity = '0';
    };

    parent.addEventListener('mousemove', handler);
    parent.addEventListener('mouseleave', leave);
    return () => {
      parent.removeEventListener('mousemove', handler);
      parent.removeEventListener('mouseleave', leave);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-[1] opacity-0 transition-opacity duration-300"
      style={{
        background: 'radial-gradient(600px circle at var(--glow-x, 50%) var(--glow-y, 50%), rgba(163,177,138,0.06), transparent 60%)',
      }}
    />
  );
};
