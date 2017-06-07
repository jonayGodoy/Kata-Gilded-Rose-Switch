
class Item{
    constructor(name, sellIn, quality){
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }

    updateItem(){
        this.updateSellIn();
        this.updateQuality();
    };

    updateSellIn(){
        this.sellIn = this.sellIn -1
    };

    updateQuality(){
        if(this.quality > 0){
            if(this.sellIn <= 0){
                this.quality = this.quality -2;
            }else{this.quality = this.quality -1;}
        }
    };

    print(){
        return this.name + ", " + this.sellIn + ", " + this.quality;
    };

    getName(){
     return this.name;
    };

    getSellIn(){
        return this.sellIn;
    };

    setSellIn(newSellIn){
        this.sellIn = newSellIn;
    };

    getQuality(){
        return this.quality;
    };

    setQuality(newQuality){
        this.quality = newQuality;
    };
}


module.exports = Item;