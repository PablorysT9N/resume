export const convocatoria = {
  titulo: "Auxiliar Administrativo",
  organismo: "Consulado General de España en São Paulo",
  tipo: "Personal Laboral Fijo",
  plazas: 1,
  sistema: "Concurso-Oposición",
  fecha: "2026",
  funciones: [
    "Atención al público y gestión de citas consulares",
    "Transcripción y tramitación de documentos oficiales",
    "Archivo y gestión documental",
    "Gestión de correspondencia y comunicaciones",
    "Apoyo en registro civil consular",
    "Manejo de sistemas informáticos de la Administración",
    "Colaboración con el jefe de la sección consular",
    "Expedición de certificados, pasaportes y visados (apoyo)",
  ],
  requisitos: [
    "Bachillerato o equivalente (mínimo)",
    "No hallarse inhabilitado para funciones públicas",
    "No padecer enfermedad que impida el ejercicio de funciones",
    "Dominio de español y portugués",
    "Residencia en Brasil (zona consular)",
    "Mayoría de edad",
  ],
  fases: [
    {
      nombre: "Fase de Oposición",
      peso: "60%",
      pruebas: [
        "Prueba 1: Cultura general España + Brasil (50 preguntas, tipo test)",
        "Prueba 2: Conocimiento de la Administración española y funcionamiento consular",
        "Prueba 3: Práctica informática (Word y Excel)",
        "Prueba 4 (opcional): Idiomas — traducción español/portugués",
      ],
    },
    {
      nombre: "Fase de Concurso",
      peso: "40%",
      pruebas: [
        "Experiencia laboral previa relacionada",
        "Formación académica adicional",
        "Entrevista personal con el tribunal",
        "Conocimiento de idiomas adicionales",
      ],
    },
  ],
};

export const quizEspana = [
  {
    q: "¿Cuántas Comunidades Autónomas tiene España?",
    opts: ["15", "17", "19", "21"],
    a: 1,
    exp: "España tiene 17 Comunidades Autónomas y 2 Ciudades Autónomas (Ceuta y Melilla).",
  },
  {
    q: "¿En qué año entró España en la Unión Europea?",
    opts: ["1982", "1985", "1986", "1992"],
    a: 2,
    exp: "España firmó el Tratado de Adhesión el 12 de junio de 1985 y la adhesión fue efectiva el 1 de enero de 1986.",
  },
  {
    q: "¿Qué artículo de la Constitución Española proclama el Estado social y democrático de Derecho?",
    opts: ["Art. 1", "Art. 14", "Art. 27", "Art. 103"],
    a: 0,
    exp: "El artículo 1.1 CE establece: 'España se constituye en un Estado social y democrático de Derecho'.",
  },
  {
    q: "¿Cuál es el río más largo de España?",
    opts: ["Ebro", "Tajo", "Duero", "Guadalquivir"],
    a: 1,
    exp: "El Tajo (1.007 km) es el río más largo de la Península Ibérica, aunque el Ebro es el de mayor caudal íntegramente español.",
  },
  {
    q: "¿Cuántos diputados tiene el Congreso de los Diputados?",
    opts: ["250", "300", "350", "400"],
    a: 2,
    exp: "El Congreso de los Diputados se compone de un mínimo de 300 y un máximo de 400 diputados; actualmente son 350.",
  },
  {
    q: "¿Qué órgano constitucional es el supremo intérprete de la Constitución?",
    opts: ["Tribunal Supremo", "Consejo de Estado", "Tribunal Constitucional", "Consejo General del Poder Judicial"],
    a: 2,
    exp: "El Tribunal Constitucional (art. 1 LOTC) es el supremo intérprete de la Constitución.",
  },
  {
    q: "¿Cuál es la montaña más alta de España?",
    opts: ["Mulhacén", "Teide", "Aneto", "Veleta"],
    a: 1,
    exp: "El Teide (3.718 m) en Tenerife, Canarias, es el punto más alto de España y de todo el Atlántico.",
  },
  {
    q: "¿En qué año se aprobó la Constitución Española vigente?",
    opts: ["1975", "1976", "1977", "1978"],
    a: 3,
    exp: "La Constitución Española fue aprobada en referéndum el 6 de diciembre de 1978 y promulgada el 27 de diciembre de 1978.",
  },
  {
    q: "¿Quién ostenta la jefatura del Estado en España?",
    opts: ["El Presidente del Gobierno", "El Rey", "El Presidente del Congreso", "El Presidente del Tribunal Constitucional"],
    a: 1,
    exp: "El Rey es el Jefe del Estado (art. 56 CE), símbolo de su unidad y permanencia.",
  },
  {
    q: "¿Cuántos senadores tiene el Senado español?",
    opts: ["208", "250", "265", "266"],
    a: 3,
    exp: "El Senado tiene 266 senadores: 208 elegidos por sufragio universal y el resto designados por las Comunidades Autónomas.",
  },
  {
    q: "¿Qué ley regula el Registro Civil en España?",
    opts: ["Ley 20/2011", "Ley 14/2003", "Ley Orgánica 4/2000", "Real Decreto 933/2021"],
    a: 0,
    exp: "La Ley 20/2011, de 21 de julio, del Registro Civil modernizó el sistema de registro civil en España.",
  },
  {
    q: "¿Cuál es el principal río de Andalucía?",
    opts: ["Tajo", "Guadiana", "Guadalquivir", "Segura"],
    a: 2,
    exp: "El Guadalquivir es el principal río de Andalucía, navegable hasta Sevilla y de gran importancia histórica.",
  },
];

