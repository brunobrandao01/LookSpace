# Earth Rendering

Realistic Earth rendering is a cornerstone of LookSpace's cinematic space experience.

## Goals

- Create believable Earth visuals from orbit and atmospheric entry.
- Support layered atmosphere, cloud systems, and surface reflection.
- Preserve scientific accuracy while maintaining cinematic polish.

## Architecture

- `planets/` organizes planet-specific visual systems and data.
- `rendering/` standardizes atmospheric scattering and surface shading.
- `shaders/` contains Earth-specific shader variants for oceans, clouds, and terrain.

## Key Systems

- Atmosphere scattering and twilight modeling
- Dynamic cloud coverage and volumetric clouds
- Ocean reflectance and specular highlights
- Night-side city light and weather-driven surface effects

## Workflow

- Define Earth reference data in `assets/`.
- Prototype atmosphere and cloud systems in UE5.
- Use `visual-docs/` to capture stylistic direction and scientific fidelity.
