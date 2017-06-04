package solution;

public class Item {

    private String name;

    protected int sellIn;

    protected int quality;

    Item(String name, int sellIn, int quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }

    void updateItem(){
        updateSellIn();
        updateQuality();
    }

    protected void updateSellIn() {
        sellIn = sellIn -1;
    }

    protected void updateQuality() {
        if(quality > 0){
            if(sellIn <= 0){
                quality = quality -2;
            }else{
                quality = quality -1;
            }
        }
    }

    @Override
    public String toString() {
        return this.name + ", " + this.sellIn + ", " + this.quality;
    }

    String getName() {
        return name;
    }

    int getSellIn() {
        return sellIn;
    }

    int getQuality() {
        return quality;
    }

}