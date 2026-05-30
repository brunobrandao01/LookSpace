# Unreal Engine 5 Setup

This document defines the LookSpace Unreal Engine 5 workspace, integration strategy, and development requirements.

## Environment Requirements

- Windows 10/11 64-bit
- GPU with DirectX 12 support and 8GB+ VRAM
- 32GB+ system RAM recommended for cinematic UE5 workloads
- SSD storage for Unreal Engine and project assets
- Latest Epic Games Launcher and Unreal Engine 5.x installed

## Unreal Workspace Structure

- `client/` — UE5 runtime and project integration
- `unreal/` — Unreal-specific workspace guidelines and project scaffolding
- `assets/` — visual and cinematic asset sources
- `rendering/` — rendering pipeline architecture and shader organization
- `shaders/` — shared shader and material definitions
- `cinematic/` — cinematic shot and camera system blueprints

## UE5 Project Preparation

1. Create the Unreal project within `client/` using the `LookSpace` project name.
2. Add project folders for `Cinematics`, `Worlds`, `Ships`, `Materials`, and `Blueprints`.
3. Keep engine settings consistent with production quality and performance profiling.
4. Add source control integration through Git LFS for large assets.

## VS Code Integration

- Use VS Code for script, shader, and JSON editing.
- Recommended extensions: C/C++ tools, CMake Tools, PowerShell, YAML, and Unreal Engine helper extensions.
- Configure `.vscode/settings.json` for file exclusion and workspace performance.

## GitHub Integration

- Use GitHub as authoritative source control.
- Store UE project config and source files in Git; ignore generated build artifacts.
- Use `scripts/auto-sync.ps1` for safe staging, commit, and push operations.

## Studio Guidelines

- Keep Blueprints and C++ code organized by feature and system.
- Use production-level naming conventions for levels, assets, and materials.
- Validate project structure against `docs/UNREAL_SETUP.md` during reviews.
