using UnrealBuildTool;
using System.Collections.Generic;

public class LookSpaceGameplay : ModuleRules
{
    public LookSpaceGameplay(ReadOnlyTargetRules Target) : base(Target)
    {
        PCHUsage = PCHUsageMode.UseExplicitOrSharedPCHs;
        PublicDependencyModuleNames.AddRange(new string[] { "Core", "Engine", "InputCore" });
    }
}
