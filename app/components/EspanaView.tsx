"use client";
import { useState } from "react";
import TemaView from "./TemaView";
import Quiz from "./Quiz";
import { quizEspana } from "../data/content";

const blocks = [
  {
    heading: "Geografía",
    items: [
      "Superficie: 505.990 km² — 4.º país más grande de Europa",
      "Limita con Francia, Andorra, Portugal, Marruecos (Ceuta/Melilla) y Gibraltar",
      "Pico más alto: Teide (3.718 m) en Canarias · En Península: Mulhacén (3.478 m)",
      "Ríos principales: Tajo (más largo), Ebro (mayor caudal íntegro en España), Duero, Guadiana, Guadalquivir",
      "17 Comunidades Autónomas + 2 Ciudades Autónomas (Ceuta y Melilla)",
      "Archipiélagos: Canarias (Atlántico) e Islas Baleares (Mediterráneo)",
      "Territorio en África: Ceuta, Melilla, Islas Chafarinas, Peñón de Vélez de la Gomera, Alhucemas",
    ],
  },
  {
    heading: "Historia Clave",
    items: [
      "711: Invasión árabe de la Península Ibérica",
      "1492: Fin de la Reconquista + Descubrimiento de América (Colón)",
      "1812: Constitución de Cádiz — primera constitución española",
      "1936-1939: Guerra Civil Española",
      "1975: Muerte de Francisco Franco — transición democrática",
      "1978: Constitución Española vigente",
      "1982: España ingresa en la OTAN",
      "1986: Adhesión a la Comunidad Europea (CEE)",
      "2002: Adopción del euro como moneda",
    ],
  },
  {
    heading: "Sistema Político",
    items: [
      "Monarquía parlamentaria constitucional",
      "Jefe de Estado: Rey Felipe VI (desde 2014)",
      "Jefe de Gobierno: Presidente del Consejo de Ministros",
      "Parlamento bicameral: Congreso (350 diputados) + Senado (266 senadores)",
      "Tribunal Constitucional: máximo intérprete de la Constitución",
      "Consejo de Estado: supremo órgano consultivo del Gobierno",
      "Tribunal Supremo: órgano jurisdiccional superior en todos los órdenes",
      "Defensor del Pueblo: comisionado de las Cortes Generales para derechos fundamentales",
    ],
  },
  {
    heading: "Constitución 1978",
    items: [
      "Aprobada en referéndum: 6 de diciembre de 1978",
      "Art. 1: Estado social y democrático de Derecho; monarquía parlamentaria",
      "Art. 14: Principio de igualdad ante la ley",
      "Art. 15-29: Derechos fundamentales y libertades públicas",
      "Art. 56: El Rey, Jefe del Estado",
      "Art. 97: El Gobierno dirige la política interior y exterior",
      "Art. 103: La Administración Pública sirve con objetividad los intereses generales",
      "Título VIII (Arts. 137-158): Organización territorial del Estado",
    ],
  },
  {
    heading: "Administración Pública",
    items: [
      "Principios: eficacia, jerarquía, descentralización, desconcentración, coordinación",
      "Administración General del Estado (AGE): ministerios y organismos centrales",
      "Administración Autonómica: 17 Comunidades Autónomas con gobierno propio",
      "Administración Local: 8.131 municipios, 50 provincias, cabildos/consejos insulares",
      "AEAT: Agencia Estatal de Administración Tributaria",
      "Ley 39/2015: Procedimiento Administrativo Común",
      "Ley 40/2015: Régimen Jurídico del Sector Público",
      "INAP: Instituto Nacional de Administración Pública (formación de empleados públicos)",
    ],
  },
  {
    heading: "Economía y Datos",
    items: [
      "Moneda: Euro (€) — desde 1 de enero de 2002",
      "PIB: ~1,4 billones € — 4.ª economía de la zona euro",
      "Sectores clave: turismo (~12% PIB), industria automotriz, agroalimentación, banca",
      "Tasa de desempleo históricamente alta comparada con la UE",
      "IBEX 35: índice bursátil de referencia español",
      "Banco de España: banco central (integrado en el SEBC/BCE desde 1999)",
      "Principales ciudades: Madrid (capital), Barcelona, Valencia, Sevilla, Zaragoza",
    ],
  },
];

export default function EspanaView() {
  const [mode, setMode] = useState<"teoria" | "test">("teoria");

  return (
    <div>
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setMode("teoria")}
          className="flex-1 py-2.5 rounded-xl font-semibold text-sm transition-all"
          style={mode === "teoria" ? { background: "var(--red)", color: "white" } : { background: "var(--bg2)", color: "var(--text2)" }}
        >
          📖 Teoría
        </button>
        <button
          onClick={() => setMode("test")}
          className="flex-1 py-2.5 rounded-xl font-semibold text-sm transition-all"
          style={mode === "test" ? { background: "var(--red)", color: "white" } : { background: "var(--bg2)", color: "var(--text2)" }}
        >
          ✏️ Test
        </button>
      </div>

      {mode === "teoria" ? (
        <TemaView
          title="España"
          icon="🇪🇸"
          color="var(--red)"
          intro="Geografía, historia, sistema político y administrativo español. Repasa los temas más frecuentes en los exámenes de auxiliar administrativo consular."
          blocks={blocks}
        />
      ) : (
        <Quiz
          questions={quizEspana}
          title="España"
          color="var(--red2)"
          icon="🇪🇸"
        />
      )}
    </div>
  );
}
