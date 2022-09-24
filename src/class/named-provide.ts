/**
 * @author WMXPY
 * @namespace Class
 * @description Named Provide
 */

// eslint-disable-next-line camelcase
import { New_Line_Character } from "@sudoo/marked";
import { MarkedMonacoClassMixinOption } from "./declare";

export const wrapClassForMonacoMixinNamedProvide = (
    moduleName: string,
    variableName: string,
    option: MarkedMonacoClassMixinOption,
): string => {

    const parsedConstructor: string[] = typeof option.constructor === 'string'
        ? [
            `constructor ${option.constructor};`,
        ]
        : option.constructor
            .map((each: string) => {
                return `constructor ${each};`;
            });

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
        `declare module "${moduleName}" {`,
        `export class ${variableName} {`,
        ...parsedConstructor,
        ...parsedStaticExports,
        ...parsedInstanceExports,
        `}`,
        `}`,
    ].join(New_Line_Character);
};
