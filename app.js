/* ==========================================================================
   JAGUAR NEGRO (@jaguarnegro.mx) — Flagship Storefront & Customizer Engine
   Zero external dependencies · Static GitHub Pages ready · 0 Unicode emojis
   ========================================================================== */

const STORE_CONFIG = {
  brandName: "JAGUAR NEGRO MX",
  instagramHandle: "@jaguarnegro.mx",
  instagramUrl: "https://www.instagram.com/jaguarnegro.mx/",
  instagramDmUrl: "https://ig.me/m/jaguarnegro.mx",
  // Opcional: agrega número con lada (ej. "5215512345678") si deseas habilitar envío directo por WhatsApp
  whatsappPhone: "",
  storageKey: "jn_flagship_bag_v1"
};

const WOVEN_TAGS = {
  XS: "assets/labels/tag-xs.webp",
  S: "assets/labels/tag-s.webp",
  M: "assets/labels/tag-m.webp",
  L: "assets/labels/tag-l.webp",
  XL: "assets/labels/tag-xl.webp",
  "2XL": "assets/labels/tag-2xl.webp"
};

const CATALOG = [
  {
    id: "always-ready-hoodie",
    name: "Hoodie Heavyweight \"ALWAYS Ready\"",
    subtitle: "Algodón pesado afelpado · Cita Baden-Powell & firma en espalda",
    category: "Hoodies",
    tags: ["Drops 2026", "Bestseller"],
    price: 540,
    featuredRank: 1,
    isDrop2026: true,
    badge: "BESTSELLER · 2026",
    badgeType: "drop",
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    defaultSize: "M",
    description:
      "Nuestra sudadera insignia de alto gramaje con gorro de doble capa. Estampado dorsal de alta durabilidad con el manifiesto 'ALWAYS Ready · DESDE 2025 · Only in Jaguar Negro' y la frase histórica de R. Baden-Powell.",
    variants: [
      {
        id: "obsidiana-rojo",
        label: "Negro Obsidiana / Rojo",
        swatch: "#111115",
        primaryImg: "assets/products/always-ready-duo.webp",
        hoverImg: "assets/editorial/editorial-always-ready.webp",
        gallery: [
          "assets/products/always-ready-duo.webp",
          "assets/editorial/editorial-always-ready.webp",
          "assets/products/custom-always-liam.webp"
        ]
      },
      {
        id: "ceniza-azul",
        label: "Gris Ceniza / Plata-Azul",
        swatch: "#d4d4d8",
        primaryImg: "assets/editorial/editorial-always-ready.webp",
        hoverImg: "assets/products/always-ready-duo.webp",
        gallery: [
          "assets/editorial/editorial-always-ready.webp",
          "assets/products/always-ready-duo.webp"
        ]
      }
    ]
  },
  {
    id: "foros-balloon-tee",
    name: "Playera Oversized \"Foros Nacionales 2026\"",
    subtitle: "Edición Meztitla Morelos · Gráfico 3D Balloon en espalda",
    category: "Playeras",
    tags: ["Drops 2026"],
    price: 280,
    featuredRank: 2,
    isDrop2026: true,
    badge: "MEZTITLA 2026",
    badgeType: "drop",
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    defaultSize: "M",
    description:
      "Edición conmemorativa para los Foros Nacionales 2026 en Meztitla, Morelos. Corte relajado en algodón peinado negro mate con composición tipográfica monumental y numeración 2026 efecto globo 3D cromado.",
    variants: [
      {
        id: "negro-purpura",
        label: "Negro Mate / Púrpura 3D",
        swatch: "#18181b",
        primaryImg: "assets/products/foros-tee-balloon.webp",
        hoverImg: "assets/editorial/editorial-foros-tee.webp",
        gallery: [
          "assets/products/foros-tee-balloon.webp",
          "assets/editorial/editorial-foros-tee.webp"
        ]
      }
    ]
  },
  {
    id: "centenario-hoodie",
    name: "Hoodie Oversized \"Centenario 1926 • 2026\"",
    subtitle: "Flor de Lis monumental mostaza & Nudo Rizo en espalda",
    category: "Hoodies",
    tags: ["Drops 2026"],
    price: 550,
    featuredRank: 3,
    isDrop2026: true,
    badge: "EDICIÓN 1926•2026",
    badgeType: "drop",
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    defaultSize: "L",
    description:
      "Pieza de colección conmemorativa del centenario (1926 • 2026). Sudadera corte boxy blanco hielo con impresión dorsal en bloque amarillo mostaza y nudo rizo inferior de precisión.",
    variants: [
      {
        id: "blanco-mostaza",
        label: "Blanco Hielo / Mostaza",
        swatch: "#f5b716",
        primaryImg: "assets/products/centenario-white-1.webp",
        hoverImg: "assets/products/centenario-white-2.webp",
        gallery: [
          "assets/products/centenario-white-1.webp",
          "assets/products/centenario-white-2.webp",
          "assets/editorial/editorial-centenario-b.webp",
          "assets/editorial/editorial-centenario-a.webp"
        ]
      }
    ]
  },
  {
    id: "listos-vida-hoodie",
    name: "Hoodie Heavyweight \"Listos Para La Vida\"",
    subtitle: "Acabado tipo sticker holográfico iridiscente en espalda",
    category: "Hoodies",
    tags: ["Drops 2026"],
    price: 540,
    featuredRank: 4,
    isDrop2026: true,
    badge: "HOLO STICKER",
    badgeType: "drop",
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    defaultSize: "M",
    description:
      "Sudadera negra profunda de felpa pesada con gráfico dorsal 'LISTOS PARA LA VIDA' en contorno efecto sticker holográfico pastel de alto contraste.",
    variants: [
      {
        id: "negro-holo",
        label: "Negro Profundo / Holo",
        swatch: "#09090b",
        primaryImg: "assets/products/listos-vida-black.webp",
        hoverImg: "assets/editorial/editorial-listos-vida.webp",
        gallery: [
          "assets/products/listos-vida-black.webp",
          "assets/editorial/editorial-listos-vida.webp"
        ]
      }
    ]
  },
  {
    id: "foros-pixel-hoodie",
    name: "Hoodie \"Foros Nacionales 2026\" Pixel Edition",
    subtitle: "Blanco crema heavyweight · Tipografía Pixel + Condensada",
    category: "Hoodies",
    tags: ["Drops 2026"],
    price: 540,
    featuredRank: 5,
    isDrop2026: true,
    badge: "PIXEL DROP 2026",
    badgeType: "drop",
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    defaultSize: "M",
    description:
      "Diseño frontal minimalista de alto impacto con coordenadas '2026 · Meztitla Morelos' en tipografía pixel roja sobre titular condensado. Ideal para agregar tu nombre y @usuario en espalda desde JN Custom Lab.",
    variants: [
      {
        id: "crema-rojo",
        label: "Blanco Crema / Rojo Pixel",
        swatch: "#f4f3ef",
        primaryImg: "assets/products/foros-hoodie-flat.webp",
        hoverImg: "assets/editorial/editorial-foros-hoodie.webp",
        gallery: [
          "assets/products/foros-hoodie-flat.webp",
          "assets/editorial/editorial-foros-hoodie.webp",
          "assets/products/custom-foros-zally.webp"
        ]
      }
    ]
  },
  {
    id: "explora-manifesto-tee",
    name: "Playera Manifesto \"EXPLORA · ATRÉVETE · DESTACA\"",
    subtitle: "Algodón óptico peinado · Tipografía arquitectónica frontal",
    category: "Playeras",
    tags: ["Esenciales"],
    price: 260,
    featuredRank: 6,
    isDrop2026: false,
    badge: "MANIFESTO JN",
    badgeType: "default",
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    defaultSize: "M",
    description:
      "El lema oficial de Jaguar Negro llevado a su expresión más limpia y editorial. Corte relajado unisex sobre algodón blanco óptico suave y fresco para campamento o ciudad.",
    variants: [
      {
        id: "blanco-optico",
        label: "Blanco Óptico",
        swatch: "#ffffff",
        primaryImg: "assets/products/explora-white-1.webp",
        hoverImg: "assets/editorial/editorial-explora.webp",
        gallery: [
          "assets/products/explora-white-1.webp",
          "assets/editorial/editorial-explora.webp"
        ]
      }
    ]
  },
  {
    id: "cool-knot-tee",
    name: "Playera \"C∞∞L\" Doble Nudo Rizo",
    subtitle: "Gráfico desgastado vintage con nudos cuadrados entrelazados",
    category: "Playeras",
    tags: ["Esenciales"],
    price: 260,
    featuredRank: 7,
    isDrop2026: false,
    badge: "CLASSIC STREET",
    badgeType: "default",
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    defaultSize: "M",
    description:
      " Guiño sutil a la hermandad Scout integrado en estética urbana contemporánea: las dos letras centrales forman dos nudos rizos entrelazados con textura screen-print vintage.",
    variants: [
      {
        id: "carbon-lavado",
        label: "Carbón Lavado",
        swatch: "#3f3f46",
        primaryImg: "assets/products/cool-knot-charcoal.webp",
        hoverImg: "assets/editorial/editorial-cool-knot.webp",
        gallery: [
          "assets/products/cool-knot-charcoal.webp",
          "assets/editorial/editorial-cool-knot.webp"
        ]
      },
      {
        id: "negro-intenso",
        label: "Negro Intenso",
        swatch: "#09090b",
        primaryImg: "assets/products/cool-knot-black.webp",
        hoverImg: "assets/editorial/editorial-cool-knot.webp",
        gallery: [
          "assets/products/cool-knot-black.webp",
          "assets/products/cool-knot-charcoal.webp"
        ]
      }
    ]
  },
  {
    id: "rose-knot-tee",
    name: "Playera \"Rose Knot\" Emblema Pectoral",
    subtitle: "Tono Vino / Burgundy · Rosa geométrica en círculo de nudo rizo",
    category: "Playeras",
    tags: ["Esenciales"],
    price: 260,
    featuredRank: 8,
    isDrop2026: false,
    badge: "CLEAN STUDIO",
    badgeType: "default",
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    defaultSize: "M",
    description:
      "Minimalismo de uso diario en algodón color vino profundo. Insignia pectoral blanca con rosa estilizada rodeada por una cuerda cerrada en nudo rizo.",
    variants: [
      {
        id: "vino-burgundy",
        label: "Vino Burgundy",
        swatch: "#581c28",
        primaryImg: "assets/products/rose-knot-vino-1.webp",
        hoverImg: "assets/products/rose-knot-vino-2.webp",
        gallery: [
          "assets/products/rose-knot-vino-1.webp",
          "assets/products/rose-knot-vino-2.webp",
          "assets/editorial/editorial-rose-knot.webp"
        ]
      }
    ]
  },
  {
    id: "graphic-series-tee",
    name: "Playera Serie Gráfica \"Arte Urbano & Botánico\"",
    subtitle: "4 artes exclusivos: Adabana, Stay Calm, Siempre Listos & Happiness",
    category: "Playeras",
    tags: ["Drops 2026"],
    price: 280,
    featuredRank: 9,
    isDrop2026: true,
    badge: "4 DISEÑOS DE AUTOR",
    badgeType: "drop",
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    defaultSize: "M",
    description:
      "Línea artística de autor que fusiona grabado linóleo, botánica japonesa (あだばな Adabana con pétalos de Flor de Lis) y caligrafía graffiti callejera con la seña Scout.",
    variants: [
      {
        id: "adabana",
        label: "Adabana Flor de Lis (Negra)",
        swatch: "#18181b",
        primaryImg: "assets/products/graphic-adabana-tee.webp",
        hoverImg: "assets/products/graphic-staycalm-tee.webp",
        gallery: [
          "assets/products/graphic-adabana-tee.webp",
          "assets/products/graphic-staycalm-tee.webp",
          "assets/products/graphic-siemprelistos-tee.webp"
        ]
      },
      {
        id: "stay-calm",
        label: "Stay Calm Linocut (Negra)",
        swatch: "#3f3f46",
        primaryImg: "assets/products/graphic-staycalm-tee.webp",
        hoverImg: "assets/products/graphic-adabana-tee.webp",
        gallery: [
          "assets/products/graphic-staycalm-tee.webp",
          "assets/products/graphic-adabana-tee.webp"
        ]
      },
      {
        id: "siempre-listos",
        label: "¡Siempre Listos! Tag (Negra)",
        swatch: "#27272a",
        primaryImg: "assets/products/graphic-siemprelistos-tee.webp",
        hoverImg: "assets/products/street-tag-fabric.webp",
        gallery: [
          "assets/products/graphic-siemprelistos-tee.webp",
          "assets/products/street-tag-fabric.webp"
        ]
      },
      {
        id: "happiness-white",
        label: "Happiness Spray (Hoodie/Blanca)",
        swatch: "#7c3aed",
        primaryImg: "assets/products/graphic-happiness-white.webp",
        hoverImg: "assets/products/graphic-adabana-tee.webp",
        gallery: [
          "assets/products/graphic-happiness-white.webp"
        ]
      }
    ]
  },
  {
    id: "llaveros-flor-mundial",
    name: "Llavero Acrílico Corte Láser \"Flor de Lis Mundial\"",
    subtitle: "Acrílico cristal de alto espesor · Herraje metálico reforzado",
    category: "Accesorios",
    tags: ["Accesorios"],
    price: 65,
    featuredRank: 10,
    isDrop2026: false,
    badge: "CORTE LÁSER HD",
    badgeType: "default",
    sizes: ["1 Pieza", "Pack x3 ($165)", "Lote +15 (Cotizar)"],
    defaultSize: "1 Pieza",
    sizePrices: {
      "1 Pieza": 65,
      "Pack x3 ($165)": 165,
      "Lote +15 (Cotizar)": 0
    },
    description:
      "Llavero oficial resistente al agua y a la intemperie de campamento. Acrílico transparente cortado con láser con emblema morado intenso y cadena de uso rudo para mochila o llaves.",
    variants: [
      {
        id: "morado-mundial",
        label: "Morado Scout Mundial",
        swatch: "#6d28d9",
        primaryImg: "assets/products/llaveros-macro-1.webp",
        hoverImg: "assets/editorial/editorial-llaveros.webp",
        gallery: [
          "assets/products/llaveros-macro-1.webp",
          "assets/products/llaveros-single.webp",
          "assets/editorial/editorial-llaveros.webp",
          "assets/editorial/editorial-llaveros-poster.webp"
        ]
      }
    ]
  },
  {
    id: "parche-foros-galacticos",
    name: "Parche & Escudos Conmemorativos 2026",
    subtitle: "Foros Galácticos 2026, Red de Caminantes y Escudos de Grupo",
    category: "Accesorios",
    tags: ["Drops 2026", "Accesorios"],
    price: 75,
    featuredRank: 11,
    isDrop2026: true,
    badge: "EDICIÓN ESPECIAL",
    badgeType: "drop",
    sizes: ["Individual", "Pack x5 ($325)", "Lote Evento (+20)"],
    defaultSize: "Individual",
    sizePrices: {
      "Individual": 75,
      "Pack x5 ($325)": 325,
      "Lote Evento (+20)": 0
    },
    description:
      "Insignias y parches conmemorativos de alta definición para camisola, poncho de campamento o mochila. Incluye la edición especial Foros Galácticos 2026 y fabricación bajo diseño para tu evento.",
    variants: [
      {
        id: "foros-galacticos",
        label: "Foros Galácticos 2026",
        swatch: "#facc15",
        primaryImg: "assets/products/parche-galacticos.webp",
        hoverImg: "assets/products/escudo-caminantes.webp",
        gallery: [
          "assets/products/parche-galacticos.webp",
          "assets/products/escudo-caminantes.webp",
          "assets/products/escudo-vca.webp",
          "assets/products/escudo-tlalpan23.webp"
        ]
      }
    ]
  },
  {
    id: "custom-provincia-pack",
    name: "Prenda Oficial Personalizada de Provincia / Grupo",
    subtitle: "Impresión DTF textil, Buffs, Nombres individuales y Escudo propio",
    category: "Personalizados",
    tags: ["Personalizados", "Drops 2026"],
    price: 290,
    featuredRank: 12,
    isDrop2026: true,
    badge: "JN CUSTOM STUDIO",
    badgeType: "custom",
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    defaultSize: "M",
    description:
      "Desarrollamos la identidad textil completa de tu Grupo, Comunidad, Red o Provincia (como Provincia TLXH, VCA o Grupo 23 Tlalpan). Cada integrante puede llevar su propio nombre y cargo sin perder uniformidad.",
    variants: [
      {
        id: "edicion-tlxh",
        label: "Muestra Ajolote TLXH",
        swatch: "#8b5cf6",
        primaryImg: "assets/products/custom-tlxh-liam.webp",
        hoverImg: "assets/products/custom-always-liam.webp",
        gallery: [
          "assets/products/custom-tlxh-liam.webp",
          "assets/products/custom-always-liam.webp",
          "assets/products/custom-foros-zally.webp",
          "assets/products/escudo-tlalpan23.webp"
        ]
      }
    ]
  }
];

