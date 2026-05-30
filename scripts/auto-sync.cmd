@echo off
REM LookSpace auto-sync wrapper for Windows cmd
set SCRIPT=%~dp0auto-sync.ps1
powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%SCRIPT%" %*
