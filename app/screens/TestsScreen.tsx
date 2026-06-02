"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import QuizMulti from "../components/QuizMulti";
import QuizTF    from "../components/QuizTF";
import QuizMatch from "../components/QuizMatch";
import {
  mcEspana, mcBrasil, mcConsular, mcOfimatica,
  tfEspana, tfBrasil, tfConsular,
  matchEspana, matchBrasil, matchConsular, matchOfimatica,
} from "../data/quizAll";

type QuizType = "mc"|"tf"|"match";
type TopicKey = "espana"|"brasil"|"consular"|"ofimatica";

const types: { id: QuizType; icon: string; label: string; desc: string }[] = [
  { id:"mc",    icon:"🔵", label:"Opción Múltiple", desc:"4 opciones por pregunta" },
  { id:"tf",    icon:"✅", label:"Verdadero / Falso", desc:"Decisión rápida + racha" },
  { id:"match", icon:"🎯", label:"Emparejar",         desc:"Une concepto con definición" },
];

const topicsList: { id: TopicKey; icon: string; label: string; color: string }[] = [
  { id:"espana",   icon:"🇪🇸", label:"España",          color:"var(--red)" },
  { id:"brasil",   icon:"🇧🇷", label:"Brasil",           color:"var(--green)" },
  { id:"consular", icon:"🏛️", label:"Función Consular", color:"var(--blue)" },
  { id:"ofimatica",icon:"💻", label:"Ofimática",        color:"var(--purple)" },
];

const mcData: Record<TopicKey, typeof mcEspana> = {
  espana: mcEspana, brasil: mcBrasil, consular: mcConsular, ofimatica: mcOfimatica,
};
const tfData: Record<TopicKey, typeof tfEspana> = {
  espana: tfEspana, brasil: tfBrasil, consular: tfConsular,
  ofimatica: tfEspana, // fallback to España TF (no ofimatica TF)
};
const matchData: Record<TopicKey, typeof matchEspana> = {
  espana: matchEspana, brasil: matchBrasil, consular: matchConsular, ofimatica: matchOfimatica,
};
const colorMap: Record<TopicKey, string> = {
  espana:"var(--red)", brasil:"var(--green)", consular:"var(--blue)", ofimatica:"var(--purple)",
};
const iconMap: Record<TopicKey, string> = {
  espana:"🇪🇸", brasil:"🇧🇷", consular:"🏛️", ofimatica:"💻",
};

export default function TestsScreen() {
  const [qType,  setQType]  = useState<QuizType|null>(null);
  const [topic,  setTopic]  = useState<TopicKey|null>(null);
  const [key,    setKey]    = useState(0); // force remount on restart

  function start(t: QuizType, tp: TopicKey) {
    setQType(t); setTopic(tp); setKey(k => k + 1);
  }
  function back() { setQType(null); setTopic(null); }

  // Render active quiz
  if (qType && topic) {
    const color = colorMap[topic];
    const icon  = iconMap[topic];
    return (
      <motion.div initial={{ opacity:0, x:20 }} animate={{ opacity:1, x:0 }} className="px-4">
        <button onClick={back}
          className="flex items-center gap-2 mb-4 text-sm font-semibold"
          style={{ color:"var(--muted)" }}>
          ← Volver
        </button>
        {qType === "mc"    && <QuizMulti key={key} qs={mcData[topic]}    color={color} icon={icon}/>}
        {qType === "tf"    && <QuizTF    key={key} qs={tfData[topic]}    color={color}/>}
        {qType === "match" && <QuizMatch key={key} pairs={matchData[topic]} color={color}/>}
      </motion.div>
    );
  }

  return (
    <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} className="px-4">
      <h2 className="text-lg font-black mb-1 grad-text">Tests</h2>
      <p className="text-xs mb-5" style={{ color:"var(--muted)" }}>
        Elige el tipo de ejercicio y el tema para practicar
      </p>

      {/* Type cards */}
      <div className="grid grid-cols-3 gap-2 mb-5">
        {types.map(t => (
          <motion.div key={t.id} whileTap={{ scale:.95 }}
            className="glass p-3 text-center cursor-pointer"
            style={{ borderColor: qType === t.id ? "var(--red)" : "transparent" }}>
            <div className="text-2xl mb-1">{t.icon}</div>
            <div className="font-bold text-xs">{t.label}</div>
            <div className="text-[10px] mt-0.5" style={{ color:"var(--muted)" }}>{t.desc}</div>
          </motion.div>
        ))}
      </div>

      {/* Quick-start grid: type × topic */}
      <div className="flex flex-col gap-3">
        {types.map(tp => (
          <div key={tp.id}>
            <div className="text-xs font-bold uppercase tracking-widest mb-2"
              style={{ color:"var(--muted)" }}>
              {tp.icon} {tp.label}
            </div>
            <div className="grid grid-cols-2 gap-2">
              {topicsList.map(tpc => (
                <motion.button key={`${tp.id}-${tpc.id}`}
                  whileTap={{ scale:.95 }}
                  onClick={() => start(tp.id, tpc.id)}
                  className="glass p-3 text-left"
                  style={{ borderColor:`${tpc.color}33` }}>
                  <span className="text-lg mr-1">{tpc.icon}</span>
                  <span className="text-xs font-semibold">{tpc.label}</span>
                </motion.button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
