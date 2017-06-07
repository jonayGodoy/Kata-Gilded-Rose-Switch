const Item = require('./Item');

class Backstage extends Item{

    constructor(name, sellIn, quality){
        super(name,sellIn, quality)
    }

    updateSellIn(){
        super.updateSellIn();
        if(this.sellIn <= 0){
            this.quality = 0;
        }
    };

    updateQuality(){
        if(this.sellIn <= 0){
            this.sellIn = 0;
        }else {
            if (this.sellIn <= 5) {
                if (this.quality < 50) {
                    this.quality = this.quality +3;
                }
            } else if (this.sellIn <= 10) {
                if (this.quality < 50) {
                    this.quality = this.quality +2;
                }
            }
        }
    };
}

module.exports = Backstage;