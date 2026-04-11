'use client';

import { motion } from 'framer-motion';
import { type ReactNode } from 'react';

interface AnimateInProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
  className?: string;
}

export const AnimateIn = ({
  children,
  delay = 0,
  direction = 'up',
  duration = 0.6,
  className,
}: AnimateInProps) => {
  const directionOffset = {
    up: { y: 30 },
    down: { y: -30 },
    left: { x: -60 },
    right: { x: 60 },
    none: {},
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directionOffset[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
