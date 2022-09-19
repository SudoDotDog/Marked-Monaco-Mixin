/**
 * @author WMXPY
 * @namespace MarkedMonacoMixin
 * @description Inject
 */

// eslint-disable-next-line camelcase
import { New_Line_Character } from "@sudoo/marked";

export const wrapDeclarationForInject = (
    variableName: string,
    declaration: string,
): string => {

    return [
        `declare const ${variableName}: {`,
        declaration,
        `}`,
    ].join(New_Line_Character);
};
