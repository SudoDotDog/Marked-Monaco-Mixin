/**
 * @author WMXPY
 * @namespace Class
 * @description Inject
 * @override Unit Test
 */

// eslint-disable-next-line camelcase
import { New_Line_Character } from "@sudoo/marked";
import { expect } from "chai";
import * as Chance from "chance";
import { MarkedMonacoClassMixinOption, wrapClassForMonacoMixinInject } from "../../../src";

describe('Given [Inject] helper methods of Class', (): void => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const chance: Chance.Chance = new Chance('class-inject');

    it('should be able to create declare for inject class', (): void => {

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

        const declareString: string = wrapClassForMonacoMixinInject("Test", option);

        expect(declareString).to.be.deep.equal([
            "declare class Test {",
            "constructor (key: string): string;",
            "static staticTestValue: string;",
            "static staticTestMethod: (key: string) => string;",
            "instanceTestValue: string;",
            "instanceTestMethod: (key: string) => string;",
            "}",
        ].join(New_Line_Character));
    });
});
