# Cinematic Lighting

LookSpace cinematic lighting creates dramatic visuals for deep space, planetary scenes, and interior ship sequences.

## Goals

- Deliver filmic lighting across all environments.
- Use lighting to support narrative pacing and emotional tone.
- Combine realistic illumination with cinematic artistry.

## Architecture

- `lighting/` captures lighting system best practices and scene templates.
- `client/` executes lighting setups inside UE5 scenes.
- `rendering/` supports post-process and exposure workflows.

## Key Systems

- Directional and fill lighting for planetary illumination.
- Volumetric light shafts and god rays for atmosphere and cockpit scenes.
- Light linking and cinematic layer control for story beats.
- HDR tone-mapping and color grading for cinematic consistency.

## Production Workflow

- Use previsualization to validate lighting mood and transitions.
- Document lighting setups in `visual-docs/`.
- Iterate on lighting in UE5 with performance profiling.
