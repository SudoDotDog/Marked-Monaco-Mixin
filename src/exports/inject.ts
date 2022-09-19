/**
 * @author WMXPY
 * @namespace Exports
 * @description Inject
 */

// eslint-disable-next-line camelcase
import { New_Line_Character } from "@sudoo/marked";

export const wrapExportsForInject = (
    variableName: string,
    exports: Record<string, string>,
): string => {

    const parsedExports: string[] = Object
        .entries(exports)
        .map(([key, value]: [string, string]) => {
            return `${key}: ${value},`;
        });

    return [
        `declare const ${variableName}: {`,
        ...parsedExports,
        `}`,
    ].join(New_Line_Character);
};
