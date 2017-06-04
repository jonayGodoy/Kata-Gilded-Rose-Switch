let Item = require('./Item');

function SulfurasFactory(name,sellIn) {
    function Sulfuras(){
        let quality = 80;
        Item.call(this, name, sellIn, quality);

        this.updateSellIn = function(){
            /* nothing pattern template */
        };

        this.updateQuality = function(){
            /* nothing pattern template */
        };

    }
    Sulfuras.prototype = Object.create(Item.prototype);
    Sulfuras.prototype.constructor = Sulfuras;

    return new Sulfuras(name,sellIn);
}

module.exports = SulfurasFactory;