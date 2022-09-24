/**
 * @author WMXPY
 * @namespace Class
 * @description Factory
 */

import { IMarkedMonacoManager, LanguageServerDefaults, MarkedMonacoMixin } from "@sudoo/marked-monaco";
import { IMarkedMonacoMixinFactory } from "../declare";
import { MarkedMonacoClassMixinOption } from "./declare";
import { wrapClassForMonacoMixinDefaultProvide } from "./default-provide";
import { wrapClassForMonacoMixinInject } from "./inject";
import { wrapClassForMonacoMixinNamedProvide } from "./named-provide";

export class MarkedMonacoClassMixinFactory implements IMarkedMonacoMixinFactory {

    public static fromElements(
        moduleName: string,
        option: MarkedMonacoClassMixinOption,
    ): MarkedMonacoClassMixinFactory {

        return new MarkedMonacoClassMixinFactory(moduleName, option);
    }

    private readonly _moduleName: string;
    private readonly _option: MarkedMonacoClassMixinOption;

    private constructor(
        moduleName: string,
        option: MarkedMonacoClassMixinOption,
    ) {

        this._moduleName = moduleName;
        this._option = option;
    }

    public createInjectMixin(
        variableName: string,
        declareFileName: string = `inject-${this._moduleName}.d.ts`,
    ): MarkedMonacoMixin {

        return (manager: IMarkedMonacoManager): void => {

            const languageServer: LanguageServerDefaults
                = manager.getLanguageServerDefaults();

            languageServer.addExtraLib(
                wrapClassForMonacoMixinInject(variableName, this._option),
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
                wrapClassForMonacoMixinDefaultProvide(moduleName, this._option),
                declareFileName,
            );
        };
    }

    public createNamedProvideMixin(
        moduleName: string,
        variableName: string,
        declareFileName: string = `provide-${this._moduleName}.d.ts`,
    ): MarkedMonacoMixin {

        return (manager: IMarkedMonacoManager): void => {

            const languageServer: LanguageServerDefaults
                = manager.getLanguageServerDefaults();

            languageServer.addExtraLib(
                wrapClassForMonacoMixinNamedProvide(
                    moduleName,
                    variableName,
                    this._option,
                ),
                declareFileName,
            );
        };
    }
}
