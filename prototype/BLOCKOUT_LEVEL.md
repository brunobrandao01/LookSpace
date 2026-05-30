# Blockout Level — Instruções rápidas

Objetivo: criar um level blockout para `SCENE_001` com escalas e pontos de referência.

1) Grid & Scale
- Use uma grid de 1000 units para grandes distâncias; marque linhas para altitude (sea level, 10k, 50k).

2) Placements
- Terreno simples com plane para ocean + sphere for planet curvature (low poly).
- Volumetric cloud layer (low-res) em um volume curto para passagem da câmera.
- Position placeholder ship actor on approach spline with keyframes in Sequencer.

3) Lighting
- Directional light as sun; set to movable. Add skylight (stationary) and HDRI backdrop for space.

4) Level Streaming
- Create sublevels: `Earth_Surface`, `Atmosphere`, `Space_Exterior` and load/unload based on camera distance.
