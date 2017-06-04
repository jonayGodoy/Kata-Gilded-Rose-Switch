package issue;

class GildedRoseSwitch {
    private Item[] items;

     GildedRoseSwitch(Item[] items) {
        this.items = items;
    }

     void updateQuality() {
        for (Item item : items) {
         switch (item.getName()){
             case "Aged Brie":
                if(item.getSellIn() >= 0){
                    if(item.getQuality() < 50) {item.setQuality(item.getQuality() + 1);}
                }else{
                    updateItemGenericQuality(item);
                }
                 break;
             case "Sulfuras, Hand of Ragnaros":
                 if(item.getQuality() != 80){
                     item.setQuality(80);
                 }
                 item.setSellIn(item.getSellIn()-1);
                 break;
             case "Backstage passes to a TAFKAL80ETC concert":
                 item.setSellIn(item.getSellIn()-1);

                 if(item.getSellIn() <= 0){
                     item.setQuality(0);
                 }else {
                     if (item.getSellIn() <= 5) {
                         if (item.getQuality() < 50) {
                             item.setQuality(item.getQuality() + 3);
                         }
                     } else if (item.getSellIn() <= 10) {
                         if (item.getQuality() < 50) {
                             item.setQuality(item.getQuality() + 2);
                         }
                     }
                 }
                 break;
             default:
                 item.setSellIn(item.getSellIn()-1);
                 updateItemGenericQuality(item);
                 break;
         }
        }
    }

    private void updateItemGenericQuality(Item item) {
        if(item.getQuality() > 0){
            if(item.getSellIn() <= 0){
                item.setQuality(item.getQuality()-2);
                }else{item.setQuality(item.getQuality()-1);}
        }
    }
}
