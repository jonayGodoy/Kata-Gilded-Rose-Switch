package solution;


public class AgeBrie extends Item {


    AgeBrie(String name, int sellIn, int quality) {
        super(name, sellIn, quality);
    }

    @Override
    protected void updateSellIn() {
        super.updateSellIn();
    }

    @Override
    protected void updateQuality() {
        if (quality < 50) {
            quality = quality + 1;
        }
    }
}
