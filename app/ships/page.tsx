export interface Ship {
  id: string;
  name: string;
  class: string;
  tier: "free" | "unlock" | "premium";
  unlockLevel?: number;
  description: string;
  speed: string;
  range: string;
  shield: string;
  color: string;
  glowColor: string;
}

export const ships: Ship[] = [
  {
    id: "aurora-i",
    name: "Aurora I",
    class: "Scout Ship",
    tier: "free",
    description:
      "Nave inicial leve e rápida criada para exploração de curto alcance nos primeiros sistemas solares.",
    speed: "1.2c",
    range: "Curto",
    shield: "Baixo",
    color: "#38bdf8",
    glowColor: "rgba(56,189,248,0.45)",
  },

  {
    id: "vega-scout",
    name: "Vega Scout",
    class: "Explorer",
    tier: "free",
    description:
      "Modelo de reconhecimento usado para exploração rápida em regiões desconhecidas do universo.",
    speed: "1.6c",
    range: "Médio",
    shield: "Baixo",
    color: "#22d3ee",
    glowColor: "rgba(34,211,238,0.45)",
  },

  {
    id: "helios-mk1",
    name: "Helios MK-I",
    class: "Solar Cruiser",
    tier: "unlock",
    unlockLevel: 5,
    description:
      "Cruiser alimentado por energia estelar. Excelente equilíbrio entre velocidade e estabilidade.",
    speed: "2.1c",
    range: "Longo",
    shield: "Médio",
    color: "#facc15",
    glowColor: "rgba(250,204,21,0.45)",
  },

  {
    id: "drift",
    name: "Drift",
    class: "Stealth Ship",
    tier: "unlock",
    unlockLevel: 8,
    description:
      "Especializada em infiltração e viagens silenciosas através de nebulosas profundas.",
    speed: "2.8c",
    range: "Longo",
    shield: "Médio",
    color: "#a78bfa",
    glowColor: "rgba(167,139,250,0.45)",
  },

  {
    id: "orion-blade",
    name: "Orion Blade",
    class: "Combat Ship",
    tier: "unlock",
    unlockLevel: 12,
    description:
      "Nave militar avançada equipada para exploração hostil e defesa em sistemas perigosos.",
    speed: "3.4c",
    range: "Longo",
    shield: "Alto",
    color: "#fb7185",
    glowColor: "rgba(251,113,133,0.45)",
  },

  {
    id: "nebula-wraith",
    name: "Nebula Wraith",
    class: "Phantom Explorer",
    tier: "unlock",
    unlockLevel: 15,
    description:
      "Construída para atravessar tempestades cósmicas e regiões obscuras do espaço profundo.",
    speed: "4.0c",
    range: "Extremo",
    shield: "Alto",
    color: "#818cf8",
    glowColor: "rgba(129,140,248,0.45)",
  },

  {
    id: "titan-ark",
    name: "Titan Ark",
    class: "Carrier",
    tier: "premium",
    description:
      "Gigantesca nave de transporte interestelar com tecnologia de sobrevivência avançada.",
    speed: "2.5c",
    range: "Extremo",
    shield: "Massivo",
    color: "#f97316",
    glowColor: "rgba(249,115,22,0.45)",
  },

  {
    id: "seraph-x",
    name: "Seraph X",
    class: "Angel Class",
    tier: "premium",
    description:
      "Nave lendária criada com tecnologia desconhecida capaz de alcançar velocidades extremas.",
    speed: "5.2c",
    range: "Infinito",
    shield: "Ultra",
    color: "#e879f9",
    glowColor: "rgba(232,121,249,0.45)",
  },

  {
    id: "void-empress",
    name: "Void Empress",
    class: "Void Queen",
    tier: "premium",
    description:
      "Uma entidade tecnológica viva capaz de navegar entre dimensões espaciais avançadas.",
    speed: "6.8c",
    range: "Infinito",
    shield: "Supremo",
    color: "#6366f1",
    glowColor: "rgba(99,102,241,0.45)",
  },

  {
    id: "genesis-prime",
    name: "Genesis Prime",
    class: "Celestial Core",
    tier: "premium",
    description:
      "A nave suprema do universo LookSpace. Uma fusão entre inteligência artificial e energia cósmica.",
    speed: "∞",
    range: "Universal",
    shield: "Absoluto",
    color: "#06b6d4",
    glowColor: "rgba(6,182,212,0.55)",
  },
];
