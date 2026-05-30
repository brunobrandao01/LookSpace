# Universe Engine

The LookSpace universe engine is the core of the procedural cosmic simulation.

## Responsibilities

- Generate star systems, planets, moons, and orbital bodies.
- Model astrophysics, gravity, and environmental conditions.
- Provide deterministic systems for runtime simulation and replication.

## Architecture

- `universe/core/` contains simulation domain logic.
- `universe/data/` stores templates, orbital parameters, and story-driven presets.
- `universe/interfaces/` defines contracts for runtime integration with UE5 and backend services.

## Key Systems

- Celestial body generator
- Procedural orbit and behavior planner
- Ecosystem and environment selectors
- Mission-linked universe event scheduler

## Integration Points

- `client/` consumes universe data for cinematic presentation.
- `server/` persists universe state and mission progress.
- `ai/` generates adaptive universe content and mission context.
