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
 

var Layer_Btn = {};

Layer_Btn.init = function (node, parentLayer) {

 
    
    Layer_Btn.layerNode = node;

    Layer_Btn.parentLayer = parentLayer;

 

    Layer_Btn.btn_g = $(node, "Button_g");
    Layer_Btn.btn_e = $(node, "Button_e");

    Layer_Btn.btn_g_item = Layer_Btn.btn_g.items[0];
    Layer_Btn.btn_e_item = Layer_Btn.btn_e.items[0];

    Layer_Btn.btn_g.bind("touchend", function (e) {
        GLOBAL_LAYER.car.currentMode = 0;
        GLOBAL_LAYER.car.speed = GLOBAL_DATA.GAS_SPEED;

        if (GLOBAL_LAYER.car.gas<=0) {
            GLOBAL_LAYER.car.currentMode = 1;
        }

        Util.playEffic("res/Audio/engine_gas.mp3");
        console.log("car model change to : 0");
    });

    Layer_Btn.btn_e.bind("touchend", function (e) {
        GLOBAL_LAYER.car.currentMode = 1;
        GLOBAL_LAYER.car.speed = GLOBAL_DATA.E_SPEED;
        if (GLOBAL_LAYER.car.ele <= 0) {
            GLOBAL_LAYER.car.currentMode = 0;
        }
        Util.playEffic("res/Audio/engine_ele.mp3");
        console.log("car model change to : 1");
    });
    
};
 
 
 
 