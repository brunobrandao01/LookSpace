using UnrealBuildTool;
using System.Collections.Generic;

public class LookSpaceCore : ModuleRules
{
    public LookSpaceCore(ReadOnlyTargetRules Target) : base(Target)
    {
        PCHUsage = PCHUsageMode.UseExplicitOrSharedPCHs;
        PublicDependencyModuleNames.AddRange(new string[] { "Core", "Engine" });
    }
}
