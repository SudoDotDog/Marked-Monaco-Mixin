/**
 * @author WMXPY
 * @namespace MarkedMonacoMixin
 * @description Provide
 */

// eslint-disable-next-line camelcase
import { New_Line_Character } from "@sudoo/marked";

export const wrapDeclarationForProvide = (
    moduleName: string,
    declaration: string,
): string => {

    return [
        `declare module "${moduleName}" {`,
        declaration,
        `}`,
    ].join(New_Line_Character);
};