const CUSTOM_GARMENTS = [
  {
    id: "hoodie-black",
    name: "Hoodie Heavyweight Negra",
    shortLabel: "HOODIE NEGRA",
    price: 560,
    isDark: true,
    img: "assets/custom/base-hoodie-black.webp"
  },
  {
    id: "hoodie-white",
    name: "Hoodie Oversized Blanca",
    shortLabel: "HOODIE BLANCA",
    price: 560,
    isDark: false,
    img: "assets/custom/base-hoodie-white.webp"
  },
  {
    id: "tee-black",
    name: "Playera Streetwear Negra",
    shortLabel: "PLAYERA NEGRA",
    price: 290,
    isDark: true,
    img: "assets/custom/base-tee-black.webp"
  },
  {
    id: "hoodie-flat",
    name: "Hoodie Frontal Crema",
    shortLabel: "HOODIE FRONTAL",
    price: 560,
    isDark: false,
    img: "assets/custom/base-hoodie-flat.webp"
  }
];

const CUSTOM_GRAPHICS = [
  {
    id: "always-blue",
    name: "ALWAYS Ready Azul",
    imgDark: "assets/graphics/always-ready-blue.webp",
    imgLight: "assets/graphics/always-ready-red.webp",
    thumb: "assets/graphics/always-ready-blue.webp"
  },
  {
    id: "foros-balloon",
    name: "Foros 2026 3D",
    imgDark: "assets/graphics/foros-balloon.webp",
    imgLight: "assets/graphics/foros-balloon.webp",
    thumb: "assets/graphics/foros-balloon.webp"
  },
  {
    id: "centenario",
    name: "Centenario Mostaza",
    imgDark: "assets/graphics/centenario-fleur.webp",
    imgLight: "assets/graphics/centenario-fleur.webp",
    thumb: "assets/graphics/centenario-fleur.webp"
  },
  {
    id: "foros-pixel",
    name: "Foros 2026 Pixel",
    imgDark: "assets/graphics/foros-pixel.webp",
    imgLight: "assets/graphics/foros-pixel.webp",
    thumb: "assets/graphics/foros-pixel.webp",
    invertOnDark: true
  },
  {
    id: "listos-holo",
    name: "Listos Holo",
    imgDark: "assets/graphics/listos-holo.webp",
    imgLight: "assets/graphics/listos-holo.webp",
    thumb: "assets/graphics/listos-holo.webp"
  },
  {
    id: "adabana",
    name: "Adabana Flor",
    imgDark: "assets/graphics/adabana-fleur-white.webp",
    imgLight: "assets/graphics/adabana-fleur.webp",
    thumb: "assets/graphics/adabana-fleur.webp"
  },
  {
    id: "stay-calm",
    name: "Stay Calm",
    imgDark: "assets/graphics/stay-calm-white.webp",
    imgLight: "assets/graphics/stay-calm.webp",
    thumb: "assets/graphics/stay-calm.webp"
  },
  {
    id: "ajolote-tlxh",
    name: "Ajolote Scout",
    imgDark: "assets/graphics/ajolote-tlxh.webp",
    imgLight: "assets/graphics/ajolote-tlxh.webp",
    thumb: "assets/graphics/ajolote-tlxh.webp"
  }
];

