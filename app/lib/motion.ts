/**
 * Emil Kowalski's animation philosophy, encoded as reusable constants.
 * Rules applied:
 * - Never ease-in for UI (starts slow = feels sluggish)
 * - Custom cubic-bezier curves (built-ins are too weak)
 * - Duration < 300ms for UI elements
 * - Springs use duration+bounce (Apple's API, easier to reason about)
 * - scale(0.9x) not scale(0) — nothing in the real world appears from nothing
 */

/* ── Custom easing curves ──────────────────────────────── */
export const EASE_OUT    = [0.23, 1, 0.32, 1]    as const;  // strong — instant feedback
export const EASE_IN_OUT = [0.77, 0, 0.175, 1]   as const;  // deliberate on-screen movement
export const EASE_DRAWER = [0.32, 0.72, 0, 1]    as const;  // iOS-like sheet/drawer

/* ── Spring presets ────────────────────────────────────── */
export const spring = {
  snappy: { type: "spring" as const, duration: 0.28, bounce: 0.12 },  // nav, buttons
  gentle: { type: "spring" as const, duration: 0.45, bounce: 0.08 },  // cards, panels
  stiff:  { type: "spring" as const, duration: 0.22, bounce: 0    },  // instant feedback
} as const;

/* ── Duration table (ms → s) ───────────────────────────── */
export const dur = {
  press:   0.13,  // 130ms — button press feedback
  tooltip: 0.16,  // 160ms — small popovers
  ui:      0.22,  // 220ms — dropdowns, selects, cards
  panel:   0.32,  // 320ms — modals, drawers (max for UI)
  path:    0.55,  // 550ms — SVG path draws (decorative)
} as const;

/* ── Shared variants ───────────────────────────────────── */
export const fadeSlide = {
  initial: { opacity: 0, transform: "translateY(10px) scale(0.98)" },
  animate: { opacity: 1, transform: "translateY(0px) scale(1)" },
  exit:    { opacity: 0, transform: "translateY(-6px) scale(0.99)" },
};

export const scaleIn = {
  initial: { opacity: 0, transform: "scale(0.93)" },
  animate: { opacity: 1, transform: "scale(1)" },
  exit:    { opacity: 0, transform: "scale(0.97)" },
};

/* Stagger children: 40ms between items (30-80ms is the sweet spot) */
export const staggerContainer = {
  animate: { transition: { staggerChildren: 0.04 } },
};

export const staggerItem = {
  initial: { opacity: 0, transform: "translateY(8px)" },
  animate: { opacity: 1, transform: "translateY(0)" },
};
