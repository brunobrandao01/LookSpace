# Rendering Engine

LookSpace targets hyper-realistic cinematic rendering through Unreal Engine 5 and custom rendering systems.

## Goals

- Deliver photoreal space visuals and cinematic camera motion.
- Use next-generation rendering pipelines for volumetrics, atmospheric scattering, and starfield detail.
- Support real-time and offline production-quality rendering.

## Core Systems

- Lighting and atmosphere: realistic planet scattering, horizon glow, and deep-space contrast.
- Shader subsystems: procedural star fields, nebula systems, and lens effects.
- Post-processing: film grain, chromatic adaptation, and cinematic color grading.
- Runtime culling and LOD: optimize large-scale planetary and deep-space rendering.

## Integration

- `rendering/` supports shared rendering technology and shader assets.
- `client/` implements UE5 scenes and camera pipelines.
- `assets/` provides production textures, materials, and visual effect templates.
