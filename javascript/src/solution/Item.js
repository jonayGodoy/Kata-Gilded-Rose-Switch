const FactoryItem = (() => {

    const nameKey = Symbol('name');
    const sellInKey = Symbol('sellIn');
    const qualityKey = Symbol('sellIn');

    return class Item{
        constructor(name, sellIn, quality){
            this[nameKey] = name;
            this[sellInKey] = sellIn;
            this[qualityKey] = quality;
        }

        updateItem(){
            this.updateSellIn();
            this.updateQuality();
        };

        updateSellIn(){
            this[sellInKey] =  this[sellInKey] -1
        };

        updateQuality(){
            if( this[qualityKey] > 0){
                if(this[sellInKey] <= 0){
                    this[qualityKey] =  this[qualityKey] -2;
                }else{ this[qualityKey] =  this[qualityKey] -1;}
            }
        };

        print(){
            return this[nameKey] + ", " +  this[sellInKey] + ", " +  this[qualityKey];
        };

        getName(){
         return this[nameKey];
        };

        getSellIn(){
            return  this[sellInKey];
        };

        setSellIn(newSellIn){
            this[sellInKey] = newSellIn;
        };

        getQuality(){
            return  this[qualityKey];
        };

        setQuality(newQuality){
            this[qualityKey] = newQuality;
        };
    }
});

module.exports = FactoryItem();