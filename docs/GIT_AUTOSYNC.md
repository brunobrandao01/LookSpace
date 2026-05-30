# LookSpace Git Auto Sync

This document explains the safe synchronization workflow for LookSpace.

## Purpose

The auto-sync setup is designed to:

- automatically track created or modified files
- stage all changes with `git add .`
- create timestamped commit messages
- push completed work to GitHub
- keep behavior stable and safe on Windows
- provide VS Code integration through tasks

## Local automation script

### Primary script

- `scripts/auto-sync.ps1`
- Windows PowerShell script that stages, commits, and pushes changes

### Wrapper

- `scripts/auto-sync.cmd`
- Windows-compatible entrypoint for cmd.exe and VS Code terminals

## How to run

From the repository root, use either:

```powershell
.
scripts\auto-sync.ps1
```

or:

```cmd
.\scripts\auto-sync.cmd
```

### Custom commit message

```powershell
.\scripts\auto-sync.ps1 -Message "Feature: Add cinematic starfield generator"
```

### Preview without pushing

```powershell
.\scripts\auto-sync.ps1 -DryRun
```

### Force push safety

```powershell
.\scripts\auto-sync.ps1 -Force
```

Use `-Force` only when you understand remote branch state; the default mode prevents pushing when the local branch is behind remote.

## VS Code integration

A VS Code task is available at `.vscode/tasks.json`:

- `LookSpace Auto Sync`

Run it from the Command Palette (`Tasks: Run Task`) or bind a keyboard shortcut if desired.

## GitHub workflow

A GitHub Actions workflow exists at `.github/workflows/auto-sync-validation.yml`.

It runs on pushes and pull requests to `main` and validates:

- required folder structure exists
- key documentation files are present

## Recommended workflow for AI-driven development

1. Request a feature or update from the AI agent.
2. Review the generated files in VS Code.
3. Run the `LookSpace Auto Sync` task or execute the script manually.
4. Confirm the commit message and push result.

## Safety notes

- The script never pushes if the local branch is behind remote unless `-Force` is provided.
- The script uses `git add .` to track all new and modified files.
- The GitHub workflow validates structure after each push.
