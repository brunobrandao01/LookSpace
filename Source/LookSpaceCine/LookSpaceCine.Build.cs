using UnrealBuildTool;
using System.Collections.Generic;

public class LookSpaceCine : ModuleRules
{
    public LookSpaceCine(ReadOnlyTargetRules Target) : base(Target)
    {
        PCHUsage = PCHUsageMode.UseExplicitOrSharedPCHs;
        PublicDependencyModuleNames.AddRange(new string[] { "Core", "Engine", "MovieScene", "LevelSequence" });
    }
}
