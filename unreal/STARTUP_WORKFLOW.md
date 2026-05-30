# Unreal Engine Startup Workflow — Passo a passo

1) Verificar Epic Games Launcher
- Caminho comum: `C:\Program Files\Epic Games\Launcher\Portal\Binaries\Win64\EpicGamesLauncher.exe`.
- Se não presente, instruções para download: https://www.epicgames.com/store/pt-BR/download

2) Criar projeto UE5
- Abrir Epic Games Launcher → Unreal Engine → Library → Launch → New Project → Blank (C++ or BP).
- Salve o `.uproject` em `unreal/LookSpaceProject/`.

3) Plugins recomendados
- `Niagara` (FX)
- `Movie Render Queue` (render cinematics)
- `Virtual Texturing` (streaming)
- `Nanite` e `Lumen` (habilitados nas configurações do projeto)

4) Configurações de render recomendadas
- Engine Scalability: set to Production for Movie Render or a balanced setting for interactive preview.
- r.DefaultFeature.Lumen=True, r.Nanite=True, r.VolumetricFog=True (ajustar conforme plataforma)

5) VS Code integration
- Para Blueprints-only: VS Code é útil para text assets and docs.
- Para C++ project: gerar arquivos de solução e usar Visual Studio (recomendado) ou configurar MSVC toolchain.

6) Git e LFS
- Initialize `git lfs` and track large assets: `git lfs track "*.uasset" "*.umap" "*.exr"`.
