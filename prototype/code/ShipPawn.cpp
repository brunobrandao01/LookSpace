// Simple example Pawn for LookSpace prototype
#include "ShipPawn.h"
#include "GameFramework/SpringArmComponent.h"
#include "Camera/CameraComponent.h"
#include "Components/StaticMeshComponent.h"

AShipPawn::AShipPawn()
{
  PrimaryActorTick.bCanEverTick = true;

  Hull = CreateDefaultSubobject<UStaticMeshComponent>(TEXT("Hull"));
  RootComponent = Hull;

  Acceleration = 2000.f;
  MaxSpeed = 4000.f;
}

void AShipPawn::BeginPlay()
{
  Super::BeginPlay();
}

void AShipPawn::Tick(float DeltaTime)
{
  Super::Tick(DeltaTime);
  if (!Velocity.IsNearlyZero()) {
    FVector NewLoc = GetActorLocation() + Velocity * DeltaTime;
    SetActorLocation(NewLoc);
    // simple drag
    Velocity = FMath::VInterpTo(Velocity, FVector::ZeroVector, DeltaTime, 1.0f);
  }
}

void AShipPawn::SetupPlayerInputComponent(UInputComponent* PlayerInputComponent)
{
  Super::SetupPlayerInputComponent(PlayerInputComponent);
  PlayerInputComponent->BindAxis(TEXT("Thrust"), this, &AShipPawn::Thrust);
  PlayerInputComponent->BindAxis(TEXT("Pitch"), this, &AShipPawn::Pitch);
  PlayerInputComponent->BindAxis(TEXT("Yaw"), this, &AShipPawn::Yaw);
  PlayerInputComponent->BindAxis(TEXT("Roll"), this, &AShipPawn::Roll);
}

void AShipPawn::Thrust(float Value)
{
  if (FMath::Abs(Value) > KINDA_SMALL_NUMBER) {
    Velocity += GetActorForwardVector() * Value * Acceleration * GetWorld()->GetDeltaSeconds();
    Velocity = Velocity.GetClampedToMaxSize(MaxSpeed);
  }
}

void AShipPawn::Pitch(float Value) { AddActorLocalRotation(FRotator(Value, 0.f, 0.f)); }
void AShipPawn::Yaw(float Value)   { AddActorLocalRotation(FRotator(0.f, Value, 0.f)); }
void AShipPawn::Roll(float Value)  { AddActorLocalRotation(FRotator(0.f, 0.f, Value)); }
