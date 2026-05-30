# Final Startup Guide — LookSpace UE5 Prototype

Passos rápidos para começar com o projeto Unreal protótipo LookSpace.

1) Pré-requisitos
- Instale o Epic Games Launcher e Unreal Engine 5 (recomenda-se UE 5.1 LTS).
- Instale Visual Studio com workload "Game development with C++" se pretende compilar C++.
- (Opcional) Instale Git LFS (`git lfs install`) para assets grandes.

2) Gerar arquivos de projeto (uma vez)
Abra um terminal PowerShell na raiz do repositório e execute:

```powershell
tools\generate_ue_project.ps1 -UProjectPath "unreal\LookSpaceProject.uproject" -InitGitLfs
```

Isso tentará localizar `GenerateProjectFiles.bat` na instalação do Unreal e criar a `.sln` do Visual Studio. Se o script não localizar o gerador, rode manualmente `GenerateProjectFiles.bat` da sua instalação do Engine.

3) Gerar solução e compilar (Windows)
- Abra o arquivo `.sln` gerado em Visual Studio.
- Build -> Build Solution.

4) Preparar e importar assets blockout
- Copie os placeholders para a pasta de import com o helper:

```powershell
tools\prepare_asset_import.ps1 -SourceAssets "Assets\Blockout" -TargetImport "unreal\Content\Import\Blockout"
```

- No Editor: Content Browser -> Add -> Import to /Game/Blockout e selecione os arquivos em `unreal\Content\Import\Blockout`.
- Para cada mesh, defina `Generate Lightmap UVs` se desejar baking; para protótipo é aceitável usar iluminação móvel.

5) Abrir o projeto no Editor
- Duplo clique em `unreal\LookSpaceProject.uproject` ou abra a partir do Epic Games Launcher/Editor.

6) Carregar cena protótipo
- No Content Browser, navegue para `Content/Levels/SCENE_001` e abra o level criado.
- Se ainda não houver um level salvo, crie um novo Level e siga `unreal/LEVEL_SETUP.md` para estruturar sublevels e streaming.

7) Iniciar Sequencer e câmeras
- Importe `camera_marker.obj` e use-o como referência para posicionar `CineCameraActors`.
- Crie um Level Sequence em `Content/Cinematics/SCENE_001` e adicione os CineCameraActors como tracks.
- Use `Movie Render Queue` para render final com EXR e AOVs.

8) Plugins recomendados
- Niagara
- Movie Render Queue
- Virtual Texturing
- Nanite
- Lumen

9) Repetir geração de project files
- Se atualizar `unreal/LookSpaceProject.uproject` ou mudar módulos, execute novamente:

```powershell
tools\generate_ue_project.ps1 -UProjectPath "unreal\LookSpaceProject.uproject"
```

10) Dicas para produção AAA
- Use `git lfs track` para `*.uasset`, `*.umap`, `*.exr`.
- Mantenha assets de alta resolução fora do Git; use um asset server ou LFS.
- Separe conteúdo por streaming volumes e HLOD para performance.

---

Se quiser, posso agora:
- Executar `tools\generate_ue_project.ps1` (já rodado nesta sessão — pode repetir se desejar),
- Executar `tools\prepare_asset_import.ps1` (já executado),
- Ou gerar exemplos adicionais (Level template .umap não-binarizável aqui; recomendo criar dentro do Editor e eu forneço o passo-a-passo).