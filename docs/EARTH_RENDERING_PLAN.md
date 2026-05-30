# Earth Rendering — Arquitetura Realista

Objetivo: criar um pipeline para renderizar a Terra realisticamente em close-up e na transição para órbita.

- Componentes chave:
  - Atmosphere scattering shader (multi-scatter) com camada de aerosóis.
  - Cloud system: 3D volumetric clouds com advecção dependente de vento.
  - Ocean: screen-space reflections e gerador de ondas para close-ups.
  - Night lights: emissive city maps com blending temporal e LOD por distância.

- Art pipeline:
  - Gerar base albedo/procedural maps → bake AO → materiais layerizados (terrain, ocean, clouds).
  - Usar streaming e virtual texturing para mapas de alta resolução.
