# Spaceship Systems

LookSpace models advanced spacecraft systems for immersive piloting and mission progression.

## System Domains

- Propulsion: engine thrust, fuel management, and burn control.
- Navigation: orbital transfer planning, flight guidance, and HUD telemetry.
- Life support: environmental controls, power systems, and crew state.
- Mission systems: docking, target acquisition, and mission mission-critical state.

## Architecture

- `systems/` contains reusable ship systems and shared engineering abstractions.
- `client/` drives in-cockpit UI, control feedback, and visual ship behavior.
- `universe/` provides orbital data and mission context for navigation.
- `server/` records ship telemetry and persistent mission logs.
