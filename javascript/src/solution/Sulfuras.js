let Item = require('./Item');

class Sulfuras extends Item{

    constructor(name, sellIn){
        super(name,sellIn, 80)
    }

    updateSellIn(){
    /* nothing pattern template */
    };

    updateQuality(){
    /* nothing pattern template */
    };
}



module.exports = Sulfuras;