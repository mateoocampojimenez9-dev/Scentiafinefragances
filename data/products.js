// ==========================================================================
// SCENTIA FINE FRAGRANCES - BASE DE DATOS DE PERFUMES ÁRABES (HOMBRE & MUJER)
// Precios en Pesos Colombianos (COP) y Costos de Importación desde Chile (CLP)
// ==========================================================================

const INITIAL_PRODUCTS = [
  // ========================================================================
  // COLECCIÓN MASCULINA TOP
  // ========================================================================
  {
    id: "asad-edp",
    name: "Lattafa Asad",
    subtitle: "Eau de Parfum 100 ML - Hombre",
    brand: "Lattafa Perfumes",
    gender: "hombre",
    category: "especiados",
    tags: ["hombre", "bestseller", "especiados", "amaderados"],
    badge: "MÁS VENDIDO #1 🔥",
    priceCOP: 195000,
    originalPriceCOP: 245000,
    costCLP: 22000,
    image: "assets/images/perfumes/asad.jpg",
    rating: 4.9,
    reviewsCount: 142,
    inspiration: "Dior Sauvage Elixir",
    shortDesc: "Potente, seductor y con una fijación monstruosa. Especias cálidas con café, tabaco y vainilla.",
    description: "Lattafa Asad es la fragancia árabe masculina por excelencia. Con una apertura picante de pimienta negra y notas frutales de piña con tabaco refinado, evoluciona hacia un corazón tostado de café con pachulí e iris, finalizando en una base rica de ámbar seco, benjuí y vainilla dulce. Deja una estela magnética imposible de ignorar.",
    pyramid: {
      top: "Pimienta Negra, Piña, Tabaco",
      heart: "Café Arábica, Pachulí, Iris",
      base: "Ámbar, Vainilla Bourbon, Maderas Secas, Benjuí"
    },
    performance: {
      longevity: "10 a 14 Horas",
      sillage: "Pesada / Muy Alta",
      occasion: "Noches, Citas, Salidas, Eventos Especiales",
      season: "Clima templado a frío, noches de fiesta"
    },
    inStock: true
  },
  {
    id: "khamrah-edp",
    name: "Lattafa Khamrah",
    subtitle: "Eau de Parfum 100 ML - Hombre / Unisex",
    brand: "Lattafa Perfumes",
    gender: "hombre",
    category: "gourmand",
    tags: ["hombre", "bestseller", "gourmand", "dulces"],
    badge: "VIRAL MUNDIAL ⭐",
    priceCOP: 235000,
    originalPriceCOP: 289000,
    costCLP: 26000,
    image: "assets/images/perfumes/khamrah.jpg",
    rating: 5.0,
    reviewsCount: 198,
    inspiration: "Kilian Angels' Share (Vibes Licoroso & Canela)",
    shortDesc: "La joya gourmand: canela, dátiles dulces, praliné y vainilla en una botella de cristal tallado.",
    description: "Khamrah es una obra de arte olfativa. Abre con una explosión reconfortante de canela, nuez moscada y bergamota, seguida de un corazón adictivo de dátiles y praliné crujiente. En el secado, la vainilla cremosa, el benjuí y la madera de akigala crean un aura de lujo absoluto.",
    pyramid: {
      top: "Canela, Nuez Moscada, Bergamota Fresca",
      heart: "Dátiles, Praliné Dulce, Tuberosa, Mahonial",
      base: "Vainilla Cremosa, Haba Tonka, Benjuí, Madera de Akigala"
    },
    performance: {
      longevity: "12 a 16 Horas",
      sillage: "Enorme / Llena habitaciones",
      occasion: "Citas románticas, Fiestas, Clima frío",
      season: "Invierno, Noches frías, Citas"
    },
    inStock: true
  },
  {
    id: "khamrah-qahwa",
    name: "Lattafa Khamrah Qahwa",
    subtitle: "Eau de Parfum 100 ML - Hombre / Unisex",
    brand: "Lattafa Perfumes",
    gender: "hombre",
    category: "gourmand",
    tags: ["hombre", "bestseller", "gourmand", "especiados"],
    badge: "EDICIÓN CAFÉ ☕",
    priceCOP: 250000,
    originalPriceCOP: 310000,
    costCLP: 28000,
    image: "assets/images/perfumes/khamrah-qahwa.jpg",
    rating: 4.9,
    reviewsCount: 114,
    inspiration: "Khamrah Original + Café Arábica Tostado y Cardamomo",
    shortDesc: "El ADN de Khamrah elevado con una nota profunda de café árabe tostado y cardamomo picante.",
    description: "Una de las sensaciones más codiciadas del año. Khamrah Qahwa incorpora el café arábica tradicional con un toque especiado de jengibre y cardamomo que reduce el dulzor haciéndolo aún más sofisticado, maduro y seductor para hombres.",
    pyramid: {
      top: "Jengibre, Canela Dulce, Cardamomo",
      heart: "Café Arábica Tostado, Praliné, Frutas Confitadas",
      base: "Café Negro, Vainilla de Madagascar, Haba Tonka, Almizcle"
    },
    performance: {
      longevity: "12+ Horas",
      sillage: "Muy Potente",
      occasion: "Noche, Eventos elegantes, Citas de impacto",
      season: "Clima frío y noches"
    },
    inStock: true
  },
  {
    id: "fakhar-black",
    name: "Lattafa Fakhar Black (For Him)",
    subtitle: "Eau de Parfum 100 ML - Hombre",
    brand: "Lattafa Perfumes",
    gender: "hombre",
    category: "frescos",
    tags: ["hombre", "bestseller", "frescos", "versatiles"],
    badge: "EL MÁS VERSÁTIL 🍏",
    priceCOP: 185000,
    originalPriceCOP: 225000,
    costCLP: 21000,
    image: "assets/images/perfumes/fakhar-black.jpg",
    rating: 4.8,
    reviewsCount: 167,
    inspiration: "Yves Saint Laurent Y EDP",
    shortDesc: "Manzana verde fresca, jengibre, salvia aromática y fondo amaderado. El imán de cumplidos diario.",
    description: "Conocido mundialmente como el 'Silver/Black horse' y clon por excelencia de YSL Y EDP. Fakhar Black ofrece una frescura vibrante de manzana y jengibre combinada con aromáticas como la salvia y el enebro, equilibrado sobre maderas y haba tonka. Ideal para usar en cualquier momento y lugar.",
    pyramid: {
      top: "Manzana Verde, Jengibre, Bergamota",
      heart: "Salvia Aromática, Bayas de Enebro, Lavanda, Geranio",
      base: "Haba Tonka, Madera de Ámbar, Cedro, Vetiver"
    },
    performance: {
      longevity: "8 a 10 Horas",
      sillage: "Moderada a Alta",
      occasion: "Uso diario, Oficina, Universidad, Salidas casuales",
      season: "Todo el año (4 Estaciones)"
    },
    inStock: true
  },
  {
    id: "badee-oud-for-glory",
    name: "Lattafa Bade'e Al Oud (Oud for Glory)",
    subtitle: "Eau de Parfum 100 ML - Hombre",
    brand: "Lattafa Perfumes",
    gender: "hombre",
    category: "amaderados",
    tags: ["hombre", "amaderados", "oud", "lujo"],
    badge: "LUJO & AUTORIDAD 👑",
    priceCOP: 220000,
    originalPriceCOP: 275000,
    costCLP: 25000,
    image: "assets/images/perfumes/badee-oud-for-glory.jpg",
    rating: 4.9,
    reviewsCount: 135,
    inspiration: "Initio Oud for Greatness",
    shortDesc: "Azafrán refinado, nuez moscada, madera de oud real y pachulí en una imponente botella dorada.",
    description: "Una obra maestra de presencia imponente. Bade'e Al Oud (Oud for Glory) proyecta poder, elegancia y distinción. Abre con azafrán exótico y lavanda fresca que dan paso a un corazón de agarwood ahumado y pachulí natural sobre una cama de almizcle limpio.",
    pyramid: {
      top: "Azafrán Natural, Nuez Moscada, Lavanda",
      heart: "Madera de Agarwood (Oud), Pachulí",
      base: "Oud Puro, Almizcle Blanco, Pachulí"
    },
    performance: {
      longevity: "12 a 14 Horas",
      sillage: "Bestial / Muy Notorio",
      occasion: "Negocios, Eventos de gala, Noches frías, Cenas de lujo",
      season: "Noches y Clima Templado a Frío"
    },
    inStock: true
  },
  {
    id: "badee-honor-glory",
    name: "Lattafa Bade'e Al Oud (Honor & Glory)",
    subtitle: "Eau de Parfum 100 ML - Hombre / Unisex",
    brand: "Lattafa Perfumes",
    gender: "hombre",
    category: "gourmand",
    tags: ["hombre", "bestseller", "gourmand", "dulces"],
    badge: "PIÑA BRÛLÉE 🍍",
    priceCOP: 225000,
    originalPriceCOP: 280000,
    costCLP: 25000,
    image: "assets/images/perfumes/badee-honor-glory.jpg",
    rating: 4.9,
    reviewsCount: 120,
    inspiration: "Creación Original (Piña Horneada Caramelizada & Canela)",
    shortDesc: "Piña caramelizada al horno con canela, vainilla cremosa, cúrcuma y sándalo. Irresistible.",
    description: "Honor & Glory en su deslumbrante botella blanca y dorada ha conquistado la perfumería actual. Es un postre gourmet exótico: piña jugosa tostada con azúcar moreno y canela, envuelta en vainilla balsámica, benjuí y maderas de cachemira.",
    pyramid: {
      top: "Piña Brûlée Caramelizada, Canela",
      heart: "Benjuí, Cúrcuma, Vainilla Cálida, Pimienta Negra",
      base: "Sándalo Australiano, Vainilla Bourbon, Cashmeran, Musgo"
    },
    performance: {
      longevity: "10 a 12 Horas",
      sillage: "Alta / Elogios asegurados",
      occasion: "Citas, Salidas con amigos, Eventos diurnos o nocturnos",
      season: "Otoño, Primavera, Noches de Verano"
    },
    inStock: true
  },
  {
    id: "qaed-al-fursan",
    name: "Lattafa Qaed Al Fursan",
    subtitle: "Eau de Parfum 90 ML - Hombre",
    brand: "Lattafa Perfumes",
    gender: "hombre",
    category: "frescos",
    tags: ["hombre", "bestseller", "frescos", "frutales"],
    badge: "PIÑA AHUMADA 🍍🔥",
    priceCOP: 175000,
    originalPriceCOP: 215000,
    costCLP: 19000,
    image: "assets/images/perfumes/qaed-al-fursan.jpg",
    rating: 4.8,
    reviewsCount: 153,
    inspiration: "Nishane Hacivat / Creed Aventus Dulce",
    shortDesc: "Explosión de piña dulce natural con notas de madera de abedul ahumada y fondo de ámbar.",
    description: "Uno de los perfumes árabes más elogiados y queridos en Colombia. Qaed Al Fursan es pura piña madura y dulce sobre un fondo oscuro de madera ahumada, jazmín blanco y ámbar dorado. Fresco pero con personalidad firme y masculina.",
    pyramid: {
      top: "Piña Dulce Silvestre, Bergamota, Manzana",
      heart: "Abedul Blanco Ahumado, Jazmín, Rosa Árabe",
      base: "Ámbar Gris, Vainilla Suave, Musgo de Roble, Almizcle"
    },
    performance: {
      longevity: "8 a 10 Horas",
      sillage: "Moderada-Alta",
      occasion: "Uso diario, Fiestas al aire libre, Citas casuales",
      season: "Primavera, Verano, Días cálidos"
    },
    inStock: true
  },
  {
    id: "maahir-black",
    name: "Lattafa Maahir Black Edition",
    subtitle: "Eau de Parfum 100 ML - Hombre",
    brand: "Lattafa Perfumes",
    gender: "hombre",
    category: "amaderados",
    tags: ["hombre", "amaderados", "cuero", "oscuros"],
    badge: "CABALLO NEGRO 🐎",
    priceCOP: 240000,
    originalPriceCOP: 295000,
    costCLP: 27000,
    image: "assets/images/perfumes/maahir-black.jpg",
    rating: 4.7,
    reviewsCount: 94,
    inspiration: "Orto Parisi Boccanera / Terroni (Ahumado Oscuro)",
    shortDesc: "La legendaria botella del caballo negro: maderas ahumadas, cuero oscuro, incienso y azafrán.",
    description: "Para hombres con carácter implacable. Maahir Black Edition es una fragancia oscura, misteriosa y potente. Abre con pimientas y azafrán, avanzando hacia resinas ahumadas, aceite de cade y una densa base de cuero negro y maderas de oud.",
    pyramid: {
      top: "Pimienta Negra, Pimienta Rosa, Azafrán",
      heart: "Aceite de Cade Ahumado, Ruibarbo, Bálsamo de Gurjum",
      base: "Cuero Negro, Madera de Gaiac, Oud, Cedro, Almizcle"
    },
    performance: {
      longevity: "12 a 14 Horas",
      sillage: "Extrema / Proyección pesada",
      occasion: "Noches frías, Chaqueta de cuero, Noches de fiesta exclusiva",
      season: "Invierno y Climas fríos (Bogotá, Pasto, Manizales)"
    },
    inStock: true
  },
  {
    id: "asad-zanzibar",
    name: "Lattafa Asad Zanzibar",
    subtitle: "Eau de Parfum 100 ML - Hombre",
    brand: "Lattafa Perfumes",
    gender: "hombre",
    category: "frescos",
    tags: ["hombre", "frescos", "acuaticos", "nuevos"],
    badge: "NUEVO LANZAMIENTO 🌊",
    priceCOP: 210000,
    originalPriceCOP: 260000,
    costCLP: 24000,
    image: "assets/images/perfumes/asad-zanzibar.jpg",
    rating: 4.8,
    reviewsCount: 88,
    inspiration: "Jean Paul Gaultier Le Beau Paradise Garden vibes",
    shortDesc: "Acuático, salado y exótico con agua de coco, pimienta negra, iris y vainilla cremosa.",
    description: "La evolución marina de la línea Asad. Diseñado especialmente para climas cálidos y templados, combina la frescura de la brisa marina y el agua de coco tropical con la base seductora de iris, incienso y vainilla característica de Lattafa.",
    pyramid: {
      top: "Pimienta Negra, Lavanda Marina, Notas Saladas",
      heart: "Agua de Coco Natural, Iris empolvado, Incienso",
      base: "Vainilla Cremosa, Incienso de Olíbano, Maderas Tropicales"
    },
    performance: {
      longevity: "8 a 10 Horas",
      sillage: "Moderada a Alta",
      occasion: "Días soleados, Playa, Salidas casuales, Tardes de calor",
      season: "Verano, Climas cálidos (Medellín, Cali, Costa Caribe)"
    },
    inStock: true
  },
  {
    id: "asad-bourbon",
    name: "Lattafa Asad Bourbon",
    subtitle: "Eau de Parfum 100 ML - Hombre",
    brand: "Lattafa Perfumes",
    gender: "hombre",
    category: "especiados",
    tags: ["hombre", "especiados", "licorosos", "lujo"],
    badge: "EDICIÓN BOURBON 🥃",
    priceCOP: 220000,
    originalPriceCOP: 270000,
    costCLP: 25000,
    image: "assets/images/perfumes/asad-bourbon.jpg",
    rating: 4.9,
    reviewsCount: 76,
    inspiration: "Givenchy Gentleman Réserve Privée / Sauvage Elixir",
    shortDesc: "Notas licorosas de barrica de bourbon, cacao amargo, especias nobles y ámbar profundo.",
    description: "Una variante ultra elegante y nocturna del legendario Asad. Introduce matices de licor noble añejado en barrica de roble, cacao refinado y maderas preciosas que convierten cada atomización en una declaración de alta alcurnia.",
    pyramid: {
      top: "Pimienta Negra, Nuez Moscada, Bergamota",
      heart: "Acorde de Bourbon Añejo, Cacao, Iris, Café",
      base: "Ámbar, Madera de Roble, Vainilla Ahumada, Pachulí"
    },
    performance: {
      longevity: "10 a 12 Horas",
      sillage: "Fuerte y Elegante",
      occasion: "Cenas formales, Noches de gala, Citas románticas",
      season: "Clima frío y Noches"
    },
    inStock: true
  },
  {
    id: "khamrah-dukhan",
    name: "Lattafa Khamrah Dukhan",
    subtitle: "Eau de Parfum 100 ML - Hombre",
    brand: "Lattafa Perfumes",
    gender: "hombre",
    category: "amaderados",
    tags: ["hombre", "amaderados", "ahumados", "novedad"],
    badge: "EDICIÓN DUKHAN (HUMO) 💨",
    priceCOP: 255000,
    originalPriceCOP: 315000,
    costCLP: 28000,
    image: "assets/images/perfumes/khamrah-dukhan.jpg",
    rating: 4.9,
    reviewsCount: 65,
    inspiration: "Khamrah + Incienso de Oud Real y Resinas Árabes",
    shortDesc: "El lado más oscuro e hipnótico de Khamrah con maderas ahumadas, mirra y ámbar negro.",
    description: "Dukhan significa 'humo' en árabe. Esta versión eleva la fórmula con acordes de bakhoor tradicional, resinas orientales y madera ahumada que contrastan gloriosamente con los dátiles confitados y la canela de Khamrah.",
    pyramid: {
      top: "Incienso Bakhoor, Canela, Nuez Moscada",
      heart: "Dátiles Ahumados, Mirra Sagrada, Madera de Cedro",
      base: "Ámbar Negro, Vainilla Oscura, Oud, Benjuí"
    },
    performance: {
      longevity: "12 a 14 Horas",
      sillage: "Pesada / Muy Distinguida",
      occasion: "Ocasiones exclusivas, Noches frías, Fiestas de gala",
      season: "Invierno y Climas templados"
    },
    inStock: true
  },
  {
    id: "khamrah-waha",
    name: "Lattafa Khamrah Waha",
    subtitle: "Eau de Parfum 100 ML - Hombre / Unisex",
    brand: "Lattafa Perfumes",
    gender: "hombre",
    category: "gourmand",
    tags: ["hombre", "gourmand", "frutales", "novedad"],
    badge: "EDICIÓN OASIS 🌴",
    priceCOP: 260000,
    originalPriceCOP: 320000,
    costCLP: 29000,
    image: "assets/images/perfumes/khamrah-waha.jpg",
    rating: 5.0,
    reviewsCount: 52,
    inspiration: "Oasis Arábico Gourmand Frutal y Especiado",
    shortDesc: "Frutas exóticas de oasis, miel dorada, cardamomo y crema de vainilla.",
    description: "Inspirado en los oasis del desierto árabe, Khamrah Waha combina notas frutales dulces e hidratadas con un fondo cálido y acogedor de miel, almendra tostada y madera de sándalo.",
    pyramid: {
      top: "Higo Maduro, Bergamota, Cardamomo Verde",
      heart: "Miel Silvestre, Dátiles, Flor de Azahar",
      base: "Sándalo Cremoso, Vainilla, Almizcle Blanco, Ámbar"
    },
    performance: {
      longevity: "11 a 13 Horas",
      sillage: "Alta",
      occasion: "Eventos especiales, Noches de clima templado o cálido",
      season: "Todo el año"
    },
    inStock: true
  },
  {
    id: "fakhar-platin",
    name: "Lattafa Fakhar Man Platin",
    subtitle: "Eau de Parfum 100 ML - Hombre",
    brand: "Lattafa Perfumes",
    gender: "hombre",
    category: "frescos",
    tags: ["hombre", "frescos", "citricos", "elegantes"],
    badge: "EDICIÓN PLATINUM ✨",
    priceCOP: 190000,
    originalPriceCOP: 235000,
    costCLP: 22000,
    image: "assets/images/perfumes/fakhar-platin.jpg",
    rating: 4.8,
    reviewsCount: 61,
    inspiration: "Perfumería Fougère Metálica & Cítrica Moderna",
    shortDesc: "Cítricos chispeantes, cardamomo plateado, notas marinas y madera de cedro blanco.",
    description: "Una variante fresca y refinada con una estética platinada. Perfecta para el hombre moderno que busca frescura impecable durante el día con un toque especiado que dura toda la jornada laboral.",
    pyramid: {
      top: "Toronja Plateada, Bergamota, Cardamomo",
      heart: "Acorde Marino Limpio, Geranio, Salvia",
      base: "Cedro Blanco, Vetiver, Almizcle Cristalino, Ámbar"
    },
    performance: {
      longevity: "8 a 10 Horas",
      sillage: "Moderada a Proyectada",
      occasion: "Oficina, Reuniones de trabajo, Gimnasio, Día a día",
      season: "Primavera y Verano"
    },
    inStock: true
  },

  // ========================================================================
  // COLECCIÓN FEMENINA TOP (LAS MÁS VENDIDAS)
  // ========================================================================
  {
    id: "yara-pink",
    name: "Lattafa Yara (Rosa)",
    subtitle: "Eau de Parfum 100 ML - Mujer",
    brand: "Lattafa Perfumes",
    gender: "mujer",
    category: "dulces",
    tags: ["mujer", "bestseller", "dulces", "gourmand", "favoritas"],
    badge: "OFERTA ESTRELLA ⭐",
    priceCOP: 169000,
    originalPriceCOP: 220000,
    costCLP: 21000,
    image: "assets/images/perfumes/yara-rosa.jpg",
    rating: 5.0,
    reviewsCount: 320,
    inspiration: "Creación Original Lattafa (Malteada de Fresa & Vainilla)",
    shortDesc: "El perfume árabe femenino más vendido del mundo: helado cremoso de fresa, orquídeas y vainilla.",
    description: "Lattafa Yara Rosa es un fenómeno global sin precedentes. Evoca una deliciosa malteada cremosa de fresa con orquídeas aterciopeladas, heliotropo y frutas tropicales dulces sobre una base envolvente de vainilla de Madagascar y almizcle esponjoso. Femenino, adictivo y elogiado por todos.",
    pyramid: {
      top: "Heliotropo Dulce, Orquídea Silvestre, Mandarina",
      heart: "Acorde Gourmand Cremoso, Frutas Tropicales",
      base: "Vainilla de Madagascar, Almizcle Blanco Suave, Sándalo"
    },
    performance: {
      longevity: "8 a 10 Horas",
      sillage: "Alta y Encantadora",
      occasion: "Uso diario, Citas, Salidas, Regalo perfecto",
      season: "Todo el año (Muy versátil)"
    },
    inStock: true
  },
  {
    id: "eclaire-edp",
    name: "Lattafa Eclaire",
    subtitle: "Eau de Parfum 100 ML - Mujer / Unisex",
    brand: "Lattafa Perfumes",
    gender: "mujer",
    category: "gourmand",
    tags: ["mujer", "bestseller", "gourmand", "dulces"],
    badge: "MEGA VIRAL BIANCO LATTE 🍮",
    priceCOP: 245000,
    originalPriceCOP: 300000,
    costCLP: 27000,
    image: "assets/images/perfumes/eclaire.jpg",
    rating: 5.0,
    reviewsCount: 210,
    inspiration: "Bianco Latte de Giardini di Toscana",
    shortDesc: "Caramelo derretido, leche tibia condensada, miel y vainilla pura. Pura adicción gourmand.",
    description: "La réplica más aclamada y buscada en la historia de la perfumería árabe. Eclaire captura a la perfección el aroma dulce y reconfortante de leche tibia con caramelo líquido, flores blancas bañadas en miel y un fondo interminable de vainilla francesa y praliné.",
    pyramid: {
      top: "Caramelo Derretido, Leche Tibia, Azúcar Moreno",
      heart: "Miel Dorada, Flores Blancas",
      base: "Vainilla Bourbon, Praliné Dulce, Almizcle Limpio"
    },
    performance: {
      longevity: "12 a 14 Horas",
      sillage: "Enorme / Llena habitaciones",
      occasion: "Citas románticas, Tardes de café, Noches frías",
      season: "Otoño, Invierno y Climas templados"
    },
    inStock: true
  },
  {
    id: "yara-tous",
    name: "Lattafa Yara Tous (Mango)",
    subtitle: "Eau de Parfum 100 ML - Mujer",
    brand: "Lattafa Perfumes",
    gender: "mujer",
    category: "frutales",
    tags: ["mujer", "bestseller", "frutales", "tropicales"],
    badge: "MANGO TROPICAL 🥭",
    priceCOP: 190000,
    originalPriceCOP: 235000,
    costCLP: 22000,
    image: "assets/images/perfumes/yara-tous.jpg",
    rating: 4.9,
    reviewsCount: 184,
    inspiration: "Mugler Alien Goddess / Escada Tropical Vibes",
    shortDesc: "Mango jugoso y dulce, crema de coco, maracuyá y flor de azahar. Vacaciones en una botella.",
    description: "La versión amarilla y tropical de la familia Yara. Es un paraíso caribeño: mango maduro recién cortado con néctar de maracuyá y leche de coco, fusionado con flores blancas solares y una base acogedora de vainilla y madera de cachemira.",
    pyramid: {
      top: "Mango Maduro, Coco Cremoso, Maracuyá",
      heart: "Jazmín Sambac, Flor de Azahar, Heliotropo",
      base: "Vainilla Bourbon, Cachemira, Almizcle Blanco"
    },
    performance: {
      longevity: "9 a 11 Horas",
      sillage: "Moderada a Alta",
      occasion: "Días soleados, Playa, Tardes casuales, Clima cálido",
      season: "Primavera, Verano, Climas cálidos (Cali, Medellín, Costa)"
    },
    inStock: true
  },
  {
    id: "yara-candy",
    name: "Lattafa Yara Candy",
    subtitle: "Eau de Parfum 100 ML - Mujer",
    brand: "Lattafa Perfumes",
    gender: "mujer",
    category: "dulces",
    tags: ["mujer", "dulces", "gourmand", "nuevos"],
    badge: "NUEVO CANDY CHERRY 🍬",
    priceCOP: 210000,
    originalPriceCOP: 260000,
    costCLP: 24000,
    image: "assets/images/perfumes/yara-candy.jpg",
    rating: 4.9,
    reviewsCount: 128,
    inspiration: "Caramelos confitados & Cereza negra gourmet",
    shortDesc: "Golosinas efervescentes, cereza negra dulce, mandarina confitada y flor de gardenia.",
    description: "El lanzamiento más reciente y viral de Yara. Yara Candy evoca una boutique de dulces finos en París: apertura chispeante de grosellas negras y cereza, un corazón floral de gardenia azucarada y un fondo tibio de sirope de vainilla.",
    pyramid: {
      top: "Grosellas Negras, Mandarina Verde Confitada, Cereza",
      heart: "Gardenia Silvestre, Flor de Fresa, Caramelo",
      base: "Almizcle Vainillado, Ámbar Cálido, Sándalo"
    },
    performance: {
      longevity: "8 a 10 Horas",
      sillage: "Femenina y Chispeante",
      occasion: "Salidas con amigas, Citas juveniles, Fiestas",
      season: "Todo el año"
    },
    inStock: true
  },
  {
    id: "nebras-edp",
    name: "Lattafa Nebras (Pride Collection)",
    subtitle: "Eau de Parfum 100 ML - Mujer / Unisex",
    brand: "Lattafa Perfumes",
    gender: "mujer",
    category: "gourmand",
    tags: ["mujer", "bestseller", "gourmand", "chocolate"],
    badge: "INSPIRACIÓN BILLIE EILISH 🍫",
    priceCOP: 235000,
    originalPriceCOP: 285000,
    costCLP: 26000,
    image: "assets/images/perfumes/nebras.jpg",
    rating: 4.9,
    reviewsCount: 147,
    inspiration: "Billie Eilish No. 1",
    shortDesc: "Cacao fino, frutos rojos jugosos, vainilla tostada, mandarina y azúcar moreno.",
    description: "Uno de los perfumes más sensuales y caros en aroma de Lattafa. Perteneciente a la exclusiva Pride Collection, Nebras abre con frutos rojos y mandarina antes de desplegar un corazón de chocolate suave, vainilla cremosa y rosa sobre una cama de azúcar y haba tonka.",
    pyramid: {
      top: "Frutos Rojos Silvestres, Mandarina Madura",
      heart: "Vainilla Francesa, Cacao Oscuro, Rosa Dulce",
      base: "Azúcar Moreno, Haba Tonka, Ámbar Cálido, Almizcle"
    },
    performance: {
      longevity: "10 a 12 Horas",
      sillage: "Alta y Seductora",
      occasion: "Citas nocturnas, Eventos elegantes, Clima frío",
      season: "Otoño e Invierno"
    },
    inStock: true
  },
  {
    id: "mayar-edp",
    name: "Lattafa Mayar",
    subtitle: "Eau de Parfum 100 ML - Mujer",
    brand: "Lattafa Perfumes",
    gender: "mujer",
    category: "frutales",
    tags: ["mujer", "bestseller", "frutales", "florales"],
    badge: "INSPIRACIÓN ANGEL NOVA 🌸",
    priceCOP: 195000,
    originalPriceCOP: 240000,
    costCLP: 22000,
    image: "assets/images/perfumes/mayar.jpg",
    rating: 4.9,
    reviewsCount: 162,
    inspiration: "Mugler Angel Nova",
    shortDesc: "Lichi exótico jugoso, frambuesa dulce, rosa damascena blanca y vainilla limpia.",
    description: "Un torbellino de cumplidos femeninos. Mayar en su hermosa botella turquesa y dorada es pura feminidad moderna: lichi refrescante mezclado con frambuesa silvestre y una rosa radiante que perdura todo el día dejando una estela inolvidable.",
    pyramid: {
      top: "Lichi Exótico, Frambuesa Dulce, Hojas de Violeta",
      heart: "Rosa Damascena Blanca, Peonía, Jazmín",
      base: "Vainilla Suave, Almizcle Limpio"
    },
    performance: {
      longevity: "9 a 11 Horas",
      sillage: "Radiante / Cumplidos asegurados",
      occasion: "Día a día, Oficina, Universidad, Salidas casuales",
      season: "Primavera y Verano"
    },
    inStock: true
  },
  {
    id: "badee-sublime",
    name: "Lattafa Bade'e Al Oud (Sublime)",
    subtitle: "Eau de Parfum 100 ML - Mujer / Unisex",
    brand: "Lattafa Perfumes",
    gender: "mujer",
    category: "frutales",
    tags: ["mujer", "frutales", "dulces", "lujo"],
    badge: "INSPIRACIÓN KAYALI APPLE 🍎",
    priceCOP: 220000,
    originalPriceCOP: 270000,
    costCLP: 25000,
    image: "assets/images/perfumes/badee-sublime.jpg",
    rating: 4.8,
    reviewsCount: 115,
    inspiration: "Kayali Eden Juicy Apple 01",
    shortDesc: "Manzana roja crujiente, lichi, ciruela negra, flor de azahar y vainilla burbujeante.",
    description: "La edición roja rubí de la legendaria línea Bade'e Al Oud. Un perfume jugoso, alegre y lujoso centrado en la manzana roja confitada y frutas rojas exóticas con un fondo aterciopelado de vainilla y pachulí suave.",
    pyramid: {
      top: "Manzana Roja Crujiente, Lichi, Ciruela Negra",
      heart: "Rosa Silvestre, Jazmín Blanco, Flor de Azahar",
      base: "Vainilla de Bourbon, Musgo de Roble, Pachulí Dulce"
    },
    performance: {
      longevity: "10 a 12 Horas",
      sillage: "Alta y Proyectada",
      occasion: "Salidas nocturnas, Fiestas, Citas divertidas",
      season: "Todo el año"
    },
    inStock: true
  },
  {
    id: "ansaam-gold",
    name: "Lattafa Ansaam Gold (Pride Collection)",
    subtitle: "Eau de Parfum 100 ML - Mujer",
    brand: "Lattafa Perfumes",
    gender: "mujer",
    category: "dulces",
    tags: ["mujer", "dulces", "lujo", "marshmallow"],
    badge: "INSPIRACIÓN ORIANA / KILIAN 🍬",
    priceCOP: 240000,
    originalPriceCOP: 295000,
    costCLP: 27000,
    image: "assets/images/perfumes/ansaam-gold.jpg",
    rating: 5.0,
    reviewsCount: 98,
    inspiration: "Parfums de Marly Oriana / Kilian Love Don't Be Shy",
    shortDesc: "Malvavisco esponjoso, azahar de naranjo, frambuesa confitada y crema de vainilla real.",
    description: "Pura realeza emiratí. Ansaam Gold es el aroma de una princesa: malvaviscos esponjosos azucarados, crema batida y notas florales nobles de jazmín y azahar con un toque de frambuesa jugosa. Elegancia dulce insuperable.",
    pyramid: {
      top: "Mandarina Dulce, Pera Confitada",
      heart: "Malvavisco Esponjoso (Marshmallow), Jazmín, Rosa",
      base: "Vainilla de Madagascar, Frambuesa, Almizcle Blanco"
    },
    performance: {
      longevity: "11 a 13 Horas",
      sillage: "Pesada y Lujosa",
      occasion: "Bodas, Cenas elegantes, Eventos de gala",
      season: "Clima templado a frío"
    },
    inStock: true
  },
  {
    id: "angham-edp",
    name: "Lattafa Angham",
    subtitle: "Eau de Parfum 100 ML - Mujer",
    brand: "Lattafa Perfumes",
    gender: "mujer",
    category: "dulces",
    tags: ["mujer", "bestseller", "dulces", "elegantes"],
    badge: "INSPIRACIÓN BURBERRY GODDESS 👑",
    priceCOP: 230000,
    originalPriceCOP: 285000,
    costCLP: 26000,
    image: "assets/images/perfumes/angham.jpg",
    rating: 4.9,
    reviewsCount: 132,
    inspiration: "Burberry Goddess",
    shortDesc: "Trío de vainillas de Madagascar, lavanda fina francesa luminosa y jengibre chispeante.",
    description: "Inspirado en la sensación olfativa del año, Burberry Goddess. Angham es una obra maestra de contrastes: la frescura aromática de la lavanda fina y el jengibre equilibrada con tres extracciones diferentes de vainilla pura que envuelven la piel en un aura de diosa.",
    pyramid: {
      top: "Jengibre Chispeante, Mandarina Luminosa",
      heart: "Lavanda Francesa Noble, Flor de Azahar, Cacao",
      base: "Infusión de Vainilla de Madagascar, Caviar de Vainilla, Ámbar"
    },
    performance: {
      longevity: "10 a 12 Horas",
      sillage: "Fina, Distinguida y Duradera",
      occasion: "Reuniones importantes, Citas formales, Día o noche",
      season: "Todo el año"
    },
    inStock: true
  },
  {
    id: "affection-edp",
    name: "Lattafa Affection (Love Affection)",
    subtitle: "Eau de Parfum 100 ML - Mujer / Unisex",
    brand: "Lattafa Perfumes",
    gender: "mujer",
    category: "gourmand",
    tags: ["mujer", "gourmand", "pistacho"],
    badge: "PISTACHO & HELADO GELATO 🍨",
    priceCOP: 225000,
    originalPriceCOP: 275000,
    costCLP: 25000,
    image: "assets/images/perfumes/affection.jpg",
    rating: 4.8,
    reviewsCount: 89,
    inspiration: "Kayali Yum Pistachio Gelato 33",
    shortDesc: "Pistacho tostado crujiente, avellanas, crema batida, algodón de azúcar y helado cremoso.",
    description: "Una experiencia culinaria italiana hecha perfume. Affection recrea fielmente la textura cremosa y dulce de un gelato de pistacho con avellanas tostadas, malvaviscos y algodón de azúcar sobre una base acogedora de haba tonka.",
    pyramid: {
      top: "Pistacho Tostado, Avellana, Cardamomo Suave, Casis",
      heart: "Malvavisco Esponjoso, Lirio de los Valles, Jazmín",
      base: "Algodón de Azúcar, Vainilla Batida, Haba Tonka, Cedro"
    },
    performance: {
      longevity: "9 a 11 Horas",
      sillage: "Deliciosa y Acompañante",
      occasion: "Salidas casuales, Citas de postre, Días frescos",
      season: "Primavera, Otoño e Invierno"
    },
    inStock: true
  },
  {
    id: "haya-edp",
    name: "Lattafa Haya",
    subtitle: "Eau de Parfum 100 ML - Mujer",
    brand: "Lattafa Perfumes",
    gender: "mujer",
    category: "frescos",
    tags: ["mujer", "florales", "frescos", "fiesta"],
    badge: "CHAMPAGNE ROSADO & FRESA 🍾",
    priceCOP: 215000,
    originalPriceCOP: 265000,
    costCLP: 24000,
    image: "assets/images/perfumes/haya.jpg",
    rating: 4.8,
    reviewsCount: 78,
    inspiration: "Fragancia de Fiesta y Celebración Rosa",
    shortDesc: "Burbujas de champagne rosado, fresas silvestres, naranja sanguina y praliné dulce.",
    description: "La fragancia de las celebraciones inolvidables. Haya es efervescente, festiva y radiante: una copa de champagne con fresas maduras, jazmín blanco y gardenias, secando en una base golosa de praliné y castaña.",
    pyramid: {
      top: "Champagne Rosado, Fresas Silvestres, Naranja Sanguina, Mandarina",
      heart: "Gardenia, Orquídea de Vainilla, Jazmín",
      base: "Praliné, Ámbar, Sándalo Australiano, Castaña"
    },
    performance: {
      longevity: "9 a 11 Horas",
      sillage: "Alegre y Brillante",
      occasion: "Bodas, Grados, Fiestas de cumpleaños, Noches de cóctel",
      season: "Todo el año"
    },
    inStock: true
  },
  {
    id: "yara-moi",
    name: "Lattafa Yara Moi (Blanco)",
    subtitle: "Eau de Parfum 100 ML - Mujer",
    brand: "Lattafa Perfumes",
    gender: "mujer",
    category: "amaderados",
    tags: ["mujer", "dulces", "amaderados"],
    badge: "ELEGANCIA BLANCA 🤍",
    priceCOP: 185000,
    originalPriceCOP: 230000,
    costCLP: 21000,
    image: "assets/images/perfumes/yara-moi.jpg",
    rating: 4.8,
    reviewsCount: 95,
    inspiration: "Melocotón cremoso & Caramelo cálido",
    shortDesc: "Jazmín blanco noble, melocotón jugoso, caramelo tibio, sándalo y pachulí.",
    description: "La versión más madura, limpia y elegante de la trilogía Yara. Conocido como el 'Yara Blanco', combina flores blancas y frutas suaves con un corazón de caramelo tostado que le da una calidez única y sumamente sofisticada.",
    pyramid: {
      top: "Jazmín Blanco, Melocotón Jugoso",
      heart: "Caramelo Tostado, Ámbar Dorado",
      base: "Pachulí Noble, Sándalo Cremoso"
    },
    performance: {
      longevity: "8 a 10 Horas",
      sillage: "Moderada y Distinguida",
      occasion: "Oficina, Cenas de negocios, Uso diario refinado",
      season: "Otoño y Primavera"
    },
    inStock: true
  },
  {
    id: "mayar-natural-intense",
    name: "Lattafa Mayar Natural Intense",
    subtitle: "Eau de Parfum 100 ML - Mujer",
    brand: "Lattafa Perfumes",
    gender: "mujer",
    category: "frescos",
    tags: ["mujer", "frescos", "florales", "acuaticos"],
    badge: "HIGO & ACUÁTICO VERDE 🌿",
    priceCOP: 205000,
    originalPriceCOP: 250000,
    costCLP: 23000,
    image: "assets/images/perfumes/mayar-natural-intense.jpg",
    rating: 4.8,
    reviewsCount: 64,
    inspiration: "Higo verde natural, Nenúfar & Flores de agua",
    shortDesc: "Higo verde maduro, melón de agua, mandarina verde, nenúfar y sándalo blanco.",
    description: "Una bocanada de frescura natural verde y acuática. Mayar Natural Intense se aleja del dulzor pesado para ofrecer un aroma cristalino de jardín botánico con higo verde, frutas acuáticas y nenúfares.",
    pyramid: {
      top: "Higo Verde Fresco, Melón, Mandarina Verde",
      heart: "Nenúfar Acuático, Flor de Loto, Jazmín",
      base: "Vainilla Cristalina, Sándalo Blanco, Almizcle Limpio"
    },
    performance: {
      longevity: "8 a 10 Horas",
      sillage: "Fresca, Limpia y Elegante",
      occasion: "Días calurosos, Gimnasio, Oficina, Tardes al aire libre",
      season: "Primavera y Verano"
    },
    inStock: true
  },
  {
    id: "afnan-9pm-edp",
    name: "Afnan 9 PM",
    subtitle: "Eau de Parfum 100 ML - Hombre / Unisex",
    brand: "Afnan Perfumes",
    gender: "hombre",
    category: "gourmand",
    tags: ["hombre", "bestseller", "gourmand", "dulces", "nocturno"],
    badge: "MUNDIALMENTE VIRAL 🔥",
    priceCOP: 215000,
    originalPriceCOP: 265000,
    costCLP: 24000,
    image: "assets/images/perfumes/afnan-9pm.jpg",
    rating: 5.0,
    reviewsCount: 284,
    inspiration: "Jean Paul Gaultier Ultra Male (El rey de la fiesta)",
    shortDesc: "Seductor, nocturno y festivo. Manzana silvestre, canela dulce, lavanda y vainilla con haba tonka.",
    description: "Afnan 9 PM es un fenómeno global indiscutible. Catalogado por expertos como superior al mismísimo Ultra Male de Jean Paul Gaultier, combina una salida fresca y burbujeante de manzana verde, canela y lavanda con un fondo adictivo de vainilla Bourbon, ámbar y haba tonka que proyecta a metros.",
    pyramid: {
      top: "Manzana Verde, Canela, Lavanda Silvestre, Bergamota",
      heart: "Flor de Azahar del Naranjo, Lirio de los Valles",
      base: "Vainilla Bourbon, Haba Tonka, Ámbar Cálido, Pachulí"
    },
    performance: {
      longevity: "10 a 14 Horas",
      sillage: "Modo Bestia / Muy Alta",
      occasion: "Fiestas, Noches de Cita, Conquista, Salidas Nocturnas",
      season: "Noches de todo el año, Clima templado y fresco"
    },
    inStock: true
  },
  {
    id: "armaf-club-de-nuit-intense",
    name: "Armaf Club de Nuit Intense Man",
    subtitle: "Eau de Parfum / EDT 105 ML - Hombre",
    brand: "Armaf Perfumes",
    gender: "hombre",
    category: "amaderados",
    tags: ["hombre", "bestseller", "amaderados", "frescos"],
    badge: "EL CLÓN #1 DE AVENTUS 👑",
    priceCOP: 210000,
    originalPriceCOP: 260000,
    costCLP: 23000,
    image: "assets/images/perfumes/club-de-nuit-intense.jpg",
    rating: 4.9,
    reviewsCount: 312,
    inspiration: "Creed Aventus (El aroma del poder y el éxito)",
    shortDesc: "El perfume masculino más elogiado de la historia: limón ahumado, grosellas negras, abedul y ámbar gris.",
    description: "Club de Nuit Intense Man de Armaf es legendario. Abre con una explosión chispeante de limón, piña y grosellas negras, dando paso a un corazón ahumado de abedul y jazmín. Su secado masculino con almizcle, ámbar gris y pachulí genera una lluvia infinita de cumplidos allá donde vayas.",
    pyramid: {
      top: "Limón, Piña, Grosellas Negras, Bergamota, Manzana",
      heart: "Abedul Ahumado, Jazmín, Rosa",
      base: "Ámbar Gris, Almizcle, Pachulí, Vainilla"
    },
    performance: {
      longevity: "10 a 12 Horas",
      sillage: "Pesada / Invasiva",
      occasion: "Trabajo, Negocios, Citas, Uso Diario Firma",
      season: "Versátil para cualquier clima y época del año"
    },
    inStock: true
  },
  {
    id: "al-haramain-amber-oud-gold",
    name: "Al Haramain Amber Oud Gold Edition",
    subtitle: "Eau de Parfum 100 ML - Unisex / Dama / Caballero",
    brand: "Al Haramain Perfumes",
    gender: "mujer",
    category: "frutales",
    tags: ["mujer", "hombre", "bestseller", "frutales", "dulces"],
    badge: "ESTELA MONSTRUOSA ⭐",
    priceCOP: 270000,
    originalPriceCOP: 330000,
    costCLP: 31000,
    image: "assets/images/perfumes/amber-oud-gold.jpg",
    rating: 5.0,
    reviewsCount: 195,
    inspiration: "Xerjoff Erba Pura (Lujo de Nicho Italiano)",
    shortDesc: "Bomba frutal de melón dulce, piña jugosa, notas golosas, vainilla dorada y ámbar radiante.",
    description: "Amber Oud Gold Edition de Al Haramain es pura opulencia. Un festín jugoso de melón dulce, piña y cítricos vibrantes bañado en un manto gourmand de notas dulces, ámbar cálido, vainilla y almizcle blanco. Llena habitaciones completas y dura días enteros en la ropa.",
    pyramid: {
      top: "Bergamota Fresca, Notas Verdes Brillantes",
      heart: "Melón Dulce, Piña Jugosa, Notas Gourmand Golosas, Ámbar",
      base: "Almizcle Blanco, Vainilla de Madagascar, Notas Amaderadas"
    },
    performance: {
      longevity: "14 a 18 Horas (Modo Nuclear)",
      sillage: "Extrema / Llena habitaciones",
      occasion: "Eventos Especiales, Fiestas, Donde quieras destacar sí o sí",
      season: "Todo el año (cuidar atomizaciones en calor extremo)"
    },
    inStock: true
  },
  {
    id: "maison-alhambra-kismet-magic",
    name: "Maison Alhambra Kismet Magic",
    subtitle: "Eau de Parfum 100 ML - Hombre / Unisex",
    brand: "Maison Alhambra",
    gender: "hombre",
    category: "gourmand",
    tags: ["hombre", "bestseller", "gourmand", "especiados"],
    badge: "LICOROSO & COÑAC 🥃",
    priceCOP: 195000,
    originalPriceCOP: 245000,
    costCLP: 21000,
    image: "assets/images/perfumes/kismet-magic.jpg",
    rating: 4.9,
    reviewsCount: 128,
    inspiration: "Kilian Angels' Share (Coñac fino, Canela y Vainilla)",
    shortDesc: "Coñac añejo, canela tibia, haba tonka dulce, chocolate oscuro y roble caramelizado.",
    description: "Maison Alhambra Kismet Magic (anteriormente conocido como Kismet Angel) es una de las recreaciones más fieles y elegantes del mítico Angels' Share de By Kilian. Un aroma cálido, licoroso y nocturno que emana sofisticación pura.",
    pyramid: {
      top: "Coñac Francés Añejo, Canela, Nuez Moscada",
      heart: "Haba Tonka, Roble Quemado, Praliné Dulce",
      base: "Vainilla Cremosa, Sándalo, Chocolate Negro, Ámbar"
    },
    performance: {
      longevity: "9 a 12 Horas",
      sillage: "Alta y Envolvente",
      occasion: "Noches frías, Citas románticas, Cenas de gala, Invierno",
      season: "Otoño e Invierno, Noches frescas"
    },
    inStock: true
  },
  // ========================================================================
  // COLECCIÓN EXPANDIDA TOP 50 (NUEVOS LANZAMIENTOS Y BESTSELLERS VIRALES)
  // ========================================================================
  {
    id: "qaed-al-fursan-unlimited",
    name: "Lattafa Qaed Al Fursan Unlimited",
    subtitle: "Eau de Parfum 90 ML - Dama / Unisex",
    brand: "Lattafa Perfumes",
    gender: "mujer",
    category: "gourmand",
    tags: ["mujer", "bestseller", "gourmand", "dulces"],
    badge: "COCO & VAINILLA CREMOSA 🥥",
    priceCOP: 185000,
    originalPriceCOP: 235000,
    costCLP: 20000,
    image: "assets/images/perfumes/qaed-al-fursan-unlimited.jpg",
    rating: 4.9,
    reviewsCount: 167,
    inspiration: "Blanche Bête de Liquides Imaginaires",
    shortDesc: "Nube cremosa de leche de coco, vainilla aterciopelada, flores blancas y sándalo sedoso.",
    description: "Qaed Al Fursan Unlimited (la versión blanca de la famosa línea) es el perfume del confort y la sensualidad limpia. Una apertura adictiva de leche de coco, cítricos y piña suave da paso a un corazón cremoso de flores blancas e ylang-ylang, descansando sobre una base de vainilla, almizcle blanco y sándalo. Te hace oler a lujo, piel hidratada y verano sofisticado.",
    pyramid: {
      top: "Coco Cremoso, Frutas Cítricas, Piña Dulce",
      heart: "Ylang-Ylang, Jazmín Blanco, Frangipani",
      base: "Vainilla de Madagascar, Almizcle Blanco, Sándalo"
    },
    performance: {
      longevity: "9 a 12 Horas",
      sillage: "Moderada a Alta",
      occasion: "Diario, Oficina, Citas, Días soleados y tardes",
      season: "Primavera, Verano y Otoño"
    },
    inStock: true
  },
  {
    id: "teriaq-edp",
    name: "Lattafa Teriaq",
    subtitle: "Eau de Parfum 100 ML - Mujer / Unisex",
    brand: "Lattafa Pride",
    gender: "mujer",
    category: "gourmand",
    tags: ["mujer", "bestseller", "gourmand", "dulces"],
    badge: "OBRA DE QUENTIN BISCH 🐍",
    priceCOP: 260000,
    originalPriceCOP: 320000,
    costCLP: 29000,
    image: "assets/images/perfumes/teriaq.jpg",
    rating: 5.0,
    reviewsCount: 189,
    inspiration: "Creación Maestra de Quentin Bisch (Perfumista de Delina y Le Male Elixir)",
    shortDesc: "Caramelo salado, albaricoque aterciopelado, miel dorada, cuero fino y ruibarbo picante.",
    description: "Formulado por el legendario perfumista francés Quentin Bisch para Lattafa Pride, Teriaq es una joya de nicho en frasco de serpiente dorada. Abre con un contraste electrizante de caramelo salado, almendra amarga y pimienta rosa, fundiéndose con ruibarbo fresco y miel silvestre, para sellar en una base opulenta de vainilla, ládano y cuero fino.",
    pyramid: {
      top: "Caramelo Salado, Almendra Amarga, Albaricoque, Pimienta Rosa",
      heart: "Ruibarbo, Miel Dorada, Flores Blancas, Rosa",
      base: "Cuero Suave, Vainilla Bourbon, Ládano, Vetiver"
    },
    performance: {
      longevity: "12 a 16 Horas",
      sillage: "Pesada / Llena habitaciones",
      occasion: "Eventos de Gala, Salidas nocturnas, Citas de alto impacto",
      season: "Otoño, Invierno y Noches templadas"
    },
    inStock: true
  },
  {
    id: "delilah-edp",
    name: "Maison Alhambra Delilah Pour Femme",
    subtitle: "Eau de Parfum 100 ML - Mujer",
    brand: "Maison Alhambra",
    gender: "mujer",
    category: "frutales",
    tags: ["mujer", "bestseller", "frutales", "frescos"],
    badge: "DUPE DE DELINA 🌸",
    priceCOP: 195000,
    originalPriceCOP: 245000,
    costCLP: 22000,
    image: "assets/images/perfumes/delilah.jpg",
    rating: 4.9,
    reviewsCount: 173,
    inspiration: "Parfums de Marly Delina",
    shortDesc: "Lichi jugoso, ruibarbo chispeante, rosa turca aterciopelada y vainilla empolvada ultra femenina.",
    description: "La réplica más aclamada mundialmente de Delina de Parfums de Marly. Delilah abre con una explosión brillante y jugosa de lichi exótico, ruibarbo ácido y bergamota, que florece en un ramo suntuoso de rosa turca, peonía y lirio de los valles. El secado con vainilla, almizcle y cedro aporta una sofisticación aristocrática inolvidable.",
    pyramid: {
      top: "Lichi Exótico, Ruibarbo Chispeante, Bergamota Fresca",
      heart: "Rosa Turca Real, Peonía Rosa, Lirio de los Valles",
      base: "Vainilla Dulce, Almizcle Blanco, Cashmeran, Cedro"
    },
    performance: {
      longevity: "10 a 14 Horas",
      sillage: "Alta y Radiante",
      occasion: "Bodas, Citas románticas, Brunch, Diario elegante",
      season: "Primavera, Verano y Días frescos"
    },
    inStock: true
  },
  {
    id: "rave-now-women",
    name: "Lattafa Rave Now Women",
    subtitle: "Eau de Parfum 100 ML - Mujer",
    brand: "Lattafa (Rave)",
    gender: "mujer",
    category: "frutales",
    tags: ["mujer", "bestseller", "frutales", "dulces"],
    badge: "FRESA & MARSHMALLOW 🍓",
    priceCOP: 185000,
    originalPriceCOP: 235000,
    costCLP: 21000,
    image: "assets/images/perfumes/rave-now-women.jpg",
    rating: 4.8,
    reviewsCount: 135,
    inspiration: "Burberry Her Elixir de Parfum",
    shortDesc: "Batido de fresa cremosa, malvavisco esponjoso, frutos rojos y vainilla azucarada hiperfemenina.",
    description: "Un flechazo instantáneo para amantes de los aromas dulces y coquettish. Rave Now Women recrea a la perfección la vibra adictiva de Burberry Her Elixir: abre con una ráfaga golosa de fresas silvestres, frambuesas y bayas rojas envueltas en nubes de marshmallow, para evolucionar hacia un corazón floral suave y una base cremosa de vainilla y almizcle azucarado.",
    pyramid: {
      top: "Fresas Silvestres, Frambuesa Madura, Frutos Rojos",
      heart: "Marshmallow, Jazmín Dulce, Lirio",
      base: "Vainilla Azucarada, Almizcle Blanco, Ámbar Cálido"
    },
    performance: {
      longevity: "8 a 11 Horas",
      sillage: "Moderada a Alta",
      occasion: "Salidas casuales, Universidad, Citas dulces, Fiestas de día",
      season: "Todo el año"
    },
    inStock: true
  },
  {
    id: "shaghaf-oud-gold",
    name: "Swiss Arabian Shaghaf Oud",
    subtitle: "Eau de Parfum 75 ML - Mujer / Unisex",
    brand: "Swiss Arabian",
    gender: "mujer",
    category: "amaderados",
    tags: ["mujer", "hombre", "amaderados", "gourmand"],
    badge: "ORO PURO & PRALINÉ 👑",
    priceCOP: 250000,
    originalPriceCOP: 310000,
    costCLP: 28000,
    image: "assets/images/perfumes/shaghaf-oud.jpg",
    rating: 5.0,
    reviewsCount: 210,
    inspiration: "Lancôme Oud Bouquet",
    shortDesc: "Praliné de chocolate y avellana derretido sobre madera de oud ahumada y azafrán dorado.",
    description: "Un ícono indiscutible de la perfumería árabe de los Emiratos. Shaghaf Oud es una pócima gourmand de lujo que combina la calidez especiada del azafrán con una rosa opulenta y un corazón pecaminoso de praliné dulce fundido con madera de agar (oud). Una fragancia pesada, voluptuosa y adictiva que deja rastro donde sea que camines.",
    pyramid: {
      top: "Azafrán Especiado",
      heart: "Rosa Damascena, Praliné Dulce de Chocolate",
      base: "Madera de Oud (Agar), Vainilla Dorada"
    },
    performance: {
      longevity: "14 a 18 Horas (Nuclear)",
      sillage: "Extrema / Inunda espacios",
      occasion: "Noches frías, Fiestas de gala, Citas inolvidables",
      season: "Otoño e Invierno"
    },
    inStock: true
  },
  {
    id: "club-de-nuit-woman",
    name: "Armaf Club de Nuit Woman",
    subtitle: "Eau de Parfum 105 ML - Mujer",
    brand: "Armaf",
    gender: "mujer",
    category: "frutales",
    tags: ["mujer", "bestseller", "frutales", "frescos"],
    badge: "DUPE COCO MADEMOISELLE 💎",
    priceCOP: 195000,
    originalPriceCOP: 245000,
    costCLP: 22000,
    image: "assets/images/perfumes/armaf-club-de-nuit-women.webp",
    rating: 4.9,
    reviewsCount: 156,
    inspiration: "Chanel Coco Mademoiselle",
    shortDesc: "Cítricos elegantes, rosa empolvada, jazmín blanco, lichi dulce y pachulí aristocrático.",
    description: "El legendario clon de Coco Mademoiselle de Chanel que las amantes del perfume eligen una y otra vez. Club de Nuit Woman abre con un cóctel chispeante de naranja, bergamota, pomelo y melocotón, desarrollándose hacia un corazón de jazmín sofisticado y rosa, y un secado señorial de pachulí limpio, vetiver, vainilla y almizcle.",
    pyramid: {
      top: "Naranja, Bergamota, Pomelo, Melocotón",
      heart: "Rosa, Jazmín, Lichi, Geranio",
      base: "Pachulí Elegante, Vainilla, Vetiver, Almizcle Blanco"
    },
    performance: {
      longevity: "9 a 13 Horas",
      sillage: "Alta y Distinguida",
      occasion: "Oficina, Reuniones de negocios, Eventos formales, Diario elegante",
      season: "Primavera, Verano, Otoño"
    },
    inStock: true
  },
  {
    id: "liam-grey-edp",
    name: "Lattafa Liam Grey",
    subtitle: "Eau de Parfum 100 ML - Unisex / Dama / Caballero",
    brand: "Lattafa Perfumes",
    gender: "mujer",
    category: "especiados",
    tags: ["mujer", "hombre", "bestseller", "especiados", "amaderados"],
    badge: "DUPE GRIS CHARNEL ☕",
    priceCOP: 235000,
    originalPriceCOP: 290000,
    costCLP: 26000,
    image: "assets/images/perfumes/liam-grey.jpg",
    rating: 5.0,
    reviewsCount: 164,
    inspiration: "BDK Parfums Gris Charnel (París)",
    shortDesc: "Té negro refinado, higo dulce y cremoso, cardamomo tibio, iris empolvado y sándalo sedoso.",
    description: "Una de las sensaciones virales más aclamadas de la perfumería internacional. Liam Grey captura a la perfección la elegancia parisina de Gris Charnel: una apertura tibia de cardamomo picante, higo maduro y té negro ahumado, entrelazado con iris aterciopelado y un fondo cálido de sándalo, haba tonka y vainilla. Misterioso, sensual y sumamente acogedor.",
    pyramid: {
      top: "Cardamomo, Higo Maduro, Té Negro",
      heart: "Iris Elegante, Vetiver Bourbon, Ládano",
      base: "Sándalo Cremoso, Vainilla, Haba Tonka, Pachulí"
    },
    performance: {
      longevity: "10 a 14 Horas",
      sillage: "Pesada y Sofisticada",
      occasion: "Citas románticas, Café de tarde, Trabajo elegante, Días lluviosos",
      season: "Otoño, Invierno y Primavera fresca"
    },
    inStock: true
  },
  {
    id: "musamam-white-intense",
    name: "Lattafa Musamam White Intense",
    subtitle: "Eau de Parfum 100 ML - Unisex / Dama / Caballero",
    brand: "Lattafa Pride",
    gender: "mujer",
    category: "frescos",
    tags: ["mujer", "hombre", "frescos", "amaderados"],
    badge: "LUJO DE NICHO & SERPIENTE BLANCA 🐍",
    priceCOP: 280000,
    originalPriceCOP: 345000,
    costCLP: 32000,
    image: "assets/images/perfumes/musamam-white-intense.jpg",
    rating: 5.0,
    reviewsCount: 148,
    inspiration: "Bvlgari Tygar / Louis Vuitton Symphony / Coco & Cítricos Nicho",
    shortDesc: "Pomelo chispeante, bergamota jugosa, agua de coco cremosa, cardamomo y sándalo blanco.",
    description: "Presentado en una botella de cristal de peso imponente coronada por una serpiente metálica blanca, Musamam White Intense es la cúspide de Lattafa Pride. Combina la frescura magnética de los mejores cítricos italianos con la suavidad del coco fresco y un sándalo de lujo cremoso que proyecta una sensación de dinero viejo y alta estirpe.",
    pyramid: {
      top: "Bergamota Italiana, Naranja Brillante, Especias Cálidas",
      heart: "Agua de Coco, Mahonial, Ylang-Ylang, Ambroxan",
      base: "Sándalo Blanco, Almizcle, Benjuí, Madera de Cedro"
    },
    performance: {
      longevity: "11 a 15 Horas",
      sillage: "Muy Alta y Envolvente",
      occasion: "Eventos de día o noche, Vacaciones de lujo, Fiestas exclusivas",
      season: "Primavera, Verano y Clima templado"
    },
    inStock: true
  },
  {
    id: "afnan-modest-deux",
    name: "Afnan Modest Deux",
    subtitle: "Eau de Parfum 100 ML - Mujer",
    brand: "Afnan Perfumes",
    gender: "mujer",
    category: "gourmand",
    tags: ["mujer", "gourmand", "frutales", "dulces"],
    badge: "CEREZA & CHOCOLATE 🍒",
    priceCOP: 225000,
    originalPriceCOP: 280000,
    costCLP: 25000,
    image: "assets/images/perfumes/afnan-modest-deux.jpg",
    rating: 4.9,
    reviewsCount: 122,
    inspiration: "Lancôme La Nuit Trésor / Mon Paris",
    shortDesc: "Fresas maduras, cereza confitada, frambuesa, chocolate oscuro gourmand y vainilla nocturna.",
    description: "Afnan Modest Deux es una poción de seducción nocturna irresistible. Abre con un cóctel de fresas silvestres, cerezas rojas y frambuesas dulces, que se sumergen en un corazón adictivo de praliné, chocolate negro y especias exóticas. El secado con pachulí, vainilla cremosa y gardenia la hace inolvidable para citas y salidas.",
    pyramid: {
      top: "Fresas Silvestres, Frambuesa, Cereza Confitada",
      heart: "Vainilla Cremosa, Especias Dulces, Chocolate Oscuro",
      base: "Pachulí Cálido, Gardenia Blanca, Almizcle Sensual"
    },
    performance: {
      longevity: "9 a 12 Horas",
      sillage: "Alta y Magnética",
      occasion: "Citas románticas, Salidas nocturnas, Discoteca, Conquista",
      season: "Otoño, Invierno y Noches"
    },
    inStock: true
  },
  {
    id: "her-confession-edp",
    name: "Lattafa Her Confession",
    subtitle: "Eau de Parfum 100 ML - Mujer",
    brand: "Lattafa Perfumes",
    gender: "mujer",
    category: "gourmand",
    tags: ["mujer", "gourmand", "especiados", "dulces"],
    badge: "NUEVO LANZAMIENTO TOP 🌟",
    priceCOP: 235000,
    originalPriceCOP: 295000,
    costCLP: 26000,
    image: "assets/images/perfumes/her-confession.jpg",
    rating: 5.0,
    reviewsCount: 118,
    inspiration: "Floral Místico con Cacao Seductor & Vainilla de Nicho",
    shortDesc: "Canela fina, acordes lácteos cremosos, nardo seductor, jazmín, cacao amargo y ámbar cálido.",
    description: "El lanzamiento más esperado de la casa Lattafa. Her Confession es el equivalente femenino de las fragancias de confesión más codiciadas: abre con un toque místico de canela y notas lácteas reconfortantes, evolucionando hacia un nardo embriagador y flores blancas bañadas en licor dulce y cacao, terminando con un fondo denso de haba tonka, vainilla y maderas preciosas.",
    pyramid: {
      top: "Canela Dulce, Notas Lácteas Cremosas, Cardamomo",
      heart: "Nardo Nocturno, Jazmín Sambac, Cacao Amargo, Incienso",
      base: "Vainilla de Madagascar, Haba Tonka, Ámbar, Almizcle"
    },
    performance: {
      longevity: "11 a 15 Horas",
      sillage: "Pesada y Enigmática",
      occasion: "Noches especiales, Cenas románticas, Eventos nocturnos",
      season: "Otoño e Invierno"
    },
    inStock: true
  },
  {
    id: "badee-amethyst",
    name: "Lattafa Bade'e Al Oud Amethyst",
    subtitle: "Eau de Parfum 100 ML - Mujer / Unisex",
    brand: "Lattafa Perfumes",
    gender: "mujer",
    category: "amaderados",
    tags: ["mujer", "hombre", "amaderados", "frutales"],
    badge: "DUPE ATOMIC ROSE 🌹",
    priceCOP: 220000,
    originalPriceCOP: 275000,
    costCLP: 25000,
    image: "assets/images/perfumes/badee-amethyst.jpg",
    rating: 4.9,
    reviewsCount: 142,
    inspiration: "Initio Parfums Privés Atomic Rose",
    shortDesc: "Rosa turca explosiva, pimienta rosa vibrante, jazmín seductor, ámbar y vainilla caramelizada.",
    description: "La icónica botella morada de la colección Bade'e Al Oud. Amethyst es la versión más sensual y adictiva: un dupe colosal de Atomic Rose de Initio. Se abre con una combinación electrizante de pimienta rosa y bergamota que abre paso a una rosa turca y búlgara de calidad exorbitante, sellada con ámbar dulce, oud suave y vainilla de Madagascar.",
    pyramid: {
      top: "Pimienta Rosa, Bergamota Italiana",
      heart: "Rosa Turca, Rosa Búlgara, Jazmín Egipcio",
      base: "Madera de Agar (Oud Suave), Ámbar Cálido, Vainilla"
    },
    performance: {
      longevity: "12 a 16 Horas",
      sillage: "Pesada / Modo Bestia",
      occasion: "Citas, Noches de fiesta, Donde quieras atraer todas las miradas",
      season: "Todo el año (cuidar atomizaciones en calor)"
    },
    inStock: true
  },
  {
    id: "rasasi-hawas-edp",
    name: "Rasasi Hawas for Him",
    subtitle: "Eau de Parfum 100 ML - Hombre",
    brand: "Rasasi Perfumes",
    gender: "hombre",
    category: "frescos",
    tags: ["hombre", "bestseller", "frescos", "frutales"],
    badge: "BESTIA MARINA #1 🌊",
    priceCOP: 295000,
    originalPriceCOP: 360000,
    costCLP: 35000,
    image: "assets/images/perfumes/rasasi-hawas.jpg",
    rating: 5.0,
    reviewsCount: 245,
    inspiration: "Paco Rabanne Invictus Aqua (Edición Bestia Descatalogada)",
    shortDesc: "Ciruela dulce, manzana verde crocante, notas marinas saladas, canela y ámbar gris radiante.",
    description: "El rey indiscutible de los cumplidos masculinos y el perfume de Rasasi más vendido en la historia de Dubai. Abre con una explosión fresca y frutal de ciruela, manzana, bergamota y canela, equilibrada con acordes acuáticos marinos y melón, finalizando en una base legendaria de ámbar gris, pachulí y almizcle que proyecta sin descanso por más de 12 horas.",
    pyramid: {
      top: "Manzana, Bergamota, Limón, Canela",
      heart: "Ciruela Jugosa, Notas Acuáticas Marinas, Flor de Azahar, Cardamomo",
      base: "Ámbar Gris, Almizcle, Pachulí, Madera Flotante"
    },
    performance: {
      longevity: "12 a 16 Horas",
      sillage: "Enorme / Llena espacios",
      occasion: "Uso diario, Conquista, Fiestas, Tardes cálidas, Vacaciones",
      season: "Todo el año (fabuloso en calor y fiesta)"
    },
    inStock: true
  },
  {
    id: "rasasi-hawas-ice",
    name: "Rasasi Hawas Ice for Him",
    subtitle: "Eau de Parfum 100 ML - Hombre",
    brand: "Rasasi Perfumes",
    gender: "hombre",
    category: "frescos",
    tags: ["hombre", "bestseller", "frescos", "frutales"],
    badge: "FRESCO GLACIAL EXTREMO ❄️",
    priceCOP: 315000,
    originalPriceCOP: 385000,
    costCLP: 38000,
    image: "assets/images/perfumes/rasasi-hawas-ice.jpg",
    rating: 5.0,
    reviewsCount: 187,
    inspiration: "Hawas Original + Menta Helada, Limón Italiano & Ciruela Glaseada",
    shortDesc: "Menta escarchada, limón siciliano crujiente, ciruela dulce, acordes marinos helados y almizcle.",
    description: "La evolución más esperada de Hawas. Hawas Ice eleva la fórmula original a un nivel glacial superlativo: incorpora una apertura gélida de menta crujiente, limón italiano y manzana verde recién cortada, manteniendo el ADN seductor de la ciruela y las notas marinas saladas con una fijación y proyección aún más potentes para climas cálidos y noches de fiesta.",
    pyramid: {
      top: "Menta Helada Escarchada, Limón Siciliano, Manzana Verde, Bergamota",
      heart: "Ciruela Dulce, Acordes Acuáticos Glaciales, Cardamomo, Flor de Azahar",
      base: "Ámbar Gris, Almizcle Blanco, Pachulí, Haba Tonka"
    },
    performance: {
      longevity: "12 a 16 Horas",
      sillage: "Extrema / Proyección helada",
      occasion: "Días calurosos, Salidas de tarde, Fiestas de playa o discoteca",
      season: "Primavera, Verano y Climas cálidos"
    },
    inStock: true
  },
  {
    id: "supremacy-noi",
    name: "Afnan Supremacy Not Only Intense",
    subtitle: "Extrait de Parfum 100 ML - Hombre",
    brand: "Afnan Perfumes",
    gender: "hombre",
    category: "amaderados",
    tags: ["hombre", "bestseller", "amaderados", "frutales"],
    badge: "CONCENTRACIÓN EXTRAIT 🔥",
    priceCOP: 285000,
    originalPriceCOP: 350000,
    costCLP: 33000,
    image: "assets/images/perfumes/supremacy-noi.jpg",
    rating: 5.0,
    reviewsCount: 215,
    inspiration: "Creed Aventus + Nishane Hacivat (El Híbrido Definitivo)",
    shortDesc: "Grosellas negras jugosas, bergamota ahumada, manzana crujiente, musgo de roble y pachulí oscuro.",
    description: "Apodado 'SNOI' por la comunidad perfumista global, este Extrait de Parfum supera con creces a fragancias que quintuplican su precio. Combina la apertura frutal y dulce de grosellas negras y manzana de Aventus con la base rica, terrosa y señorial de musgo de roble y pachulí de Nishane Hacivat. Una bomba de masculinidad, respeto y elogios garantizados.",
    pyramid: {
      top: "Grosellas Negras, Bergamota, Manzana Crujiente",
      heart: "Musgo de Roble, Pachulí, Lavanda Francesa",
      base: "Ámbar Gris, Almizcle, Azafrán Dorado"
    },
    performance: {
      longevity: "14 a 18 Horas",
      sillage: "Bestial / Deja una estela legendaria",
      occasion: "Eventos formales, Negocios, Citas importantes, Noches",
      season: "Todo el año"
    },
    inStock: true
  },
  {
    id: "al-nashama-caprice",
    name: "Lattafa Al Nashama Caprice",
    subtitle: "Eau de Parfum 100 ML - Hombre",
    brand: "Lattafa Perfumes",
    gender: "hombre",
    category: "especiados",
    tags: ["hombre", "bestseller", "especiados", "frescos"],
    badge: "DUPE YSL LA NUIT BLEU ÉLECTRIQUE ⚡",
    priceCOP: 230000,
    originalPriceCOP: 285000,
    costCLP: 26000,
    image: "assets/images/perfumes/al-nashama-caprice.jpg",
    rating: 4.9,
    reviewsCount: 153,
    inspiration: "YSL La Nuit de L'Homme Bleu Électrique",
    shortDesc: "Cardamomo fresco y picante, jengibre chispeante, lavanda azul seductora, geranio y cedro.",
    description: "El clon exacto del legendario y descatalogado Bleu Électrique de Yves Saint Laurent. Al Nashama Caprice abre con una dosis vibrante de cardamomo frío, bergamota y jengibre picante, que se funde en un corazón elegante de lavanda francesa y geranio, reposando en una base de madera de cedro, vetiver y ámbar. El perfume perfecto para una cita romántica.",
    pyramid: {
      top: "Cardamomo de Guatemala, Jengibre Picante, Bergamota",
      heart: "Lavanda Azul, Menta Fresca, Geranio",
      base: "Madera de Cedro, Vetiver, Pachulí, Ámbar"
    },
    performance: {
      longevity: "9 a 13 Horas",
      sillage: "Alta y Seductora",
      occasion: "Citas románticas, Salidas nocturnas, Cenas íntimas",
      season: "Otoño, Invierno y Noches templadas"
    },
    inStock: true
  },
  {
    id: "vintage-radio-edp",
    name: "Lattafa Vintage Radio",
    subtitle: "Eau de Parfum 100 ML - Unisex / Caballero / Dama",
    brand: "Lattafa Pride",
    gender: "hombre",
    category: "amaderados",
    tags: ["hombre", "mujer", "amaderados", "frutales"],
    badge: "DUPE INITIO PARAGON 📻",
    priceCOP: 250000,
    originalPriceCOP: 310000,
    costCLP: 28000,
    image: "assets/images/perfumes/vintage-radio.jpg",
    rating: 5.0,
    reviewsCount: 178,
    inspiration: "Initio Parfums Privés Paragon",
    shortDesc: "Ciruela negra madura, palo santo místico, lavanda relajante, pimienta negra y sándalo blanco.",
    description: "Inspirado en Paragon de Initio, Vintage Radio viene en un frasco vintage espectacular con dial de radio dorado. Es una fragancia aromática y amaderada espiritual que abre con ciruela jugosa, lavanda y bergamota, seguida por un corazón místico de palo santo ahumado y pimienta negra, secando en una base aterciopelada de sándalo blanco y ámbar.",
    pyramid: {
      top: "Ciruela Negra Madura, Lavanda, Salvia, Bergamota",
      heart: "Palo Santo Sagrado, Pimienta Negra, Iris",
      base: "Sándalo Blanco, Madera de Cedro, Ámbar"
    },
    performance: {
      longevity: "10 a 14 Horas",
      sillage: "Pesada y Mística",
      occasion: "Eventos exclusivos, Salidas de tarde, Citas con estilo, Diario de lujo",
      season: "Otoño, Invierno y Primavera"
    },
    inStock: true
  },
  {
    id: "jean-lowe-immortal",
    name: "Maison Alhambra Jean Lowe Immortal",
    subtitle: "Eau de Parfum 100 ML - Hombre",
    brand: "Maison Alhambra",
    gender: "hombre",
    category: "frescos",
    tags: ["hombre", "bestseller", "frescos", "especiados"],
    badge: "DUPE LV L'IMMENSITÉ 🍊",
    priceCOP: 240000,
    originalPriceCOP: 295000,
    costCLP: 27000,
    image: "assets/images/perfumes/jean-lowe-immortal.jpg",
    rating: 4.9,
    reviewsCount: 162,
    inspiration: "Louis Vuitton L'Immensité",
    shortDesc: "Pomelo chispeante, jengibre picante vigorizante, notas acuáticas saladas, romero y ambroxan.",
    description: "La recreación de culto del codiciado L'Immensité de Louis Vuitton. Jean Lowe Immortal combina una salida cítrica y chispeante de pomelo amarillo y jengibre fresco ultra limpio, con notas acuáticas ozónicas, salvia aromática y romero, coronado con una base imponente de ambroxan dorado, ládano y ámbar que irradia masculinidad ejecutiva moderna.",
    pyramid: {
      top: "Pomelo Amarillo, Jengibre Picante, Bergamota",
      heart: "Notas Acuáticas, Romero Aromático, Salvia, Geranio",
      base: "Ambroxan Dorado, Ámbar, Ládano Balsámico"
    },
    performance: {
      longevity: "10 a 14 Horas",
      sillage: "Alta y Vigorosa",
      occasion: "Oficina de alto nivel, Reuniones, Clima cálido, Eventos casuales elegantes",
      season: "Primavera, Verano y Días de sol"
    },
    inStock: true
  },
  {
    id: "jean-lowe-noir",
    name: "Maison Alhambra Jean Lowe Noir",
    subtitle: "Eau de Parfum 100 ML - Hombre / Unisex",
    brand: "Maison Alhambra",
    gender: "hombre",
    category: "amaderados",
    tags: ["hombre", "amaderados", "especiados"],
    badge: "DUPE LV OMBRE NOMADE 🪵",
    priceCOP: 250000,
    originalPriceCOP: 310000,
    costCLP: 28000,
    image: "assets/images/perfumes/jean-lowe-noir.jpg",
    rating: 5.0,
    reviewsCount: 139,
    inspiration: "Louis Vuitton Ombre Nomade",
    shortDesc: "Oud ahumado de lujo, frambuesa jugosa, rosa negra, incienso místico y cuero oscuro.",
    description: "La fragancia más oscura, señorial y lujosa de la línea Louis Vuitton recreada con fidelidad magistral por Maison Alhambra. Jean Lowe Noir (anteriormente Jean Lowe Ombre) abre con una nota misteriosa de incienso y frambuesa madura, abriéndose hacia un corazón de rosa damascena y madera de oud intenso, terminando con cuero curtido, benjuí y azafrán.",
    pyramid: {
      top: "Frambuesa Jugosa, Azafrán Ahumado",
      heart: "Rosa Negra, Incienso Místico, Madera de Abedul",
      base: "Madera de Agar (Oud Puro), Cuero Oscuro, Benjuí, Ámbar"
    },
    performance: {
      longevity: "12 a 16 Horas (Modo Bestia)",
      sillage: "Extrema / Inunda cualquier sala",
      occasion: "Eventos nocturnos, Galas de etiqueta, Noches frías de invierno",
      season: "Invierno y Otoño"
    },
    inStock: true
  },
  {
    id: "odyssey-homme-black",
    name: "Armaf Odyssey Homme (Black Edition)",
    subtitle: "Eau de Parfum 100 ML - Hombre",
    brand: "Armaf",
    gender: "hombre",
    category: "gourmand",
    tags: ["hombre", "bestseller", "gourmand", "especiados"],
    badge: "DUPE TOM FORD NOIR EXTREME 🍫",
    priceCOP: 190000,
    originalPriceCOP: 240000,
    costCLP: 21000,
    image: "assets/images/perfumes/odyssey-homme-black.jpg",
    rating: 4.8,
    reviewsCount: 147,
    inspiration: "Tom Ford Noir Extreme / Valentino Uomo Intense",
    shortDesc: "Iris empolvado, vainilla cremosa, cardamomo dulce, café tostado y ámbar sensual.",
    description: "Presentado en una botella icónica con textura termo de lujo, Odyssey Homme Black es una joya oscura que fusiona lo mejor de Tom Ford Noir Extreme y Valentino Uomo: abre con cardamomo especiado y neroli, dando paso a un corazón cremoso de iris sedoso y notas florales masculinas, descansando en una cama tibia de vainilla dulce, café, sándalo y ámbar.",
    pyramid: {
      top: "Cardamomo, Neroli, Mandarina Fresca",
      heart: "Iris Empolvado, Jazmín Blanco, Café Tostado",
      base: "Vainilla Bourbon, Sándalo Cremoso, Ámbar, Haba Tonka"
    },
    performance: {
      longevity: "9 a 13 Horas",
      sillage: "Alta y Cálida",
      occasion: "Citas románticas, Salidas nocturnas, Días fríos, Eventos elegantes",
      season: "Otoño e Invierno"
    },
    inStock: true
  },
  {
    id: "lattafa-atlas",
    name: "Lattafa Atlas",
    subtitle: "Eau de Parfum 55 ML - Hombre / Unisex",
    brand: "Lattafa Perfumes",
    gender: "hombre",
    category: "frescos",
    tags: ["hombre", "frescos", "amaderados"],
    badge: "DUPE MEGAMARE 24H+ 🌊",
    priceCOP: 245000,
    originalPriceCOP: 300000,
    costCLP: 27000,
    image: "assets/images/perfumes/lattafa-atlas.jpg",
    rating: 5.0,
    reviewsCount: 176,
    inspiration: "Orto Parisi Megamare (Alessandro Gualtieri)",
    shortDesc: "Océano tempestuoso, sal marina cristalina, algas marinas frescas, ámbar gris y maderas flotantes.",
    description: "Una fuerza de la naturaleza embotellada. Lattafa Atlas recrea con una precisión casi mágica la fragancia marina más potente del planeta: Megamare de Orto Parisi. No es un perfume cítrico acuático dócil, sino el rugido del mar bravío: sal marina pura, ozono electrizante, algas verdes frescas, ámbar gris y maderas marinas que duran días enteros en piel y semanas en la ropa.",
    pyramid: {
      top: "Sal Marina Cristalina, Notas Marinas Ozónicas, Bergamota",
      heart: "Algas Marinas, Calone, Jazmín de Agua",
      base: "Ámbar Gris Marino, Cedro del Atlas, Almizcle Blanco, Musgo"
    },
    performance: {
      longevity: "16 a 24+ Horas (Bestia Marina Nuclear)",
      sillage: "Extrema / Inagotable",
      occasion: "Salidas al aire libre, Playa, Noches de verano, Donde quieras dejar huella para siempre",
      season: "Primavera, Verano y Clima templado"
    },
    inStock: true
  },
  // ========================================================================
  // COLECCIÓN ESPECIAL RASASI HAWAS DYNASTY (EDICIONES LIMITADAS & VIRALES)
  // ========================================================================
  {
    id: "rasasi-hawas-black",
    name: "Rasasi Hawas Black",
    subtitle: "Eau de Parfum 100 ML - Hombre",
    brand: "Rasasi Perfumes",
    gender: "hombre",
    category: "amaderados",
    tags: ["hombre", "bestseller", "amaderados", "frutales"],
    badge: "DUPE NISHANE HACIVAT 🍍",
    priceCOP: 310000,
    originalPriceCOP: 380000,
    costCLP: 36000,
    image: "assets/images/perfumes/hawas-black.jpg",
    rating: 5.0,
    reviewsCount: 154,
    inspiration: "Nishane Hacivat (Piña Ahumada, Musgo de Roble & Pachulí)",
    shortDesc: "Piña jugosa ahumada, bergamota chispeante, musgo de roble terroso y cedro señorial.",
    description: "El lanzamiento más aclamado de Rasasi en 2024. Hawas Black lleva el ADN legendario de Hawas hacia el territorio del nicho puro de Nishane Hacivat. Una apertura explosiva de piña silvestre, bergamota y pomelo da paso a un corazón de jazmín blanco, cedro y pachulí, reposando sobre una base imponente de musgo de roble y ámbar gris con fijación extrema.",
    pyramid: {
      top: "Piña Dulce Ahumada, Bergamota, Pomelo",
      heart: "Madera de Cedro, Pachulí Oscuro, Jazmín Blanco",
      base: "Musgo de Roble, Ámbar Gris, Notas Amaderadas Nobles"
    },
    performance: {
      longevity: "12 a 16 Horas",
      sillage: "Extrema / Proyección de Élite",
      occasion: "Eventos formales, Citas de impacto, Negocios, Noches",
      season: "Todo el año"
    },
    inStock: true
  },
  {
    id: "rasasi-hawas-elixir",
    name: "Rasasi Hawas Elixir",
    subtitle: "Eau de Parfum 100 ML - Hombre",
    brand: "Rasasi Perfumes",
    gender: "hombre",
    category: "gourmand",
    tags: ["hombre", "bestseller", "gourmand", "dulces"],
    badge: "DUPE LE MALE ELIXIR 🍯",
    priceCOP: 320000,
    originalPriceCOP: 395000,
    costCLP: 37000,
    image: "assets/images/perfumes/hawas-elixir.jpg",
    rating: 5.0,
    reviewsCount: 168,
    inspiration: "Jean Paul Gaultier Le Male Elixir (Miel, Vainilla & Lavanda)",
    shortDesc: "Miel dorada ardiente, menta fresca, chocolate negro, lavanda seductora, haba tonka y benjuí.",
    description: "La versión más cálida, dulce y adictiva de la saga Hawas. Inspirada en el fenómeno viral Le Male Elixir de JPG, esta fragancia abre con una menta vigorizante y bergamota contrastada con un corazón goloso de chocolate oscuro, lavanda francesa y benjuí, culminando en una base embriagadora de vainilla bourbon, haba tonka y miel silvestre.",
    pyramid: {
      top: "Menta Fresca, Bergamota Italiana, Abrótano",
      heart: "Chocolate Oscuro, Lavanda Francesa, Benjuí",
      base: "Vainilla Bourbon, Haba Tonka Tostada, Miel Dorada, Almizcle Blanco"
    },
    performance: {
      longevity: "14 a 18 Horas (Modo Fiesta)",
      sillage: "Pesada y Magnética",
      occasion: "Citas nocturnas, Discotecas, Clima frío, Conquista",
      season: "Otoño, Invierno y Noches"
    },
    inStock: true
  },
  {
    id: "rasasi-hawas-fire",
    name: "Rasasi Hawas Fire",
    subtitle: "Eau de Parfum 100 ML - Hombre",
    brand: "Rasasi Perfumes",
    gender: "hombre",
    category: "frescos",
    tags: ["hombre", "bestseller", "frescos", "amaderados"],
    badge: "DUPE GISSAH IMPERIAL VALLEY 🔥",
    priceCOP: 315000,
    originalPriceCOP: 385000,
    costCLP: 36000,
    image: "assets/images/perfumes/hawas-fire.jpg",
    rating: 4.9,
    reviewsCount: 139,
    inspiration: "Gissah Imperial Valley (El perfume de nicho más viral de Kuwait)",
    shortDesc: "Olas marinas ardientes, esclarea aromática, jazmín egipcio, ámbar gris y notas minerales puras.",
    description: "Un giro audaz y ardiente a los perfumes acuáticos azules. Hawas Fire recrea la magia árabe de Imperial Valley de Gissah: combina la frescura oceánica y salina con un corazón herbal de esclarea y jazmín egipcio, fusionado sobre un lecho mineral de ámbar gris caliente y maderas que arden con intensidad en climas cálidos y templados.",
    pyramid: {
      top: "Salvia Esclarea, Cítricos Chispeantes",
      heart: "Notas Marinas Oceánicas, Jazmín Egipcio, Cuero Suave",
      base: "Ámbar Gris Marino, Notas Minerales, Almizcle Cálido"
    },
    performance: {
      longevity: "11 a 15 Horas",
      sillage: "Muy Alta y Envolvente",
      occasion: "Uso diario versátil, Eventos de tarde, Salidas con amigos",
      season: "Primavera, Verano y Clima templado"
    },
    inStock: true
  },
  {
    id: "rasasi-hawas-kobra",
    name: "Rasasi Hawas Kobra",
    subtitle: "Eau de Parfum 100 ML - Hombre",
    brand: "Rasasi Perfumes",
    gender: "hombre",
    category: "frescos",
    tags: ["hombre", "bestseller", "frescos", "especiados"],
    badge: "DUPE LV IMAGINATION 🐍",
    priceCOP: 325000,
    originalPriceCOP: 399000,
    costCLP: 38000,
    image: "assets/images/perfumes/hawas-kobra.jpg",
    rating: 5.0,
    reviewsCount: 172,
    inspiration: "Louis Vuitton Imagination",
    shortDesc: "Té negro chino, jengibre picante, mandarina siciliana, neroli radiante, canela y ambroxan puro.",
    description: "La joya de la corona 2025 de Rasasi. Hawas Kobra es la recreación magistral de Imagination de Louis Vuitton. Una salida ultra efervescente de mandarina y naranja amarga con jengibre fresco da paso a una infusión de té negro con neroli y canela, sostenida por una base limpia e imperial de ambroxan y maderas claras que huele a millonario veraniego.",
    pyramid: {
      top: "Jengibre Fresco, Mandarina Siciliana, Bergamota de Calabria",
      heart: "Té Negro Chino, Neroli de Túnez, Canela de Ceilán",
      base: "Ambroxan Puro, Madera de Gaiac, Ámbar Blanco"
    },
    performance: {
      longevity: "12 a 16 Horas",
      sillage: "Alta, Limpia y Refinada",
      occasion: "Oficina VIP, Reuniones importantes, Días soleados, Vacaciones de lujo",
      season: "Primavera, Verano y Días frescos"
    },
    inStock: true
  },
  {
    id: "rasasi-hawas-atlantis",
    name: "Rasasi Hawas Atlantis",
    subtitle: "Eau de Parfum 100 ML - Hombre",
    brand: "Rasasi Perfumes",
    gender: "hombre",
    category: "frescos",
    tags: ["hombre", "frescos", "frutales"],
    badge: "DUPE INVICTUS LEGEND 🔱",
    priceCOP: 310000,
    originalPriceCOP: 380000,
    costCLP: 35000,
    image: "assets/images/perfumes/hawas-atlantis.jpg",
    rating: 4.9,
    reviewsCount: 145,
    inspiration: "Paco Rabanne Invictus Legend",
    shortDesc: "Océano profundo, ciruela oscura salada, manzana crujiente, flor de azahar, madera flotante y ámbar.",
    description: "Inspirado en la mítica ciudad hundida de Atlantis y en la leyenda de Invictus Legend, esta fragancia eleva el ADN acuático a su máxima expresión marina. Con una salida salada de ciruela y limón, evoluciona hacia cardamomo especiado y flor de naranjo, terminando en maderas flotantes y ámbar gris con estela imparable.",
    pyramid: {
      top: "Bergamota Marina, Limón Ácido, Manzana Crujiente, Canela",
      heart: "Notas Acuosas Profundas, Ciruela Jugosa, Cardamomo, Azahar",
      base: "Madera Flotante del Océano, Ámbar Gris, Pachulí, Almizcle"
    },
    performance: {
      longevity: "11 a 15 Horas",
      sillage: "Enorme / Llena habitaciones",
      occasion: "Tardes de playa, Deporte, Fiesta, Uso diario con impacto",
      season: "Primavera y Verano"
    },
    inStock: true
  },
  {
    id: "rasasi-hawas-tropical",
    name: "Rasasi Hawas Tropical",
    subtitle: "Eau de Parfum 100 ML - Hombre / Unisex",
    brand: "Rasasi Perfumes",
    gender: "hombre",
    category: "frutales",
    tags: ["hombre", "frutales", "frescos"],
    badge: "DUPE LE BEAU PARADISE GARDEN 🌴",
    priceCOP: 320000,
    originalPriceCOP: 390000,
    costCLP: 37000,
    image: "assets/images/perfumes/hawas-tropical.jpg",
    rating: 5.0,
    reviewsCount: 161,
    inspiration: "Jean Paul Gaultier Le Beau Paradise Garden",
    shortDesc: "Agua de coco cristalina, hoja de higuera verde, menta picante, jengibre, higo dulce y sándalo.",
    description: "Un paraíso tropical exótico embotellado por Rasasi. Inspirado en Le Beau Paradise Garden de JPG, Hawas Tropical abre con agua de coco refrescante, hojas de higuera machacadas y jengibre chispeante, fundiéndose con higo dulce maduro y menta verde, sellando con un sándalo lechoso y haba tonka que seduce a cualquiera.",
    pyramid: {
      top: "Agua de Coco Fresca, Hoja de Higuera Verde, Jengibre",
      heart: "Higo Dulce Maduro, Menta Crujiente, Notas Saladas",
      base: "Sándalo Cremoso, Haba Tonka, Almizcle Blanco"
    },
    performance: {
      longevity: "10 a 14 Horas",
      sillage: "Alta y Exótica",
      occasion: "Vacaciones, Citas en la playa, Tardes de calor, Conquista casual",
      season: "Primavera y Verano"
    },
    inStock: true
  },
  {
    id: "rasasi-hawas-malibu",
    name: "Rasasi Hawas Malibu",
    subtitle: "Eau de Parfum 100 ML - Hombre / Unisex",
    brand: "Rasasi Perfumes",
    gender: "hombre",
    category: "frutales",
    tags: ["hombre", "frutales", "amaderados"],
    badge: "DUPE LE BEAU LE PARFUM 🥥",
    priceCOP: 315000,
    originalPriceCOP: 385000,
    costCLP: 36000,
    image: "assets/images/perfumes/hawas-malibu.jpg",
    rating: 4.9,
    reviewsCount: 147,
    inspiration: "Jean Paul Gaultier Le Beau Le Parfum (Piña, Iris & Haba Tonka)",
    shortDesc: "Piña jugosa dorada, naranja dulce, raíz de lirio sedosa, ámbar cálido, haba tonka y cachemira.",
    description: "El atardecer perfecto en las costas de Malibu. Recreando la intensidad y sensualidad de Le Beau Le Parfum, Hawas Malibu ofrece una salida gloriosa de piña tropical y cítricos maduros, un corazón elegante de raíz de lirio (iris) y ámbar, y un secado cálido y aterciopelado de madera de cachemira, haba tonka y pachulí.",
    pyramid: {
      top: "Piña Tropical Dorada, Naranja Dulce, Pomelo Rosado",
      heart: "Raíz de Lirio (Iris Sedoso), Ámbar Cálido, Lavanda",
      base: "Haba Tonka Caramelizada, Madera de Cachemira, Pachulí, Almizcle"
    },
    performance: {
      longevity: "11 a 15 Horas",
      sillage: "Pesada y Envolvente",
      occasion: "Citas nocturnas en verano, Fiestas al atardecer, Salidas especiales",
      season: "Primavera, Verano y Otoño"
    },
    inStock: true
  },
  {
    id: "rasasi-hawas-verde",
    name: "Rasasi Hawas Verde",
    subtitle: "Eau de Parfum 100 ML - Hombre / Unisex",
    brand: "Rasasi Perfumes",
    gender: "hombre",
    category: "frescos",
    tags: ["hombre", "frescos", "bestseller"],
    badge: "DUPE XERJOFF TORINO21 🍃",
    priceCOP: 325000,
    originalPriceCOP: 395000,
    costCLP: 37000,
    image: "assets/images/perfumes/hawas-verde.jpg",
    rating: 5.0,
    reviewsCount: 159,
    inspiration: "Xerjoff Torino21 (Nicho Italiano de Tenis & Lujo)",
    shortDesc: "Menta helada silvestre, lima crujiente, albahaca italiana, romero fresco, tomillo y almizcle blanco.",
    description: "La máxima expresión de sofisticación verde y fresca. Hawas Verde es el dupe más exacto del aclamado Torino21 de Xerjoff: una descarga vigorizante de menta recién cortada, lima ácida y albahaca aromática de Italia, con matices herbales de romero y tomillo sobre una base impoluta de almizcle blanco y madera de cedro.",
    pyramid: {
      top: "Menta Helada, Lima Crujiente, Bergamota, Albahaca Italiana",
      heart: "Romero Fresco, Tomillo Aromático, Jazmín de Agua",
      base: "Almizcle Blanco Limpio, Cedro Blanco, Notas Verdes Brillantes"
    },
    performance: {
      longevity: "10 a 14 Horas",
      sillage: "Muy Alta y Ultra Refrescante",
      occasion: "Días de calor sofocante, Deportes de élite, Oficina elegante, Verano",
      season: "Primavera y Verano"
    },
    inStock: true
  },
  {
    id: "rasasi-hawas-london",
    name: "Rasasi Hawas London",
    subtitle: "Eau de Parfum 100 ML - Hombre / Unisex",
    brand: "Rasasi Perfumes",
    gender: "hombre",
    category: "especiados",
    tags: ["hombre", "especiados", "amaderados"],
    badge: "DUPE EX NIHILO BROMPTON 🇬🇧",
    priceCOP: 330000,
    originalPriceCOP: 410000,
    costCLP: 38000,
    image: "assets/images/perfumes/hawas-london.jpg",
    rating: 5.0,
    reviewsCount: 138,
    inspiration: "Ex Nihilo Brompton Immortals (Lujo Harrods Londres)",
    shortDesc: "Azafrán noble, pimienta rosa, pera jugosa, incienso sagrado, rosa inglesa, vainilla y maderas claras.",
    description: "Inspirado en la sofisticación aristocrática de Harrods en Londres y en la joya de nicho Brompton Immortals de Ex Nihilo. Hawas London fusiona la modernidad británica con el misterio oriental: abre con azafrán, pimienta rosa y pera caramelizada, dando paso a un corazón litúrgico de incienso y rosa búlgara, sellando con maderas preciosas y vainilla de Madagascar.",
    pyramid: {
      top: "Azafrán Dorado, Pimienta Rosa, Pera Jugosa",
      heart: "Incienso Olíbano Místico, Rosa Inglesa, Jazmín Blanco",
      base: "Maderas Nobles Claras, Vainilla de Madagascar, Ámbar, Almizcle"
    },
    performance: {
      longevity: "12 a 16 Horas",
      sillage: "Alta y Aristocrática",
      occasion: "Eventos de gala, Cenas exclusivas, Clima templado a frío, Teatro",
      season: "Otoño, Invierno y Noches"
    },
    inStock: true
  },
  {
    id: "rasasi-hawas-viper",
    name: "Rasasi Hawas Viper",
    subtitle: "Eau de Parfum 100 ML - Hombre",
    brand: "Rasasi Perfumes",
    gender: "hombre",
    category: "amaderados",
    tags: ["hombre", "amaderados", "especiados"],
    badge: "DUPE BLACK AFGANO 🖤",
    priceCOP: 335000,
    originalPriceCOP: 420000,
    costCLP: 39000,
    image: "assets/images/perfumes/hawas-viper.jpg",
    rating: 5.0,
    reviewsCount: 165,
    inspiration: "Nasomatto Black Afgano (La fragancia oscura más legendaria)",
    shortDesc: "Hojas de cannabis verde, café tostado intenso, tabaco oscuro, incienso litúrgico, resinas y oud.",
    description: "La bestia negra y más desafiante de Rasasi. Hawas Viper rinde homenaje al mítico Black Afgano de Alessandro Gualtieri: una pócima hipnótica que abre con notas verdes resinosas de cáñamo y azafrán, evolucionando hacia un torbellino de tabaco maduro, café recién tostado e incienso ahumado, reposando en una base de bálsamo de Gurjun, madera de oud y resinas milenarias.",
    pyramid: {
      top: "Hojas de Cannabis, Azafrán Ahumado, Tomillo, Notas Verdes Resinosas",
      heart: "Tabaco Oscuro Maduro, Café Tostado, Incienso Sagrado, Canela",
      base: "Bálsamo de Gurjun, Madera de Agar (Oud), Haba Tonka, Resinas"
    },
    performance: {
      longevity: "14 a 20 Horas (Modo Bestia Oscura)",
      sillage: "Monstruosa / Llena cualquier espacio",
      occasion: "Noches frías, Fiestas subterráneas, Donde quieras imponer respeto absoluto",
      season: "Otoño e Invierno"
    },
    inStock: true
  },
  {
    id: "rasasi-hawas-overdose",
    name: "Rasasi Hawas for Him Overdose",
    subtitle: "Eau de Parfum 100 ML - Hombre",
    brand: "Rasasi Perfumes",
    gender: "hombre",
    category: "gourmand",
    tags: ["hombre", "bestseller", "gourmand", "dulces"],
    badge: "DUPE PDM ALTHÄIR 🍫",
    priceCOP: 330000,
    originalPriceCOP: 410000,
    costCLP: 38000,
    image: "assets/images/perfumes/hawas-overdose.jpg",
    rating: 5.0,
    reviewsCount: 152,
    inspiration: "Parfums de Marly Althäir (Vainilla Bourbon & Praliné de Lujo)",
    shortDesc: "Vainilla Bourbon cremosa, praliné de chocolate, canela tibia, flor de azahar, madera de gaiac y ámbar.",
    description: "Un flechazo gourmand de alta escuela. Hawas Overdose (nuevo lanzamiento 2026) recrea la opulencia de Althäir de Parfums de Marly: una sobredosis de vainilla bourbon combinada con acordes crujientes de praliné de avellanas, chocolate suizo y flor de azahar del naranjo, fundido sobre madera de gaiac y ámbar gris que proyecta un aura de riqueza y calidez irresistible.",
    pyramid: {
      top: "Canela Tibia, Cardamomo Especiado, Bergamota Dulce",
      heart: "Flor de Azahar, Praliné de Chocolate, Madera de Gaiac",
      base: "Vainilla Bourbon de Madagascar, Ámbar Gris, Almizcle Sedoso"
    },
    performance: {
      longevity: "12 a 16 Horas",
      sillage: "Pesada y Adictiva",
      occasion: "Citas románticas, Eventos nocturnos, Invierno, Noches frías",
      season: "Otoño e Invierno"
    },
    inStock: true
  },
  {
    id: "rasasi-hawas-highness",
    name: "Rasasi Hawas for Him Highness",
    subtitle: "Eau de Parfum 100 ML - Hombre",
    brand: "Rasasi Perfumes",
    gender: "hombre",
    category: "frescos",
    tags: ["hombre", "bestseller", "frescos", "amaderados"],
    badge: "DUPE SOSPIRO VIBRATO 👑",
    priceCOP: 335000,
    originalPriceCOP: 420000,
    costCLP: 39000,
    image: "assets/images/perfumes/hawas-highness.jpg",
    rating: 5.0,
    reviewsCount: 171,
    inspiration: "Sospiro Vibrato / Bvlgari Tygar (Cítricos Aristocráticos & Jengibre)",
    shortDesc: "Pomelo espumoso de Sicilia, jengibre noble, violeta real, jazmín, cedro imperial y vetiver.",
    description: "La cima del estatus y la realeza masculina. Hawas Highness (lanzamiento 2026) es la interpretación sublime de Sospiro Vibrato y Bvlgari Tygar: abre con una descarga efervescente de pomelo siciliano y jengibre noble, transicionando hacia un corazón aristocrático de hojas de violeta y jazmín sambac, sellado en una base señorial de cedro del Atlas, vetiver y ámbar gris.",
    pyramid: {
      top: "Pomelo Siciliano Brillante, Jengibre Noble, Bergamota Real",
      heart: "Hojas de Violeta, Jazmín Sambac, Especias Finas",
      base: "Madera de Cedro del Atlas, Vetiver de Haití, Pachulí, Ámbar Gris"
    },
    performance: {
      longevity: "12 a 16 Horas",
      sillage: "Alta, Majestuosa y Distinguida",
      occasion: "Reuniones de alto nivel, Galas, Citas de etiqueta, Diario VIP",
      season: "Todo el año"
    },
    inStock: true
  },
  {
    id: "rasasi-hawas-pink",
    name: "Rasasi Hawas Pink (Hawas for Her Pink)",
    subtitle: "Eau de Parfum 100 ML - Mujer",
    brand: "Rasasi Perfumes",
    gender: "mujer",
    category: "dulces",
    tags: ["mujer", "bestseller", "dulces", "gourmand"],
    badge: "DUPE LA VIE EST BELLE / LOVE DONT BE SHY 💕",
    priceCOP: 315000,
    originalPriceCOP: 395000,
    costCLP: 36000,
    image: "assets/images/perfumes/hawas-pink.jpg",
    rating: 4.9,
    reviewsCount: 138,
    inspiration: "Lancôme La Vie Est Belle / Kilian Love Don't Be Shy (Gourmand Rosa y Algodón Dulce)",
    shortDesc: "Algodón de azúcar, malvavisco esponjoso, flor de azahar, vainilla sedosa, canela tibia y haba tonka.",
    description: "La versión más coqueta, adictiva y femenina de la colección Hawas. Lanzada en 2025, Hawas Pink combina la dulzura etérea del algodón de azúcar y nubes de malvavisco con un corazón seductor de flor de azahar del naranjo y canela especiada, descansando sobre una base cremosa de vainilla de Madagascar y haba tonka. Un imán absoluto de cumplidos para mujeres dulces y seguras.",
    pyramid: {
      top: "Canela Fina, Nuez Moscada, Neroli Chispeante",
      heart: "Malvavisco (Bombón Dulce), Flor de Azahar, Nardos Silvestres",
      base: "Algodón de Azúcar, Vainilla Bourbon, Haba Tonka"
    },
    performance: {
      longevity: "10 a 14 Horas",
      sillage: "Alta y Envolvente Dulce",
      occasion: "Citas, Salidas con amigas, Diario chic, Fiestas",
      season: "Todo el año / Especialmente tardes y noches frescas"
    },
    inStock: true
  },
  {
    id: "rasasi-hawas-eclat",
    name: "Rasasi Hawas Éclat for Her",
    subtitle: "Eau de Parfum 100 ML - Mujer",
    brand: "Rasasi Perfumes",
    gender: "mujer",
    category: "florales",
    tags: ["mujer", "bestseller", "florales", "frutales"],
    badge: "DUPE DELINA LA ROSÉE 🌸",
    priceCOP: 320000,
    originalPriceCOP: 400000,
    costCLP: 37000,
    image: "assets/images/perfumes/hawas-eclat.jpg",
    rating: 5.0,
    reviewsCount: 146,
    inspiration: "Parfums de Marly Delina La Rosée (Rosas Acuáticas & Lichi Real)",
    shortDesc: "Lichi cristalino, rosa fresca con rocío matutino, pera jugosa, pistacho, suave incienso y vainilla ámbar.",
    description: "Elegancia radiante y pureza aristocrática. Hawas Éclat for Her (2025) reinterpreta la magia de Delina La Rosée de Parfums de Marly: una salida fresca y deslumbrante de lichi maduro, bergamota italiana y pera jugosa, que da paso a una reina de rosas con pétalos cubiertos de rocío matutino, matizada por sutil incienso y una estela acariciadora de vainilla cremosa, almizcle blanco y ámbar.",
    pyramid: {
      top: "Lichi Jugoso, Pera de Agua, Bergamota Italiana, Pistacho",
      heart: "Rosa Damascena Fresca, Flor de Peonía, Incienso Suave",
      base: "Vainilla Cremosa, Ámbar Radiante, Almizcle Blanco"
    },
    performance: {
      longevity: "10 a 14 Horas",
      sillage: "Alta, Fina y Sofisticada",
      occasion: "Bodas, Eventos al aire libre, Oficina de alta jerarquía, Citas de ensueño",
      season: "Primavera, Verano y Climas templados"
    },
    inStock: true
  },
  {
    id: "rasasi-hawas-diva",
    name: "Rasasi Hawas Diva",
    subtitle: "Eau de Parfum 100 ML - Mujer",
    brand: "Rasasi Perfumes",
    gender: "mujer",
    category: "florales",
    tags: ["mujer", "bestseller", "florales", "dulces"],
    badge: "DUPE VALENTINO DONNA BORN IN ROMA INTENSE 👠",
    priceCOP: 325000,
    originalPriceCOP: 410000,
    costCLP: 37000,
    image: "assets/images/perfumes/hawas-diva.jpg",
    rating: 5.0,
    reviewsCount: 162,
    inspiration: "Valentino Donna Born In Roma Intense (Frutos Rojos & Rosa Nocturna)",
    shortDesc: "Frutas rojas jugosas, ruibarbo chispeante, lichi exótico, rosa de Damasco, cedro y vainilla bourbon oscura.",
    description: "Puro magnetismo y sofisticación de alfombra roja. Hawas Diva (lanzamiento 2025) captura el espíritu atrevido y nocturno de Valentino Donna Born in Roma Intense: combina una explosión adictiva de frutas rojas maduras, ruibarbo acidulado y lichi, fusionados en un corazón lujoso de rosas y madera de cedro, terminando en un fondo cálido de vainilla bourbon, ámbar gris y almizcle sensual.",
    pyramid: {
      top: "Frutas Rojas Maduras, Ruibarbo Chispeante, Lichi Exótico",
      heart: "Rosa de Damasco, Incienso Místico, Madera de Cedro",
      base: "Vainilla Bourbon de Madagascar, Ámbar Gris, Almizcle Sensual"
    },
    performance: {
      longevity: "11 a 15 Horas",
      sillage: "Enorme, Seductora y Nocturna",
      occasion: "Salidas nocturnas, Cenas elegantes, Conciertos, Citas románticas de impacto",
      season: "Otoño, Invierno y Noches de todo el año"
    },
    inStock: true
  },
  {
    id: "rasasi-hawas-reina",
    name: "Rasasi Hawas Reina",
    subtitle: "Eau de Parfum 100 ML - Mujer / Unisex",
    brand: "Rasasi Perfumes",
    gender: "mujer",
    category: "gourmand",
    tags: ["mujer", "bestseller", "gourmand", "dulces"],
    badge: "DUPE PACO RABANNE OLYMPÉA ABSOLU 👑",
    priceCOP: 330000,
    originalPriceCOP: 420000,
    costCLP: 38000,
    image: "assets/images/perfumes/hawas-reina.jpg",
    rating: 5.0,
    reviewsCount: 175,
    inspiration: "Paco Rabanne Olympéa Absolu (Diosa Salada & Flor de Azahar Tropical)",
    shortDesc: "Albaricoque aterciopelado, pera jugosa, flor de azahar, jazmín real, crema de coco, canela, vainilla y sándalo.",
    description: "La fragancia de una diosa solar coronada. Hawas Reina (nuevo lanzamiento 2026 creado por el perfumista Daniel René) está inspirada en Olympéa Absolu: abre con albaricoques dulces, pera y canela cálida, fundidos en un bouquet celestial de flor de azahar del naranjo, jazmín, frangipani exótico y un toque de crema de coco y café, sostenido por una base opulenta de vainilla dorada, azúcar moreno, sándalo y ámbar.",
    pyramid: {
      top: "Albaricoque (Chabacano), Pera Jugosa, Canela Especiada",
      heart: "Flor de Azahar, Frangipani, Jazmín Real, Crema de Coco, Toque de Café",
      base: "Vainilla Dorada, Azúcar Morena, Sándalo Cremoso, Ámbar Radiante, Almizcle Blanco"
    },
    performance: {
      longevity: "12 a 16 Horas",
      sillage: "Bestial / Estela dorada de reina",
      occasion: "Galas, Fiestas de lujo, Ocasiones especiales donde quieras ser el centro de atención",
      season: "Todo el año"
    },
    inStock: true
  },
  {
    id: "rasasi-hawas-glitz",
    name: "Rasasi Hawas Glitz",
    subtitle: "Eau de Parfum 100 ML - Mujer / Unisex",
    brand: "Rasasi Perfumes",
    gender: "mujer",
    category: "gourmand",
    tags: ["mujer", "bestseller", "gourmand", "florales"],
    badge: "DUPE AMOUAGE GUIDANCE ✨",
    priceCOP: 335000,
    originalPriceCOP: 425000,
    costCLP: 39000,
    image: "assets/images/perfumes/hawas-glitz.jpg",
    rating: 5.0,
    reviewsCount: 168,
    inspiration: "Amouage Guidance (Pera Gourmand, Avellanas & Orris Polvoroso de Alta Nicho)",
    shortDesc: "Pera crujiente con nuez crocante, raíz de lirio atalcada, flor de azahar, caramelo derretido, sándalo y vainilla.",
    description: "El pináculo del lujo nicho oriental en versión femenina. Hawas Glitz (nuevo lanzamiento 2026) rinde homenaje al fenómeno olfativo Amouage Guidance: inicia con una combinación hipnótica de pera crujiente, bergamota y acordes de nueces tostadas, transformándose en un corazón aterciopelado de orris (raíz de lirio), flor de azahar y rosa, reposando sobre un lecho voluptuoso de caramelo líquido, notas atalcadas de lujo, sándalo cremoso y vainilla pura.",
    pyramid: {
      top: "Pera Crujiente, Nuez Tostada, Bergamota Chispeante",
      heart: "Raíz de Lirio (Orris Noble), Flor de Azahar, Rosa, Geranio, Ámbar Suave",
      base: "Caramelo Líquido, Vainilla de Madagascar, Sándalo Cremoso, Notas Atalcadas Finas, Almizcle"
    },
    performance: {
      longevity: "14 a 18 Horas",
      sillage: "Extrema, Hipnótica y Adictiva",
      occasion: "Eventos exclusivos, Salidas VIP, Bodas de gala, Citas inolvidables",
      season: "Todo el año / Especialmente climas templados y fríos"
    },
    inStock: true
  },
  {
    id: "afnan-9-pm-rebel",
    name: "Afnan 9 PM Rebel",
    subtitle: "Eau de Parfum 100 ML - Hombre / Unisex",
    brand: "Afnan Perfumes",
    gender: "hombre",
    category: "frutales",
    tags: ["hombre", "bestseller", "frutales", "dulces"],
    badge: "LANZAMIENTO VIRAL REBEL 🔥",
    priceCOP: 280000,
    originalPriceCOP: 350000,
    costCLP: 32000,
    image: "assets/images/perfumes/afnan-9-pm-rebel.jpg",
    rating: 5.0,
    reviewsCount: 164,
    inspiration: "Creed Aventus Absolu / Hacivat + JPG Ultra Male (El Híbrido Rebelde)",
    shortDesc: "Manzana verde ácida, piña jugosa, canela especiada, cedro ahumado, musgo de roble, vainilla y ámbar gris.",
    description: "La evolución más audaz de la saga 9 PM. Lanzado a finales de 2024, 9 PM Rebel fusiona la vibra adictiva y fiestera de Ultra Male con la frescura frutal y señorial de piña ahumada y musgo de roble estilo Aventus Absolu. Una bomba juvenil de seducción que destaca en fiestas, citas nocturnas y eventos donde quieras dejar huella imborrable.",
    pyramid: {
      top: "Manzana Verde Ácida, Piña Madura, Mandarina, Canela",
      heart: "Madera de Cedro, Musgo de Roble, Lavanda Francesa, Vainilla",
      base: "Ámbar Gris, Caramelo Suave, Almizcle, Notas Amaderadas"
    },
    performance: {
      longevity: "12 a 16 Horas",
      sillage: "Pesada y Magnética",
      occasion: "Fiestas, Discotecas, Salidas nocturnas, Citas informales",
      season: "Todo el año"
    },
    inStock: true
  },
  {
    id: "afnan-9-am",
    name: "Afnan 9 AM Pour Homme",
    subtitle: "Eau de Parfum 100 ML - Hombre / Unisex",
    brand: "Afnan Perfumes",
    gender: "hombre",
    category: "frescos",
    tags: ["hombre", "frescos", "citricos", "bestseller"],
    badge: "ENERGÍA MATUTINA & LIMPIEZA ☀️",
    priceCOP: 220000,
    originalPriceCOP: 280000,
    costCLP: 25000,
    image: "assets/images/perfumes/afnan-9-am.jpg",
    rating: 4.9,
    reviewsCount: 132,
    inspiration: "Maison Francis Kurkdjian Aqua Vitae / Acqua di Parma (Cítricos Dorados & Lavanda)",
    shortDesc: "Mandarina jugosa, limón chispeante, cardamomo fresco, lavanda limpia, cedro y almizcle blanco.",
    description: "El despertar perfecto. Afnan 9 AM es una oda a la frescura luminosa y la pulcritud masculina. Abre con una explosión radiante de mandarina jugosa, limón ácido y cardamomo frío, combinada con un corazón de lavanda aromática y rosa sutil, cerrando con maderas limpias de cedro y almizcle suave. El perfume de oficina y firma diaria por excelencia.",
    pyramid: {
      top: "Mandarina, Limón Italiano, Cardamomo Fresco, Pimienta Rosa",
      heart: "Lavanda Francesa, Flor de Azahar, Rosa Verde, Manzana",
      base: "Madera de Cedro, Almizcle Blanco, Pachulí Suave, Musgo"
    },
    performance: {
      longevity: "8 a 11 Horas",
      sillage: "Moderada a Alta y Pulcra",
      occasion: "Oficina, Universidad, Gimnasio, Días calurosos, Uso diario",
      season: "Primavera y Verano"
    },
    inStock: true
  },
  {
    id: "afnan-9-am-dive",
    name: "Afnan 9 AM Dive",
    subtitle: "Eau de Parfum 100 ML - Hombre",
    brand: "Afnan Perfumes",
    gender: "hombre",
    category: "frescos",
    tags: ["hombre", "bestseller", "frescos", "acuaticos"],
    badge: "DUPE BLEU DE CHANEL + YSL Y 🌊",
    priceCOP: 230000,
    originalPriceCOP: 290000,
    costCLP: 26000,
    image: "assets/images/perfumes/afnan-9-am-dive.jpg",
    rating: 5.0,
    reviewsCount: 198,
    inspiration: "Bleu de Chanel + YSL Y EDP (El Azul Definitivo)",
    shortDesc: "Menta piperita, manzana verde crujiente, grosellas negras, notas marinas profundas, cedro e incienso.",
    description: "El híbrido azul más aclamado por los críticos. 9 AM Dive fusiona la frescura chispeante de manzana y menta de YSL Y EDP con la masculinidad elegante y marina con toques de incienso de Bleu de Chanel. Una versatilidad total de 10 sobre 10 que genera cumplidos inmediatos en cualquier época del año.",
    pyramid: {
      top: "Menta Fresca, Manzana Verde, Grosellas Negras, Limón",
      heart: "Notas Marinas Oceánicas, Incienso Suave, Cedro, Jazmín",
      base: "Ambroxan, Pachulí Oscuro, Sándalo, Jengibre"
    },
    performance: {
      longevity: "10 a 14 Horas",
      sillage: "Alta, Proyecta frescura marina constante",
      occasion: "Diario, Oficina, Salidas casuales, Citas, Verano",
      season: "Todo el año / Excelente en calor"
    },
    inStock: true
  },
  {
    id: "afnan-turathi-blue",
    name: "Afnan Turathi Blue",
    subtitle: "Eau de Parfum 90 ML - Hombre",
    brand: "Afnan Perfumes",
    gender: "hombre",
    category: "citricos",
    tags: ["hombre", "bestseller", "citricos", "amaderados"],
    badge: "DUPE BVLGARI TYGAR 🐅",
    priceCOP: 250000,
    originalPriceCOP: 320000,
    costCLP: 28000,
    image: "assets/images/perfumes/afnan-turathi-blue.jpg",
    rating: 5.0,
    reviewsCount: 224,
    inspiration: "Bvlgari Tygar (Pomelo Jugoso, Jengibre & Ambroxan de Lujo)",
    shortDesc: "Pomelo espumoso hiperrealista, especias frescas, ambroxan mineral vibrante, notas amaderadas y almizcle.",
    description: "Considerado internacionalmente el mejor clon existente del codiciado Bvlgari Tygar (fragancia nicho de más de $1.600.000 COP). Turathi Blue abre con un pomelo jugoso, amargo y efervescente que dura toda la vida del perfume, combinado con un torrente de ambroxan de altísima calidad y maderas nobles. Un aroma de millonario en la costa mediterránea.",
    pyramid: {
      top: "Pomelo Brillante (Toronja Hiperrealista), Bergamota",
      heart: "Ambroxan Mineral, Especias Nobles, Pachulí",
      base: "Madera de Cedro, Ámbar Gris, Almizcle, Vetiver"
    },
    performance: {
      longevity: "12 a 16 Horas",
      sillage: "Pesada y Proyecta a metros",
      occasion: "Reuniones de negocios, Eventos VIP, Salidas diurnas y nocturnas",
      season: "Todo el año / Especialmente Primavera y Verano"
    },
    inStock: true
  },
  {
    id: "afnan-turathi-brown",
    name: "Afnan Turathi Brown Homme",
    subtitle: "Eau de Parfum 90 ML - Hombre",
    brand: "Afnan Perfumes",
    gender: "hombre",
    category: "amaderados",
    tags: ["hombre", "amaderados", "especiados", "orientales"],
    badge: "DUPE YSL TUXEDO 🎩",
    priceCOP: 250000,
    originalPriceCOP: 320000,
    costCLP: 28000,
    image: "assets/images/perfumes/afnan-turathi-brown.jpg",
    rating: 4.9,
    reviewsCount: 147,
    inspiration: "Yves Saint Laurent Tuxedo (Pachulí Elegante, Especias & Vainilla Bourbon)",
    shortDesc: "Pachulí aristocrático, pimienta negra, cilantro aromático, ámbar cálido, vainilla ahumada y maderas preciosas.",
    description: "La encarnación de la elegancia formal. Turathi Brown rinde tributo a la obra maestra YSL Tuxedo: una mezcla refinadísima de pachulí oscuro pero limpio, pimienta negra picante, acordes balsámicos de ámbar y un fondo cálido de vainilla ahumada y maderas nobles. Diseñado para el hombre que viste impecable y exige distinción absoluta.",
    pyramid: {
      top: "Pimienta Negra, Cilantro, Bergamota Ahumada",
      heart: "Rosa Oscura, Hojas de Pachulí, Especias Finas",
      base: "Ámbar Cálido, Vainilla Bourbon, Benjuí, Madera de Cedro"
    },
    performance: {
      longevity: "10 a 14 Horas",
      sillage: "Alta, Sofisticada y Misteriosa",
      occasion: "Galas de noche, Cenas de etiqueta, Citas formales, Clima frío",
      season: "Otoño e Invierno"
    },
    inStock: true
  },
  {
    id: "afnan-supremacy-silver",
    name: "Afnan Supremacy Silver",
    subtitle: "Eau de Parfum 100 ML - Hombre",
    brand: "Afnan Perfumes",
    gender: "hombre",
    category: "amaderados",
    tags: ["hombre", "bestseller", "amaderados", "frutales"],
    badge: "DUPE CREED AVENTUS ORIGINAL 🍍",
    priceCOP: 240000,
    originalPriceCOP: 300000,
    costCLP: 27000,
    image: "assets/images/perfumes/afnan-supremacy-silver.jpg",
    rating: 4.9,
    reviewsCount: 188,
    inspiration: "Creed Aventus (Batch Clásico Frutal & Ahumado de Abedul)",
    shortDesc: "Piña jugosa natural, manzana crujiente, abedul ahumado elegante, musgo de roble, pachulí y ámbar gris.",
    description: "El clon pionero y más equilibrado del mítico Creed Aventus. A diferencia de otras alternativas sintéticas, Supremacy Silver destaca por su salida suave y natural de piña jugosa, grosellas negras y manzana, transicionando hacia un corazón aristocrático de madera de abedul ahumada y musgo de roble. Masculinidad pura y clásica de clase alta.",
    pyramid: {
      top: "Piña Jugosa, Grosellas Negras, Manzana, Bergamota",
      heart: "Madera de Abedul Ahumada, Pachulí, Jazmín Marroquí, Rosa",
      base: "Musgo de Roble, Ámbar Gris, Almizcle Blanco, Vainilla"
    },
    performance: {
      longevity: "9 a 13 Horas",
      sillage: "Alta y Distinguida",
      occasion: "Oficina ejecutiva, Negocios, Citas de conquista, Diario VIP",
      season: "Todo el año"
    },
    inStock: true
  },
  {
    id: "afnan-supremacy-gold",
    name: "Afnan Supremacy Gold",
    subtitle: "Eau de Parfum 100 ML - Hombre / Unisex",
    brand: "Afnan Perfumes",
    gender: "hombre",
    category: "orientales",
    tags: ["hombre", "orientales", "dulces", "amaderados"],
    badge: "DUPE GUERLAIN CUIR BÉLUGA ⚜️",
    priceCOP: 245000,
    originalPriceCOP: 310000,
    costCLP: 28000,
    image: "assets/images/perfumes/afnan-supremacy-gold.jpg",
    rating: 4.9,
    reviewsCount: 129,
    inspiration: "Guerlain Cuir Béluga (Cuero de Gamuza Blanco & Vainilla Atalcada de Lujo)",
    shortDesc: "Cuero gamuzado suave, flor de violeta, ámbar dorado, vainilla cremosa, clavo de olor y pachulí fino.",
    description: "Puro terciopelo en botella. Supremacy Gold evoca la opulencia de la alta perfumería francesa, inspirándose en Cuir Béluga de Guerlain. Una caricia olfativa que combina cuero blanco afelpado, nuez moscada cálida y flores empolvadas sobre una cama deliciosa de vainilla pura y ámbar licoroso. Sensual, cálido y sumamente exclusivo.",
    pyramid: {
      top: "Flor de Violeta, Nuez Moscada, Flor de Melocotón",
      heart: "Iris Atalcado, Clavo de Olor, Pachulí Terciopelo",
      base: "Cuero de Gamuza Blanco, Vainilla Cálida, Ámbar Dorado, Benjuí"
    },
    performance: {
      longevity: "10 a 14 Horas",
      sillage: "Envolvente, Cremosa y Cálida",
      occasion: "Noches elegantes, Citas románticas íntimas, Invierno",
      season: "Otoño e Invierno"
    },
    inStock: true
  },
  {
    id: "afnan-supremacy-in-oud",
    name: "Afnan Supremacy In Oud",
    subtitle: "Extrait de Parfum 100 ML - Hombre / Unisex",
    brand: "Afnan Perfumes",
    gender: "hombre",
    category: "orientales",
    tags: ["hombre", "bestseller", "orientales", "especiados"],
    badge: "DUPE INITIO OUD FOR GREATNESS 👑",
    priceCOP: 295000,
    originalPriceCOP: 380000,
    costCLP: 34000,
    image: "assets/images/perfumes/afnan-supremacy-in-oud.jpg",
    rating: 5.0,
    reviewsCount: 205,
    inspiration: "Initio Oud for Greatness (Oud Real, Azafrán Místico & Lavanda Oscura)",
    shortDesc: "Azafrán dorado, nuez moscada, madera de oud real ahumada, lavanda noble, pachulí y almizcle oscuro.",
    description: "Concentración Extrait de Parfum de poder supremo. Recrea con asombrosa fidelidad la majestuosidad de Oud for Greatness de Initio Parfums Privés. Una explosión embriagadora de azafrán místico y lavanda aromática que da paso a un oud oscuro, seco y opulento que proyecta respeto, autoridad y misterio absoluto.",
    pyramid: {
      top: "Azafrán Real, Nuez Moscada, Lavanda Francesa",
      heart: "Madera de Oud Natural, Pachulí Oscuro, Cedro",
      base: "Almizcle Oscuro, Ámbar Seco, Notas Amaderadas Nobles"
    },
    performance: {
      longevity: "14 a 18 Horas (Bestial)",
      sillage: "Enorme / Estela que llena habitaciones",
      occasion: "Eventos nocturnos, Galas, Citas de impacto, Climas fríos",
      season: "Otoño e Invierno"
    },
    inStock: true
  },
  {
    id: "afnan-supremacy-noir",
    name: "Afnan Supremacy Noir",
    subtitle: "Eau de Parfum 100 ML - Hombre / Unisex",
    brand: "Afnan Perfumes",
    gender: "hombre",
    category: "amaderados",
    tags: ["hombre", "amaderados", "frescos", "especiados"],
    badge: "DUPE BOTTEGA VENETA POUR HOMME 🌲",
    priceCOP: 230000,
    originalPriceCOP: 290000,
    costCLP: 26000,
    image: "assets/images/perfumes/afnan-supremacy-noir.jpg",
    rating: 4.8,
    reviewsCount: 116,
    inspiration: "Bottega Veneta Pour Homme Extreme (Pino Nórdico, Cuero & Resina de Abeto)",
    shortDesc: "Pino alpino, bergamota crujiente, violeta oscura, cuero curtido, resina de abeto y pachulí terroso.",
    description: "Un paseo nocturno por un bosque de coníferas cubierto de niebla. Supremacy Noir es una fragancia verde oscura, aromática y amaderada inspirada en Bottega Veneta Pour Homme. Abre con pino alpino y bergamota picante, fundiéndose en notas de cuero señorial y resinas de abeto balsámico. Para el caballero sobrio, maduro y enigmático.",
    pyramid: {
      top: "Agujas de Pino, Bergamota, Violeta Oscura",
      heart: "Cuero Curtido, Resina de Abeto Balsámico, Pachulí",
      base: "Musgo de Roble, Cedro del Atlas, Ládano, Almizcle"
    },
    performance: {
      longevity: "9 a 13 Horas",
      sillage: "Moderada-Alta y Muy Masculina",
      occasion: "Uso ejecutivo, Días de lluvia, Noches frías, Citas discretas",
      season: "Otoño e Invierno"
    },
    inStock: true
  },
  {
    id: "afnan-supremacy-in-heaven",
    name: "Afnan Supremacy In Heaven",
    subtitle: "Eau de Parfum 100 ML - Hombre",
    brand: "Afnan Perfumes",
    gender: "hombre",
    category: "frescos",
    tags: ["hombre", "frescos", "citricos", "bestseller"],
    badge: "DUPE CREED SILVER MOUNTAIN WATER 🏔️",
    priceCOP: 235000,
    originalPriceCOP: 300000,
    costCLP: 27000,
    image: "assets/images/perfumes/afnan-supremacy-in-heaven.jpg",
    rating: 4.9,
    reviewsCount: 154,
    inspiration: "Creed Silver Mountain Water (Té Verde Alpino & Grosellas Negras Heladas)",
    shortDesc: "Bergamota chispeante, mandarina fría, té verde de alta montaña, grosellas negras, sándalo y almizcle blanco.",
    description: "La pureza gélida de los Alpes Suizos. Supremacy In Heaven recrea el icónico Silver Mountain Water de Creed: un torrente cristalino de bergamota y mandarina bañado en té verde relajante y grosellas negras ácidas, reposando en una base inmaculada de almizcle blanco y madera de sándalo. Frescura aristocrática para climas cálidos y templados.",
    pyramid: {
      top: "Bergamota de Calabria, Mandarina Gélida",
      heart: "Té Verde de Montaña, Grosellas Negras Jugosas",
      base: "Almizcle Blanco Suave, Madera de Sándalo, Notas Ambarinas"
    },
    performance: {
      longevity: "9 a 12 Horas",
      sillage: "Alta, Limpia y Refrescante",
      occasion: "Días soleados, Oficina, Encuentros informales, Mañanas",
      season: "Primavera y Verano"
    },
    inStock: true
  },
  {
    id: "afnan-supremacy-incense",
    name: "Afnan Supremacy Incense",
    subtitle: "Eau de Parfum 100 ML - Hombre",
    brand: "Afnan Perfumes",
    gender: "hombre",
    category: "orientales",
    tags: ["hombre", "orientales", "especiados", "amaderados"],
    badge: "DUPE AMOUAGE INTERLUDE MAN 🔥",
    priceCOP: 250000,
    originalPriceCOP: 320000,
    costCLP: 28000,
    image: "assets/images/perfumes/afnan-supremacy-incense.jpg",
    rating: 5.0,
    reviewsCount: 173,
    inspiration: "Amouage Interlude Man (Incienso Real de Omán, Orégano & Cuero Ahumado)",
    shortDesc: "Incienso ahumado místico, orégano especiado, bergamota oscura, ámbar gris, ládano, cuero y oud.",
    description: "Conocido como el clon más temido y potente de Amouage Interlude Man ('The Blue Beast'). Supremacy Incense es una obra de arte para amantes de las fragancias oscuras e imponentes: una espiral hipnótica de incienso de Omán, especias de orégano y pimiento, fundidas sobre una base monumental de cuero negro ahumado, ámbar y maderas sagradas. Presencia imborrable.",
    pyramid: {
      top: "Orégano Picante, Pimienta de Jamaica, Bergamota Oscura",
      heart: "Incienso de Omán, Ámbar Balsámico, Ládano, Opopónaco",
      base: "Cuero Ahumado, Madera de Oud, Pachulí, Sándalo"
    },
    performance: {
      longevity: "14 a 18 Horas (Beastmode)",
      sillage: "Bestial / No pasa desapercibido jamás",
      occasion: "Eventos nocturnos de gran etiqueta, Noches frías de invierno",
      season: "Otoño e Invierno"
    },
    inStock: true
  },
  {
    id: "afnan-rare-carbon",
    name: "Afnan Rare Carbon",
    subtitle: "Eau de Parfum 100 ML - Hombre",
    brand: "Afnan Perfumes",
    gender: "hombre",
    category: "cuero",
    tags: ["hombre", "bestseller", "amaderados", "especiados"],
    badge: "DUPE TOM FORD OMBRÉ LEATHER 🖤",
    priceCOP: 260000,
    originalPriceCOP: 330000,
    costCLP: 29000,
    image: "assets/images/perfumes/afnan-rare-carbon.jpg",
    rating: 5.0,
    reviewsCount: 218,
    inspiration: "Tom Ford Ombré Leather (Cuero Negro de Lujo, Cardamomo & Violeta)",
    shortDesc: "Cuero negro refinado, hojas de violeta fresca, cardamomo picante, jazmín sambac, pachulí y ámbar.",
    description: "El clon supremo y más elogiado del legendario Tom Ford Ombré Leather. Rare Carbon captura el olor inconfundible de una chaqueta de cuero nueva de alta costura, suavizada por la frescura empolvada de hojas de violeta y cardamomo aromático, sobre una base seductora de ámbar y pachulí. Un perfume que proyecta éxito, seguridad y atractivo sexual indiscutible.",
    pyramid: {
      top: "Cuero Negro Curtido, Canela Tibia, Nuez Moscada, Violeta",
      heart: "Hojas de Violeta, Rosa Oscura, Jazmín Sambac, Cedro",
      base: "Cuero de Lujo, Ámbar Cálido, Pachulí, Vetiver"
    },
    performance: {
      longevity: "11 a 15 Horas",
      sillage: "Pesada y Magnética",
      occasion: "Citas románticas, Salidas nocturnas, Reuniones de poder, Chaqueta de cuero",
      season: "Otoño, Invierno y Noches templadas"
    },
    inStock: true
  },
  {
    id: "afnan-modest-une",
    name: "Afnan Modest Une Pour Homme",
    subtitle: "Eau de Parfum 100 ML - Hombre",
    brand: "Afnan Perfumes",
    gender: "hombre",
    category: "frescos",
    tags: ["hombre", "bestseller", "frescos", "citricos"],
    badge: "DUPE DIOR SAUVAGE EDT / EDP ⚡",
    priceCOP: 230000,
    originalPriceCOP: 290000,
    costCLP: 26000,
    image: "assets/images/perfumes/afnan-modest-une.jpg",
    rating: 4.9,
    reviewsCount: 195,
    inspiration: "Dior Sauvage (Bergamota de Calabria, Pimienta de Sichuan & Ambroxan)",
    shortDesc: "Bergamota efervescente, pimienta de Sichuan, lavanda limpia, geranio, ambroxan metálico y cedro.",
    description: "El clon más fiel y duradero de Dior Sauvage. Modest Une abre con una descarga electrizante de bergamota de Calabria y pimienta de Sichuan, que da paso a un corazón limpio de lavanda y geranio, anclado en una base explosiva de ambroxan y madera de cedro. El rey absoluto de los cumplidos femeninos, ultra versátil para cualquier momento del día.",
    pyramid: {
      top: "Bergamota de Calabria, Pimienta de Sichuan, Lavanda",
      heart: "Pimienta Rosa, Geranio, Vetiver, Elemí",
      base: "Ambroxan Potente, Madera de Cedro, Ládano"
    },
    performance: {
      longevity: "10 a 14 Horas",
      sillage: "Alta / Estela magnética que llama la atención",
      occasion: "Todo uso: Oficina, Citas, Fiesta, Diario, Universidad",
      season: "Todo el año"
    },
    inStock: true
  },
  {
    id: "afnan-historic-olmeda",
    name: "Afnan Historic Olmeda",
    subtitle: "Eau de Parfum 100 ML - Hombre / Unisex",
    brand: "Afnan Perfumes",
    gender: "hombre",
    category: "frescos",
    tags: ["hombre", "frescos", "amaderados", "citricos"],
    badge: "DUPE BLEU DE CHANEL PARFUM 🏛️",
    priceCOP: 245000,
    originalPriceCOP: 310000,
    costCLP: 28000,
    image: "assets/images/perfumes/afnan-historic-olmeda.jpg",
    rating: 4.9,
    reviewsCount: 142,
    inspiration: "Bleu de Chanel Parfum / EDP (Cítricos Aristocráticos, Jengibre, Nuez Moscada & Cedro)",
    shortDesc: "Toronja rosa, pimienta rosa chispeante, cardamomo, jengibre, nuez moscada, cedro refinado y ámbar.",
    description: "Elegancia atemporal en frasco de estatua clásica. Historic Olmeda reinterpreta la sofisticación azul amaderada de Bleu de Chanel Parfum: abre con toronja rosa y pimienta chispeante, acompañada de un corazón especiado de jengibre y cardamomo noble, sellado con cedro majestuoso y ámbar gris. Proyecta madurez, pulcritud y porte ejecutivo impecable.",
    pyramid: {
      top: "Toronja Rosa, Pimienta Rosa, Cardamomo, Enebro",
      heart: "Jengibre Fresco, Nuez Moscada, Jazmín, Salvia",
      base: "Madera de Cedro, Ámbar Gris, Pachulí, Vetiver"
    },
    performance: {
      longevity: "10 a 14 Horas",
      sillage: "Alta, Fina y Distinguida",
      occasion: "Negocios, Oficina, Citas formales, Eventos diurnos y nocturnos",
      season: "Todo el año"
    },
    inStock: true
  },
  {
    id: "afnan-historic-doria",
    name: "Afnan Historic Doria",
    subtitle: "Eau de Parfum 100 ML - Hombre / Unisex",
    brand: "Afnan Perfumes",
    gender: "hombre",
    category: "florales",
    tags: ["hombre", "orientales", "florales", "dulces"],
    badge: "ALTA PERFUMERÍA FLORAL AMBARADA 🏛️",
    priceCOP: 245000,
    originalPriceCOP: 310000,
    costCLP: 28000,
    image: "assets/images/perfumes/afnan-historic-doria.jpg",
    rating: 4.9,
    reviewsCount: 136,
    inspiration: "Guerlain L'Art & La Matière / Neroli Ambré (Frambuesa, Neroli, Flores Blancas & Ámbar)",
    shortDesc: "Frambuesa aterciopelada, flor de azahar del naranjo, neroli fresco, jazmín sambac, ámbar y almizcle cremoso.",
    description: "La cumbre de la opulencia renacentista. Historic Doria es una creación sofisticada que combina notas jugosas de frambuesa madura y neroli italiano con un corazón fastuoso de flores blancas y flor de azahar, reposando en una base sedosa de ámbar y almizcle blanco. Una fragancia aristocrática, brillante y luminosa que viste como un traje de seda hecho a medida.",
    pyramid: {
      top: "Frambuesa Jugosa, Neroli de Túnez, Ralladura de Limón",
      heart: "Flor de Azahar, Jazmín Sambac, Tuberosa Suave",
      base: "Ámbar Radiante, Madera de Cedro, Almizcle Blanco, Vainilla"
    },
    performance: {
      longevity: "10 a 14 Horas",
      sillage: "Alta, Luminosa y Memorable",
      occasion: "Galas, Fiestas de etiqueta, Citas especiales, Ocasiones de lujo",
      season: "Primavera, Verano y Climas templados"
    },
    inStock: true
  },
  {
    id: "afnan-ornament-pour-homme",
    name: "Afnan Ornament Pour Homme",
    subtitle: "Eau de Parfum 100 ML - Hombre",
    brand: "Afnan Perfumes",
    gender: "hombre",
    category: "especiados",
    tags: ["hombre", "bestseller", "especiados", "amaderados"],
    badge: "DUPE AZZARO WANTED BY NIGHT 🌙",
    priceCOP: 230000,
    originalPriceCOP: 290000,
    costCLP: 26000,
    image: "assets/images/perfumes/afnan-ornament-pour-homme.jpg",
    rating: 4.9,
    reviewsCount: 148,
    inspiration: "Azzaro Wanted / Wanted By Night (Canela, Manzana, Cardamomo & Ámbar Seductor)",
    shortDesc: "Manzana verde ácida, cardamomo dulce, clavo de olor picante, canela tibia, cedro oscuro, ámbar y pachulí.",
    description: "El seductor de la noche en una botella con diseño de reloj joya. Afnan Ornament Pour Homme está inspirado en el magnetismo de Azzaro Wanted By Night: abre con una combinación cautivadora de manzana y cardamomo dulce, que evoluciona hacia un corazón especiado de canela y clavo de olor, reposando sobre una base cálida de ámbar, cedro y pachulí. Un conquistador nocturno infalible.",
    pyramid: {
      top: "Manzana Verde, Cardamomo Especiado, Nuez Moscada",
      heart: "Canela Tibia, Clavo de Olor, Geranio, Flores Aromáticas",
      base: "Ámbar Cálido, Madera de Cedro, Pachulí Oscuro, Almizcle"
    },
    performance: {
      longevity: "11 a 15 Horas",
      sillage: "Pesada y Seductora",
      occasion: "Salidas nocturnas, Citas románticas, Climas fríos, Bares y eventos",
      season: "Otoño e Invierno"
    },
    inStock: true
  }
];

// Configuración general del negocio (editable desde el panel de control o localStorage)
const DEFAULT_STORE_CONFIG = {
  storeName: "SCENTIA",
  storeFullName: "SCENTIA FINE FRAGRANCES",
  storeSlogan: "Porque en un mundo donde todo es réplica, yo elijo ser original.",
  whatsappNumber: "573127455474", // Número oficial de WhatsApp en Colombia (+57 312 745 5474)
  whatsappMessagePrefix: "¡Hola SCENTIA! Vi su catálogo en la tienda y quiero hacer un pedido:",
  colombiaShippingCost: 15000, // Costo de envío estándar en COP
  freeShippingThreshold: 350000, // Envío gratis a partir de este monto en COP
  exchangeRateCLPtoCOP: 4.15, // Tasa de cambio aproximada para la calculadora de arbitraje
  clpShippingPerUnit: 4500 // Costo estimado de flete Chile -> Colombia por unidad en CLP
};
