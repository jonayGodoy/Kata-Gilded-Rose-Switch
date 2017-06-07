const Item = require('./Item');

let sellInKey;
let qualityKey;

class Backstage extends Item{

    constructor(name, sellIn, quality){
        super(name,sellIn, quality)
        sellInKey = Object.getOwnPropertySymbols(this)[1];
        qualityKey = Object.getOwnPropertySymbols(this)[2];
    }

    updateSellIn(){
        super.updateSellIn();
        if(this[sellInKey] <= 0){
            this[qualityKey] = 0;
        }
    };

    updateQuality(){
        if(this[sellInKey] <= 0){
            this[sellInKey] = 0;
        }else {
            if (this[sellInKey] <= 5) {
                if (this[qualityKey] < 50) {
                    this[qualityKey] = this[qualityKey] +3;
                }
            } else if (this[sellInKey] <= 10) {
                if (this[qualityKey] < 50) {
                    this[qualityKey] = this[qualityKey] +2;
                }
            }
        }
    };
}

module.exports = Backstage;