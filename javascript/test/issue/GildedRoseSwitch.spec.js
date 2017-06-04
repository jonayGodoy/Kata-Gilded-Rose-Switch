'use strict';

let should = require('chai').should();
let expect = require('chai').expect;

let GildedRoseSwitch = require('../../src/issue/GildedRoseSwitch');
let Item = require('../../src/issue/Item');

describe("Gilded Rose",function(){

    it('item decrement quality', function () {
        let item = new Item("anyItem",20,2);

        let items = {item};
        new GildedRoseSwitch(items).updateQuality();

        item.getQuality().should.equal(1);
    });

    it('item decrement sellIn', function () {
        let item = new Item("anyItem",2,20);

        let items = {item};
        new GildedRoseSwitch(items).updateQuality();

        item.getSellIn().should.equal(1);
    });

    it('quality item never is negative', function () {
        let item = new Item("anyItem",0,0);

        let items = {item};
        new GildedRoseSwitch(items).updateQuality();

        item.getQuality().should.equal(0);
    });

    it('once sell date has passes quality degrade twice fast', function () {
        let item = new Item("anyItem",0,4);

        let items = {item};
        new GildedRoseSwitch(items).updateQuality();

        item.getQuality().should.equal(2);
    });
});