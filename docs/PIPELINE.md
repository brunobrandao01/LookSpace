# Development Pipeline

LookSpace is organized as a professional AAA production pipeline from concept through release.

## Pipeline Stages

### 1. Planning
- Define story, mission arcs, and universe scope.
- Align architecture, rendering, and simulation goals.
- Document feature scope in `docs/ROADMAP.md` and `docs/PROJECT_OVERVIEW.md`.

### 2. Prototyping
- Iterate on key systems in `client/`, `universe/`, and `ai/`.
- Use early visuals and simulation prototypes to validate look and feel.
- Track experimental assets in `assets/` while keeping final assets separated.

### 3. Production
- Build production-ready game systems and backend pipelines.
- Use `server/` for Supabase integration and platform services.
- Use `website/` for publishing previews and launch materials.

### 4. QA and Validation
- Validate structure and documentation through GitHub workflows.
- Leverage automated sync to keep source control current.
- Perform technical reviews for rendering, multiplayer, and AI subsystems.

### 5. Release
- Finalize the Unreal Engine project with polished cinematics.
- Deploy backend and website changes to Supabase and Vercel.
- Use GitHub as the single source of truth for the studio pipeline.

## Production Practices

- Keep branch scope narrow and track changes with professional commit history.
- Maintain documentation in `docs/` as the authoritative design source.
- Use clear folder boundaries and module-level READMEs.
- Treat assets and build artifacts as non-versioned content where appropriate.
