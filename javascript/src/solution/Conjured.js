const Item = require('./Item');

class Conjured extends Item{
    constructor(name, sellIn, quality){
        super(name,sellIn, quality);
        let updateQualityKey = Object.getOwnPropertySymbols(this)[4];

        const updateQualityParent = this[updateQualityKey].bind(this);

        this[updateQualityKey] = function updateQuality(){
            /* example super() with method private */
            updateQualityParent();
            updateQualityParent();
        };
    }
}

module.exports = Conjured;