const Item = require('./Item');

class Backstage extends Item {
    constructor(name, sellIn, quality) {
        super(name, sellIn, quality);
        let sellInKey = Object.getOwnPropertySymbols(this)[1];
        let qualityKey = Object.getOwnPropertySymbols(this)[2];

        let updateSellInKey = Object.getOwnPropertySymbols(this)[3];
        let updateQualityKey = Object.getOwnPropertySymbols(this)[4];

        this[updateSellInKey] = function updateSellIn() {
            if (this[sellInKey] <= 0) {
                this[qualityKey] = 0;
            }
        };

        this[updateQualityKey] = function updateQuality() {
            if (this[sellInKey] <= 0) {
                this[sellInKey] = 0;
            } else {
                if (this[sellInKey] <= 5) {
                    if (this[qualityKey] < 50) {
                        this[qualityKey] = this[qualityKey] + 3;
                    }
                } else if (this[sellInKey] <= 10) {
                    if (this[qualityKey] < 50) {
                        this[qualityKey] = this[qualityKey] + 2;
                    }
                }
            }
        };
    }
}

module.exports = Backstage;