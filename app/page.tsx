"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ConvocatoriaView from "./components/ConvocatoriaView";
import EspanaView from "./components/EspanaView";
import BrasilView from "./components/BrasilView";
import ConsularView from "./components/ConsularView";
import OfimaticaView from "./components/OfimaticaView";
import Flashcards from "./components/Flashcards";
import { temas } from "./data/content";

const views: Record<string, React.ReactNode> = {
  convocatoria: <ConvocatoriaView />,
  espana: <EspanaView />,
  brasil: <BrasilView />,
  consular: <ConsularView />,
  ofimatica: <OfimaticaView />,
  flashcards: <Flashcards />,
};

export default function Home() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="min-h-screen" style={{ background: "var(--bg)" }}>
      <AnimatePresence mode="wait">
        {active === null ? (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Header */}
            <div
              className="sticky top-0 z-10 px-4 py-4"
              style={{ background: "var(--bg)", borderBottom: "1px solid var(--border)" }}
            >
              <div className="flag-bar mb-3" />
              <h1 className="text-lg font-bold leading-tight">
                Auxiliar Administrativo
              </h1>
              <p className="text-xs mt-0.5" style={{ color: "var(--text2)" }}>
                Consulado General de España · São Paulo
              </p>
            </div>

            {/* Stats row */}
            <div className="px-4 py-3 flex gap-3 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
              {[
                { label: "Temas", value: "6", color: "var(--red)" },
                { label: "Tests", value: "44", color: "var(--blue2)" },
                { label: "Flashcards", value: "14", color: "var(--yellow2)" },
                { label: "Plazas", value: "1", color: "var(--green2)" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="flex-shrink-0 card text-center"
                  style={{ minWidth: 70, padding: "0.6rem 0.75rem" }}
                >
                  <div className="text-xl font-bold" style={{ color: s.color }}>{s.value}</div>
                  <div className="text-xs" style={{ color: "var(--text2)" }}>{s.label}</div>
                </div>
              ))}
            </div>

            {/* Info banner */}
            <div className="px-4 mb-1">
              <div className="card" style={{ background: "rgba(192,57,43,0.06)", borderColor: "var(--red)" }}>
                <p className="text-xs leading-relaxed" style={{ color: "var(--text2)" }}>
                  <span className="font-bold" style={{ color: "var(--red2)" }}>Sistema: </span>
                  Concurso-Oposición · 50 preguntas tipo test · Prueba práctica Word/Excel · Entrevista personal
                </p>
              </div>
            </div>

            {/* Section grid */}
            <div className="px-4 py-3 grid grid-cols-2 gap-3">
              {temas.map((tema, i) => (
                <motion.button
                  key={tema.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActive(tema.id)}
                  className="card card-hover text-left"
                  style={{ borderColor: `${tema.color}44` }}
                >
                  <div className="text-2xl mb-2">{tema.icon}</div>
                  <div className="font-bold text-sm mb-0.5">{tema.title}</div>
                  <div className="text-xs leading-relaxed" style={{ color: "var(--text2)" }}>
                    {tema.desc}
                  </div>
                  <div
                    className="mt-2 h-0.5 w-8 rounded"
                    style={{ background: tema.color }}
                  />
                </motion.button>
              ))}
            </div>

            {/* Footer note */}
            <div className="px-4 pb-8">
              <p className="text-xs text-center" style={{ color: "var(--text2)" }}>
                Optimizado para Samsung S22 Ultra · Toca una sección para estudiar
              </p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.22 }}
          >
            {/* Sub-header */}
            <div
              className="sticky top-0 z-10 px-4 py-3 flex items-center gap-3"
              style={{ background: "var(--bg)", borderBottom: "1px solid var(--border)" }}
            >
              <button
                onClick={() => setActive(null)}
                className="flex items-center justify-center rounded-xl font-bold"
                style={{
                  width: 40, height: 40,
                  background: "var(--bg2)",
                  color: "var(--text)",
                  flexShrink: 0,
                }}
              >
                ←
              </button>
              <div>
                <div className="font-bold text-sm">
                  {temas.find((t) => t.id === active)?.icon}{" "}
                  {temas.find((t) => t.id === active)?.title}
                </div>
                <div className="text-xs" style={{ color: "var(--text2)" }}>
                  Auxiliar Administrativo · Consulado SP
                </div>
              </div>
            </div>

            <div className="px-4 py-4">
              {views[active]}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
