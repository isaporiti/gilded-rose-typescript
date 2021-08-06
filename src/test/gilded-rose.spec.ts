import { Item, GildedRose } from '../gilded-rose';
import {items, printResult} from "./golden-master-text-to-string";

describe('Gilded Rose', function () {

    // it('should foo', function() {
    //     const gildedRose: GildedRose = new GildedRose([ new Item('foo', 0, 0) ]);
    //     const items = gildedRose.updateQuality();
    //     expect(items[0].name).toEqual('fixme');
    // });

    it('compare old and new', () => {

        const gildedRose = new GildedRose(items);
        let s = printResult(gildedRose);
        console.log(s);
        expect(s).toMatchSnapshot();
    })

});
