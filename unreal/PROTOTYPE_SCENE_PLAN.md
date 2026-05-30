# Prototype Scene Plan — Flyby Cinematic

Objetivo: planejamento detalhado do primeiro protótipo jogável/cinematográfico.

1) Beats principais
- Shot 1 — Close Ledge: câmera próxima ao solo, nuvens volumétricas, detalhe de oceano/terreno.
- Shot 2 — Ascent: câmera sobe, atravessa nuvens, camada de scattering visível.
- Shot 3 — Atmosphere Exit: transição para space exterior com flare e partículas.
- Shot 4 — Deep Space Approach: espaçonave entra, luz de estrelas e nebulosa de fundo.

2) Elementos de cena
- Terra: materiais base, volumetric clouds (Niagara ou volume), night lights.
- Atmosfera: scattering shader, blue-to-black gradient, glow at limb.
- Deep Space: layered nebula sphere, procedural starfield (multi-scale).
- Spaceship: placeholder blueprint para posicionamento e animação.

3) Cinematic stars & lighting
- Starfield multi-layer com impostors para performance.
- HDRI base para ambiente combinado com directional sun (Lumen).

4) Camera moves
- Use CineCameraActor e Sequencer. Keyframes por beat, focal lengths: 35mm→85mm for close-to-far.
- Add slight camera shake and motion blur for realism.
