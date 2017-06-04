Item = function(name, sellIn,quality) {

    this.updateItem = function(){
        this.updateSellIn();
        this.updateQuality();
    };

    this.updateSellIn = function(){
        sellIn = sellIn -1
    };

    this.updateQuality = function(){
        if(quality > 0){
            if(sellIn <= 0){
                quality = quality -2;
            }else{quality = quality -1;}
        }
    };

    this.print =  function(){
        return name + ", " + sellIn + ", " + quality;
    };

    this.getName = function(){
        return name;
    };

    this.getSellIn = function(){
        return sellIn;
    };

    this.setSellIn = function(newSellIn){
        sellIn = newSellIn;
    };

    this.getQuality = function(){
        return quality;
    };

    this.setQuality = function(newQuality){
        quality = newQuality;
    };

};

module.exports = Item;