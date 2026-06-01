export type Ship = {
  id: string;
  name: string;
  description: string;
  role?: string;
  image?: string;
};

export const ships: Ship[] = [
  {
    id: 'ss-aurora',
    name: 'Aurora',
    description: 'A modular exploration cruiser optimized for cinematic flybys and reflective hull visuals.',
    role: 'Explorer',
  },
  {
    id: 'ss-ark',
    name: 'Ark',
    description: 'Heavy cinematic transport with dramatic engine trails and volumetric exhaust.',
    role: 'Transport',
  },
  {
    id: 'ss-specter',
    name: 'Specter',
    description: 'Light scout prototype featuring stealth surfaces and minimal profile.',
    role: 'Scout',
  },
];

export default ships;
