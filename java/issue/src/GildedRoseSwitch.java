public class GildedRoseSwitch {
    private Item[] items;


    public GildedRoseSwitch(Item[] items) {
        this.items = items;
    }

    public void updateQuality() {
        for (Item item : items) {
         switch (item.name){


             default:
                 item.sellIn = item.sellIn -1;
                 if(item.quality > 0)item.quality = item.quality -1;
                 break;
         }
        }
    }



}
