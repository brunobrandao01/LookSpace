# Cinematic Camera Workflow

Objetivo: definir práticas e presets para captura cinematográfica dentro do Unreal.

- Ferramentas:
  - Sequencer para cortes e editorial.
  - CineCameraActor com presets de lente (24mm, 50mm, 85mm) e formatos anamórficos.
  - Movie Render Queue para saída final em EXR/DPX com AOVs.

- Workflow:
  1. Blockshot em baixa-resolução para timing.
 2. Parametrizar lentes e DOF por beat.
 3. Configurar render passes (beauty, depth, motion vectors, emissive).
