"use client";
import { motion } from "framer-motion";
import { spring } from "../lib/motion";

export type Tab = "home"|"estudiar"|"mapas"|"tests"|"mas";

const tabs: { id: Tab; icon: string; label: string }[] = [
  { id:"home",     icon:"🏠", label:"Inicio" },
  { id:"estudiar", icon:"📚", label:"Estudiar" },
  { id:"mapas",    icon:"🧠", label:"Mapas" },
  { id:"tests",    icon:"✏️", label:"Tests" },
  { id:"mas",      icon:"⋯",  label:"Más" },
];

export default function BottomNav({ active, onChange }: { active: Tab; onChange: (t: Tab) => void }) {
  return (
    <nav className="bottom-nav">
      <div className="flex">
        {tabs.map((t) => {
          const isActive = t.id === active;
          return (
            <button
              key={t.id}
              onClick={() => onChange(t.id)}
              className="flex-1 flex flex-col items-center py-2.5 gap-0.5 relative"
              style={{ WebkitTapHighlightColor: "transparent" }}
            >
              {isActive && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-0.5 rounded-full"
                  style={{ background: "var(--red)" }}
                  transition={spring.snappy}
                />
              )}
              <span className="text-xl leading-none">{t.icon}</span>
              <span
                className="text-[10px] font-semibold tracking-wide"
                style={{ color: isActive ? "var(--red)" : "var(--muted)" }}
              >
                {t.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
