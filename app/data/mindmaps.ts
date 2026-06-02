export type MMNode = {
  id: string;
  label: string;
  sub?: string;
  x: number;
  y: number;
  r: number;               // radius of node circle
  color: string;
  type: "root"|"branch"|"leaf";
  parentId?: string;
  detail?: string;
};

export type MindMapDef = {
  id: string;
  title: string;
  icon: string;
  w: number;
  h: number;
  nodes: MMNode[];
};

/* ── Helper ─────────────────────────────────────────── */
const geo = "#d97706", his = "#dc2626", pol = "#2563eb", adm = "#7c3aed";
const bGeo = "#059669", bHis = "#dc2626", bPol = "#2563eb", bEco = "#d97706";
const cDoc = "#059669", cDer = "#7c3aed", cRed = "#dc2626", cProc = "#2563eb";

/* ═══════════════════════════════════════════════════════
   ESPAÑA  (750 × 680)
═══════════════════════════════════════════════════════ */
export const espanaMM: MindMapDef = {
  id: "espana", title: "🇪🇸 España", icon: "🇪🇸", w: 750, h: 680,
  nodes: [
    /* Root */
    { id:"r", label:"ESPAÑA", x:375, y:340, r:44, color:"#f1f5f9", type:"root",
      detail:"Estado social y democrático de Derecho. Monarquía parlamentaria constitucional. Capital: Madrid." },

    /* Branch: Geografía */
    { id:"geo", label:"Geografía", x:375, y:120, r:32, color:geo, type:"branch", parentId:"r",
      detail:"Superficie de 505.990 km². 4.º país más extenso de Europa. Frontera con Portugal, Francia, Andorra, Marruecos y Gibraltar." },
    { id:"g1", label:"505.990 km²", x:175, y:38, r:22, color:geo, type:"leaf", parentId:"geo",
      detail:"España ocupa el 4.º lugar en extensión de Europa. Incluye Península, Baleares, Canarias, Ceuta y Melilla." },
    { id:"g2", label:"Teide 3.718m", x:375, y:24, r:22, color:geo, type:"leaf", parentId:"geo",
      detail:"El Teide (Tenerife, Canarias) es el pico más alto de España y de todo el Atlántico. En la Península: Mulhacén (3.478m)." },
    { id:"g3", label:"17 CCAA", x:575, y:38, r:22, color:geo, type:"leaf", parentId:"geo",
      detail:"17 Comunidades Autónomas + 2 Ciudades Autónomas (Ceuta y Melilla). Cada CCAA tiene su Estatuto de Autonomía." },
    { id:"g4", label:"Río Tajo", x:165, y:120, r:22, color:geo, type:"leaf", parentId:"geo",
      detail:"El Tajo (1.007 km) es el río más largo de la Península Ibérica. Nace en Teruel y desemboca en Lisboa." },
    { id:"g5", label:"Canarias+Baleares", x:590, y:120, r:22, color:geo, type:"leaf", parentId:"geo",
      detail:"Dos archipiélagos: Baleares (Mediterráneo) y Canarias (Atlántico). Canarias también es región ultraperiférica de la UE." },

    /* Branch: Historia */
    { id:"his", label:"Historia", x:590, y:340, r:32, color:his, type:"branch", parentId:"r",
      detail:"De la Hispania romana a la España moderna. Reconquista, descubrimiento de América, y transición democrática." },
    { id:"h1", label:"711 – Invasión árabe", x:682, y:198, r:22, color:his, type:"leaf", parentId:"his",
      detail:"En 711 los moros cruzaron el Estrecho de Gibraltar. La Reconquista duró hasta 1492, cuando cayó Granada." },
    { id:"h2", label:"1492 – América", x:714, y:340, r:22, color:his, type:"leaf", parentId:"his",
      detail:"El 12 octubre 1492, Cristóbal Colón llegó a América. Ese mismo año también cayó el reino nazarí de Granada." },
    { id:"h3", label:"1978 – Constitución", x:682, y:482, r:22, color:his, type:"leaf", parentId:"his",
      detail:"La CE fue aprobada en referéndum el 6 diciembre 1978. Cierre de la Transición democrática tras la muerte de Franco (1975)." },
    { id:"h4", label:"1986 – UE", x:620, y:542, r:22, color:his, type:"leaf", parentId:"his",
      detail:"España ingresó en la CEE el 1 enero 1986. En 2002 adoptó el euro. Es miembro fundador de la OTAN desde 1982." },

    /* Branch: Política */
    { id:"pol", label:"Política", x:375, y:558, r:32, color:pol, type:"branch", parentId:"r",
      detail:"Monarquía parlamentaria. El Rey es Jefe del Estado. El Presidente del Gobierno dirige el ejecutivo." },
    { id:"p1", label:"Rey Felipe VI", x:168, y:630, r:22, color:pol, type:"leaf", parentId:"pol",
      detail:"Felipe VI (desde 19 jun. 2014) es el Jefe del Estado, símbolo de unidad y permanencia (art. 56 CE)." },
    { id:"p2", label:"Congreso 350", x:375, y:648, r:22, color:pol, type:"leaf", parentId:"pol",
      detail:"El Congreso de los Diputados tiene 350 miembros. El Senado tiene 266 senadores. Juntos forman las Cortes Generales." },
    { id:"p3", label:"Tribunal Constitucional", x:582, y:630, r:22, color:pol, type:"leaf", parentId:"pol",
      detail:"El TC es el supremo intérprete de la CE (art. 1 LOTC). Sus 12 magistrados son nombrados por el Rey a propuesta de Cortes, Gobierno y CGPJ." },

    /* Branch: Administración */
    { id:"adm", label:"Admón. Pública", x:160, y:340, r:32, color:adm, type:"branch", parentId:"r",
      detail:"La AP sirve con objetividad los intereses generales (art. 103 CE). Principios: eficacia, jerarquía, descentralización, coordinación." },
    { id:"a1", label:"AGE", x:68, y:198, r:22, color:adm, type:"leaf", parentId:"adm",
      detail:"Administración General del Estado: ministerios, secretarías de Estado y organismos autónomos. Ley 40/2015." },
    { id:"a2", label:"Autonómica", x:36, y:340, r:22, color:adm, type:"leaf", parentId:"adm",
      detail:"17 Gobiernos Autonómicos con competencias propias según sus Estatutos. Principio de autonomía y solidaridad." },
    { id:"a3", label:"Local", x:68, y:482, r:22, color:adm, type:"leaf", parentId:"adm",
      detail:"8.131 municipios, 50 provincias, cabildos/consejos insulares. Ley 7/1985 Reguladora de las Bases del Régimen Local." },
    { id:"a4", label:"Ley 39/2015", x:130, y:542, r:22, color:adm, type:"leaf", parentId:"adm",
      detail:"Ley 39/2015 de Procedimiento Administrativo Común. Regula la relación entre ciudadanos y AAPP. Sede electrónica obligatoria." },
  ],
};

