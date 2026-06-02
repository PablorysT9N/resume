"use client";
import { motion } from "framer-motion";

interface Block {
  heading: string;
  items: string[];
}

interface TemaViewProps {
  title: string;
  icon: string;
  color: string;
  intro: string;
  blocks: Block[];
}

export default function TemaView({ title, icon, color, intro, blocks }: TemaViewProps) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="card mb-4" style={{ borderColor: color, background: `${color}0d` }}>
        <div className="text-3xl mb-2">{icon}</div>
        <h2 className="text-xl font-bold mb-1">{title}</h2>
        <p className="text-sm-ui leading-relaxed" style={{ color: "var(--text2)" }}>{intro}</p>
      </div>

      {blocks.map((block, bi) => (
        <motion.div
          key={bi}
          className="card mb-3"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: bi * 0.07 }}
        >
          <h3 className="font-bold mb-2 text-sm-ui uppercase tracking-wide" style={{ color }}>
            {block.heading}
          </h3>
          <ul className="flex flex-col gap-1.5">
            {block.items.map((item, ii) => (
              <li key={ii} className="flex gap-2 text-sm-ui">
                <span style={{ color, flexShrink: 0 }}>·</span>
                <span style={{ color: "var(--text)" }}>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </motion.div>
  );
}
