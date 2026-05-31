#!/usr/bin/env python3
"""
documentation_workflow.py

Utility script to generate documentation notes for Unreal Editor automation workflows.
"""

import unreal

WORKFLOW_DOC = r"""
LookSpace Unreal Editor Automation Workflow

Steps:
1) Open Unreal Editor and enable Python scripting.
2) Run `import_blockout_assets.py` to batch-import the blockout OBJs.
3) Run `organize_and_configure_assets.py` to move assets into professional folders and configure collision.
4) Run `setup_cinematic_environment.py` to create the cinematic folder structure and placeholders.
5) Open `unreal/FINAL_STARTUP_GUIDE.md` for manual follow-up on level and sequencer setup.

Recommended settings:
- Enable Lumen and Nanite in Project Settings.
- Use DirectX12 RHI.
- Use Movie Render Queue for cinematic renders.
"""

unreal.log(WORKFLOW_DOC)
