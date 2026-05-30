// Simple example Pawn for LookSpace prototype
#pragma once

#include "CoreMinimal.h"
#include "GameFramework/Pawn.h"
#include "ShipPawn.generated.h"

UCLASS()
class AShipPawn : public APawn
{
  GENERATED_BODY()

public:
  AShipPawn();
  virtual void Tick(float DeltaTime) override;
  virtual void SetupPlayerInputComponent(class UInputComponent* PlayerInputComponent) override;

protected:
  virtual void BeginPlay() override;

private:
  UPROPERTY(VisibleAnywhere)
  UStaticMeshComponent* Hull;

  FVector Velocity;
  float Acceleration;
  float MaxSpeed;

  void Thrust(float Value);
  void Pitch(float Value);
  void Yaw(float Value);
  void Roll(float Value);
};