const CATEGORIES = [
  "Todo",
  "Hoodies",
  "Playeras",
  "Drops 2026",
  "Accesorios",
  "Personalizados"
];

const STATE = {
  category: "Todo",
  searchQuery: "",
  sortBy: "featured",
  cardSelections: {}, // { [productId]: { variantIdx: 0, size: 'M' } }
  bag: [],
  pdp: {
    productId: null,
    variantIdx: 0,
    size: "M",
    imageIdx: 0
  },
  customLab: {
    garmentId: "hoodie-black",
    graphicId: "always-blue",
    nameText: "LIAM",
    handleText: "CNRC · @jaguarnegro.mx",
    fontKey: "condensed",
    inkColor: "#f5b716",
    size: "M"
  },
  lastGeneratedTicket: ""
};

/* ==========================================================================
   UTILITIES
   ========================================================================== */
function escapeHtml(str) {
  return String(str ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function formatMoney(amount) {
  if (!amount || amount <= 0) return "Por cotizar";
  return `$${Number(amount).toLocaleString("es-MX")} MXN`;
}

function getEffectivePrice(product, size) {
  if (product.sizePrices && Object.prototype.hasOwnProperty.call(product.sizePrices, size)) {
    return product.sizePrices[size];
  }
  return product.price;
}

let toastTimer = null;
function showToast(message) {
  const toast = document.getElementById("toastNotification");
  const text = document.getElementById("toastText");
  if (!toast || !text) return;
  text.textContent = message;
  toast.classList.add("is-visible");
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 2600);
}

function copyToClipboard(text) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    return navigator.clipboard.writeText(text).catch(() => fallbackCopy(text));
  }
  return Promise.resolve(fallbackCopy(text));
}

function fallbackCopy(text) {
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.style.position = "fixed";
  ta.style.opacity = "0";
  document.body.appendChild(ta);
  ta.select();
  try {
    document.execCommand("copy");
  } catch (_) {}
  document.body.removeChild(ta);
}

/* ==========================================================================
   INITIALIZE STATE & STORAGE
   ========================================================================== */
