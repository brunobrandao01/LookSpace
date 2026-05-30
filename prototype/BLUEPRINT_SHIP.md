# Blueprint Ship — Guia de implementação rápida

Este documento descreve os passos para criar um `Pawn` de espaçonave simples usando Blueprints no Unreal.

1) Criar Blueprint
- Crie um `Blueprint Class` baseado em `Pawn` chamado `BP_ShipPawn`.

2) Componentes
- Adicione `StaticMeshComponent` chamado `Hull` e um `SpringArm` + `Camera` para visão terceira pessoa ou uma `CineCamera` para modo cinematográfico.

3) Inputs (Project Settings → Input)
- Axis: `Thrust` (W/S), `Pitch` (Mouse Y), `Yaw` (Mouse X), `Roll` (Q/E)

4) Movement (Blueprint nodes)
- Use `AddForce` ou `AddActorLocalOffset` para translação com `Thrust`.
- Para rotação, use `AddActorLocalRotation` com `MakeRotator(Pitch, Yaw, Roll)` ajustado por `DeltaTime` e um `RotationSpeed` variável.

5) Damping & Clamping
- Aplique `FInterpTo` em velocidade para suavizar acelerações e `Clamp` para limitar a velocidade máxima.

6) Camera Switch
- Expor uma função `ToggleCameraMode` para alternar entre `CineCamera` e `PlayerCameraManager`/attached camera.

7) Pro tips
- Use `Launch` effects via Niagara para thruster em emissive.
- Expor variáveis `MaxSpeed`, `Acceleration`, `PitchSpeed` para tuning rápido.
