import org.junit.Test;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.core.Is.is;

public class GildedRoseShould {

    @Test
    public void item_decrement_quality() throws Exception {
        Item anyItem = new Item("anyItem", 20, 2);
        Item [] items = {anyItem};

        GildedRose gildedRose = new GildedRose(items);
        gildedRose.updateQuality();

        assertThat(anyItem.quality, is(1));
    }

    @Test
    public void item_decrement_sellIn() throws Exception {
        Item anyItem = new Item("anyItem", 2, 20);
        Item [] items = {anyItem};

        GildedRose gildedRose = new GildedRose(items);
        gildedRose.updateQuality();

        assertThat(anyItem.sellIn, is(1));
    }

    @Test
    public void quality_item_never_is_negative() throws Exception {
        Item anyItem = new Item("anyItem", 0, 0);
        Item [] items = {anyItem};

        GildedRose gildedRose = new GildedRose(items);
        gildedRose.updateQuality();

        assertThat(anyItem.quality, is(0));
    }

    @Test
    public void once_sell_date_has_passes_quality_degrade_twice_fast() throws Exception {
        Item anyItem = new Item("anyItem", 0, 4);
        Item [] items = {anyItem};

        GildedRose gildedRose = new GildedRose(items);
        gildedRose.updateQuality();

        assertThat(anyItem.quality, is(2));
    }

    @Test
    public void AgedBrie_increment_quality_as_time_passes() throws Exception {
        Item agedBrie = new Item("Aged Brie", 20, 4);
        Item [] items = {agedBrie};

        GildedRose gildedRose = new GildedRose(items);
        gildedRose.updateQuality();

        assertThat(agedBrie.quality, is(5));
    }

    @Test
    public void quality_item_never_more_than_50() throws Exception {
        Item agedBrie = new Item("Aged Brie", 20, 50);
        Item [] items = {agedBrie};

        GildedRose gildedRose = new GildedRose(items);
        gildedRose.updateQuality();

        assertThat(agedBrie.quality, is(50));
    }
}
