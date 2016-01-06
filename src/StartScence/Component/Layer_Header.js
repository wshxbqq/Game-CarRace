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
 

var Layer_Header = {};

Layer_Header.init = function (node, parentLayer) {

 
    
    Layer_Header.layerNode = node;

    Layer_Header.parentLayer = parentLayer;

    Layer_Header.panelBg = $(node, "Panel_Color");

    Layer_Header.progress_e = $(node, "LoadingBar_e").items[0];

    Layer_Header.progress_g = $(node, "LoadingBar_g").items[0];;

    Layer_Header.speedLabel = $(node, "Text_Speed").items[0];;

    Layer_Header.milesLabel = $(node, "Text_Miles").items[0];;

    Layer_Header.Image_Lighting = $(node, "Image_Lighting").items[0];;
   
    Layer_Header.progress_g.setPercent(0);
    Layer_Header.progress_e.setPercent(0);

    var a1 = cc.fadeOut(0.5);
    var a2 = cc.fadeIn(0.5);
    var seq = cc.sequence(a1, a2);
    var rep = cc.repeatForever(seq);


    Layer_Header.Image_Lighting.runAction(rep);

 
   
 

};
 
 
 
 