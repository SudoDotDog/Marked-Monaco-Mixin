/**
 * @author WMXPY
 * @namespace Exports
 * @description Factory
 */

import { IMarkedMonacoManager, LanguageServerDefaults, MarkedMonacoMixin } from "@sudoo/marked-monaco";
import { wrapExportsForInject } from "./inject";
import { wrapExportsForProvide } from "./provide";

export class MarkedMonacoExportsMixinFactory {

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

    public createInjectMixin(variableName: string): MarkedMonacoMixin {

        return (manager: IMarkedMonacoManager): void => {

            const languageServer: LanguageServerDefaults
                = manager.getLanguageServerDefaults();

            languageServer.addExtraLib(
                wrapExportsForInject(variableName, this._exports),
                `inject-${this._moduleName}.d.ts`,
            );
        };
    }

    public createProvideMixin(moduleName: string): MarkedMonacoMixin {

        return (manager: IMarkedMonacoManager): void => {

            const languageServer: LanguageServerDefaults
                = manager.getLanguageServerDefaults();

            languageServer.addExtraLib(
                wrapExportsForProvide(moduleName, this._exports),
                `provide-${this._moduleName}.d.ts`,
            );
        };
    }
}
