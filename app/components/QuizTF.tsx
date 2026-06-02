"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export type TFQ = { q: string; a: boolean; exp: string };

export default function QuizTF({ qs, color }: { qs: TFQ[]; color: string }) {
  const [cur, setCur] = useState(0);
  const [sel, setSel] = useState<boolean|null>(null);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [done, setDone] = useState(false);

  const q = qs[cur];
  const correct = sel !== null && sel === q.a;

  function pick(val: boolean) {
    if (sel !== null) return;
    setSel(val);
    if (val === q.a) {
      setScore(s => s + 1);
      setStreak(s => s + 1);
    } else {
      setStreak(0);
    }
  }

  function next() {
    if (cur + 1 >= qs.length) { setDone(true); return; }
    setCur(c => c + 1); setSel(null);
  }

  if (done) {
    const p = Math.round((score / qs.length) * 100);
    return (
      <motion.div initial={{ scale:.9, opacity:0 }} animate={{ scale:1, opacity:1 }}
        className="glass p-6 text-center">
        <div className="text-5xl mb-3">{p >= 80 ? "🔥" : p >= 60 ? "👍" : "📚"}</div>
        <div className="text-4xl font-black mb-1" style={{ color }}>{p}%</div>
        <p className="text-sm mb-5" style={{ color:"var(--muted)" }}>{score}/{qs.length} correctas</p>
        <button onClick={() => { setCur(0); setSel(null); setScore(0); setStreak(0); setDone(false); }}
          className="px-6 py-3 rounded-xl font-bold text-white" style={{ background: color }}>
          Repetir
        </button>
      </motion.div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-bold" style={{ color }}>
          ✅ {cur + 1}/{qs.length}
        </span>
        {streak >= 2 && (
          <motion.span initial={{ scale:0 }} animate={{ scale:1 }}
            className="chip" style={{ background:"rgba(251,191,36,0.2)", color:"#fbbf24" }}>
            🔥 {streak} seguidas
          </motion.span>
        )}
      </div>

      <div className="prog-track mb-4">
        <div className="prog-fill" style={{ width:`${(cur/qs.length)*100}%`, background:color }}/>
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={cur}
          initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:-16 }}
          transition={{ duration:.22 }}>
          <div className="glass p-5 mb-5 min-h-[100px] flex items-center justify-center">
            <p className="font-semibold text-base text-center leading-snug">{q.q}</p>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-4">
            {[
              { val:true,  label:"VERDADERO", icon:"✅", col:"var(--green)" },
              { val:false, label:"FALSO",     icon:"❌", col:"var(--red)" },
            ].map(opt => {
              const isAnswer = opt.val === q.a;
              const isSelected = opt.val === sel;
              let bg = `${opt.col}22`;
              let border = "transparent";
              if (sel !== null) {
                if (isAnswer) { bg = "var(--green-soft)"; border = "var(--green)"; }
                else if (isSelected) { bg = "var(--red-soft)"; border = "var(--red)"; }
                else { bg = "rgba(255,255,255,0.02)"; }
              }
              return (
                <motion.button key={String(opt.val)}
                  whileTap={{ scale:.94 }}
                  onClick={() => pick(opt.val)}
                  className="py-5 rounded-2xl flex flex-col items-center gap-1 font-bold text-sm border-2 transition-all"
                  style={{ background:bg, borderColor:border, color: sel !== null && isAnswer ? "var(--green)" : "var(--text)" }}>
                  <span className="text-2xl">{opt.icon}</span>
                  {opt.label}
                </motion.button>
              );
            })}
          </div>

          {sel !== null && (
            <motion.div initial={{ opacity:0, y:8 }} animate={{ opacity:1, y:0 }}
              className="p-3 rounded-[14px] mb-3 text-sm leading-relaxed"
              style={{ background: correct ? "var(--green-soft)" : "var(--red-soft)",
                       borderLeft: `3px solid ${correct ? "var(--green)" : "var(--red)"}` }}>
              <span className="font-bold">{correct ? "✅ Correcto. " : "❌ Incorrecto. "}</span>{q.exp}
            </motion.div>
          )}

          {sel !== null && (
            <motion.button initial={{ opacity:0 }} animate={{ opacity:1 }}
              onClick={next}
              className="w-full py-3.5 rounded-xl font-bold text-white"
              style={{ background: color }}>
              {cur + 1 >= qs.length ? "Ver resultado →" : "Siguiente →"}
            </motion.button>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
