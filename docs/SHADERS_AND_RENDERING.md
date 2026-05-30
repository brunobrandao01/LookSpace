# Shaders & Rendering Systems

Visão geral dos sistemas de shading e renderização para LookSpace.

- Áreas:
  - Atmosfera/Scattering: implementar shaders multi-scatter e ambient occlusion atmosférico.
  - Clouds: 3D textures + raymarching otimizado.
  - Surface: PBR estendido para planet surfaces (terrain blending, triplanar when needed).
  - Post-process: bloom, tonemapping, film grain, chromatic aberration finos para estilo cinematográfico.

- Organização:
  - `shaders/atmosphere/`
  - `shaders/clouds/`
  - `shaders/surface/`
  - `rendering/pipelines/`
