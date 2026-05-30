using UnrealBuildTool;
using System.Collections.Generic;

public class LookSpaceVisuals : ModuleRules
{
    public LookSpaceVisuals(ReadOnlyTargetRules Target) : base(Target)
    {
        PCHUsage = PCHUsageMode.UseExplicitOrSharedPCHs;
        PublicDependencyModuleNames.AddRange(new string[] { "Core", "Engine" });
    }
}
