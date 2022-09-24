/**
 * @author WMXPY
 * @namespace MarkedMonacoMixin
 * @description Declare
 */

import { MarkedMonacoMixin } from "@sudoo/marked-monaco";

export interface IMarkedMonacoMixinFactory {

    createInjectMixin(variableName: string): MarkedMonacoMixin;
    createProvideMixin(moduleName: string): MarkedMonacoMixin;
}
