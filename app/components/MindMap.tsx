"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { MindMapDef, MMNode } from "../data/mindmaps";

/* Draw a smooth cubic-bezier path from parent to child */
function CurvedLine({ from, to, color }: { from: MMNode; to: MMNode; color: string }) {
  const mx = (from.x + to.x) / 2;
  const my = (from.y + to.y) / 2;
  const d = `M ${from.x} ${from.y} Q ${mx} ${from.y} ${to.x} ${to.y}`;
  return (
    <motion.path
      d={d}
      fill="none"
      stroke={color}
      strokeWidth={to.type === "leaf" ? 1.5 : 2.5}
      strokeOpacity={0.55}
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.1 }}
    />
  );
}

function Node({ node, onClick, selected }: { node: MMNode; onClick: () => void; selected: boolean }) {
  const isRoot = node.type === "root";
  const isBranch = node.type === "branch";

  if (isRoot) {
    return (
      <motion.g
        className="mm-node"
        onClick={onClick}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, delay: 0 }}
      >
        {/* Glow ring */}
        <circle cx={node.x} cy={node.y} r={node.r + 10} fill="rgba(220,38,38,0.12)" />
        <circle cx={node.x} cy={node.y} r={node.r + 6} fill="rgba(220,38,38,0.08)" />
        <circle
          cx={node.x} cy={node.y} r={node.r}
          fill="#1a0a0a"
          stroke={selected ? "#fff" : "#dc2626"}
          strokeWidth={selected ? 3 : 2}
        />
        {node.label.split("\n").map((line, i) => (
          <text
            key={i}
            x={node.x}
            y={node.y + (node.label.includes("\n") ? (i - 0.5) * 13 : 0)}
            textAnchor="middle"
            dominantBaseline="central"
            fill="#f1f5f9"
            fontSize="11"
            fontWeight="800"
            letterSpacing="1"
          >
            {line}
          </text>
        ))}
      </motion.g>
    );
  }

  if (isBranch) {
    const w = 80, h = 34;
    return (
      <motion.g
        className="mm-node"
        onClick={onClick}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, delay: 0.2 }}
      >
        <rect
          x={node.x - w / 2} y={node.y - h / 2} width={w} height={h} rx={10}
          fill={selected ? node.color : `${node.color}22`}
          stroke={node.color}
          strokeWidth={1.5}
        />
        <text
          x={node.x} y={node.y}
          textAnchor="middle" dominantBaseline="central"
          fill={selected ? "#fff" : node.color}
          fontSize="10" fontWeight="700"
        >
          {node.label}
        </text>
      </motion.g>
    );
  }

  /* Leaf */
  const w = 100, h = 28;
  return (
    <motion.g
      className="mm-node"
      onClick={onClick}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 240, delay: 0.35 }}
    >
      <rect
        x={node.x - w / 2} y={node.y - h / 2} width={w} height={h} rx={7}
        fill={selected ? node.color : "rgba(255,255,255,0.05)"}
        stroke={selected ? node.color : "rgba(255,255,255,0.15)"}
        strokeWidth={1}
      />
      <text
        x={node.x} y={node.y}
        textAnchor="middle" dominantBaseline="central"
        fill={selected ? "#fff" : "#cbd5e1"}
        fontSize="9" fontWeight="600"
      >
        {node.label}
      </text>
    </motion.g>
  );
}

export default function MindMap({ map }: { map: MindMapDef }) {
  const [selected, setSelected] = useState<MMNode | null>(null);

  function getParent(node: MMNode) {
    return map.nodes.find(n => n.id === node.parentId);
  }

  function select(node: MMNode) {
    setSelected(prev => prev?.id === node.id ? null : node);
  }

  return (
    <div>
      <div className="mm-container" style={{ maxHeight: 380 }}>
        <svg
          width={map.w}
          height={map.h}
          viewBox={`0 0 ${map.w} ${map.h}`}
          style={{ display: "block" }}
        >
          {/* Lines */}
          {map.nodes.filter(n => n.parentId).map(node => {
            const parent = getParent(node);
            if (!parent) return null;
            return (
              <CurvedLine
                key={`line-${node.id}`}
                from={parent}
                to={node}
                color={node.color}
              />
            );
          })}
          {/* Nodes */}
          {map.nodes.map(node => (
            <Node
              key={node.id}
              node={node}
              onClick={() => select(node)}
              selected={selected?.id === node.id}
            />
          ))}
        </svg>
      </div>

      {/* Detail panel */}
      <AnimatePresence>
        {selected && (
          <motion.div
            key={selected.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            className="mt-3 glass p-4"
            style={{ borderColor: selected.color }}
          >
            <div className="flex items-start justify-between gap-2 mb-1">
              <span className="font-bold text-sm" style={{ color: selected.color }}>
                {selected.label}
              </span>
              <button
                onClick={() => setSelected(null)}
                className="text-xs px-2 py-1 rounded-lg"
                style={{ background: "rgba(255,255,255,0.08)", color: "var(--muted)" }}
              >
                ✕
              </button>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "#cbd5e1" }}>
              {selected.detail || "Toca otros nodos para explorar el mapa."}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
      {!selected && (
        <p className="text-center text-xs mt-3" style={{ color: "var(--muted)" }}>
          Toca cualquier nodo para ver detalles · Desliza para explorar
        </p>
      )}
    </div>
  );
}
