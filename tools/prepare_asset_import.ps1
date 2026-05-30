<#
  prepare_asset_import.ps1
  Organiza e copia placeholders do repositório para `unreal/Content/Import/` prontos para importação no Editor.

  Uso:
    .\prepare_asset_import.ps1 -SourceAssets "Assets/Blockout" -TargetImport "unreal/Content/Import/Blockout" -DryRun
#>
param(
  [string]$SourceAssets = "Assets/Blockout",
  [string]$TargetImport = "unreal/Content/Import/Blockout",
  [switch]$DryRun
)

function Write-Info($t) { Write-Host "[Import Helper] $t" }
function Abort($t) { Write-Host "[Import Helper] ERROR: $t" -ForegroundColor Red; exit 1 }

if (-not (Test-Path $SourceAssets)) { Abort "Source assets folder not found: $SourceAssets" }

$fullTarget = Join-Path (Get-Location) $TargetImport
Write-Info "Preparing import folder: $fullTarget"
if ($DryRun) { Write-Info "Dry run: files will not be copied."; exit 0 }

New-Item -ItemType Directory -Force -Path $fullTarget | Out-Null

Get-ChildItem -Path $SourceAssets -File | ForEach-Object {
  Copy-Item -Path $_.FullName -Destination $fullTarget -Force
  Write-Info "Copied $($_.Name) -> $TargetImport"
}

Write-Info "Assets prepared in $TargetImport. Open the Unreal Editor and import from Content Browser -> Add -> Import to... pointing to this folder."
