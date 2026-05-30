# Unreal Editor Setup Instructions

How to open the project and prepare the Editor for development.

1) Generate project files (Visual Studio)
- From repo root run:

```powershell
tools\generate_ue_project.ps1 -UProjectPath "unreal\LookSpaceProject.uproject" -InitGitLfs
```

- This searches for `GenerateProjectFiles.bat` and runs it; if you have a custom Engine installation add `-UEInstallPaths`.

2) Open solution
- Open the generated `.sln` in Visual Studio (Build -> Build Solution).

3) Launch Editor
- Double-click `unreal\LookSpaceProject.uproject` to open in Editor.

4) Recommended Plugins
- Niagara, Movie Render Queue, Virtual Texturing, Nanite, Lumen

5) Recommended Project Settings
- In `Project Settings -> Rendering` enable Lumen Global Illumination, Nanite, Virtual Texturing, and Volumetric Fog.
- Configure Default RHI to DirectX12 for Lumen compatibility.

6) Import assets
- Run `tools\prepare_asset_import.ps1` then import via Content Browser.
