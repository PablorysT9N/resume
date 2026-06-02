"use client";
import { useState } from "react";
import TemaView from "./TemaView";
import Quiz from "./Quiz";
import { quizAdmin } from "../data/content";

const blocks = [
  {
    heading: "Derecho Consular Internacional",
    items: [
      "Convención de Viena sobre Relaciones Consulares (1963): marco principal del derecho consular",
      "Funciones consulares: protección de nacionales, asistencia a buques y aeronaves, notaría, registro civil, pasaportes",
      "Inmunidad consular: inmunidad de jurisdicción funcional (limitada, no diplomática)",
      "Exequátur: autorización del Estado receptor para ejercer funciones consulares",
      "Valija consular: inviolable; no puede ser retenida ni abierta por el Estado receptor",
      "Archivo consular: inviolable en todo momento y en cualquier lugar",
    ],
  },
  {
    heading: "Red Consular Española",
    items: [
      "Ministerio de Asuntos Exteriores, UE y Cooperación (MAEUEC): órgano rector",
      "Embajadas: representación diplomática y política ante el Estado receptor",
      "Consulados Generales: mayor rango consular; pueden supervisar consulados subordinados",
      "Consulados: representación consular en ciudades/regiones específicas",
      "Secciones Consulares: integradas en la Embajada",
      "Viceconsulados y Agencias Consulares: funciones limitadas",
      "OAC (Oficinas de Asilo y Refugio): dentro de embajadas en casos especiales",
    ],
  },
  {
    heading: "Consulado General en São Paulo",
    items: [
      "Dirección: Av. Paulista, 1754 — Bela Vista, São Paulo-SP",
      "Circunscripción: Estado de São Paulo (más de 350.000 españoles registrados)",
      "Servicios principales: pasaportes, DNI consular, registro civil, notaría consular",
      "RELE (Registro de Matrícula): padrón de españoles residentes",
      "Asistencia a españoles: en casos de detención, hospitalización, repatriación",
      "Visados: tramitación de visados para viajar a España/Schengen",
      "ICEX/Cámara de Comercio España-Brasil: promoción económica",
    ],
  },
  {
    heading: "Documentos Consulares",
    items: [
      "Pasaporte: documento de viaje — validez 5 años (menores) o 10 años (mayores)",
      "Tarjeta de Identidad Consular: identifica al español residente en el exterior",
      "Certificado de Inscripción Consular (CIC): acredita la residencia registrada",
      "Registro Civil Consular: inscripción de nacimientos, matrimonios, defunciones, adopciones",
      "Apostilla: autenticación de documentos para uso en países del Convenio de La Haya",
      "Legalización consular: para documentos destinados a países fuera del Convenio de La Haya",
      "Poderes notariales: autorizados por el cónsul con funciones notariales",
      "Fe de vida: certificado que acredita que una persona está viva",
    ],
  },
  {
    heading: "Legislación Aplicable",
    items: [
      "Ley 2/2014: Ley de Acción y del Servicio Exterior del Estado",
      "Ley 25/2014: de Tratados y otros Acuerdos Internacionales",
      "Ley 52/2007: Ley de Memoria Histórica (relevante para nacionalidad)",
      "Ley Orgánica 4/2000: sobre derechos y libertades de extranjeros en España",
      "Ley 20/2011: Registro Civil (en proceso de plena implementación)",
      "Ley 39/2015: Procedimiento Administrativo Común de las AAPP",
      "Real Decreto 1553/2005: expedición de Documento Nacional de Identidad",
      "Reglamento Consular (RD 1236/1995 y normativa complementaria)",
    ],
  },
  {
    heading: "Procedimiento Administrativo",
    items: [
      "Principios: legalidad, eficacia, transparencia, servicio al ciudadano",
      "Expediente administrativo: conjunto de documentos de un procedimiento",
      "Resolución: acto administrativo que pone fin al procedimiento",
      "Recurso de alzada: ante el órgano superior (1 mes/3 meses)",
      "Recurso de reposición: ante el mismo órgano (1 mes)",
      "Silencio administrativo: positivo (regla general) o negativo (excepciones)",
      "Notificación: obligatoria, electrónica preferente para personas jurídicas",
      "Archivo de documentos: sistema de archivo según normativa vigente",
    ],
  },
];

export default function ConsularView() {
  const [mode, setMode] = useState<"teoria" | "test">("teoria");

  return (
    <div>
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setMode("teoria")}
          className="flex-1 py-2.5 rounded-xl font-semibold text-sm transition-all"
          style={mode === "teoria" ? { background: "var(--blue)", color: "white" } : { background: "var(--bg2)", color: "var(--text2)" }}
        >
          📖 Teoría
        </button>
        <button
          onClick={() => setMode("test")}
          className="flex-1 py-2.5 rounded-xl font-semibold text-sm transition-all"
          style={mode === "test" ? { background: "var(--blue)", color: "white" } : { background: "var(--bg2)", color: "var(--text2)" }}
        >
          ✏️ Test
        </button>
      </div>

      {mode === "teoria" ? (
        <TemaView
          title="Función Consular"
          icon="🏛️"
          color="var(--blue2)"
          intro="Derecho consular, estructura de la red exterior española, funciones del Consulado General en São Paulo y legislación aplicable."
          blocks={blocks}
        />
      ) : (
        <Quiz
          questions={quizAdmin}
          title="Función Consular"
          color="var(--blue2)"
          icon="🏛️"
        />
      )}
    </div>
  );
}