function initProductSelections() {
  CATALOG.forEach((p) => {
    STATE.cardSelections[p.id] = {
      variantIdx: 0,
      size: p.defaultSize || p.sizes[0]
    };
  });
}

function loadBagFromStorage() {
  try {
    const raw = localStorage.getItem(STORE_CONFIG.storageKey);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        STATE.bag = parsed;
      }
    }
  } catch (_) {
    STATE.bag = [];
  }
}

function saveBagToStorage() {
  try {
    localStorage.setItem(STORE_CONFIG.storageKey, JSON.stringify(STATE.bag));
  } catch (_) {}
}

/* ==========================================================================
   CATALOG RENDERING, FILTERS, SWATCHES & QUICK ADD
   ========================================================================== */
function countForCategory(cat) {
  if (cat === "Todo") return CATALOG.length;
  if (cat === "Drops 2026") return CATALOG.filter((p) => p.isDrop2026).length;
  return CATALOG.filter((p) => p.category === cat).length;
}

function renderCategoryTabs() {
  const container = document.getElementById("categoryTabs");
  if (!container) return;
  container.innerHTML = CATEGORIES.map((cat) => {
    const active = STATE.category === cat ? "is-active" : "";
    const count = countForCategory(cat);
    return `
      <button
        type="button"
        role="tab"
        aria-selected="${STATE.category === cat}"
        class="cat-pill ${active}"
        onclick="selectCategoryFilter('${escapeHtml(cat)}')"
      >
        <span>${escapeHtml(cat)}</span>
        <span class="cat-pill__count">(${count})</span>
      </button>
    `;
  }).join("");
}

function selectCategoryFilter(cat) {
  STATE.category = cat;
  renderCategoryTabs();
  renderCatalogGrid();
}

function getFilteredProducts() {
  const q = STATE.searchQuery.trim().toLowerCase();
  const list = CATALOG.filter((p) => {
    const matchesCat =
      STATE.category === "Todo" ||
      (STATE.category === "Drops 2026" ? p.isDrop2026 : p.category === STATE.category);
    if (!matchesCat) return false;
    if (!q) return true;
    const haystack = [
      p.name,
      p.subtitle,
      p.category,
      p.description,
      ...p.variants.map((v) => v.label)
    ]
      .join(" ")
      .toLowerCase();
    return haystack.includes(q);
  });

  if (STATE.sortBy === "drops") {
    list.sort((a, b) => Number(b.isDrop2026) - Number(a.isDrop2026) || a.featuredRank - b.featuredRank);
  } else if (STATE.sortBy === "price-asc") {
    list.sort((a, b) => a.price - b.price);
  } else if (STATE.sortBy === "price-desc") {
    list.sort((a, b) => b.price - a.price);
  } else {
    list.sort((a, b) => a.featuredRank - b.featuredRank);
  }
  return list;
}

function renderCatalogGrid() {
  const grid = document.getElementById("productGrid");
  if (!grid) return;

  const filtered = getFilteredProducts();
  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="empty-catalog">
        <h3 style="font-family:var(--font-display);font-size:20px;font-weight:800;margin-bottom:8px">No encontramos prendas con ese filtro</h3>
        <p style="color:var(--ink-muted);font-size:14px;margin-bottom:18px">Prueba otra palabra clave o explora todo el catálogo oficial.</p>
        <button type="button" class="btn btn-obsidian" onclick="resetCatalogFilters()">Ver Todo el Catálogo</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered
    .map((product) => {
      const sel = STATE.cardSelections[product.id] || { variantIdx: 0, size: product.defaultSize };
      const variant = product.variants[sel.variantIdx] || product.variants[0];
      const hasHover = Boolean(variant.hoverImg && variant.hoverImg !== variant.primaryImg);
      const effectivePrice = getEffectivePrice(product, sel.size);

      const badgeCls =
        product.badgeType === "drop"
          ? "p-badge p-badge--drop"
          : product.badgeType === "custom"
          ? "p-badge p-badge--custom"
          : "p-badge";

      const swatchesHtml =
        product.variants.length > 1
          ? `<div class="product-card__swatches" aria-label="Variantes de color">
              ${product.variants
                .map(
                  (v, idx) => `
                  <button
                    type="button"
                    class="swatch-dot ${idx === sel.variantIdx ? "is-active" : ""}"
                    style="background:${escapeHtml(v.swatch)}"
                    title="${escapeHtml(v.label)}"
                    aria-label="${escapeHtml(v.label)}"
                    onclick="selectCardVariant(event, '${escapeHtml(product.id)}', ${idx})"
                  ></button>`
                )
                .join("")}
            </div>`
          : "";

      const sizesHtml = product.sizes
        .map(
          (sz) => `
          <button
            type="button"
            class="size-chip ${sel.size === sz ? "is-selected" : ""}"
            onclick="selectCardSize(event, '${escapeHtml(product.id)}', '${escapeHtml(sz)}')"
          >${escapeHtml(sz)}</button>`
        )
        .join("");

      return `
        <article class="product-card ${hasHover ? "has-alt" : ""}" data-product-id="${escapeHtml(product.id)}">
          <div class="product-card__media" onclick="openProductModal('${escapeHtml(product.id)}')">
            <img
              src="${escapeHtml(variant.primaryImg)}"
              alt="${escapeHtml(product.name)} — ${escapeHtml(variant.label)}"
              class="product-card__img product-card__img--primary"
              loading="lazy"
            >
            ${
              hasHover
                ? `<img
                    src="${escapeHtml(variant.hoverImg)}"
                    alt="${escapeHtml(product.name)} vista alterna"
                    class="product-card__img product-card__img--hover"
                    loading="lazy"
                  >`
                : ""
            }

            <div class="product-card__badges">
              <span class="${badgeCls}">${escapeHtml(product.badge)}</span>
              <button
                type="button"
                class="product-card__zoom-btn"
                aria-label="Abrir galería de ${escapeHtml(product.name)}"
                onclick="event.stopPropagation(); openProductModal('${escapeHtml(product.id)}')"
              >
                <svg width="14" height="14"><use href="#icon-expand"></use></svg>
              </button>
            </div>

            <div class="product-card__quickbar" onclick="event.stopPropagation()">
              <div class="quickbar__sizes">${sizesHtml}</div>
              <div class="quickbar__actions">
                <button type="button" class="quickbar__add" onclick="quickAddCardToBag('${escapeHtml(product.id)}')">
                  + Agregar
                </button>
                <button type="button" class="quickbar__detail" onclick="openProductModal('${escapeHtml(product.id)}')">
                  Ver
                </button>
              </div>
            </div>
          </div>

          <div class="product-card__body">
            <div class="product-card__meta-top">
              <span class="product-card__cat">${escapeHtml(product.category)} &middot; ${escapeHtml(variant.label)}</span>
              ${swatchesHtml}
            </div>
            <div class="product-card__title-row">
              <h3 class="product-card__title" onclick="openProductModal('${escapeHtml(product.id)}')">${escapeHtml(product.name)}</h3>
              <span class="product-card__price">${formatMoney(effectivePrice)}</span>
            </div>
            <p class="product-card__sub">${escapeHtml(product.subtitle)}</p>
          </div>
        </article>
      `;
    })
    .join("");
}

function selectCardVariant(event, productId, variantIdx) {
  if (event) event.stopPropagation();
  if (!STATE.cardSelections[productId]) return;
  STATE.cardSelections[productId].variantIdx = variantIdx;
  renderCatalogGrid();
}

function selectCardSize(event, productId, size) {
  if (event) event.stopPropagation();
  if (!STATE.cardSelections[productId]) return;
  STATE.cardSelections[productId].size = size;
  renderCatalogGrid();
}

