# LookSpace Auto Sync

This folder contains the local automation script for staging, committing, and pushing changes safely to GitHub.

## Usage

- Run the script from the repository root:

```powershell
.\scripts\auto-sync.ps1
```

- Use the Windows batch wrapper from the repository root:

```cmd
.\scripts\auto-sync.cmd
```

## Optional arguments

- `-Message "Feature: Add new asset pipeline"` — custom commit message
- `-DryRun` — preview actions without committing or pushing
- `-Force` — bypass a remote-ahead safety check (use with caution)

## Behavior

- automatically stages created and modified files with `git add .`
- commits using a timestamp message when no message is provided
- pushes to the configured remote branch
- prevents push if the local branch is behind remote unless `-Force` is passed
