"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Flashcards from "../components/Flashcards";
import Bibliography from "../components/Bibliography";

type View = "menu"|"flash"|"biblio";

export default function MasScreen() {
  const [view, setView] = useState<View>("menu");

  if (view === "flash")  return (
    <div className="px-4">
      <button onClick={() => setView("menu")}
        className="flex items-center gap-2 mb-4 text-sm font-semibold"
        style={{ color:"var(--muted)" }}>← Volver</button>
      <Flashcards />
    </div>
  );
  if (view === "biblio") return (
    <div className="px-4">
      <button onClick={() => setView("menu")}
        className="flex items-center gap-2 mb-4 text-sm font-semibold"
        style={{ color:"var(--muted)" }}>← Volver</button>
      <Bibliography />
    </div>
  );

  return (
    <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} className="px-4">
      <h2 className="text-lg font-black mb-1 grad-text">Más recursos</h2>
      <p className="text-xs mb-5" style={{ color:"var(--muted)" }}>
        Herramientas adicionales de estudio
      </p>

      <div className="flex flex-col gap-3">
        <motion.button whileTap={{ scale:.97 }} onClick={() => setView("flash")}
          className="glass p-5 text-left"
          style={{ borderColor:"rgba(217,119,6,0.35)" }}>
          <div className="text-3xl mb-2">🗂️</div>
          <div className="font-black text-lg">Flashcards</div>
          <div className="text-sm mt-1" style={{ color:"var(--muted)" }}>
            14 tarjetas interactivas con flip animation. Marca las que ya dominas.
          </div>
          <div className="mt-3 h-0.5 w-10 rounded" style={{ background:"var(--gold)" }}/>
        </motion.button>

        <motion.button whileTap={{ scale:.97 }} onClick={() => setView("biblio")}
          className="glass p-5 text-left"
          style={{ borderColor:"rgba(37,99,235,0.35)" }}>
          <div className="text-3xl mb-2">📖</div>
          <div className="font-black text-lg">Bibliografía</div>
          <div className="text-sm mt-1" style={{ color:"var(--muted)" }}>
            16 fuentes oficiales: leyes, convenios internacionales y portales web.
          </div>
          <div className="mt-3 h-0.5 w-10 rounded" style={{ background:"var(--blue)" }}/>
        </motion.button>

        {/* Tip card */}
        <div className="callout mt-2">
          <p className="font-bold mb-1" style={{ color:"var(--gold)" }}>💡 Consejo de estudio</p>
          <p className="text-sm leading-relaxed">
            Dedica <strong>15 minutos al día</strong> a las flashcards antes de dormir.
            La repetición espaciada (spaced repetition) mejora la retención a largo plazo en hasta un 80%.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
