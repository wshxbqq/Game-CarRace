/// <reference path="../../../cocos2d-js-v3.6.js" />
/// <reference path="../../GLOBAL_DATA.js" />
/// <reference path="../../Util/JQ/JQ.js" />
/// <reference path="../../Util/underscore.js" />
/// <reference path="../../Util/util.js" />
 
var Bg = cc.Sprite.extend({
     
    ctor: function () {
        this._super();
        this.init();
 

        return true;

    },
    init: function () {
       // this.initWithFile("res/bg.jpg");
    },
    addCheckPoint: function (data) {
        this.checkPoints = data;
    },
    addBulidingPoint: function (data) {
        this.bulidingPoints = data;
        for (var i in data) {
            var bulid = data[i];
            
            bulid.sprite = cc.Sprite.create("res/" + window.cityid + "/" + window.cidx + "/panel/" + i + ".png");
            bulid.sprite.setPosition(cc.pAdd(cc.p(bulid.x, bulid.y), cc.p(bulid.diff.x, bulid.diff.y)));
            bulid.sprite.setScale(0);
            this.addChild(bulid.sprite);

        }
    },
    addShiftPoint: function (data) {
        

        for (var i in data) {
            var shiftSprite = cc.Sprite.create("res/s" + data[i].mode + ".png");
            shiftSprite.setOpacity(0);
            shiftSprite.setPosition(cc.p(data[i].x, data[i].y));
            shiftSprite.setRotation(90 * data[i].d);
            data[i].sprite = shiftSprite;
            GLOBAL_LAYER.bgSprite.addChild(shiftSprite);

        }

        this.shiftPoints = data;

    }
 
});