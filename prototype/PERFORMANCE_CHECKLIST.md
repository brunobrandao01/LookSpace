# Performance Checklist para Protótipo

- Ativar `Nanite` apenas em meshes estáticos que se beneficiem da densidade.
- Habilitar `Virtual Texturing` para terrain/planet surfaces pesadas.
- Usar impostors para objetos distantes (stars, small rocks).
- Ajustar Lumen settings em `Project Settings` para reduzir custo em previews.
- Configurar scalability profiles (Low/Medium/High/Production) e presets para captura com Movie Render Queue.
