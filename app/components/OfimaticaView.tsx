"use client";
import { useState } from "react";
import TemaView from "./TemaView";
import Quiz from "./Quiz";
import { quizOfimatica } from "../data/content";

const blocks = [
  {
    heading: "Microsoft Word — Atajos Esenciales",
    items: [
      "Ctrl+S: Guardar · Ctrl+Z: Deshacer · Ctrl+Y: Rehacer",
      "Ctrl+C: Copiar · Ctrl+X: Cortar · Ctrl+V: Pegar",
      "Ctrl+A: Seleccionar todo · Ctrl+F: Buscar · Ctrl+H: Reemplazar",
      "Ctrl+B: Negrita · Ctrl+I: Cursiva · Ctrl+U: Subrayado",
      "Ctrl+P: Imprimir · Ctrl+N: Nuevo documento",
      "F7: Revisar ortografía · F12: Guardar como",
      "Ctrl+Enter: Insertar salto de página",
      "Alt+F4: Cerrar programa",
    ],
  },
  {
    heading: "Word — Funciones Clave para el Examen",
    items: [
      "Estilos: Título 1, Título 2, Normal — para estructurar documentos",
      "Tabla de contenidos automática: Referencia > Tabla de contenido",
      "Encabezado y pie de página: Insertar > Encabezado / Pie de página",
      "Combinación de correspondencia: Correspondencia > Iniciar combinación",
      "Tablas: Insertar > Tabla; ordenar datos con clic en encabezado de columna",
      "Control de cambios: Revisar > Control de cambios (muy usado en entornos administrativos)",
      "Secciones: para aplicar formato diferente en partes del documento",
      "Marca de agua y fondo de página: Diseño > Marca de agua",
    ],
  },
  {
    heading: "Microsoft Excel — Funciones Básicas",
    items: [
      "=SUMA(A1:A10): suma un rango de celdas",
      "=PROMEDIO(A1:A10): calcula la media",
      "=CONTAR(A1:A10): cuenta celdas con números",
      "=CONTARA(A1:A10): cuenta celdas no vacías",
      "=MAX(A1:A10) y =MIN(A1:A10): máximo y mínimo",
      "=SI(condición, valor_si_true, valor_si_false): función condicional",
      "=CONCATENAR(A1,\" \",B1) o =A1&\" \"&B1: unir texto",
      "=BUSCARV(valor, rango, columna, 0): buscar verticalmente",
    ],
  },
  {
    heading: "Excel — Referencias y Formato",
    items: [
      "Referencia relativa: A1 (cambia al copiar)",
      "Referencia absoluta: $A$1 (no cambia al copiar)",
      "Referencia mixta: $A1 (columna fija) o A$1 (fila fija)",
      "Formato condicional: resalta celdas según reglas (valores, colores)",
      "Filtros automáticos: Datos > Filtro — para ordenar y filtrar listas",
      "Tablas dinámicas: Insertar > Tabla dinámica — análisis de datos",
      "Gráficos: Insertar > Gráfico — visualización de datos",
      "Inmovilizar paneles: Vista > Inmovilizar — filas/columnas visibles al desplazar",
    ],
  },
  {
    heading: "Correo Electrónico Profesional",
    items: [
      "Asunto: claro, concreto y descriptivo (máximo 60 caracteres)",
      "Saludo formal: 'Estimado/a Sr./Sra.' o 'A quien corresponda'",
      "Párrafo inicial: motivo del correo en la primera frase",
      "Cuerpo: párrafos cortos, lenguaje claro y directo",
      "Cierre: 'En espera de su respuesta, quedo a su disposición'",
      "Firma profesional: nombre, cargo, teléfono, dirección institucional",
      "Archivos adjuntos: nombrarlos descriptivamente (NO 'documento1.pdf')",
      "CC/BCC: CC para información, BCC para privacidad de destinatarios",
    ],
  },
  {
    heading: "Gestión Documental",
    items: [
      "Sistema de archivo: cronológico, temático, alfabético o por expediente",
      "Nomenclatura de archivos: AAAA-MM-DD_Descripción_v1.docx",
      "Metadatos: título, autor, fecha, palabras clave — para localización",
      "Digitalización: escaneo de documentos, resolución mínima 300 dpi",
      "Registro de entrada/salida: número, fecha, remitente/destinatario, asunto",
      "Gestión de citas: calendario compartido (Outlook, Google Calendar)",
      "Base de datos Access o Excel: para gestión de listados y expedientes",
      "Copia de seguridad: regla 3-2-1 (3 copias, 2 formatos, 1 remota)",
    ],
  },
];

export default function OfimaticaView() {
  const [mode, setMode] = useState<"teoria" | "test">("teoria");

  return (
    <div>
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setMode("teoria")}
          className="flex-1 py-2.5 rounded-xl font-semibold text-sm transition-all"
          style={mode === "teoria" ? { background: "var(--purple)", color: "white" } : { background: "var(--bg2)", color: "var(--text2)" }}
        >
          📖 Teoría
        </button>
        <button
          onClick={() => setMode("test")}
          className="flex-1 py-2.5 rounded-xl font-semibold text-sm transition-all"
          style={mode === "test" ? { background: "var(--purple)", color: "white" } : { background: "var(--bg2)", color: "var(--text2)" }}
        >
          ✏️ Test
        </button>
      </div>

      {mode === "teoria" ? (
        <TemaView
          title="Ofimática"
          icon="💻"
          color="var(--purple2)"
          intro="Word, Excel, correo electrónico y gestión documental. La prueba práctica es eliminatoria — domina los atajos y funciones clave."
          blocks={blocks}
        />
      ) : (
        <Quiz
          questions={quizOfimatica}
          title="Ofimática"
          color="var(--purple2)"
          icon="💻"
        />
      )}
    </div>
  );
}
