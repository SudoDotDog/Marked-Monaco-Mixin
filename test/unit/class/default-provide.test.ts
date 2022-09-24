/**
 * @author WMXPY
 * @namespace Class
 * @description Provide
 * @override Unit Test
 */

// eslint-disable-next-line camelcase
import { New_Line_Character } from "@sudoo/marked";
import { expect } from "chai";
import * as Chance from "chance";
import { MarkedMonacoClassMixinOption, wrapClassForMonacoMixinDefaultProvide } from "../../../src";

describe('Given [Provide] helper methods of Class', (): void => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const chance: Chance.Chance = new Chance('class-provide');

    it('should be able to create declare for provide class', (): void => {

        const option: MarkedMonacoClassMixinOption = {

            constructor: "(key: string): string",
            staticElements: {
                staticTestValue: "string",
                staticTestMethod: "(key: string) => string",
            },
            instanceElements: {
                instanceTestValue: "string",
                instanceTestMethod: "(key: string) => string",
            },
        };

        const declareString: string = wrapClassForMonacoMixinDefaultProvide("Test", option);

        expect(declareString).to.be.deep.equal([
            `declare module "Test" {`,
            "export default class {",
            "constructor (key: string): string;",
            "static staticTestValue: string;",
            "static staticTestMethod: (key: string) => string;",
            "instanceTestValue: string;",
            "instanceTestMethod: (key: string) => string;",
            "}",
            "}",
        ].join(New_Line_Character));
    });
});
