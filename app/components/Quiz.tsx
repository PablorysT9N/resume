"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Question {
  q: string;
  opts: string[];
  a: number;
  exp: string;
}

interface QuizProps {
  questions: Question[];
  title: string;
  color: string;
  icon: string;
}

export default function Quiz({ questions, title, color, icon }: QuizProps) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const [revealed, setRevealed] = useState(false);

  const q = questions[current];
  const progress = ((current) / questions.length) * 100;

  function pick(idx: number) {
    if (selected !== null) return;
    setSelected(idx);
    setRevealed(true);
    if (idx === q.a) setScore((s) => s + 1);
  }

  function next() {
    if (current + 1 >= questions.length) {
      setDone(true);
    } else {
      setCurrent((c) => c + 1);
      setSelected(null);
      setRevealed(false);
    }
  }

  function restart() {
    setCurrent(0);
    setSelected(null);
    setRevealed(false);
    setScore(0);
    setDone(false);
  }

  if (done) {
    const pct = Math.round((score / questions.length) * 100);
    const msg = pct >= 80 ? "¡Excelente! Estás muy preparado/a." : pct >= 60 ? "Bien, sigue practicando." : "Repasa el temario y vuelve a intentarlo.";
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="card text-center py-8"
      >
        <div className="text-5xl mb-3">{pct >= 80 ? "🏆" : pct >= 60 ? "👍" : "📚"}</div>
        <div className="text-3xl font-bold mb-1" style={{ color }}>{score}/{questions.length}</div>
        <div className="text-xl font-semibold mb-1">{pct}% correcto</div>
        <p className="mb-6" style={{ color: "var(--text2)" }}>{msg}</p>
        <button
          onClick={restart}
          className="px-6 py-3 rounded-xl font-semibold text-white"
          style={{ background: color }}
        >
          Volver a intentar
        </button>
      </motion.div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-semibold" style={{ color }}>{icon} {title}</span>
        <span className="badge" style={{ background: `${color}22`, color }}>{current + 1}/{questions.length}</span>
      </div>

      <div className="progress-track mb-4">
        <div className="progress-fill" style={{ width: `${progress}%`, background: color }} />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.25 }}
        >
          <div className="card mb-3">
            <p className="font-semibold text-body leading-snug">{q.q}</p>
          </div>

          <div className="flex flex-col gap-2 mb-3">
            {q.opts.map((opt, i) => {
              let cls = "card card-hover cursor-pointer border-2 text-body transition-all";
              if (selected !== null) {
                if (i === q.a) cls += " ans-correct border-2";
                else if (i === selected && i !== q.a) cls += " ans-wrong border-2";
                else cls += " opacity-50";
              }
              return (
                <motion.button
                  key={i}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => pick(i)}
                  className={cls}
                  style={{ textAlign: "left", padding: "0.875rem 1rem" }}
                >
                  <span className="font-bold mr-2" style={{ color: selected !== null && i === q.a ? "var(--green2)" : "var(--text2)" }}>
                    {String.fromCharCode(65 + i)}.
                  </span>
                  {opt}
                </motion.button>
              );
            })}
          </div>

          {revealed && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="card mb-3"
              style={{ borderColor: selected === q.a ? "var(--green)" : "var(--red2)", background: selected === q.a ? "rgba(39,174,96,0.08)" : "rgba(192,57,43,0.08)" }}
            >
              <p className="text-sm-ui leading-relaxed">
                <span className="font-bold">{selected === q.a ? "✅ Correcto. " : "❌ Incorrecto. "}</span>
                {q.exp}
              </p>
            </motion.div>
          )}

          {selected !== null && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={next}
              className="w-full py-3 rounded-xl font-semibold text-white"
              style={{ background: color }}
            >
              {current + 1 >= questions.length ? "Ver resultado" : "Siguiente →"}
            </motion.button>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
