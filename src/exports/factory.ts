/**
 * @author WMXPY
 * @namespace Exports
 * @description Factory
 */

import { IMarkedMonacoManager, LanguageServerDefaults, MarkedMonacoMixin } from "@sudoo/marked-monaco";
import { IMarkedMonacoMixinFactory } from "../declare";
import { wrapExportsForMonacoMixinInject } from "./inject";
import { wrapExportsForMonacoMixinProvide } from "./provide";

export class MarkedMonacoExportsMixinFactory implements IMarkedMonacoMixinFactory {

    public static fromExports(
        moduleName: string,
        exports: Record<string, string>,
    ): MarkedMonacoExportsMixinFactory {

        return new MarkedMonacoExportsMixinFactory(moduleName, exports);
    }

    private readonly _moduleName: string;
    private readonly _exports: Record<string, string>;

    private constructor(
        moduleName: string,
        exports: Record<string, string>,
    ) {

        this._moduleName = moduleName;
        this._exports = exports;
    }

    public createInjectMixin(
        variableName: string,
        declareFileName: string = `inject-${this._moduleName}.d.ts`,
    ): MarkedMonacoMixin {

        return (manager: IMarkedMonacoManager): void => {

            const languageServer: LanguageServerDefaults
                = manager.getLanguageServerDefaults();

            languageServer.addExtraLib(
                wrapExportsForMonacoMixinInject(variableName, this._exports),
                declareFileName,
            );
        };
    }

    public createProvideMixin(
        moduleName: string,
        declareFileName: string = `provide-${this._moduleName}.d.ts`,
    ): MarkedMonacoMixin {

        return (manager: IMarkedMonacoManager): void => {

            const languageServer: LanguageServerDefaults
                = manager.getLanguageServerDefaults();

            languageServer.addExtraLib(
                wrapExportsForMonacoMixinProvide(moduleName, this._exports),
                declareFileName,
            );
        };
    }
}
