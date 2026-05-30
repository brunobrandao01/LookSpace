using UnrealBuildTool;
using System.Collections.Generic;

public class LookSpaceShips : ModuleRules
{
    public LookSpaceShips(ReadOnlyTargetRules Target) : base(Target)
    {
        PCHUsage = PCHUsageMode.UseExplicitOrSharedPCHs;
        PublicDependencyModuleNames.AddRange(new string[] { "Core", "Engine" });
    }
}
