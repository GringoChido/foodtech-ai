# FoodTech AI — Photography Shot List

This document was auto-generated from the site's image configuration. Use it as a brief when commissioning or sourcing photography.

---

## Shot 1: hero-bg-left
- **Section:** Hero (background accent, left side)
- **Aspect Ratio:** 3:4 (portrait)
- **Minimum Resolution:** 900 × 1200px
- **Mood:** Warm
- **Direction:** Atmospheric shot of a fast-casual kitchen during service. Warm lighting. Motion blur on hands working the line. Shot from behind the pass. Should feel energetic but slightly chaotic — this is the world we serve.

---

## Shot 2: hero-bg-right
- **Section:** Hero (background accent, right side)
- **Aspect Ratio:** 3:4 (portrait)
- **Minimum Resolution:** 900 × 1200px
- **Mood:** Cool
- **Direction:** A restaurant manager or owner standing in a dimly lit kitchen or back office, looking at their phone (WhatsApp). End-of-shift energy. Slightly tired but focused. Real, not posed. This is the 'midnight moment' from the founder story.

---

## Shot 3: problem-hero
- **Section:** Problem (full-width cinematic strip)
- **Aspect Ratio:** 21:9 (ultrawide)
- **Minimum Resolution:** 2100 × 900px
- **Mood:** Warm
- **Direction:** Wide cinematic shot: a cluttered back-office desk. Multiple browser tabs open, printed invoices, a half-eaten meal, sticky notes everywhere. This IS the management tax. Overhead angle works great here.

---

## Shot 4: solutions-xtock-context
- **Section:** Solutions — Xtock card (context image above WhatsApp mockup)
- **Aspect Ratio:** 4:3
- **Minimum Resolution:** 1600 × 1200px
- **Mood:** Cool
- **Direction:** Close-up of hands holding a phone showing a WhatsApp conversation (the Xtock order approval). Background is blurred walk-in cooler or dry storage shelves. Morning light. Clean, calm — the OPPOSITE of the problem section.

---

## Shot 5: solutions-vostre-context
- **Section:** Solutions — Vostre card (context image above WhatsApp mockup)
- **Aspect Ratio:** 4:3
- **Minimum Resolution:** 1600 × 1200px
- **Mood:** Cool
- **Direction:** Fast-casual counter during rush. Customer at the register, phone ringing in the background (implied). The energy of a busy front-of-house. This is what Vostre handles so staff can focus on in-person guests.

---

## Shot 6: how-it-works-connect
- **Section:** How It Works — Step 1 thumbnail
- **Aspect Ratio:** 1:1 (square)
- **Minimum Resolution:** 1200 × 1200px
- **Mood:** Cool
- **Direction:** Clean shot of a tablet or laptop being set up at a restaurant counter. POS system visible in background. Hands of a FoodTech AI team member (or the operator) during setup. Bright, professional, reassuring.

---

## Shot 7: how-it-works-verify
- **Section:** How It Works — Step 3 thumbnail
- **Aspect Ratio:** 1:1 (square)
- **Minimum Resolution:** 1200 × 1200px
- **Mood:** Warm
- **Direction:** Restaurant manager mid-shift, phone in hand, tapping approval on WhatsApp. Could be standing near the line or in a brief quiet moment. The key emotion: confidence, control. They are in charge.

---

## Shot 8: founder-portrait
- **Section:** Founder Story (right column portrait)
- **Aspect Ratio:** 4:5 (portrait)
- **Minimum Resolution:** 1000 × 1250px
- **Mood:** Warm
- **Direction:** Professional but NOT corporate headshot of Felipe Gómez. Ideally in a restaurant environment — leaning against a counter, standing in a kitchen doorway, or seated in a booth. Natural light. Warm tones. He should look like an operator, not a CEO. Rolled-up sleeves energy.

---

## Shot 9: founder-kitchen
- **Section:** Founder Story (full section background, very subtle)
- **Aspect Ratio:** 16:9 (wide)
- **Minimum Resolution:** 1920 × 1080px
- **Mood:** Warm
- **Direction:** The 11 PM kitchen. Partially cleaned. Fluorescent lights. A mop bucket in the corner. Maybe one last ticket on the printer. This is the 'greasy kitchen at 11 PM' moment from the founder story. Moody, real, empathetic. Not glamorous — honest.

---

## Shot 10: cta-team
- **Section:** Final CTA (bottom-half section background)
- **Aspect Ratio:** 16:9 (wide)
- **Minimum Resolution:** 1920 × 1080px
- **Mood:** Cool
- **Direction:** A restaurant team — 3-4 people — at the end of a good shift. Smiles, fist bumps, camaraderie. This is the AFTER state. The calm that comes when operational drag is gone and the team can just... be a team. Warm, aspirational, real.

---

## Shot 11: footer-ambiance
- **Section:** Footer (full footer background, barely visible)
- **Aspect Ratio:** 21:9 (ultrawide)
- **Minimum Resolution:** 2100 × 900px
- **Mood:** Neutral
- **Direction:** Wide exterior shot of a fast-casual restaurant at night. Warm interior light glowing through windows. Parking lot. Maybe a delivery driver loading up. The quiet end of a long day. This is the world FoodTech AI serves.

---

## How to Add Photos

1. Optimize images as WebP or AVIF (next/image handles conversion automatically)
2. Name files by slot ID: `hero-bg-left.webp`, `founder-portrait.webp`, etc.
3. Drop files in `public/images/lifestyle/`
4. Update `lib/image-config.ts` — add the `src` path to the matching slot:
   ```ts
   src: "/images/lifestyle/hero-bg-left.webp"
   ```
5. That's it. The duotone treatment and responsive behavior are automatic.
