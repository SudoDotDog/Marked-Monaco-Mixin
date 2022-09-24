/**
 * @author WMXPY
 * @namespace Class
 * @description Named Provide
 * @override Unit Test
 */

// eslint-disable-next-line camelcase
import { New_Line_Character } from "@sudoo/marked";
import { expect } from "chai";
import * as Chance from "chance";
import { MarkedMonacoClassMixinOption } from "../../../src";
import { wrapClassForMonacoMixinNamedProvide } from "../../../src/class/named-provide";

describe('Given [Named Provide] helper methods of Class', (): void => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const chance: Chance.Chance = new Chance('class-named-provide');

    it('should be able to create declare for named provide class', (): void => {

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

        const declareString: string = wrapClassForMonacoMixinNamedProvide("Test", "ClassName", option);

        expect(declareString).to.be.deep.equal([
            `declare module "Test" {`,
            "export class ClassName {",
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
