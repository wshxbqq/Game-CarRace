/// <reference path="../../../cocos2d-js-v3.6.js" />
/// <reference path="../../GLOBAL_DATA.js" />
/// <reference path="../../Util/JQ/JQ.js" />
/// <reference path="../../Util/underscore.js" />
/// <reference path="../../Util/util.js" />
 
var Car = cc.Sprite.extend({
     
    ctor: function () {
        this._super();
        this.init();
        
        this.direction = 0;
        this.speed = GLOBAL_DATA.GAS_SPEED;
        this.currentMode = 0;
        this.steps = 0;

        this.gas = 100;
        this.ele = 100;
        window.car = this;
        return true;

    },
    setMode: function (mode) {
        switch (mode) {
            case 0:
                this.speed = GLOBAL_DATA.GAS_SPEED;
                this.currentMode = 0;
                ; break;
            case 1:
                this.speed = GLOBAL_DATA.E_SPEED;
                this.currentMode = 1;
                ; break;
        }
    },
    go: function () {
        this.scheduleUpdate();

    },
    init: function () {
        this.initWithFile("res/car.png");
        this.txtPanel = cc.Sprite.create("res/txtPanel.png");
        this.txtPanel.setOpacity(0);
        
        this.txt = ccui.Text.create("牛肉禁止", "", 50);
        this.txt.setColor(cc.color(0, 0, 0));
        this.txt.setPosition(cc.p(this.txtPanel.width / 2, this.txtPanel.height/2));
        this.txt.setOpacity(0);

        this.txtPanel.addChild(this.txt);
        GLOBAL_LAYER.bgSprite.addChild(this.txtPanel);

        
        
    },
    update: function (dt) { 
        var _this = this;
        _this.steps++;
        var cp = this.getHitedCheckPoint();
        if (cp) {
            if (cp.disable) {

            } else {
                cp.disable = 1;
                setTimeout(function () {
                    cp.disable = 0;
                }, 1000);

                this.x = cp.x;
                this.y = cp.y;

                if (cp.t > 0) {
                    this.runAction(cc.rotateBy(0.1, 45));
                   
                    this.direction++;
                    this.direction = this.direction % 8;
                } else {
                    this.direction--;
                    if (this.direction < 0) {
                        this.direction = 7;
                    }
                    this.runAction(cc.rotateBy(0.1, -45));
                   
                }
             
            }
        }

        var cp_bulid = this.getHitedBulidingPoint();
        if (cp_bulid) {
            if (cp_bulid.disable) {

            } else {
                cp_bulid.disable = 1;
                setTimeout(function () {
                    cp_bulid.disable = 0;
                }, 2000);

                
                var a1 = cc.scaleTo(0.2, 1.1);
                var a2 = cc.scaleTo(0.2, 0.9);
                var a3 = cc.scaleTo(0.2, 1);
                var a4 = cc.delayTime(2);
                var a5 = cc.callFunc(function (target) {
                    target.setScale(0);

                });
                var seq = cc.sequence(a1,a2,a3,a4,a5);
                cp_bulid.sprite.runAction(seq.clone());
                 

            }
        }

        var cp_shift = this.getHitedShiftPoint();
        if (cp_shift) {
            if (cp_shift.disable) {

            } else {
                cp_shift.disable = 1;
                setTimeout(function () {
                    cp_shift.disable = 0;
                }, 3000);
                GLOBAL_DATA.currentMode = cp_shift.mode;
                 

            }
        }


        var cp_far_shift = this.getDistantShiftPoint();
        if (cp_far_shift) {
            if (cp_far_shift.disable_far) {

            } else {
                cp_far_shift.disable_far = 1;
                setTimeout(function () {
                    cp_far_shift.disable_far = 0;
                    cp_far_shift.sprite.setOpacity(0);
                }, 3000);
                cp_far_shift.sprite.setOpacity(255);


            }
        }




        GLOBAL_DATA.Miles += this.speed / GLOBAL_DATA.milesDivision;

        var __a45 = Math.atan2(1, 1);
       
        this.txtPanel.setPosition(cc.pAdd(this.getPosition(),cc.p(0,50)));
        switch (this.direction) {
            case 0:
                this.y += this.speed;
                ;break;
            case 1:
                this.x += __a45 * this.speed;
                this.y += __a45 * this.speed;
                ; break;
            case 2:
                this.x += this.speed;
                break;
            case 3:
                this.x += __a45 * this.speed;
                this.y -= __a45 * this.speed;
                ; break;
            case 4:
                this.y -= this.speed;
                ; break;
            case 5:
                this.x -= __a45 * this.speed;
                this.y -= __a45 * this.speed;
                ; break;
            case 6:
                this.x -= this.speed;
                ; break;
            case 7:
                this.x -= __a45 * this.speed;
                this.y += __a45 * this.speed;
                ; break;

        }
        if (this.speed == 2) {
            Layer_Header.speedLabel.setString("130");
        } else {
            Layer_Header.speedLabel.setString("202");
        }
        
        Layer_Header.milesLabel.setString(window.parseInt(GLOBAL_DATA.Miles));


        if (GLOBAL_DATA.currentMode === _this.currentMode) {
            if (_this.currentMode === 0) {
                this.gas -= GLOBAL_DATA.costingNormal;
                if (1) {
                    var perc = (this.gas / 100).toFixed(2) * 100;
                    Layer_Header.progress_g.setPercent(perc);
                }
            }

            if (_this.currentMode === 1) {
                this.ele -= GLOBAL_DATA.costingNormal;
                if (1) {
                    var perc1 = (this.ele / 100).toFixed(2) * 100;
                    Layer_Header.progress_e.setPercent(perc1);
                }
            }
        } else {

            if (_this.currentMode === 0) {
                this.gas -= GLOBAL_DATA.costingWrong;
                if (1) {
                    var perc = (this.gas / 100).toFixed(2) * 100;
                    Layer_Header.progress_g.setPercent(perc);
                }
            }

            if (_this.currentMode === 1) {
                this.ele -= GLOBAL_DATA.costingWrong;
                if (1) {
                    var perc1 = (this.ele / 100).toFixed(2) * 100;
                    Layer_Header.progress_e.setPercent(perc1);
                }
            }

        }

        if (GLOBAL_LAYER.car.gas <= 0) {
            this.setMode(1);
            
        }
        if (GLOBAL_LAYER.car.ele <= 0) {
            this.setMode(0);
        }

        if (GLOBAL_LAYER.car.gas <= 0 && GLOBAL_LAYER.car.ele <= 0) {
            
            _this.unscheduleUpdate();
            GLOBAL_LAYER.gameOver();

        }
       

    },
    getHitedCheckPoint: function () {
        for (var i in GLOBAL_LAYER.bgSprite.checkPoints) {
            var ckp = GLOBAL_LAYER.bgSprite.checkPoints[i];
            var distance = cc.pDistance(this.getPosition(), cc.p(ckp.x, ckp.y));
            if (distance < 10) {
                return ckp;
            }
        }

    },
    getHitedBulidingPoint: function () {
        for (var i in GLOBAL_LAYER.bgSprite.bulidingPoints) {
            var ckp = GLOBAL_LAYER.bgSprite.bulidingPoints[i];
            var distance = cc.pDistance(this.getPosition(), cc.p(ckp.x, ckp.y));
            if (distance < 200 && ckp.sprite.getScale() == 0) {
                return ckp;
            }
        }

    },
    getHitedShiftPoint: function () {
        for (var i in GLOBAL_LAYER.bgSprite.shiftPoints) {
            var ckp = GLOBAL_LAYER.bgSprite.shiftPoints[i];
            var distance = cc.pDistance(this.getPosition(), cc.p(ckp.x, ckp.y));
            if (distance < 15) {
                return ckp;
            }
        }
    },
    getDistantShiftPoint: function () {
        for (var i in GLOBAL_LAYER.bgSprite.shiftPoints) {
            var ckp = GLOBAL_LAYER.bgSprite.shiftPoints[i];
            var distance = cc.pDistance(this.getPosition(), cc.p(ckp.x, ckp.y));
            if (distance < 200 && ckp.sprite.getOpacity()==0) {
                return ckp;
            }
        }
    },
    
 
});