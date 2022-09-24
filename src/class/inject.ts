/**
 * @author WMXPY
 * @namespace Class
 * @description Inject
 */

// eslint-disable-next-line camelcase
import { New_Line_Character } from "@sudoo/marked";
import { MarkedMonacoClassMixinOption } from "./declare";

export const wrapClassForMonacoMixinInject = (
    variableName: string,
    option: MarkedMonacoClassMixinOption,
): string => {

    const parsedStaticExports: string[] = Object
        .entries(option.staticElements)
        .map(([key, value]: [string, string]) => {
            return `static ${key}: ${value};`;
        });

    const parsedInstanceExports: string[] = Object
        .entries(option.instanceElements)
        .map(([key, value]: [string, string]) => {
            return `${key}: ${value};`;
        });

    return [
        `declare class ${variableName}: {`,
        `constructor ${option.constructor};`,
        ...parsedStaticExports,
        ...parsedInstanceExports,
        `}`,
    ].join(New_Line_Character);
};
