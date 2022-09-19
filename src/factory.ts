/**
 * @author WMXPY
 * @namespace MarkedMonacoMixin
 * @description Factory
 */

import { IMarkedMonacoManager, LanguageServerDefaults, MarkedMonacoMixin } from "@sudoo/marked-monaco";

export class MarkedMonacoMixinFactory {

    public static fromDeclaration(
        moduleName: string,
        declaration: string,
    ): MarkedMonacoMixinFactory {

        return new MarkedMonacoMixinFactory(moduleName, declaration);
    }

    private readonly _moduleName: string;
    private readonly _declaration: string;

    private constructor(moduleName: string, declaration: string) {

        this._moduleName = moduleName;
        this._declaration = declaration;
    }

    public createInjectMixin(variableName: string): MarkedMonacoMixin {

        return (manager: IMarkedMonacoManager) => {

            const languageServer: LanguageServerDefaults
                = manager.getLanguageServerDefaults();

            languageServer.addExtraLib(
                this._declaration,
                variableName,
            );

            return;
        };
    }

    public createProvideMixin(moduleName: string): MarkedMonacoMixin {

        return (manager: IMarkedMonacoManager) => {

            const languageServer: LanguageServerDefaults
                = manager.getLanguageServerDefaults();

            languageServer.addExtraLib(
                this._declaration,
                moduleName,
            );

            return;
        };
    }
}
