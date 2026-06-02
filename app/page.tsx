"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { EASE_OUT, spring, dur } from "./lib/motion";
import BottomNav, { type Tab } from "./components/BottomNav";
import HomeScreen     from "./screens/HomeScreen";
import EstudiarScreen from "./screens/EstudiarScreen";
import MapasScreen    from "./screens/MapasScreen";
import TestsScreen    from "./screens/TestsScreen";
import MasScreen      from "./screens/MasScreen";

export default function App() {
  const [tab, setTab] = useState<Tab>("home");

  const screens: Record<Tab, React.ReactNode> = {
    home:     <HomeScreen onNav={setTab}/>,
    estudiar: <EstudiarScreen/>,
    mapas:    <MapasScreen/>,
    tests:    <TestsScreen/>,
    mas:      <MasScreen/>,
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ background:"var(--bg)" }}>
      {/* Top bar */}
      <header className="sticky top-0 z-50 px-4 py-3 flex items-center justify-between"
        style={{ background:"rgba(7,7,17,0.9)", borderBottom:"1px solid var(--border)",
                 backdropFilter:"blur(16px)", WebkitBackdropFilter:"blur(16px)" }}>
        <div>
          <div className="flag-stripe w-8 mb-1.5"/>
          <span className="text-xs font-black tracking-widest uppercase" style={{ color:"var(--muted)" }}>
            Auxiliar Admin · SP
          </span>
        </div>
        <div className="flex gap-1.5">
          <span className="chip" style={{ background:"var(--red-soft)", color:"#fca5a5" }}>
            🇪🇸 Concurso
          </span>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 overflow-y-auto pt-3" style={{ paddingBottom:88 }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity:0, transform:"translateY(10px) scale(0.99)" }}
            animate={{ opacity:1, transform:"translateY(0px) scale(1)" }}
            exit={{    opacity:0, transform:"translateY(-6px) scale(1)" }}
            transition={{ duration: dur.ui, ease: EASE_OUT }}
          >
            {screens[tab]}
          </motion.div>
        </AnimatePresence>
      </main>

      <BottomNav active={tab} onChange={setTab}/>
    </div>
  );
}
