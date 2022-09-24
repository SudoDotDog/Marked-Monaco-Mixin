/**
 * @author WMXPY
 * @namespace Class
 * @description Declare
 */

export type MarkedMonacoClassMixinOption = {

    readonly constructor: string | string[];
    readonly staticElements: Record<string, string>;
    readonly instanceElements: Record<string, string>;
};
