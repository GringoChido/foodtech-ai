import type { LucideIcon } from "lucide-react";
import {
  Flame,
  Smartphone,
  LayoutDashboard,
  PackageCheck,
  Phone,
  Plug,
  ShieldCheck,
  User,
  Clock,
  Users,
  Building2,
} from "lucide-react";

export interface ImageSlot {
  id: string;
  section: string;
  description: string;
  alt: { en: string; es: string };
  aspectRatio: "16:9" | "4:3" | "3:2" | "1:1" | "4:5" | "3:4" | "21:9";
  mood: "warm" | "cool" | "neutral";
  icon: LucideIcon;
  suggestedPhoto: string;
  src?: string;
}

export const imageSlots: ImageSlot[] = [
  // === HERO SECTION ===
  {
    id: "hero-bg-left",
    section: "hero",
    description: "Hero background accent — left side atmospheric image",
    alt: {
      en: "Restaurant kitchen interior during evening service",
      es: "Interior de cocina de restaurante durante el servicio nocturno",
    },
    aspectRatio: "3:4",
    mood: "warm",
    icon: Flame,
    suggestedPhoto:
      "Atmospheric shot of a fast-casual kitchen during service. Warm lighting. Motion blur on hands working the line. Shot from behind the pass. Should feel energetic but slightly chaotic — this is the world we serve.",
  },
  {
    id: "hero-bg-right",
    section: "hero",
    description: "Hero background accent — right side atmospheric image",
    alt: {
      en: "Restaurant manager checking phone during night shift",
      es: "Gerente de restaurante revisando su teléfono durante el turno nocturno",
    },
    aspectRatio: "3:4",
    mood: "cool",
    icon: Smartphone,
    suggestedPhoto:
      "A restaurant manager or owner standing in a dimly lit kitchen or back office, looking at their phone (WhatsApp). End-of-shift energy. Slightly tired but focused. Real, not posed. This is the 'midnight moment' from the founder story.",
  },

  // === PROBLEM SECTION ===
  {
    id: "problem-hero",
    section: "problem",
    description: "Problem section background strip — the daily grind",
    alt: {
      en: "Cluttered restaurant manager desk with multiple screens and paperwork",
      es: "Escritorio desordenado de gerente de restaurante con múltiples pantallas y papeles",
    },
    aspectRatio: "21:9",
    mood: "warm",
    icon: LayoutDashboard,
    suggestedPhoto:
      "Wide cinematic shot: a cluttered back-office desk. Multiple browser tabs open, printed invoices, a half-eaten meal, sticky notes everywhere. This IS the management tax. Overhead angle works great here.",
  },

  // === SOLUTIONS SECTION ===
  {
    id: "solutions-xtock-context",
    section: "solutions",
    description: "Xtock contextual image — inventory/ordering in action",
    alt: {
      en: "Restaurant operator approving an inventory order on WhatsApp",
      es: "Operador de restaurante aprobando un pedido de inventario en WhatsApp",
    },
    aspectRatio: "4:3",
    mood: "cool",
    icon: PackageCheck,
    suggestedPhoto:
      "Close-up of hands holding a phone showing a WhatsApp conversation (the Xtock order approval). Background is blurred walk-in cooler or dry storage shelves. Morning light. Clean, calm — the OPPOSITE of the problem section.",
  },
  {
    id: "solutions-vostre-context",
    section: "solutions",
    description: "Vostre contextual image — phone ordering in action",
    alt: {
      en: "Fast-casual restaurant counter during peak order rush",
      es: "Mostrador de restaurante fast-casual durante la hora pico de pedidos",
    },
    aspectRatio: "4:3",
    mood: "cool",
    icon: Phone,
    suggestedPhoto:
      "Fast-casual counter during rush. Customer at the register, phone ringing in the background (implied). The energy of a busy front-of-house. This is what Vostre handles so staff can focus on in-person guests.",
  },

  // === HOW IT WORKS SECTION ===
  {
    id: "how-it-works-connect",
    section: "howItWorks",
    description: "Step 1 — Connect: onboarding moment",
    alt: {
      en: "Tablet screen showing connection to restaurant POS system",
      es: "Pantalla de tablet mostrando conexión con sistema POS de restaurante",
    },
    aspectRatio: "1:1",
    mood: "cool",
    icon: Plug,
    suggestedPhoto:
      "Clean shot of a tablet or laptop being set up at a restaurant counter. POS system visible in background. Hands of a FoodTech AI team member (or the operator) during setup. Bright, professional, reassuring.",
  },
  {
    id: "how-it-works-verify",
    section: "howItWorks",
    description: "Step 3 — Verify: WhatsApp approval in real context",
    alt: {
      en: "Restaurant manager approving AI decision via WhatsApp during shift",
      es: "Gerente de restaurante aprobando decisión de IA por WhatsApp durante el turno",
    },
    aspectRatio: "1:1",
    mood: "warm",
    icon: ShieldCheck,
    suggestedPhoto:
      "Restaurant manager mid-shift, phone in hand, tapping approval on WhatsApp. Could be standing near the line or in a brief quiet moment. The key emotion: confidence, control. They are in charge.",
  },

  // === FOUNDER STORY SECTION ===
  {
    id: "founder-portrait",
    section: "founder",
    description: "Felipe Gómez — founder portrait",
    alt: {
      en: "Felipe Gómez, founder of FoodTech AI, in a restaurant setting",
      es: "Felipe Gómez, fundador de FoodTech AI, en un entorno de restaurante",
    },
    aspectRatio: "4:5",
    mood: "warm",
    icon: User,
    suggestedPhoto:
      "Professional but NOT corporate headshot of Felipe Gómez. Ideally in a restaurant environment — leaning against a counter, standing in a kitchen doorway, or seated in a booth. Natural light. Warm tones. He should look like an operator, not a CEO. Rolled-up sleeves energy.",
  },
  {
    id: "founder-kitchen",
    section: "founder",
    description: "Founder story supporting image — the reality",
    alt: {
      en: "Restaurant kitchen at the end of night shift, partially cleaned",
      es: "Cocina de restaurante al final del turno nocturno, parcialmente limpia",
    },
    aspectRatio: "16:9",
    mood: "warm",
    icon: Clock,
    suggestedPhoto:
      "The 11 PM kitchen. Partially cleaned. Fluorescent lights. A mop bucket in the corner. Maybe one last ticket on the printer. This is the 'greasy kitchen at 11 PM' moment from the founder story. Moody, real, empathetic. Not glamorous — honest.",
  },

  // === FINAL CTA SECTION ===
  {
    id: "cta-team",
    section: "finalCta",
    description: "CTA section — the team/future state",
    alt: {
      en: "Smiling restaurant team during a successful service",
      es: "Equipo de restaurante sonriente durante un servicio exitoso",
    },
    aspectRatio: "16:9",
    mood: "cool",
    icon: Users,
    suggestedPhoto:
      "A restaurant team — 3-4 people — at the end of a good shift. Smiles, fist bumps, camaraderie. This is the AFTER state. The calm that comes when operational drag is gone and the team can just... be a team. Warm, aspirational, real.",
  },

  // === FOOTER ===
  {
    id: "footer-ambiance",
    section: "footer",
    description: "Footer atmospheric background",
    alt: {
      en: "Night exterior view of a lit fast-casual restaurant",
      es: "Vista nocturna exterior de un restaurante fast-casual iluminado",
    },
    aspectRatio: "21:9",
    mood: "neutral",
    icon: Building2,
    suggestedPhoto:
      "Wide exterior shot of a fast-casual restaurant at night. Warm interior light glowing through windows. Parking lot. Maybe a delivery driver loading up. The quiet end of a long day. This is the world FoodTech AI serves.",
  },
];

export const getSlot = (id: string): ImageSlot | undefined =>
  imageSlots.find((s) => s.id === id);

export const getSlotsBySection = (section: string): ImageSlot[] =>
  imageSlots.filter((s) => s.section === section);
