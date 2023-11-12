import { beforeAll, describe, test } from "@jest/globals";
import { configure } from "approvals";
import { JestReporter } from "approvals/lib/Providers/Jest/JestReporter";
import { verify, verifyAsJson } from "approvals/lib/Providers/Jest/JestApprovals";
import { verifyAllCombinations3 } from "approvals/lib/Providers/Jest/CombinationApprovals";
import { GildedRose } from "../src/gilded-rose";
import { Item } from "../src/Item";

describe("ApprovalTests", () => {
    beforeAll(() => {
        configure({
            reporters: [new JestReporter()],
        });
    });

    test.skip("SimpleVerify", () => {
        const gildedRose = new GildedRose([new Item("foo", 0, 0)]);
        gildedRose.updateQuality();
        verify(gildedRose.items[0].toString());
    });

    test.skip("JsonVerify", () => {
        const gildedRose = new GildedRose([new Item("foo", 0, 0)]);
        gildedRose.updateQuality();

        verifyAsJson(gildedRose.items[0]);
    });

    test("Combination", () => {
        const names = [
            "foo",
            "Aged Brie",
            "Backstage passes to a TAFKAL80ETC concert",
            "Sulfuras, Hand of Ragnaros",
        ];
        const sellIns = [0, 10, 11, 5, 6];
        const qualities = [0, 1, 49, 50, 51];

        verifyAllCombinations3(doUpdateQuality, names, sellIns, qualities);
    });

    const doUpdateQuality = (name: string, sellIn: number, quality: number) => {
        const gildedRose = new GildedRose([new Item(name, sellIn, quality)]);
        gildedRose.updateQuality();
        return gildedRose.items[0].toString();
    }
});
