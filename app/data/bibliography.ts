export type BibItem = {
  cat: string;
  title: string;
  detail: string;
  url: string;
  type: "ley" | "convenio" | "web" | "doc";
};

export const bibliography: BibItem[] = [
  /* España – Legislación */
  {
    cat: "España · Constitución",
    title: "Constitución Española (1978)",
    detail: "Texto constitucional vigente. Aprobada en referéndum el 6 de diciembre de 1978.",
    url: "https://www.boe.es/eli/es/c/1978/12/27/(1)/con",
    type: "ley",
  },
  {
    cat: "España · Legislación",
    title: "Ley 39/2015 – Procedimiento Administrativo Común",
    detail: "Regula el procedimiento administrativo común de las Administraciones Públicas.",
    url: "https://www.boe.es/eli/es/l/2015/10/01/39/con",
    type: "ley",
  },
  {
    cat: "España · Legislación",
    title: "Ley 40/2015 – Régimen Jurídico del Sector Público",
    detail: "Establece el régimen jurídico de las Administraciones Públicas.",
    url: "https://www.boe.es/eli/es/l/2015/10/01/40/con",
    type: "ley",
  },
  {
    cat: "España · Exterior",
    title: "Ley 2/2014 – Acción y Servicio Exterior del Estado",
    detail: "Marco jurídico del servicio exterior y del personal diplomático y consular español.",
    url: "https://www.boe.es/eli/es/l/2014/03/25/2/con",
    type: "ley",
  },
  {
    cat: "España · Exterior",
    title: "Ley 25/2014 – Tratados y Acuerdos Internacionales",
    detail: "Regula la conclusión, aplicación y publicación de los tratados internacionales de España.",
    url: "https://www.boe.es/eli/es/l/2014/11/27/25/con",
    type: "ley",
  },
  {
    cat: "España · Registro Civil",
    title: "Ley 20/2011 – Registro Civil",
    detail: "Modernización del sistema de Registro Civil en España y en el exterior.",
    url: "https://www.boe.es/eli/es/l/2011/07/21/20/con",
    type: "ley",
  },
  /* Derecho Internacional */
  {
    cat: "Derecho Internacional",
    title: "Convención de Viena sobre Relaciones Consulares (1963)",
    detail: "Principal instrumento del derecho consular internacional. 79 artículos sobre funciones, privilegios e inmunidades consulares.",
    url: "https://www.oas.org/legal/spanish/documentos/convvienaconsulares.htm",
    type: "convenio",
  },
  {
    cat: "Derecho Internacional",
    title: "Convención de Viena sobre Relaciones Diplomáticas (1961)",
    detail: "Regula las relaciones diplomáticas entre Estados. Distinta a la consular de 1963.",
    url: "https://www.oas.org/legal/spanish/documentos/convvienadiplomaticas.htm",
    type: "convenio",
  },
  {
    cat: "Derecho Internacional",
    title: "Convenio de La Haya de 1961 (Apostilla)",
    detail: "Suprime la exigencia de legalización de documentos públicos extranjeros. Establece la apostilla.",
    url: "https://www.hcch.net/es/instruments/conventions/full-text/?cid=41",
    type: "convenio",
  },
  /* Brasil */
  {
    cat: "Brasil · Constitución",
    title: "Constituição Federal do Brasil (1988)",
    detail: "Texto constitucional brasileño vigente, promulgado el 5 de octubre de 1988.",
    url: "https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm",
    type: "ley",
  },
  {
    cat: "Brasil · Estadísticas",
    title: "IBGE – Instituto Brasileiro de Geografia e Estatística",
    detail: "Portal oficial del IBGE: censos, estadísticas, mapas e información geográfica de Brasil.",
    url: "https://www.ibge.gov.br",
    type: "web",
  },
  /* Fuentes oficiales consulado */
  {
    cat: "Consulado · Fuentes oficiales",
    title: "Consulado General de España en São Paulo",
    detail: "Portal oficial con convocatorias, servicios consulares y ofertas de empleo.",
    url: "https://www.exteriores.gob.es/Consulados/saopaulo/es/Consulado/Paginas/Ofertas-de-empleo.aspx",
    type: "web",
  },
  {
    cat: "Consulado · Fuentes oficiales",
    title: "Ministerio de Asuntos Exteriores, UE y Cooperación",
    detail: "Portal del MAEUEC con información sobre la red exterior española, empleo y becas.",
    url: "https://www.exteriores.gob.es",
    type: "web",
  },
  {
    cat: "Consulado · Fuentes oficiales",
    title: "Escuela Diplomática de España",
    detail: "Centro de formación del MAEUEC. Publica temarios y recursos para la carrera diplomática.",
    url: "https://www.exteriores.gob.es/es/Ministerio/EscuelaDiplomatica/Paginas/index.aspx",
    type: "web",
  },
  /* Ofimática */
  {
    cat: "Ofimática",
    title: "Microsoft Word – Soporte oficial",
    detail: "Documentación oficial de Microsoft Word, atajos y funcionalidades.",
    url: "https://support.microsoft.com/es-es/word",
    type: "web",
  },
  {
    cat: "Ofimática",
    title: "Microsoft Excel – Soporte oficial",
    detail: "Documentación oficial de Microsoft Excel: funciones, fórmulas y atajos.",
    url: "https://support.microsoft.com/es-es/excel",
    type: "web",
  },
];

export const bibCats = [...new Set(bibliography.map(b => b.cat.split("·")[0].trim()))];
