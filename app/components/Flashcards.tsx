"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export type Flashcard = { front: string; back: string };

const cards: Flashcard[] = [
  { front:"¿Qué es el Registro Civil Consular?", back:"Inscribe los hechos del estado civil (nacimientos, matrimonios, defunciones) de los españoles en la circunscripción consular." },
  { front:"Convención de Viena sobre Relaciones Consulares", back:"Tratado internacional de 1963 que codifica el derecho consular: funciones, privilegios e inmunidades consulares." },
  { front:"¿Qué es la Tarjeta de Identidad Consular?", back:"Documento que expiden los consulados a los españoles residentes en el exterior, inscritos en el Registro de Matrícula (RELE)." },
  { front:"Plan Real — Brasil", back:"Julio de 1994. Creó el Real (R$) y acabó con la hiperinflación que azotaba Brasil. Hito económico fundamental." },
  { front:"¿Quién preside el Consejo de Ministros en España?", back:"El Presidente del Gobierno, jefe del ejecutivo, dirige la acción del Gobierno (art. 98 CE)." },
  { front:"Estado de São Paulo", back:"Estado más rico de Brasil (~35% del PIB nacional). Capital: São Paulo. +46M hab. Puerto de Santos: mayor de AL." },
  { front:"¿Qué es la Apostilla de La Haya?", back:"Certificación que autentica documentos públicos para ser reconocidos en los ~120 países del Convenio de La Haya de 1961." },
  { front:"Cortes Generales de España", back:"Parlamento bicameral: Congreso de los Diputados (350) + Senado (266). Representan al pueblo español (art. 66 CE)." },
  { front:"IBGE — Brasil", back:"Instituto Brasileiro de Geografia e Estatística. Responsable del censo, estadísticas e información geográfica oficial de Brasil." },
  { front:"¿Qué son los Acuerdos de Sede?", back:"Acuerdos bilaterales entre España y el Estado receptor que regulan el funcionamiento de una representación diplomática o consular." },
  { front:"Reforma Tributária Brasil (EC 132/2023)", back:"Mayor reforma fiscal en 50 años. Crea el IBS (Imposto sobre Bens e Serviços) unificando ICMS e ISS. En vigor gradual 2026-2033." },
  { front:"Art. 14 Constitución Española", back:"Principio de igualdad: 'Los españoles son iguales ante la ley, sin discriminación por razón de nacimiento, raza, sexo, religión u opinión'." },
  { front:"¿Qué es el exequátur?", back:"Autorización del Estado receptor para que el cónsul ejerza sus funciones en su territorio (Convención de Viena 1963)." },
  { front:"División política de Brasil", back:"República Federativa: 26 estados + DF Brasília. 5.570 municipios. Sistema presidencialista. Sufragio obligatorio 18-70 años." },
];

export default function Flashcards() {
  const [idx, setIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [dir, setDir] = useState(1);
  const [known, setKnown] = useState<Set<number>>(new Set());

  const card = cards[idx];
  const progress = Math.round(((idx + 1) / cards.length) * 100);

  function nav(d: 1|-1) {
    setDir(d);
    setFlipped(false);
    setTimeout(() => setIdx(i => (i + d + cards.length) % cards.length), 50);
  }

  function markKnown() {
    setKnown(prev => new Set([...prev, idx]));
    nav(1);
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-bold" style={{ color:"var(--gold)" }}>🗂️ {idx+1}/{cards.length}</span>
        <span className="chip" style={{ background:"rgba(217,119,6,0.18)", color:"var(--gold)" }}>
          ✓ {known.size} dominadas
        </span>
      </div>

      <div className="prog-track mb-4">
        <div className="prog-fill" style={{ width:`${progress}%`, background:"var(--gold)" }}/>
      </div>

      <p className="text-xs mb-3 text-center" style={{ color:"var(--muted)" }}>
        Toca la tarjeta para ver la respuesta
      </p>

      <AnimatePresence mode="wait">
        <motion.div key={idx}
          initial={{ opacity:0, x:dir*30 }}
          animate={{ opacity:1, x:0 }}
          exit={{ opacity:0, x:dir*-30 }}
          transition={{ duration:.22 }}>
          <div
            className="flip-card mb-4"
            style={{ height:200 }}
            onClick={() => setFlipped(f => !f)}
          >
            <div className={`flip-inner ${flipped ? "flipped" : ""}`} style={{ height:"100%" }}>
              <div className="flip-f"
                style={{ background:"var(--bg2)", border:"2px solid var(--gold)", borderRadius:20 }}>
                <p className="font-bold text-center text-base leading-snug">{card.front}</p>
              </div>
              <div className="flip-b"
                style={{ background:"rgba(217,119,6,0.08)", border:"2px solid var(--gold)", borderRadius:20 }}>
                <p className="text-center text-sm leading-relaxed">{card.back}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="grid grid-cols-3 gap-2 mb-2">
        <button onClick={() => nav(-1)}
          className="py-3 rounded-xl font-semibold text-sm"
          style={{ background:"var(--bg2)", color:"var(--muted)" }}>
          ← Ant.
        </button>
        <button onClick={() => setFlipped(f => !f)}
          className="py-3 rounded-xl font-semibold text-sm"
          style={{ background:"rgba(217,119,6,0.15)", color:"var(--gold)" }}>
          {flipped ? "Ocultar" : "Ver"}
        </button>
        <button onClick={() => nav(1)}
          className="py-3 rounded-xl font-semibold text-sm"
          style={{ background:"var(--bg2)", color:"var(--muted)" }}>
          Sig. →
        </button>
      </div>
      {flipped && (
        <motion.button initial={{ opacity:0, y:6 }} animate={{ opacity:1, y:0 }}
          onClick={markKnown}
          className="w-full py-3 rounded-xl font-bold text-sm"
          style={{ background:"var(--green-soft)", color:"var(--green)" }}>
          ✓ La sé — siguiente
        </motion.button>
      )}
    </div>
  );
}
