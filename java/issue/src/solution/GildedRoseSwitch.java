package solution;

class GildedRoseSwitch {
    private Item[] items;

     GildedRoseSwitch(Item[] items) {
        this.items = items;
    }

     void updateQuality() {
        for (Item item : items) {item.updateItem();}
    }


}
