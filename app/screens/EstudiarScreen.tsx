"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Block = { heading: string; items: string[]; hl?: number[] };
type Topic = { id: string; icon: string; title: string; color: string; desc: string; blocks: Block[] };

function Hl({ children, type = "red" }: { children: React.ReactNode; type?: "red"|"gold"|"green"|"blue"|"purple" }) {
  return <mark className={`hl-${type}`}>{children}</mark>;
}

const topics: Topic[] = [
  {
    id:"convocatoria", icon:"📋", title:"La Convocatoria", color:"var(--red)", desc:"Bases, plazas y proceso selectivo",
    blocks:[
      { heading:"Datos de la convocatoria", items:[
        "Organismo: Consulado General de España en São Paulo",
        "Categoría: Auxiliar Administrativo — Personal Laboral Fijo",
        "Sistema: Concurso-Oposición (60% oposición + 40% concurso)",
        "Plazas convocadas: 1 plaza fija",
        "Pruebas: test cultura general + práctica informática + entrevista",
      ]},
      { heading:"Funciones del puesto", items:[
        "Atención al público y gestión de citas consulares",
        "Transcripción y tramitación de documentos oficiales",
        "Archivo y gestión documental de expedientes",
        "Gestión de correspondencia e comunicaciones",
        "Apoyo en el Registro Civil Consular",
        "Manejo de sistemas informáticos de la Administración (SIPRES)",
        "Colaboración con el jefe de sección",
        "Expedición de certificados y apoyo en pasaportes/visados",
      ]},
      { heading:"Requisitos mínimos", items:[
        "Bachillerato o título equivalente (mínimo exigido)",
        "No hallarse inhabilitado para el ejercicio de funciones públicas",
        "No padecer enfermedad que impida el ejercicio",
        "Dominio de español y portugués (lengua de trabajo)",
        "Residencia en Brasil — zona de la circunscripción consular",
        "Mayoría de edad al cierre del plazo de solicitudes",
      ]},
      { heading:"Consejo clave ⚠️", items:[
        "El test consta de 50 preguntas: 25 sobre España (en español) + 25 sobre Brasil (en portugués)",
        "Cada respuesta incorrecta resta 0,25 puntos — no dejes en blanco si no sabes",
        "La prueba práctica informática es ELIMINATORIA — domina Word y Excel",
        "La fase de concurso valora experiencia previa, formación adicional e idiomas",
        "Estudia diariamente al menos 1 hora: consistencia > intensidad",
      ]},
    ],
  },
  {
    id:"espana", icon:"🇪🇸", title:"España", color:"var(--red)", desc:"Geografía, historia, política y administración",
    blocks:[
      { heading:"Geografía física", items:[
        "Superficie: 505.990 km² — 4.º país más extenso de Europa",
        "Frontera con: Portugal, Francia, Andorra, Marruecos (Ceuta/Melilla) y Gibraltar",
        "Pico más alto: Teide (3.718 m) en Canarias — en Península: Mulhacén (3.478 m)",
        "Ríos: Tajo (más largo, 1.007 km), Ebro (mayor caudal íntegramente español), Duero, Guadiana, Guadalquivir",
        "Archipiélagos: Baleares (Mediterráneo) y Canarias (Atlántico)",
        "Territorio en África: Ceuta, Melilla, Islas Chafarinas, Alhucemas, Vélez de la Gomera",
      ]},
      { heading:"Historia clave", items:[
        "711: Invasión musulmana de la Península — inicio de la Reconquista",
        "1492: Fin de la Reconquista (caída de Granada) + llegada de Colón a América",
        "1812: Primera Constitución española — 'La Pepa' (Cádiz)",
        "1936-1939: Guerra Civil Española",
        "1975: Muerte de Francisco Franco — inicio de la Transición democrática",
        "1978: Constitución Española en referéndum (6 diciembre)",
        "1982: Ingreso en la OTAN",
        "1986: Adhesión a la CEE (Comunidad Económica Europea)",
        "2002: Adopción del euro como moneda oficial",
      ]},
      { heading:"Sistema político", items:[
        "Forma de gobierno: Monarquía parlamentaria constitucional",
        "Jefe de Estado: Rey Felipe VI (desde 19 junio 2014)",
        "Jefe de Gobierno: Presidente del Consejo de Ministros",
        "Parlamento: Cortes Generales (bicameral)",
        "Congreso de los Diputados: 350 escaños",
        "Senado: 266 senadores (208 elegidos + resto designados por CCAA)",
        "Tribunal Constitucional: supremo intérprete de la CE",
        "Tribunal Supremo: órgano jurisdiccional superior",
        "Defensor del Pueblo: comisionado para derechos fundamentales",
      ]},
      { heading:"Constitución 1978", items:[
        "Art. 1: Estado social y democrático de Derecho; monarquía parlamentaria",
        "Art. 14: Principio de igualdad ante la ley sin discriminación",
        "Art. 15-29: Derechos fundamentales y libertades públicas",
        "Art. 56: El Rey, Jefe del Estado, símbolo de unidad y permanencia",
        "Art. 97: El Gobierno dirige política interior y exterior",
        "Art. 103: La AP sirve con objetividad los intereses generales",
        "Título VIII (arts. 137-158): Organización territorial del Estado",
        "17 Comunidades Autónomas + 2 Ciudades Autónomas (Ceuta y Melilla)",
      ]},
      { heading:"Administración Pública", items:[
        "Principios constitucionales: eficacia, jerarquía, descentralización, coordinación (art. 103)",
        "Administración General del Estado (AGE): ministerios y organismos autónomos",
        "Administración Autonómica: 17 CC.AA. con gobierno y legislación propios",
        "Administración Local: 8.131 municipios, 50 provincias, cabildos insulares",
        "Ley 39/2015: Procedimiento Administrativo Común de las AAPP",
        "Ley 40/2015: Régimen Jurídico del Sector Público",
        "INAP: Instituto Nacional de Administración Pública",
        "Cuerpo General Auxiliar: escala de entrada a la AGE",
      ]},
      { heading:"Datos económicos", items:[
        "Moneda: Euro (€) — en circulación desde 1 enero 2002",
        "PIB: ~1,4 billones € — 4.ª economía de la eurozona",
        "Sectores clave: turismo (~12% PIB), automoción, agroalimentación, banca",
        "IBEX 35: índice bursátil de referencia de la Bolsa española",
        "Banco de España: banco central (integrado en el SEBC/BCE desde 1999)",
        "Ciudades principales: Madrid (cap.), Barcelona, Valencia, Sevilla, Zaragoza",
      ]},
    ],
  },
  {
    id:"brasil", icon:"🇧🇷", title:"Brasil", color:"var(--green)", desc:"Historia, política, São Paulo y economía",
    blocks:[
      { heading:"Geografía", items:[
        "Superficie: 8.515.767 km² — 5.º país más grande del mundo",
        "Frontera con todos los países sudamericanos excepto Chile y Ecuador",
        "Capital federal: Brasília (Distrito Federal) — fundada el 21 abril 1960",
        "Ciudad más poblada: São Paulo (+12 millones de habitantes en el municipio)",
        "Río Amazonas: más caudaloso del mundo — 20% del agua dulce que fluye a los océanos",
        "6 biomas: Amazonia, Cerrado, Mata Atlântica, Pantanal, Caatinga, Pampa",
        "26 estados + 1 Distrito Federal = 27 unidades federativas",
        "5.570 municipios en total",
      ]},
      { heading:"Estado de São Paulo", items:[
        "Área: 248.222 km² — capital São Paulo con +12,3M habitantes",
        "PIB del estado: ~35% del PIB nacional — el más rico de Brasil",
        "Puerto de Santos: mayor puerto de América Latina en movimiento de contenedores",
        "Aeropuerto de Guarulhos (GRU): mayor aeropuerto de Brasil y del hemisferio sur",
        "Comunidad española en SP: ~350.000 ciudadanos registrados en el consulado",
        "Consulado General de España: Av. Paulista, 1754, Bela Vista, São Paulo-SP",
        "Principales ciudades del estado: SP, Campinas, Santos, Ribeirão Preto, São José dos Campos",
      ]},
      { heading:"Historia", items:[
        "22 abril 1500: Descubrimiento por Pedro Álvares Cabral",
        "1808: Llegada de la Familia Real portuguesa — fuga de Napoleón",
        "7 septiembre 1822: Independencia — Dom Pedro I, 'Grito do Ipiranga' (São Paulo)",
        "13 mayo 1888: Ley Áurea — abolición de la esclavitud (Princesa Isabel)",
        "15 noviembre 1889: Proclamación de la República (Marechal Deodoro da Fonseca)",
        "1930-1945: Era Vargas — Estado Novo (régimen autoritario)",
        "21 abril 1960: Inauguración de Brasília como capital federal",
        "1964-1985: Régimen militar",
        "5 octubre 1988: Constitución Federal 'Cidadã' — redemocratización",
        "Julio 1994: Plan Real — estabilización económica (fin de hiperinflación)",
      ]},
      { heading:"Sistema político", items:[
        "República Federativa Presidencialista — Presidente: Jefe de Estado y Gobierno",
        "Mandato presidencial: 4 años, reelegible una vez",
        "Poder Legislativo: Congresso Nacional bicameral",
        "Câmara dos Deputados: 513 diputados (proporcional por estado, 4 años)",
        "Senado Federal: 81 senadores (3 por estado, mandato 8 años)",
        "STF: Supremo Tribunal Federal, 11 ministros — equivalente al TC español",
        "TCU: Tribunal de Contas da União — control externo del presupuesto federal",
        "Sufragio obligatorio para ciudadanos de 18-70 años, facultativo para 16-17 y +70",
      ]},
      { heading:"Economía", items:[
        "Moneda: Real (R$) — desde julio de 1994 (Plan Real)",
        "PIB: ~2 billones USD — mayor economía de América Latina",
        "BACEN: Banco Central do Brasil — independiente desde 2021",
        "IBGE: Instituto Brasileiro de Geografia e Estatística",
        "Receita Federal: Administración tributaria federal (equivale a la AEAT española)",
        "Reforma tributaria EC 132/2023: crea IBS y CBS, simplificando ICMS+ISS",
        "Sectores clave: agronegocio, minería, industria, servicios financieros",
        "B3 (Bovespa+BM&F): única bolsa de valores de Brasil, la mayor de AL",
        "Exportaciones líderes: soja, café, carne bovina, azúcar, petróleo",
      ]},
    ],
  },
  {
    id:"consular", icon:"🏛️", title:"Función Consular", color:"var(--blue)", desc:"Derecho consular, documentos y legislación",
    blocks:[
      { heading:"Derecho consular internacional", items:[
        "Convención de Viena sobre Relaciones Consulares (1963): marco jurídico principal",
        "Funciones: protección de nacionales, asistencia a buques/aeronaves, notaría, registro civil, pasaportes",
        "Inmunidad consular: funcional (limitada), no equiparable a la diplomática plena",
        "Exequátur: autorización del Estado receptor para ejercer funciones consulares",
        "Valija consular: inviolable — no puede ser retenida ni abierta por el Estado receptor",
        "Archivo consular: inviolable en todo momento y lugar (art. 33 CV1963)",
      ]},
      { heading:"Red consular española", items:[
        "MAEUEC: Ministerio de Asuntos Exteriores, UE y Cooperación — órgano rector",
        "Embajadas: representación diplomática; política ante el Estado receptor",
        "Consulados Generales: mayor rango; pueden supervisar consulados subordinados",
        "Consulados: representación consular en ciudades/regiones específicas",
        "Secciones Consulares: integradas en la Embajada",
        "Viceconsulados y Agencias Consulares: funciones limitadas y específicas",
      ]},
      { heading:"Consulado General en São Paulo", items:[
        "Dirección: Av. Paulista, 1754, Bela Vista — São Paulo-SP",
        "Circunscripción: Estado de São Paulo (~350.000 españoles registrados)",
        "Servicios: pasaportes, DNI consular, registro civil, notaría consular",
        "RELE / Registro de Matrícula: padrón de españoles residentes",
        "Asistencia consular: detenciones, hospitalizaciones, repatriaciones",
        "Visados: tramitación de visados Schengen para Brasil",
      ]},
      { heading:"Documentos consulares", items:[
        "Pasaporte: validez 5 años (menores de 30) o 10 años",
        "Tarjeta de Identidad Consular: identifica al español residente en el exterior",
        "CIC (Cert. de Inscripción Consular): acredita la residencia registrada en el RELE",
        "Registro Civil Consular: nacimientos, matrimonios, defunciones, adopciones",
        "Apostilla (Convenio La Haya 1961): autentica documentos para ~120 países",
        "Legalización consular: para países fuera del Convenio de La Haya",
        "Poderes notariales: autorizados por el cónsul con funciones notariales",
        "Fe de vida: certifica que el titular sigue con vida (uso para pensiones)",
      ]},
      { heading:"Legislación aplicable", items:[
        "Ley 2/2014: Acción y Servicio Exterior del Estado",
        "Ley 25/2014: Tratados y otros Acuerdos Internacionales de España",
        "Ley 20/2011: Registro Civil (en plena implementación)",
        "Ley 39/2015: Procedimiento Administrativo Común de las AAPP",
        "Ley 40/2015: Régimen Jurídico del Sector Público",
        "Ley 52/2007: Ley de Memoria Histórica (nacionalidad)",
        "RD 1553/2005: Expedición del Documento Nacional de Identidad",
      ]},
    ],
  },
  {
    id:"ofimatica", icon:"💻", title:"Ofimática", color:"var(--purple)", desc:"Word, Excel y gestión documental",
    blocks:[
      { heading:"Word — Atajos esenciales", items:[
        "Ctrl+S: Guardar | Ctrl+Z: Deshacer | Ctrl+Y: Rehacer",
        "Ctrl+C/X/V: Copiar / Cortar / Pegar",
        "Ctrl+A: Seleccionar todo | Ctrl+F: Buscar | Ctrl+H: Reemplazar",
        "Ctrl+B: Negrita | Ctrl+I: Cursiva | Ctrl+U: Subrayado",
        "F7: Revisión ortográfica | F12: Guardar como",
        "Ctrl+P: Imprimir | Ctrl+Enter: Salto de página",
      ]},
      { heading:"Word — Funciones para el examen", items:[
        "Estilos (Título 1, Título 2, Normal): estructura jerárquica del documento",
        "Tabla de contenido automática: Referencias > Tabla de contenido",
        "Encabezado y pie de página: Insertar > Encabezado/Pie de página",
        "Combinación de correspondencia: para cartas y emails personalizados en masa",
        "Control de cambios: Revisar > Control de cambios (revisión colaborativa)",
        "Secciones: para aplicar formato diferente en partes del documento",
        "Marca de agua: Diseño > Marca de agua",
        "Tablas: ordenar datos con clic en encabezado de columna",
      ]},
      { heading:"Excel — Funciones básicas", items:[
        "=SUMA(A1:A10): suma un rango de celdas",
        "=PROMEDIO(A1:A10): calcula la media aritmética",
        "=CONTAR(A1:A10): cuenta celdas con números",
        "=CONTARA(A1:A10): cuenta celdas no vacías",
        "=MAX() y =MIN(): máximo y mínimo de un rango",
        "=SI(condición, valor_si_V, valor_si_F): condicional",
        "=BUSCARV(valor, rango, col, 0): búsqueda vertical",
        "=CONCATENAR(A1,' ',B1): unir texto de varias celdas",
      ]},
      { heading:"Excel — Referencias y análisis", items:[
        "Referencia relativa: A1 — cambia al copiar la fórmula",
        "Referencia absoluta: $A$1 — no cambia al copiar",
        "Referencia mixta: $A1 (columna fija) | A$1 (fila fija)",
        "Formato condicional: resalta celdas según reglas visuales",
        "Filtros automáticos: Datos > Filtro — ordenar y filtrar listas",
        "Tablas dinámicas: Insertar > Tabla dinámica — análisis de datos",
        "Gráficos: Insertar > Gráfico — visualización de datos",
        "Inmovilizar paneles: Vista > Inmovilizar paneles",
      ]},
      { heading:"Gestión documental", items:[
        "Nomenclatura: AAAA-MM-DD_Descripción_v1.docx — estándar administrativo",
        "Sistemas de archivo: cronológico, temático, alfabético o por expediente",
        "Digitalización: mínimo 300 dpi para documentos administrativos",
        "Registro entrada/salida: número, fecha, remitente/destinatario, asunto",
        "Regla 3-2-1 de copias de seguridad: 3 copias, 2 formatos, 1 remota",
        "Metadatos: título, autor, fecha, palabras clave para localización",
      ]},
    ],
  },
];