function resetCatalogFilters() {
  STATE.category = "Todo";
  STATE.searchQuery = "";
  STATE.sortBy = "featured";
  const input = document.getElementById("catalogSearchInput");
  const clearBtn = document.getElementById("catalogSearchClear");
  const sortSel = document.getElementById("catalogSortSelect");
  if (input) input.value = "";
  if (clearBtn) clearBtn.classList.remove("is-visible");
  if (sortSel) sortSel.value = "featured";
  renderCategoryTabs();
  renderCatalogGrid();
}

function quickAddCardToBag(productId) {
  const product = CATALOG.find((p) => p.id === productId);
  if (!product) return;
  const sel = STATE.cardSelections[productId] || { variantIdx: 0, size: product.defaultSize };
  const variant = product.variants[sel.variantIdx] || product.variants[0];
  addItemToBag({
    key: `${product.id}::${variant.id}::${sel.size}`,
    name: product.name,
    variant: variant.label,
    size: sel.size,
    price: getEffectivePrice(product, sel.size),
    image: variant.primaryImg,
    customNote: ""
  });
}

/* ==========================================================================
   PRODUCT DETAIL MODAL (PDP) WITH DYNAMIC WOVEN NECK LABEL
   ========================================================================== */
function openProductModal(productId) {
  const product = CATALOG.find((p) => p.id === productId);
  if (!product) return;
  const cardSel = STATE.cardSelections[productId] || { variantIdx: 0, size: product.defaultSize };

  STATE.pdp = {
    productId: product.id,
    variantIdx: cardSel.variantIdx,
    size: cardSel.size,
    imageIdx: 0
  };

  const chart = document.getElementById("pdpSizeChartBox");
  if (chart) chart.style.display = "none";

  renderProductModal();

  const modal = document.getElementById("pdpModal");
  const backdrop = document.getElementById("pdpBackdrop");
  if (modal && backdrop) {
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    backdrop.classList.add("is-open");
    document.body.classList.add("modal-open");
  }
}

function closeProductModal() {
  const modal = document.getElementById("pdpModal");
  const backdrop = document.getElementById("pdpBackdrop");
  if (modal && backdrop) {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    backdrop.classList.remove("is-open");
    document.body.classList.remove("modal-open");
  }
}

function renderProductModal() {
  const product = CATALOG.find((p) => p.id === STATE.pdp.productId);
  if (!product) return;
  const variant = product.variants[STATE.pdp.variantIdx] || product.variants[0];
  const gallery = variant.gallery && variant.gallery.length ? variant.gallery : [variant.primaryImg];
  const mainSrc = gallery[STATE.pdp.imageIdx] || gallery[0];
  const effectivePrice = getEffectivePrice(product, STATE.pdp.size);

  document.getElementById("pdpBadge").textContent = product.badge;
  document.getElementById("pdpTitle").textContent = product.name;
  document.getElementById("pdpPrice").textContent = formatMoney(effectivePrice);
  document.getElementById("pdpDesc").textContent = product.description;
  document.getElementById("pdpVariantName").textContent = variant.label;

  const mainImg = document.getElementById("pdpMainImg");
  mainImg.src = mainSrc;
  mainImg.alt = `${product.name} - ${variant.label}`;

  document.getElementById("pdpThumbs").innerHTML = gallery
    .map(
      (src, idx) => `
      <button
        type="button"
        class="pdp-thumb ${idx === STATE.pdp.imageIdx ? "is-active" : ""}"
        onclick="selectPdpImage(${idx})"
      >
        <img src="${escapeHtml(src)}" alt="Miniatura ${idx + 1}">
      </button>`
    )
    .join("");

  document.getElementById("pdpVariantButtons").innerHTML = product.variants
    .map(
      (v, idx) => `
      <button
        type="button"
        class="font-pill ${idx === STATE.pdp.variantIdx ? "is-active" : ""}"
        onclick="selectPdpVariant(${idx})"
      >${escapeHtml(v.label)}</button>`
    )
    .join("");

  document.getElementById("pdpSizeButtons").innerHTML = product.sizes
    .map(
      (sz) => `
      <button
        type="button"
        class="size-pill-lg ${STATE.pdp.size === sz ? "is-active" : ""}"
        onclick="selectPdpSize('${escapeHtml(sz)}')"
      >${escapeHtml(sz)}</button>`
    )
    .join("");

  // Dynamic Woven Garment Neck Tag (XS..2XL)
  const tagBox = document.getElementById("pdpWovenTagBox");
  const tagImg = document.getElementById("pdpWovenTagImg");
  if (WOVEN_TAGS[STATE.pdp.size]) {
    tagBox.style.display = "flex";
    tagImg.src = WOVEN_TAGS[STATE.pdp.size];
    tagImg.alt = `Etiqueta oficial Jaguar Negro talla ${STATE.pdp.size}`;
  } else {
    tagBox.style.display = "none";
  }

  const addBtn = document.getElementById("pdpAddToBagBtn");
  addBtn.onclick = () => {
    addItemToBag({
      key: `${product.id}::${variant.id}::${STATE.pdp.size}`,
      name: product.name,
      variant: variant.label,
      size: STATE.pdp.size,
      price: effectivePrice,
      image: variant.primaryImg,
      customNote: ""
    });
    closeProductModal();
    toggleBagDrawer(true);
  };
}

function selectPdpImage(idx) {
  STATE.pdp.imageIdx = idx;
  renderProductModal();
}

function selectPdpVariant(idx) {
  STATE.pdp.variantIdx = idx;
  STATE.pdp.imageIdx = 0;
  renderProductModal();
}

function selectPdpSize(sz) {
  STATE.pdp.size = sz;
  if (STATE.pdp.productId && STATE.cardSelections[STATE.pdp.productId]) {
    STATE.cardSelections[STATE.pdp.productId].size = sz;
  }
  renderProductModal();
}

function togglePdpSizeChart() {
  const box = document.getElementById("pdpSizeChartBox");
  if (!box) return;
  box.style.display = box.style.display === "none" ? "block" : "none";
}

function openSizeGuideModal() {
  openProductModal("always-ready-hoodie");
  const box = document.getElementById("pdpSizeChartBox");
  if (box) box.style.display = "block";
}

/* ==========================================================================
   JN CUSTOM LAB — LIVE PERSONALIZER ENGINE
   ========================================================================== */
