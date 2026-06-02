"use client";
import { motion } from "framer-motion";
import { convocatoria } from "../data/content";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="card mb-4">
      <h3 className="font-bold text-sm uppercase tracking-wider mb-3" style={{ color: "var(--red2)" }}>{title}</h3>
      {children}
    </div>
  );
}

export default function ConvocatoriaView() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="card mb-4" style={{ border: "2px solid var(--red)", background: "rgba(192,57,43,0.06)" }}>
        <div className="flag-bar mb-3" />
        <h2 className="text-xl font-bold mb-1">{convocatoria.titulo}</h2>
        <p className="text-sm-ui mb-3" style={{ color: "var(--text2)" }}>{convocatoria.organismo}</p>
        <div className="flex flex-wrap gap-2">
          <span className="badge" style={{ background: "rgba(192,57,43,0.15)", color: "var(--red2)" }}>
            {convocatoria.tipo}
          </span>
          <span className="badge" style={{ background: "rgba(241,196,15,0.15)", color: "var(--yellow2)" }}>
            {convocatoria.plazas} Plaza
          </span>
          <span className="badge" style={{ background: "rgba(52,152,219,0.15)", color: "var(--blue2)" }}>
            {convocatoria.sistema}
          </span>
        </div>
      </div>

      <Section title="📌 Funciones del Puesto">
        <ul className="flex flex-col gap-2">
          {convocatoria.funciones.map((f, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              className="flex gap-2 text-sm-ui"
            >
              <span style={{ color: "var(--red2)", flexShrink: 0 }}>▸</span>
              <span>{f}</span>
            </motion.li>
          ))}
        </ul>
      </Section>

      <Section title="✅ Requisitos">
        <ul className="flex flex-col gap-2">
          {convocatoria.requisitos.map((r, i) => (
            <li key={i} className="flex gap-2 text-sm-ui">
              <span style={{ color: "var(--green2)", flexShrink: 0 }}>✓</span>
              <span>{r}</span>
            </li>
          ))}
        </ul>
      </Section>

      {convocatoria.fases.map((fase) => (
        <Section key={fase.nombre} title={`⚖️ ${fase.nombre} (${fase.peso})`}>
          <ul className="flex flex-col gap-2">
            {fase.pruebas.map((p, i) => (
              <li key={i} className="flex gap-2 text-sm-ui">
                <span style={{ color: "var(--blue2)", flexShrink: 0 }}>{i + 1}.</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </Section>
      ))}

      <div className="card" style={{ borderColor: "var(--yellow2)", background: "rgba(243,156,18,0.06)" }}>
        <h3 className="font-bold mb-2" style={{ color: "var(--yellow2)" }}>⚠️ Consejo Importante</h3>
        <p className="text-sm-ui leading-relaxed" style={{ color: "var(--text2)" }}>
          El examen de cultura general consta de 50 preguntas tipo test: mitad sobre España
          (en español) y mitad sobre Brasil (en portugués). Cada respuesta incorrecta resta
          0,25 puntos. Prepara ambas partes con igual dedicación.
        </p>
      </div>
    </motion.div>
  );
}
