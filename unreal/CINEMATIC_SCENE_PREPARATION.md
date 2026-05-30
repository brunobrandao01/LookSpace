# Preparation for Cinematic Scenes

This document contains practical steps to prepare the project for:
- Cinematic Earth scene
- Deep space environment
- Spaceship prototype testing
- Camera prototype movement

1) Earth Cinematic
- Import low-poly `earth.obj` and scale to sensible proxy size (e.g., 10,000 units radius for blockout).
- Add `ExponentialHeightFog` and a volumetric cloud layer; use material instance parameters to tune scattering.
- Add a `Directional Light` with warm color and intensity tuned to cinematic exposure.

2) Deep Space
- Create a SkySphere using layered nebula textures and a procedural starfield material.
- Use emissive nebula planes with soft masks and depth fade.

3) Spaceship Testing
- Import `ship.obj` and create a simple Pawn or Blueprint that uses `BP_ShipPawn` guide.
- Assign simple collision and a placeholder material (unlit emissive for thrusters).

4) Camera Prototypes
- Place `camera_marker.obj` instances at keyframes; create `CineCameraActor` for each and bind to Sequencer.
- Use Camera Rig Crane/ Rail for complex shots.
