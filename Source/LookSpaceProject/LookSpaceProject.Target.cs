using UnrealBuildTool;
using System.Collections.Generic;

public class LookSpaceProjectTarget : TargetRules
{
    public LookSpaceProjectTarget(TargetInfo Target) : base(Target)
    {
        Type = TargetType.Game;
        DefaultBuildSettings = BuildSettingsVersion.V2;
        ExtraModuleNames.Add("LookSpaceProject");
    }
}