export const quizBrasil = [
  {
    q: "¿Cuál es la capital federal de Brasil?",
    opts: ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador"],
    a: 2,
    exp: "Brasília es la capital federal de Brasil desde el 21 de abril de 1960, cuando sustituyó a Rio de Janeiro.",
  },
  {
    q: "¿Cuántos estados tiene la Federación brasileña?",
    opts: ["23", "25", "26", "27"],
    a: 2,
    exp: "Brasil tiene 26 estados y 1 Distrito Federal (Brasília), para un total de 27 unidades federativas.",
  },
  {
    q: "¿En qué año Brasil proclamó su independencia de Portugal?",
    opts: ["1808", "1815", "1822", "1889"],
    a: 2,
    exp: "El 7 de septiembre de 1822, Dom Pedro I proclamó la independencia de Brasil en el episodio conocido como el 'Grito do Ipiranga'.",
  },
  {
    q: "¿Qué río es el más caudaloso del mundo y atraviesa Brasil?",
    opts: ["Paraná", "São Francisco", "Amazonas", "Tocantins"],
    a: 2,
    exp: "El río Amazonas es el más caudaloso del mundo y la mayor parte de su cuenca está en Brasil.",
  },
  {
    q: "¿Cuál es el sistema de gobierno de Brasil?",
    opts: ["Monarquía constitucional", "República parlamentaria", "República presidencialista federal", "República semipresidencialista"],
    a: 2,
    exp: "Brasil es una República Federativa Presidencialista, donde el Presidente es jefe de Estado y de Gobierno.",
  },
  {
    q: "¿En qué año fue promulgada la Constitución Federal vigente de Brasil?",
    opts: ["1984", "1985", "1988", "1990"],
    a: 2,
    exp: "La Constitución Federal de Brasil fue promulgada el 5 de octubre de 1988, conocida como la 'Constituição Cidadã'.",
  },
  {
    q: "¿Cuál es el idioma oficial de Brasil?",
    opts: ["Español", "Portugués", "Portugués e inglés", "Portugués y español"],
    a: 1,
    exp: "El único idioma oficial de Brasil es el portugués, en su variante brasileña.",
  },
  {
    q: "¿Cuál es la ciudad más poblada de Brasil y de América del Sur?",
    opts: ["Rio de Janeiro", "Belo Horizonte", "Brasília", "São Paulo"],
    a: 3,
    exp: "São Paulo es la ciudad más poblada de Brasil y de América del Sur, con más de 12 millones de habitantes en el municipio.",
  },
  {
    q: "¿Qué moneda oficial usa Brasil?",
    opts: ["Cruzeiro", "Cruzado", "Real", "Peso"],
    a: 2,
    exp: "El Real (R$) es la moneda oficial de Brasil desde el Plan Real de julio de 1994.",
  },
  {
    q: "¿Cuántos poderes tiene la República Federativa de Brasil?",
    opts: ["2", "3", "4", "5"],
    a: 1,
    exp: "Brasil tiene 3 poderes: Ejecutivo (Presidente), Legislativo (Congreso Nacional) y Judicial (STF, STJ, etc.).",
  },
  {
    q: "¿Qué estado brasileño tiene la mayor extensión territorial?",
    opts: ["Pará", "Mato Grosso", "Amazonas", "Minas Gerais"],
    a: 2,
    exp: "El estado de Amazonas (1.559.146 km²) es el mayor de Brasil, seguido por Pará.",
  },
  {
    q: "¿Cuál es el mayor aeropuerto del estado de São Paulo?",
    opts: ["Congonhas", "Viracopos", "Guarulhos (GRU)", "Campo de Marte"],
    a: 2,
    exp: "El Aeropuerto Internacional de Guarulhos (GRU) - Governador André Franco Montoro, es el mayor aeropuerto de Brasil.",
  },
];

