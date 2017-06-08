const Item = require('./Item');

class Conjured extends Item{

    constructor(name, sellIn, quality){
        super(name,sellIn, quality);
        let qualityKey = Object.getOwnPropertySymbols(this)[2];
        let updateQualityKey = Object.getOwnPropertySymbols(this)[4];

        this[updateQualityKey] = function updateQuality(){
         //   Item[updateQualityKey]();

            this[qualityKey] = this[qualityKey] - 2;
        };
    }
}

module.exports = Conjured;