/* ═══════════════════════════════════════════════════════
   BRASIL  (750 × 680)
═══════════════════════════════════════════════════════ */
export const brasilMM: MindMapDef = {
  id: "brasil", title: "🇧🇷 Brasil", icon: "🇧🇷", w: 750, h: 680,
  nodes: [
    /* Root */
    { id:"r", label:"BRASIL", x:375, y:340, r:44, color:"#f1f5f9", type:"root",
      detail:"República Federativa Presidencialista. 5.º país más grande del mundo. Idioma: portugués. Capital: Brasília." },

    /* Branch: Geografía */
    { id:"geo", label:"Geografía", x:375, y:120, r:32, color:bGeo, type:"branch", parentId:"r",
      detail:"8.515.767 km². Frontera con todos los países sudamericanos salvo Chile y Ecuador. 26 estados + DF." },
    { id:"g1", label:"8,5M km²", x:175, y:38, r:22, color:bGeo, type:"leaf", parentId:"geo",
      detail:"Brasil ocupa el 5.º lugar mundial en extensión, detrás de Rusia, Canadá, China y EEUU." },
    { id:"g2", label:"Río Amazonas", x:375, y:24, r:22, color:bGeo, type:"leaf", parentId:"geo",
      detail:"El Amazonas es el río más caudaloso del mundo. Aporta el 20% del agua dulce que desemboca en océanos." },
    { id:"g3", label:"26 Est. + DF", x:575, y:38, r:22, color:bGeo, type:"leaf", parentId:"geo",
      detail:"26 estados + Distrito Federal (Brasília). El estado más grande es Amazonas (1,56M km²); el menor, Sergipe." },
    { id:"g4", label:"São Paulo Estado", x:165, y:120, r:22, color:bGeo, type:"leaf", parentId:"geo",
      detail:"248.222 km², más de 46M hab. Capital: São Paulo. PIB: ~35% del total nacional. Puerto de Santos: mayor de AL." },
    { id:"g5", label:"Biomas", x:590, y:120, r:22, color:bGeo, type:"leaf", parentId:"geo",
      detail:"6 biomas: Amazonia (floresta tropical), Cerrado, Mata Atlântica, Pantanal, Caatinga y Pampa." },

    /* Branch: Historia */
    { id:"his", label:"Historia", x:590, y:340, r:32, color:bHis, type:"branch", parentId:"r",
      detail:"De la colonización portuguesa a la redemocratización de 1988." },
    { id:"h1", label:"1500 – Cabral", x:682, y:198, r:22, color:bHis, type:"leaf", parentId:"his",
      detail:"El 22 abril 1500, Pedro Álvares Cabral llegó a la costa de Brasil. Inicio de la colonización portuguesa." },
    { id:"h2", label:"1822 – Independencia", x:714, y:340, r:22, color:bHis, type:"leaf", parentId:"his",
      detail:"El 7 sept. 1822, Dom Pedro I proclamó la independencia en el 'Grito do Ipiranga', en São Paulo." },
    { id:"h3", label:"1888 – Lei Áurea", x:682, y:482, r:22, color:bHis, type:"leaf", parentId:"his",
      detail:"La Ley Áurea (13 mayo 1888), firmada por la Princesa Isabel, abolió la esclavitud en Brasil." },
    { id:"h4", label:"1985 – Redemocrat.", x:620, y:542, r:22, color:bHis, type:"leaf", parentId:"his",
      detail:"Fin del régimen militar (1964-1985). Tancredo Neves fue el primer presidente civil. La CE de 1988 consolidó la democracia." },

    /* Branch: Política */
    { id:"pol", label:"Política", x:375, y:558, r:32, color:bPol, type:"branch", parentId:"r",
      detail:"República Federativa Presidencialista. El Presidente es Jefe de Estado y de Gobierno. Voto obligatorio." },
    { id:"p1", label:"Presidente 4 años", x:168, y:630, r:22, color:bPol, type:"leaf", parentId:"pol",
      detail:"El Presidente es elegido por sufragio directo para un mandato de 4 años, reelegible una vez. Sufragio obligatorio 18-70 años." },
    { id:"p2", label:"Congresso Nacional", x:375, y:648, r:22, color:bPol, type:"leaf", parentId:"pol",
      detail:"Câmara dos Deputados (513 diputados, 4 años) + Senado Federal (81 senadores, 8 años, 3 por estado)." },
    { id:"p3", label:"STF", x:582, y:630, r:22, color:bPol, type:"leaf", parentId:"pol",
      detail:"Supremo Tribunal Federal: 11 ministros nombrados por el Presidente. Máximo órgano judicial de Brasil; equivale al TC español." },

    /* Branch: Economía */
    { id:"eco", label:"Economía", x:160, y:340, r:32, color:bEco, type:"branch", parentId:"r",
      detail:"Mayor economía de América Latina. PIB ~2 billones USD. Reforma tributaria en curso (EC 132/2023)." },
    { id:"e1", label:"Real – 1994", x:68, y:198, r:22, color:bEco, type:"leaf", parentId:"eco",
      detail:"El Plan Real (julio 1994) creó el Real (R$) y acabó con la hiperinflación. BACEN independiente desde 2021." },
    { id:"e2", label:"Agronegocio", x:36, y:340, r:22, color:bEco, type:"leaf", parentId:"eco",
      detail:"Brasil es líder mundial en exportación de soja, café, carne bovina, azúcar y zumo de naranja." },
    { id:"e3", label:"B3 – Bolsa SP", x:68, y:482, r:22, color:bEco, type:"leaf", parentId:"eco",
      detail:"B3 (antiga Bovespa) en São Paulo es la única bolsa de valores de Brasil y la mayor de América Latina." },
    { id:"e4", label:"Reforma Tributária", x:130, y:542, r:22, color:bEco, type:"leaf", parentId:"eco",
      detail:"EC 132/2023: simplificación fiscal con creación del IBS (equivalente al IVA) y CBS. Mayor reforma tributaria en 50 años." },
  ],
};

