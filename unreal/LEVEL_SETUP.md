# Level Setup — SCENE_001 Blockout

1) Criar Level Template
- No Editor, criar `Level` vazio e salvar em `Content/Levels/SCENE_001`.

2) Sublevels e streaming
- Crie sublevels: `Earth_Surface`, `Atmosphere_Transition`, `Space_Exterior`.
- Configure `World Composition` / `Level Streaming Volumes` para streaming baseado em distância.

3) Importar Blockout assets
- Posicionar `earth` como escala base (set scale to planet radius proxy).
- Posicionar `camera_marker` objetos nos pontos de corte definidos em `cinematic/SCENE_001_PLAN.md`.

4) Lighting
- Configure `Directional Light` (Movable), `Skylight` (Capture), e `ExponentialHeightFog` com volumetric fog true.

5) Sequencer
- Crie um `Level Sequence` em `Content/Cinematics/SCENE_001` e adicione the CineCameraActors placed from camera markers. Animate via keyframes.
