/// <reference path="../../Util/JQ/Component/device.js" />
/// <reference path="../../Util/JQ/Component/encrypt.js" />
/// <reference path="../../Util/JQ/Component/net.js" />
/// <reference path="../../Util/JQ/Component/sql.js" />
/// <reference path="../../Util/JQ/Component/ui.js" />
/// <reference path="../../Util/JQ/Component/util.js" />
/// <reference path="../../Util/JQ/Component/wx.js" />
/// <reference path="../../Util/JQ/JQ.js" />
/// <reference path="../../Util/underscore.js" />
/// <reference path="../../GLOBAL_DATA.js" />
/// <reference path="../../Util/util.js" />
 

var Layer_Charging = {};

Layer_Charging.init = function (node, parentLayer) {

 
    
    Layer_Charging.layerNode = node;

    Layer_Charging.parentLayer = parentLayer;

    

    Layer_Charging.panelBg = $(node, "Panel_Color").items[0];

    Layer_Charging.Image_Car = $(node, "Image_Car").items[0];
    Layer_Charging.Image_l1 = $(node, "Image_l1").items[0];
    Layer_Charging.Image_l2 = $(node, "Image_l2").items[0];

    Layer_Charging.Image_Toom = $(node, "Image_Toom").items[0];
    Layer_Charging.Image_Toom1 = $(node, "Image_Toom1").items[0];
    Layer_Charging.Image_Cover1 = $(node, "Image_Cover1").items[0];
    Layer_Charging.Panel_Base = $(node, "Panel_Base").items[0];
    

    Layer_Charging.Image_l2.setVisible(0);

    Layer_Charging.chargingTxt = $(node, "Text_Charging").items[0];

    Layer_Charging.goBtn = $(node, "Button_Go").items[0];
    Layer_Charging.goBtn.setVisible(0);


    Layer_Charging.chargingTxt.setVisible(0);

    if (GLOBAL_DATA.CURR_DATA.startChargingDiff) {
        var _pdiff = cc.p(GLOBAL_DATA.CURR_DATA.startChargingDiff.x, GLOBAL_DATA.CURR_DATA.startChargingDiff.y);
        Layer_Charging.Panel_Base.setPosition(cc.pAdd(_pdiff, Layer_Charging.Panel_Base.getPosition()));
    }

   
   

    $(node, "Button_Go").bind("touchend", function (e) {
        GLOBAL_LAYER.keepCenter();
        GLOBAL_LAYER.car.go();
        Layer_Charging.layerNode.removeFromParent();

        GLOBAL_LAYER.btnPanel = $.ui.create("res/Layer_Btn.json");
        GLOBAL_LAYER.addChild(GLOBAL_LAYER.btnPanel);
        Layer_Btn.init(GLOBAL_LAYER.btnPanel, GLOBAL_LAYER);

        //GLOBAL_LAYER.line.removeFromParent();
        Util.playEffic("res/Audio/engine_gas.mp3");

        Layer_Header.Image_Lighting.removeFromParent();

        GLOBAL_LAYER.car.opacity = 255;
        GLOBAL_LAYER.smooth = 1;

        GLOBAL_LAYER.startLine.opacity = 255;


    });
    

};
 
 
 
 