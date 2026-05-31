# Unreal Automation Workflow

This folder contains Unreal Editor automation assets and scripts for the LookSpace prototype.

Files:
- `EditorScripts/import_blockout_assets.py` — batch import OBJ assets with import presets.
- `EditorScripts/organize_and_configure_assets.py` — move imported assets into canonical folders and configure collision.
- `EditorScripts/setup_cinematic_environment.py` — create prototype folder structure and environment placeholders.
- `EditorScripts/documentation_workflow.py` — prints recommended automation workflow notes.
- `ImportPresets/blockout_presets.json` — import presets for Earth, Moon, spaceship, station, and camera markers.

Usage:
1. Open Unreal Editor and enable Python scripting.
2. Run each script in order from the Python console.
3. Import the assets via `import_blockout_assets.py`.
4. Organize assets and set up the cinematic environment.
