package solution;

class Conjured extends Item {

    Conjured(String name, int sellIn, int quality) {
        super(name, sellIn, quality);
    }

    @Override
    protected void updateQuality() {
        quality = quality -2;
    }
}
