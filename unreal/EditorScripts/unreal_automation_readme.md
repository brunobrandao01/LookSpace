# Unreal Editor Automation Readme

## Purpose
This workflow automates the import and setup of prototype assets for LookSpace.

## Scripts
- `import_blockout_assets.py`: batch imports low-poly OBJ assets into `/Game/Blockout`.
- `organize_and_configure_assets.py`: organizes imported assets into their final folders and configures collision settings.
- `setup_cinematic_environment.py`: creates a cinematic folder structure and placeholder environment.
- `documentation_workflow.py`: prints workflow notes in the Unreal log.

## How to Run
1. Open Unreal Engine and load the LookSpace project.
2. In the Python Console, run:
   ```python
   exec(open(r'C:/path/to/LookSpace/unreal/EditorScripts/import_blockout_assets.py').read())
   ```
3. Then run:
   ```python
   exec(open(r'C:/path/to/LookSpace/unreal/EditorScripts/organize_and_configure_assets.py').read())
   ```
4. Finally run:
   ```python
   exec(open(r'C:/path/to/LookSpace/unreal/EditorScripts/setup_cinematic_environment.py').read())
   ```

## Recommended Import Settings
- Import normals and tangents.
- Generate lightmap UVs for environment assets.
- Disable material import if using placeholder materials.

## Notes
- The workflow is designed for quick prototyping and blockout.
- For final assets, refine collision and materials in the Editor.