export const quizAdmin = [
  {
    q: "¿Qué ministerio tiene competencia en materia de Asuntos Exteriores en España?",
    opts: [
      "Ministerio de la Presidencia",
      "Ministerio de Asuntos Exteriores, Unión Europea y Cooperación",
      "Ministerio del Interior",
      "Ministerio de Justicia",
    ],
    a: 1,
    exp: "El MAEUEC (Ministerio de Asuntos Exteriores, Unión Europea y Cooperación) dirige la política exterior española.",
  },
  {
    q: "¿Qué diferencia a un Consulado General de un Consulado ordinario?",
    opts: [
      "El rango y la extensión de la circunscripción consular",
      "Las funciones que realiza",
      "El número de empleados",
      "La ciudad donde se ubica",
    ],
    a: 0,
    exp: "El Consulado General tiene mayor rango y suele cubrir una circunscripción más amplia; puede supervisar otros consulados.",
  },
  {
    q: "¿Qué convenio internacional regula las relaciones consulares entre Estados?",
    opts: [
      "Convenio de Nueva York (1958)",
      "Convenio de Ginebra (1961)",
      "Convención de Viena sobre Relaciones Consulares (1963)",
      "Convenio de La Haya (1970)",
    ],
    a: 2,
    exp: "La Convención de Viena sobre Relaciones Consulares de 1963 es el principal instrumento que regula las funciones consulares.",
  },
  {
    q: "¿Qué documento identificativo expiden los Consulados españoles en el exterior?",
    opts: [
      "Solo el pasaporte",
      "Solo el DNI",
      "Pasaporte y ciertas funciones de Registro Civil",
      "Pasaporte, tarjeta de identidad consular y certificados de registro",
    ],
    a: 3,
    exp: "Los consulados expiden pasaportes, Tarjetas de Identidad Consular (TARJETA CONSULAR) y gestionan el Registro Civil Consular.",
  },
  {
    q: "¿Qué es el RELE (Registro de Españoles en el Exterior)?",
    opts: [
      "Un registro de empresas españolas en el exterior",
      "El Padrón de españoles residentes en el extranjero gestionado por los consulados",
      "Un registro de tratados internacionales",
      "La red de escuelas españolas en el exterior",
    ],
    a: 1,
    exp: "El Registro de Matrícula (RELE) es el padrón consular donde se inscriben los españoles residentes en el extranjero.",
  },
  {
    q: "¿Qué es la 'apostilla' en el ámbito consular?",
    opts: [
      "Una nota al margen de un documento",
      "La certificación que autentica documentos para uso en países firmantes del Convenio de La Haya (1961)",
      "Un sello de validación consular",
      "Un visado especial",
    ],
    a: 1,
    exp: "La apostilla es una certificación emitida bajo el Convenio de La Haya de 1961 que autentica documentos públicos para uso internacional.",
  },
  {
    q: "¿Cuál es la función principal del Registro Civil Consular?",
    opts: [
      "Registrar empresas españolas",
      "Inscribir los hechos y actos del estado civil de los españoles en el extranjero",
      "Controlar la entrada de extranjeros en España",
      "Gestionar visados de trabajo",
    ],
    a: 1,
    exp: "El Registro Civil Consular inscribe nacimientos, matrimonios, defunciones y otros actos civiles de los españoles en el exterior.",
  },
  {
    q: "¿Qué ley regula el Estatuto del Personal al Servicio del Exterior del Estado?",
    opts: ["Ley 2/2014", "Ley 17/2015", "Ley 2/2014 de la AESC", "Ley Orgánica 2/1986"],
    a: 0,
    exp: "La Ley 2/2014, de 25 de marzo, de la Acción y del Servicio Exterior del Estado regula el personal en el exterior.",
  },
  {
    q: "¿Qué es el SIPRES en el contexto consular español?",
    opts: [
      "Sistema de Información de Prestaciones",
      "Sistema Informático de Procesos del Servicio Exterior",
      "Servicio de Información Preventiva",
      "Secretaría de Información del Parlamento Europeo",
    ],
    a: 1,
    exp: "SIPRES (Sistema de Información del Servicio Exterior) es la plataforma informática de gestión consular de la Administración española.",
  },
  {
    q: "¿En cuántas categorías se clasifica el personal laboral de un consulado español?",
    opts: ["2", "3", "4", "5"],
    a: 2,
    exp: "El personal laboral consular suele clasificarse en: Auxiliar, Oficial Administrativo, Técnico y Jefe de Sección/Canciller.",
  },
];

