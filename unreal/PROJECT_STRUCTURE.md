# Projeto UE5 — Estrutura e Naming

Objetivo: definir a estrutura do projeto Unreal para o protótipo cinematográfico LookSpace.

1) Nome do projeto
- Recomendo: `LookSpace_Proto` para o projeto UE5 principal (local em `unreal/LookSpaceProject`).

2) Módulos UE5 recomendados
- Core: `LookSpaceCore` (game framework, utilitários)
- Gameplay: `LookSpaceGameplay` (piloto, nave, controles)
- Visual: `LookSpaceVisuals` (shaders, materiais, efeitos)
- Cinematic: `LookSpaceCine` (sequencer utilities, camera rigs)
- EditorHelpers (opcional, ferramentas de pipeline)

3) Organização de pastas no repositório
- `unreal/LookSpaceProject/` — `.uproject` e configuração do projeto
- `unreal/LookSpaceProject/Content/` — assets (subpastas abaixo)
  - `Cinematic/` — Níveis de sequência, cuts, shots
  - `Environments/Earth/` — mapas, materiais, clouds
  - `Environments/DeepSpace/` — skyboxes, nebulae, impostors
  - `Spaceships/` — modelos, materials, blueprints
  - `FX/` — particles, Niagara systems
  - `Cameras/` — CineCamera presets, rigs
  - `Materials/` — atmosphere, ocean, surface

4) Workflow cinematográfico e de render
- Sequencer como fonte-verdade para cortes; use sub-sequences por shot.
- Movie Render Queue configurado para saída EXR com AOVs (beauty, depth, motion).
- Usar Level Streaming para separar `earth_surface`, `atmosphere_transition`, `space_exterior`.

5) Escalabilidade e arquitetura
- Modularize content packs por ambiente para streaming e LOD.
- Separar conteúdo de alta resolução (tracked no LFS) vs. referência/low-res no Git.
