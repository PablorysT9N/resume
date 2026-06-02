"use client";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

export type Pair = { left: string; right: string };

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - .5);
}

export default function QuizMatch({ pairs, color }: { pairs: Pair[]; color: string }) {
  const lefts  = useMemo(() => shuffle(pairs.map((p, i) => ({ text:p.left,  idx:i }))), [pairs]);
  const rights = useMemo(() => shuffle(pairs.map((p, i) => ({ text:p.right, idx:i }))), [pairs]);

  const [selL, setSelL] = useState<number|null>(null);  // index in lefts[]
  const [selR, setSelR] = useState<number|null>(null);  // index in rights[]
  const [matched, setMatched]   = useState<Set<number>>(new Set()); // original pair indices
  const [wrongL, setWrongL]     = useState<number|null>(null);
  const [wrongR, setWrongR]     = useState<number|null>(null);
  const [done, setDone]         = useState(false);

  function pickLeft(i: number) {
    if (matched.has(lefts[i].idx)) return;
    setSelL(i);
    checkMatch(i, selR, "l");
  }
  function pickRight(i: number) {
    if (matched.has(rights[i].idx)) return;
    setSelR(i);
    checkMatch(selL, i, "r");
  }

  function checkMatch(l: number|null, r: number|null, just: "l"|"r") {
    const li = just === "l" ? l : selL;
    const ri = just === "r" ? r : selR;
    if (li === null || ri === null) return;
    if (lefts[li].idx === rights[ri].idx) {
      const next = new Set(matched);
      next.add(lefts[li].idx);
      setMatched(next);
      setSelL(null); setSelR(null);
      if (next.size === pairs.length) setTimeout(() => setDone(true), 400);
    } else {
      setWrongL(li); setWrongR(ri);
      setTimeout(() => { setWrongL(null); setWrongR(null); setSelL(null); setSelR(null); }, 700);
    }
  }

  function restart() {
    setSelL(null); setSelR(null); setMatched(new Set()); setWrongL(null); setWrongR(null); setDone(false);
  }

  if (done) {
    return (
      <motion.div initial={{ scale:.9, opacity:0 }} animate={{ scale:1, opacity:1 }}
        className="glass p-6 text-center">
        <div className="text-5xl mb-3">🎯</div>
        <div className="text-2xl font-black mb-1" style={{ color }}>¡Todas emparejadas!</div>
        <p className="text-sm mb-5" style={{ color:"var(--muted)" }}>Dominaste la actividad de emparejamiento.</p>
        <button onClick={restart}
          className="px-6 py-3 rounded-xl font-bold text-white" style={{ background:color }}>
          Jugar de nuevo
        </button>
      </motion.div>
    );
  }

  const progress = Math.round((matched.size / pairs.length) * 100);

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-bold" style={{ color }}>🎯 Empareja los conceptos</span>
        <span className="chip" style={{ background:`${color}22`, color }}>{matched.size}/{pairs.length}</span>
      </div>
      <div className="prog-track mb-4">
        <div className="prog-fill" style={{ width:`${progress}%`, background:color }}/>
      </div>
      <p className="text-xs mb-3" style={{ color:"var(--muted)" }}>
        Toca un concepto de la izquierda y su definición de la derecha.
      </p>

      <div className="grid grid-cols-2 gap-2">
        {/* Left column */}
        <div className="flex flex-col gap-2">
          <div className="text-xs font-bold mb-1" style={{ color }}>Concepto</div>
          {lefts.map((item, i) => {
            const isMatched  = matched.has(item.idx);
            const isSelected = selL === i;
            const isWrong    = wrongL === i;
            let cls = "match-cell";
            if (isMatched)  cls += " matched";
            else if (isWrong) cls += " wrong";
            else if (isSelected) cls += " selected";
            return (
              <motion.div key={i} className={cls} onClick={() => pickLeft(i)}
                animate={isWrong ? { x:[0,-6,6,-4,4,0] } : {}}
                transition={{ duration:.4 }}>
                {item.text}
              </motion.div>
            );
          })}
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-2">
          <div className="text-xs font-bold mb-1" style={{ color:"var(--muted)" }}>Definición</div>
          {rights.map((item, i) => {
            const isMatched  = matched.has(item.idx);
            const isSelected = selR === i;
            const isWrong    = wrongR === i;
            let cls = "match-cell";
            if (isMatched)  cls += " matched";
            else if (isWrong) cls += " wrong";
            else if (isSelected) cls += " selected";
            return (
              <motion.div key={i} className={cls} onClick={() => pickRight(i)}
                animate={isWrong ? { x:[0,-6,6,-4,4,0] } : {}}
                transition={{ duration:.4 }}>
                {item.text}
              </motion.div>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {matched.size > 0 && matched.size < pairs.length && (
          <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }}
            className="mt-3 text-center text-xs font-semibold" style={{ color:"var(--green)" }}>
            ✓ {matched.size} emparejada{matched.size > 1 ? "s" : ""} correctamente
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
