#include "LookSpaceCore.h"
#include "Modules/ModuleManager.h"

class FLookSpaceCoreModule : public IModuleInterface
{
public:
    virtual void StartupModule() override {}
    virtual void ShutdownModule() override {}
};

IMPLEMENT_MODULE(FLookSpaceCoreModule, LookSpaceCore)
