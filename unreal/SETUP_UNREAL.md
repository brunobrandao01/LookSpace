# Setup Unreal Engine 5 - LookSpace

Passos para preparar Unreal Engine 5 e integrar com o repositório LookSpace.

1. Verificar Epic Games Launcher
   - No Windows, confirme se o executável existe em:
     - `C:\Program Files\Epic Games\Launcher\Portal\Binaries\Win64\EpicGamesLauncher.exe`
     - se não existir, instale via https://www.epicgames.com/store/pt-BR/download
   - Alternativa: verifique se o atalho está em `C:\ProgramData\Microsoft\Windows\Start Menu\Programs`.

2. Instalar Unreal Engine 5
   - Abrir Epic Games Launcher → Library → Instalar versão UE5 LTS recomendada.
   - Selecionar plataformas alvo (Windows, etc.) e componentes (Editor, Starter Content).

3. Criar Project dentro do repositório
   - Criar pasta `unreal/LookSpaceProject/` e inicializar projetando um `Blank` C++/Blueprint project.
   - Manter arquivos binários fora do repositório; versionar apenas `.uproject`, configurações, e assets de baixa-resolução para protótipo.

4. VS Code e ferramentas
   - Instalar `Visual Studio` para toolchain C++ (se projeto C++), ou usar apenas Blueprints se preferir.
   - Habilitar `Editor Utility Widgets` e `Movie Render Queue` para produção cinematográfica.

5. Integração Git
   - Adicionar `.gitignore` adequado para Unreal (Binaries, Intermediate, Saved).
   - Usar LFS para grandes assets: `git lfs install` e track `*.uasset`, `*.umap` conforme necessário.

6. Pipeline inicial
   - Keep a single cinematic level `unreal/levels/cinematic_scene_001` with streaming sublevels.
   - Exporte referências de assets e keep high-level documentation em `docs/UNREAL_INTEGRATION.md`.
