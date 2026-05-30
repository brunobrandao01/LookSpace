# Cinematic Prototype Workflow

Objetivo: preparar a pipeline para criar cortes cinematográficos com Sequencer e Movie Render Queue.

1) Cameras
- Use `CineCameraActor` para cada shot; crie presets de lente em `Content/Cameras/Presets`.

2) Sequencer organização
- Cada shot deve ser um `SubSequence`; agrupe todos em `SCENE_001_MasterSequence`.

3) Rendering
- Movie Render Queue: Output format EXR, use ACES CG, enable anti-aliasing e AOVs (beauty, depth, motion vectors, emissive).

4) Iteration
- Work with low-res proxies for timing; switch to high-res assets for final renders using level variants.
