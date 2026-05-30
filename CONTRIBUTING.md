# Contributing to LookSpace

Welcome to the LookSpace studio repository. This project is designed to operate with professional studio standards and a collaborative workflow.

## Contribution Principles

- Keep changes modular and scope each commit to a clear feature or fix.
- Use descriptive commit messages with a professional tone.
- Maintain the project architecture and folder conventions.
- Avoid large unreviewable changes; break work down into logical increments.
- Reference relevant documentation in PR descriptions.

## Branching and Workflow

- `main` is the production branch and must remain deployable.
- Create feature branches from `main` using a descriptive name, e.g. `feature/rendering-pipeline`.
- Use GitHub Pull Requests for review and validation.
- Keep PRs focused: one major system or feature area per PR.

## Commit Messages

Use a consistent format like:

```text
[type]: [short summary]

[longer description]
```

Common types:

- `feat:` for new features
- `fix:` for bug fixes
- `docs:` for documentation updates
- `chore:` for maintenance or tooling updates
- `perf:` for performance improvements

## Code and Asset Ownership

- `client/` is owned by Unreal/engine teams.
- `server/` is owned by backend and platform teams.
- `universe/` is owned by simulation and systems teams.
- `ai/` is owned by AI and narrative teams.
- `website/` is owned by web and marketing teams.
- `assets/` stores production-ready art and audio assets.
- `shaders/`, `systems/`, `multiplayer/`, and `rendering/` support cross-domain technology layers.

## Auto Sync Process

LookSpace includes an auto-sync workflow for safe GitHub updates.

- Run `scripts\auto-sync.ps1` after review and completion of changes.
- Review the generated commit message before it is applied.
- Use `-DryRun` when you want to validate the sync without pushing.
- Use `-Force` only when you understand the implications.

## Review and Approval

- Ensure documentation changes are included when the architecture or pipeline evolves.
- Use GitHub workflows to verify repository structure and compliance.
- Update `docs/` files as the system grows.
