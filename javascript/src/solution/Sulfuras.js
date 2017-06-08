const Item = require('./Item');

class Sulfuras extends Item{

    constructor(name, sellIn){
        super(name,sellIn, 80);

        let updateSellInKey = Object.getOwnPropertySymbols(this)[3];
        let updateQualityKey = Object.getOwnPropertySymbols(this)[4];

        this[updateSellInKey] = function updateSellIn(){
            /* nothing pattern template */
        };

        this[updateQualityKey] = function updateQuality(){
            /* nothing pattern template */
        };
    }
}


module.exports = Sulfuras;