function BlockItem({ text }: { text: string }) {
  const isWarning = text.startsWith("⚠️") || text.startsWith("ELIMINATORIA") || text.includes("ELIMINATORIA");
  const isDate = /^\d{4}/.test(text) || /\b\d{1,2} [a-z]+ \d{4}/i.test(text);
  const hasBullet = text.startsWith("Art.");

  return (
    <li className="flex gap-2 text-sm leading-relaxed">
      <span style={{ color: isWarning ? "var(--gold)" : "var(--red)", flexShrink:0 }}>
        {isWarning ? "⚠" : "·"}
      </span>
      <span>
        {isDate ? (
          <>
            <mark className="hl-gold">{text.split(":")[0]}</mark>
            {text.includes(":") ? `:${text.split(":").slice(1).join(":")}` : ""}
          </>
        ) : hasBullet ? (
          <>
            <mark className="hl-red">{text.split(":")[0]}</mark>
            {text.includes(":") ? `:${text.split(":").slice(1).join(":")}` : ""}
          </>
        ) : text}
      </span>
    </li>
  );
}

export default function EstudiarScreen() {
  const [active, setActive] = useState<string|null>(null);

  const topic = topics.find(t => t.id === active);

  if (topic) {
    return (
      <motion.div initial={{ opacity:0, x:20 }} animate={{ opacity:1, x:0 }}
        transition={{ duration:.2 }}>
        <div className="px-4">
          <button onClick={() => setActive(null)}
            className="flex items-center gap-2 mb-4 text-sm font-semibold"
            style={{ color:"var(--muted)" }}>
            ← Volver
          </button>

          <div className="glass p-4 mb-4" style={{ borderColor:`${topic.color}44` }}>
            <div className="text-3xl mb-1">{topic.icon}</div>
            <h2 className="text-xl font-black">{topic.title}</h2>
            <p className="text-xs mt-1" style={{ color:"var(--muted)" }}>{topic.desc}</p>
          </div>

          <div className="flex flex-col gap-3 pb-4">
            {topic.blocks.map((block, bi) => (
              <motion.div key={bi}
                initial={{ opacity:0, y:12 }} animate={{ opacity:1, y:0 }}
                transition={{ delay:bi*.07 }}
                className="glass p-4">
                <h3 className="font-bold text-xs uppercase tracking-widest mb-3"
                  style={{ color:topic.color }}>
                  {block.heading}
                </h3>
                <ul className="flex flex-col gap-1.5">
                  {block.items.map((item, ii) => <BlockItem key={ii} text={item}/>)}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} className="px-4">
      <h2 className="text-lg font-black mb-1 grad-text">Teoría</h2>
      <p className="text-xs mb-4" style={{ color:"var(--muted)" }}>
        Selecciona un tema para estudiar con highlights clave
      </p>

      <div className="flex flex-col gap-3 pb-4">
        {topics.map((t, i) => (
          <motion.button key={t.id}
            initial={{ opacity:0, y:12 }} animate={{ opacity:1, y:0 }}
            transition={{ delay:i*.07 }}
            whileTap={{ scale:.97 }}
            onClick={() => setActive(t.id)}
            className="glass p-4 text-left flex items-center gap-4"
            style={{ borderColor:`${t.color}33` }}>
            <div className="text-3xl">{t.icon}</div>
            <div className="flex-1">
              <div className="font-bold">{t.title}</div>
              <div className="text-xs mt-0.5" style={{ color:"var(--muted)" }}>{t.desc}</div>
            </div>
            <span style={{ color:t.color, fontSize:"1.2rem" }}>›</span>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}