function initCustomLab() {
  const garmentContainer = document.getElementById("customGarmentSelector");
  const graphicContainer = document.getElementById("customGraphicPicker");
  if (!garmentContainer || !graphicContainer) return;

  garmentContainer.innerHTML = CUSTOM_GARMENTS.map(
    (g) => `
    <button
      type="button"
      class="garment-opt ${g.id === STATE.customLab.garmentId ? "is-active" : ""}"
      data-garment-id="${escapeHtml(g.id)}"
      onclick="selectCustomGarment('${escapeHtml(g.id)}')"
    >
      <div>
        <span class="garment-opt__name">${escapeHtml(g.name)}</span>
        <span class="garment-opt__price">${formatMoney(g.price)}</span>
      </div>
    </button>`
  ).join("");

  graphicContainer.innerHTML = CUSTOM_GRAPHICS.map(
    (gr) => `
    <button
      type="button"
      class="graphic-opt ${gr.id === STATE.customLab.graphicId ? "is-active" : ""}"
      data-graphic-id="${escapeHtml(gr.id)}"
      onclick="selectCustomGraphic('${escapeHtml(gr.id)}')"
    >
      <img src="${escapeHtml(gr.thumb)}" alt="${escapeHtml(gr.name)}" loading="lazy">
      <span>${escapeHtml(gr.name)}</span>
    </button>`
  ).join("");

  const nameInput = document.getElementById("customNameInput");
  const handleInput = document.getElementById("customHandleInput");

  nameInput.addEventListener("input", (e) => {
    STATE.customLab.nameText = e.target.value;
    syncCustomLabPreview();
  });

  handleInput.addEventListener("input", (e) => {
    STATE.customLab.handleText = e.target.value;
    syncCustomLabPreview();
  });

  document.querySelectorAll("#customFontPills .font-pill").forEach((btn) => {
    btn.addEventListener("click", () => {
      STATE.customLab.fontKey = btn.dataset.font;
      document.querySelectorAll("#customFontPills .font-pill").forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      syncCustomLabPreview();
    });
  });

  document.querySelectorAll("#customInkPills .ink-pill").forEach((btn) => {
    btn.addEventListener("click", () => {
      STATE.customLab.inkColor = btn.dataset.ink;
      document.querySelectorAll("#customInkPills .ink-pill").forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      syncCustomLabPreview();
    });
  });

  document.querySelectorAll("#customSizePills .size-pill-lg").forEach((btn) => {
    btn.addEventListener("click", () => {
      STATE.customLab.size = btn.dataset.size;
      document.querySelectorAll("#customSizePills .size-pill-lg").forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      syncCustomLabPreview();
    });
  });

  document.getElementById("addCustomToBagBtn").addEventListener("click", () => {
    const garment = CUSTOM_GARMENTS.find((g) => g.id === STATE.customLab.garmentId) || CUSTOM_GARMENTS[0];
    const graphic = CUSTOM_GRAPHICS.find((g) => g.id === STATE.customLab.graphicId) || CUSTOM_GRAPHICS[0];
    const cleanName = STATE.customLab.nameText.trim() || "SIN NOMBRE";
    const cleanHandle = STATE.customLab.handleText.trim() || "SIN @HANDLE";
    const customSpec = `Arte: ${graphic.name} | Dorsal: "${cleanName}" (${ cleanHandle }) | Fuente: ${STATE.customLab.fontKey}`;

    addItemToBag({
      key: `custom::${garment.id}::${graphic.id}::${STATE.customLab.size}::${cleanName}::${cleanHandle}`,
      name: `${garment.name} (JN Custom Lab)`,
      variant: graphic.name,
      size: STATE.customLab.size,
      price: garment.price,
      image: garment.img,
      customNote: customSpec
    });
    toggleBagDrawer(true);
  });

  syncCustomLabPreview();
}

function selectCustomGarment(garmentId) {
  STATE.customLab.garmentId = garmentId;
  document.querySelectorAll("#customGarmentSelector .garment-opt").forEach((el) => {
    el.classList.toggle("is-active", el.dataset.garmentId === garmentId);
  });
  syncCustomLabPreview();
}

function selectCustomGraphic(graphicId) {
  STATE.customLab.graphicId = graphicId;
  document.querySelectorAll("#customGraphicPicker .graphic-opt").forEach((el) => {
    el.classList.toggle("is-active", el.dataset.graphicId === graphicId);
  });
  syncCustomLabPreview();
}

function syncCustomLabPreview() {
  const garment = CUSTOM_GARMENTS.find((g) => g.id === STATE.customLab.garmentId) || CUSTOM_GARMENTS[0];
  const graphic = CUSTOM_GRAPHICS.find((g) => g.id === STATE.customLab.graphicId) || CUSTOM_GRAPHICS[0];

  const stage = document.getElementById("customStage");
  const baseImg = document.getElementById("customBaseImg");
  const graphicImg = document.getElementById("customGraphicImg");
  const nameEl = document.getElementById("customPreviewName");
  const handleEl = document.getElementById("customPreviewHandle");

  stage.setAttribute("data-garment", garment.id);
  baseImg.src = garment.img;
  document.getElementById("customStageGarmentLabel").textContent = garment.shortLabel;
  document.getElementById("selectedGarmentNameText").textContent = garment.name;
  document.getElementById("selectedGraphicNameText").textContent = graphic.name;
  document.getElementById("customTotalPrice").textContent = formatMoney(garment.price);

  graphicImg.src = garment.isDark ? graphic.imgDark : graphic.imgLight;
  graphicImg.classList.toggle("invert-ink", Boolean(garment.isDark && graphic.invertOnDark));

  // Primary name color automatically contrasts with dark vs light fabric
  nameEl.textContent = STATE.customLab.nameText.trim();
  nameEl.style.color = garment.isDark ? "#ffffff" : "#09090b";
  nameEl.style.textShadow = garment.isDark ? "0 1px 5px rgba(0,0,0,0.45)" : "none";

  const fontMap = {
    condensed: "var(--font-condensed)",
    pixel: "var(--font-pixel)",
    subcondensed: "var(--font-subcondensed)",
    galactic: "'JN Galactic', var(--font-display)"
  };
  nameEl.style.fontFamily = fontMap[STATE.customLab.fontKey] || "var(--font-condensed)";

  handleEl.textContent = STATE.customLab.handleText.trim();
  let secColor = STATE.customLab.inkColor;
  if (!garment.isDark && secColor.toLowerCase() === "#ffffff") {
    secColor = "#d91e2a";
  } else if (garment.isDark && secColor.toLowerCase() === "#09090b") {
    secColor = "#f5b716";
  }
  handleEl.style.color = secColor;
  handleEl.style.textShadow = garment.isDark ? "0 1px 4px rgba(0,0,0,0.5)" : "none";

  document.getElementById("customTagSizeText").textContent = STATE.customLab.size;
  document.getElementById("customWovenTagImg").src = WOVEN_TAGS[STATE.customLab.size] || WOVEN_TAGS.M;
}

/* ==========================================================================
   COMBOS CONFIGURATOR
   ========================================================================== */
function addConfiguredCombo(comboNum) {
  if (comboNum === 1) {
    const hoodie = document.getElementById("combo1Hoodie").value;
    const tee = document.getElementById("combo1Tee").value;
    const size = document.getElementById("combo1Size").value;
    addItemToBag({
      key: `combo1::${hoodie}::${tee}::${size}`,
      name: "Combo Foro & Drop 2026 (3 Piezas)",
      variant: `${hoodie} + ${tee} + Accesorio`,
      size,
      price: 820,
      image: "assets/editorial/editorial-always-ready.webp",
      customNote: "Incluye Llavero Acrílico o Parche Oficial"
    });
  } else if (comboNum === 2) {
    const teeA = document.getElementById("combo2TeeA").value;
    const teeB = document.getElementById("combo2TeeB").value;
    const size = document.getElementById("combo2Size").value;
    addItemToBag({
      key: `combo2::${teeA}::${teeB}::${size}`,
      name: "Pack Dúo Playeras Jaguar Negro",
      variant: `${teeA} + ${teeB}`,
      size,
      price: 480,
      image: "assets/products/foros-tee-balloon.webp",
      customNote: ""
    });
  } else if (comboNum === 3) {
    const lotType = document.getElementById("combo3Type").value;
    const qtyNote = document.getElementById("combo3Qty").value.trim() || "6+ piezas (por detallar)";
    addItemToBag({
      key: `combo3::${lotType}::${qtyNote}`,
      name: "Lote Grupal / Patrulla / Provincia",
      variant: lotType,
      size: "Múltiples",
      price: 0,
      image: "assets/products/custom-tlxh-liam.webp",
      customNote: `Detalle grupal: ${qtyNote}`
    });
  }
  toggleBagDrawer(true);
}

