"use client";

import type { LucideIcon } from "lucide-react";

interface ImagePlaceholderProps {
  id: string;
  alt: string;
  aspectRatio: "16:9" | "4:3" | "3:2" | "1:1" | "4:5" | "3:4" | "21:9";
  mood: "warm" | "cool" | "neutral";
  icon?: LucideIcon;
  label?: string;
  className?: string;
  src?: string;
}

const aspectClasses: Record<string, string> = {
  "16:9": "aspect-video",
  "4:3": "aspect-[4/3]",
  "3:2": "aspect-[3/2]",
  "1:1": "aspect-square",
  "4:5": "aspect-[4/5]",
  "3:4": "aspect-[3/4]",
  "21:9": "aspect-[21/9]",
};

const moodGradients: Record<string, string> = {
  warm: "from-navy via-charcoal to-navy",
  cool: "from-navy via-charcoal to-navy",
  neutral: "from-charcoal via-navy to-charcoal",
};

const moodAccents: Record<string, string> = {
  warm: "bg-terracotta/20",
  cool: "bg-sage/15",
  neutral: "bg-transparent",
};

export const ImagePlaceholder = ({
  id,
  alt,
  aspectRatio,
  mood,
  icon: Icon,
  label,
  className = "",
  src,
}: ImagePlaceholderProps) => {
  if (src) {
    return (
      <div
        data-image-slot={id}
        className={`relative overflow-hidden rounded-xl ${aspectClasses[aspectRatio]} ${className}`}
        role="img"
        aria-label={alt}
      >
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 h-full w-full object-cover grayscale contrast-[1.1]"
        />
        <div className="absolute inset-0 bg-navy/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-sage/10 mix-blend-screen" />
      </div>
    );
  }

  return (
    <div
      data-image-slot={id}
      className={`group relative overflow-hidden rounded-xl ${aspectClasses[aspectRatio]} ${className}`}
      role="img"
      aria-label={alt}
    >
      {/* Animated gradient background */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${moodGradients[mood]} animate-[gradientDrift_15s_ease-in-out_infinite_alternate]`}
      />

      {/* Mood accent glow */}
      <div
        className={`absolute -inset-[50%] ${moodAccents[mood]} rounded-full blur-3xl animate-[glowDrift_12s_ease-in-out_infinite_alternate]`}
      />

      {/* Grain overlay */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
          backgroundSize: "128px 128px",
        }}
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
        {Icon && <Icon className="h-12 w-12 text-white/20" strokeWidth={1.5} />}
        {label && (
          <span className="text-xs font-medium uppercase tracking-wider text-white/30">
            {label}
          </span>
        )}
      </div>

      {/* Hover brightness lift */}
      <div className="absolute inset-0 bg-white/0 transition-colors duration-500 group-hover:bg-white/[0.03]" />
    </div>
  );
};