export const quizOfimatica = [
  {
    q: "¿Cuál es el atajo de teclado para guardar un documento en Word?",
    opts: ["Ctrl+G", "Ctrl+S", "Ctrl+A", "Alt+S"],
    a: 1,
    exp: "Ctrl+S (Save) guarda el documento actual en Word. En español el menú dice 'Guardar' pero el atajo es Ctrl+S.",
  },
  {
    q: "En Excel, ¿qué función suma automáticamente un rango de celdas?",
    opts: ["=SUMAR()", "=TOTAL()", "=SUMA()", "=AGREGAR()"],
    a: 2,
    exp: "La función =SUMA(rango) suma todos los valores de un rango. Ejemplo: =SUMA(A1:A10).",
  },
  {
    q: "¿Qué significa en Excel la referencia $A$1?",
    opts: ["Referencia a hoja externa", "Referencia relativa", "Referencia absoluta", "Referencia mixta"],
    a: 2,
    exp: "El signo $ bloquea la referencia. $A$1 es una referencia absoluta: no cambia al copiar la fórmula.",
  },
  {
    q: "En Word, ¿qué función permite crear documentos personalizados con datos de una lista?",
    opts: ["Tablas dinámicas", "Combinación de correspondencia", "Formularios", "Macros"],
    a: 1,
    exp: "La Combinación de Correspondencia (Mailings) permite crear cartas, etiquetas o emails personalizados con datos de una lista/base de datos.",
  },
  {
    q: "¿Cuál es el atajo para insertar una nueva fila en Excel?",
    opts: ["Ctrl+R", "Ctrl+Shift++", "Alt+I+F", "Ctrl+N"],
    a: 1,
    exp: "Ctrl+Shift++ (más) inserta celdas, filas o columnas en Excel. También se puede desde el menú contextual (clic derecho).",
  },
  {
    q: "En Excel, la función =SI(A1>10,\"Mayor\",\"Menor\") devuelve:",
    opts: [
      "Error si A1 no tiene número",
      "\"Mayor\" si A1 es mayor que 10, \"Menor\" en caso contrario",
      "\"Menor\" si A1 es mayor que 10",
      "El valor de A1",
    ],
    a: 1,
    exp: "La función =SI(condición, valor_si_verdadero, valor_si_falso) evalúa la condición y devuelve el primer valor si es TRUE, el segundo si es FALSE.",
  },
  {
    q: "¿Cuál es el formato de archivo nativo de Word 2016 en adelante?",
    opts: [".doc", ".docx", ".rtf", ".odt"],
    a: 1,
    exp: ".docx es el formato nativo de Word desde la versión 2007. Utiliza el estándar Open XML.",
  },
  {
    q: "En Word, ¿cómo se activa la revisión ortográfica manual?",
    opts: ["F5", "F7", "Ctrl+P", "Alt+O"],
    a: 1,
    exp: "La tecla F7 activa la revisión ortográfica y gramatical en Word.",
  },
];

