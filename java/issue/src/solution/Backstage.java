package solution;

class Backstage extends Item {

    Backstage(String name, int sellIn, int quality) {
        super(name, sellIn, quality);
    }

    @Override
    protected void updateSellIn() {
        super.updateSellIn();
        if(sellIn <= 0){
            quality = 0;
        }
    }

    @Override
    protected void updateQuality() {
        if(sellIn <= 0){
            sellIn = 0;
        }else {
            if (sellIn <= 5) {
                if (quality < 50) {
                   quality = quality +3;
                }
            } else if (sellIn <= 10) {
                if (quality < 50) {
                    quality = quality +2;
                }
            }
        }
    }
}
