param(
  [string]$Remote = 'origin',
  [string]$Branch = 'main',
  [string]$Message = '',
  [switch]$Force,
  [switch]$DryRun
)

function Write-Info([string]$text) {
  Write-Host "[LookSpace AutoSync] $text"
}

function Abort([string]$text) {
  Write-Host "[LookSpace AutoSync] ERROR: $text" -ForegroundColor Red
  exit 1
}

function Invoke-Git([string[]]$gitArgs) {
  $result = & $gitExe @gitArgs 2>&1
  if ($LASTEXITCODE -ne 0) {
    Abort("Git command failed: $gitExe $($gitArgs -join ' ')`n$result")
  }
  return $result
}

$scriptRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$repoRoot = Split-Path -Parent $scriptRoot
Set-Location $repoRoot

if (-not (Test-Path '.git')) {
  Abort 'This script must be run from the repository root where the .git folder exists.'
}

$gitExe = $null
if (Get-Command git -ErrorAction SilentlyContinue) {
  $gitExe = 'git'
}
else {
  $commonGit = @(
    'C:\Program Files\Git\cmd\git.exe',
    'C:\Program Files (x86)\Git\cmd\git.exe',
    'C:\Program Files\Git\bin\git.exe',
    'C:\Program Files (x86)\Git\bin\git.exe'
  )
  foreach ($path in $commonGit) {
    if (Test-Path $path) {
      $gitExe = $path
      break
    }
  }
}

if (-not $gitExe) {
  Abort 'Git is not installed or not available in PATH. Install Git and retry.'
}

$currentBranch = Invoke-Git('rev-parse', '--abbrev-ref', 'HEAD').Trim()
if ($currentBranch -eq 'HEAD') {
  Abort 'Repository is in detached HEAD state. Checkout a branch before syncing.'
}

Write-Info "Current branch: $currentBranch"

if (-not $Message) {
  $timestamp = Get-Date -Format 'yyyy-MM-dd HH:mm:ss'
  $Message = "Auto-sync: $timestamp"
}

if ($DryRun) {
  Write-Info 'Dry run mode enabled. The script will not commit or push.'
}

Write-Info "Fetching remote branch $Remote/$Branch..."
& $gitExe fetch $Remote $Branch --quiet
if ($LASTEXITCODE -ne 0) {
  Write-Info "Remote fetch failed or branch $Remote/$Branch does not exist yet. Continuing with local sync."
}

$remoteBranchRef = "$Remote/$Branch"
$remoteBranchExists = $false
& $gitExe show-ref --verify --quiet "refs/remotes/$remoteBranchRef"
if ($LASTEXITCODE -eq 0) {
  $remoteBranchExists = $true
}

if ($remoteBranchExists) {
  $counts = & $gitExe rev-list --left-right --count "$remoteBranchRef...HEAD"
  if ($LASTEXITCODE -eq 0) {
    $parts = $counts -split "\t"
    $behind = [int]$parts[0]
    $ahead = [int]$parts[1]
    Write-Info ("Branch status relative to {0}: ahead={1} behind={2}" -f $remoteBranchRef, $ahead, $behind)
    if ($behind -gt 0 -and -not $Force) {
      Abort ("Local branch is behind remote by $behind commit(s). Pull remote changes before syncing or use -Force with caution.")
    }
  }
}

$status = & $gitExe status --porcelain --untracked-files=all
if (-not $status) {
  Write-Info 'No created or modified files detected. Nothing to sync.'
  exit 0
}

Write-Info 'Staging created and modified files...'
if (-not $DryRun) {
  Invoke-Git('add', '.')
}

Write-Info "Preparing commit message: $Message"
if (-not $DryRun) {
  Invoke-Git('commit', '-m', "$Message")
}

$upstreamSet = $false
& $gitExe rev-parse --abbrev-ref --symbolic-full-name '@{u}' > $null 2>&1
if ($LASTEXITCODE -eq 0) {
  $upstreamSet = $true
}

$pushArgs = @($Remote, $currentBranch)
if (-not $upstreamSet) {
  $pushArgs = @('--set-upstream', $Remote, $currentBranch)
}
if ($Force) {
  $pushArgs += '--force-with-lease'
}

Write-Info "Pushing changes to $Remote/$currentBranch..."
if (-not $DryRun) {
  Invoke-Git(@('push') + $pushArgs)
  Write-Info 'Push completed successfully.'
}

if ($DryRun) {
  Write-Info 'Dry run finished. No commit or push was executed.'
}
