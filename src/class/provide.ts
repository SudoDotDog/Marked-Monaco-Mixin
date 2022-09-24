/**
 * @author WMXPY
 * @namespace Class
 * @description Provide
 */

// eslint-disable-next-line camelcase
import { New_Line_Character } from "@sudoo/marked";

export const wrapClassForMonacoMixinProvide = (
    moduleName: string,
    exports: Record<string, string>,
): string => {

    const parsedExports: string[] = Object
        .entries(exports)
        .map(([key, value]: [string, string]) => {
            return `declare const ${key}: ${value};`;
        });

    return [
        `declare module "${moduleName}" {`,
        ...parsedExports,
        `}`,
    ].join(New_Line_Character);
};
