#!/usr/bin/env python3
"""
import_blockout_assets.py

Unreal Editor Python script to batch import OBJ blockout assets from unreal/Content/Import/Blockout.

Usage (in Unreal Editor Python console):
  exec(open(r'C:/path/to/LookSpaceProject/EditorScripts/import_blockout_assets.py').read())

Or use in Blutility or command line with:
  UnrealEngine.exe -run=pythonscript -script="path/import_blockout_assets.py"
"""

import unreal
import os
import json
from pathlib import Path

# Configuration
IMPORT_SOURCE_PATH = r"C:\\Users\\mrdig\\Desktop\\LookSpace\\unreal\\Content\\Import\\Blockout"
CONTENT_PATH = "/Game/Blockout"
ASSET_PRESETS = {
    "earth.obj": {"scale": 100.0, "collision": "complex", "generate_lightmap_uvs": True},
    "moon.obj": {"scale": 50.0, "collision": "complex", "generate_lightmap_uvs": True},
    "ship.obj": {"scale": 20.0, "collision": "complex", "generate_lightmap_uvs": False},
    "station.obj": {"scale": 30.0, "collision": "complex", "generate_lightmap_uvs": True},
    "camera_marker.obj": {"scale": 10.0, "collision": "none", "generate_lightmap_uvs": False},
}

def import_obj(filename, source_path, content_path, preset):
    """Import a single OBJ file with preset configuration."""
    source_file = os.path.join(source_path, filename)
    if not os.path.exists(source_file):
        unreal.log_warning(f"Source file not found: {source_file}")
        return None
    
    task = unreal.AssetImportTask()
    task.set_editor_property("filename", source_file)
    task.set_editor_property("destination_path", content_path)
    task.set_editor_property("destination_name", filename.replace(".obj", ""))
    task.set_editor_property("replace_existing", True)
    task.set_editor_property("automated", True)
    
    # Configure import settings
    task.set_editor_property("save", True)
    
    importer = unreal.FbxImportUI()
    importer.set_editor_property("import_mesh", True)
    importer.set_editor_property("import_normals", True)
    importer.set_editor_property("import_normals_and_tangents", True)
    importer.set_editor_property("import_materials", False)
    importer.set_editor_property("create_physics_asset", False)
    
    mesh_settings = importer.static_mesh_import_data
    mesh_settings.set_editor_property("import_uniform_scale", preset["scale"])
    mesh_settings.set_editor_property("create_physics_asset", False)
    mesh_settings.set_editor_property("generate_lightmap_u_vs", preset["generate_lightmap_uvs"])
    
    task.set_editor_property("options", importer)
    
    unreal.AssetToolsHelpers.get_asset_tools().import_asset_tasks([task])
    
    if task.imported_object_paths:
        imported_asset = task.imported_object_paths[0]
        unreal.log(f"[OK] Imported {filename} -> {imported_asset}")
        return imported_asset
    else:
        unreal.log_warning(f"[FAIL] Failed to import {filename}")
        return None

def main():
    """Main import workflow."""
    unreal.log("[LookSpace Blockout Import] Starting batch import of blockout assets...")
    
    if not os.path.exists(IMPORT_SOURCE_PATH):
        unreal.log_error(f"Source path not found: {IMPORT_SOURCE_PATH}")
        return
    
    imported_assets = []
    for filename, preset in ASSET_PRESETS.items():
        asset_path = import_obj(filename, IMPORT_SOURCE_PATH, CONTENT_PATH, preset)
        if asset_path:
            imported_assets.append(asset_path)
    
    unreal.log(f"[LookSpace Blockout Import] Completed. Imported {len(imported_assets)} assets.")
    unreal.log(f"Assets: {imported_assets}")
    
    # Save all
    editor_util = unreal.get_default_object(unreal.EditorAssetLibrary)
    for asset in imported_assets:
        editor_util.save_asset(asset)

if __name__ == "__main__":
    main()