/* ==========================================================================
   SHOPPING BAG & CHECKOUT TICKET ENGINE
   ========================================================================== */
function addItemToBag(item) {
  const existing = STATE.bag.find((x) => x.key === item.key);
  if (existing) {
    existing.qty += 1;
  } else {
    STATE.bag.push({ ...item, qty: 1 });
  }
  saveBagToStorage();
  renderBagUI();
  bumpBagCounter();
  showToast(`Agregado: ${item.name} (${item.size})`);
}

function updateBagItemQty(idx, delta) {
  if (!STATE.bag[idx]) return;
  STATE.bag[idx].qty += delta;
  if (STATE.bag[idx].qty <= 0) {
    STATE.bag.splice(idx, 1);
  }
  saveBagToStorage();
  renderBagUI();
}

function clearBag() {
  STATE.bag = [];
  saveBagToStorage();
  renderBagUI();
  showToast("Tu bolsa se vació");
}

function bumpBagCounter() {
  const el = document.getElementById("headerBagCount");
  if (!el) return;
  el.classList.remove("bump");
  void el.offsetWidth;
  el.classList.add("bump");
  setTimeout(() => el.classList.remove("bump"), 300);
}

function renderBagUI() {
  const totalItems = STATE.bag.reduce((acc, it) => acc + it.qty, 0);
  const totalAmount = STATE.bag.reduce((acc, it) => acc + it.price * it.qty, 0);
  const hasQuoteItems = STATE.bag.some((it) => it.price === 0);

  const totalFormatted =
    totalAmount > 0
      ? `${formatMoney(totalAmount)}${hasQuoteItems ? " + Cotización" : ""}`
      : hasQuoteItems
      ? "Cotización personalizada"
      : "$0 MXN";

  document.getElementById("headerBagCount").textContent = totalItems;
  document.getElementById("drawerItemCount").textContent = totalItems;
  document.getElementById("fabBagCount").textContent = totalItems;
  document.getElementById("drawerSubtotal").textContent = totalFormatted;
  document.getElementById("checkoutTotalAmount").textContent = totalFormatted;

  const drawerList = document.getElementById("drawerBagItems");
  const checkoutList = document.getElementById("checkoutBagList");

  if (STATE.bag.length === 0) {
    const emptyHtml = `
      <div style="padding:28px 18px;text-align:center;border-radius:16px;background:var(--bg-page);border:1px dashed var(--line-strong)">
        <p style="font-family:var(--font-display);font-weight:800;font-size:15px;margin-bottom:4px">Tu bolsa está vacía</p>
        <p style="font-size:12.5px;color:var(--ink-muted)">Explora el catálogo o crea una prenda única en JN Custom Lab.</p>
      </div>
    `;
    if (drawerList) drawerList.innerHTML = emptyHtml;
    if (checkoutList) checkoutList.innerHTML = emptyHtml;
    return;
  }

  const itemsHtml = STATE.bag
    .map(
      (item, idx) => `
      <div class="bag-item">
        <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.name)}" class="bag-item__img">
        <div style="min-width:0">
          <div class="bag-item__title">${escapeHtml(item.name)}</div>
          <div class="bag-item__meta">Talla: ${escapeHtml(item.size)} &middot; ${escapeHtml(item.variant)} &middot; ${
        item.price > 0 ? `$${item.price * item.qty} MXN` : "Por cotizar"
      }</div>
          ${item.customNote ? `<div class="bag-item__custom">${escapeHtml(item.customNote)}</div>` : ""}
        </div>
        <div class="qty-stepper">
          <button type="button" onclick="updateBagItemQty(${idx}, -1)" aria-label="Disminuir cantidad">&minus;</button>
          <span>${item.qty}</span>
          <button type="button" onclick="updateBagItemQty(${idx}, 1)" aria-label="Aumentar cantidad">+</button>
        </div>
      </div>`
    )
    .join("");

  if (drawerList) drawerList.innerHTML = itemsHtml;
  if (checkoutList) checkoutList.innerHTML = itemsHtml;
}

function toggleBagDrawer(open) {
  const drawer = document.getElementById("bagDrawer");
  const backdrop = document.getElementById("bagBackdrop");
  if (!drawer || !backdrop) return;
  drawer.classList.toggle("is-open", open);
  drawer.setAttribute("aria-hidden", String(!open));
  backdrop.classList.toggle("is-open", open);
  document.body.classList.toggle("drawer-open", open);
}

function buildOrderTicketText() {
  const folio = `JN-${String(Math.floor(1000 + Math.random() * 9000))}`;
  const name = (document.getElementById("buyerName")?.value || "").trim() || "Cliente Jaguar Negro";
  const group = (document.getElementById("buyerGroup")?.value || "").trim() || "Por confirmar";
  const contact = (document.getElementById("buyerContact")?.value || "").trim() || "Vía DM";
  const delivery = document.getElementById("buyerDelivery")?.value || "Por acordar";
  const payment = document.getElementById("buyerPayment")?.value || "Transferencia SPEI";
  const notes = (document.getElementById("buyerNotes")?.value || "").trim();

  const lines = [
    `ORDEN OFICIAL JAGUAR NEGRO [${folio}]`,
    "----------------------------------------",
    `Cliente: ${name}`,
    `Ciudad / Grupo / Provincia: ${group}`,
    `Contacto: ${contact}`,
    `Entrega: ${delivery}`,
    `Pago elegido: ${payment}`,
    "",
    "PRENDAS SELECCIONADAS:"
  ];

  if (STATE.bag.length === 0) {
    lines.push("- Solicitud de atención / pedido personalizado");
  } else {
    STATE.bag.forEach((it) => {
      const sub = it.price > 0 ? ` — $${it.price * it.qty} MXN` : " — Por cotizar";
      lines.push(`• ${it.qty}x ${it.name} | Talla: ${it.size} | ${it.variant}${sub}`);
      if (it.customNote) {
        lines.push(`  [${it.customNote}]`);
      }
    });
  }

  const totalAmount = STATE.bag.reduce((acc, it) => acc + it.price * it.qty, 0);
  if (totalAmount > 0) {
    lines.push("");
    lines.push(`TOTAL ESTIMADO: $${totalAmount.toLocaleString("es-MX")} MXN`);
  }

  if (notes) {
    lines.push("");
    lines.push(`NOTAS: ${notes}`);
  }

  lines.push("----------------------------------------");
  lines.push("Enviado desde el catálogo oficial Jaguar Negro MX");
  return lines.join("\n");
}

function openTicketModal(ticketText) {
  STATE.lastGeneratedTicket = ticketText;
  document.getElementById("ticketPreviewText").textContent = ticketText;
  const modal = document.getElementById("ticketModal");
  const backdrop = document.getElementById("ticketBackdrop");
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  backdrop.classList.add("is-open");
  document.body.classList.add("modal-open");
}

function closeTicketModal() {
  const modal = document.getElementById("ticketModal");
  const backdrop = document.getElementById("ticketBackdrop");
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  backdrop.classList.remove("is-open");
  document.body.classList.remove("modal-open");
}

function copyOrderTicketOnly() {
  const ticket = buildOrderTicketText();
  copyToClipboard(ticket).then(() => {
    openTicketModal(ticket);
    showToast("Ticket copiado al portapapeles");
  });
}

function copyCurrentTicketAgain() {
  if (!STATE.lastGeneratedTicket) return;
  copyToClipboard(STATE.lastGeneratedTicket).then(() => {
    showToast("Ticket copiado nuevamente");
  });
}

