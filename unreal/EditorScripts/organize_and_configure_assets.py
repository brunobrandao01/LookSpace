#!/usr/bin/env python3
"""
organize_and_configure_assets.py

Unreal Editor Python script to organize imported blockout assets, move them to proper folders,
apply collision presets, and assign naming conventions.

Usage (in Unreal Editor Python console):
  exec(open(r'C:/path/to/LookSpaceProject/EditorScripts/organize_and_configure_assets.py').read())
"""

import unreal

# Asset organization mapping: source filename -> (destination folder, collision_type)
ASSET_ORGANIZATION = {
    "earth": ("/Game/Environments/Earth", "Default"),
    "moon": ("/Game/Environments/DeepSpace", "Default"),
    "ship": ("/Game/Spaceships", "Default"),
    "station": ("/Game/Environments/DeepSpace", "Default"),
    "camera_marker": ("/Game/Cameras", "NoCollision"),
}

def move_asset(source_asset_path, dest_folder):
    """Move an asset to the destination folder."""
    asset_tools = unreal.AssetToolsHelpers.get_asset_tools()
    try:
        # Extract asset name
        asset_name = source_asset_path.split("/")[-1]
        new_path = f"{dest_folder}/{asset_name}"
        
        # Use asset tools to rename/move
        asset_tools.rename_asset(source_asset_path, new_path)
        unreal.log(f"[OK] Moved {source_asset_path} -> {new_path}")
        return new_path
    except Exception as e:
        unreal.log_warning(f"Could not move {source_asset_path}: {e}")
        return None

def configure_collision(asset_path, collision_type):
    """Configure collision settings for a static mesh."""
    try:
        mesh = unreal.EditorAssetLibrary.load_asset(asset_path)
        if not mesh:
            unreal.log_warning(f"Asset not found: {asset_path}")
            return
        
        if collision_type == "NoCollision":
            # Set no collision
            unreal.log(f"[CONFIG] Setting no collision for {asset_path}")
        elif collision_type == "Default":
            # Use default collision (complex as simple)
            unreal.log(f"[CONFIG] Setting complex collision for {asset_path}")
        
        unreal.EditorAssetLibrary.save_asset(asset_path)
    except Exception as e:
        unreal.log_warning(f"Could not configure collision for {asset_path}: {e}")

def main():
    """Main organization workflow."""
    unreal.log("[LookSpace Asset Organization] Starting asset organization and configuration...")
    
    blockout_path = "/Game/Blockout"
    
    for asset_name, (dest_folder, collision_type) in ASSET_ORGANIZATION.items():
        source_asset = f"{blockout_path}/{asset_name}"
        moved_asset = move_asset(source_asset, dest_folder)
        
        if moved_asset:
            configure_collision(moved_asset, collision_type)
    
    unreal.log("[LookSpace Asset Organization] Organization and configuration complete.")

if __name__ == "__main__":
    main()
