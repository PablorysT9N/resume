"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { spring } from "../lib/motion";
import MindMap from "../components/MindMap";
import { allMindMaps } from "../data/mindmaps";

export default function MapasScreen() {
  const [active, setActive] = useState<string|null>(null);
  const map = allMindMaps.find(m => m.id === active);

  return (
    <div className="px-4">
      <h2 className="text-lg font-black mb-1 grad-text">Mapas Mentales</h2>
      <p className="text-xs mb-4" style={{ color:"var(--muted)" }}>
        Visualiza y explora los conceptos clave de forma interactiva
      </p>

      {/* Map selector */}
      <div className="flex gap-2 mb-4">
        {allMindMaps.map(m => (
          <button key={m.id}
            onClick={() => setActive(prev => prev === m.id ? null : m.id)}
            className="flex-1 py-3 rounded-xl font-bold text-sm"
            style={{
              transition:"background 0.18s cubic-bezier(0.23,1,0.32,1), color 0.18s cubic-bezier(0.23,1,0.32,1)",
              ...(active === m.id
                ? { background:"var(--red)", color:"#fff" }
                : { background:"var(--bg2)", color:"var(--muted)" }),
            }}>
            {m.icon}<br/>
            <span className="text-xs font-normal">{m.title.replace(/^.\s/,"")}</span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {map ? (
          <motion.div key={map.id}
            initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0 }}
            transition={{ duration:.25 }}>
            <MindMap map={map}/>
          </motion.div>
        ) : (
          <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }}
            className="glass p-6 text-center">
            <div className="text-4xl mb-3">🧠</div>
            <p className="font-semibold mb-2">Selecciona un mapa mental</p>
            <p className="text-sm" style={{ color:"var(--muted)" }}>
              Toca los botones de arriba para cargar un mapa. Luego toca los nodos para ver detalles.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Legend */}
      <div className="glass p-4 mt-4">
        <h3 className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color:"var(--muted)" }}>Leyenda</h3>
        <div className="flex flex-col gap-2">
          {[
            { icon:"⚪", label:"Nodo raíz — tema central" },
            { icon:"🔵", label:"Nodo rama — categoría principal" },
            { icon:"⬜", label:"Nodo hoja — concepto específico" },
          ].map(l => (
            <div key={l.label} className="flex items-center gap-2 text-xs" style={{ color:"var(--muted)" }}>
              <span>{l.icon}</span><span>{l.label}</span>
            </div>
          ))}
        </div>
        <p className="text-xs mt-3" style={{ color:"var(--muted)" }}>
          Desliza el mapa para explorar · Toca un nodo para ver su explicación
        </p>
      </div>
    </div>
  );
}
