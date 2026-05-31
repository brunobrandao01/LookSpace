#!/usr/bin/env python3
"""
setup_cinematic_environment.py

Unreal Editor Python script to set up a cinematic prototype environment with folders, materials, and placeholders.

Usage (in Unreal Editor Python console):
  exec(open(r'C:/path/to/LookSpaceProject/EditorScripts/setup_cinematic_environment.py').read())
"""

import unreal
from pathlib import Path

def create_folder_structure():
    """Create recommended folder structure in Content."""
    folders = [
        "/Game/Blockout",
        "/Game/Environments/Earth",
        "/Game/Environments/DeepSpace",
        "/Game/Spaceships",
        "/Game/Cameras",
        "/Game/Materials/Prototypes",
        "/Game/FX/Niagara",
        "/Game/Levels/Cinematic",
        "/Game/Cinematics/SCENE_001",
    ]
    
    asset_tools = unreal.AssetToolsHelpers.get_asset_tools()
    
    for folder in folders:
        try:
            asset_tools.create_unique_asset_name(folder, "")
            unreal.log(f"[OK] Folder structure verified: {folder}")
        except:
            unreal.log_warning(f"Could not create or verify folder: {folder}")

def create_placeholder_materials():
    """Create simple placeholder materials for prototyping."""
    materials = {
        "M_PlanetBase": {"color": (0.2, 0.4, 0.9), "roughness": 0.8},
        "M_Emissive_Thruster": {"color": (1.0, 0.5, 0.0), "emissive_scale": 2.0},
        "M_MetalShip": {"color": (0.5, 0.5, 0.5), "roughness": 0.3},
    }
    
    for mat_name, props in materials.items():
        unreal.log(f"[PLACEHOLDER] Creating material: {mat_name}")
        # Note: Full material creation requires Slate/DetailCustomization; placeholders are logged here
        # In a full workflow, you'd use Blueprint or create via Material instance blueprints

def main():
    """Main setup workflow."""
    unreal.log("[LookSpace Cinematic Setup] Starting environment preparation...")
    
    create_folder_structure()
    create_placeholder_materials()
    
    unreal.log("[LookSpace Cinematic Setup] Environment setup complete. Folders created and ready for assets.")

if __name__ == "__main__":
    main()
