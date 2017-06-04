Item = function(name, sellIn,quality) {

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