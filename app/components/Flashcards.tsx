"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { flashcards } from "../data/content";

export default function Flashcards() {
  const [idx, setIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [dir, setDir] = useState(1);

  const card = flashcards[idx];
  const progress = ((idx + 1) / flashcards.length) * 100;

  function goNext() {
    setDir(1);
    setFlipped(false);
    setTimeout(() => setIdx((i) => (i + 1) % flashcards.length), 50);
  }

  function goPrev() {
    setDir(-1);
    setFlipped(false);
    setTimeout(() => setIdx((i) => (i - 1 + flashcards.length) % flashcards.length), 50);
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-semibold" style={{ color: "var(--yellow2)" }}>🗂️ Tarjetas de Estudio</span>
        <span className="badge" style={{ background: "rgba(243,156,18,0.15)", color: "var(--yellow2)" }}>
          {idx + 1}/{flashcards.length}
        </span>
      </div>

      <div className="progress-track mb-4">
        <div className="progress-fill" style={{ width: `${progress}%`, background: "var(--yellow2)" }} />
      </div>

      <p className="text-sm-ui mb-3" style={{ color: "var(--text2)" }}>
        Toca la tarjeta para revelar la respuesta
      </p>

      <AnimatePresence mode="wait">
        <motion.div
          key={idx}
          initial={{ opacity: 0, x: dir * 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: dir * -40 }}
          transition={{ duration: 0.22 }}
          className="flip-card mb-4"
          style={{ height: 200 }}
          onClick={() => setFlipped((f) => !f)}
        >
          <div className={`flip-inner ${flipped ? "flipped" : ""}`} style={{ height: "100%" }}>
            <div
              className="flip-front card flex items-center justify-center p-6"
              style={{ background: "var(--bg2)", border: "2px solid var(--yellow2)" }}
            >
              <p className="font-semibold text-center text-body leading-snug">{card.front}</p>
            </div>
            <div
              className="flip-back card flex items-center justify-center p-6"
              style={{ background: "rgba(243,156,18,0.08)", border: "2px solid var(--yellow2)" }}
            >
              <p className="text-center text-sm-ui leading-relaxed" style={{ color: "var(--text)" }}>{card.back}</p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="flex gap-3">
        <button
          onClick={goPrev}
          className="flex-1 py-3 rounded-xl font-semibold border-2"
          style={{ borderColor: "var(--border)", color: "var(--text2)" }}
        >
          ← Anterior
        </button>
        <button
          onClick={() => setFlipped((f) => !f)}
          className="flex-1 py-3 rounded-xl font-semibold"
          style={{ background: "rgba(243,156,18,0.15)", color: "var(--yellow2)" }}
        >
          {flipped ? "Ocultar" : "Revelar"}
        </button>
        <button
          onClick={goNext}
          className="flex-1 py-3 rounded-xl font-semibold border-2"
          style={{ borderColor: "var(--border)", color: "var(--text2)" }}
        >
          Siguiente →
        </button>
      </div>
    </div>
  );
}
