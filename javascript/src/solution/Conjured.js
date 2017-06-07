const Item = require('./Item');

let qualityKey;

class Conjured extends Item{

    constructor(name, sellIn, quality){
        super(name,sellIn, quality);
        qualityKey = Object.getOwnPropertySymbols(this)[2];
    }

    updateQuality(){
        this[qualityKey] = this[qualityKey] - 2;
    };
}

module.exports = Conjured;