function quickInstagramCheckout() {
  toggleBagDrawer(false);
  const ticket = buildOrderTicketText();
  copyToClipboard(ticket).then(() => {
    openTicketModal(ticket);
  });
}

/* ==========================================================================
   SCROLL PROGRESS, HEADER REACTOR, REVEAL & 3D POINTER TILT (BiblioTech Engine)
   ========================================================================== */
function initMotionAndNavigation() {
  const progressBar = document.getElementById("scrollProgressBar");
  const header = document.getElementById("siteHeader");
  const quickBar = document.getElementById("floatingQuickBar");
  const navLinks = Array.from(document.querySelectorAll(".main-nav .nav-link"));
  const sections = navLinks
    .map((link) => {
      const id = link.getAttribute("href")?.slice(1);
      return id ? document.getElementById(id) : null;
    })
    .filter(Boolean);

  let ticking = false;
  function onScrollFrame() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = docHeight > 0 ? Math.min(1, Math.max(0, scrollTop / docHeight)) : 0;

    if (progressBar) {
      progressBar.style.transform = `scaleX(${ratio})`;
    }
    if (header) {
      header.classList.toggle("is-scrolled", scrollTop > 18);
    }
    if (quickBar) {
      quickBar.classList.toggle("is-visible", scrollTop > 480);
    }

    // Scroll-Spy active navigation link
    let activeId = sections[0]?.id || "inicio";
    for (const sec of sections) {
      const rect = sec.getBoundingClientRect();
      if (rect.top <= 165) {
        activeId = sec.id;
      }
    }
    navLinks.forEach((l) => {
      l.classList.toggle("active", l.getAttribute("href") === `#${activeId}`);
    });

    ticking = false;
  }

  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        window.requestAnimationFrame(onScrollFrame);
        ticking = true;
      }
    },
    { passive: true }
  );
  onScrollFrame();

  // Reveal on Scroll via IntersectionObserver
  const revealEls = document.querySelectorAll(".reveal-on-scroll:not(.is-revealed)");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -24px 0px" }
    );
    revealEls.forEach((el, idx) => {
      el.style.setProperty("--reveal-delay", `${(idx % 4) * 55}ms`);
      io.observe(el);
    });
  } else {
    revealEls.forEach((el) => el.classList.add("is-revealed"));
  }

  // 3D Pointer Tilt + Specular Glare on Hero Reel & Custom Stage
  if (window.matchMedia && !window.matchMedia("(pointer: coarse)").matches) {
    document.querySelectorAll(".tilt-card").forEach((card) => {
      card.addEventListener("pointermove", (e) => {
        const rect = card.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width;
        const py = (e.clientY - rect.top) / rect.height;
        const ry = (px - 0.5) * 7;
        const rx = (0.5 - py) * 7;
        card.style.setProperty("--rx", `${rx.toFixed(2)}deg`);
        card.style.setProperty("--ry", `${ry.toFixed(2)}deg`);
        card.style.setProperty("--glare-x", `${(px * 100).toFixed(1)}%`);
        card.style.setProperty("--glare-y", `${(py * 100).toFixed(1)}%`);
        card.style.setProperty("--glare-opacity", "1");
      });
      card.addEventListener("pointerleave", () => {
        card.style.setProperty("--rx", "0deg");
        card.style.setProperty("--ry", "0deg");
        card.style.setProperty("--glare-opacity", "0");
      });
    });
  }
}

/* ==========================================================================
   DOM BINDINGS & LIFECYCLE
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  initProductSelections();
  loadBagFromStorage();
  renderCategoryTabs();
  renderCatalogGrid();
  initCustomLab();
  renderBagUI();
  initMotionAndNavigation();

  // Search & Sort Controls
  const searchInput = document.getElementById("catalogSearchInput");
  const searchClear = document.getElementById("catalogSearchClear");
  const sortSelect = document.getElementById("catalogSortSelect");

  searchInput.addEventListener("input", (e) => {
    STATE.searchQuery = e.target.value;
    searchClear.classList.toggle("is-visible", STATE.searchQuery.length > 0);
    renderCatalogGrid();
  });

  searchClear.addEventListener("click", () => {
    STATE.searchQuery = "";
    searchInput.value = "";
    searchClear.classList.remove("is-visible");
    renderCatalogGrid();
    searchInput.focus();
  });

  sortSelect.addEventListener("change", (e) => {
    STATE.sortBy = e.target.value;
    renderCatalogGrid();
  });

  document.getElementById("headerSearchBtn").addEventListener("click", () => {
    document.getElementById("catalogo").scrollIntoView({ behavior: "smooth" });
    setTimeout(() => searchInput.focus(), 380);
  });

  // Keyboard shortcuts ('/' focuses search, 'Escape' closes modals/drawers)
  document.addEventListener("keydown", (e) => {
    const tag = document.activeElement?.tagName;
    if (e.key === "/" && tag !== "INPUT" && tag !== "TEXTAREA" && tag !== "SELECT") {
      e.preventDefault();
      document.getElementById("catalogo").scrollIntoView({ behavior: "smooth" });
      searchInput.focus();
    } else if (e.key === "Escape") {
      closeProductModal();
      closeTicketModal();
      toggleBagDrawer(false);
      closeMobileNav();
    }
  });

  // Bag Drawer Controls
  document.getElementById("headerBagBtn").addEventListener("click", () => toggleBagDrawer(true));
  document.getElementById("closeBagBtn").addEventListener("click", () => toggleBagDrawer(false));
  document.getElementById("bagBackdrop").addEventListener("click", () => toggleBagDrawer(false));
  document.getElementById("drawerProceedBtn").addEventListener("click", () => toggleBagDrawer(false));

  // PDP Modal Controls
  document.getElementById("pdpCloseBtn").addEventListener("click", closeProductModal);
  document.getElementById("pdpBackdrop").addEventListener("click", closeProductModal);
  document.getElementById("ticketBackdrop").addEventListener("click", closeTicketModal);

  // Mobile Menu Drawer
  const mobileBtn = document.getElementById("mobileMenuBtn");
  const mainNav = document.getElementById("mainNav");
  function closeMobileNav() {
    mainNav.classList.remove("is-open");
    mobileBtn.setAttribute("aria-expanded", "false");
    document.body.classList.remove("nav-open");
  }
  mobileBtn.addEventListener("click", () => {
    const willOpen = !mainNav.classList.contains("is-open");
    mainNav.classList.toggle("is-open", willOpen);
    mobileBtn.setAttribute("aria-expanded", String(willOpen));
    document.body.classList.toggle("nav-open", willOpen);
  });
  mainNav.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeMobileNav));
  window.addEventListener("resize", () => {
    if (window.innerWidth > 1080) closeMobileNav();
  });

  // Hero Studio Video Play/Pause Toggle
  const video = document.getElementById("heroReelVideo");
  const playBtn = document.getElementById("reelPlayToggle");
  const playIcon = document.getElementById("reelPlayIcon");
  if (video && playBtn && playIcon) {
    playBtn.addEventListener("click", () => {
      if (video.paused) {
        video.play();
        playIcon.innerHTML = '<use href="#icon-pause"></use>';
      } else {
        video.pause();
        playIcon.innerHTML = '<use href="#icon-play"></use>';
      }
    });
  }

  // Direct Checkout Form Submit
  document.getElementById("checkoutOrderForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const ticket = buildOrderTicketText();
    copyToClipboard(ticket).then(() => {
      openTicketModal(ticket);
    });
  });
});
