"use client";
import { useState } from "react";
import TemaView from "./TemaView";
import Quiz from "./Quiz";
import { quizBrasil } from "../data/content";

const blocks = [
  {
    heading: "Geografía",
    items: [
      "Superficie: 8.515.767 km² — 5.º país más grande del mundo",
      "Fronteras: todos los países sudamericanos excepto Chile y Ecuador",
      "Capital: Brasília (DF) — fundada el 21 de abril de 1960",
      "Ciudad más poblada: São Paulo (+12 millones / RMSP +22 millones)",
      "Río Amazonas: más caudaloso del mundo; Río Paraná: 2.º más caudaloso",
      "Biomas: Amazonia, Cerrado, Mata Atlântica, Pantanal, Caatinga, Pampa",
      "26 estados + Distrito Federal → 5.570 municipios",
    ],
  },
  {
    heading: "Estado de São Paulo",
    items: [
      "Capital: São Paulo — 12,3 millones de habitantes",
      "Área: 248.222 km² — 12.º estado más grande de Brasil",
      "PIB: ~35% del PIB nacional — estado más rico",
      "Principales ciudades: São Paulo, Campinas, Santos, Ribeirão Preto, São José dos Campos",
      "Puerto de Santos: mayor puerto de América Latina",
      "Aeropuerto de Guarulhos (GRU): mayor aeropuerto de Brasil",
      "Presencia española: ~350.000 ciudadanos españoles registrados en SP",
      "Consulado General de España: Av. Paulista 1754, São Paulo",
    ],
  },
  {
    heading: "Historia",
    items: [
      "1500: Descubrimiento por Pedro Álvares Cabral (22 abril)",
      "1532-1808: Periodo colonial portugués",
      "1808: Llegada de la Familia Real portuguesa (huida de Napoleón)",
      "1815: Brasil elevado a Reino Unido con Portugal",
      "7 sept. 1822: Independencia — Dom Pedro I, 'Grito do Ipiranga'",
      "1888: Abolición de la esclavitud — Ley Áurea (Princesa Isabel)",
      "15 nov. 1889: Proclamación de la República — Marechal Deodoro da Fonseca",
      "1930-1945: Era Vargas — Estado Novo",
      "1960: Inauguración de Brasília como capital federal",
      "1964-1985: Régimen militar",
      "1988: Constitución Federal 'Cidadã' — redemocratización",
      "1994: Plan Real — estabilización económica",
    ],
  },
  {
    heading: "Sistema Político",
    items: [
      "República Federativa Presidencialista",
      "Jefe de Estado y de Gobierno: Presidente de la República (4 años, reelegible 1 vez)",
      "Poder Legislativo: Congresso Nacional (Câmara + Senado Federal)",
      "Câmara dos Deputados: 513 diputados (proporcional por estado)",
      "Senado Federal: 81 senadores (3 por estado, mandato 8 años)",
      "STF: Supremo Tribunal Federal (11 ministros) — equivalente al TC español",
      "TCU: Tribunal de Contas da União — control externo del presupuesto federal",
      "Sufragio obligatorio (16-70 años) y facultativo (16-17 y +70)",
    ],
  },
  {
    heading: "Economía",
    items: [
      "Moneda: Real (R$) — desde julio de 1994 (Plan Real)",
      "PIB: ~2 billones USD — mayor economía de América Latina",
      "Banco Central do Brasil (BACEN): banco central independiente (desde 2021)",
      "IBGE: Instituto Brasileiro de Geografia e Estatística",
      "Receita Federal: administración tributaria federal",
      "Reforma tributaria (EC 132/2023): simplificación fiscal con IBS y CBS",
      "Sectores clave: agronegocio, minería, industria, servicios financieros",
      "Bolsa de Valores: B3 (Bovespa + BM&F) — São Paulo",
      "Brasil es el mayor exportador mundial de café, soja, carne bovina y azúcar",
    ],
  },
  {
    heading: "Cultura y Sociedad",
    items: [
      "Idioma oficial: Portugués (variante brasileña)",
      "Religión mayoritaria: Catolicismo (~50%) + Evangelismo en crecimiento",
      "Carnaval: festejo más conocido mundialmente (Río de Janeiro y São Paulo)",
      "Fútbol: deporte nacional; Brasil 5 veces campeón del mundo (1958,62,70,94,2002)",
      "Telenovelas (novelas): fenómeno cultural de amplio alcance",
      "Semana de Arte Moderno de 1922: punto de partida del modernismo brasileño",
      "UNESCO: Patrimônio da Humanidade — Brasília, Pelourinho, Iguazú, etc.",
    ],
  },
];

export default function BrasilView() {
  const [mode, setMode] = useState<"teoria" | "test">("teoria");

  return (
    <div>
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setMode("teoria")}
          className="flex-1 py-2.5 rounded-xl font-semibold text-sm transition-all"
          style={mode === "teoria" ? { background: "var(--green)", color: "white" } : { background: "var(--bg2)", color: "var(--text2)" }}
        >
          📖 Teoría
        </button>
        <button
          onClick={() => setMode("test")}
          className="flex-1 py-2.5 rounded-xl font-semibold text-sm transition-all"
          style={mode === "test" ? { background: "var(--green)", color: "white" } : { background: "var(--bg2)", color: "var(--text2)" }}
        >
          ✏️ Test
        </button>
      </div>

      {mode === "teoria" ? (
        <TemaView
          title="Brasil"
          icon="🇧🇷"
          color="var(--green)"
          intro="Geografía, historia, sistema político-económico y cultura de Brasil. Especial énfasis en el Estado de São Paulo y su relación con España."
          blocks={blocks}
        />
      ) : (
        <Quiz
          questions={quizBrasil}
          title="Brasil"
          color="var(--green2)"
          icon="🇧🇷"
        />
      )}
    </div>
  );
}
