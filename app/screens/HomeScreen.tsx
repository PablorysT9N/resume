"use client";
import { motion } from "framer-motion";
import type { Tab } from "../components/BottomNav";

const stats = [
  { v:"4",  l:"Temas",       c:"var(--red)" },
  { v:"52", l:"Tests MC",    c:"var(--blue)" },
  { v:"30", l:"Verdad/Falso",c:"var(--green)" },
  { v:"24", l:"Emparejar",   c:"var(--purple)" },
  { v:"14", l:"Flashcards",  c:"var(--gold)" },
  { v:"3",  l:"Mapas",       c:"var(--red)" },
];

const cards = [
  { icon:"📋", title:"La Convocatoria", desc:"Plazas, fases, requisitos y funciones del puesto.", tab:"estudiar" as Tab, color:"var(--red)" },
  { icon:"🇪🇸", title:"España",         desc:"Geografía, historia, política y administración.", tab:"estudiar" as Tab, color:"#b91c1c" },
  { icon:"🇧🇷", title:"Brasil",          desc:"Historia, economía, São Paulo y sistema político.", tab:"estudiar" as Tab, color:"var(--green)" },
  { icon:"🏛️", title:"Función Consular", desc:"Derecho consular, documentos y legislación.", tab:"estudiar" as Tab, color:"var(--blue)" },
  { icon:"💻", title:"Ofimática",       desc:"Word, Excel y gestión documental.", tab:"estudiar" as Tab, color:"var(--purple)" },
  { icon:"🧠", title:"Mapas Mentales",  desc:"Visualiza los temas de forma interactiva.", tab:"mapas"  as Tab, color:"var(--gold)" },
];

export default function HomeScreen({ onNav }: { onNav: (t: Tab) => void }) {
  return (
    <div className="px-4 pb-4">
      {/* Hero */}
      <div className="relative overflow-hidden glass mb-4 p-5"
        style={{ border:"1px solid rgba(220,38,38,0.35)", background:"rgba(220,38,38,0.05)" }}>
        {/* Animated background orbs */}
        <motion.div
          animate={{ scale:[1,1.15,1], opacity:[.3,.5,.3] }}
          transition={{ duration:4, repeat:Infinity, ease:"easeInOut" }}
          className="absolute -top-8 -right-8 w-32 h-32 rounded-full"
          style={{ background:"radial-gradient(circle, rgba(220,38,38,0.4), transparent)" }}
        />
        <motion.div
          animate={{ scale:[1,1.2,1], opacity:[.2,.4,.2] }}
          transition={{ duration:5, repeat:Infinity, ease:"easeInOut", delay:1 }}
          className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full"
          style={{ background:"radial-gradient(circle, rgba(217,119,6,0.4), transparent)" }}
        />

        <div className="relative">
          <div className="flag-stripe mb-3 w-12"/>
          <h1 className="text-xl font-black leading-tight mb-1">
            <span className="grad-text">Auxiliar Administrativo</span>
          </h1>
          <p className="text-sm" style={{ color:"var(--muted)" }}>
            Consulado General de España · São Paulo
          </p>
          <div className="flex gap-2 mt-3 flex-wrap">
            <span className="chip" style={{ background:"var(--red-soft)", color:"#fca5a5" }}>Concurso-Oposición</span>
            <span className="chip" style={{ background:"var(--gold-soft)", color:"#fcd34d" }}>1 Plaza Fija</span>
          </div>
        </div>
      </div>

      {/* Stats row */}
      <div className="flex gap-2 overflow-x-auto pb-2 mb-4" style={{ scrollbarWidth:"none" }}>
        {stats.map((s, i) => (
          <motion.div key={s.l}
            initial={{ opacity:0, y:10 }} animate={{ opacity:1, y:0 }}
            transition={{ delay:i*0.05 }}
            className="glass flex-shrink-0 text-center px-3 py-2.5"
            style={{ minWidth:72 }}>
            <div className="text-xl font-black" style={{ color:s.c }}>{s.v}</div>
            <div className="text-[10px] mt-0.5" style={{ color:"var(--muted)" }}>{s.l}</div>
          </motion.div>
        ))}
      </div>

      {/* Callout */}
      <div className="callout mb-4">
        <span className="font-bold" style={{ color:"var(--gold)" }}>Examen: </span>
        50 preguntas tipo test (25 España + 25 Brasil) · Prueba práctica Word/Excel · Entrevista personal
      </div>

      {/* Quick access grid */}
      <h2 className="font-bold text-sm mb-3" style={{ color:"var(--muted)" }}>ACCESO RÁPIDO</h2>
      <div className="grid grid-cols-2 gap-3">
        {cards.map((c, i) => (
          <motion.button key={c.title}
            initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }}
            transition={{ delay:.1 + i*0.06 }}
            whileTap={{ scale:.95 }}
            onClick={() => onNav(c.tab)}
            className="glass text-left p-4"
            style={{ borderColor:`${c.color}33` }}>
            <div className="text-2xl mb-2">{c.icon}</div>
            <div className="font-bold text-sm mb-1">{c.title}</div>
            <div className="text-xs leading-tight" style={{ color:"var(--muted)" }}>{c.desc}</div>
            <div className="mt-2 h-0.5 w-6 rounded" style={{ background:c.color }}/>
          </motion.button>
        ))}
      </div>

      {/* CTA */}
      <motion.button
        initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:.6 }}
        whileTap={{ scale:.97 }}
        onClick={() => onNav("tests")}
        className="w-full mt-4 py-4 rounded-2xl font-black text-white text-base"
        style={{ background:"linear-gradient(135deg, var(--red) 0%, #9b1c1c 100%)" }}>
        ✏️ Empezar a practicar
      </motion.button>
    </div>
  );
}
