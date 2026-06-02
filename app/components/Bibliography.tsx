"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { bibliography, bibCats, type BibItem } from "../data/bibliography";

const typeIcon: Record<BibItem["type"], string> = {
  ley: "📜", convenio: "🤝", web: "🌐", doc: "📄",
};
const typeLabel: Record<BibItem["type"], string> = {
  ley: "Legislación", convenio: "Convenio", web: "Portal web", doc: "Documento",
};

export default function Bibliography() {
  const [cat, setCat] = useState<string>("Todos");
  const allCats = ["Todos", ...bibCats];
  const filtered = cat === "Todos" ? bibliography : bibliography.filter(b => b.cat.includes(cat));

  return (
    <div>
      <h2 className="text-lg font-black mb-1 grad-text">Bibliografía</h2>
      <p className="text-xs mb-4" style={{ color:"var(--muted)" }}>
        Fuentes oficiales utilizadas para elaborar este material de estudio.
      </p>

      {/* Category filter */}
      <div className="flex gap-2 overflow-x-auto pb-2 mb-4" style={{ scrollbarWidth:"none" }}>
        {allCats.map(c => (
          <button key={c} onClick={() => setCat(c)}
            className="flex-shrink-0 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all"
            style={cat === c
              ? { background:"var(--red)", color:"#fff" }
              : { background:"var(--bg2)", color:"var(--muted)" }}>
            {c}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-3">
        {filtered.map((item, i) => (
          <motion.div key={`${item.title}-${i}`}
            initial={{ opacity:0, y:10 }} animate={{ opacity:1, y:0 }}
            transition={{ delay:i*0.04 }}
            className="glass p-4">
            <div className="flex items-start gap-2 mb-1">
              <span className="text-lg">{typeIcon[item.type]}</span>
              <div className="flex-1">
                <p className="font-bold text-sm leading-snug">{item.title}</p>
                <span className="chip mt-1" style={{ background:"var(--bg3)", color:"var(--muted)" }}>
                  {typeLabel[item.type]}
                </span>
              </div>
            </div>
            <p className="text-xs leading-relaxed mt-2" style={{ color:"var(--muted)" }}>
              {item.detail}
            </p>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-1 text-xs font-semibold"
              style={{ color:"var(--blue)" }}>
              🔗 Consultar fuente →
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