/* ═══════════════════════════════════════════════════════
   FUNCIÓN CONSULAR  (750 × 680)
═══════════════════════════════════════════════════════ */
export const consularMM: MindMapDef = {
  id: "consular", title: "🏛️ Función Consular", icon: "🏛️", w: 750, h: 680,
  nodes: [
    { id:"r", label:"FUNCIÓN\nCONSULAR", x:375, y:340, r:44, color:"#f1f5f9", type:"root",
      detail:"El consulado protege los intereses del Estado que lo envía y de sus nacionales en el Estado receptor (CV 1963)." },

    /* Documentos */
    { id:"doc", label:"Documentos", x:375, y:120, r:32, color:cDoc, type:"branch", parentId:"r",
      detail:"El consulado expide y gestiona documentos oficiales para los ciudadanos españoles en el exterior." },
    { id:"d1", label:"Pasaporte", x:175, y:38, r:22, color:cDoc, type:"leaf", parentId:"doc",
      detail:"Documento de viaje internacional. Validez: 5 años (menores de 30) o 10 años. Tramitado en el Consulado." },
    { id:"d2", label:"Apostilla", x:375, y:24, r:22, color:cDoc, type:"leaf", parentId:"doc",
      detail:"Certificación del Convenio de La Haya 1961 que autentica la firma en documentos públicos para uso en países signatarios." },
    { id:"d3", label:"RELE / Matrícula", x:575, y:38, r:22, color:cDoc, type:"leaf", parentId:"doc",
      detail:"Registro de Matrícula (RELE): padrón de españoles residentes en el exterior. Necesario para gestiones consulares." },
    { id:"d4", label:"Fe de vida", x:165, y:120, r:22, color:cDoc, type:"leaf", parentId:"doc",
      detail:"Certificación consular que acredita que el titular está vivo. Usada principalmente para cobro de pensiones." },
    { id:"d5", label:"Reg. Civil Consular", x:590, y:120, r:22, color:cDoc, type:"leaf", parentId:"doc",
      detail:"El RCC inscribe nacimientos, matrimonios, defunciones y adopciones de españoles en el extranjero." },

    /* Derecho consular */
    { id:"der", label:"Derecho Consular", x:590, y:340, r:32, color:cDer, type:"branch", parentId:"r",
      detail:"Marco jurídico internacional que regula la actividad consular." },
    { id:"dr1", label:"Conv. Viena 1963", x:682, y:198, r:22, color:cDer, type:"leaf", parentId:"der",
      detail:"Convención de Viena sobre Relaciones Consulares (1963): principal instrumento del derecho consular internacional." },
    { id:"dr2", label:"Exequátur", x:714, y:340, r:22, color:cDer, type:"leaf", parentId:"der",
      detail:"Autorización del Estado receptor para que el cónsul ejerza sus funciones en su territorio." },
    { id:"dr3", label:"Inmunidad consular", x:682, y:482, r:22, color:cDer, type:"leaf", parentId:"der",
      detail:"Los cónsules tienen inmunidad funcional (por actos oficiales), no la plena inmunidad diplomática." },
    { id:"dr4", label:"Valija consular", x:620, y:542, r:22, color:cDer, type:"leaf", parentId:"der",
      detail:"La valija consular es inviolable: no puede ser retenida ni abierta por el Estado receptor (art. 35 CV1963)." },

    /* Red exterior */
    { id:"red", label:"Red Exterior", x:375, y:558, r:32, color:cRed, type:"branch", parentId:"r",
      detail:"España cuenta con una extensa red exterior de embajadas, consulados generales, consulados y secciones consulares." },
    { id:"r1", label:"Embajadas", x:168, y:630, r:22, color:cRed, type:"leaf", parentId:"red",
      detail:"Representación diplomática del Estado. El embajador es el representante personal del Rey/Estado." },
    { id:"r2", label:"Cdo. Gral. SP", x:375, y:648, r:22, color:cRed, type:"leaf", parentId:"red",
      detail:"Consulado General de España en São Paulo: Av. Paulista, 1754. Circunscripción: Estado de SP (~350.000 españoles)." },
    { id:"r3", label:"MAEUEC", x:582, y:630, r:22, color:cRed, type:"leaf", parentId:"red",
      detail:"Ministerio de Asuntos Exteriores, Unión Europea y Cooperación: órgano rector de toda la política exterior española." },

    /* Procedimiento */
    { id:"proc", label:"Procedimiento", x:160, y:340, r:32, color:cProc, type:"branch", parentId:"r",
      detail:"El procedimiento administrativo consular sigue los principios de la Ley 39/2015 y la normativa consular específica." },
    { id:"p1", label:"Ley 2/2014", x:68, y:198, r:22, color:cProc, type:"leaf", parentId:"proc",
      detail:"Ley de Acción y Servicio Exterior del Estado. Regula el personal, organización y funcionamiento en el exterior." },
    { id:"p2", label:"Ley 39/2015", x:36, y:340, r:22, color:cProc, type:"leaf", parentId:"proc",
      detail:"Procedimiento Administrativo Común: regula el procedimiento entre ciudadanos y AAPP, también aplicable en el exterior." },
    { id:"p3", label:"Notaría consular", x:68, y:482, r:22, color:cProc, type:"leaf", parentId:"proc",
      detail:"El cónsul tiene funciones notariales: autoriza poderes, testamentos y otros documentos para uso en España." },
    { id:"p4", label:"Asistencia consular", x:130, y:542, r:22, color:cProc, type:"leaf", parentId:"proc",
      detail:"El consulado presta asistencia a españoles detenidos, hospitalizados o en situación de vulnerabilidad." },
  ],
};

export const allMindMaps = [espanaMM, brasilMM, consularMM];
