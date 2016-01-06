/// <reference path="../../game.min.js" />

/// <reference path="../CfgPanel/CfgPanel.js" />
/// <reference path="../Util/JQ.js" />
/// <reference path="Component/Cell.js" />
/// <reference path="../Util/util.js" />
/// <reference path="Component/Ball.js" />
/// <reference path="../Util/underscore.js" />
/// <reference path="Component/Layer_GameStart.js" />
/// <reference path="Component/Hand.js" />
/// <reference path="Component/Enemy.js" />
 

var MainLayer = cc.Layer.extend({

    ctor: function () {
        this._super();
        this.init();
        return true;
    },

    init: function () {
        var _this = this;
        GLOBAL_LAYER = this;
        this.bgSprite = null;
        this.car = null;


        var winsize = cc.director.getWinSize();
        this.bgSprite = new Bg();
        this.bgSprite.initWithFile("res/" + window.cityid + "/" + window.cidx + "/bg.jpg");
        this.bgSprite.setPosition(cc.p(winsize.width / 2, winsize.height / 2));
        this.addChild(this.bgSprite);

        this.bgSprite.addCheckPoint(GLOBAL_DATA.CURR_DATA.map);
        this.bgSprite.addBulidingPoint(GLOBAL_DATA.CURR_DATA.building);
        this.bgSprite.addShiftPoint(GLOBAL_DATA.CURR_DATA.shift);

        this.car = new Car();
        
 
        this.car.setPosition(cc.p(GLOBAL_DATA.CURR_DATA.car.x, GLOBAL_DATA.CURR_DATA.car.y));
        this.bgSprite.addChild(this.car,2);

        
        //this.line = cc.Sprite.create("res/line_0.png");
        //this.line.setPosition(cc.p(330,390));
        //this.bgSprite.addChild(this.line);

       

        this.scale = 0.5;

        if (GLOBAL_DATA.is_first_load) {
            var g1Panel = $.ui.create("res/Layer_Guide_1.json");
            this.addChild(g1Panel);
            Layer_Guide_1.init(g1Panel, this);

            var previewImg = cc.Sprite.create("res/" + window.cityid + "/" + window.cidx + "/bg_all.jpg");
 
            previewImg.setPosition(cc.p(winsize.width / 2, winsize.height/2));
            previewImg.setScale(2);
            g1Panel.addChild(previewImg, 10);
            var a1 = cc.delayTime(2);
            var a2 = cc.fadeOut(1);
            var a3 = cc.callFunc(function () {
                previewImg.removeFromParent();
            });
            var seq = cc.sequence(a1, a2, a3);
            previewImg.runAction(seq);

            
        } else {
            _this.zoomIn();
            this.scheduleUpdate();
        }

        this.startLine = cc.Sprite.create("res/start-line.png");
        this.startLine.scale = 0.7;
        this.startLine.opacity = 255;
        this.startLine.setPosition(cc.pAdd(this.car.getPosition(), cc.p(GLOBAL_DATA.CURR_DATA.finnish_line.x, GLOBAL_DATA.CURR_DATA.finnish_line.y)));
        this.bgSprite.addChild(this.startLine,1);
 
        
        Util.playMusic("res/Audio/bg.mp3",1);
       

    },
    zoomIn: function () {
        var _this = this;
        var winsize = cc.director.getWinSize();
        var a = cc.scaleTo(4, 1);
        this.runAction(a);

        var p = this._getDifferPosition();

        var diff_p = cc.p(GLOBAL_DATA.CURR_DATA.car_diff.x, GLOBAL_DATA.CURR_DATA.car_diff.y);
        p = cc.pAdd(p, diff_p);

        var a1 = cc.moveTo(4, p);
        var cb = cc.callFunc(function () {
            _this.chargingPanel = $.ui.create("res/Layer_Charging.json");
            _this.addChild(_this.chargingPanel);
            Layer_Charging.init(_this.chargingPanel, _this);
            _this.startLine.opacity = 0;
            _this.headerPanel = $.ui.create("res/Layer_Header.json");
            _this.addChild(_this.headerPanel);
            Layer_Header.init(_this.headerPanel, _this);
            _this.headerPanel.setPosition(cc.p(0, 5+winsize.height - _this.headerPanel.height));
            _this.car.opacity = 0;
            



            Layer_Charging.goBtn.setVisible(0);
            var percent = 0;
            var chargingInterval= setInterval(function () {
                percent++;
                Layer_Header.progress_e.setPercent(percent);
                Layer_Header.progress_g.setPercent(percent);
                if (percent>=100) {
                    clearInterval(chargingInterval);
                    Layer_Charging.goBtn.setVisible(1);
                    Layer_Charging.Image_l1.setVisible(0);
                    Layer_Charging.Image_l2.setVisible(1);

                    Layer_Charging.chargingTxt.setVisible(1);
                }   
            }, 50);
            
           
        });
        var seq = cc.sequence(a1,cb);
        this.bgSprite.runAction(seq);
    },

    keepCenter:function(){
        this.schedule(this.centerUpdater);
    },
    unkeepCenter: function () {
        this.unschedule(this.centerUpdater);
    },

    _getDifferPosition: function (smooth) {
        var winsize = cc.director.getWinSize();
        var pcenter = cc.p(winsize.width / 2, winsize.height / 2);
        var mapCenter = cc.p(this.bgSprite.width / 2, this.bgSprite.height / 2);

        var diffX = mapCenter.x - this.car.x;
        var diffY = mapCenter.y - this.car.y;



        var _w = (this.bgSprite.width - winsize.width) / 2;
        var _h = (this.bgSprite.height - winsize.height) / 2;

        if (this.car.x < winsize.width / 2) {
            diffX = _w;
        }
        if (this.bgSprite.width - this.car.x < winsize.width / 2) {
            diffX = -_w;
        }

        if (this.car.y < winsize.height / 2) {
            diffY = _h;
        }
        if (this.bgSprite.height - this.car.y < winsize.height / 2) {
            diffY = -_h;
        }

        var p = cc.pAdd(cc.p(diffX, diffY), pcenter);


        if (this.smooth) {

            var __flag = 0;

            if (this.bgSprite.x < p.x && Math.abs(this.bgSprite.x - p.x) > 5) {
                p.x = this.bgSprite.x+1;
                __flag = 1;
            }

            if (this.bgSprite.x > p.x && Math.abs(this.bgSprite.x - p.x) > 5) {
                p.x = this.bgSprite.x - 1;
                __flag = 1;
            }
       

            if (this.bgSprite.y < p.y && Math.abs(this.bgSprite.y - p.y) > 5) {
                p.y = this.bgSprite.y;
                __flag = 1;
            }

            if (this.bgSprite.y > p.y && Math.abs(this.bgSprite.y - p.y) > 5) {
                p.y = this.bgSprite.y - 1;
                __flag = 1;
            }

            if (__flag == 0) {
                this.smooth = 0;
            }
        }
        



        return p;
    },

    centerUpdater: function (dt) {
        var p = this._getDifferPosition(true);
        this.bgSprite.setPosition(p);

    },
    gameOver: function () {
        var _this = this;
        _this.unscheduleUpdate();


        window.setTimeout(function () {
            var gameOverPanel = $.ui.create("res/Layer_Over.json");
            _this.addChild(gameOverPanel);
            Layer_Over.init(gameOverPanel, _this);
            Layer_Over.Text_Mark.setString(window.parseInt(GLOBAL_DATA.Miles)+"");


        }, 1000);
        

         
    },


    
    update: function (dt) {
        var _this = this;
        
    },

    onEnter: function () {
        this._super();
    },

    onExit: function () {
        this._super();
    }

});