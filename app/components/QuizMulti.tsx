"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export type MCQ = { q: string; opts: string[]; a: number; exp: string };

export default function QuizMulti({ qs, color, icon }: { qs: MCQ[]; color: string; icon: string }) {
  const [cur, setCur] = useState(0);
  const [sel, setSel] = useState<number|null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const q = qs[cur];
  const pct = Math.round((cur / qs.length) * 100);

  function pick(i: number) {
    if (sel !== null) return;
    setSel(i);
    if (i === q.a) setScore(s => s + 1);
  }

  function next() {
    if (cur + 1 >= qs.length) { setDone(true); return; }
    setCur(c => c + 1); setSel(null);
  }

  if (done) {
    const p = Math.round((score / qs.length) * 100);
    return (
      <motion.div initial={{ scale: .9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
        className="glass p-6 text-center">
        <div className="text-5xl mb-3">{p >= 80 ? "🏆" : p >= 60 ? "👍" : "📚"}</div>
        <div className="text-4xl font-black mb-1" style={{ color }}>{p}%</div>
        <div className="mb-1 font-semibold">{score}/{qs.length} correctas</div>
        <p className="text-sm mb-5" style={{ color:"var(--muted)" }}>
          {p >= 80 ? "¡Excelente! Dominas el tema." : p >= 60 ? "Bien, sigue practicando." : "Repasa la teoría e inténtalo de nuevo."}
        </p>
        <button onClick={() => { setCur(0); setSel(null); setScore(0); setDone(false); }}
          className="px-6 py-3 rounded-xl font-bold text-white" style={{ background: color }}>
          Repetir test
        </button>
      </motion.div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-bold" style={{ color }}>{icon} {cur + 1} / {qs.length}</span>
        <span className="chip" style={{ background:`${color}22`, color }}>{pct}%</span>
      </div>
      <div className="prog-track mb-4">
        <div className="prog-fill" style={{ width:`${pct}%`, background:color }}/>
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={cur}
          initial={{ opacity:0, x:24 }} animate={{ opacity:1, x:0 }} exit={{ opacity:0, x:-24 }}
          transition={{ duration:.2 }}>
          <div className="glass p-4 mb-3">
            <p className="font-semibold leading-snug">{q.q}</p>
          </div>
          <div className="flex flex-col gap-2 mb-3">
            {q.opts.map((opt, i) => {
              const isCorrect = i === q.a;
              const isSelected = i === sel;
              let extra = "";
              if (sel !== null) {
                if (isCorrect) extra = "opt-correct";
                else if (isSelected) extra = "opt-wrong";
                else extra = "opacity-40";
              }
              return (
                <motion.button key={i} whileTap={{ scale:.97 }}
                  onClick={() => pick(i)}
                  className={`glass p-3.5 text-left border-2 rounded-[14px] transition-all ${extra}`}
                  style={{ borderColor: "transparent" }}>
                  <span className="font-bold mr-2" style={{ color: sel !== null && isCorrect ? "var(--green)" : "var(--muted)" }}>
                    {String.fromCharCode(65+i)}.
                  </span>
                  <span className="text-sm">{opt}</span>
                </motion.button>
              );
            })}
          </div>

          {sel !== null && (
            <motion.div initial={{ opacity:0, y:8 }} animate={{ opacity:1, y:0 }}
              className="p-3 rounded-[14px] mb-3 text-sm leading-relaxed"
              style={{
                background: sel === q.a ? "var(--green-soft)" : "var(--red-soft)",
                borderLeft: `3px solid ${sel === q.a ? "var(--green)" : "var(--red)"}`,
              }}>
              <span className="font-bold">{sel === q.a ? "✅ " : "❌ "}</span>{q.exp}
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
