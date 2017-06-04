public class GildedRoseSwitch {
    private Item[] items;


    public GildedRoseSwitch(Item[] items) {
        this.items = items;
    }

    public void updateQuality() {
        for (Item item : items) {
         switch (item.getName()){
             case "Aged Brie":
                if(item.getSellIn() >= 0){
                    if(item.getQuality() < 50) {item.setQuality(item.getQuality() + 1);}
                }else{
                    updateItemGenericQuality(item);
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
            }else{
                item.setQuality(item.getQuality()-1);
            }
        }
    }


}
