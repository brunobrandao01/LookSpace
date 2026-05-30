# Unreal Engine Integration

This document describes how LookSpace integrates Unreal Engine 5 into the production foundation.

## Goals

- Keep Unreal Engine integration clean and scalable.
- Support large project workflows and artist-friendly pipelines.
- Ensure GitHub and UE5 cooperate safely for version control.

## Architecture

- `client/` contains the UE5 project files and runtime assets.
- `unreal/` documents Unreal project conventions and workspace setup.
- `scripts/` includes automation for build and sync operations.
- `.gitignore` excludes artifacts like `Binaries`, `Intermediate`, and `Saved`.

## Integration Points

- Use Git LFS for large binary assets when needed.
- Keep engine config and project definitions under source control.
- Document asset import and directory conventions in `unreal/README.md`.
- Use VS Code for script and pipeline editing, while Unreal Editor handles level and blueprint authoring.

## Workflow

1. Create or open the Unreal project in `client/`.
2. Keep `client/` focused on runtime and shared project files.
3. Reference `rendering/`, `shaders/`, and `cinematic/` from UE content pipelines.
4. Use `docs/UNREAL_SETUP.md` and `docs/UNREAL_INTEGRATION.md` for onboarding and developer guidance.
