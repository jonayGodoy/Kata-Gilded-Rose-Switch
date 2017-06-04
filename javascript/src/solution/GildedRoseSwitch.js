GildedRoseSwitch = function(items){

    this.updateQuality =  function() {
        for (let index in items) {
            let item = items[index];
            item.updateItem();
        }
    };
};

module.exports = GildedRoseSwitch;