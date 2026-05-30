# Asset Import Workflow

Objetivo: descrever como importar os placeholders e protótipos para o projeto Unreal de forma reprodutível.

1) Preparar assets
- Use `tools/prepare_asset_import.ps1` para copiar placeholders para `unreal/Content/Import/Blockout`.

2) Import no Editor
- Abra o `unreal/LookSpaceProject.uproject` no Editor.
- No Content Browser: Add -> Import to /Game/Blockout e selecione os arquivos da pasta `unreal/Content/Import/Blockout`.
- Para cada mesh configure: Combine Meshes: false; Generate Lightmap UVs: true (para blockouts simples usar luz móvel).

3) Organização após import
- Mantenha importados em `Content/Blockout/` e mova para `Content/Environments/Earth`, `Content/Spaceships`, `Content/Cameras` conforme apropriado.

4) Metadata
- Marque assets de blockout com tags `Blockout` e `Prototype` para filtragem rápida.
