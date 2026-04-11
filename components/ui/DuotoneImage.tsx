"use client";

import Image from "next/image";

interface DuotoneImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes?: string;
  priority?: boolean;
  tint: "navy" | "sage" | "terracotta" | "warm" | "cool";
  intensity: number;
  rounded?: string;
  className?: string;
  hoverEffect?: boolean;
  fill?: boolean;
}

const tintOverlays: Record<string, { base: string; accent?: string }> = {
  navy: { base: "bg-navy" },
  sage: { base: "bg-navy", accent: "bg-sage mix-blend-multiply" },
  terracotta: { base: "bg-navy", accent: "bg-terracotta mix-blend-screen" },
  warm: { base: "bg-navy", accent: "bg-terracotta mix-blend-screen" },
  cool: { base: "bg-navy", accent: "bg-sage mix-blend-multiply" },
};

export const DuotoneImage = ({
  src,
  alt,
  width,
  height,
  sizes,
  priority = false,
  tint,
  intensity,
  rounded = "rounded-xl",
  className = "",
  hoverEffect = false,
  fill = false,
}: DuotoneImageProps) => {
  const overlays = tintOverlays[tint];

  return (
    <div
      className={`group relative overflow-hidden ${rounded} ${className} ${
        hoverEffect ? "transition-[filter] duration-300 hover:brightness-105" : ""
      }`}
    >
      <Image
        src={src}
        alt={alt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        fill={fill}
        sizes={sizes}
        priority={priority}
        className="h-full w-full object-cover grayscale contrast-[1.1]"
      />
      <div
        className={`pointer-events-none absolute inset-0 ${overlays.base}`}
        style={{ opacity: intensity }}
      />
      {overlays.accent && (
        <div
          className={`pointer-events-none absolute inset-0 ${overlays.accent}`}
          style={{ opacity: intensity * 0.3 }}
        />
      )}
    </div>
  );
};
