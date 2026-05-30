# Multiplayer Architecture

LookSpace is built with a scalable multiplayer architecture for cooperative exploration and shared universe experiences.

## Objectives

- Support synchronized mission state across connected clients.
- Provide robust session management and matchmaking.
- Keep server-authoritative history of critical events and universe state.

## Architecture

- `multiplayer/` contains shared protocol definitions, session services, and networking abstractions.
- `server/` manages lobby services, realtime data sync, and authoritative event control.
- `client/` consumes multiplayer state for visualization, collaboration, and live mission updates.

## Key Patterns

- Server-authoritative simulation for mission-critical state.
- Realtime sync via Supabase Realtime or dedicated networking layers.
- Session persistence and reconnection support.
- Audit logs for multiplayer activity and event resolution.
