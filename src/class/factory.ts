/**
 * @author WMXPY
 * @namespace Class
 * @description Factory
 */

import { IMarkedMonacoManager, LanguageServerDefaults, MarkedMonacoMixin } from "@sudoo/marked-monaco";
import { IMarkedMonacoMixinFactory } from "../declare";
import { wrapClassForMonacoMixinInject } from "./inject";
import { wrapClassForMonacoMixinProvide } from "./provide";

export class MarkedMonacoClassMixinFactory implements IMarkedMonacoMixinFactory {

    public static fromElements(
        moduleName: string,
        elements: Record<string, string>,
    ): MarkedMonacoClassMixinFactory {

        return new MarkedMonacoClassMixinFactory(moduleName, elements);
    }

    private readonly _moduleName: string;
    private readonly _elements: Record<string, string>;

    private constructor(
        moduleName: string,
        elements: Record<string, string>,
    ) {

        this._moduleName = moduleName;
        this._elements = elements;
    }

    public createInjectMixin(
        variableName: string,
        declareFileName: string = `inject-${this._moduleName}.d.ts`,
    ): MarkedMonacoMixin {

        return (manager: IMarkedMonacoManager): void => {

            const languageServer: LanguageServerDefaults
                = manager.getLanguageServerDefaults();

            languageServer.addExtraLib(
                wrapClassForMonacoMixinInject(variableName, this._elements),
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
                wrapClassForMonacoMixinProvide(moduleName, this._elements),
                declareFileName,
            );
        };
    }
}
