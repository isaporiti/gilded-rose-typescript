import { Item, GildedRose } from '../gilded-rose';

describe('Gilded Rose', function () {

    it('should foo', function() {
        const gildedRose: GildedRose = new GildedRose([ new Item('foo', 0, 0) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).toEqual('fixme');
    });

});