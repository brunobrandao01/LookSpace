<#
  generate_ue_project.ps1
  Helper to generate Unreal project files and prepare a GitHub-safe UE5 project skeleton.

  Usage:
    .\generate_ue_project.ps1 -UProjectPath "unreal/LookSpaceProject.uproject" -UEInstallPaths @(
      'C:\Program Files\Epic Games\UE_5.1',
      'C:\Program Files\Epic Games\UE_5.0'
    )

  What it does:
  - Verifies `.uproject` exists
  - Searches common UE installation paths for `GenerateProjectFiles.bat`
  - Runs GenerateProjectFiles to create Visual Studio solution files
  - Optionally initializes `git lfs` tracking for common Unreal asset types
  - Creates `.uprojectdirs` and recommended `.gitignore` additions
  - Emits instructions to open the solution in Visual Studio or launch the Editor
#>

param(
  [string]$UProjectPath = "unreal/LookSpaceProject.uproject",
  [string[]]$UEInstallPaths = @(
    "C:\\Program Files\\Epic Games\\UE_5.1",
    "C:\\Program Files\\Epic Games\\UE_5.0",
    "C:\\Program Files (x86)\\Epic Games\\UE_5.1"
  ),
  [switch]$InitGitLfs
)

function Write-Info($t) { Write-Host "[UE Helper] $t" }
function Abort($t) { Write-Host "[UE Helper] ERROR: $t" -ForegroundColor Red; exit 1 }

Set-Location (Split-Path -Parent $MyInvocation.MyCommand.Path) | Out-Null

$repoRoot = Resolve-Path ".." | Select-Object -ExpandProperty Path
Set-Location $repoRoot

if (-not (Test-Path $UProjectPath)) {
  Abort "UProject not found at $UProjectPath. Ensure file exists."
}

Write-Info "Looking for GenerateProjectFiles.bat in common UE install locations..."
$generator = $null
foreach ($base in $UEInstallPaths) {
  $candidate = Join-Path $base 'Engine\Binaries\DotNET\UnrealBuildTool.exe'
  $batch = Join-Path $base 'Engine\Build\BatchFiles\GenerateProjectFiles.bat'
  if (Test-Path $batch) { $generator = $batch; break }
  if (Test-Path $candidate) { $generator = $candidate; break }
}

if (-not $generator) {
  Write-Info "GenerateProjectFiles not found automatically. If you have Unreal installed in a custom path, pass it via -UEInstallPaths or run GenerateProjectFiles manually from the Engine."
} else {
  Write-Info "Found generator: $generator"
  if ($generator -like '*.bat') {
    Write-Info "Running batch generator: $generator"
    $arg = '/c "' + $generator + '" "' + $UProjectPath + '"'
    $proc = Start-Process -FilePath 'cmd.exe' -ArgumentList $arg -NoNewWindow -PassThru -Wait
    if ($proc.ExitCode -ne 0) { Abort ("GenerateProjectFiles failed with exit code $($proc.ExitCode)") }
  } else {
    Write-Info "Attempting to run UnrealBuildTool for project generation"
    & $generator -projectfiles -project $UProjectPath -game
    if ($LASTEXITCODE -ne 0) { Abort "UnrealBuildTool failed with exit code $LASTEXITCODE" }
  }
}

# Create .uprojectdirs to help the Editor find the project
$uprojectdirs = ".uprojectdirs"
if (-not (Test-Path $uprojectdirs)) {
  ((Get-Location).Path + "\" + $UProjectPath) | Out-File -FilePath $uprojectdirs -Encoding UTF8
  Write-Info "Created $uprojectdirs"
}

if ($InitGitLfs) {
  Write-Info "Initializing Git LFS and tracking common UE asset extensions..."
  if (Get-Command git-lfs -ErrorAction SilentlyContinue -CommandType Application) {
    git lfs install
    git lfs track "*.uasset" "*.umap" "*.exr" "*.png" "*.tga" | Out-Null
    git add .gitattributes | Out-Null
    Write-Info "Git LFS configured. Remember to commit .gitattributes."
  } else {
    Write-Info "git-lfs not found in PATH. Install Git LFS to track large assets."
  }
}

# Add recommended .gitignore entries for Unreal
$gitignore = ".gitignore"
$entries = @(
  "# Unreal Engine exclusions",
  "Binaries/",
  "DerivedDataCache/",
  "Intermediate/",
  "Saved/",
  "*.sln",
  "*.opensdf",
  "*.sdf",
  "*.suo",
  "*.VC.db",
  "*.VC.VC.opendb"
)
foreach ($e in $entries) {
  if (-not (Select-String -Path $gitignore -Pattern [regex]::Escape($e) -Quiet -ErrorAction SilentlyContinue)) {
    Add-Content -Path $gitignore -Value $e
  }
}
Write-Info "Updated $gitignore with Unreal recommendations."

Write-Info "Generation complete. Open the generated .sln in Visual Studio or launch the Editor by double-clicking the .uproject file."
