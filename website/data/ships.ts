export type ShipTier = "free" | "unlock" | "premium";
export type ShipRarity = "Common" | "Rare" | "Legendary" | "Mythic";

export interface Ship {
  id: string;
  name: string;
  class: string;
  description: string;
  tier: ShipTier;
  rarity: ShipRarity;
  energy: string;
  unlockLevel?: number;
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
    class: "Explorador Leve",
    description: "A primeira nave de cada explorador. Ágil, silenciosa e perfeita para descobrir o sistema solar.",
    tier: "free",
    rarity: "Common",
    energy: "82%",
    speed: "0.3c",
    range: "Sistema Solar",
    shield: "Básico",
    color: "#00d4ff",
    glowColor: "rgba(0,212,255,0.3)",
  },
  {
    id: "vega-scout",
    name: "Vega Scout",
    class: "Batedora Rápida",
    description: "Projetada para reconhecimento. Fende o espaço com precisão cirúrgica.",
    tier: "free",
    rarity: "Common",
    energy: "88%",
    speed: "0.5c",
    range: "Vizinhança Estelar",
    shield: "Médio",
    color: "#66ffcc",
    glowColor: "rgba(102,255,204,0.3)",
  },
  {
    id: "helios-mk1",
    name: "Helios Mk.I",
    class: "Cruzador Solar",
    description: "Construída para longas viagens. Carrega energia solar em reatores de fusão compactos.",
    tier: "free",
    rarity: "Common",
    energy: "76%",
    speed: "0.7c",
    range: "Região Galáctica",
    shield: "Reforçado",
    color: "#ffcc00",
    glowColor: "rgba(255,204,0,0.3)",
  },
  {
    id: "drift",
    name: "Drift",
    class: "Nave de Deriva Livre",
    description: "Sem destino definido. Feita para quem quer apenas flutuar pelo cosmos e observar.",
    tier: "free",
    rarity: "Common",
    energy: "94%",
    speed: "0.6c",
    range: "Multi-Sistema",
    shield: "Adaptativo",
    color: "#aa88ff",
    glowColor: "rgba(170,136,255,0.3)",
  },
  {
    id: "orion-blade",
    name: "Orion Blade",
    class: "Interceptor de Combate",
    description: "Desenhada nas margens do braço de Orion. Velocidade e precisão acima de tudo.",
    tier: "unlock",
    rarity: "Rare",
    unlockLevel: 10,
    energy: "79%",
    speed: "0.85c",
    range: "Braço Galáctico",
    shield: "Plasmático",
    color: "#ff6600",
    glowColor: "rgba(255,102,0,0.3)",
  },
  {
    id: "nebula-wraith",
    name: "Nebula Wraith",
    class: "Stealth Interestelar",
    description: "Invisível ao radar. Move-se através de nebulosas sem deixar rasto de energia.",
    tier: "unlock",
    rarity: "Rare",
    unlockLevel: 25,
    energy: "71%",
    speed: "0.95c",
    range: "Galáxia Local",
    shield: "Cloaking",
    color: "#8844ff",
    glowColor: "rgba(136,68,255,0.3)",
  },
  {
    id: "titan-ark",
    name: "Titan Ark",
    class: "Cargueiro Colossal",
    description: "Uma cidade espacial com motores. A maior nave explorável do universo LookSpace.",
    tier: "unlock",
    rarity: "Rare",
    unlockLevel: 40,
    energy: "89%",
    speed: "0.99c",
    range: "Universo Observável",
    shield: "Gravitacional",
    color: "#ff4444",
    glowColor: "rgba(255,68,68,0.3)",
  },
  {
    id: "seraph-x",
    name: "Seraph X",
    class: "Caça de Dobra Quântica",
    description: "A fronteira entre matéria e energia. Viaja à velocidade da luz com dobra quântica real.",
    tier: "premium",
    rarity: "Legendary",
    energy: "100%",
    speed: "1.0c (dobra)",
    range: "Ilimitado",
    shield: "Quântico",
    color: "#00ffff",
    glowColor: "rgba(0,255,255,0.4)",
  },
  {
    id: "void-empress",
    name: "Void Empress",
    class: "Cruzador do Vazio",
    description: "Nascida no vazio entre galáxias. Opera além da física convencional.",
    tier: "premium",
    rarity: "Legendary",
    energy: "110%",
    speed: "10c (hiper)",
    range: "Multiverso",
    shield: "Dimensional",
    color: "#ff00aa",
    glowColor: "rgba(255,0,170,0.4)",
  },
  {
    id: "genesis-prime",
    name: "Genesis Prime",
    class: "Nave-Mãe Lendária",
    description: "A nave mais poderosa já construída. Uma singularidade ambulante que dobra o próprio espaço-tempo.",
    tier: "premium",
    rarity: "Mythic",
    energy: "∞",
    speed: "∞ (singularidade)",
    range: "Omniversal",
    shield: "Singularidade",
    color: "#ffffff",
    glowColor: "rgba(255,255,255,0.4)",
  },
];

export default ships;