export const flashcards = [
  { front: "¿Qué es el Registro Civil Consular?", back: "Registro que inscribe los hechos del estado civil (nacimientos, matrimonios, defunciones) de los españoles residentes en la circunscripción consular." },
  { front: "Convención de Viena sobre Relaciones Consulares", back: "Tratado internacional de 1963 que codifica el derecho consular internacional, regulando las funciones, privilegios e inmunidades consulares." },
  { front: "¿Qué es la Tarjeta de Identidad Consular?", back: "Documento identificativo que expiden los consulados españoles a los españoles residentes en el exterior, inscritos en el Registro de Matrícula." },
  { front: "Plano Real — Brasil", back: "Plan económico implementado en julio de 1994 que estabilizó la economía brasileña y creó el Real (R$), fin de la hiperinflación." },
  { front: "¿Quién preside el Consejo de Ministros en España?", back: "El Presidente del Gobierno, que es el jefe del ejecutivo y dirige la acción del Gobierno (art. 98 CE)." },
  { front: "Estado de São Paulo", back: "El estado más rico de Brasil (PIB ~35% del total). Capital: São Paulo. Ocupa 248.222 km². Más de 46 millones de habitantes." },
  { front: "¿Qué es la Apostilla de La Haya?", back: "Certificación que autentica la firma y sello de documentos públicos para ser reconocidos en países firmantes del Convenio de La Haya de 1961." },
  { front: "Cortes Generales de España", back: "Parlamento bicameral compuesto por el Congreso de los Diputados (350 diputados) y el Senado (266 senadores). Representan al pueblo español." },
  { front: "IBGE — Brasil", back: "Instituto Brasileiro de Geografia e Estatística. Órgano público responsable del censo, estadísticas e informaciones geográficas de Brasil." },
  { front: "¿Qué son los Acuerdos de Sede?", back: "Acuerdos bilaterales entre España y el Estado receptor que regulan las condiciones de funcionamiento de una representación diplomática o consular." },
  { front: "Sistema Tributario de Brasil", back: "Uno de los más complejos del mundo. Impuestos federales (IR, IPI, COFINS), estaduales (ICMS) y municipales (ISS, IPTU). Reforma tributaria en curso (EC 132/2023)." },
  { front: "Art. 14 Constitución Española", back: "Principio de igualdad: 'Los españoles son iguales ante la ley, sin que pueda prevalecer discriminación alguna por razón de nacimiento, raza, sexo, religión, opinión o cualquier otra condición'." },
  { front: "¿Qué es el MAEUEC?", back: "Ministerio de Asuntos Exteriores, Unión Europea y Cooperación. Máximo órgano ejecutivo de la política exterior española." },
  { front: "División política de Brasil", back: "República Federativa con 26 estados + Distrito Federal, 5.570 municipios. Sistema presidencialista. Congreso Nacional: Câmara dos Deputados + Senado Federal." },
];

export const temas = [
  {
    id: "convocatoria",
    icon: "📋",
    title: "La Convocatoria",
    color: "var(--red)",
    desc: "Plazas, requisitos, fases y fechas clave",
  },
  {
    id: "espana",
    icon: "🇪🇸",
    title: "España",
    color: "#c0392b",
    desc: "Geografía, historia, constitución, administración",
  },
  {
    id: "brasil",
    icon: "🇧🇷",
    title: "Brasil",
    color: "#27ae60",
    desc: "Geografía, historia, sistema político y económico",
  },
  {
    id: "consular",
    icon: "🏛️",
    title: "Función Consular",
    color: "var(--blue)",
    desc: "Derecho consular, funciones, documentos",
  },
  {
    id: "ofimatica",
    icon: "💻",
    title: "Ofimática",
    color: "var(--purple)",
    desc: "Word, Excel y herramientas Office",
  },
  {
    id: "flashcards",
    icon: "🗂️",
    title: "Tarjetas de Estudio",
    color: "var(--yellow2)",
    desc: "Repasa conceptos clave con flash cards",
  },
];
